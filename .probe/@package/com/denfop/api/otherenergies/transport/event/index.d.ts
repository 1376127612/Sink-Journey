import { $Level_ } from "@package/net/minecraft/world/level";
import { $ITransportTile } from "@package/com/denfop/api/otherenergies/transport";
import { $LevelEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/api/otherenergies/transport/event" {
    export class $TransportTileReloadEvent extends $LevelEvent {
        oldtile: $ITransportTile<any, any>;
        newtile: $ITransportTile<any, any>;
        constructor(arg0: $Level_, arg1: $ITransportTile<any, any>, arg2: $ITransportTile<any, any>);
    }
    export class $TransportTileLoadEvent<T, E> extends $LevelEvent {
        tile: $ITransportTile<T, E>;
        constructor(arg0: $Level_, arg1: $ITransportTile<T, E>);
    }
    export class $TransportTileUnLoadEvent<T, E> extends $LevelEvent {
        tile: $ITransportTile<T, E>;
        constructor(arg0: $Level_, arg1: $ITransportTile<T, E>);
    }
}
