import { $IOperator } from "@package/org/cyclops/integrateddynamics/api/evaluate/operator";
import { $IValueType, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";

declare module "@package/org/cyclops/integrateddynamics/core/evaluate/variable" {
    export class $ValueBase implements $IValue {
        cast<V extends $IValue>(arg0: $IValueType<V>): V;
        getType(): $IValueType<any>;
        canCast<V extends $IValue>(arg0: $IValueType<V>): boolean;
        get type(): $IValueType<any>;
    }
    export class $ValueTypeOperator$ValueOperator extends $ValueBase {
        static of(arg0: $IOperator): $ValueTypeOperator$ValueOperator;
        getRawValue(): $IOperator;
        get rawValue(): $IOperator;
    }
}
