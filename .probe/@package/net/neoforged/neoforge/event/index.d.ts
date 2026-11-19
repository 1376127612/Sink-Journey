import { $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $ReloadableServerResources, $MinecraftServer } from "@package/net/minecraft/server";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $LightningBolt, $EntityType_, $MobCategory_, $EntityDimensions_, $Entity, $EquipmentSlotGroup_, $EquipmentSlot_, $Pose_, $LivingEntity, $Mob, $SlotAccess, $SpawnGroupData, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $PreparableReloadListener_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $AdvancementProgress, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $Container, $InteractionResultHolder, $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $SoundSource_, $SoundEvent, $SoundSource } from "@package/net/minecraft/sounds";
import { $BlockSnapshot, $InsertableLinkedOpenCustomHashSet } from "@package/net/neoforged/neoforge/common/util";
import { $IOwnedSpawner_ } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PackType_, $PackType } from "@package/net/minecraft/server/packs";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Method } from "@package/java/lang/reflect";
import { $DataComponentPatch$Builder } from "@package/net/minecraft/core/component";
import { $ContainerLevelAccess_, $ClickAction_, $Slot, $ContainerLevelAccess, $ClickAction } from "@package/net/minecraft/world/inventory";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ItemAbility_, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $Item, $CreativeModeTab$ItemDisplayParameters_, $TooltipFlag, $CreativeModeTab_, $CreativeModeTab$DisplayItemsGenerator_, $CreativeModeTab$ItemDisplayParameters, $CreativeModeTab, $CreativeModeTab$TabVisibility_, $Item$TooltipContext, $ItemStack_, $ItemStack, $CreativeModeTab$Output_, $CreativeModeTab$Output } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player$BedSleepingProblem, $Player$BedSleepingProblem_, $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $LevelStorageSource$LevelDirectory_, $LevelStorageSource$LevelDirectory, $PlayerDataStorage, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $Projectile, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $CommandBuildContext, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Pack$Position_, $RepositorySource, $PackSource, $RepositorySource_ } from "@package/net/minecraft/server/packs/repository";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $EntityTeleportEvent$ChorusFruit, $EntityTeleportEvent$EnderPearl, $EntityTeleportEvent$TeleportCommand, $EntityEvent$Size, $EntityTeleportEvent$EnderEntity, $EntityTeleportEvent$SpreadPlayersCommand } from "@package/net/neoforged/neoforge/event/entity";
import { $MutableFloat } from "@package/org/apache/commons/lang3/mutable";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $Stat_, $Stat } from "@package/net/minecraft/stats";
import { $StructuresBecomeConfiguredFix$Conversion_ } from "@package/net/minecraft/util/datafix/fixes";
import { $ContextAwareReloadListener } from "@package/net/neoforged/neoforge/resource";
import { $GameEvent, $GameEvent$Context_, $GameEvent$Context } from "@package/net/minecraft/world/level/gameevent";
import { $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set_, $List, $EnumSet, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $PlayerSpawnPhantomsEvent, $AdvancementEvent$AdvancementProgressEvent$ProgressType_, $PlayerEvent, $PlayerRespawnPositionEvent, $BonemealEvent, $ItemTooltipEvent, $ItemEntityPickupEvent$Pre } from "@package/net/neoforged/neoforge/event/entity/player";
import { $ArtifactVersion } from "@package/org/apache/maven/artifact/versioning";
import { $BooleanSupplier_, $Consumer_, $Predicate_, $BiPredicate_ } from "@package/java/util/function";
import { $ObjectSortedSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$RegistryLookup, $BlockPos_, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $RegistryAccess, $Holder_ } from "@package/net/minecraft/core";
import { $ChunkHolder, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemEnchantments, $Enchantment, $ItemEnchantments_, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Throwable, $Enum, $Record, $Class } from "@package/java/lang";
import { $BlockGrowFeatureEvent, $BlockEvent$NeighborNotifyEvent, $AlterGroundEvent$StateProvider_, $AlterGroundEvent$StateProvider } from "@package/net/neoforged/neoforge/event/level";
import { $LootTable, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $File_ } from "@package/java/io";
import { $ServerLevelAccessor, $CustomSpawner_, $Explosion, $LevelAccessor, $ItemLike_, $ChunkPos, $BlockGetter, $CustomSpawner, $BaseSpawner, $Level_, $Level, $SpawnData_ } from "@package/net/minecraft/world/level";
import { $TreeDecorator$Context } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemAttributeModifiers, $ItemAttributeModifiers_, $ItemAttributeModifiers$Entry } from "@package/net/minecraft/world/item/component";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FinalizeSpawnEvent, $MobSplitEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Gui$HeartType, $Gui$HeartType_ } from "@package/net/minecraft/client/gui";
import { $ItemAttributeModifierBase } from "@package/com/blamejared/crafttweaker/api/item/attribute";
import { $DimensionTransition_, $PortalShape } from "@package/net/minecraft/world/level/portal";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as entity from "@package/net/neoforged/neoforge/event/entity";
export * as brewing from "@package/net/neoforged/neoforge/event/brewing";
export * as level from "@package/net/neoforged/neoforge/event/level";
export * as tick from "@package/net/neoforged/neoforge/event/tick";
export * as server from "@package/net/neoforged/neoforge/event/server";
export * as village from "@package/net/neoforged/neoforge/event/village";
export * as furnace from "@package/net/neoforged/neoforge/event/furnace";
export * as enchanting from "@package/net/neoforged/neoforge/event/enchanting";

declare module "@package/net/neoforged/neoforge/event" {
    export class $RegisterStructureConversionsEvent extends $Event {
        register(arg0: string, arg1: $StructuresBecomeConfiguredFix$Conversion_): void;
        constructor(arg0: $Map_<string, $StructuresBecomeConfiguredFix$Conversion_>);
    }
    export class $AnvilUpdateEvent extends $Event implements $ICancellableEvent {
        setOutput(arg0: $ItemStack_): void;
        setCost(arg0: number): void;
        getMaterialCost(): number;
        setMaterialCost(arg0: number): void;
        getName(): string;
        getOutput(): $ItemStack;
        getPlayer(): $Player;
        getLeft(): $ItemStack;
        getRight(): $ItemStack;
        getCost(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: string, arg3: number, arg4: $Player);
        get name(): string;
        get player(): $Player;
        get left(): $ItemStack;
        get right(): $ItemStack;
    }
    export class $ItemStackedOnOtherEvent extends $Event implements $ICancellableEvent {
        getCarriedSlotAccess(): $SlotAccess;
        getClickAction(): $ClickAction;
        getStackedOnItem(): $ItemStack;
        getCarriedItem(): $ItemStack;
        getSlot(): $Slot;
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Slot, arg3: $ClickAction_, arg4: $Player, arg5: $SlotAccess);
        get carriedSlotAccess(): $SlotAccess;
        get clickAction(): $ClickAction;
        get stackedOnItem(): $ItemStack;
        get carriedItem(): $ItemStack;
        get slot(): $Slot;
        get player(): $Player;
    }
    export class $ItemAttributeModifierEvent$ItemAttributeModifiersBuilder$Key extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ItemAttributeModifierEvent$ItemAttributeModifiersBuilder$Key}.
     */
    export type $ItemAttributeModifierEvent$ItemAttributeModifiersBuilder$Key_ = { attr?: $Holder_<$Attribute>, id?: $ResourceLocation_,  } | [attr?: $Holder_<$Attribute>, id?: $ResourceLocation_, ];
    export class $VanillaGameEvent extends $Event implements $ICancellableEvent {
        getVanillaEvent(): $Holder<$GameEvent>;
        getEventPosition(): $Vec3;
        getCause(): $Entity;
        getContext(): $GameEvent$Context;
        getLevel(): $Level;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $Holder_<$GameEvent>, arg2: $Vec3_, arg3: $GameEvent$Context_);
        get vanillaEvent(): $Holder<$GameEvent>;
        get eventPosition(): $Vec3;
        get cause(): $Entity;
        get context(): $GameEvent$Context;
        get level(): $Level;
    }
    export class $ModMismatchEvent$MismatchResolutionResult extends $Record {
        wasSelfResolved(): boolean;
        versionDifference(): $ModMismatchEvent$MismatchedVersionInfo;
        resolver(): $ModContainer;
        modid(): string;
        constructor(modid: string, versionDifference: $ModMismatchEvent$MismatchedVersionInfo_, resolver: $ModContainer);
    }
    /**
     * Values that may be interpreted as {@link $ModMismatchEvent$MismatchResolutionResult}.
     */
    export type $ModMismatchEvent$MismatchResolutionResult_ = { modid?: string, versionDifference?: $ModMismatchEvent$MismatchedVersionInfo_, resolver?: $ModContainer,  } | [modid?: string, versionDifference?: $ModMismatchEvent$MismatchedVersionInfo_, resolver?: $ModContainer, ];
    export class $ModifyDefaultComponentsEvent extends $Event implements $IModBusEvent {
        modifyMatching(arg0: $Predicate_<$Item>, arg1: $Consumer_<$DataComponentPatch$Builder>): void;
        getAllItems(): $Stream<$Item>;
        modify(arg0: $ItemLike_, arg1: $Consumer_<$DataComponentPatch$Builder>): void;
        constructor();
        get allItems(): $Stream<$Item>;
    }
    export class $RegisterCommandsEvent extends $Event {
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getCommandSelection(): $Commands$CommandSelection;
        getBuildContext(): $CommandBuildContext;
        constructor(arg0: $CommandDispatcher<$CommandSourceStack>, arg1: $Commands$CommandSelection_, arg2: $CommandBuildContext);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get commandSelection(): $Commands$CommandSelection;
        get buildContext(): $CommandBuildContext;
    }
    export class $StatAwardEvent extends $PlayerEvent implements $ICancellableEvent {
        getStat(): $Stat<never>;
        getValue(): number;
        setValue(arg0: number): void;
        setStat(arg0: $Stat_<never>): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Stat_<never>, arg2: number);
    }
    export class $ItemAttributeModifierEvent extends $Event implements $ItemAttributeModifierBase {
        getDefaultModifiers(): $ItemAttributeModifiers;
        removeAllModifiersFor(arg0: $Holder_<$Attribute>): boolean;
        addModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_): boolean;
        clearModifiers(): void;
        replaceModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_): void;
        getModifiers(): $List<$ItemAttributeModifiers$Entry>;
        removeIf(arg0: $Predicate_<$ItemAttributeModifiers$Entry>): boolean;
        build(): $ItemAttributeModifiers;
        getItemStack(): $ItemStack;
        removeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemAttributeModifiers_);
        get defaultModifiers(): $ItemAttributeModifiers;
        get modifiers(): $List<$ItemAttributeModifiers$Entry>;
        get itemStack(): $ItemStack;
    }
    export class $ItemAttributeModifierEvent$ItemAttributeModifiersBuilder {
    }
    export class $PlayLevelSoundEvent extends $Event implements $ICancellableEvent {
        getNewVolume(): number;
        getNewPitch(): number;
        setSound(arg0: $Holder_<$SoundEvent>): void;
        getSource(): $SoundSource;
        getLevel(): $Level;
        setSource(arg0: $SoundSource_): void;
        getSound(): $Holder<$SoundEvent>;
        getOriginalPitch(): number;
        setNewPitch(arg0: number): void;
        setNewVolume(arg0: number): void;
        getOriginalVolume(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $Holder_<$SoundEvent>, arg2: $SoundSource_, arg3: number, arg4: number);
        get level(): $Level;
        get originalPitch(): number;
        get originalVolume(): number;
    }
    export class $AddReloadListenerEvent extends $Event {
        getRegistryAccess(): $RegistryAccess;
        getListeners(): $List<$PreparableReloadListener>;
        addListener(arg0: $PreparableReloadListener_): void;
        getServerResources(): $ReloadableServerResources;
        getConditionContext(): $ICondition$IContext;
        constructor(arg0: $ReloadableServerResources, arg1: $RegistryAccess);
        get registryAccess(): $RegistryAccess;
        get listeners(): $List<$PreparableReloadListener>;
        get serverResources(): $ReloadableServerResources;
        get conditionContext(): $ICondition$IContext;
    }
    export class $EventHooks {
        static onAdvancementProgressedEvent(arg0: $Player, arg1: $AdvancementHolder_, arg2: $AdvancementProgress, arg3: string, arg4: $AdvancementEvent$AdvancementProgressEvent$ProgressType_): void;
        static getBlockLootEnchantmentLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>, arg2: number, arg3: $LootContext): number;
        static onMobSplit(arg0: $Mob, arg1: $List_<$Mob>): $MobSplitEvent;
        static firePlayerRespawnPositionEvent(arg0: $ServerPlayer, arg1: $DimensionTransition_, arg2: boolean): $PlayerRespawnPositionEvent;
        static onStatAward(arg0: $Player, arg1: $Stat_<never>, arg2: number): $StatAwardEvent;
        static onToolUse(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        static onCommandRegister(arg0: $CommandDispatcher<$CommandSourceStack>, arg1: $Commands$CommandSelection_, arg2: $CommandBuildContext): void;
        static onItemUseFinish(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: $ItemStack_): $ItemStack;
        /**
         * @deprecated
         */
        static onItemUseStart(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): number;
        static onItemUseStart(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: number): number;
        static onItemUseTick(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): number;
        static onUseItemStop(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): boolean;
        static firePlayerRespawnEvent(arg0: $ServerPlayer, arg1: boolean): void;
        static firePlayerLoadingEvent(arg0: $Player, arg1: $PlayerDataStorage, arg2: string): void;
        static firePlayerLoadingEvent(arg0: $Player, arg1: $File_, arg2: string): void;
        static firePlayerLoggedOut(arg0: $Player): void;
        static onPermissionChanged(arg0: $GameProfile, arg1: number, arg2: $PlayerList): boolean;
        static firePlayerTickPre(arg0: $Player): void;
        static getBreakSpeed(arg0: $Player, arg1: $BlockState_, arg2: number, arg3: $BlockPos_): number;
        static firePlayerTickPost(arg0: $Player): void;
        static onPlayerWakeup(arg0: $Player, arg1: boolean, arg2: boolean): void;
        static onPlayerFall(arg0: $Player, arg1: number, arg2: number): void;
        static getEntityLootEnchantmentLevel(arg0: $Holder_<$Enchantment>, arg1: number, arg2: $LootContext): number;
        static fireBlockGrowFeature(arg0: $LevelAccessor, arg1: $RandomSource, arg2: $BlockPos_, arg3: $Holder_<$ConfiguredFeature<never, never>>): $BlockGrowFeatureEvent;
        static getEntitySizeForge(arg0: $Entity, arg1: $Pose_, arg2: $EntityDimensions_, arg3: $EntityDimensions_): $EntityEvent$Size;
        static getEntitySizeForge(arg0: $Entity, arg1: $Pose_, arg2: $EntityDimensions_): $EntityEvent$Size;
        static fireEntityTickPre(arg0: $Entity): $EntityTickEvent$Pre;
        static canMountEntity(arg0: $Entity, arg1: $Entity, arg2: boolean): boolean;
        static fireEntityTickPost(arg0: $Entity): void;
        static fireServerTickPost(arg0: $BooleanSupplier_, arg1: $MinecraftServer): void;
        static fireServerTickPre(arg0: $BooleanSupplier_, arg1: $MinecraftServer): void;
        static onProjectileImpact(arg0: $Projectile, arg1: $HitResult): boolean;
        static checkMobDespawn(arg0: $Mob): boolean;
        static onEffectRemoved(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $EffectCure): boolean;
        static onEffectRemoved(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>, arg2: $EffectCure): boolean;
        static onLivingHeal(arg0: $LivingEntity, arg1: number): number;
        static getExperienceDrop(arg0: $LivingEntity, arg1: $Player, arg2: number): number;
        static canEntityGrief(arg0: $Level_, arg1: $Entity): boolean;
        static onChorusFruitTeleport(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number): $EntityTeleportEvent$ChorusFruit;
        static onEntityStruckByLightning(arg0: $Entity, arg1: $LightningBolt): boolean;
        static onExplosionDetonate(arg0: $Level_, arg1: $Explosion, arg2: $List_<$Entity>, arg3: number): void;
        static getExplosionKnockback(arg0: $Level_, arg1: $Explosion, arg2: $Entity, arg3: $Vec3_): $Vec3;
        static canCreateFluidSource(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static fireFluidPlaceBlockEvent(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $BlockState_): $BlockState;
        static getMaxSpawnClusterSize(arg0: $Mob): number;
        static getPlayerDisplayName(arg0: $Player, arg1: $Component_): $Component;
        static onSleepFinished(arg0: $ServerLevel, arg1: number, arg2: number): number;
        static getCustomSpawners(arg0: $ServerLevel, arg1: $List_<$CustomSpawner_>): $List<$CustomSpawner>;
        static onItemExpire(arg0: $ItemEntity): number;
        static fireItemPickupPost(arg0: $ItemEntity, arg1: $Player, arg2: $ItemStack_): void;
        static fireItemPickupPre(arg0: $ItemEntity, arg1: $Player): $ItemEntityPickupEvent$Pre;
        static onNeighborNotify(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnumSet<$Direction_>, arg4: boolean): $BlockEvent$NeighborNotifyEvent;
        static onExplosionStart(arg0: $Level_, arg1: $Explosion): boolean;
        static finalizeMobSpawnSpawner(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $DifficultyInstance, arg3: $MobSpawnType_, arg4: $SpawnGroupData, arg5: $IOwnedSpawner_, arg6: boolean): $FinalizeSpawnEvent;
        static checkSpawnPositionSpawner(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $SpawnData_, arg4: $BaseSpawner): boolean;
        static onPlaySoundAtEntity(arg0: $Entity, arg1: $Holder_<$SoundEvent>, arg2: $SoundSource_, arg3: number, arg4: number): $PlayLevelSoundEvent$AtEntity;
        static onPlaySoundAtPosition(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $Holder_<$SoundEvent>, arg5: $SoundSource_, arg6: number, arg7: number): $PlayLevelSoundEvent$AtPosition;
        static onPotionAttemptBrew(arg0: $NonNullList<$ItemStack_>): boolean;
        static onEnchantmentLevelSet(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number): number;
        static onAdvancementEarnedEvent(arg0: $Player, arg1: $AdvancementHolder_): void;
        static onPotionBrewed(arg0: $NonNullList<$ItemStack_>): void;
        static onPlayerBrewedPotion(arg0: $Player, arg1: $ItemStack_): void;
        static firePlayerCraftingEvent(arg0: $Player, arg1: $ItemStack_, arg2: $Container): void;
        static firePlayerSmeltedEvent(arg0: $Player, arg1: $ItemStack_): void;
        static onArrowLoose(arg0: $ItemStack_, arg1: $Level_, arg2: $Player, arg3: number, arg4: boolean): number;
        static onArrowNock(arg0: $ItemStack_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_, arg4: boolean): $InteractionResultHolder<$ItemStack>;
        static fireBonemealEvent(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ItemStack_): $BonemealEvent;
        static onEnderTeleport(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number): $EntityTeleportEvent$EnderEntity;
        static onBlockPlace(arg0: $Entity, arg1: $BlockSnapshot, arg2: $Direction_): boolean;
        static onMultiBlockPlace(arg0: $Entity, arg1: $List_<$BlockSnapshot>, arg2: $Direction_): boolean;
        static onAnimalTame(arg0: $Animal, arg1: $Player): boolean;
        static firePlayerLoggedIn(arg0: $Player): void;
        static onCreateWorldSpawn(arg0: $Level_, arg1: $ServerLevelData): boolean;
        static onStopEntityTracking(arg0: $Entity, arg1: $Player): void;
        static onStartEntityTracking(arg0: $Entity, arg1: $Player): void;
        static onEntityTeleportSpreadPlayersCommand(arg0: $Entity, arg1: number, arg2: number, arg3: number): $EntityTeleportEvent$SpreadPlayersCommand;
        static firePlayerSavingEvent(arg0: $Player, arg1: $File_, arg2: string): void;
        static firePlayerHeartTypeEvent(arg0: $Player, arg1: $Gui$HeartType_): $Gui$HeartType;
        static onEquipmentDropChance(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $DamageSource_, arg3: $MutableFloat, arg4: number, arg5: $EquipmentSlot_): void;
        static firePlayerSpawnPhantoms(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $BlockPos_): $PlayerSpawnPhantomsEvent;
        static onEntityTeleportCommand(arg0: $Entity, arg1: number, arg2: number, arg3: number): $EntityTeleportEvent$TeleportCommand;
        /**
         * @deprecated
         */
        static loadLootTable(arg0: $ResourceLocation_, arg1: $LootTable): $LootTable;
        static loadLootTable(arg0: $HolderLookup$Provider, arg1: $ResourceLocation_, arg2: $LootTable): $LootTable;
        static fireChunkTicketLevelUpdated(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $ChunkHolder): void;
        static onLivingConvert(arg0: $LivingEntity, arg1: $LivingEntity): void;
        static canLivingConvert(arg0: $LivingEntity, arg1: $EntityType_<$LivingEntity>, arg2: $Consumer_<number>): boolean;
        static getEnchantmentLevelSpecific(arg0: number, arg1: $ItemStack_, arg2: $Holder_<$Enchantment>): number;
        static fireLevelTickPost(arg0: $Level_, arg1: $BooleanSupplier_): void;
        static fireLevelTickPre(arg0: $Level_, arg1: $BooleanSupplier_): void;
        static alterGround(arg0: $TreeDecorator$Context, arg1: $List_<$BlockPos_>, arg2: $AlterGroundEvent$StateProvider_): $AlterGroundEvent$StateProvider;
        static onItemTooltip(arg0: $ItemStack_, arg1: $Player, arg2: $List_<$Component_>, arg3: $TooltipFlag, arg4: $Item$TooltipContext): $ItemTooltipEvent;
        static getItemBurnTime(arg0: $ItemStack_, arg1: number, arg2: $RecipeType_<never>): number;
        static onPlayerSpawnSet(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $BlockPos_, arg3: boolean): boolean;
        static onPlayerClone(arg0: $Player, arg1: $Player, arg2: boolean): void;
        static onTrySpawnPortal(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: ($PortalShape) | undefined): ($PortalShape) | undefined;
        static getAllEnchantmentLevels(arg0: $ItemEnchantments_, arg1: $ItemStack_, arg2: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        static onEntityDestroyBlock(arg0: $LivingEntity, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static firePlayerChangedDimensionEvent(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>): void;
        static getPlayerTabListDisplayName(arg0: $Player): $Component;
        static onEnderPearlLand(arg0: $ServerPlayer, arg1: number, arg2: number, arg3: number, arg4: $ThrownEnderpearl, arg5: number, arg6: $HitResult): $EntityTeleportEvent$EnderPearl;
        static onResourceReload(arg0: $ReloadableServerResources, arg1: $RegistryAccess): $List<$PreparableReloadListener>;
        static onPistonMovePre(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean): boolean;
        static onPistonMovePost(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean): void;
        static canEntityContinueSleeping(arg0: $LivingEntity, arg1: $Player$BedSleepingProblem_): boolean;
        static onPlayerDestroyItem(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_): void;
        static doPlayerHarvestCheck(arg0: $Player, arg1: $BlockState_, arg2: $BlockGetter, arg3: $BlockPos_): boolean;
        static checkSpawnPlacements(arg0: $EntityType_<never>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource, arg5: boolean): boolean;
        static finalizeMobSpawn(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $DifficultyInstance, arg3: $MobSpawnType_, arg4: $SpawnGroupData): $SpawnGroupData;
        static onCreativeModeTabBuildContents(arg0: $CreativeModeTab_, arg1: $ResourceKey_<$CreativeModeTab>, arg2: $CreativeModeTab$DisplayItemsGenerator_, arg3: $CreativeModeTab$ItemDisplayParameters_, arg4: $CreativeModeTab$Output_): void;
        static canPlayerStartSleeping(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $Either<$Player$BedSleepingProblem_, $Unit_>): $Either<$Player$BedSleepingProblem, $Unit>;
        static fireChunkUnWatch(arg0: $ServerPlayer, arg1: $ChunkPos, arg2: $ServerLevel): void;
        static fireChunkWatch(arg0: $ServerPlayer, arg1: $LevelChunk, arg2: $ServerLevel): void;
        static checkSpawnPosition(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_): boolean;
        static getPotentialSpawns(arg0: $LevelAccessor, arg1: $MobCategory_, arg2: $BlockPos_, arg3: $WeightedRandomList<$MobSpawnSettings$SpawnerData>): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static fireChunkSent(arg0: $ServerPlayer, arg1: $LevelChunk, arg2: $ServerLevel): void;
        constructor();
    }
    export class $ModMismatchEvent$MismatchedVersionInfo extends $Record {
        isMissing(): boolean;
        oldVersion(): $ArtifactVersion;
        newVersion(): $ArtifactVersion;
        wasUpgrade(): boolean;
        constructor(oldVersion: $ArtifactVersion, newVersion: $ArtifactVersion);
        get missing(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModMismatchEvent$MismatchedVersionInfo}.
     */
    export type $ModMismatchEvent$MismatchedVersionInfo_ = { oldVersion?: $ArtifactVersion, newVersion?: $ArtifactVersion,  } | [oldVersion?: $ArtifactVersion, newVersion?: $ArtifactVersion, ];
    export class $OnDatapackSyncEvent extends $Event {
        getPlayerList(): $PlayerList;
        getRelevantPlayers(): $Stream<$ServerPlayer>;
        getPlayer(): $ServerPlayer;
        constructor(arg0: $PlayerList, arg1: $ServerPlayer);
        get playerList(): $PlayerList;
        get relevantPlayers(): $Stream<$ServerPlayer>;
        get player(): $ServerPlayer;
    }
    export class $AddPackFindersEvent extends $Event implements $IModBusEvent {
        addPackFinders(arg0: $ResourceLocation_, arg1: $PackType_, arg2: $Component_, arg3: $PackSource, arg4: boolean, arg5: $Pack$Position_): void;
        addRepositorySource(arg0: $RepositorySource_): void;
        isTrusted(): boolean;
        getPackType(): $PackType;
        constructor(arg0: $PackType_, arg1: $Consumer_<$RepositorySource>, arg2: boolean);
        get trusted(): boolean;
        get packType(): $PackType;
    }
    export class $TagsUpdatedEvent extends $Event {
        getRegistryAccess(): $RegistryAccess;
        shouldUpdateStaticData(): boolean;
        getUpdateCause(): $TagsUpdatedEvent$UpdateCause;
        constructor(arg0: $RegistryAccess, arg1: boolean, arg2: boolean);
        get registryAccess(): $RegistryAccess;
        get updateCause(): $TagsUpdatedEvent$UpdateCause;
    }
    export class $BlockEntityTypeAddBlocksEvent extends $Event implements $IModBusEvent {
        modify(arg0: $BlockEntityType_<never>, ...arg1: $Block_[]): void;
        modify(arg0: $BiPredicate_<$ResourceKey<$BlockEntityType<never>>, $BlockEntityType<never>>, ...arg1: $Block_[]): void;
        modify(arg0: $ResourceKey_<$BlockEntityType<never>>, ...arg1: $Block_[]): void;
        constructor();
    }
    export class $CommandEvent extends $Event implements $ICancellableEvent {
        getParseResults(): $ParseResults<$CommandSourceStack>;
        setParseResults(arg0: $ParseResults<$CommandSourceStack>): void;
        getException(): $Throwable;
        setException(arg0: $Throwable): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ParseResults<$CommandSourceStack>);
    }
    export class $GrindstoneEvent$OnPlaceItem extends $GrindstoneEvent implements $ICancellableEvent {
        setOutput(arg0: $ItemStack_): void;
        getOutput(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number);
    }
    export class $ModMismatchEvent extends $Event implements $IModBusEvent {
        getVersionDifference(arg0: string): ($ModMismatchEvent$MismatchedVersionInfo) | undefined;
        markResolved(arg0: string): void;
        getUnresolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        anyResolved(): boolean;
        anyUnresolved(): boolean;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getPreviousVersion(arg0: string): $ArtifactVersion;
        wasResolved(arg0: string): boolean;
        getResolver(arg0: string): ($ModContainer) | undefined;
        getResolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        getCurrentVersion(arg0: string): $ArtifactVersion;
        constructor(arg0: $LevelStorageSource$LevelDirectory_, arg1: $Map_<string, $ArtifactVersion>, arg2: $Map_<string, $ArtifactVersion>);
        get unresolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
        get resolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
    }
    export class $LootTableLoadEvent extends $Event implements $ICancellableEvent {
        getRegistries(): $HolderLookup$Provider;
        setTable(arg0: $LootTable): void;
        getName(): $ResourceLocation;
        getKey(): $ResourceKey<$LootTable>;
        getTable(): $LootTable;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        /**
         * @deprecated
         */
        constructor(arg0: $ResourceLocation_, arg1: $LootTable);
        constructor(arg0: $HolderLookup$Provider, arg1: $ResourceLocation_, arg2: $LootTable);
        get registries(): $HolderLookup$Provider;
        get name(): $ResourceLocation;
        get key(): $ResourceKey<$LootTable>;
    }
    export class $RegisterGameTestsEvent extends $Event implements $IModBusEvent {
        register(arg0: $Class<never>): void;
        register(arg0: $Method): void;
        constructor(arg0: $Set_<$Method>);
    }
    export class $PlayLevelSoundEvent$AtEntity extends $PlayLevelSoundEvent {
        getEntity(): $Entity;
        constructor(arg0: $Entity, arg1: $Holder_<$SoundEvent>, arg2: $SoundSource_, arg3: number, arg4: number);
        get entity(): $Entity;
    }
    export class $GrindstoneEvent extends $Event {
        getXp(): number;
        getTopItem(): $ItemStack;
        setXp(arg0: number): void;
        getBottomItem(): $ItemStack;
        get topItem(): $ItemStack;
        get bottomItem(): $ItemStack;
    }
    export class $TagsUpdatedEvent$UpdateCause extends $Enum<$TagsUpdatedEvent$UpdateCause> {
        static values(): $TagsUpdatedEvent$UpdateCause[];
        static valueOf(arg0: string): $TagsUpdatedEvent$UpdateCause;
        static SERVER_DATA_LOAD: $TagsUpdatedEvent$UpdateCause;
        static CLIENT_PACKET_RECEIVED: $TagsUpdatedEvent$UpdateCause;
    }
    /**
     * Values that may be interpreted as {@link $TagsUpdatedEvent$UpdateCause}.
     */
    export type $TagsUpdatedEvent$UpdateCause_ = "server_data_load" | "client_packet_received";
    export class $BuildCreativeModeTabContentsEvent extends $Event implements $IModBusEvent, $CreativeModeTab$Output {
        insertFirst(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        insertAfter(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $CreativeModeTab$TabVisibility_): void;
        getParentEntries(): $ObjectSortedSet<$ItemStack>;
        getSearchEntries(): $ObjectSortedSet<$ItemStack>;
        hasPermissions(): boolean;
        getParameters(): $CreativeModeTab$ItemDisplayParameters;
        remove(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        accept(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        getTab(): $CreativeModeTab;
        getFlags(): $FeatureFlagSet;
        getTabKey(): $ResourceKey<$CreativeModeTab>;
        insertBefore(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $CreativeModeTab$TabVisibility_): void;
        acceptAll(arg0: $Collection_<$ItemStack_>): void;
        acceptAll(arg0: $Collection_<$ItemStack_>, arg1: $CreativeModeTab$TabVisibility_): void;
        accept(arg0: $ItemLike_): void;
        accept(arg0: $ItemStack_): void;
        accept(arg0: $ItemLike_, arg1: $CreativeModeTab$TabVisibility_): void;
        constructor(arg0: $CreativeModeTab_, arg1: $ResourceKey_<$CreativeModeTab>, arg2: $CreativeModeTab$ItemDisplayParameters_, arg3: $InsertableLinkedOpenCustomHashSet<$ItemStack_>, arg4: $InsertableLinkedOpenCustomHashSet<$ItemStack_>);
        get parentEntries(): $ObjectSortedSet<$ItemStack>;
        get searchEntries(): $ObjectSortedSet<$ItemStack>;
        get parameters(): $CreativeModeTab$ItemDisplayParameters;
        get tab(): $CreativeModeTab;
        get flags(): $FeatureFlagSet;
        get tabKey(): $ResourceKey<$CreativeModeTab>;
    }
    export class $GrindstoneEvent$OnTakeItem extends $GrindstoneEvent implements $ICancellableEvent {
        getNewBottomItem(): $ItemStack;
        getNewTopItem(): $ItemStack;
        getContainerAccess(): $ContainerLevelAccess;
        setNewTopItem(arg0: $ItemStack_): void;
        setNewBottomItem(arg0: $ItemStack_): void;
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ContainerLevelAccess_, arg1: $Player, arg2: $ItemStack_, arg3: $ItemStack_, arg4: number);
        /**
         * @deprecated
         */
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number);
        get containerAccess(): $ContainerLevelAccess;
        get player(): $Player;
    }
    export class $GameShuttingDownEvent extends $Event {
        constructor();
    }
    export class $ServerChatEvent extends $Event implements $ICancellableEvent {
        getRawText(): string;
        getUsername(): string;
        getMessage(): $Component;
        setMessage(arg0: $Component_): void;
        getPlayer(): $ServerPlayer;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerPlayer, arg1: string, arg2: $Component_);
        get rawText(): string;
        get username(): string;
        get player(): $ServerPlayer;
    }
    export class $AddReloadListenerEvent$WrappedStateAwareListener extends $ContextAwareReloadListener implements $PreparableReloadListener {
    }
    export class $DifficultyChangeEvent extends $Event {
        getDifficulty(): $Difficulty;
        getOldDifficulty(): $Difficulty;
        constructor(arg0: $Difficulty_, arg1: $Difficulty_);
        get difficulty(): $Difficulty;
        get oldDifficulty(): $Difficulty;
    }
    export class $PlayLevelSoundEvent$AtPosition extends $PlayLevelSoundEvent {
        getPosition(): $Vec3;
        constructor(arg0: $Level_, arg1: $Vec3_, arg2: $Holder_<$SoundEvent>, arg3: $SoundSource_, arg4: number, arg5: number);
        get position(): $Vec3;
    }
}
