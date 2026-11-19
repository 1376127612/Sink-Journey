import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $Set_, $List_, $Set } from "@package/java/util";
import { $IRitualInstance } from "@package/mysticmods/roots/api/ritual";
import { $Modifier } from "@package/mysticmods/roots/api/modifier";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IDescribed } from "@package/mysticmods/roots/api/registry";
import { $Consumer, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Costing } from "@package/mysticmods/roots/api/herb";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $TrialSpawner } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Grove_, $Grove } from "@package/mysticmods/roots/api/grove";
import { $MutableComponent, $Style } from "@package/net/minecraft/network/chat";
import { $IntStream } from "@package/java/util/stream";
import { $ISpellInstance } from "@package/mysticmods/roots/api/spell";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/mysticmods/roots/api/action" {
    export class $GroveReputationEntry$SubEntry extends $Record {
        name(): $ResourceLocation;
        type(): $GroveReputationEntry$SubEntryType;
        static CODEC: $Codec<$GroveReputationEntry$SubEntry>;
        static LIST_CODEC: $Codec<$List<$GroveReputationEntry$SubEntry>>;
        constructor();
        constructor(type: $GroveReputationEntry$SubEntryType_, name: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $GroveReputationEntry$SubEntry}.
     */
    export type $GroveReputationEntry$SubEntry_ = { name?: $ResourceLocation_, type?: $GroveReputationEntry$SubEntryType_,  } | [name?: $ResourceLocation_, type?: $GroveReputationEntry$SubEntryType_, ];
    export class $GroveReputationEntry extends $Record {
        grove(): $Grove;
        reputation(): $GroveReputation;
        name(): $ResourceLocation;
        entries(): $List<$GroveReputationEntry$SubEntry>;
        unique(): boolean;
        static CODEC: $MapCodec<$GroveReputationEntry>;
        static LIST_CODEC: $Codec<$List<$GroveReputationEntry>>;
        constructor(arg0: $Grove_, arg1: $ResourceLocation_, arg2: $GroveReputation_, arg3: $GroveReputationEntry$SubEntryType_, arg4: $TagKey_<never>);
        constructor(arg0: $Grove_, arg1: $ResourceLocation_, arg2: $GroveReputation_);
        constructor(grove: $Grove_, name: $ResourceLocation_, reputation: $GroveReputation_, unique: boolean, entries: $List_<$GroveReputationEntry$SubEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $GroveReputationEntry}.
     */
    export type $GroveReputationEntry_ = { reputation?: $GroveReputation_, entries?: $List_<$GroveReputationEntry$SubEntry_>, name?: $ResourceLocation_, unique?: boolean, grove?: $Grove_,  } | [reputation?: $GroveReputation_, entries?: $List_<$GroveReputationEntry$SubEntry_>, name?: $ResourceLocation_, unique?: boolean, grove?: $Grove_, ];
    export class $GroveReputation extends $Record {
        byIndex(arg0: number): number;
        gain1(): number;
        gain2(): number;
        gain3(): number;
        gain5(): number;
        gain4(): number;
        add(...arg0: $GroveReputation_[]): $GroveReputation;
        stream(): $IntStream;
        multiply(arg0: number): $GroveReputation;
        static CODEC: $MapCodec<$GroveReputation>;
        constructor(arg0: number);
        constructor(gain1: number, gain2: number, gain3: number, gain4: number, gain5: number);
    }
    /**
     * Values that may be interpreted as {@link $GroveReputation}.
     */
    export type $GroveReputation_ = { gain2?: number, gain1?: number, gain5?: number, gain4?: number, gain3?: number,  } | [gain2?: number, gain1?: number, gain5?: number, gain4?: number, gain3?: number, ];
    export class $GroveContext {
        static hasParameter(arg0: $GroveContext, arg1: $GroveContext$Parameter_): boolean;
        static RECIPE_OUTPUTS: $GroveContext$Parameter;
        static BLOCK_STATE: $GroveContext$Parameter;
        static OFFER: $GroveContext$Parameter;
        static OLD_BLOCK_STATE: $GroveContext$Parameter;
        static SPELL_MODIFIER: $GroveContext$Parameter;
        static BLOCK_ENTITY: $GroveContext$Parameter;
        static TERTIARY_ENTITY: $GroveContext$Parameter;
        static LEVEL: $GroveContext$Parameter;
        static SECONDARY_ENTITY: $GroveContext$Parameter;
        static HAND: $GroveContext$Parameter;
        static DAMAGE: $GroveContext$Parameter;
        static PLAYER: $GroveContext$Parameter;
        static TRIAL: $GroveContext$Parameter;
        static ITEM: $GroveContext$Parameter;
        static POSITION: $GroveContext$Parameter;
        static RECIPE_ID: $GroveContext$Parameter;
        static OLD_ITEM: $GroveContext$Parameter;
        static RECIPE: $GroveContext$Parameter;
        static RITUAL: $GroveContext$Parameter;
        static COSTING: $GroveContext$Parameter;
        static SPELL: $GroveContext$Parameter;
        static NEW_POSITION: $GroveContext$Parameter;
        static TARGET_ENTITY: $GroveContext$Parameter;
    }
    export interface $GroveContext {
        player(): $ServerPlayer;
        hand(): $InteractionHand;
        secondary(): $Entity;
        target(): $Entity;
        position(): $BlockPos;
        feature(): $ConfiguredFeature<never, never>;
        is(arg0: $GroveReputationEntry$SubEntryType_, arg1: $ResourceLocation_): boolean;
        newPosition(): $BlockPos;
        recipe(): $Recipe<never>;
        offer(): $MerchantOffer;
        level(): $ServerLevel;
        item(): $ItemStack;
        recipeOutputs(): $List<$ItemStack>;
        ritualModifier(): $Modifier<any, any>;
        genericModifier(): $Modifier<any, any>;
        oldBlockState(): $BlockState;
        spellModifier(): $Modifier<any, any>;
        blockEntity(): $BlockEntity;
        blockState(): $BlockState;
        spell(): $ISpellInstance;
        ritual(): $IRitualInstance;
        tertiary(): $Entity;
        trial(): $TrialSpawner;
        costing(): $Costing;
        recipeId(): $ResourceLocation;
        oldItem(): $ItemStack;
        damage(): $DamageSource;
    }
    export class $GroveContext$Parameter extends $Record {
        parameter(): $GroveContext$ParameterType;
        name(): $ResourceLocation;
        constructor(name: $ResourceLocation_, parameter: $GroveContext$ParameterType_);
    }
    /**
     * Values that may be interpreted as {@link $GroveContext$Parameter}.
     */
    export type $GroveContext$Parameter_ = { parameter?: $GroveContext$ParameterType_, name?: $ResourceLocation_,  } | [parameter?: $GroveContext$ParameterType_, name?: $ResourceLocation_, ];
    export class $GroveAction implements $Consumer<$GroveContext>, $GroveContextUser, $IDescribed {
        testAndLog(arg0: $GroveContext): boolean;
        getReputationEntries(): $List<$GroveReputationEntry>;
        log(arg0: $GroveContext): void;
        test(arg0: $GroveContext): boolean;
        validate(arg0: $GroveContext): void;
        accept(arg0: $GroveContext): void;
        is(arg0: $ResourceLocation_): boolean;
        /**
         * @deprecated
         */
        is(arg0: $GroveAction_): boolean;
        /**
         * @deprecated
         */
        is(arg0: $Holder_<$GroveAction>): boolean;
        is(arg0: $TagKey_<$GroveAction>): boolean;
        is(arg0: $ResourceKey_<$GroveAction>): boolean;
        is(arg0: $Predicate_<$ResourceKey<$GroveAction>>): boolean;
        shouldLog(): boolean;
        reward(arg0: $GroveContext): void;
        builtInRegistryHolder(): $Holder<$GroveAction>;
        shouldTest(): boolean;
        modify(arg0: $GroveContext, arg1: $GroveReputation_): $GroveReputation;
        getOrCreateDescriptionId(): string;
        andThen(arg0: $Consumer_<$GroveContext>): $Consumer<$GroveContext>;
        getName(arg0: $Style): $MutableComponent;
        getName(): $MutableComponent;
        getDescriptionId(): string;
        constructor();
        get reputationEntries(): $List<$GroveReputationEntry>;
        get orCreateDescriptionId(): string;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $GroveAction}.
     */
    export type $GroveAction_ = RegistryTypes.RootsGroveActions;
    export class $GroveContext$ParameterType {
    }
    export interface $GroveContext$ParameterType {
        getParameter(arg0: $GroveContext): $Object;
    }
    /**
     * Values that may be interpreted as {@link $GroveContext$ParameterType}.
     */
    export type $GroveContext$ParameterType_ = ((arg0: $GroveContext) => $Object);
    export class $GroveReputationEntry$SubEntryType extends $Enum<$GroveReputationEntry$SubEntryType> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $GroveReputationEntry$SubEntryType[];
        static valueOf(arg0: string): $GroveReputationEntry$SubEntryType;
        getRemappedEnumConstantName(): string;
        static EXACT_ITEM: $GroveReputationEntry$SubEntryType;
        static CODEC: $Codec<$GroveReputationEntry$SubEntryType>;
        static SPELL_MODIFIER: $GroveReputationEntry$SubEntryType;
        static BLOCK: $GroveReputationEntry$SubEntryType;
        static RITUAL_MODIFIER: $GroveReputationEntry$SubEntryType;
        static TERTIARY_ENTITY: $GroveReputationEntry$SubEntryType;
        static SECONDARY_ENTITY: $GroveReputationEntry$SubEntryType;
        static ALWAYS: $GroveReputationEntry$SubEntryType;
        static DAMAGE: $GroveReputationEntry$SubEntryType;
        static ITEM: $GroveReputationEntry$SubEntryType;
        static OLD_BLOCK: $GroveReputationEntry$SubEntryType;
        static DIMENSION: $GroveReputationEntry$SubEntryType;
        static OLD_ITEM: $GroveReputationEntry$SubEntryType;
        static RECIPE: $GroveReputationEntry$SubEntryType;
        static EXACT_SPELL: $GroveReputationEntry$SubEntryType;
        static EXACT_RITUAL: $GroveReputationEntry$SubEntryType;
        static RITUAL: $GroveReputationEntry$SubEntryType;
        static TARGET_ENTITY: $GroveReputationEntry$SubEntryType;
        static SPELL: $GroveReputationEntry$SubEntryType;
        static TOOL: $GroveReputationEntry$SubEntryType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GroveReputationEntry$SubEntryType}.
     */
    export type $GroveReputationEntry$SubEntryType_ = "block" | "old_block" | "item" | "exact_item" | "old_item" | "target_entity" | "secondary_entity" | "tertiary_entity" | "ritual" | "exact_ritual" | "ritual_modifier" | "spell" | "exact_spell" | "spell_modifier" | "recipe" | "damage" | "dimension" | "tool" | "always";
    export interface $GroveAction extends RegistryMarked<RegistryTypes.RootsGroveActionsTag, RegistryTypes.RootsGroveActions> {}
    export class $GroveContextUser {
    }
    export interface $GroveContextUser {
        getUsedParameters(): $Set<$GroveContext$Parameter>;
        get usedParameters(): $Set<$GroveContext$Parameter>;
    }
    /**
     * Values that may be interpreted as {@link $GroveContextUser}.
     */
    export type $GroveContextUser_ = (() => $Set_<$GroveContext$Parameter_>);
}
