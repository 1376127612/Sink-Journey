import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/com/alessandro/astages/internal/experimental" {
    export class $ClientReloadResourcePacksEvent extends $Event {
        constructor();
    }
    export class $ClientReloadResourcePacksEvent$Post extends $ClientReloadResourcePacksEvent {
        constructor();
    }
    export class $ClientReloadResourcePacksEvent$Pre extends $ClientReloadResourcePacksEvent {
        constructor();
    }
}
