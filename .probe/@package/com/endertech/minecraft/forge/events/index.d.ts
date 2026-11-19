import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";

declare module "@package/com/endertech/minecraft/forge/events" {
    export class $ChunkFullyLoadedEvent extends $Event {
        getChunk(): $LevelChunk;
        static onChunkFullyLoaded(arg0: $ServerLevel, arg1: $LevelChunk): void;
        getLevel(): $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: $LevelChunk);
        get chunk(): $LevelChunk;
        get level(): $ServerLevel;
    }
}
