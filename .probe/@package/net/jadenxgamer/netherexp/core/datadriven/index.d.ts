import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CreativeModeTab$Output_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LivingDeathEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/jadenxgamer/netherexp/core/datadriven" {
    export class $ApparitionAggressions extends $Record {
        targetMob(): $ResourceLocation;
        preferredByPersonalities(): $List<number>;
        possessedMob(): $ResourceLocation;
        hasPossession(): boolean;
        targetPriority(): number;
        static CODEC: $Codec<$ApparitionAggressions>;
        constructor(preferredByPersonalities: $List_<number>, hasPossession: boolean, targetPriority: number, targetMob: $ResourceLocation_, possessedMob: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ApparitionAggressions}.
     */
    export type $ApparitionAggressions_ = RegistryTypes.NetherexpApparitionAggressions | { targetPriority?: number, preferredByPersonalities?: $List_<number>, targetMob?: $ResourceLocation_, possessedMob?: $ResourceLocation_, hasPossession?: boolean,  } | [targetPriority?: number, preferredByPersonalities?: $List_<number>, targetMob?: $ResourceLocation_, possessedMob?: $ResourceLocation_, hasPossession?: boolean, ];
    export interface $OnDeathGroundConversion extends RegistryMarked<RegistryTypes.NetherexpOnDeathGroundConversionTag, RegistryTypes.NetherexpOnDeathGroundConversion> {}
    export interface $ApparitionGargoyleStatues extends RegistryMarked<RegistryTypes.NetherexpApparitionGargoyleStatuesTag, RegistryTypes.NetherexpApparitionGargoyleStatues> {}
    export class $Antidote extends $Record {
        name(): string;
        color(): (number) | undefined;
        effects(): $List<$MobEffectInstance>;
        static populateCreativeInventoryForAllAntidotes(arg0: $CreativeModeTab$Output_): void;
        static CODEC: $Codec<$Antidote>;
        constructor(name: string, color: (number) | undefined, effects: $List_<$MobEffectInstance>);
    }
    /**
     * Values that may be interpreted as {@link $Antidote}.
     */
    export type $Antidote_ = RegistryTypes.NetherexpAntidote | { color?: (number) | undefined, effects?: $List_<$MobEffectInstance>, name?: string,  } | [color?: (number) | undefined, effects?: $List_<$MobEffectInstance>, name?: string, ];
    export class $EctoplasmHaunting extends $Record {
        haunted(): $ResourceLocation;
        target(): $HolderSet<$Block>;
        static CODEC: $Codec<$EctoplasmHaunting>;
        constructor(target: $HolderSet_<$Block>, haunted: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EctoplasmHaunting}.
     */
    export type $EctoplasmHaunting_ = RegistryTypes.NetherexpEctoplasmHaunting | { haunted?: $ResourceLocation_, target?: $HolderSet_<$Block>,  } | [haunted?: $ResourceLocation_, target?: $HolderSet_<$Block>, ];
    export class $ApparitionGargoyleStatues extends $Record {
        preferredByPersonalities(): $List<number>;
        possessedMob(): $ResourceLocation;
        gargoyleStatue(): $ResourceLocation;
        static CODEC: $Codec<$ApparitionGargoyleStatues>;
        constructor(gargoyleStatue: $ResourceLocation_, preferredByPersonalities: $List_<number>, possessedMob: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ApparitionGargoyleStatues}.
     */
    export type $ApparitionGargoyleStatues_ = RegistryTypes.NetherexpApparitionGargoyleStatues | { gargoyleStatue?: $ResourceLocation_, possessedMob?: $ResourceLocation_, preferredByPersonalities?: $List_<number>,  } | [gargoyleStatue?: $ResourceLocation_, possessedMob?: $ResourceLocation_, preferredByPersonalities?: $List_<number>, ];
    export interface $Antidote extends RegistryMarked<RegistryTypes.NetherexpAntidoteTag, RegistryTypes.NetherexpAntidote> {}
    export class $WispArchaeology extends $Record {
        biomes(): ($HolderSet<$Biome>) | undefined;
        lootTable(): $ResourceLocation;
        structure(): ($ResourceLocation) | undefined;
        static CODEC: $Codec<$WispArchaeology>;
        constructor(structure: ($ResourceLocation_) | undefined, biomes: ($HolderSet_<$Biome>) | undefined, lootTable: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WispArchaeology}.
     */
    export type $WispArchaeology_ = RegistryTypes.NetherexpWispArchaeology | { lootTable?: $ResourceLocation_, structure?: ($ResourceLocation_) | undefined, biomes?: ($HolderSet_<$Biome>) | undefined,  } | [lootTable?: $ResourceLocation_, structure?: ($ResourceLocation_) | undefined, biomes?: ($HolderSet_<$Biome>) | undefined, ];
    export interface $EctoplasmHaunting extends RegistryMarked<RegistryTypes.NetherexpEctoplasmHauntingTag, RegistryTypes.NetherexpEctoplasmHaunting> {}
    export interface $WispArchaeology extends RegistryMarked<RegistryTypes.NetherexpWispArchaeologyTag, RegistryTypes.NetherexpWispArchaeology> {}
    export interface $ApparitionAggressions extends RegistryMarked<RegistryTypes.NetherexpApparitionAggressionsTag, RegistryTypes.NetherexpApparitionAggressions> {}
    export class $OnDeathGroundConversion extends $Record {
        static onLivingDeath(arg0: $LivingDeathEvent): void;
        entityTypes(): $HolderSet<$EntityType<never>>;
        groundBlock(): $HolderSet<$Block>;
        conversionBlock(): $BlockState;
        static CODEC: $Codec<$OnDeathGroundConversion>;
        constructor(entityTypes: $HolderSet_<$EntityType<never>>, groundBlock: $HolderSet_<$Block>, conversionBlock: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $OnDeathGroundConversion}.
     */
    export type $OnDeathGroundConversion_ = RegistryTypes.NetherexpOnDeathGroundConversion | { conversionBlock?: $BlockState_, entityTypes?: $HolderSet_<$EntityType<never>>, groundBlock?: $HolderSet_<$Block>,  } | [conversionBlock?: $BlockState_, entityTypes?: $HolderSet_<$EntityType<never>>, groundBlock?: $HolderSet_<$Block>, ];
}
