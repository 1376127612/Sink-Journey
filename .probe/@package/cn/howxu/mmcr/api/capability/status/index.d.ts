import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/api/capability/status" {
    export class $FailureReport$Candidate extends $Record {
        status(): $ExecutionStatus;
        validity(): number;
        constructor(status: $ExecutionStatus_, validity: number);
    }
    /**
     * Values that may be interpreted as {@link $FailureReport$Candidate}.
     */
    export type $FailureReport$Candidate_ = { status?: $ExecutionStatus_, validity?: number,  } | [status?: $ExecutionStatus_, validity?: number, ];
    export class $FailureTrace extends $Record {
        append(frame: $FailureTrace$Frame_): $FailureTrace;
        static single(frame: $FailureTrace$Frame_): $FailureTrace;
        frames(): $List<$FailureTrace$Frame>;
        constructor(frames: $List_<$FailureTrace$Frame_>);
    }
    /**
     * Values that may be interpreted as {@link $FailureTrace}.
     */
    export type $FailureTrace_ = { frames?: $List_<$FailureTrace$Frame_>,  } | [frames?: $List_<$FailureTrace$Frame_>, ];
    export class $FailureOccurrence extends $Record {
        reason(): $FailureReason;
        append(source: $ResourceLocation_, phase: $FailurePhase_, recipeId: $ResourceLocation_, requirementIndex: number): $FailureOccurrence;
        append(source: string, phase: $FailurePhase_, recipeId: string, requirementIndex: number): $FailureOccurrence;
        trace(): $FailureTrace;
        static at(reason: $FailureReason_, source: $ResourceLocation_, phase: $FailurePhase_, recipeId: $ResourceLocation_, requirementIndex: number, details: $Map_<string, string>): $FailureOccurrence;
        details(): $Map<string, string>;
        constructor(reason: $FailureReason_, trace: $FailureTrace_, details: $Map_<string, string>);
    }
    /**
     * Values that may be interpreted as {@link $FailureOccurrence}.
     */
    export type $FailureOccurrence_ = { trace?: $FailureTrace_, details?: $Map_<string, string>, reason?: $FailureReason_,  } | [trace?: $FailureTrace_, details?: $Map_<string, string>, reason?: $FailureReason_, ];
    export class $FailureReport$Selection extends $Enum<$FailureReport$Selection> {
        static values(): $FailureReport$Selection[];
        static valueOf(name: string): $FailureReport$Selection;
        static REQUIREMENT_PROGRESS: $FailureReport$Selection;
        static REASON_PRIORITY: $FailureReport$Selection;
    }
    /**
     * Values that may be interpreted as {@link $FailureReport$Selection}.
     */
    export type $FailureReport$Selection_ = "reason_priority" | "requirement_progress";
    export class $FailureReport extends $Record {
        static empty(): $FailureReport;
        candidates(): $List<$FailureReport$Candidate>;
        plus(status: $ExecutionStatus_, validity: number): $FailureReport;
        primary(): $ExecutionStatus;
        selection(): $FailureReport$Selection;
        static forRecipeSearch(): $FailureReport;
        constructor(candidates: $List_<$FailureReport$Candidate_>);
        constructor(candidates: $List_<$FailureReport$Candidate_>, selection: $FailureReport$Selection_);
    }
    /**
     * Values that may be interpreted as {@link $FailureReport}.
     */
    export type $FailureReport_ = { selection?: $FailureReport$Selection_, candidates?: $List_<$FailureReport$Candidate_>,  } | [selection?: $FailureReport$Selection_, candidates?: $List_<$FailureReport$Candidate_>, ];
    export class $FailurePhase extends $Enum<$FailurePhase> {
        static values(): $FailurePhase[];
        static valueOf(name: string): $FailurePhase;
        static PER_TICK: $FailurePhase;
        static RUNTIME: $FailurePhase;
        static REQUIREMENT_PLAN: $FailurePhase;
        static RECIPE_START: $FailurePhase;
        static CAPABILITY_COMMIT: $FailurePhase;
        static LEVEL_CHECK: $FailurePhase;
        static UNKNOWN: $FailurePhase;
        static RECIPE_LOAD: $FailurePhase;
        static CAPABILITY_PREPARE: $FailurePhase;
        static RECIPE_SEARCH: $FailurePhase;
        static FINISH: $FailurePhase;
    }
    /**
     * Values that may be interpreted as {@link $FailurePhase}.
     */
    export type $FailurePhase_ = "capability_prepare" | "capability_commit" | "requirement_plan" | "level_check" | "recipe_search" | "recipe_load" | "recipe_start" | "per_tick" | "finish" | "runtime" | "unknown";
    export class $ExecutionStatus extends $Record {
        reason(): $FailureReason;
        id(): $ResourceLocation;
        source(): $ResourceLocation;
        failure(): $FailureOccurrence;
        details(): $Map<string, string>;
        severity(): $StatusSeverity;
        static blocked(id: $ResourceLocation_, source: $ResourceLocation_, failure: $FailureOccurrence_): $ExecutionStatus;
        constructor(id: $ResourceLocation_, severity: $StatusSeverity_, source: $ResourceLocation_, details: $Map_<string, string>);
        constructor(id: $ResourceLocation_, severity: $StatusSeverity_, source: $ResourceLocation_, failure: $FailureOccurrence_);
    }
    /**
     * Values that may be interpreted as {@link $ExecutionStatus}.
     */
    export type $ExecutionStatus_ = { severity?: $StatusSeverity_, source?: $ResourceLocation_, id?: $ResourceLocation_, failure?: $FailureOccurrence_,  } | [severity?: $StatusSeverity_, source?: $ResourceLocation_, id?: $ResourceLocation_, failure?: $FailureOccurrence_, ];
    export class $StatusSeverity extends $Enum<$StatusSeverity> {
        static values(): $StatusSeverity[];
        static valueOf(name: string): $StatusSeverity;
        static BLOCKED: $StatusSeverity;
        static INFO: $StatusSeverity;
        static FAILURE: $StatusSeverity;
    }
    /**
     * Values that may be interpreted as {@link $StatusSeverity}.
     */
    export type $StatusSeverity_ = "info" | "blocked" | "failure";
    export class $FailureReason extends $Record {
        priority(): number;
        id(): $ResourceLocation;
        translationKey(): string;
        constructor(id: $ResourceLocation_, translationKey: string, priority: number);
        constructor(id: $ResourceLocation_, translationKey: string);
    }
    /**
     * Values that may be interpreted as {@link $FailureReason}.
     */
    export type $FailureReason_ = { priority?: number, id?: $ResourceLocation_, translationKey?: string,  } | [priority?: number, id?: $ResourceLocation_, translationKey?: string, ];
}
