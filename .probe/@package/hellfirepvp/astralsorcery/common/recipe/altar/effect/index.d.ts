import { $Level_ } from "@package/net/minecraft/world/level";
import { $TileAltar } from "@package/hellfirepvp/astralsorcery/common/tile";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ActiveAltarRecipe, $ActiveAltarRecipe$State_ } from "@package/hellfirepvp/astralsorcery/common/recipe/altar";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Comparable } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/altar/effect" {
    export interface $AltarEffect extends RegistryMarked<RegistryTypes.AstralsorceryAltarEffectsTag, RegistryTypes.AstralsorceryAltarEffects> {}
    export class $AltarEffect implements $Comparable<$AltarEffect> {
        compareTo(arg0: $AltarEffect_): number;
        getKey(): $ResourceLocation;
        tick(arg0: $Level_, arg1: $TileAltar, arg2: $RandomSource, arg3: $ActiveAltarRecipe, arg4: number, arg5: number, arg6: $ActiveAltarRecipe$State_, arg7: $CompoundTag_): void;
        copyEffectData(arg0: $CompoundTag_, arg1: $CompoundTag_): void;
        constructor();
        get key(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AltarEffect}.
     */
    export type $AltarEffect_ = RegistryTypes.AstralsorceryAltarEffects;
}
