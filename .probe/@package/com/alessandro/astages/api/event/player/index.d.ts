import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MultipleStagesPlayerEvent, $SingleStagePlayerEvent, $PlayerEvent } from "@package/com/alessandro/astages/api/event/custom";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Set_, $Set } from "@package/java/util";
import { $AOperation_, $AOperation } from "@package/com/alessandro/astages/api/constant";

declare module "@package/com/alessandro/astages/api/event/player" {
    export class $StageLoginPlayerEvent extends $MultipleStagesPlayerEvent {
        stages: $Set<string>;
        constructor(player: $Player, stages: $Set_<string>);
    }
    export class $AllStagesAddedPlayerEvent extends $MultipleStagesPlayerEvent {
        stages: $Set<string>;
        constructor(player: $Player, stages: $Set_<string>);
    }
    export class $StageSyncedPlayerEvent extends $PlayerEvent implements $ICancellableEvent {
        getStagesSynced(): $Set<string>;
        getOperation(): $AOperation;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, operation: $AOperation_, stageSynced: string);
        constructor(player: $Player, operation: $AOperation_, stagesSynced: $Set_<string>);
        get stagesSynced(): $Set<string>;
        get operation(): $AOperation;
    }
    export class $AllStagesRemovedPlayerEvent extends $MultipleStagesPlayerEvent {
        stages: $Set<string>;
        constructor(player: $Player, stages: $Set_<string>);
    }
    export class $StageRemovedPlayerEvent extends $SingleStagePlayerEvent {
        stage: string;
        constructor(player: $Player, stage: string);
    }
    export class $StageAddedPlayerEvent extends $SingleStagePlayerEvent {
        stage: string;
        constructor(player: $Player, stage: string);
    }
}
