import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/xaero/hud/minimap/waypoint/thirdparty" {
    export class $ThirdPartyWaypointManager {
        get(arg0: $ResourceLocation_): $ThirdPartyWaypoints;
        clear(): void;
        getCount(): number;
        getAll(): $List<$ThirdPartyWaypoints>;
        getByIndex(arg0: number): $ThirdPartyWaypoints;
        clearOrigin(arg0: $ResourceLocation_): void;
        getOriginCount(): number;
        constructor(arg0: $MinimapSession);
        get count(): number;
        get all(): $List<$ThirdPartyWaypoints>;
        get originCount(): number;
    }
}
