import { $Level } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IConfigurable } from "@package/mekanism/api";
import { $Map, $Set } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Structure, $MultiblockManager, $IStructuralMultiblock, $MultiblockData } from "@package/mekanism/common/lib/multiblock";
import { $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $IChemicalHandler } from "@package/mekanism/api/chemical";
import { $BlockPos, $BlockPos_, $Holder_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $TileEntityMekanism, $CapabilityTileEntity } from "@package/mekanism/common/tile/base";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IHeatHandler } from "@package/mekanism/api/heat";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $ICapabilityProvider } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/mekanism/common/tile/prefab" {
    export class $TileEntityStructuralMultiblock extends $TileEntityMekanism implements $IStructuralMultiblock, $IConfigurable {
        getStructure(manager: $MultiblockManager<never>): $Structure;
        onActivate(player: $Player, hand: $InteractionHand_, stack: $ItemStack_): $ItemInteractionResult;
        hasStructure(structure: $Structure): boolean;
        structuralGuiAccessAllowed(): boolean;
        onRightClick(player: $Player): $InteractionResult;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        multiblockFormed(multiblock: $MultiblockData): void;
        multiblockUnformed(structure: $Structure): void;
        onSneakRightClick(player: $Player): $InteractionResult;
        getStructureMap(): $Map<$MultiblockManager<never>, $Structure>;
        hasFormedMultiblock(): boolean;
        getDefaultData(): $MultiblockData;
        getMultiblockData(manager: $MultiblockManager<never>): $MultiblockData;
        setMultiblockData(manager: $MultiblockManager<never>, multiblockData: $MultiblockData): void;
        resetForFormed(): void;
        resetStructure(manager: $MultiblockManager<never>): $Structure;
        blockState: $BlockState;
        ticker: number;
        level: $Level;
        static CHEMICAL_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IChemicalHandler>;
        static ATTACHMENTS_NBT_KEY: string;
        playersUsing: $Set<$Player>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        static ITEM_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IItemHandler>;
        worldPosition: $BlockPos;
        static FLUID_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IFluidHandler>;
        facingSupplier: $Supplier<$Direction>;
        static HEAT_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IHeatHandler>;
        static LOGGER: $Logger;
        customPersistentData: $CompoundTag;
        constructor(provider: $Holder_<$Block>, pos: $BlockPos_, state: $BlockState_);
        get structureMap(): $Map<$MultiblockManager<never>, $Structure>;
        get defaultData(): $MultiblockData;
    }
}
