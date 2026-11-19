import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/jadenxgamer/elysium_api/api/event" {
    export class $BlockOnPlaceEvent extends $Event {
        getPos(): $BlockPos;
        getState(): $BlockState;
        getLevel(): $Level;
        getOldState(): $BlockState;
        isMovedByPiston(): boolean;
        constructor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean);
        get pos(): $BlockPos;
        get state(): $BlockState;
        get level(): $Level;
        get oldState(): $BlockState;
        get movedByPiston(): boolean;
    }
}
