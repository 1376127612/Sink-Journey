import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Map_, $Map } from "@package/java/util";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/org/betterx/wover/preset/mixin" {
    export class $WorldPresetAccessor {
    }
    export interface $WorldPresetAccessor {
        wover_getDimensions(): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        wover_setDimensions(arg0: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>): void;
    }
}
