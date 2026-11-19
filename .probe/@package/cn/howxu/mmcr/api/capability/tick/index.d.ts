import { $CapabilitySnapshot_, $CapabilitySnapshot } from "@package/cn/howxu/mmcr/api/capability";
import { $RecipeTickContext_, $RecipeTickContext, $MachineBehaviorContext } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $ExecutionStatus_, $ExecutionStatus } from "@package/cn/howxu/mmcr/api/capability/status";
import { $CapabilityOperation, $CapabilityOperation_ } from "@package/cn/howxu/mmcr/api/capability/plan";

declare module "@package/cn/howxu/mmcr/api/capability/tick" {
    export class $CapabilityTickContext extends $Record {
        gameTime(): number;
        machineContext(): $MachineBehaviorContext;
        capabilitySnapshot(): $CapabilitySnapshot;
        parallelism(): number;
        phase(): $CapabilityTickPhase;
        recipeState(): $RecipeTickContext;
        constructor(gameTime: number, phase: $CapabilityTickPhase_, recipeState: $RecipeTickContext_, parallelism: number, capabilitySnapshot: $CapabilitySnapshot_, machineContext: $MachineBehaviorContext);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityTickContext}.
     */
    export type $CapabilityTickContext_ = { phase?: $CapabilityTickPhase_, machineContext?: $MachineBehaviorContext, recipeState?: $RecipeTickContext_, capabilitySnapshot?: $CapabilitySnapshot_, parallelism?: number, gameTime?: number,  } | [phase?: $CapabilityTickPhase_, machineContext?: $MachineBehaviorContext, recipeState?: $RecipeTickContext_, capabilitySnapshot?: $CapabilitySnapshot_, parallelism?: number, gameTime?: number, ];
    export class $CapabilityTickResult extends $Record {
        stateChanged(): boolean;
        static empty(): $CapabilityTickResult;
        failure(): $ExecutionStatus;
        operations(): $List<$CapabilityOperation>;
        constructor(operations: $List_<$CapabilityOperation_>, failure: $ExecutionStatus_, stateChanged: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityTickResult}.
     */
    export type $CapabilityTickResult_ = { stateChanged?: boolean, failure?: $ExecutionStatus_, operations?: $List_<$CapabilityOperation_>,  } | [stateChanged?: boolean, failure?: $ExecutionStatus_, operations?: $List_<$CapabilityOperation_>, ];
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
