import { $IntList, $Int2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $MicroTickingElectricalProperties, $ElectricalProperties } from "@package/com/george_vi/electroenergetics/simulation/electrical_properties";
import { $Item } from "@package/net/minecraft/world/item";
import { $List, $Set_, $List_ } from "@package/java/util";
import { $InWorldNode, $Node, $DirectionalNodeConnection } from "@package/com/george_vi/electroenergetics/foundation/nodes";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Object2IntOpenHashMap, $Object2DoubleMap, $ObjectDoublePair } from "@package/it/unimi/dsi/fastutil/objects";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $InfrastructureSavedData } from "@package/com/george_vi/electroenergetics/simulation/infrastructure";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
export * as infrastructure from "@package/com/george_vi/electroenergetics/simulation/infrastructure";
export * as simulator from "@package/com/george_vi/electroenergetics/simulation/simulator";
export * as util from "@package/com/george_vi/electroenergetics/simulation/util";
export * as electrical_properties from "@package/com/george_vi/electroenergetics/simulation/electrical_properties";

declare module "@package/com/george_vi/electroenergetics/simulation" {
    export class $WrappedIndexedNode {
        clear(): void;
        node: $Node;
        groundConductance: number;
        isDissolved: boolean;
        adjacency: $Int2ObjectArrayMap<$ElectricalProperties>;
        invisibleAdjacency: $IntList;
        localAdjacencyOverride: $Int2ObjectArrayMap<$ElectricalProperties>;
        rmsVoltage: number;
        ordinal: number;
        constructor(arg0: $Node, arg1: number);
    }
    export class $CircuitBuilder {
        ground(arg0: $Node, arg1: number): void;
        ground(arg0: $WrappedIndexedNode, arg1: number): void;
        ground(arg0: number, arg1: number): void;
        defaultZeroPotential(arg0: number, arg1: number): void;
        defaultZeroPotential(arg0: $WrappedIndexedNode, arg1: number): void;
        defaultZeroPotential(arg0: $Node, arg1: number): void;
        connect(arg0: $Node, arg1: $Node, arg2: $ElectricalProperties): void;
        connect(arg0: number, arg1: number, arg2: $ElectricalProperties): void;
        connect(arg0: $WrappedIndexedNode, arg1: $WrappedIndexedNode, arg2: $ElectricalProperties): void;
        getNode(arg0: number): $WrappedIndexedNode;
        getNode(arg0: $Node): $WrappedIndexedNode;
        allNodes(): $List<$WrappedIndexedNode>;
        addNode(arg0: $Node): $WrappedIndexedNode;
        dfsAndGround(): $List<$List<$WrappedIndexedNode>>;
        connectAll(arg0: $List_<$ObjectDoublePair<$DirectionalNodeConnection>>): void;
        getConnectionProperties(arg0: $WrappedIndexedNode, arg1: $WrappedIndexedNode): $ElectricalProperties;
        getConnectionProperties(arg0: $Node, arg1: $Node): $ElectricalProperties;
        getConnectionProperties(arg0: number, arg1: number): $ElectricalProperties;
        microTickers: $Long2ObjectMap<$MicroTickingElectricalProperties>;
        constructor(arg0: $Set_<$InWorldNode>);
        constructor(arg0: number, arg1: $List_<$WrappedIndexedNode>, arg2: $Object2IntOpenHashMap<$Node>);
    }
    export class $BridgeCollector$Builder {
        ground(arg0: number, arg1: number): void;
        resistor(arg0: number, arg1: number, arg2: number): $BridgeCollector$Builder;
        resistor(arg0: $Node, arg1: $Node, arg2: number): $BridgeCollector$Builder;
        energyLimitedSource(arg0: $InWorldNode, arg1: $InWorldNode, arg2: number, arg3: number): $BridgeCollector$Builder;
        energyLimitedSource(arg0: $InWorldNode, arg1: $InWorldNode, arg2: number, arg3: number, arg4: number): $BridgeCollector$Builder;
        energyLimitedSource(arg0: number, arg1: number, arg2: number, arg3: number): $BridgeCollector$Builder;
        energyLimitedSource(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $BridgeCollector$Builder;
        voltageSourceWithResistance(arg0: $InWorldNode, arg1: $InWorldNode, arg2: number, arg3: number): $BridgeCollector$Builder;
        voltageSourceWithResistance(arg0: number, arg1: number, arg2: number, arg3: number): $BridgeCollector$Builder;
        connect(arg0: number, arg1: number, arg2: $ElectricalProperties): $BridgeCollector$Builder;
        connect(arg0: $InWorldNode, arg1: $InWorldNode, arg2: $ElectricalProperties): $BridgeCollector$Builder;
        node(arg0: $Node): $BridgeCollector$Builder;
        node(arg0: number): $BridgeCollector$Builder;
        idealCurrentSource(arg0: $InWorldNode, arg1: $InWorldNode, arg2: number): $BridgeCollector$Builder;
        idealCurrentSource(arg0: number, arg1: number, arg2: number): $BridgeCollector$Builder;
        idealVoltageSource(arg0: $InWorldNode, arg1: $InWorldNode, arg2: number): $BridgeCollector$Builder;
        idealVoltageSource(arg0: number, arg1: number, arg2: number): $BridgeCollector$Builder;
        collector: $BridgeCollector;
    }
    export class $SimulationResults {
        getVoltages(arg0: $Node): number[];
        getVoltages(arg0: $Node, arg1: number[]): number[];
        getHeatLoss(arg0: $BlockPos_, arg1: number, arg2: number): number;
        getHeatLoss(arg0: $Node, arg1: $Node): number;
        getCurrentThrough(arg0: $BlockPos_, arg1: number, arg2: number): number;
        getCurrentThrough(arg0: $Node, arg1: $Node): number;
        getVoltageAt(arg0: number, arg1: number): number;
        getVoltageAt(arg0: $BlockPos_, arg1: number, arg2: number): number;
        getVoltageAt(arg0: $Node): number;
        getVoltageAt(arg0: number): number;
        getVoltageAt(arg0: $BlockPos_, arg1: number): number;
        getVoltageAt(arg0: $Node, arg1: $Node): number;
        getSD(): $InfrastructureSavedData;
        getNodeID(arg0: $Node, arg1: number): number;
        getVoltageAtSqr(arg0: number, arg1: number): number;
        getVoltageAtSqr(arg0: $Node, arg1: $Node): number;
        getVoltageAtSqr(arg0: $BlockPos_, arg1: number, arg2: number): number;
        circuitBuilder: $CircuitBuilder;
        constructor(arg0: number[], arg1: number, arg2: $Object2DoubleMap<$DirectionalNodeConnection>, arg3: $CircuitBuilder, arg4: $InfrastructureSavedData);
        get SD(): $InfrastructureSavedData;
    }
    export interface $WireType extends RegistryMarked<RegistryTypes.ElectroenergeticsWireTypeTag, RegistryTypes.ElectroenergeticsWireType> {}
    export class $WireType {
        getThickness(): number;
        isInvulnerable(): boolean;
        insulated(): boolean;
        getSag(): number;
        getResistance(): number;
        shouldScaleLast(): boolean;
        getSpooledItem(): $Item;
        getEndPointModel(): $PartialModel;
        getDroppedTag(): $TagKey<$Item>;
        isDecorative(): boolean;
        maxInsulationVoltage(): number;
        insulationResistance(): number;
        overheatedReplacement(): $WireType;
        renderType(): $RenderType;
        getModel(): $PartialModel;
        getMaxLength(): number;
        getDrops(): $Item;
        getMaxTemperature(): number;
        get thickness(): number;
        get invulnerable(): boolean;
        get sag(): number;
        get resistance(): number;
        get spooledItem(): $Item;
        get endPointModel(): $PartialModel;
        get droppedTag(): $TagKey<$Item>;
        get decorative(): boolean;
        get model(): $PartialModel;
        get maxLength(): number;
        get drops(): $Item;
        get maxTemperature(): number;
    }
    /**
     * Values that may be interpreted as {@link $WireType}.
     */
    export type $WireType_ = RegistryTypes.ElectroenergeticsWireType;
    export class $BridgeCollector {
        ground(arg0: $InWorldNode, arg1: number): void;
        defaultZeroPotential(arg0: $InWorldNode, arg1: number): void;
        microTicks(): number;
        builder(arg0: $BlockPos_): $BridgeCollector$Builder;
        getSD(): $InfrastructureSavedData;
        bridge(arg0: $Node, arg1: $Node, arg2: number, arg3: number, arg4: number): void;
        bridge(arg0: $Node, arg1: $Node, arg2: $ElectricalProperties): void;
        getCircuitBuilder(): $CircuitBuilder;
        getTimeStep(): number;
        addInternalNode(arg0: number, arg1: $BlockPos_): void;
        addInternalNode(arg0: $Node): void;
        constructor(arg0: $CircuitBuilder, arg1: $InfrastructureSavedData, arg2: number);
        get SD(): $InfrastructureSavedData;
        get circuitBuilder(): $CircuitBuilder;
        get timeStep(): number;
    }
}
