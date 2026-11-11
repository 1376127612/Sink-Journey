import { $TransmissionType, $DynamicBufferedNetwork, $ConnectionType_, $TransmissionType_, $CompatibleTransmitterValidator, $ConnectionType, $DynamicNetwork } from "@package/mekanism/common/lib/transmitter";
import { $IChemicalTracker } from "@package/mekanism/common/capabilities/chemical";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BasicEnergyContainer } from "@package/mekanism/common/capabilities/energy";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ITileWrapper } from "@package/mekanism/common/tile/interfaces";
import { $List, $UUID_, $Collection_, $Set } from "@package/java/util";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $IChemicalHandler, $IChemicalTank, $ChemicalStack } from "@package/mekanism/api/chemical";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $GlobalPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BasicFluidTank } from "@package/mekanism/common/capabilities/fluid";
import { $EnergyAcceptorCache, $AbstractAcceptorCache, $AcceptorCache } from "@package/mekanism/common/lib/transmitter/acceptor";
import { $Level } from "@package/net/minecraft/world/level";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $TransmitterUpgradeData, $PressurizedTubeUpgradeData, $MechanicalPipeUpgradeData, $UniversalCableUpgradeData } from "@package/mekanism/common/upgrade/transmitter";
import { $FluidNetwork, $EnergyNetwork, $ChemicalNetwork } from "@package/mekanism/common/content/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Action_, $Chunk3D } from "@package/mekanism/api";
import { $IAlloyTier_, $ITier } from "@package/mekanism/api/tier";
import { $TileEntityTransmitter } from "@package/mekanism/common/tile/transmitter";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IEnergyContainer, $IStrictEnergyHandler, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";
import { $TubeTier, $PipeTier, $CableTier } from "@package/mekanism/common/tier";

declare module "@package/mekanism/common/content/network/transmitter" {
    export class $PressurizedTube extends $BufferedTransmitter<$IChemicalHandler, $ChemicalNetwork, $ChemicalStack, $PressurizedTube> implements $IChemicalTracker, $IUpgradeableTransmitter<$PressurizedTubeUpgradeData> {
        getShare(): $ChemicalStack;
        createNetworkByMerging(toMerge: $Collection_<$ChemicalNetwork>): $ChemicalNetwork;
        createEmptyNetworkWithID(networkID: $UUID_): $ChemicalNetwork;
        getBufferWithFallback(): $ChemicalStack;
        pullFromAcceptors(): void;
        releaseShare(): $ChemicalStack;
        getTier(): $TubeTier;
        getUpgradeData(): $PressurizedTubeUpgradeData;
        onContentsChanged(): void;
        getChemicalTank(): $IChemicalTank;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        parseUpgradeData(data: $PressurizedTubeUpgradeData): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getAcceptorCache(): $AcceptorCache<$IChemicalHandler>;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        chemicalTank: $IChemicalTank;
        tier: $TubeTier;
        saveShare: $ChemicalStack;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get share(): $ChemicalStack;
        get bufferWithFallback(): $ChemicalStack;
        get upgradeData(): $PressurizedTubeUpgradeData;
        get acceptorCache(): $AcceptorCache<$IChemicalHandler>;
    }
    export class $BufferedTransmitter<ACCEPTOR, NETWORK extends $DynamicBufferedNetwork<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>, BUFFER, TRANSMITTER extends $BufferedTransmitter<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>> extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER> {
        getCapacity(): number;
        getShare(): BUFFER;
        getBufferWithFallback(): BUFFER;
        releaseShare(): BUFFER;
        noBufferOrFallback(): boolean;
        currentTransmitterConnections: number;
        constructor(tile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get capacity(): number;
        get share(): BUFFER;
        get bufferWithFallback(): BUFFER;
    }
    export class $MechanicalPipe extends $BufferedTransmitter<$IFluidHandler, $FluidNetwork, $FluidStack, $MechanicalPipe> implements $IMekanismFluidHandler, $IUpgradeableTransmitter<$MechanicalPipeUpgradeData> {
        getShare(): $FluidStack;
        createNetworkByMerging(networks: $Collection_<$FluidNetwork>): $FluidNetwork;
        createEmptyNetworkWithID(networkID: $UUID_): $FluidNetwork;
        getBufferWithFallback(): $FluidStack;
        pullFromAcceptors(): void;
        releaseShare(): $FluidStack;
        takeFluid(fluid: $FluidStack_, action: $Action_): $FluidStack;
        getTier(): $PipeTier;
        getUpgradeData(): $MechanicalPipeUpgradeData;
        onContentsChanged(): void;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        parseUpgradeData(data: $MechanicalPipeUpgradeData): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getAcceptorCache(): $AcceptorCache<$IFluidHandler>;
        getTanks(arg0: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canHandleFluid(): boolean;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        getFluidSideFor(): $Direction;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        tier: $PipeTier;
        saveShare: $FluidStack;
        buffer: $BasicFluidTank;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get share(): $FluidStack;
        get bufferWithFallback(): $FluidStack;
        get upgradeData(): $MechanicalPipeUpgradeData;
        get acceptorCache(): $AcceptorCache<$IFluidHandler>;
        get fluidSideFor(): $Direction;
    }
    export class $Transmitter<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> implements $ITileWrapper {
        remove(): void;
        write(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): $CompoundTag;
        read(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): void;
        isValid(): boolean;
        getLevel(): $Level;
        supportsTransmissionType(transmitter: $TileEntityTransmitter): boolean;
        supportsTransmissionType(transmitter: $Transmitter<never, never, never>): boolean;
        isValidTransmitterBasic(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        getConnectionTypesRaw(): $ConnectionType[];
        setConnectionTypesRaw(connectionTypes: $ConnectionType_[]): void;
        getNewOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        createNetworkByMerging(toMerge: $Collection_<NETWORK>): NETWORK;
        canConnectToAcceptor(side: $Direction_): boolean;
        createEmptyNetworkWithID(networkID: $UUID_): NETWORK;
        refreshAcceptorConnections(side: $Direction_): void;
        canConnect(side: $Direction_): boolean;
        getAcceptor(side: $Direction_): ACCEPTOR;
        requestsUpdate(): void;
        isValidTransmitter(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        markDirtyAcceptor(side: $Direction_): void;
        isConnectionType(side: $Direction_, typeToCheck: $ConnectionType_): boolean;
        canConnectMutual(side: $Direction_, cachedTransmitter: TRANSMITTER): boolean;
        canConnectMutual(side: $Direction_, cachedTile: $BlockEntity): boolean;
        handlesRedstone(): boolean;
        getBlockPos(): $BlockPos;
        setOrphan(nowOrphaned: boolean): void;
        isOrphan(): boolean;
        takeShare(): void;
        refreshConnections(): void;
        refreshConnections(side: $Direction_): void;
        getConnectionType(side: $Direction_): $ConnectionType;
        getPossibleTransmitterConnections(): number;
        isRemote(): boolean;
        handleUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): boolean;
        isUpgrading(): boolean;
        isRedstoneActivated(): boolean;
        onRightClick(player: $Player, side: $Direction_): $InteractionResult;
        onWorldSeparate(stillPresent: boolean): void;
        notifyTileChange(): void;
        getTileGlobalPos(): $GlobalPos;
        getTileChunk(): $Chunk3D;
        getWorldPositionLong(): number;
        getSupportedTransmissionTypes(): $Set<$TransmissionType>;
        onConfigure(player: $Player, side: $Direction_): $InteractionResult;
        hasTransmitterNetwork(): boolean;
        getConnectionTypeRaw(side: $Direction_): $ConnectionType;
        getTransmitterNetwork(): NETWORK;
        validateAndTakeShare(): void;
        onNeighborBlockChange(side: $Direction_): void;
        getAllCurrentConnections(): number;
        setTransmitterNetwork(network: NETWORK, requestNow: boolean): boolean;
        setTransmitterNetwork(network: NETWORK): void;
        static connectionMapContainsSide(connections: number, side: $Direction_): boolean;
        setConnectionTypeRaw(side: $Direction_, type: $ConnectionType_): void;
        getPossibleAcceptorConnections(): number;
        getReducedUpdateTag(provider: $HolderLookup$Provider, updateTag: $CompoundTag_): $CompoundTag;
        startUpgrading(): void;
        onModeChange(side: $Direction_): void;
        getAcceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        getTransmitterTile(): $TileEntityTransmitter;
        currentTransmitterConnections: number;
        constructor(transmitterTile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get valid(): boolean;
        get level(): $Level;
        get newOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        get blockPos(): $BlockPos;
        get possibleTransmitterConnections(): number;
        get remote(): boolean;
        get upgrading(): boolean;
        get redstoneActivated(): boolean;
        get tileGlobalPos(): $GlobalPos;
        get tileChunk(): $Chunk3D;
        get worldPositionLong(): number;
        get supportedTransmissionTypes(): $Set<$TransmissionType>;
        get allCurrentConnections(): number;
        get possibleAcceptorConnections(): number;
        get acceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        get transmitterTile(): $TileEntityTransmitter;
    }
    export class $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
    }
    export interface $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
        getTier(): $ITier;
        getUpgradeData(): DATA;
        parseUpgradeData(data: DATA): void;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        get tier(): $ITier;
        get upgradeData(): DATA;
    }
    export class $UniversalCable extends $BufferedTransmitter<$IStrictEnergyHandler, $EnergyNetwork, number, $UniversalCable> implements $IMekanismStrictEnergyHandler, $IUpgradeableTransmitter<$UniversalCableUpgradeData> {
        getShare(): number;
        createNetworkByMerging(networks: $Collection_<$EnergyNetwork>): $EnergyNetwork;
        createEmptyNetworkWithID(networkID: $UUID_): $EnergyNetwork;
        getBufferWithFallback(): number;
        pullFromAcceptors(): void;
        releaseShare(): number;
        getTier(): $CableTier;
        getUpgradeData(): $UniversalCableUpgradeData;
        onContentsChanged(): void;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        parseUpgradeData(data: $UniversalCableUpgradeData): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getAcceptorCache(): $EnergyAcceptorCache;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergy(arg0: number, arg1: $Direction_): number;
        canHandleEnergy(): boolean;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergyContainerCount(arg0: $Direction_): number;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getMaxEnergy(arg0: number): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergy(arg0: number): number;
        getNeededEnergy(arg0: number): number;
        getEnergySideFor(): $Direction;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        setEnergy(arg0: number, arg1: number): void;
        getEnergyContainerCount(): number;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        tier: $CableTier;
        lastWrite: number;
        buffer: $BasicEnergyContainer;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get share(): number;
        get bufferWithFallback(): number;
        get upgradeData(): $UniversalCableUpgradeData;
        get acceptorCache(): $EnergyAcceptorCache;
        get energySideFor(): $Direction;
    }
}
