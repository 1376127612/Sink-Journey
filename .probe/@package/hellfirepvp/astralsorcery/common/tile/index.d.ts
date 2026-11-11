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
        self<T extends $BlockEntity>(): T;
        getDisplayComponentIdentifier(): $UUID;
        getDisplayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
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
        update(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_): void;
        static newInstance(): $TileChalice$LiquidDrawInstance;
        consumeLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_, arg3: boolean): boolean;
        playLiquidDrawEffect(arg0: $Level_, arg1: $Vector3, arg2: $FluidStack_): void;
        playLiquidDrawEffect(arg0: $Level_, arg1: $Supplier_<$Vector3>, arg2: $FluidStack_, arg3: number, arg4: number): void;
        getChalices(): $Set<$BlockPos>;
        static CODEC: $Codec<$TileChalice$LiquidDrawInstance>;
        get chalices(): $Set<$BlockPos>;
    }
    export class $TileAltar extends $TileEntityNetwork<$ForwardingStarlightReceiverNode, $TileAltar$Data> implements $ForwardingStarlightReceiverNode$ReceiverTile, $TileEntityLumenDisplay {
        startCrafting(arg0: $RecipeHolder_<$AltarRecipe>, arg1: $UUID_): void;
        static getOuterRelaySlots(): $List<number>;
        createInput(arg0: $Level_, arg1: $UUID_): $AltarCraftingInput;
        static getInnerRelaySlots(): $List<number>;
        abortCrafting(): void;
        findMatchingRecipe(arg0: $Level_, arg1: $UUID_ | null): ($RecipeHolder<$AltarRecipe>) | undefined;
        getDisplayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        receiveStarlight(arg0: $ServerLevel, arg1: $StarlightTransmissionPacket_): void;
        static getRelayGridOffsets(): $Map<number, $BlockPos>;
        self<T extends $BlockEntity>(): T;
        getDisplayComponentIdentifier(): $UUID;
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
        static get innerRelaySlots(): $List<number>;
        get displayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        static get relayGridOffsets(): $Map<number, $BlockPos>;
        get displayComponentIdentifier(): $UUID;
    }
    export class $TileLumenArray$Data extends $TileEntityTick$Data implements $TileDataOwned {
        getOwnerId(): $UUID;
        getInventory(): $FilteredInventoryView;
        getContainedFluid(): $FluidStack;
        setOwnerId(arg0: $UUID_): void;
        getFluidTank(): $FluidTankView;
        getLumenHandler(): $LumenHandlerView;
        getLumenFilledPercentage(): number;
        self<T extends $TileEntitySynchronized$Data>(): T;
        getOwner(arg0: $MinecraftServer): ($ServerPlayer) | undefined;
        getOwner(arg0: $ServerLevel): ($ServerPlayer) | undefined;
        isOwner(arg0: $UUID_): boolean;
        isOwner(arg0: $Player): boolean;
        hasOwner(): boolean;
        static CODEC: $Codec<$TileLumenArray$Data>;
        static TANK_CAPACITY: number;
        static LUMEN_TANK_CAPACITY: number;
        get inventory(): $FilteredInventoryView;
        get containedFluid(): $FluidStack;
        get fluidTank(): $FluidTankView;
        get lumenHandler(): $LumenHandlerView;
        get lumenFilledPercentage(): number;
    }
    export class $TileAttunementAltar$Data extends $TileEntityTick$Data {
        getActiveRecipe(): ($AttunementRecipe$Active<never, never>) | undefined;
        setActiveRecipe(arg0: $AttunementRecipe$Active<never, never> | null): void;
        setActiveConstellation(arg0: $BaseConstellation_ | null): void;
        getActiveConstellation(): ($BaseConstellation) | undefined;
        static CODEC: $Codec<$TileAttunementAltar$Data>;
    }
    export class $TileAltar$AltarType extends $Enum<$TileAltar$AltarType> implements $StringRepresentable {
        static values(): $TileAltar$AltarType[];
        static valueOf(arg0: string): $TileAltar$AltarType;
        getShape(): $VoxelShape;
        getSerializedName(): string;
        getCollisionShape(): $VoxelShape;
        getRequiredStructure(): $ObserverRegistryObject;
        isThisLater(arg0: $TileAltar$AltarType_): boolean;
        getRequiredTier(): $ResearchTier;
        getAltarItem(): $ItemStack;
        getContainerType(): $ContainerAltar$Type;
        isThisLaterOrEqual(arg0: $TileAltar$AltarType_): boolean;
        getRemappedEnumConstantName(): string;
        static RADIANCE: $TileAltar$AltarType;
        static CODEC: $Codec<$TileAltar$AltarType>;
        static RESONANCE: $TileAltar$AltarType;
        static ILLUMINATION: $TileAltar$AltarType;
        static LUMINANCE: $TileAltar$AltarType;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TileAltar$AltarType>;
        get shape(): $VoxelShape;
        get serializedName(): string;
        get collisionShape(): $VoxelShape;
        get requiredStructure(): $ObserverRegistryObject;
        get requiredTier(): $ResearchTier;
        get altarItem(): $ItemStack;
        get containerType(): $ContainerAltar$Type;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TileAltar$AltarType}.
     */
    export type $TileAltar$AltarType_ = "illumination" | "resonance" | "luminance" | "radiance";
    export class $TileInfuser$Data extends $TileEntityTick$Data {
        getInventory(): $InventoryView;
        getActiveRecipe(): ($ActiveInfusionRecipe) | undefined;
        setActiveRecipe(arg0: $ActiveInfusionRecipe | null): void;
        static CODEC: $Codec<$TileInfuser$Data>;
        get inventory(): $InventoryView;
    }
    export class $TileLumenCrystallizer$Data extends $TileEntityTick$Data {
        getInventory(): $FilteredInventoryView;
        getContainedFluid(): $FluidStack;
        getFluidTank(): $FluidTankView;
        getLumenHandler(): $LumenHandlerView;
        getContainedLumen(): $LumenStack;
        getInventoryContents(): $InventoryStackList;
        getLumenContents(): $LumenStackList;
        getTransmittedLumenGameTime(): number;
        getRecentlyTransmittedLumen(): $Lumen;
        getFluidContents(): $FluidContainerList;
        setTransmittedLumen(arg0: $Lumen_, arg1: number): void;
        static CODEC: $Codec<$TileLumenCrystallizer$Data>;
        get inventory(): $FilteredInventoryView;
        get containedFluid(): $FluidStack;
        get fluidTank(): $FluidTankView;
        get lumenHandler(): $LumenHandlerView;
        get containedLumen(): $LumenStack;
        get inventoryContents(): $InventoryStackList;
        get lumenContents(): $LumenStackList;
        get transmittedLumenGameTime(): number;
        get recentlyTransmittedLumen(): $Lumen;
        get fluidContents(): $FluidContainerList;
    }
    export class $TileLumenArray extends $TileEntityTick<$TileLumenArray$Data> implements $TileEntityLumenDisplay {
        getDisplayTooltip(): ($StoredLumenDisplayTooltip) | undefined;
        breakCatalyst(): void;
        self<T extends $BlockEntity>(): T;
        getDisplayComponentIdentifier(): $UUID;
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
        startCrafting(arg0: $Level_, arg1: $RecipeHolder_<$InfusionRecipe>): void;
        createInput(arg0: $Level_): $InfusionRecipeInput;
        static getLiquidOffsets(): $Set<$BlockPos>;
        findMatchingRecipe(arg0: $Level_): ($RecipeHolder<$InfusionRecipe>) | undefined;
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
        getAltarInventory(): $InventoryView;
        canSetFocusItem(arg0: $ItemStack_): boolean;
        setFocusItem(arg0: $ItemStack_): void;
        setAltarType(arg0: $TileAltar$AltarType_): void;
        addKnownRecipe(arg0: $ResourceLocation_): boolean;
        getAltarType(): $TileAltar$AltarType;
        getFocusItem(): $ItemStack;
        getFocusedConstellation(): ($BaseConstellation) | undefined;
        getKnownRecipes(): $Set<$ResourceLocation>;
        removeKnownRecipe(arg0: $ResourceLocation_): boolean;
        static CODEC: $Codec<$TileAltar$Data>;
        get altarInventory(): $InventoryView;
        get focusedConstellation(): ($BaseConstellation) | undefined;
        get knownRecipes(): $Set<$ResourceLocation>;
    }
}
