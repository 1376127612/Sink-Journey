import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/alessandro/astages/api/stage/event" {
    export class $GenericEvent {
        isPlayerAvailable(): boolean;
        isServerAvailable(): boolean;
        getServer(): $MinecraftServer;
        getPlayer(): $Player;
        isClientSide(): boolean;
        constructor(player: $Player, server: $MinecraftServer, isClientSide: boolean);
        get playerAvailable(): boolean;
        get serverAvailable(): boolean;
        get server(): $MinecraftServer;
        get player(): $Player;
        get clientSide(): boolean;
    }
    export class $GrantedEvent extends $GenericEvent {
        constructor(player: $Player, server: $MinecraftServer, isClientSide: boolean);
    }
    export class $ExpiredEvent extends $GenericEvent {
        constructor(player: $Player, server: $MinecraftServer, isClientSide: boolean);
    }
    export class $TickEvent extends $GenericEvent {
        constructor(player: $Player, server: $MinecraftServer, isClientSide: boolean);
    }
}
