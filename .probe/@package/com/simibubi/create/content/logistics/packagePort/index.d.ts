import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $MenuProvider, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/packagePort" {
    export class $PackagePortTarget {
        register(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        setup(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        be(arg0: $LevelAccessor, arg1: $BlockPos_): $BlockEntity;
        "export"(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean): boolean;
        canSupport(arg0: $BlockEntity): boolean;
        getExactTargetLocation(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): $Vec3;
        getIcon(): $ItemStack;
        deregister(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        depositImmediately(): boolean;
        static CODEC: $Codec<$PackagePortTarget>;
        relativePos: $BlockPos;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortTarget>;
        constructor(arg0: $BlockPos_);
        get icon(): $ItemStack;
    }
    export interface $PackagePortTargetType extends RegistryMarked<RegistryTypes.CreatePackagePortTargetTypeTag, RegistryTypes.CreatePackagePortTargetType> {}
    export class $PackagePortTargetType {
    }
    export interface $PackagePortTargetType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortTarget>;
        codec(): $MapCodec<$PackagePortTarget>;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortTargetType}.
     */
    export type $PackagePortTargetType_ = RegistryTypes.CreatePackagePortTargetType;
    export class $PackagePortBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Clearable {
        use(arg0: $Player): $ItemInteractionResult;
        isBackedUp(): boolean;
        getDisplayName(): $Component;
        drop(arg0: $ItemStack_): void;
        getFilterString(): string;
        clearContent(): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getComparatorOutput(): number;
        filterChanged(): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        acceptsPackages: boolean;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $SmartInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        target: $PackagePortTarget;
        worldPosition: $BlockPos;
        addressFilter: string;
        static LOGGER: $Logger;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get backedUp(): boolean;
        get displayName(): $Component;
        get filterString(): string;
        get comparatorOutput(): number;
    }
}
