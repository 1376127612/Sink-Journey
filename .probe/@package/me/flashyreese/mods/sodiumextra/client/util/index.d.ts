import { $PaniniProjection } from "@package/me/flashyreese/mods/sodiumextra/client/render";

declare module "@package/me/flashyreese/mods/sodiumextra/client/util" {
    export class $PaniniProjectionAccess {
    }
    export interface $PaniniProjectionAccess {
        sodiumExtra$getPaniniProjection(): $PaniniProjection;
    }
    /**
     * Values that may be interpreted as {@link $PaniniProjectionAccess}.
     */
    export type $PaniniProjectionAccess_ = (() => $PaniniProjection);
}
