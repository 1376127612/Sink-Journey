import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/com/alessandro/astages/api/event/update" {
    export class $ClientRecipeUpdateEvent extends $Event {
        constructor();
    }
    export class $ClientItemUpdateEvent extends $Event {
        constructor();
    }
    export class $ClientOreUpdateEvent extends $Event {
        constructor();
    }
}
