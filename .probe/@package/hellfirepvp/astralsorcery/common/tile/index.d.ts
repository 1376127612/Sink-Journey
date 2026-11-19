import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $Codec } from "@package/com/mojang/serialization";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $ResearchTier } from "@package/hellfirepvp/astralsorcery/common/research";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $UUID_, $Map, $Set } from "@package/java/util";
import { $StoredLumenDisplayTooltip } from "@package/hellfirepvp/astralsorcery/common/util/tooltip";
import { $StarlightTransmissionPacket_ } from "@package/hellfirepvp/astralsorcery/common/starlight/transmission";
import { $ForwardingStarlightReceiverNode, $ForwardingStarlightReceiverNode$ReceiverTile } from "@package/hellfirepvp/astralsorcery/common/tile/network";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $AltarCraftingInput, $ActiveAltarRecipe, $AltarRecipe } from "@package/hellfirepvp/astralsorcery/common/recipe/altar";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $InfusionRecipe, $ActiveInfusionRecipe, $InfusionRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe/infusion";
import { $Lumen, $LumenStack, $Lumen_ } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $Enum } from "@package/java/lang";
import { $TileEntityTick, $TileEntityNetwork, $TileEntityLumenDisplay, $TileDataOwned, $TileEntityNetwork$Data, $TileEntityTick$Data, $TileEntitySynchronized$Data } from "@package/hellfirepvp/astralsorcery/common/tile/base";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AttunementRecipe$Active } from "@package/hellfirepvp/astralsorcery/common/recipe/attunement";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $InventoryStackList, $InventoryView, $FilteredInventoryView } from "@package/hellfirepvp/astralsorcery/common/util/inventory";
import { $ContainerAltar$Type } from "@package/hellfirepvp/astralsorcery/common/container";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LumenStackList, $LumenHandlerView } from "@package/hellfirepvp/astralsorcery/common/lumen/capability";
import { $Vector3, $ObserverRegistryObject } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $FluidContainerList, $FluidTankView } from "@package/hellfirepvp/astralsorcery/common/util/tank";
export * as network from "@package/hellfirepvp/astralsorcery/common/tile/network";
export * as base from "@package/hellfirepvp/astralsorcery/common/tile/base";

declare module "@package/hellfirepvp/astralsorcery/common/tile" {
    export class $TileLumenCrystallizer extends $TileEntityTick<$TileLumenCrystallizer$Data> implements $TileEntityLumenDisplay {
        breakCatalyst(): void;
        getDisplayComponentIdentifier(): $UUID;
        getDisplayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        self<T extends $BlockEntity>(): T;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static KEY_SAVE_DATA: string;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get displayComponentIdentifier(): $UUID;
        get displayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
    }
    export class $TileAttunementAltar extends $TileEntityTick<$TileAttunementAltar$Data> {
        finishActiveRecipe(): void;
        canPlayConstellationEffects(arg0: $Level_): boolean;
        blockState: $BlockState;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        prevActivationTick: number;
        activationTick: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        animate: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        tesrLocked: boolean;
        static KEY_SAVE_DATA: string;
        static LOGGER: $Logger;
        static MAX_START_ANIMATION_SPIN: number;
        static MAX_START_ANIMATION_TICK: number;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $TileChalice$LiquidDrawInstance {
        playLiquidDrawEffect(arg0: $Level_, arg1: $Vector3, arg2: $FluidStack_): void;
        playLiquidDrawEffect(arg0: $Level_, arg1: $Supplier_<$Vector3>, arg2: $FluidStack_, arg3: number, arg4: number): void;
        consumeLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_, arg3: boolean): boolean;
        getChalices(): $Set<$BlockPos>;
        update(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_): void;
        static newInstance(): $TileChalice$LiquidDrawInstance;
        static CODEC: $Codec<$TileChalice$LiquidDrawInstance>;
        get chalices(): $Set<$BlockPos>;
    }
    export class $TileAltar extends $TileEntityNetwork<$ForwardingStarlightReceiverNode, $TileAltar$Data> implements $ForwardingStarlightReceiverNode$ReceiverTile, $TileEntityLumenDisplay {
        static getOuterRelaySlots(): $List<number>;
        getDisplayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        receiveStarlight(arg0: $ServerLevel, arg1: $StarlightTransmissionPacket_): void;
        findMatchingRecipe(arg0: $Level_, arg1: $UUID_ | null): ($RecipeHolder<$AltarRecipe>) | undefined;
        static getRelayGridOffsets(): $Map<number, $BlockPos>;
        startCrafting(arg0: $RecipeHolder_<$AltarRecipe>, arg1: $UUID_): void;
        createInput(arg0: $Level_, arg1: $UUID_): $AltarCraftingInput;
        abortCrafting(): void;
        static getInnerRelaySlots(): $List<number>;
        getDisplayComponentIdentifier(): $UUID;
        self<T extends $BlockEntity>(): T;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static KEY_SAVE_DATA: string;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        static get outerRelaySlots(): $List<number>;
        get displayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        static get relayGridOffsets(): $Map<number, $BlockPos>;
        static get innerRelaySlots(): $List<number>;
        get displayComponentIdentifier(): $UUID;
    }
    export class $TileLumenArray$Data extends $TileEntityTick$Data implements $TileDataOwned {
        getLumenHandler(): $LumenHandlerView;
        getLumenFilledPercentage(): number;
        setOwnerId(arg0: $UUID_): void;
        getOwnerId(): $UUID;
        getInventory(): $FilteredInventoryView;
        getContainedFluid(): $FluidStack;
        getFluidTank(): $FluidTankView;
        hasOwner(): boolean;
        self<T extends $TileEntitySynchronized$Data>(): T;
        getOwner(arg0: $MinecraftServer): ($ServerPlayer) | undefined;
        getOwner(arg0: $ServerLevel): ($ServerPlayer) | undefined;
        isOwner(arg0: $UUID_): boolean;
        isOwner(arg0: $Player): boolean;
        static CODEC: $Codec<$TileLumenArray$Data>;
        static TANK_CAPACITY: number;
        static LUMEN_TANK_CAPACITY: number;
        get lumenHandler(): $LumenHandlerView;
        get lumenFilledPercentage(): number;
        get inventory(): $FilteredInventoryView;
        get containedFluid(): $FluidStack;
        get fluidTank(): $FluidTankView;
    }
    export class $TileAttunementAltar$Data extends $TileEntityTick$Data {
        getActiveRecipe(): ($AttunementRecipe$Active<never, never>) | undefined;
        setActiveConstellation(arg0: $BaseConstellation_ | null): void;
        setActiveRecipe(arg0: $AttunementRecipe$Active<never, never> | null): void;
        getActiveConstellation(): ($BaseConstellation) | undefined;
        static CODEC: $Codec<$TileAttunementAltar$Data>;
    }
    export class $TileAltar$AltarType extends $Enum<$TileAltar$AltarType> implements $StringRepresentable {
        getCollisionShape(): $VoxelShape;
        getSerializedName(): string;
        isThisLaterOrEqual(arg0: $TileAltar$AltarType_): boolean;
        isThisLater(arg0: $TileAltar$AltarType_): boolean;
        getRequiredStructure(): $ObserverRegistryObject;
        getAltarItem(): $ItemStack;
        getRequiredTier(): $ResearchTier;
        static values(): $TileAltar$AltarType[];
        static valueOf(arg0: string): $TileAltar$AltarType;
        getShape(): $VoxelShape;
        getContainerType(): $ContainerAltar$Type;
        getRemappedEnumConstantName(): string;
        static RADIANCE: $TileAltar$AltarType;
        static CODEC: $Codec<$TileAltar$AltarType>;
        static RESONANCE: $TileAltar$AltarType;
        static ILLUMINATION: $TileAltar$AltarType;
        static LUMINANCE: $TileAltar$AltarType;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TileAltar$AltarType>;
        get collisionShape(): $VoxelShape;
        get serializedName(): string;
        get requiredStructure(): $ObserverRegistryObject;
        get altarItem(): $ItemStack;
        get requiredTier(): $ResearchTier;
        get shape(): $VoxelShape;
        get containerType(): $ContainerAltar$Type;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TileAltar$AltarType}.
     */
    export type $TileAltar$AltarType_ = "illumination" | "resonance" | "luminance" | "radiance";
    export class $TileInfuser$Data extends $TileEntityTick$Data {
        getActiveRecipe(): ($ActiveInfusionRecipe) | undefined;
        setActiveRecipe(arg0: $ActiveInfusionRecipe | null): void;
        getInventory(): $InventoryView;
        static CODEC: $Codec<$TileInfuser$Data>;
        get inventory(): $InventoryView;
    }
    export class $TileLumenCrystallizer$Data extends $TileEntityTick$Data {
        getContainedLumen(): $LumenStack;
        getLumenHandler(): $LumenHandlerView;
        setTransmittedLumen(arg0: $Lumen_, arg1: number): void;
        getLumenContents(): $LumenStackList;
        getFluidContents(): $FluidContainerList;
        getInventoryContents(): $InventoryStackList;
        getRecentlyTransmittedLumen(): $Lumen;
        getTransmittedLumenGameTime(): number;
        getInventory(): $FilteredInventoryView;
        getContainedFluid(): $FluidStack;
        getFluidTank(): $FluidTankView;
        static CODEC: $Codec<$TileLumenCrystallizer$Data>;
        get containedLumen(): $LumenStack;
        get lumenHandler(): $LumenHandlerView;
        get lumenContents(): $LumenStackList;
        get fluidContents(): $FluidContainerList;
        get inventoryContents(): $InventoryStackList;
        get recentlyTransmittedLumen(): $Lumen;
        get transmittedLumenGameTime(): number;
        get inventory(): $FilteredInventoryView;
        get containedFluid(): $FluidStack;
        get fluidTank(): $FluidTankView;
    }
    export class $TileLumenArray extends $TileEntityTick<$TileLumenArray$Data> implements $TileEntityLumenDisplay {
        getDisplayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        breakCatalyst(): void;
        getDisplayComponentIdentifier(): $UUID;
        self<T extends $BlockEntity>(): T;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static KEY_SAVE_DATA: string;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get displayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        get displayComponentIdentifier(): $UUID;
    }
    export class $TileInfuser extends $TileEntityTick<$TileInfuser$Data> {
        static getLiquidOffsets(): $Set<$BlockPos>;
        findMatchingRecipe(arg0: $Level_): ($RecipeHolder<$InfusionRecipe>) | undefined;
        startCrafting(arg0: $Level_, arg1: $RecipeHolder_<$InfusionRecipe>): void;
        createInput(arg0: $Level_): $InfusionRecipeInput;
        worldPosition: $BlockPos;
        blockState: $BlockState;
        level: $Level;
        static KEY_SAVE_DATA: string;
        static ATTACHMENTS_NBT_KEY: string;
        static LOGGER: $Logger;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        customPersistentData: $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        static get liquidOffsets(): $Set<$BlockPos>;
    }
    export class $TileAltar$Data extends $TileEntityNetwork$Data {
        getActiveRecipe(): ($ActiveAltarRecipe) | undefined;
        setActiveRecipe(arg0: $ActiveAltarRecipe | null): void;
        getFocusedConstellation(): ($BaseConstellation) | undefined;
        getFocusItem(): $ItemStack;
        removeKnownRecipe(arg0: $ResourceLocation_): boolean;
        getKnownRecipes(): $Set<$ResourceLocation>;
        canSetFocusItem(arg0: $ItemStack_): boolean;
        setFocusItem(arg0: $ItemStack_): void;
        getAltarInventory(): $InventoryView;
        getAltarType(): $TileAltar$AltarType;
        setAltarType(arg0: $TileAltar$AltarType_): void;
        addKnownRecipe(arg0: $ResourceLocation_): boolean;
        static CODEC: $Codec<$TileAltar$Data>;
        get focusedConstellation(): ($BaseConstellation) | undefined;
        get knownRecipes(): $Set<$ResourceLocation>;
        get altarInventory(): $InventoryView;
    }
}
