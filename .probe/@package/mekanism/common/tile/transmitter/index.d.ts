import { $ConnectionType_ } from "@package/mekanism/common/lib/transmitter";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $TransmitterType } from "@package/mekanism/common/block/states";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $IChemicalHandler } from "@package/mekanism/api/chemical";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CapabilityTileEntity } from "@package/mekanism/common/tile/base";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProxyConfigurable$ISidedConfigurable } from "@package/mekanism/common/capabilities/proxy";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IAlloyInteraction, $IConfigurable } from "@package/mekanism/api";
import { $Transmitter } from "@package/mekanism/common/content/network/transmitter";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $TransmitterModelData } from "@package/mekanism/client/model/data";
import { $IAlloyTier_ } from "@package/mekanism/api/tier";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IHeatHandler } from "@package/mekanism/api/heat";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $ICapabilityProvider } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/mekanism/common/tile/transmitter" {
    export class $TileEntityTransmitter extends $CapabilityTileEntity implements $ProxyConfigurable$ISidedConfigurable, $IAlloyInteraction {
        isLoaded(): boolean;
        static tickServer(level: $Level_, pos: $BlockPos_, state: $BlockState_, transmitter: $TileEntityTransmitter): void;
        saveAdditional(nbtTags: $CompoundTag_, provider: $HolderLookup$Provider): void;
        onRightClick(player: $Player, side: $Direction_): $InteractionResult;
        sideChanged(side: $Direction_, old: $ConnectionType_, type: $ConnectionType_): void;
        setForceUpdate(): void;
        onSneakRightClick(player: $Player, side: $Direction_): $InteractionResult;
        onAlloyInteraction(player: $Player, stack: $ItemStack_, tier: $IAlloyTier_): void;
        onNeighborBlockChange(side: $Direction_): void;
        chunkAccessibilityChange(loaded: boolean): void;
        getTransmitter(): $Transmitter<never, never, never>;
        getCollisionBoxes(): $List<$VoxelShape>;
        redstoneChanged(powered: boolean): void;
        getTransmitterType(): $TransmitterType;
        getSideLookingAt(player: $Player, fallback: $Direction_): $Direction;
        getSideLookingAt(player: $Player): $Direction;
        onRightClick(player: $Player): $InteractionResult;
        onSneakRightClick(player: $Player): $InteractionResult;
        blockState: $BlockState;
        level: $Level;
        static CHEMICAL_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IChemicalHandler>;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static TRANSMITTER_PROPERTY: $ModelProperty<$TransmitterModelData>;
        remove: boolean;
        static ITEM_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IItemHandler>;
        worldPosition: $BlockPos;
        static FLUID_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IFluidHandler>;
        static CONFIGURABLE_PROVIDER: $ICapabilityProvider<$TileEntityTransmitter, $Direction, $IConfigurable>;
        static HEAT_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IHeatHandler>;
        static LOGGER: $Logger;
        customPersistentData: $CompoundTag;
        constructor(blockProvider: $Holder_<$Block>, pos: $BlockPos_, state: $BlockState_);
        get loaded(): boolean;
        get transmitter(): $Transmitter<never, never, never>;
        get collisionBoxes(): $List<$VoxelShape>;
        get transmitterType(): $TransmitterType;
    }
}
