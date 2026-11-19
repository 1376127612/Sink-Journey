import { $Holder } from "@package/net/minecraft/core";
import { $NoiseGeneratorSettings } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/wover/common/generator/api/biomesource" {
    export class $NoiseGeneratorSettingsProvider {
    }
    export interface $NoiseGeneratorSettingsProvider {
        wover_getNoiseGeneratorSettingHolders(): $Holder<$NoiseGeneratorSettings>;
        wover_getNoiseGeneratorSettings(): $NoiseGeneratorSettings;
    }
}
