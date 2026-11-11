import { $TrainPantographEntry } from "@package/com/george_vi/electroenergetics/content/railway_electrification/pantograph";
import { $List } from "@package/java/util";
import { $WireSimulationState, $WireSimulationState$WireCutHandle } from "@package/com/george_vi/electroenergetics/simulation/infrastructure";
import { $AttachedNode } from "@package/com/george_vi/electroenergetics/foundation/nodes";
export * as sound_effects from "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects";
export * as pantograph from "@package/com/george_vi/electroenergetics/content/railway_electrification/pantograph";
export * as catenary from "@package/com/george_vi/electroenergetics/content/railway_electrification/catenary";

declare module "@package/com/george_vi/electroenergetics/content/railway_electrification" {
    export class $ElectricTrainData {
        pantographs: $List<$TrainPantographEntry>;
        connectedWireState: $WireSimulationState;
        lastSpeed: number;
        wireCutHandle: $WireSimulationState$WireCutHandle;
        hasCreativeSource: boolean;
        accumulators: number;
        trainNode: $AttachedNode;
        displayCurrent: number;
        groundNode: $AttachedNode;
        lastSyncedVoltage: number;
        accumulatorCharge: number;
        lastVoltage: number;
        ticksSinceGaugeSync: number;
        lastSyncedCurrent: number;
        constructor();
    }
}
