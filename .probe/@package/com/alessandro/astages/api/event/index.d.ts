import { $Event } from "@package/net/neoforged/bus/api";
import { $AEventPhase_, $AEventPhase } from "@package/com/alessandro/astages/api/constant";
export * as custom from "@package/com/alessandro/astages/api/event/custom";
export * as world from "@package/com/alessandro/astages/api/event/world";
export * as server from "@package/com/alessandro/astages/api/event/server";
export * as reload from "@package/com/alessandro/astages/api/event/reload";
export * as sync from "@package/com/alessandro/astages/api/event/sync";
export * as update from "@package/com/alessandro/astages/api/event/update";
export * as player from "@package/com/alessandro/astages/api/event/player";

declare module "@package/com/alessandro/astages/api/event" {
    export class $AddRestrictionEvent extends $Event {
        getEventPhase(): $AEventPhase;
        constructor(phase: $AEventPhase_);
        get eventPhase(): $AEventPhase;
    }
    export class $AddStageEvent extends $Event {
        getEventPhase(): $AEventPhase;
        constructor(phase: $AEventPhase_);
        get eventPhase(): $AEventPhase;
    }
}
