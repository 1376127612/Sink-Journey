import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/heat" {
    export class $IHeatCapacitor {
    }
    export interface $IHeatCapacitor extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        getTemperature(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        handleHeat(arg0: number): void;
        isAmbientTemperature(): boolean;
        getInverseConduction(): number;
        getInverseInsulation(): number;
        getHeatCapacity(): number;
        setHeat(arg0: number): void;
        getHeat(): number;
        get temperature(): number;
        get ambientTemperature(): boolean;
        get inverseConduction(): number;
        get inverseInsulation(): number;
        get heatCapacity(): number;
    }
    export class $HeatAPI$HeatTransfer extends $Record {
        environmentTransfer(): number;
        adjacentTransfer(): number;
        constructor(adjacentTransfer: number, environmentTransfer: number);
    }
    /**
     * Values that may be interpreted as {@link $HeatAPI$HeatTransfer}.
     */
    export type $HeatAPI$HeatTransfer_ = { environmentTransfer?: number, adjacentTransfer?: number,  } | [environmentTransfer?: number, adjacentTransfer?: number, ];
    export class $IMekanismHeatHandler {
    }
    export interface $IMekanismHeatHandler extends $ISidedHeatHandler, $IContentsListener {
        getTemperature(arg0: number, arg1: $Direction_): number;
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTotalHeatCapacity(arg0: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getTotalTemperature(arg0: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        canHandleHeat(): boolean;
        getHeatCapacitors(arg0: $Direction_): $List<$IHeatCapacitor>;
    }
    export class $IHeatHandler {
    }
    export interface $IHeatHandler {
        getTemperature(arg0: number): number;
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getHeatCapacitorCount(): number;
        getTotalHeatCapacity(): number;
        getTotalInverseConduction(): number;
        getInverseConduction(arg0: number): number;
        getTotalTemperature(): number;
        getHeatCapacity(arg0: number): number;
        get heatCapacitorCount(): number;
        get totalHeatCapacity(): number;
        get totalInverseConduction(): number;
        get totalTemperature(): number;
    }
}
