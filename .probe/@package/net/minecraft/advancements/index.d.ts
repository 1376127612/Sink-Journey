import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PlayerAdvancements } from "@package/net/minecraft/server";
import { $DataResult, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Set_, $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable, $ProblemReporter } from "@package/net/minecraft/util";
import { $DistanceTrigger, $EffectsChangedTrigger, $UsedEnderEyeTrigger, $EnterBlockTrigger, $BredAnimalsTrigger, $SlideDownBlockTrigger, $LootTableTrigger, $ShotCrossbowTrigger, $BrewedPotionTrigger, $TameAnimalTrigger, $FilledBucketTrigger, $PlayerHurtEntityTrigger, $KilledTrigger, $PickedUpItemTrigger, $PlayerInteractTrigger, $EntityHurtPlayerTrigger, $SummonedEntityTrigger, $UsingItemTrigger, $RecipeCraftedTrigger, $StartRidingTrigger, $AnyBlockInteractionTrigger, $ConsumeItemTrigger, $ChangeDimensionTrigger, $PlayerTrigger, $ImpossibleTrigger, $DefaultBlockInteractionTrigger, $InventoryChangeTrigger, $ItemDurabilityTrigger, $ConstructBeaconTrigger, $UsedTotemTrigger, $CriterionValidator, $FallAfterExplosionTrigger, $BeeNestDestroyedTrigger, $KilledByCrossbowTrigger, $RecipeUnlockedTrigger, $EnchantedItemTrigger, $CuredZombieVillagerTrigger, $LevitationTrigger, $LightningStrikeTrigger, $TradeTrigger, $ItemUsedOnLocationTrigger, $ChanneledLightningTrigger, $TargetBlockTrigger, $FishingRodHookedTrigger } from "@package/net/minecraft/advancements/critereon";
import { $CacheableFunction } from "@package/net/minecraft/commands";
import { $Instant } from "@package/java/time";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Registry, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $IAdvancementBuilderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $AdvancementNodeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Enum, $Comparable, $Iterable, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as critereon from "@package/net/minecraft/advancements/critereon";

declare module "@package/net/minecraft/advancements" {
    export class $Advancement$Builder implements $IAdvancementBuilderExtension {
        sendsTelemetryEvent(): $Advancement$Builder;
        requirements(requirements: $AdvancementRequirements_): $Advancement$Builder;
        requirements(requirementsStrategy: $AdvancementRequirements$Strategy_): $Advancement$Builder;
        addCriterion(key: string, criterion: $Criterion_<never>): $Advancement$Builder;
        static recipeAdvancement(): $Advancement$Builder;
        parent(parent: $AdvancementHolder_): $Advancement$Builder;
        /**
         * @deprecated
         */
        parent(parentId: $ResourceLocation_): $Advancement$Builder;
        save(output: $Consumer_<$AdvancementHolder>, id: string): $AdvancementHolder;
        display(icon: $ItemLike_, title: $Component_, description: $Component_, background: $ResourceLocation_ | null, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean): $Advancement$Builder;
        display(icon: $ItemStack_, title: $Component_, description: $Component_, background: $ResourceLocation_ | null, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean): $Advancement$Builder;
        display(display: $DisplayInfo): $Advancement$Builder;
        build(id: $ResourceLocation_): $AdvancementHolder;
        rewards(rewardsBuilder: $AdvancementRewards$Builder): $Advancement$Builder;
        rewards(rewards: $AdvancementRewards_): $Advancement$Builder;
        static advancement(): $Advancement$Builder;
        save(arg0: $Consumer_<$AdvancementHolder>, arg1: $ResourceLocation_, arg2: $ExistingFileHelper): $AdvancementHolder;
        constructor();
    }
    export class $AdvancementRequirements$Strategy {
        static OR: $AdvancementRequirements$Strategy;
        static AND: $AdvancementRequirements$Strategy;
    }
    export interface $AdvancementRequirements$Strategy {
        create(criteria: $Collection_<string>): $AdvancementRequirements;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRequirements$Strategy}.
     */
    export type $AdvancementRequirements$Strategy_ = ((arg0: $Collection<string>) => $AdvancementRequirements_);
    export interface $CriterionTrigger<T> extends RegistryMarked<RegistryTypes.TriggerTypeTag, RegistryTypes.TriggerType> {}
    export class $CriterionTrigger<T extends $CriterionTriggerInstance> {
    }
    export interface $CriterionTrigger<T extends $CriterionTriggerInstance> {
        codec(): $Codec<T>;
        createCriterion(triggerInstance: T): $Criterion<T>;
        addPlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(playerAdvancements: $PlayerAdvancements): void;
        removePlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTrigger}.
     */
    export type $CriterionTrigger_<T> = RegistryTypes.TriggerType;
    export class $CriteriaTriggers {
        static register<T extends $CriterionTrigger<never>>(name: string, trigger: T): T;
        static bootstrap(registry: $Registry<$CriterionTrigger_<never>>): $CriterionTrigger<never>;
        static ENCHANTED_ITEM: $EnchantedItemTrigger;
        static TRADE: $TradeTrigger;
        static DEFAULT_BLOCK_USE: $DefaultBlockInteractionTrigger;
        static RECIPE_CRAFTED: $RecipeCraftedTrigger;
        static KILLED_BY_CROSSBOW: $KilledByCrossbowTrigger;
        static TAME_ANIMAL: $TameAnimalTrigger;
        static CHANGED_DIMENSION: $ChangeDimensionTrigger;
        static ITEM_DURABILITY_CHANGED: $ItemDurabilityTrigger;
        static ENTITY_KILLED_PLAYER: $KilledTrigger;
        static AVOID_VIBRATION: $PlayerTrigger;
        static BREWED_POTION: $BrewedPotionTrigger;
        static PLAYER_HURT_ENTITY: $PlayerHurtEntityTrigger;
        static ALLAY_DROP_ITEM_ON_BLOCK: $ItemUsedOnLocationTrigger;
        static RAID_WIN: $PlayerTrigger;
        static SHOT_CROSSBOW: $ShotCrossbowTrigger;
        static RIDE_ENTITY_IN_LAVA_TRIGGER: $DistanceTrigger;
        static NETHER_TRAVEL: $DistanceTrigger;
        static BEE_NEST_DESTROYED: $BeeNestDestroyedTrigger;
        static KILL_MOB_NEAR_SCULK_CATALYST: $KilledTrigger;
        static CRAFTER_RECIPE_CRAFTED: $RecipeCraftedTrigger;
        static CODEC: $Codec<$CriterionTrigger<never>>;
        static FILLED_BUCKET: $FilledBucketTrigger;
        static LIGHTNING_STRIKE: $LightningStrikeTrigger;
        static ENTITY_HURT_PLAYER: $EntityHurtPlayerTrigger;
        static RAID_OMEN: $PlayerTrigger;
        static ANY_BLOCK_USE: $AnyBlockInteractionTrigger;
        static SUMMONED_ENTITY: $SummonedEntityTrigger;
        static TICK: $PlayerTrigger;
        static ITEM_USED_ON_BLOCK: $ItemUsedOnLocationTrigger;
        static TARGET_BLOCK_HIT: $TargetBlockTrigger;
        static EFFECTS_CHANGED: $EffectsChangedTrigger;
        static PLAYER_KILLED_ENTITY: $KilledTrigger;
        static LOCATION: $PlayerTrigger;
        static GENERATE_LOOT: $LootTableTrigger;
        static PLAYER_INTERACTED_WITH_ENTITY: $PlayerInteractTrigger;
        static THROWN_ITEM_PICKED_UP_BY_PLAYER: $PickedUpItemTrigger;
        static RECIPE_UNLOCKED: $RecipeUnlockedTrigger;
        static BRED_ANIMALS: $BredAnimalsTrigger;
        static INVENTORY_CHANGED: $InventoryChangeTrigger;
        static SLEPT_IN_BED: $PlayerTrigger;
        static IMPOSSIBLE: $ImpossibleTrigger;
        static USED_TOTEM: $UsedTotemTrigger;
        static CONSUME_ITEM: $ConsumeItemTrigger;
        static PLACED_BLOCK: $ItemUsedOnLocationTrigger;
        static CURED_ZOMBIE_VILLAGER: $CuredZombieVillagerTrigger;
        static USED_ENDER_EYE: $UsedEnderEyeTrigger;
        static START_RIDING_TRIGGER: $StartRidingTrigger;
        static HONEY_BLOCK_SLIDE: $SlideDownBlockTrigger;
        static CONSTRUCT_BEACON: $ConstructBeaconTrigger;
        static ENTER_BLOCK: $EnterBlockTrigger;
        static FISHING_ROD_HOOKED: $FishingRodHookedTrigger;
        static LEVITATION: $LevitationTrigger;
        static CHANNELED_LIGHTNING: $ChanneledLightningTrigger;
        static FALL_AFTER_EXPLOSION: $FallAfterExplosionTrigger;
        static THROWN_ITEM_PICKED_UP_BY_ENTITY: $PickedUpItemTrigger;
        static USING_ITEM: $UsingItemTrigger;
        static FALL_FROM_HEIGHT: $DistanceTrigger;
        constructor();
    }
    export class $AdvancementTree {
        setListener(listener: $AdvancementTree$Listener | null): void;
        remove(advancements: $Set_<$ResourceLocation_>): void;
        get(advancement: $AdvancementHolder_): $AdvancementNode;
        get(id: $ResourceLocation_): $AdvancementNode;
        clear(): void;
        addAll(advancements: $Collection_<$AdvancementHolder_>): void;
        roots(): $Iterable<$AdvancementNode>;
        nodes(): $Collection<$AdvancementNode>;
        constructor();
        set listener(value: $AdvancementTree$Listener | null);
    }
    export class $CriterionProgress {
        serializeToNetwork(buffer: $FriendlyByteBuf): void;
        revoke(): void;
        getObtained(): $Instant;
        static fromNetwork(buffer: $FriendlyByteBuf): $CriterionProgress;
        isDone(): boolean;
        grant(): void;
        constructor();
        constructor(obtained: $Instant);
        get obtained(): $Instant;
        get done(): boolean;
    }
    export class $AdvancementRewards$Builder {
        /**
         * Adds the given recipe to the rewards.
         */
        addRecipe(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        addLootTable(lootTable: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        static "function"(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        build(): $AdvancementRewards;
        /**
         * Adds the given recipe to the rewards.
         */
        static recipe(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        static loot(lootTable: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        runs(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        /**
         * Adds the given amount of experience. (Not a direct setter)
         */
        static experience(experience: number): $AdvancementRewards$Builder;
        /**
         * Adds the given amount of experience. (Not a direct setter)
         */
        addExperience(experience: number): $AdvancementRewards$Builder;
        constructor();
    }
    export class $AdvancementTree$Listener {
    }
    export interface $AdvancementTree$Listener {
        onAddAdvancementRoot(advancement: $AdvancementNode): void;
        onRemoveAdvancementRoot(advancement: $AdvancementNode): void;
        onAddAdvancementTask(advancement: $AdvancementNode): void;
        onRemoveAdvancementTask(advancement: $AdvancementNode): void;
        onAdvancementsCleared(): void;
    }
    export class $Criterion<T extends $CriterionTriggerInstance> extends $Record {
        triggerInstance(): T;
        trigger(): $CriterionTrigger<T>;
        static CODEC: $Codec<$Criterion<never>>;
        constructor(arg0: $CriterionTrigger_<T>, arg1: T);
    }
    /**
     * Values that may be interpreted as {@link $Criterion}.
     */
    export type $Criterion_<T> = { triggerInstance?: $CriterionTriggerInstance_, trigger?: $CriterionTrigger_<$CriterionTriggerInstance_>,  } | [triggerInstance?: $CriterionTriggerInstance_, trigger?: $CriterionTrigger_<$CriterionTriggerInstance_>, ];
    export class $Advancement extends $Record {
        sendsTelemetryEvent(): boolean;
        requirements(): $AdvancementRequirements;
        name(): ($Component) | undefined;
        static name(advancement: $AdvancementHolder_): $Component;
        parent(): ($ResourceLocation) | undefined;
        validate(reporter: $ProblemReporter, lootData: $HolderGetter$Provider_): void;
        display(): ($DisplayInfo) | undefined;
        isRoot(): boolean;
        criteria(): $Map<string, $Criterion<never>>;
        rewards(): $AdvancementRewards;
        static CODEC: $Codec<$Advancement>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Advancement>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Advancement>;
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean);
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean, name: ($Component_) | undefined);
        get root(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Advancement}.
     */
    export type $Advancement_ = { parent?: ($ResourceLocation_) | undefined, criteria?: $Map_<string, $Criterion_<never>>, sendsTelemetryEvent?: boolean, requirements?: $AdvancementRequirements_, name?: ($Component_) | undefined, rewards?: $AdvancementRewards_, display?: ($DisplayInfo) | undefined,  } | [parent?: ($ResourceLocation_) | undefined, criteria?: $Map_<string, $Criterion_<never>>, sendsTelemetryEvent?: boolean, requirements?: $AdvancementRequirements_, name?: ($Component_) | undefined, rewards?: $AdvancementRewards_, display?: ($DisplayInfo) | undefined, ];
    export class $AdvancementRequirements extends $Record {
        requirements(): $List<$List<string>>;
        size(): number;
        test(predicate: $Predicate_<string>): boolean;
        isEmpty(): boolean;
        count(filter: $Predicate_<string>): number;
        validate(requirements: $Set_<string>): $DataResult<$AdvancementRequirements>;
        write(buffer: $FriendlyByteBuf): void;
        names(): $Set<string>;
        static allOf(requirements: $Collection_<string>): $AdvancementRequirements;
        static anyOf(requirements: $Collection_<string>): $AdvancementRequirements;
        static CODEC: $Codec<$AdvancementRequirements>;
        static EMPTY: $AdvancementRequirements;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$List_<string>>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRequirements}.
     */
    export type $AdvancementRequirements_ = { requirements?: $List_<$List_<string>>,  } | [requirements?: $List_<$List_<string>>, ];
    export class $AdvancementRewards extends $Record {
        recipes(): $List<$ResourceLocation>;
        "function"(): ($CacheableFunction) | undefined;
        grant(player: $ServerPlayer): void;
        loot(): $List<$ResourceKey<$LootTable>>;
        experience(): number;
        static CODEC: $Codec<$AdvancementRewards>;
        static EMPTY: $AdvancementRewards;
        constructor(experience: number, loot: $List_<$ResourceKey_<$LootTable>>, recipes: $List_<$ResourceLocation_>, arg3: ($CacheableFunction) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRewards}.
     */
    export type $AdvancementRewards_ = { experience?: number, loot?: $List_<$ResourceKey_<$LootTable>>, function?: ($CacheableFunction) | undefined, recipes?: $List_<$ResourceLocation_>,  } | [experience?: number, loot?: $List_<$ResourceKey_<$LootTable>>, function?: ($CacheableFunction) | undefined, recipes?: $List_<$ResourceLocation_>, ];
    export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance> extends $Record {
        criterion(): string;
        run(playerAdvancements: $PlayerAdvancements): void;
        trigger(): T;
        advancement(): $AdvancementHolder;
        constructor(arg0: T, arg1: $AdvancementHolder_, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $CriterionTrigger$Listener}.
     */
    export type $CriterionTrigger$Listener_<T> = { criterion?: string, advancement?: $AdvancementHolder_, trigger?: $CriterionTriggerInstance_,  } | [criterion?: string, advancement?: $AdvancementHolder_, trigger?: $CriterionTriggerInstance_, ];
    export class $AdvancementType extends $Enum<$AdvancementType> implements $StringRepresentable {
        createAnnouncement(advancement: $AdvancementHolder_, player: $ServerPlayer): $MutableComponent;
        getChatColor(): $ChatFormatting;
        getSerializedName(): string;
        static values(): $AdvancementType[];
        static valueOf(arg0: string): $AdvancementType;
        getDisplayName(): $Component;
        getRemappedEnumConstantName(): string;
        static CHALLENGE: $AdvancementType;
        static TASK: $AdvancementType;
        static GOAL: $AdvancementType;
        static CODEC: $Codec<$AdvancementType>;
        get chatColor(): $ChatFormatting;
        get serializedName(): string;
        get displayName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementType}.
     */
    export type $AdvancementType_ = "task" | "challenge" | "goal";
    export class $AdvancementProgress implements $Comparable<$AdvancementProgress> {
        revokeProgress(criterionName: string): boolean;
        getProgressText(): $Component;
        grantProgress(criterionName: string): boolean;
        serializeToNetwork(buffer: $FriendlyByteBuf): void;
        static fromNetwork(buffer: $FriendlyByteBuf): $AdvancementProgress;
        getFirstProgressDate(): $Instant;
        compareTo(other: $AdvancementProgress): number;
        update(requirements: $AdvancementRequirements_): void;
        isDone(): boolean;
        getPercent(): number;
        hasProgress(): boolean;
        getCriterion(criterionName: string): $CriterionProgress;
        getRemainingCriteria(): $Iterable<string>;
        getCompletedCriteria(): $Iterable<string>;
        static CODEC: $Codec<$AdvancementProgress>;
        criteria: $Map<string, $CriterionProgress>;
        constructor();
        get progressText(): $Component;
        get firstProgressDate(): $Instant;
        get done(): boolean;
        get percent(): number;
        get remainingCriteria(): $Iterable<string>;
        get completedCriteria(): $Iterable<string>;
    }
    export class $DisplayInfo {
        shouldAnnounceChat(): boolean;
        getIcon(): $ItemStack;
        shouldShowToast(): boolean;
        isHidden(): boolean;
        getType(): $AdvancementType;
        getDescription(): $Component;
        getTitle(): $Component;
        getBackground(): ($ResourceLocation) | undefined;
        setLocation(x: number, y: number): void;
        getX(): number;
        getY(): number;
        static CODEC: $Codec<$DisplayInfo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DisplayInfo>;
        constructor(icon: $ItemStack_, title: $Component_, description: $Component_, background: ($ResourceLocation_) | undefined, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean);
        get icon(): $ItemStack;
        get hidden(): boolean;
        get type(): $AdvancementType;
        get description(): $Component;
        get title(): $Component;
        get background(): ($ResourceLocation) | undefined;
        get x(): number;
        get y(): number;
    }
    export class $AdvancementNode implements $AdvancementNodeKJS {
        parent(): $AdvancementNode;
        root(): $AdvancementNode;
        holder(): $AdvancementHolder;
        static getRoot(node: $AdvancementNode): $AdvancementNode;
        children(): $Iterable<$AdvancementNode>;
        addChild(child: $AdvancementNode): void;
        advancement(): $Advancement;
        addChild(child: $AdvancementNode): void;
        getDisplayText(): $Component;
        getDisplay(): $DisplayInfo;
        getDescription(): $Component;
        getChildren(): $Set<$AdvancementNode>;
        getParent(): $AdvancementNode;
        hasDisplay(): boolean;
        getTitle(): $Component;
        self(): $AdvancementNode;
        getId(): $ResourceLocation;
        constructor(holder: $AdvancementHolder_, parent: $AdvancementNode | null);
        get displayText(): $Component;
        get display(): $DisplayInfo;
        get description(): $Component;
        get title(): $Component;
        get id(): $ResourceLocation;
    }
    export class $TreeNodePosition {
        static run(rootNode: $AdvancementNode): void;
        constructor(node: $AdvancementNode, parent: $TreeNodePosition | null, previousSibling: $TreeNodePosition | null, childIndex: number, x: number);
    }
    export class $AdvancementHolder extends $Record {
        value(): $Advancement;
        id(): $ResourceLocation;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AdvancementHolder>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancementHolder>;
        constructor(arg0: $ResourceLocation_, arg1: $Advancement_);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementHolder}.
     */
    export type $AdvancementHolder_ = { value?: $Advancement_, id?: $ResourceLocation_,  } | [value?: $Advancement_, id?: $ResourceLocation_, ];
    export class $CriterionTriggerInstance {
    }
    export interface $CriterionTriggerInstance {
        validate(validator: $CriterionValidator): void;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTriggerInstance}.
     */
    export type $CriterionTriggerInstance_ = ((arg0: $CriterionValidator) => void);
}
