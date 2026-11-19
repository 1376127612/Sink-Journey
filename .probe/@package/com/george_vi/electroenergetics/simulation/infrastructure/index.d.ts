import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IntList, $Int2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LongList } from "@package/it/unimi/dsi/fastutil/longs";
import { $Logger } from "@package/org/slf4j";
import { $ListTag_ } from "@package/net/minecraft/nbt";
import { $DevicesSavedData } from "@package/com/george_vi/electroenergetics/devices/device";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $UUID, $List, $Collection_, $List_, $Collection, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $SimulationTicker } from "@package/com/george_vi/electroenergetics/simulation/simulator";
import { $InWorldNode, $AttachedNode, $Node, $InWorldNodeConnection, $DirectionalNodeConnection } from "@package/com/george_vi/electroenergetics/foundation/nodes";
import { $DoubleSupplier, $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $CatenaryConnection } from "@package/com/george_vi/electroenergetics/content/railway_electrification/catenary";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ObjectDoublePair } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CircuitBuilder, $WireType, $SimulationResults, $WireType_ } from "@package/com/george_vi/electroenergetics/simulation";
import { $DetachedNodeType_, $DetachedNodeType } from "@package/com/george_vi/electroenergetics/simulation/infrastructure/detached_nodes";
import { $WireAttachment, $WireSync } from "@package/com/george_vi/electroenergetics/content/wire";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as detached_nodes from "@package/com/george_vi/electroenergetics/simulation/infrastructure/detached_nodes";

declare module "@package/com/george_vi/electroenergetics/simulation/infrastructure" {
    export class $WireAssemblerModule {
        loadLazyConnections(arg0: $List_<$ObjectDoublePair<$DirectionalNodeConnection>>): void;
        constructor(arg0: $InfrastructureSavedData, arg1: $ServerLevel, arg2: $WireSimulationState);
    }
    export class $CatenaryModule {
        finishSimulation(arg0: $SimulationResults): void;
        buildCircuit(arg0: $CircuitBuilder): void;
        constructor(arg0: $InfrastructureSavedData, arg1: $ServerLevel, arg2: $WireSimulationState);
    }
    export class $WireCrossContactModule$CrossContactEntry extends $Record {
        node2(): $AttachedNode;
        node1(): $AttachedNode;
        handle(): $WireSimulationState$WireCutHandle;
        distance(): number;
        pos1(): $Vec3;
        pos2(): $Vec3;
        resistance(): number;
        constructor(handle: $WireSimulationState$WireCutHandle, resistance: number, node1: $AttachedNode, node2: $AttachedNode, pos1: $Vec3_, pos2: $Vec3_, distance: number);
    }
    /**
     * Values that may be interpreted as {@link $WireCrossContactModule$CrossContactEntry}.
     */
    export type $WireCrossContactModule$CrossContactEntry_ = { pos2?: $Vec3_, pos1?: $Vec3_, resistance?: number, node1?: $AttachedNode, node2?: $AttachedNode, distance?: number, handle?: $WireSimulationState$WireCutHandle,  } | [pos2?: $Vec3_, pos1?: $Vec3_, resistance?: number, node1?: $AttachedNode, node2?: $AttachedNode, distance?: number, handle?: $WireSimulationState$WireCutHandle, ];
    export class $ConnectionEntry {
        onReloadConfigs(): void;
        getVoltageOnWire(arg0: $SimulationResults, arg1: $Node, arg2: $Node): number;
        getWireVoltageToGround(arg0: $SimulationResults, arg1: $Node, arg2: $Node): number;
        bb: $AABB;
        dangerousBB: $AABB;
        resistanceFunction: $DoubleSupplier;
        dangerousDistanceSqr: number;
        isOvervolted: boolean;
        pos1: $Vec3;
        pos2: $Vec3;
        wireData: $WireData;
        isCatenary: boolean;
        resistance: number;
        points: $List<$Vec3>;
        cuts: $List<$WireSimulationState$CutWireEntry>;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $List_<$Vec3_>, arg3: $WireData, arg4: $AABB_, arg5: $List_<$WireSimulationState$CutWireEntry_>);
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $List_<$Vec3_>, arg3: $WireData, arg4: $AABB_, arg5: boolean, arg6: $List_<$WireSimulationState$CutWireEntry_>);
    }
    export class $InWorldNodeData {
        getGlobalPos(): $Vec3;
        getLocalPos(): $Vec3;
        isValid(): boolean;
        getDetachedNodeId(): number;
        static CENTER: $Vec3;
        node: $InWorldNode;
        detachedNodeType: $DetachedNodeType;
        lastChunk: number;
        adjacency: $Int2ObjectArrayMap<$WireData>;
        detachedNodeEntityId: $UUID;
        id: number;
        label: string;
        constructor(arg0: number, arg1: $InWorldNode);
        get globalPos(): $Vec3;
        get localPos(): $Vec3;
        get valid(): boolean;
        get detachedNodeId(): number;
    }
    export class $WireElectrocutionModule {
        finishSimulation(arg0: $SimulationResults): void;
        buildCircuit(arg0: $CircuitBuilder): void;
        constructor(arg0: $InfrastructureSavedData, arg1: $ServerLevel, arg2: $WireSimulationState);
    }
    export class $WireLifetimeModule {
        finishSimulation(arg0: $SimulationResults): void;
        constructor(arg0: $InfrastructureSavedData, arg1: $ServerLevel, arg2: $WireSimulationState);
    }
    export class $WireSimulationState$WireCutHandle {
        valid(): boolean;
        name: string;
    }
    export class $WireSimulationState {
        createHandle(arg0: string): $WireSimulationState$WireCutHandle;
        relocateCut(arg0: $WireSimulationState$WireCutHandle, arg1: $AttachedNode, arg2: number): void;
        removeCutsFrom(arg0: $WireSimulationState$WireCutHandle): void;
        invalidateHandle(arg0: $WireSimulationState$WireCutHandle): void;
        getAllConnections(): $Set<$Map$Entry<$InWorldNodeConnection, $ConnectionEntry>>;
        getConnectionsInSection(arg0: number, arg1: $Consumer_<$ConnectionEntry>): void;
        getConnectionsInSection(arg0: number, arg1: $BiConsumer_<$InWorldNodeConnection, $ConnectionEntry>): void;
        getConnectionsInSection(arg0: number): $Map<$InWorldNodeConnection, $ConnectionEntry>;
        cutExists(arg0: $WireSimulationState$WireCutHandle, arg1: $AttachedNode): boolean;
        createCut(arg0: $WireSimulationState$WireCutHandle, arg1: $ConnectionEntry, arg2: number): $AttachedNode;
        createCut(arg0: $WireSimulationState$WireCutHandle, arg1: $InWorldNodeConnection, arg2: number): $AttachedNode;
        onReloadConfigs(): void;
        relocateConnection(arg0: $InWorldNodeConnection, arg1: $WireData): boolean;
        getConnection(arg0: $InWorldNodeConnection): $ConnectionEntry;
        rebuild(): void;
        onNodeChange(arg0: $Collection_<$InWorldNode>): void;
        createCircuitBuilder(): $CircuitBuilder;
        reloadLazyConnections(): void;
        getAllConnectionEntries(): $Collection<$ConnectionEntry>;
        removeCut(arg0: $WireSimulationState$WireCutHandle, arg1: $AttachedNode): void;
        getLazyConnections(): $List<$ObjectDoublePair<$DirectionalNodeConnection>>;
        sd: $InfrastructureSavedData;
        level: $Level;
        constructor(arg0: $InfrastructureSavedData, arg1: $Level_);
        get allConnections(): $Set<$Map$Entry<$InWorldNodeConnection, $ConnectionEntry>>;
        get allConnectionEntries(): $Collection<$ConnectionEntry>;
        get lazyConnections(): $List<$ObjectDoublePair<$DirectionalNodeConnection>>;
    }
    export class $WireSimulationState$CutWireEntry extends $Record {
        handle(): $WireSimulationState$WireCutHandle;
        node(): $AttachedNode;
        point(): number;
        originalList(): $List<$WireSimulationState$CutWireEntry>;
        constructor(node: $AttachedNode, point: number, handle: $WireSimulationState$WireCutHandle, originalList: $List_<$WireSimulationState$CutWireEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $WireSimulationState$CutWireEntry}.
     */
    export type $WireSimulationState$CutWireEntry_ = { node?: $AttachedNode, point?: number, handle?: $WireSimulationState$WireCutHandle, originalList?: $List_<$WireSimulationState$CutWireEntry_>,  } | [node?: $AttachedNode, point?: number, handle?: $WireSimulationState$WireCutHandle, originalList?: $List_<$WireSimulationState$CutWireEntry_>, ];
    export class $WireCrossContactModule {
        onReloadConfigs(): void;
        onWireAdded(arg0: $InWorldNodeConnection, arg1: $ConnectionEntry): void;
        onWireRemoved(arg0: $InWorldNodeConnection, arg1: $ConnectionEntry): void;
        loadLazyConnections(arg0: $List_<$ObjectDoublePair<$DirectionalNodeConnection>>): void;
        onRebuild(): void;
        crossContactsByWire: $Map<$InWorldNodeConnection, $List<$WireCrossContactModule$CrossContactEntry>>;
        crossContacts: $Map<$WireSimulationState$WireCutHandle, $WireCrossContactModule$CrossContactEntry>;
        constructor(arg0: $InfrastructureSavedData, arg1: $ServerLevel, arg2: $WireSimulationState);
    }
    export class $InfrastructureSavedData extends $SavedData {
        removeConnection(arg0: $InWorldNodeConnection): $WireData;
        setConnectionData(arg0: number, arg1: $WireData): void;
        setConnectionData(arg0: $InWorldNodeConnection, arg1: $WireData): void;
        hasNode(arg0: $InWorldNode): boolean;
        registerOrUpdateNodes(arg0: $BlockPos_, arg1: $List_<number>): void;
        getNodeData(arg0: number): $InWorldNodeData;
        getNodeData(arg0: $InWorldNode): $InWorldNodeData;
        getNodesAt(arg0: $BlockPos_): $List<$InWorldNodeData>;
        removeAndDropConnection(arg0: $InWorldNodeConnection): $WireData;
        connectCatenary(arg0: $BlockPos_, arg1: $BlockPos_): void;
        removeCatenary(arg0: $BlockPos_, arg1: $BlockPos_): void;
        createDetachedNode(arg0: $DetachedNodeType_, arg1: $Vec3_): $InWorldNodeData;
        getConnectionData(arg0: number): $WireData;
        getConnectionData(arg0: $InWorldNodeConnection): $WireData;
        getAllCatenaryConnections(): $Set<$CatenaryConnection>;
        getNodePosition(arg0: $InWorldNode): $Vec3;
        migrateConnections(arg0: $InWorldNode, arg1: $InWorldNode): void;
        removeNodes(arg0: $BlockPos_): void;
        getNodePositionOrCenter(arg0: $InWorldNode): $Vec3;
        static load(arg0: $ServerLevel): $InfrastructureSavedData;
        connect(arg0: $InWorldNode, arg1: $InWorldNode, arg2: $WireData): number;
        connect(arg0: $InWorldNode, arg1: $InWorldNode, arg2: $WireType_): number;
        removeNode(arg0: $InWorldNode): $InWorldNodeData;
        isConnected(arg0: $InWorldNode, arg1: $InWorldNode): boolean;
        tick(): void;
        getNodes(): $Set<$InWorldNode>;
        createNode(arg0: $InWorldNode): $InWorldNodeData;
        createNode(arg0: $InWorldNode, arg1: $Vec3_, arg2: $Vec3_): $InWorldNodeData;
        getConnections(arg0: $InWorldNode): $List<$InWorldNodeConnection>;
        getConnections(arg0: $InWorldNodeData): $List<$InWorldNodeConnection>;
        getConnections(arg0: $InWorldNodeData, arg1: $Consumer_<$InWorldNodeConnection>): void;
        static migrateFromLegacy(arg0: $ListTag_, arg1: $DevicesSavedData): void;
        static isDynamicPosition(arg0: $ServerLevel, arg1: $InWorldNode): boolean;
        getNodeDataOrThrow(arg0: $InWorldNode): $InWorldNodeData;
        resolveConnection(arg0: number): $InWorldNodeConnection;
        connectNoUpdate(arg0: $InWorldNode, arg1: $InWorldNode, arg2: $WireData): number;
        getDynamicNodes(): $Set<$InWorldNodeData>;
        removeNodeDefer(arg0: $InWorldNodeData): void;
        getNodesInChunk(arg0: number, arg1: $Consumer_<$InWorldNode>): void;
        removeConnectionNoDrops(arg0: $InWorldNodeConnection): $WireData;
        getLocalNodePosition(arg0: $InWorldNode): $Vec3;
        sableNodesToUpdate: $IntList;
        ticker: $SimulationTicker;
        wireLifetimeModule: $WireLifetimeModule;
        level: $ServerLevel;
        wireSimulationState: $WireSimulationState;
        wireAssemblerModule: $WireAssemblerModule;
        wireCrossContactModule: $WireCrossContactModule;
        wireElectrocutionModule: $WireElectrocutionModule;
        DYNAMIC_POSITION_NODES: $Set<$InWorldNodeData>;
        wireSync: $WireSync;
        static LOGGER: $Logger;
        deviceSD: $DevicesSavedData;
        catenaryModule: $CatenaryModule;
        sableToUpdate: $LongList;
        get allCatenaryConnections(): $Set<$CatenaryConnection>;
        get nodes(): $Set<$InWorldNode>;
        get dynamicNodes(): $Set<$InWorldNodeData>;
    }
    export class $WireData {
        temperature(): number;
        attachments(): $List<$Pair<number, $WireAttachment>>;
        wireType(): $WireType;
        static ofLength(arg0: $WireType_, arg1: number): $WireData;
        getSag(arg0: number): number;
        getSag(): number;
        getResistance(): number;
        static ofNoLength(arg0: $WireType_): $WireData;
        lastChunk1: number;
        lastChunk2: number;
        length: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WireData>;
        constructor(arg0: $WireType_, arg1: number, arg2: $List_<$Pair<number, $WireAttachment>>, arg3: number);
        get resistance(): number;
    }
}
