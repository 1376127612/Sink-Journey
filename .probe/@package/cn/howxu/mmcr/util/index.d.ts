import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/cn/howxu/mmcr/util" {
    export class $IOType extends $Enum<$IOType> implements $StringRepresentable {
        static values(): $IOType[];
        static valueOf(name: string): $IOType;
        getSerializedName(): string;
        opposite(): $IOType;
        getRemappedEnumConstantName(): string;
        static INPUT: $IOType;
        static OUTPUT: $IOType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $IOType}.
     */
    export type $IOType_ = "input" | "output";
}
