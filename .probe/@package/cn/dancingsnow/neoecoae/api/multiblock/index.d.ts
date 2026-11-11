import { $UnaryOperator_ } from "@package/java/util/function";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/cn/dancingsnow/neoecoae/api/multiblock" {
    export class $ECOMachineKind extends $Enum<$ECOMachineKind> {
        static values(): $ECOMachineKind[];
        static valueOf(arg0: string): $ECOMachineKind;
        static STORAGE: $ECOMachineKind;
        static CRAFTING: $ECOMachineKind;
        static COMPUTATION: $ECOMachineKind;
    }
    /**
     * Values that may be interpreted as {@link $ECOMachineKind}.
     */
    export type $ECOMachineKind_ = "computation" | "crafting" | "storage";
    export class $ECOMultiblockRequirement extends $Record {
        static of(arg0: $BlockState_, ...arg1: $BlockState_[]): $ECOMultiblockRequirement;
        transform(arg0: $UnaryOperator_<$BlockState>): $ECOMultiblockRequirement;
        accepts(arg0: $BlockState_): boolean;
        defaultState(): $BlockState;
        alternatives(): $List<$BlockState>;
        constructor(defaultState: $BlockState_, alternatives: $List_<$BlockState_>);
    }
    /**
     * Values that may be interpreted as {@link $ECOMultiblockRequirement}.
     */
    export type $ECOMultiblockRequirement_ = { alternatives?: $List_<$BlockState_>, defaultState?: $BlockState_,  } | [alternatives?: $List_<$BlockState_>, defaultState?: $BlockState_, ];
}
