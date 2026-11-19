import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $LogicalSide, $LogicalSide_ } from "@package/net/neoforged/fml";

declare module "@package/dev/shadowsoffire/placebo/events" {
    export class $ResourceReloadEvent extends $Event {
        getResourceManager(): $ResourceManager;
        getSide(): $LogicalSide;
        constructor(arg0: $ResourceManager, arg1: $LogicalSide_);
        get resourceManager(): $ResourceManager;
        get side(): $LogicalSide;
    }
    export class $AnvilLandEvent extends $Event {
        getPos(): $BlockPos;
        getLevel(): $Level;
        getEntity(): $FallingBlockEntity;
        getNewState(): $BlockState;
        getOldState(): $BlockState;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $FallingBlockEntity);
        get pos(): $BlockPos;
        get level(): $Level;
        get entity(): $FallingBlockEntity;
        get newState(): $BlockState;
        get oldState(): $BlockState;
    }
}
