import { RegistryTypes, RegistryMarked } from "@special/types";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/org/betterx/wover/preset/api" {
    export interface $WorldPresetInfo extends RegistryMarked<RegistryTypes.WoverWoverWorldPresetInfoTag, RegistryTypes.WoverWoverWorldPresetInfo> {}
    export class $WorldPresetInfo {
    }
    export interface $WorldPresetInfo {
        netherPreset(): $ResourceKey<$WorldPreset>;
        getPresetOverride(arg0: $ResourceKey_<$LevelStem>): $ResourceKey<$WorldPreset>;
        getPresetOverrideRecursive(arg0: $ResourceKey_<$LevelStem>, arg1: number): $ResourceKey<$WorldPreset>;
        getPresetOverrideRecursive(arg0: $ResourceKey_<$LevelStem>): $ResourceKey<$WorldPreset>;
        sortOrder(): number;
        endPreset(): $ResourceKey<$WorldPreset>;
        overworldPreset(): $ResourceKey<$WorldPreset>;
    }
    /**
     * Values that may be interpreted as {@link $WorldPresetInfo}.
     */
    export type $WorldPresetInfo_ = RegistryTypes.WoverWoverWorldPresetInfo;
}
