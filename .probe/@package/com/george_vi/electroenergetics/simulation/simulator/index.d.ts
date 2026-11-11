import { $Level } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SimulationResults } from "@package/com/george_vi/electroenergetics/simulation";
import { $Future } from "@package/java/util/concurrent";
import { $InfrastructureSavedData } from "@package/com/george_vi/electroenergetics/simulation/infrastructure";
import { $Map, $List } from "@package/java/util";
import { $SimulatorProfiler$ResultEntry, $SimulatorProfiler } from "@package/com/george_vi/electroenergetics/simulation/util";

declare module "@package/com/george_vi/electroenergetics/simulation/simulator" {
    export class $SimulationStats {
        totalDevices: number;
        totalSeparatedNodes: number[];
        totalMicroTickers: number;
        totalOptimizedNodes: number[];
        totalNodes: number;
        constructor();
    }
    export class $SimulationTicker {
        tick(): void;
        endTick(): void;
        static stopServer(): void;
        static runServer(): void;
        sd: $InfrastructureSavedData;
        level: $ServerLevel;
        future: $Future<$SimulationResults>;
        static allStats: $Map<$Level, $SimulationStats>;
        lastResults: $SimulationResults;
        lastProfilerResults: $List<$SimulatorProfiler$ResultEntry>;
        static profiler: $SimulatorProfiler;
        lastStats: $SimulationStats;
        microTicks: number;
        constructor(arg0: $ServerLevel, arg1: $InfrastructureSavedData);
    }
}
