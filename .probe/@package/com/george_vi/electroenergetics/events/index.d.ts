import { $SimulationResults, $CircuitBuilder } from "@package/com/george_vi/electroenergetics/simulation";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $InfrastructureSavedData } from "@package/com/george_vi/electroenergetics/simulation/infrastructure";

declare module "@package/com/george_vi/electroenergetics/events" {
    export class $AddToElectricGraphEvent extends $Event {
        sd: $InfrastructureSavedData;
        level: $ServerLevel;
        builder: $CircuitBuilder;
        constructor(arg0: $CircuitBuilder, arg1: $ServerLevel, arg2: $InfrastructureSavedData);
    }
    export class $FinishElectricSimulationEvent extends $Event {
        sd: $InfrastructureSavedData;
        level: $ServerLevel;
        results: $SimulationResults;
        constructor(arg0: $SimulationResults, arg1: $ServerLevel, arg2: $InfrastructureSavedData);
    }
}
