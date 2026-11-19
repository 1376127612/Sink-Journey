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
        getInverseConduction(): number;
        getInverseInsulation(): number;
        setHeat(arg0: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getHeat(): number;
        getTemperature(): number;
        isAmbientTemperature(): boolean;
        handleHeat(arg0: number): void;
        getHeatCapacity(): number;
        get inverseConduction(): number;
        get inverseInsulation(): number;
        get temperature(): number;
        get ambientTemperature(): boolean;
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
    export type $HeatAPI$HeatTransfer_ = { adjacentTransfer?: number, environmentTransfer?: number,  } | [adjacentTransfer?: number, environmentTransfer?: number, ];
    export class $IMekanismHeatHandler {
    }
    export interface $IMekanismHeatHandler extends $ISidedHeatHandler, $IContentsListener {
        getTotalHeatCapacity(arg0: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
        getTotalTemperature(arg0: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getTemperature(arg0: number, arg1: $Direction_): number;
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getHeatCapacitors(arg0: $Direction_): $List<$IHeatCapacitor>;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        canHandleHeat(): boolean;
    }
    export class $IHeatHandler {
    }
    export interface $IHeatHandler {
        getTotalHeatCapacity(): number;
        getTotalTemperature(): number;
        getTotalInverseConduction(): number;
        getInverseConduction(arg0: number): number;
        getHeatCapacitorCount(): number;
        getTemperature(arg0: number): number;
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getHeatCapacity(arg0: number): number;
        get totalHeatCapacity(): number;
        get totalTemperature(): number;
        get totalInverseConduction(): number;
        get heatCapacitorCount(): number;
    }
}
