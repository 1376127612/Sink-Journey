import { $Event } from "@package/net/neoforged/bus/api";
import { $Set_, $Set } from "@package/java/util";
import { $AOperation_, $AOperation } from "@package/com/alessandro/astages/api/constant";

declare module "@package/com/alessandro/astages/api/event/sync" {
    export class $ClientSynchronizeStagesEvent extends $ClientStageEvent {
        constructor(stagesSynced: $Set_<string>, operation: $AOperation_);
    }
    export class $ClientSynchronizeServerStagesEvent extends $ClientStageEvent {
        constructor(serverStagesSynced: $Set_<string>, operation: $AOperation_);
    }
    export class $ClientStageEvent extends $Event {
        getStagesSynced(): $Set<string>;
        getOperation(): $AOperation;
        constructor(stagesSynced: $Set_<string>, operation: $AOperation_);
        get stagesSynced(): $Set<string>;
        get operation(): $AOperation;
    }
}
