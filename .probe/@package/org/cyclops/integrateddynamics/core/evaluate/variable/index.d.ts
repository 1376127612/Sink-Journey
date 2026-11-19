import { $IOperator } from "@package/org/cyclops/integrateddynamics/api/evaluate/operator";
import { $IValueType, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";

declare module "@package/org/cyclops/integrateddynamics/core/evaluate/variable" {
    export class $ValueBase implements $IValue {
        canCast<V extends $IValue>(arg0: $IValueType<V>): boolean;
        cast<V extends $IValue>(arg0: $IValueType<V>): V;
        getType(): $IValueType<any>;
        get type(): $IValueType<any>;
    }
    export class $ValueTypeOperator$ValueOperator extends $ValueBase {
        static of(arg0: $IOperator): $ValueTypeOperator$ValueOperator;
        getRawValue(): $IOperator;
        get rawValue(): $IOperator;
    }
}
