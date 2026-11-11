import { $Collection } from "@package/java/util";
import { $PrettyPrinter } from "@package/org/spongepowered/asm/util";

declare module "@package/org/spongepowered/asm/util/perf" {
    export class $Profiler {
        reset(): void;
        get(arg0: string): $Profiler$Section;
        begin(arg0: number, ...arg1: string[]): $Profiler$Section;
        begin(arg0: string): $Profiler$Section;
        begin(arg0: number, arg1: string): $Profiler$Section;
        begin(...arg0: string[]): $Profiler$Section;
        mark(arg0: string): void;
        static setActive(arg0: boolean): void;
        printer(arg0: boolean, arg1: boolean): $PrettyPrinter;
        static printAuditSummary(): void;
        printSummary(): void;
        static getProfiler(arg0: string): $Profiler;
        static getProfilers(): $Collection<$Profiler>;
        getSections(): $Collection<$Profiler$Section>;
        static ROOT: number;
        static FINE: number;
        constructor(arg0: string);
        static set active(value: boolean);
        static get profilers(): $Collection<$Profiler>;
        get sections(): $Collection<$Profiler$Section>;
    }
    export class $Profiler$Section {
        getName(): string;
        end(): $Profiler$Section;
        next(arg0: string): $Profiler$Section;
        getCount(): number;
        getTime(): number;
        getSeconds(): number;
        getTotalSeconds(): number;
        setInfo(arg0: string): void;
        getTimes(): number[];
        isFine(): boolean;
        isRoot(): boolean;
        getTotalAverageTime(): number;
        getInfo(): string;
        getAverageTime(): number;
        getBaseName(): string;
        getTotalCount(): number;
        getTotalTime(): number;
        get name(): string;
        get count(): number;
        get time(): number;
        get seconds(): number;
        get totalSeconds(): number;
        get times(): number[];
        get fine(): boolean;
        get root(): boolean;
        get totalAverageTime(): number;
        get averageTime(): number;
        get baseName(): string;
        get totalCount(): number;
        get totalTime(): number;
    }
}
