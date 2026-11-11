import { $ServerLevel } from "@package/net/minecraft/server/level";

declare module "@package/dev/ftb/mods/ftbchunks/core/mixin" {
    export class $PortalForcerAccessor {
    }
    export interface $PortalForcerAccessor {
        getLevel(): $ServerLevel;
        get level(): $ServerLevel;
    }
    /**
     * Values that may be interpreted as {@link $PortalForcerAccessor}.
     */
    export type $PortalForcerAccessor_ = (() => $ServerLevel);
}
