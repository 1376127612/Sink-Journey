import { $MutableComponent, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Runnable_, $Exception } from "@package/java/lang";
export * as variable from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
export * as operator from "@package/org/cyclops/integrateddynamics/api/evaluate/operator";
export * as expression from "@package/org/cyclops/integrateddynamics/api/evaluate/expression";

declare module "@package/org/cyclops/integrateddynamics/api/evaluate" {
    export class $EvaluationException extends $Exception {
        isRetryEvaluation(): boolean;
        setRetryEvaluation(arg0: boolean): void;
        addResolutionListeners(arg0: $Runnable_): void;
        resolve(): void;
        getErrorMessage(): $MutableComponent;
        constructor(arg0: $MutableComponent_);
        get errorMessage(): $MutableComponent;
    }
}
