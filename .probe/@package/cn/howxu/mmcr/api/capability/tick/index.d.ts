import { $CapabilitySnapshot_, $CapabilitySnapshot } from "@package/cn/howxu/mmcr/api/capability";
import { $RecipeTickContext_, $MachineBehaviorContext, $RecipeTickContext } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $ExecutionStatus_, $ExecutionStatus } from "@package/cn/howxu/mmcr/api/capability/status";
import { $CapabilityOperation, $CapabilityOperation_ } from "@package/cn/howxu/mmcr/api/capability/plan";

declare module "@package/cn/howxu/mmcr/api/capability/tick" {
    export class $CapabilityTickContext extends $Record {
        parallelism(): number;
        phase(): $CapabilityTickPhase;
        capabilitySnapshot(): $CapabilitySnapshot;
        gameTime(): number;
        machineContext(): $MachineBehaviorContext;
        recipeState(): $RecipeTickContext;
        constructor(gameTime: number, phase: $CapabilityTickPhase_, recipeState: $RecipeTickContext_, parallelism: number, capabilitySnapshot: $CapabilitySnapshot_, machineContext: $MachineBehaviorContext);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityTickContext}.
     */
    export type $CapabilityTickContext_ = { parallelism?: number, gameTime?: number, phase?: $CapabilityTickPhase_, machineContext?: $MachineBehaviorContext, recipeState?: $RecipeTickContext_, capabilitySnapshot?: $CapabilitySnapshot_,  } | [parallelism?: number, gameTime?: number, phase?: $CapabilityTickPhase_, machineContext?: $MachineBehaviorContext, recipeState?: $RecipeTickContext_, capabilitySnapshot?: $CapabilitySnapshot_, ];
    export class $CapabilityTickResult extends $Record {
        static empty(): $CapabilityTickResult;
        failure(): $ExecutionStatus;
        operations(): $List<$CapabilityOperation>;
        stateChanged(): boolean;
        constructor(operations: $List_<$CapabilityOperation_>, failure: $ExecutionStatus_, stateChanged: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityTickResult}.
     */
    export type $CapabilityTickResult_ = { operations?: $List_<$CapabilityOperation_>, stateChanged?: boolean, failure?: $ExecutionStatus_,  } | [operations?: $List_<$CapabilityOperation_>, stateChanged?: boolean, failure?: $ExecutionStatus_, ];
    export class $CapabilityTickPhase extends $Enum<$CapabilityTickPhase> {
        static values(): $CapabilityTickPhase[];
        static valueOf(name: string): $CapabilityTickPhase;
        static IDLE: $CapabilityTickPhase;
        static AFTER_RECIPE: $CapabilityTickPhase;
        static AFTER_INPUTS: $CapabilityTickPhase;
        static BEFORE_RECIPE: $CapabilityTickPhase;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityTickPhase}.
     */
    export type $CapabilityTickPhase_ = "before_recipe" | "after_inputs" | "after_recipe" | "idle";
}
