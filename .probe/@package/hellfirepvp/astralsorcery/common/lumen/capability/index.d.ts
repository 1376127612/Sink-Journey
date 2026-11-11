import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Lumen_, $ILumenHandler, $LumenStack, $ILumenHandler$Action_, $Lumen, $LumenLike_ } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $Set_, $List } from "@package/java/util";

declare module "@package/hellfirepvp/astralsorcery/common/lumen/capability" {
    export class $LumenHandlerView$InputFilter {
        static NO_FILTER: $LumenHandlerView$InputFilter;
        static NO_INSERT: $LumenHandlerView$InputFilter;
    }
    export interface $LumenHandlerView$InputFilter {
        and(arg0: $LumenHandlerView$InputFilter_): $LumenHandlerView$InputFilter;
        canInsert(arg0: $LumenStack, arg1: $LumenStack): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LumenHandlerView$InputFilter}.
     */
    export type $LumenHandlerView$InputFilter_ = ((arg0: $LumenStack, arg1: $LumenStack) => boolean);
    export class $LumenStackList {
        setLumenStack(arg0: $LumenStack): void;
        getModifiableLumenStacks(): $List<$LumenStack>;
        clear(): void;
        isEmpty(): boolean;
        static create(): $LumenStackList;
        getLumenStack(arg0: $Lumen_): ($LumenStack) | undefined;
        getLumenStacks(): $List<$LumenStack>;
        static CODEC: $Codec<$LumenStackList>;
        get modifiableLumenStacks(): $List<$LumenStack>;
        get empty(): boolean;
        get lumenStacks(): $List<$LumenStack>;
    }
    export class $LumenHandlerView implements $ILumenHandler {
        clear(): void;
        fill(arg0: $LumenStack, arg1: $ILumenHandler$Action_): number;
        getCapacity(arg0: $LumenLike_): number;
        drain(arg0: $LumenLike_, arg1: number, arg2: $ILumenHandler$Action_): $LumenStack;
        getContainedLumen(arg0: $LumenLike_): ($LumenStack) | undefined;
        getContainedLumen(): $List<$LumenStack>;
        bypassFilters(arg0: $Consumer_<$LumenHandlerView>): void;
        getLumenAccess(arg0: $Direction_ | null): $LumenHandlerView;
        isEmpty(): boolean;
        contains(arg0: $LumenLike_): boolean;
        drain(arg0: $LumenStack, arg1: $ILumenHandler$Action_): $LumenStack;
        constructor(arg0: $LumenStackList, arg1: $Set_<$Direction_>, arg2: $Consumer_<$Lumen>, arg3: $Function_<$Lumen, number>, arg4: $LumenHandlerView$InputFilter_, arg5: $LumenHandlerView$ExtractFilter_);
        get empty(): boolean;
    }
    export class $LumenHandlerView$ExtractFilter {
        static NO_FILTER: $LumenHandlerView$ExtractFilter;
        static NO_EXTRACT: $LumenHandlerView$ExtractFilter;
    }
    export interface $LumenHandlerView$ExtractFilter {
        and(arg0: $LumenHandlerView$ExtractFilter_): $LumenHandlerView$ExtractFilter;
        canExtract(arg0: number, arg1: $LumenStack): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LumenHandlerView$ExtractFilter}.
     */
    export type $LumenHandlerView$ExtractFilter_ = ((arg0: number, arg1: $LumenStack) => boolean);
}
