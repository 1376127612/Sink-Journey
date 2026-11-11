import { $List } from "@package/java/util";

declare module "@package/com/george_vi/electroenergetics/simulation/util" {
    export class $SimulatorProfiler$ResultEntry {
        timeTookNanos: number;
        children: $List<$SimulatorProfiler$ResultEntry>;
        id: string;
    }
    export class $SimulatorProfiler {
        getProfilerOverheadNanos(): number;
        getSolverNanos(): number;
        getThreadedNanos(): number;
        clear(): void;
        push(arg0: string): void;
        pop(): void;
        popPush(arg0: string): void;
        getResults(): $List<$SimulatorProfiler$ResultEntry>;
        addSolverNanos(arg0: number): void;
        addThreadedNanos(arg0: number): void;
        constructor();
        get profilerOverheadNanos(): number;
        get solverNanos(): number;
        get threadedNanos(): number;
        get results(): $List<$SimulatorProfiler$ResultEntry>;
    }
}
