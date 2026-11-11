import { $IBody } from "@package/com/denfop/api/space";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/space/fakebody" {
    export class $SpaceOperation {
        setAuto(arg0: boolean): void;
        getBody(): $IBody;
        getOperation(): $EnumOperation;
        writeTag(arg0: $CompoundTag_): $CompoundTag;
        getAuto(): boolean;
        setOperation(arg0: $EnumOperation_): void;
        constructor(arg0: $IBody, arg1: $EnumOperation_);
        constructor(arg0: $IBody, arg1: $CompoundTag_);
        constructor(arg0: $IBody, arg1: $EnumOperation_, arg2: boolean);
        get body(): $IBody;
    }
    export class $EnumOperation extends $Enum<$EnumOperation> {
        static values(): $EnumOperation[];
        static valueOf(arg0: string): $EnumOperation;
        static getID(arg0: number): $EnumOperation;
        static SUCCESS: $EnumOperation;
        static WAIT: $EnumOperation;
        static FAIL: $EnumOperation;
    }
    /**
     * Values that may be interpreted as {@link $EnumOperation}.
     */
    export type $EnumOperation_ = "success" | "fail" | "wait";
}
