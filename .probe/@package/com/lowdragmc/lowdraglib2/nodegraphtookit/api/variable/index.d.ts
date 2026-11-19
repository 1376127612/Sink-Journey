import { $DataResult } from "@package/com/mojang/serialization";
import { $Type } from "@package/java/lang/reflect";
import { $Enum } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/variable" {
    export class $IVariable {
    }
    export interface $IVariable {
        getDataType(): $Type;
        getVariableKind(): $VariableKind;
        getName(): string;
        tryGetDefaultValue<T>(arg0: $Type): $DataResult<T>;
        get dataType(): $Type;
        get variableKind(): $VariableKind;
        get name(): string;
    }
    export class $VariableKind extends $Enum<$VariableKind> {
        static values(): $VariableKind[];
        static valueOf(arg0: string): $VariableKind;
        static INPUT: $VariableKind;
        static OUTPUT: $VariableKind;
        static LOCAL: $VariableKind;
    }
    /**
     * Values that may be interpreted as {@link $VariableKind}.
     */
    export type $VariableKind_ = "local" | "input" | "output";
}
