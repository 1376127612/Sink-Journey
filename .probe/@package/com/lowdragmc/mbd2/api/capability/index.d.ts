import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $BlockPos, $Direction } from "@package/net/minecraft/core";
import { $IRenderer } from "@package/com/lowdragmc/lowdraglib2/client/renderer";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as recipe from "@package/com/lowdragmc/mbd2/api/capability/recipe";

declare module "@package/com/lowdragmc/mbd2/api/capability" {
    export class $IAnimationSource {
        static of(arg0: $BlockEntity): $IAnimationSource;
    }
    export interface $IAnimationSource {
        getAnimationPos(): $BlockPos;
        getAnimatableCache(): $Map<$IRenderer, $Object>;
        getAnimationState(): string;
        getAnimationFacing(): $Direction;
        getAnimationEventTarget(): $MBDMachine;
        get animationPos(): $BlockPos;
        get animatableCache(): $Map<$IRenderer, $Object>;
        get animationState(): string;
        get animationFacing(): $Direction;
        get animationEventTarget(): $MBDMachine;
    }
}
