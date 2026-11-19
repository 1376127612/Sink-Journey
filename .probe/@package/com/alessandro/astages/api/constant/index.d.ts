import { $Enum } from "@package/java/lang";

declare module "@package/com/alessandro/astages/api/constant" {
    export class $ACompareCondition extends $Enum<$ACompareCondition> {
        static values(): $ACompareCondition[];
        static valueOf(name: string): $ACompareCondition;
        static GREAT: $ACompareCondition;
        static EQUAL: $ACompareCondition;
        static LESS: $ACompareCondition;
        static LESS_EQUAL: $ACompareCondition;
        static GREAT_EQUAL: $ACompareCondition;
    }
    /**
     * Values that may be interpreted as {@link $ACompareCondition}.
     */
    export type $ACompareCondition_ = "equal" | "less" | "less_equal" | "great" | "great_equal";
    export class $AOperation extends $Enum<$AOperation> {
        supportOnlyOneStage(): boolean;
        handleStageRecognization(): boolean;
        static values(): $AOperation[];
        static valueOf(name: string): $AOperation;
        needToBeChecked(): boolean;
        static ADD: $AOperation;
        static REMOVE: $AOperation;
        static ADD_ALL: $AOperation;
        static LOGIN: $AOperation;
        static REMOVE_ALL: $AOperation;
    }
    /**
     * Values that may be interpreted as {@link $AOperation}.
     */
    export type $AOperation_ = "add" | "add_all" | "remove" | "remove_all" | "login";
    export class $AFilter extends $Enum<$AFilter> {
        static values(): $AFilter[];
        static valueOf(name: string): $AFilter;
        static ALL: $AFilter;
        static PARTIAL: $AFilter;
    }
    /**
     * Values that may be interpreted as {@link $AFilter}.
     */
    export type $AFilter_ = "all" | "partial";
    export class $AEventPhase extends $Enum<$AEventPhase> {
        static values(): $AEventPhase[];
        static valueOf(name: string): $AEventPhase;
        static RELOAD_FINISHED: $AEventPhase;
        static RELOAD_STARTED: $AEventPhase;
    }
    /**
     * Values that may be interpreted as {@link $AEventPhase}.
     */
    export type $AEventPhase_ = "reload_started" | "reload_finished";
}
