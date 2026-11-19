import { $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";

declare module "@package/org/betterx/betterend/interfaces" {
    export class $BETargetChecker {
    }
    export interface $BETargetChecker {
        be_isTarget(): boolean;
        be_setTarget(arg0: boolean): void;
    }
    export class $ISlime {
    }
    export interface $ISlime {
        be_setSlimeSize(arg0: number, arg1: boolean): void;
        entityRemove(arg0: $Entity$RemovalReason_): void;
    }
}
