import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object } from "@package/java/lang";
import { $UUID_, $Set, $UUID } from "@package/java/util";
import { $SyncedTrackedPlayer } from "@package/xaero/common/server/radar/tracker";

declare module "@package/xaero/common/server/player" {
    export class $ServerPlayerTickHandler {
        tick(arg0: $ServerPlayer): void;
        constructor();
    }
    export class $ServerPlayerData {
        hasMod(): boolean;
        ensureCurrentlySyncedPlayers(): $Set<$UUID>;
        setOpacData(arg0: $Object): void;
        getLastSyncedData(): $SyncedTrackedPlayer;
        getOpacData(): $Object;
        ensureLastSyncedData(): $SyncedTrackedPlayer;
        setLastTrackedPlayerSync(arg0: number): void;
        getClientModNetworkVersion(): number;
        getCurrentlySyncedPlayers(): $Set<$UUID>;
        setClientModNetworkVersion(arg0: number): void;
        getLastTrackedPlayerSync(): number;
        static get(arg0: $ServerPlayer): $ServerPlayerData;
        constructor(arg0: $UUID_);
        get lastSyncedData(): $SyncedTrackedPlayer;
        get currentlySyncedPlayers(): $Set<$UUID>;
    }
    export class $IServerPlayer {
    }
    export interface $IServerPlayer {
        getXaeroMinimapPlayerData(): $ServerPlayerData;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData): void;
    }
}
