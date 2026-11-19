import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $KeyDispatchDataCodec } from "@package/net/minecraft/util";
import { $Holder, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ModCore } from "@package/org/betterx/wover/core/api";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $AbstractConfig$Value } from "@package/de/ambertation/wunderlib/configs";

declare module "@package/org/betterx/wover/biome/api/modification/predicates" {
    export class $BiomePredicate {
        static isVanilla(): $BiomePredicate;
        static spawns(arg0: $EntityType_<never>): $BiomePredicate;
        static isBiome(arg0: $ResourceKey_<$Biome>): $BiomePredicate;
        static inNamespace(arg0: $ModCore): $BiomePredicate;
        static inNamespace(arg0: string): $BiomePredicate;
        static pathContains(arg0: string): $BiomePredicate;
        static inOverworld(): $BiomePredicate;
        static hasPlacedFeature(arg0: $ResourceKey_<$PlacedFeature>): $BiomePredicate;
        static notInNamespace(arg0: string): $BiomePredicate;
        static notInNamespace(arg0: $ModCore): $BiomePredicate;
        static notInBiomes(...arg0: $ResourceKey_<$Biome>[]): $BiomePredicate;
        static hasStructure(arg0: $ResourceKey_<$Structure>): $BiomePredicate;
        static inDimension(arg0: $ResourceKey_<$LevelStem>): $BiomePredicate;
        static hasConfiguredFeature(arg0: $ResourceKey_<$ConfiguredFeature<never, never>>): $BiomePredicate;
        static inNether(): $BiomePredicate;
        static hasConfig<T, R extends $AbstractConfig$Value<T, R>>(arg0: $AbstractConfig$Value<T, R>, arg1: T): $BiomePredicate;
        static inEnd(): $BiomePredicate;
        static inBiomes(...arg0: $ResourceKey_<$Biome>[]): $BiomePredicate;
        static or(...arg0: $BiomePredicate[]): $BiomePredicate;
        static and(...arg0: $BiomePredicate[]): $BiomePredicate;
        static not(arg0: $BiomePredicate): $BiomePredicate;
        static allOf(...arg0: $BiomePredicate[]): $BiomePredicate;
        static anyOf(...arg0: $BiomePredicate[]): $BiomePredicate;
        static always(): $BiomePredicate;
        static hasTag(arg0: $TagKey_<$Biome>): $BiomePredicate;
        static CODEC: $Codec<$BiomePredicate>;
        static get vanilla(): $BiomePredicate;
    }
    export interface $BiomePredicate {
        codec(): $KeyDispatchDataCodec<$BiomePredicate>;
        test(arg0: $BiomePredicate$Context): boolean;
    }
    export class $BiomePredicate$Context {
        static of(arg0: $RegistryAccess, arg1: $ResourceKey_<$Biome>): $BiomePredicate$Context;
        static of(arg0: $RegistryAccess, arg1: $Registry<$Biome_>, arg2: $ResourceKey_<$Biome>): $BiomePredicate$Context;
        registryAccess: $RegistryAccess;
        configuredFeatures: $Registry<$ConfiguredFeature<never, never>>;
        biomeKey: $ResourceKey<$Biome>;
        biomeHolder: $Holder<$Biome>;
        biomes: $Registry<$Biome>;
        biome: $Biome;
        placedFeatures: $Registry<$PlacedFeature>;
        levelStems: $Registry<$LevelStem>;
        structures: $Registry<$Structure>;
    }
}
