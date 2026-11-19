import { $Player } from "@package/net/minecraft/world/entity/player";
export * as packet from "@package/com/denfop/network/packet";

declare module "@package/com/denfop/network" {
    export class $IUpdatableTileEvent {
    }
    export interface $IUpdatableTileEvent {
        updateTileServer(arg0: $Player, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IUpdatableTileEvent}.
     */
    export type $IUpdatableTileEvent_ = ((arg0: $Player, arg1: number) => void);
}
