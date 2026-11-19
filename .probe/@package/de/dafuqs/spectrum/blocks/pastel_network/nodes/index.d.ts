import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ModelResourceLocation } from "@package/net/minecraft/client/resources/model";
import { $UUID, $List, $UUID_, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $Predicate, $Supplier } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Holder$Reference } from "@package/net/minecraft/core";
import { $FilterConfigurable } from "@package/de/dafuqs/spectrum/api/block";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record } from "@package/java/lang";
import { $ServerPastelNetwork } from "@package/de/dafuqs/spectrum/blocks/pastel_network/network";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $Item_, $DyeColor_, $Item, $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $PastelPayloadType } from "@package/de/dafuqs/spectrum/blocks/pastel_network/payloads";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PastelUpgradeSignature_, $PastelUpgradeSignature, $PastelUpgradeable } from "@package/de/dafuqs/spectrum/api/pastel_network";

declare module "@package/de/dafuqs/spectrum/blocks/pastel_network/nodes" {
    export class $PastelNodeType extends $Enum<$PastelNodeType> implements $StringRepresentable {
        getSerializedName(): string;
        usesFilters(): boolean;
        hasOuterRing(): boolean;
        static values(): $PastelNodeType[];
        static valueOf(arg0: string): $PastelNodeType;
        getRemappedEnumConstantName(): string;
        static CONNECTION: $PastelNodeType;
        static STORAGE: $PastelNodeType;
        static SENDER: $PastelNodeType;
        static PROVIDER: $PastelNodeType;
        static GATHER: $PastelNodeType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PastelNodeType}.
     */
    export type $PastelNodeType_ = "connection" | "storage" | "provider" | "sender" | "gather";
    export class $PastelNodeBlockEntity extends $BlockEntity implements $FilterConfigurable, $MenuProvider, $PastelUpgradeable {
        setFilterItem(arg0: number, arg1: $ItemStack_): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        canConnect(arg0: $PastelNodeBlockEntity, arg1: $PastelNodeBlockEntity): boolean;
        applyUpgrade(arg0: $Holder$Reference<$PastelUpgradeSignature_>): boolean;
        getRedstoneRing(): ($PastelUpgradeSignature) | undefined;
        getOuterRing(): ($PastelUpgradeSignature) | undefined;
        updateUpgrades(): void;
        getInnerRing(): ($PastelUpgradeSignature) | undefined;
        tryRemoveUpgrade(): $ItemStack;
        setOnlyDenyListTags(arg0: boolean): void;
        getTransferDurationTicks(): number;
        getTransferCooldownTicks(): number;
        getRedstoneAlphaMult(): number;
        getSupportedPayloads(): $Set<$Supplier<$PastelPayloadType>>;
        getTransferFilterTo(arg0: $PastelNodeBlockEntity): $Predicate<$ItemStack>;
        markTriggerTransfer(): void;
        getPastelNetworkColor(): number;
        changeConnectionState(arg0: $PastelNodeBlockEntity$ConnectionState_): void;
        updateInClientWorld(): void;
        getItemFilters(): $List<$ItemStack>;
        onlyDenyListTags(): boolean;
        getDrawnSlots(): number;
        getFilteredTags(): $Object2BooleanMap<$TagKey<$Item>>;
        getCreationStamp(): number;
        getUnderway(arg0: $ResourceKey_<$PastelPayloadType>): number;
        setSpinTicks(arg0: number): void;
        cooldownExceededTo(arg0: $PastelNodeBlockEntity): boolean;
        transferMultiplier(): number;
        setNetworkUUID(arg0: $UUID_): void;
        getServerNetwork(): ($ServerPastelNetwork) | undefined;
        notifySensor(): void;
        markTriggered(): void;
        markTransferred(arg0: boolean): void;
        getNodeBase(): $PastelNodeBases$PastelNodeBase;
        addUnderway(arg0: $ResourceKey_<$PastelPayloadType>, arg1: number): void;
        isTriggerTransfer(): boolean;
        connectToNearbyNodes(arg0: $Entity): void;
        markLamp(): void;
        markLit(): void;
        isSensor(): boolean;
        markSensor(): void;
        getFilterRows(): number;
        isEnabled(): boolean;
        getState(): $PastelNodeBlockEntity$ConnectionState;
        setColor(arg0: ($DyeColor_) | undefined, arg1: $Entity): boolean;
        getDisplayName(): $Component;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PastelNodeBlockEntity): void;
        getNodeType(): $PastelNodeType;
        applySignature(arg0: $PastelUpgradeSignature_): void;
        getColor(): ($DyeColor) | undefined;
        getNodeId(): $UUID;
        onBroken(): void;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        updateTagFilteringItems(): void;
        acceptsItem(arg0: $Item_): boolean;
        getSlotsPerRow(): number;
        addTagFilteringItem(arg0: $ItemStack_): boolean;
        clearFilters(): void;
        hasEmptyFilter(): boolean;
        apply(arg0: $PastelUpgradeSignature_, arg1: $PastelUpgradeSignature_): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        blockState: $BlockState;
        level: $Level;
        static MAX_FILTER_SLOTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static SLOTS_PER_ROW: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        static DEFAULT_FILTER_SLOT_ROWS: number;
        static LOGGER: $Logger;
        customPersistentData: $CompoundTag;
        static RANGE: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get redstoneRing(): ($PastelUpgradeSignature) | undefined;
        get outerRing(): ($PastelUpgradeSignature) | undefined;
        get innerRing(): ($PastelUpgradeSignature) | undefined;
        get transferDurationTicks(): number;
        get transferCooldownTicks(): number;
        get redstoneAlphaMult(): number;
        get supportedPayloads(): $Set<$Supplier<$PastelPayloadType>>;
        get pastelNetworkColor(): number;
        get itemFilters(): $List<$ItemStack>;
        get drawnSlots(): number;
        get filteredTags(): $Object2BooleanMap<$TagKey<$Item>>;
        get creationStamp(): number;
        set spinTicks(value: number);
        set networkUUID(value: $UUID_);
        get serverNetwork(): ($ServerPastelNetwork) | undefined;
        get nodeBase(): $PastelNodeBases$PastelNodeBase;
        get triggerTransfer(): boolean;
        get sensor(): boolean;
        get filterRows(): number;
        get enabled(): boolean;
        get state(): $PastelNodeBlockEntity$ConnectionState;
        get displayName(): $Component;
        get nodeType(): $PastelNodeType;
        get nodeId(): $UUID;
        get slotsPerRow(): number;
    }
    export class $PastelNodeBases$PastelNodeBase extends $Record {
        getModelLocation(): $ModelResourceLocation;
        location(): $ResourceLocation;
        constructor(location: $ResourceLocation_);
        get modelLocation(): $ModelResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $PastelNodeBases$PastelNodeBase}.
     */
    export type $PastelNodeBases$PastelNodeBase_ = { location?: $ResourceLocation_,  } | [location?: $ResourceLocation_, ];
    export class $PastelNodeBlockEntity$ConnectionState extends $Enum<$PastelNodeBlockEntity$ConnectionState> {
        static values(): $PastelNodeBlockEntity$ConnectionState[];
        static valueOf(arg0: string): $PastelNodeBlockEntity$ConnectionState;
        static DISCONNECTED: $PastelNodeBlockEntity$ConnectionState;
        static ACTIVE: $PastelNodeBlockEntity$ConnectionState;
        static INACTIVE: $PastelNodeBlockEntity$ConnectionState;
        static CONNECTED: $PastelNodeBlockEntity$ConnectionState;
    }
    /**
     * Values that may be interpreted as {@link $PastelNodeBlockEntity$ConnectionState}.
     */
    export type $PastelNodeBlockEntity$ConnectionState_ = "disconnected" | "connected" | "active" | "inactive";
}
