import { $Enum } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/utils" {
    export class $ReorderType extends $Enum<$ReorderType> {
        static values(): $ReorderType[];
        static valueOf(arg0: string): $ReorderType;
        static MOVE_UP: $ReorderType;
        static MOVE_LAST: $ReorderType;
        static MOVE_FIRST: $ReorderType;
        static MOVE_DOWN: $ReorderType;
    }
    /**
     * Values that may be interpreted as {@link $ReorderType}.
     */
    export type $ReorderType_ = "move_first" | "move_up" | "move_down" | "move_last";
}
