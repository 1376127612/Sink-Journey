import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $ECOMultiblockRequirement_, $ECOMultiblockRequirement } from "@package/cn/dancingsnow/neoecoae/api/multiblock";

declare module "@package/cn/dancingsnow/neoecoae/multiblock/placement" {
    export class $PlannedBlock extends $Record {
        targetState(): $BlockState;
        requirement(): $ECOMultiblockRequirement;
        relativePos(): $BlockPos;
        requiredItem(): $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $ItemStack_);
        constructor(relativePos: $BlockPos_, targetState: $BlockState_, requiredItem: $ItemStack_, requirement: $ECOMultiblockRequirement_);
    }
    /**
     * Values that may be interpreted as {@link $PlannedBlock}.
     */
    export type $PlannedBlock_ = { requirement?: $ECOMultiblockRequirement_, requiredItem?: $ItemStack_, relativePos?: $BlockPos_, targetState?: $BlockState_,  } | [requirement?: $ECOMultiblockRequirement_, requiredItem?: $ItemStack_, relativePos?: $BlockPos_, targetState?: $BlockState_, ];
    export class $RequiredItem extends $Record {
        stack(): $ItemStack;
        isEmpty(): boolean;
        count(): number;
        grow(arg0: number): $RequiredItem;
        stackWithCount(): $ItemStack;
        constructor(stack: $ItemStack_, count: number);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RequiredItem}.
     */
    export type $RequiredItem_ = { count?: number, stack?: $ItemStack_,  } | [count?: number, stack?: $ItemStack_, ];
}
