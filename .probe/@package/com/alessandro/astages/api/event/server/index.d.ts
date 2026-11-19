import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerEvent, $MultipleStagesServerEvent, $SingleStageServerEvent } from "@package/com/alessandro/astages/api/event/custom";
import { $Set_, $Set } from "@package/java/util";
import { $AOperation_, $AOperation } from "@package/com/alessandro/astages/api/constant";

declare module "@package/com/alessandro/astages/api/event/server" {
    export class $AllStagesRemovedServerEvent extends $MultipleStagesServerEvent {
        stages: $Set<string>;
        constructor(server: $MinecraftServer, stages: $Set_<string>);
    }
    export class $StageLoginServerEvent extends $MultipleStagesServerEvent {
        stages: $Set<string>;
        constructor(server: $MinecraftServer, stages: $Set_<string>);
    }
    export class $AllStagesAddedServerEvent extends $MultipleStagesServerEvent {
        stages: $Set<string>;
        constructor(server: $MinecraftServer, stages: $Set_<string>);
    }
    export class $StageAddedServerEvent extends $SingleStageServerEvent {
        stage: string;
        constructor(server: $MinecraftServer, stage: string);
    }
    export class $StageRemovedServerEvent extends $SingleStageServerEvent {
        stage: string;
        constructor(server: $MinecraftServer, stage: string);
    }
    export class $StageSyncedServerEvent extends $ServerEvent implements $ICancellableEvent {
        getStagesSynced(): $Set<string>;
        getOperation(): $AOperation;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(server: $MinecraftServer, operation: $AOperation_, stageSynced: string);
        constructor(server: $MinecraftServer, operation: $AOperation_, stagesSynced: $Set_<string>);
        get stagesSynced(): $Set<string>;
        get operation(): $AOperation;
    }
}
