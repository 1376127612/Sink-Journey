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
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        onContentsChanged(): void;
        parseUpgradeData(data: $PressurizedTubeUpgradeData): void;
        getChemicalTank(): $IChemicalTank;
        getAcceptorCache(): $AcceptorCache<$IChemicalHandler>;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getTier(): $TubeTier;
        getUpgradeData(): $PressurizedTubeUpgradeData;
        createEmptyNetworkWithID(networkID: $UUID_): $ChemicalNetwork;
        createNetworkByMerging(toMerge: $Collection_<$ChemicalNetwork>): $ChemicalNetwork;
        releaseShare(): $ChemicalStack;
        pullFromAcceptors(): void;
        getBufferWithFallback(): $ChemicalStack;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        chemicalTank: $IChemicalTank;
        tier: $TubeTier;
        saveShare: $ChemicalStack;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get share(): $ChemicalStack;
        get acceptorCache(): $AcceptorCache<$IChemicalHandler>;
        get upgradeData(): $PressurizedTubeUpgradeData;
        get bufferWithFallback(): $ChemicalStack;
    }
    export class $BufferedTransmitter<ACCEPTOR, NETWORK extends $DynamicBufferedNetwork<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>, BUFFER, TRANSMITTER extends $BufferedTransmitter<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>> extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER> {
        getShare(): BUFFER;
        noBufferOrFallback(): boolean;
        releaseShare(): BUFFER;
        getBufferWithFallback(): BUFFER;
        getCapacity(): number;
        currentTransmitterConnections: number;
        constructor(tile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get share(): BUFFER;
        get bufferWithFallback(): BUFFER;
        get capacity(): number;
    }
    export class $MechanicalPipe extends $BufferedTransmitter<$IFluidHandler, $FluidNetwork, $FluidStack, $MechanicalPipe> implements $IMekanismFluidHandler, $IUpgradeableTransmitter<$MechanicalPipeUpgradeData> {
        getShare(): $FluidStack;
        onContentsChanged(): void;
        parseUpgradeData(data: $MechanicalPipeUpgradeData): void;
        getAcceptorCache(): $AcceptorCache<$IFluidHandler>;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getTier(): $PipeTier;
        getUpgradeData(): $MechanicalPipeUpgradeData;
        createEmptyNetworkWithID(networkID: $UUID_): $FluidNetwork;
        createNetworkByMerging(networks: $Collection_<$FluidNetwork>): $FluidNetwork;
        takeFluid(fluid: $FluidStack_, action: $Action_): $FluidStack;
        releaseShare(): $FluidStack;
        pullFromAcceptors(): void;
        getBufferWithFallback(): $FluidStack;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        getTanks(arg0: $Direction_): number;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canHandleFluid(): boolean;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
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
        get acceptorCache(): $AcceptorCache<$IFluidHandler>;
        get upgradeData(): $MechanicalPipeUpgradeData;
        get bufferWithFallback(): $FluidStack;
        get fluidSideFor(): $Direction;
    }
    export class $Transmitter<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> implements $ITileWrapper {
        getWorldPositionLong(): number;
        getTileChunk(): $Chunk3D;
        getTileGlobalPos(): $GlobalPos;
        notifyTileChange(): void;
        handleUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): boolean;
        onWorldSeparate(stillPresent: boolean): void;
        getTransmitterTile(): $TileEntityTransmitter;
        getAcceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        refreshConnections(side: $Direction_): void;
        refreshConnections(): void;
        onModeChange(side: $Direction_): void;
        onConfigure(player: $Player, side: $Direction_): $InteractionResult;
        startUpgrading(): void;
        isRemote(): boolean;
        setConnectionTypeRaw(side: $Direction_, type: $ConnectionType_): void;
        static connectionMapContainsSide(connections: number, side: $Direction_): boolean;
        getTransmitterNetwork(): NETWORK;
        validateAndTakeShare(): void;
        hasTransmitterNetwork(): boolean;
        onNeighborBlockChange(side: $Direction_): void;
        getAllCurrentConnections(): number;
        setTransmitterNetwork(network: NETWORK): void;
        setTransmitterNetwork(network: NETWORK, requestNow: boolean): boolean;
        getConnectionTypeRaw(side: $Direction_): $ConnectionType;
        isUpgrading(): boolean;
        onRightClick(player: $Player, side: $Direction_): $InteractionResult;
        setConnectionTypesRaw(connectionTypes: $ConnectionType_[]): void;
        canConnectToAcceptor(side: $Direction_): boolean;
        supportsTransmissionType(transmitter: $Transmitter<never, never, never>): boolean;
        supportsTransmissionType(transmitter: $TileEntityTransmitter): boolean;
        isValidTransmitterBasic(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        createEmptyNetworkWithID(networkID: $UUID_): NETWORK;
        getNewOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        getConnectionTypesRaw(): $ConnectionType[];
        createNetworkByMerging(toMerge: $Collection_<NETWORK>): NETWORK;
        refreshAcceptorConnections(side: $Direction_): void;
        getAcceptor(side: $Direction_): ACCEPTOR;
        requestsUpdate(): void;
        canConnectMutual(side: $Direction_, cachedTile: $BlockEntity): boolean;
        canConnectMutual(side: $Direction_, cachedTransmitter: TRANSMITTER): boolean;
        handlesRedstone(): boolean;
        markDirtyAcceptor(side: $Direction_): void;
        isConnectionType(side: $Direction_, typeToCheck: $ConnectionType_): boolean;
        isValidTransmitter(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        takeShare(): void;
        isOrphan(): boolean;
        setOrphan(nowOrphaned: boolean): void;
        canConnect(side: $Direction_): boolean;
        getPossibleAcceptorConnections(): number;
        getPossibleTransmitterConnections(): number;
        remove(): void;
        write(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): $CompoundTag;
        read(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): void;
        isValid(): boolean;
        getLevel(): $Level;
        getBlockPos(): $BlockPos;
        isRedstoneActivated(): boolean;
        getReducedUpdateTag(provider: $HolderLookup$Provider, updateTag: $CompoundTag_): $CompoundTag;
        getConnectionType(side: $Direction_): $ConnectionType;
        getSupportedTransmissionTypes(): $Set<$TransmissionType>;
        currentTransmitterConnections: number;
        constructor(transmitterTile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get worldPositionLong(): number;
        get tileChunk(): $Chunk3D;
        get tileGlobalPos(): $GlobalPos;
        get transmitterTile(): $TileEntityTransmitter;
        get acceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        get remote(): boolean;
        get allCurrentConnections(): number;
        get upgrading(): boolean;
        get newOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        get possibleAcceptorConnections(): number;
        get possibleTransmitterConnections(): number;
        get valid(): boolean;
        get level(): $Level;
        get blockPos(): $BlockPos;
        get redstoneActivated(): boolean;
        get supportedTransmissionTypes(): $Set<$TransmissionType>;
    }
    export class $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
    }
    export interface $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        parseUpgradeData(data: DATA): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getTier(): $ITier;
        getUpgradeData(): DATA;
        get tier(): $ITier;
        get upgradeData(): DATA;
    }
    export class $UniversalCable extends $BufferedTransmitter<$IStrictEnergyHandler, $EnergyNetwork, number, $UniversalCable> implements $IMekanismStrictEnergyHandler, $IUpgradeableTransmitter<$UniversalCableUpgradeData> {
        getShare(): number;
        onContentsChanged(): void;
        parseUpgradeData(data: $UniversalCableUpgradeData): void;
        getAcceptorCache(): $EnergyAcceptorCache;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getTier(): $CableTier;
        getUpgradeData(): $UniversalCableUpgradeData;
        createEmptyNetworkWithID(networkID: $UUID_): $EnergyNetwork;
        createNetworkByMerging(networks: $Collection_<$EnergyNetwork>): $EnergyNetwork;
        releaseShare(): number;
        pullFromAcceptors(): void;
        getBufferWithFallback(): number;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        getEnergyContainerCount(arg0: $Direction_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        canHandleEnergy(): boolean;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergy(arg0: number, arg1: $Direction_): number;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getEnergyContainerCount(): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        setEnergy(arg0: number, arg1: number): void;
        getMaxEnergy(arg0: number): number;
        getNeededEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergySideFor(): $Direction;
        getEnergy(arg0: number): number;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        tier: $CableTier;
        lastWrite: number;
        buffer: $BasicEnergyContainer;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get share(): number;
        get acceptorCache(): $EnergyAcceptorCache;
        get upgradeData(): $UniversalCableUpgradeData;
        get bufferWithFallback(): number;
        get energySideFor(): $Direction;
    }
}
