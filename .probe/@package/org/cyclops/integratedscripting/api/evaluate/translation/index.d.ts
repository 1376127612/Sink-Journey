import { $Tag } from "@package/net/minecraft/nbt";
import { $ModLifecycleEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $IValueType, $ValueDeseralizationContext_, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $EvaluationException } from "@package/org/cyclops/integrateddynamics/api/evaluate";
import { $MutableComponent, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Value, $Context } from "@package/org/graalvm/polyglot";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $IRegistry } from "@package/org/cyclops/cyclopscore/init";

declare module "@package/org/cyclops/integratedscripting/api/evaluate/translation" {
    export class $IValueTranslatorRegistry {
    }
    export interface $IValueTranslatorRegistry extends $IRegistry {
        translateFromGraal<V extends $IValue>(arg0: $Context, arg1: $Value, arg2: $IEvaluationExceptionFactory_, arg3: $ValueDeseralizationContext_): V;
        translateToGraal<V extends $IValue>(arg0: $Context, arg1: V, arg2: $IEvaluationExceptionFactory_, arg3: $ValueDeseralizationContext_): $Value;
        translateToNbt<V extends $IValue>(arg0: $Context, arg1: V, arg2: $IEvaluationExceptionFactory_): $Tag;
        getValueTypeTranslator<V extends $IValue>(arg0: $IValueType<V>): $IValueTranslator<any>;
        getScriptValueTranslator(arg0: $Value): $IValueTranslator<any>;
        register(arg0: $IValueTranslator<any>): void;
    }
    export class $ValueTranslatorRegisterEvent extends $ModLifecycleEvent {
        getRegistry(): $IValueTranslatorRegistry;
        constructor(arg0: $ModContainer, arg1: $IValueTranslatorRegistry);
        get registry(): $IValueTranslatorRegistry;
    }
    export class $IEvaluationExceptionFactory {
    }
    export interface $IEvaluationExceptionFactory {
        createError(arg0: string): $EvaluationException;
        createError(arg0: $MutableComponent_): $EvaluationException;
    }
    /**
     * Values that may be interpreted as {@link $IEvaluationExceptionFactory}.
     */
    export type $IEvaluationExceptionFactory_ = ((arg0: $MutableComponent) => $EvaluationException);
    export class $IValueTranslator<V extends $IValue> {
    }
    export interface $IValueTranslator<V extends $IValue> {
        getValueType(): $IValueType<never>;
        translateFromGraal(arg0: $Context, arg1: $Value, arg2: $IEvaluationExceptionFactory_, arg3: $ValueDeseralizationContext_): V;
        translateToGraal(arg0: $Context, arg1: V, arg2: $IEvaluationExceptionFactory_, arg3: $ValueDeseralizationContext_): $Value;
        translateToNbt(arg0: $Context, arg1: V, arg2: $IEvaluationExceptionFactory_): $Tag;
        canTranslateNbt(): boolean;
        canHandleGraalValue(arg0: $Value): boolean;
        getGraalValueMemberKey(): string;
        get valueType(): $IValueType<never>;
        get graalValueMemberKey(): string;
    }
}
