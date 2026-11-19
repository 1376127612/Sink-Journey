import { $Event } from "@package/net/neoforged/bus/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Set_, $Set } from "@package/java/util";

declare module "@package/com/alessandro/astages/api/event/custom" {
    export class $MultipleStagesPlayerEvent extends $PlayerEvent {
        getStages(): $Set<string>;
        stages: $Set<string>;
        constructor(player: $Player, stages: $Set_<string>);
    }
    export class $SingleStageServerEvent extends $ServerEvent {
        getStage(): string;
        stage: string;
        constructor(server: $MinecraftServer, stage: string);
    }
    export class $SingleStagePlayerEvent extends $PlayerEvent {
        getStage(): string;
        stage: string;
        constructor(player: $Player, stage: string);
    }
    export class $MultipleStagesServerEvent extends $ServerEvent {
        getStages(): $Set<string>;
        stages: $Set<string>;
        constructor(server: $MinecraftServer, stages: $Set_<string>);
    }
    export class $PlayerEvent extends $Event {
        getPlayer(): $Player;
        constructor(player: $Player);
        get player(): $Player;
    }
    export class $ServerEvent extends $Event {
        getServer(): $MinecraftServer;
        constructor(server: $MinecraftServer);
        get server(): $MinecraftServer;
    }
}
