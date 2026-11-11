import { $Matrix3x2f } from "@package/org/joml";

declare module "@package/io/github/reserveword/imblocker/common/accessor" {
    export class $LDLibGUIContextAccessor {
    }
    export interface $LDLibGUIContextAccessor {
        imblocker$getPose(): $Matrix3x2f;
    }
    /**
     * Values that may be interpreted as {@link $LDLibGUIContextAccessor}.
     */
    export type $LDLibGUIContextAccessor_ = (() => $Matrix3x2f);
}
