import { $MapCodec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";

declare module "@package/mekanism/api/robit" {
    export class $RobitSkin {
        static getTranslationKey(arg0: $ResourceKey_<$RobitSkin>): string;
        static getTranslatedName(arg0: $ResourceKey_<$RobitSkin>): $Component;
    }
    export interface $RobitSkin {
        codec(): $MapCodec<$RobitSkin>;
        customModel(): $ResourceLocation;
        textures(): $List<$ResourceLocation>;
        isUnlocked(arg0: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RobitSkin}.
     */
    export type $RobitSkin_ = RegistryTypes.MekanismRobitSkin;
    export interface $RobitSkin extends RegistryMarked<RegistryTypes.MekanismRobitSkinTag, RegistryTypes.MekanismRobitSkin> {}
}
