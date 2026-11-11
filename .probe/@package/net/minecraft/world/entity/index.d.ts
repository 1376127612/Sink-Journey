import { $Goal, $PanicGoal, $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Sensing } from "@package/net/minecraft/world/entity/ai/sensing";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag_, $CompoundTag, $Tag_ } from "@package/net/minecraft/nbt";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $Panda, $Fox, $SnowGolem, $Wolf, $Animal, $Cod, $Chicken, $Cat, $Squid, $Sheep, $Bee, $Dolphin, $Parrot, $Turtle, $Salmon, $Pufferfish, $IronGolem, $Ocelot, $PolarBear, $Cow, $Pig, $TropicalFish, $MushroomCow, $Rabbit } from "@package/net/minecraft/world/entity/animal";
import { $ILivingEntityExtension, $IEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $EntityAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Snowball, $Projectile, $ShulkerBullet, $FishingHook, $WitherSkull, $DragonFireball, $SmallFireball, $SpectralArrow, $LargeFireball, $FireworkRocketEntity, $ThrownExperienceBottle, $EyeOfEnder, $Arrow, $ThrownEgg, $ThrownPotion, $ThrownTrident, $EvokerFangs, $ProjectileDeflection, $LlamaSpit, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Husk, $Evoker, $Drowned, $WitherSkeleton, $Creeper, $Shulker, $Endermite, $Spider, $Blaze, $EnderMan, $MagmaCube, $Witch, $Bogged, $Vindicator, $Zombie, $Strider, $Guardian, $Slime, $ZombifiedPiglin, $Stray, $Silverfish, $Zoglin, $CaveSpider, $Skeleton, $Illusioner, $ZombieVillager, $Pillager, $ElderGuardian, $Ravager, $Phantom, $Vex, $Ghast, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $Vector3f } from "@package/org/joml";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $GameEvent, $DynamicGameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $AccessorEntity } from "@package/top/theillusivec4/curios/mixin/core";
import { $Attribute, $AttributeMap, $AttributeSupplier$Builder, $AttributeInstance, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $LivingEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Painting, $ArmorStand, $ItemFrame, $GlowItemFrame, $LeashFenceKnotEntity } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Donkey, $Llama, $Mule, $ZombieHorse, $Horse, $SkeletonHorse, $TraderLlama } from "@package/net/minecraft/world/entity/animal/horse";
import { $HolderLookup$Provider, $Direction, $Holder_, $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $Holder, $Direction$Axis_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Enum, $Iterable, $Class, $Object, $Record } from "@package/java/lang";
import { $EntityAccessor as $EntityAccessor$1 } from "@package/dev/tr7zw/transition/mixin";
import { $ChunkPos, $Level_, $LevelReader, $EntityGetter, $Level, $ServerLevelAccessor, $Explosion, $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $EntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $TextDisplayEntityAccessor } from "@package/com/euphony/neo_language_reload/mixin";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $KubeRayTraceResult, $EntityPotionEffectsJS } from "@package/dev/latvian/mods/kubejs/entity";
import { $SyncedDataHolder, $EntityDataAccessor_, $EntityDataAccessor, $SynchedEntityData, $SynchedEntityData$DataValue_ } from "@package/net/minecraft/network/syncher";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Tadpole, $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $DimensionTransition_, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $ExtensionHolder } from "@package/dev/tr7zw/transition/mc/extending";
import { $ChangeSubscriber$CountChangeSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource, $DamageSources, $DamageSource_, $CombatTracker } from "@package/net/minecraft/world/damagesource";
import { $Triple, $Triple_ } from "@package/com/supermartijn642/fusion/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $BreezeWindCharge, $WindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $FluidType, $FluidType_ } from "@package/net/neoforged/neoforge/fluids";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $StringRepresentable$EnumCodec, $FormattedCharSequence_, $FormattedCharSequence, $RandomSource, $OptionEnum, $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_, $Nameable, $Container, $InteractionResult, $DifficultyInstance, $InteractionHand } from "@package/net/minecraft/world";
import { $CrashReportCategory, $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $SoundEvent, $SoundSource, $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $EntityAccessor as $EntityAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { $MobAccessor } from "@package/net/p3pp3rf1y/sophisticatedbackpacks/mixin";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $EntityAccess as $EntityAccess$1, $EntityInLevelCallback, $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $SoundAction, $IShearable, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $EntityExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $ProjectileWeaponItem, $ItemStack_, $ItemStack, $ItemDisplayContext_, $ItemDisplayContext, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $EquipmentEntity, $EquipmentEntity$TickableEnchantmentTrackingEntity, $NavigatingEntity, $EquipmentEntity$EquipmentTrackingEntity } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LivingEntityAccessor as $LivingEntityAccessor$1 } from "@package/earth/terrarium/adastra/mixins/common";
import { $InjectedEntityTypeExtension } from "@package/dev/architectury/extensions/injected";
import { $EnchantmentLocationBasedEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Portal_, $Mirror_, $Portal$Transition, $Rotation_, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityKJS, $EntityTypeKJS, $LivingEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Transformation } from "@package/com/mojang/math";
import { $AABB_, $Vec3_, $HitResult, $AABB, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $MinecartFurnace, $MinecartHopper, $MinecartChest, $MinecartTNT, $MinecartCommandBlock, $Boat, $ChestBoat, $MinecartSpawner, $Minecart } from "@package/net/minecraft/world/entity/vehicle";
import { $MobAccess, $EntityAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $MoveControl, $LookControl, $JumpControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $EntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $BlockCachingEntity } from "@package/net/caffeinemc/mods/lithium/common/entity/pushable";
import { $IntFunction, $Predicate_, $Function_, $Supplier_, $BiConsumer_, $ToIntFunction_, $Consumer_, $Predicate, $Consumer, $ToIntFunction, $BiPredicate_ } from "@package/java/util/function";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Cullable } from "@package/dev/tr7zw/entityculling/access";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $LootParams, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { LocalPlayer, AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $DisplayAccessor } from "@package/dev/tr7zw/entityculling/mixin";
import { $PiglinBrute, $Piglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $VecDeltaCodec, $ClientboundAddEntityPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Stream } from "@package/java/util/stream";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $PotionContents_ } from "@package/net/minecraft/world/item/alchemy";
import { $PlayerTeam, $ScoreHolder, $Team } from "@package/net/minecraft/world/scores";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
export * as ai from "@package/net/minecraft/world/entity/ai";
export * as animal from "@package/net/minecraft/world/entity/animal";
export * as projectile from "@package/net/minecraft/world/entity/projectile";
export * as npc from "@package/net/minecraft/world/entity/npc";
export * as boss from "@package/net/minecraft/world/entity/boss";
export * as player from "@package/net/minecraft/world/entity/player";
export * as monster from "@package/net/minecraft/world/entity/monster";
export * as decoration from "@package/net/minecraft/world/entity/decoration";
export * as vehicle from "@package/net/minecraft/world/entity/vehicle";
export * as schedule from "@package/net/minecraft/world/entity/schedule";
export * as ambient from "@package/net/minecraft/world/entity/ambient";
export * as raid from "@package/net/minecraft/world/entity/raid";
export * as item from "@package/net/minecraft/world/entity/item";

declare module "@package/net/minecraft/world/entity" {
    export class $GlowSquid extends $Squid {
        static checkGlowSquidSpawnRules(glowSquid: $EntityType_<$LivingEntity>, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getDarkTicksRemaining(): number;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        tentacleAngle: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        oldTentacleAngle: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zBodyRot: number;
        zo: number;
        xBodyRot: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        zBodyRotO: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        xBodyRotO: number;
        tentacleMovement: number;
        oldTentacleMovement: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$GlowSquid>, level: $Level_);
        get darkTicksRemaining(): number;
    }
    /**
     * @return null or the LivingEntity it was ignited by
     */
    export class $LivingEntity extends $Entity implements $Attackable, $ILivingEntityExtension, $LivingEntityKJS, $BlockCachingEntity, $EquipmentEntity, $ChangeSubscriber$CountChangeSubscriber<any>, $EquipmentEntity$TickableEnchantmentTrackingEntity, $EquipmentEntity$EquipmentTrackingEntity, $LivingEntityAccessor, $LivingEntityAccessor$1 {
        getAttributes(): $AttributeMap;
        getAttribute(attribute: $Holder_<$Attribute>): $AttributeInstance;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isBlocking(): boolean;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        /**
         * @deprecated
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBreatheUnderwater(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDropExperience(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        wasExperienceConsumed(): boolean;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getArmorCoverPercentage(): number;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        hurtCurrentlyUsedShield(yaw: number): void;
        setLastHurtByPlayer(player: $Player | null): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isInvertedHealAndHarm(): boolean;
        setAbsorptionAmount(yaw: number): void;
        isDamageSourceBlocked(damageSource: $DamageSource_): boolean;
        getExperienceReward(level: $ServerLevel, killer: $Entity | null): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtMobTimestamp(): number;
        getLastDamageSource(): $DamageSource;
        /**
         * Returns `true` if all the potion effects in the specified collection are ambient.
         */
        static areAllEffectsAmbient(potionEffects: $Collection_<$MobEffectInstance>): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getAbsorptionAmount(): number;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        getLastClimbablePos(): ($BlockPos) | undefined;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDiscardFriction(): boolean;
        getVisibilityPercent(lookingEntity: $Entity | null): number;
        removeEffectNoUpdate(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        sendEffectToPassengers(effectInstance: $MobEffectInstance): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtByMobTimestamp(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        refreshDirtyAttributes(): void;
        calculateEntityAnimation(includeHeight: boolean): void;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getCurrentSwingDuration(): number;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        /**
         * Called when the entity picks up an item.
         */
        take(entity: $Entity, amount: number): void;
        getAttributeValue(attribute: $Holder_<$Attribute>): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getScale(): number;
        handler$fja000$ad_astra$adastra$travel(arg0: $Vec3_, arg1: $CallbackInfo): void;
        handler$fja000$ad_astra$adastra$hurt(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handleRelativeFrictionAndCalculateMovement(deltaMovement: $Vec3_, friction: number): $Vec3;
        handler$efl000$advanced_ae$hurtSound(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$fja000$ad_astra$adastra$tick(arg0: $CallbackInfo): void;
        handler$cho000$lithium$handleStopRiding(arg0: $CallbackInfo): void;
        handler$bhf000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        lithium$updateHasTickableEnchantments(arg0: $ItemStack_, arg1: $ItemStack_): void;
        lithium$notifyAfterEnchantmentChange(stack: $ItemStack_, amount: number): void;
        static resetForwardDirectionOfRelativePortalPosition(deltaMovement: $Vec3_): $Vec3;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isDeadOrDying(): boolean;
        getItemInHand(hand: $InteractionHand_): $ItemStack;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isUsingItem(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        releaseUsingItem(): void;
        getOffhandItem(): $ItemStack;
        getMainHandItem(): $ItemStack;
        lithium$forceUnsubscribe(stack: $ItemStack_, amount: number): void;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        shouldRiderFaceForward(player: $Player): boolean;
        onEquippedItemBroken(item: $Item_, slot: $EquipmentSlot_): void;
        getLocalBoundsForPose(pose: $Pose_): $AABB;
        /**
         * Called when a record starts or stops playing. Used to make parrots start or stop partying.
         */
        setRecordPlayingNearby(jukebox: $BlockPos_, partyParrot: boolean): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getUseItemRemainingTicks(): number;
        equipmentHasChanged(oldItem: $ItemStack_, newItem: $ItemStack_): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasInfiniteMaterials(): boolean;
        lithium$notifyCount(arg0: $ItemStack_, arg1: number, arg2: number): void;
        getEquipmentSlotForItem(stack: $ItemStack_): $EquipmentSlot;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        lithium$onEquipmentChanged(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAffectedByPotions(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateEffectVisibility(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSleeping(): boolean;
        swing(hand: $InteractionHand_): void;
        swing(hand: $InteractionHand_, updateSelf: boolean): void;
        getFluidFallingAdjustedMovement(gravity: number, arg1: boolean, isFalling: $Vec3_): $Vec3;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSuppressingSlidingDownLadder(): boolean;
        lithium$onEquipmentReplaced(arg0: $ItemStack_, arg1: $ItemStack_): void;
        handler$fme000$electroenergetics$checkTotemDeathProtection(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        wrapOperation$zel000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        handler$cmf000$elementalcraft$canStandOnFluid$return(arg0: $FluidState, arg1: $CallbackInfoReturnable<any>): void;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getAgeScale(): number;
        canAttackType(entityType: $EntityType_<never>): boolean;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getSwimAmount(partialTick: number): number;
        getSleepingPos(): ($BlockPos) | undefined;
        setLastHurtByMob(attacker: $LivingEntity | null): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxHealth(): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasLandedInLiquid(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        skipDropExperience(): void;
        onEquipItem(slot: $EquipmentSlot_, oldItem: $ItemStack_, newItem: $ItemStack_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBeSeenByAnyone(): boolean;
        setLastHurtMob(vehicle: $Entity): void;
        setNoActionTime(ticks: number): void;
        getLastAttacker(): $LivingEntity;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getNoActionTime(): number;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        onEffectRemoved(effectInstance: $MobEffectInstance): void;
        getItemBySlot(slot: $EquipmentSlot_): $ItemStack;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBeSeenAsEnemy(): boolean;
        setSleepingPos(pos: $BlockPos_): void;
        forceAddEffect(instance: $MobEffectInstance, entity: $Entity | null): void;
        /**
         * @deprecated
         */
        canBeAffected(effectInstance: $MobEffectInstance): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        removeAllEffects(): boolean;
        removeEffect(effect: $Holder_<$MobEffect>): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxAbsorption(): number;
        setDiscardFriction(includeHeight: boolean): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isFallFlying(): boolean;
        getLastHurtMob(): $LivingEntity;
        getLastHurtByMob(): $LivingEntity;
        getDeathSound(): $SoundEvent;
        /**
         * 1.8.9
         */
        getCombatTracker(): $CombatTracker;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getVoicePitch(): number;
        dropAllDeathLoot(level: $ServerLevel, damageSource: $DamageSource_): void;
        getKillCredit(): $LivingEntity;
        getHurtSound(damageSource: $DamageSource_): $SoundEvent;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopSleeping(): void;
        setArrowCount(ticks: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getArrowCount(): number;
        setStingerCount(ticks: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getStingerCount(): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        onClimbable(): boolean;
        getLootTable(): $ResourceKey<$LootTable>;
        getFallSounds(): $LivingEntity$Fallsounds;
        getLootTableSeed(): number;
        indicateDamage(xDistance: number, arg1: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getArmorValue(): number;
        getEatingSound(stack: $ItemStack_): $SoundEvent;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        jumpFromGround(): void;
        getAllSlots(): $Iterable<$ItemStack>;
        setItemSlot(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        canStandOnFluid(fluidState: $FluidState): boolean;
        setItemInHand(hand: $InteractionHand_, stack: $ItemStack_): void;
        getArmorSlots(): $Iterable<$ItemStack>;
        getHandSlots(): $Iterable<$ItemStack>;
        hasItemInSlot(slot: $EquipmentSlot_): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpBoostPower(): number;
        doHurtTarget(target: $Entity): boolean;
        getDismountPoses(): $ImmutableList<$Pose>;
        hasLineOfSight(target: $Entity): boolean;
        canTakeItem(stack: $ItemStack_): boolean;
        randomTeleport(x: number, arg1: number, y: number, arg3: boolean): boolean;
        /**
         * Gets the `Direction` for the camera if this entity is sleeping.
         */
        getBedOrientation(): $Direction;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAutoSpinAttack(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearSleepingPos(): void;
        startSleeping(pos: $BlockPos_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopUsingItem(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSensitiveToWater(): boolean;
        onItemPickup(itemEntity: $ItemEntity): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksUsingItem(): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getFallFlyingTicks(): number;
        startUsingItem(hand: $InteractionHand_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onEnterCombat(): void;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getAttackAnim(partialTick: number): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onLeaveCombat(): void;
        getUsedItemHand(): $InteractionHand;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canDisableShield(): boolean;
        getProjectile(weaponStack: $ItemStack_): $ItemStack;
        lithium$notify(stack: $ItemStack_, amount: number): void;
        static getSlotForHand(hand: $InteractionHand_): $EquipmentSlot;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isBaby(): boolean;
        setHealth(yaw: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getHealth(): number;
        getBrain(): $Brain<never>;
        canAttack(livingentity: $LivingEntity, condition: $TargetingConditions): boolean;
        canAttack(target: $LivingEntity): boolean;
        getEffect(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        addEffect(effectInstance: $MobEffectInstance, entity: $Entity | null): boolean;
        addEffect(effectInstance: $MobEffectInstance): boolean;
        hasEffect(effect: $Holder_<$MobEffect>): boolean;
        setSpeed(yaw: number): void;
        heal(yaw: number): void;
        knockback(strength: number, arg1: number, x: number): void;
        /**
         * Called when the mob's health reaches 0.
         */
        die(damageSource: $DamageSource_): void;
        makeSound(sound: $SoundEvent_ | null): void;
        isHolding(predicate: $Predicate_<$ItemStack>): boolean;
        isHolding(item: $Item_): boolean;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getHitbox(): $AABB;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getHurtDir(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        aiStep(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSpeed(): number;
        travel(travelVector: $Vec3_): void;
        canUseSlot(slot: $EquipmentSlot_): boolean;
        getMainArm(): $HumanoidArm;
        setJumping(includeHeight: boolean): void;
        eat(level: $Level_, food: $ItemStack_, foodProperties: $FoodProperties_): $ItemStack;
        eat(level: $Level_, food: $ItemStack_): $ItemStack;
        getUseItem(): $ItemStack;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        attackable(): boolean;
        handler$cni000$pneumaticcraft$onOnEquipItem(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $CallbackInfo): void;
        self(): $LivingEntity;
        canDrownInFluidType(arg0: $FluidType_): boolean;
        onDamageTaken(arg0: $DamageContainer): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        jumpInFluid(arg0: $FluidType_): void;
        sinkInFluid(arg0: $FluidType_): void;
        setTotalMovementSpeedMultiplier(renderDistWeight: number): void;
        setDefaultMovementSpeedMultiplier(renderDistWeight: number): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setChestArmorItem(stack: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setFeetArmorItem(stack: $ItemStack_): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getMainHandItem(): $ItemStack;
        getTotalMovementSpeed(): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getReachDistance(): number;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setHeadArmorItem(stack: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        canEntityBeSeen(target: $LivingEntity): boolean;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setMainHandItem(stack: $ItemStack_): void;
        getChestArmorItem(): $ItemStack;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setLegsArmorItem(stack: $ItemStack_): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        setMovementSpeedAddition(renderDistWeight: number): void;
        setDefaultMovementSpeed(renderDistWeight: number): void;
        getDefaultMovementSpeed(): number;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        getOffHandItem(): $ItemStack;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        rayTrace(): $KubeRayTraceResult;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isUndead(): boolean;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setOffHandItem(stack: $ItemStack_): void;
        setHeldItem(hand: $InteractionHand_, stack: $ItemStack_): void;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(yaw: number): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setEquipment(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        swing(): void;
        swing(hand: $InteractionHand_): void;
        create$callSpawnItemParticles(stack: $ItemStack_, amount: number): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isJumping(): boolean;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static ARMOR_SLOT_OFFSET: number;
        static USE_ITEM_INTERVAL: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        useItem: $ItemStack;
        yHeadRot: number;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        swingingArm: $InteractionHand;
        moveDist: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        walkAnimation: $WalkAnimationState;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        deathTime: number;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static UUID_TAG: string;
        hurtDuration: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static DEFAULT_BABY_SCALE: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        xxa: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        deathScore: number;
        attackAnim: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        timeOffs: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        get attributes(): $AttributeMap;
        get blocking(): boolean;
        get armorCoverPercentage(): number;
        set lastHurtByPlayer(value: $Player | null);
        get invertedHealAndHarm(): boolean;
        get lastHurtMobTimestamp(): number;
        get lastDamageSource(): $DamageSource;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get lastHurtByMobTimestamp(): number;
        get currentSwingDuration(): number;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get scale(): number;
        get deadOrDying(): boolean;
        get usingItem(): boolean;
        get offhandItem(): $ItemStack;
        get useItemRemainingTicks(): number;
        get affectedByPotions(): boolean;
        get sleeping(): boolean;
        get suppressingSlidingDownLadder(): boolean;
        get ageScale(): number;
        get lastAttacker(): $LivingEntity;
        get activeEffects(): $Collection<$MobEffectInstance>;
        get maxAbsorption(): number;
        set discardFriction(value: boolean);
        get fallFlying(): boolean;
        get deathSound(): $SoundEvent;
        get combatTracker(): $CombatTracker;
        get voicePitch(): number;
        get killCredit(): $LivingEntity;
        get lootTable(): $ResourceKey<$LootTable>;
        get fallSounds(): $LivingEntity$Fallsounds;
        get lootTableSeed(): number;
        get armorValue(): number;
        get allSlots(): $Iterable<$ItemStack>;
        get armorSlots(): $Iterable<$ItemStack>;
        get handSlots(): $Iterable<$ItemStack>;
        get jumpBoostPower(): number;
        get dismountPoses(): $ImmutableList<$Pose>;
        get bedOrientation(): $Direction;
        get autoSpinAttack(): boolean;
        get sensitiveToWater(): boolean;
        get ticksUsingItem(): number;
        get fallFlyingTicks(): number;
        get usedItemHand(): $InteractionHand;
        get baby(): boolean;
        get brain(): $Brain<never>;
        get hitbox(): $AABB;
        get hurtDir(): number;
        get mainArm(): $HumanoidArm;
        set totalMovementSpeedMultiplier(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        get totalMovementSpeed(): number;
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        set movementSpeedAddition(value: number);
        get undead(): boolean;
    }
    export class $SpawnGroupData {
    }
    export interface $SpawnGroupData {
    }
    export class $Display$TextDisplay$CachedInfo extends $Record {
        lines(): $List<$Display$TextDisplay$CachedLine>;
        width(): number;
        constructor(arg0: $List_<$Display$TextDisplay$CachedLine_>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedInfo}.
     */
    export type $Display$TextDisplay$CachedInfo_ = { lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number,  } | [lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number, ];
    export class $EntityAttachments$Builder {
        build(width: number, height: number): $EntityAttachments;
        attach(attachment: $EntityAttachment_, poas: $Vec3_): $EntityAttachments$Builder;
        attach(attachment: $EntityAttachment_, x: number, y: number, z: number): $EntityAttachments$Builder;
    }
    export class $EntityEvent {
        static STOP_ATTACKING: number;
        static REDUCED_DEBUG_INFO: number;
        static OFFER_FLOWER: number;
        static MAINHAND_BREAK: number;
        static DEATH: number;
        static DOLPHIN_LOOKING_FOR_TREASURE: number;
        static JUMP: number;
        static SHAKE_WETNESS: number;
        static SILVERFISH_MERGE_ANIM: number;
        static TRUSTING_SUCCEEDED: number;
        static HONEY_SLIDE: number;
        static HEAD_BREAK: number;
        static STOP_OFFER_FLOWER: number;
        static TRUSTING_FAILED: number;
        static EAT_GRASS: number;
        static TALISMAN_ACTIVATE: number;
        static TENDRILS_SHIVER: number;
        static SONIC_CHARGE: number;
        static OFFHAND_BREAK: number;
        static FEET_BREAK: number;
        static PERMISSION_LEVEL_GAMEMASTERS: number;
        static VILLAGER_ANGRY: number;
        static CANCEL_SHAKE_WETNESS: number;
        static LOVE_HEARTS: number;
        static ZOMBIE_CONVERTING: number;
        static PERMISSION_LEVEL_ALL: number;
        static POOF: number;
        static RAVAGER_STUNNED: number;
        static TELEPORT: number;
        static FISHING_ROD_REEL_IN: number;
        static ARMADILLO_PEEK: number;
        static SQUID_ANIM_SYNCH: number;
        static GUARDIAN_ATTACK_SOUND: number;
        static START_RAM: number;
        static VILLAGER_HAPPY: number;
        static SHIELD_DISABLED: number;
        static ARMORSTAND_WOBBLE: number;
        static IN_LOVE_HEARTS: number;
        static BODY_BREAK: number;
        static START_ATTACKING: number;
        static FIREWORKS_EXPLODE: number;
        static ATTACK_BLOCKED: number;
        static USE_ITEM_COMPLETE: number;
        static TAMING_FAILED: number;
        static SNIFFER_DIGGING_SOUND: number;
        static CHEST_BREAK: number;
        static END_RAM: number;
        static PERMISSION_LEVEL_ADMINS: number;
        static TAMING_SUCCEEDED: number;
        static FOX_EAT: number;
        static FULL_DEBUG_INFO: number;
        static PERMISSION_LEVEL_OWNERS: number;
        static LEGS_BREAK: number;
        static SWAP_HANDS: number;
        static PERMISSION_LEVEL_MODERATORS: number;
        static VILLAGER_SWEAT: number;
        static HONEY_JUMP: number;
        static WITCH_HAT_MAGIC: number;
        constructor();
    }
    export class $Entity extends $AttachmentHolder implements $SyncedDataHolder, $Nameable, $EntityAccess$1, $CommandSource, $ScoreHolder, $IEntityExtension, $AccessorEntity, $ExtensionHolder, $EntityAccessor$1, $EntityKJS, $EntityAccessor$2, $BlockCachingEntity, $EntityAccess, $EntityExtension, $EntityAccessor, $Cullable {
        getSlot(slot: number): $SlotAccess;
        getName(): $Component;
        remove(reason: $Entity$RemovalReason_): void;
        load(compound: $CompoundTag_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        position(): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAlive(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getId(): number;
        /**
         * Writes this entity to NBT, unless it has been removed or it is a passenger. Also writes this entity's passengers, and the entity type ID (so the produced NBT is sufficient to recreate the entity).
         * To always write the entity, use `#writeWithoutTypeId`.
         * 
         * @return True if the entity was written (and the passed compound should be saved)" false if the entity was not written.
         */
        save(compound: $CompoundTag_): boolean;
        getEntityType(): $EntityType<never>;
        is(passenger: $Entity): boolean;
        pick(hitDistance: number, arg1: number, partialTicks: boolean): $HitResult;
        /**
         * Transforms the entity's current yaw with the given Rotation and returns it. This does not have a side-effect.
         */
        rotate(transformRotation: $Rotation_): number;
        move(type: $MoverType_, pos: $Vec3_): void;
        getDimensions(pose: $Pose_): $EntityDimensions;
        push(addend: $Vec3_): void;
        push(passenger: $Entity): void;
        addMotion(x: number, arg1: number, y: number): void;
        getDisplayName(): $Component;
        getExtension(key: $Object, type: $Class<any>): $Object;
        /**
         * Gets called every tick from main Entity class
         */
        kill(): void;
        /**
         * Gets called every tick from main Entity class
         */
        setTimeout(): void;
        isSupportedBy(pos: $BlockPos_): boolean;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        setExtension(key: $Object, value: $Object): void;
        getPosition(partialTicks: number): $Vec3;
        getRandom(): $RandomSource;
        setInvisible(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterRainOrBubble(): boolean;
        getPassengerRidingPosition(entity: $Entity): $Vec3;
        calculateViewVector(xRot: number, yRot: number): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        checkSlowFallDistance(): void;
        getFluidJumpThreshold(): number;
        getControllingPassenger(): $LivingEntity;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCustomNameVisible(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        discard(): void;
        setId(ticks: number): void;
        getY(): number;
        getY(scale: number): number;
        setLevel(level: $Level_): void;
        /**
         * Gets called every tick from main Entity class
         */
        tick(): void;
        lookAt(anchor: $EntityAnchorArgument$Anchor_, target: $Vec3_): void;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        /**
         * Transforms the entity's current yaw with the given Mirror and returns it. This does not have a side-effect.
         */
        mirror(transformMirror: $Mirror_): number;
        getX(): number;
        getX(scale: number): number;
        getZ(scale: number): number;
        getZ(): number;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getHorizontalFacing(): $Direction;
        blockPosition(): $BlockPos;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSpectator(): boolean;
        registryAccess(): $RegistryAccess;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isGlowing(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isUnderWater(): boolean;
        onSyncedDataUpdated(key: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(dataValues: $List_<$SynchedEntityData$DataValue_<never>>): void;
        syncPacketPositionCodec(x: number, arg1: number, y: number): void;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getBoundingBoxForCulling(): $AABB;
        getRelativePortalPosition(axis: $Direction$Axis_, portal: $BlockUtil$FoundRectangle): $Vec3;
        setRemainingFireTicks(ticks: number): void;
        getMaxHeightFluidType(): $FluidType;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTicksRequiredToFreeze(): number;
        getPreciseBodyRotation(partialTick: number): number;
        createCommandSourceStack(): $CommandSourceStack;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getCommandSenderWorld(): $Level;
        getPersistentData(): $CompoundTag;
        setSharedFlagOnFire(downwards: boolean): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getDimensionChangingDelay(): number;
        setOnGroundWithMovement(onGround: boolean, movement: $Vec3_): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getRemainingFireTicks(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isIgnoringBlockTriggers(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeHitByProjectile(): boolean;
        getVehicleAttachmentPoint(entity: $Entity): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSuppressingBounce(): boolean;
        onInsideBubbleColumn(downwards: boolean): void;
        canChangeDimensions(oldLevel: $Level_, newLevel: $Level_): boolean;
        isPassengerOfSameVehicle(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSpawnSprintParticle(): boolean;
        setCustomNameVisible(downwards: boolean): void;
        adjustSpawnLocation(level: $ServerLevel, pos: $BlockPos_): $BlockPos;
        /**
         * Checks if the entity is in range to render.
         */
        shouldRenderAtSqrDistance(distance: number): boolean;
        getHandHoldingItemAngle(item: $Item_): $Vec3;
        getLightProbePosition(partialTicks: number): $Vec3;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getNearestViewDirection(): $Direction;
        skipAttackInteraction(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dismountsUnderwater(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSteppingCarefully(): boolean;
        hasIndirectPassenger(passenger: $Entity): boolean;
        getSelfAndPassengers(): $Stream<any>;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        shouldFusionRecomputeModel(flag: number): boolean;
        getPistonPushReaction(): $PushReaction;
        getRopeHoldPosition(partialTicks: number): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        displayFireAnimation(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        markFusionRecomputeModels(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasControllingPassenger(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        touchingUnloadedChunk(): boolean;
        getIndirectPassengers(): $Iterable<any>;
        /**
         * Get entity this is riding
         */
        getControlledVehicle(): $Entity;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        countPlayerPassengers(): number;
        getPassengersAndSelf(): $Stream<any>;
        setUUID(uniqueId: $UUID_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isRemoved(): boolean;
        getYaw(): number;
        setYaw(yaw: number): void;
        setPitch(yaw: number): void;
        getPitch(): number;
        interact(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockY(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockZ(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockX(): number;
        /**
         * Applies the given player interaction to this Entity.
         */
        interactAt(player: $Player, vec: $Vec3_, hand: $InteractionHand_): $InteractionResult;
        getUuid(): $UUID;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isControlledByLocalInstance(): boolean;
        getDismountLocationForPassenger(passenger: $LivingEntity): $Vec3;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        lithium$getCachedFeetBlockState(): $BlockState;
        updateDynamicGameEventListener(listenerConsumer: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        /**
         * Explosion resistance of a block relative to this entity
         */
        getBlockExplosionResistance(explosion: $Explosion, level: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, fluidState: $FluidState, explosionPower: number): number;
        /**
         * Gets called every tick from main Entity class
         */
        updateFluidHeightAndDoFluidPushing(): void;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(fluidTag: $TagKey_<$Fluid>, motionScale: number): boolean;
        fudgePositionAfterSizeChange(dimensions: $EntityDimensions_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasExactlyOnePlayerPassenger(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isShouldEntityAppearGlowing(): boolean;
        setShouldEntityAppearGlowing(downwards: boolean): void;
        getCustomName(): $Component;
        /**
         * @deprecated
         * Return whether this entity should be rendered as on fire.
         */
        isPushedByFluid(): boolean;
        setOnGround(downwards: boolean): void;
        /**
         * Measures the **square** of a distance of entity to another entity.
         * Returns the squared distance to the entity.
         */
        distanceToEntitySqr(entity: $Entity): number;
        /**
         * Measures the **square** of a distance of entity to the point at specified 3D position vector.
         */
        distanceToSqr(vec: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         * Gets the squared distance to the position.
         */
        distanceToSqr(x: number, arg1: number, y: number): number;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getEyePosition(): $Vec3;
        getEyePosition(partialTicks: number): $Vec3;
        getViewVector(partialTicks: number): $Vec3;
        getForgePersistentData(): $CompoundTag;
        /**
         * Gets called every tick from main Entity class
         */
        onAddedToLevel(): void;
        sendSystemMessage(component: $Component_): void;
        /**
         * Gets called every tick from main Entity class
         */
        onRemovedFromLevel(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAddedToLevel(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTicksFrozen(): number;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getBoundingBox(): $AABB;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInFluidType(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getDeltaMovement(): $Vec3;
        damageSources(): $DamageSources;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getAirSupply(): number;
        getPercentFrozen(): number;
        /**
         * Gets called every tick from main Entity class
         */
        extinguish(): void;
        getSoundSource(): $SoundSource;
        /**
         * Returns the string that identifies this Entity's class
         */
        getStringUuid(): string;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getMaxAirSupply(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInvisible(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInvulnerable(): boolean;
        /**
         * Returns whether this Entity is invulnerable to the given DamageSource.
         */
        isInvulnerableTo(source: $DamageSource_): boolean;
        awardKillScore(killed: $Entity, scoreValue: number, source: $DamageSource_): void;
        captureDrops(arg0: $Collection_<$ItemEntity> | null): $Collection<$ItemEntity>;
        captureDrops(): $Collection<$ItemEntity>;
        getYHeadRot(): number;
        killedEntity(level: $ServerLevel, entity: $LivingEntity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasCustomName(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getMaxFallDistance(): number;
        getWeaponItem(): $ItemStack;
        handleDamageEvent(damageSource: $DamageSource_): void;
        /**
         * Handles an entity event received from a `ClientboundEntityEventPacket`.
         */
        handleEntityEvent(id: number): void;
        getBbHeight(): number;
        setMotion(x: number, arg1: number, y: number): void;
        setDeltaMovement(addend: $Vec3_): void;
        animateHurt(yaw: number): void;
        causeFallDamage(fallDistance: number, multiplier: number, source: $DamageSource_): boolean;
        spawnAtLocation(stack: $ItemStack_): $ItemEntity;
        /**
         * Drops an item at the position of the entity.
         */
        spawnAtLocation(stack: $ItemStack_, offsetY: number): $ItemEntity;
        getInBlockState(): $BlockState;
        moveRelative(amount: number, relative: $Vec3_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLookAngle(): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        refreshDimensions(): void;
        setSprinting(downwards: boolean): void;
        /**
         * @deprecated
         */
        getFluidHeight(fluidTag: $TagKey_<$Fluid>): number;
        /**
         * Gets called every tick from main Entity class
         */
        resetFallDistance(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldShowName(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSprinting(): boolean;
        lerpTargetY(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isShiftKeyDown(): boolean;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(yaw: number): void;
        canUsePortal(allowPassengers: boolean): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVisuallySwimming(): boolean;
        lerpTargetXRot(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPassenger(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isEffectiveAi(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFullyFrozen(): boolean;
        lerpTargetX(): number;
        setTicksFrozen(ticks: number): void;
        lerpTargetZ(): number;
        getFluidTypeHeight(arg0: $FluidType_): number;
        setYHeadRot(yaw: number): void;
        getViewYRot(partialTick: number): number;
        lerpTargetYRot(): number;
        /**
         * Writes this entity, including passengers, to NBT, regardless as to whether it is removed or a passenger. Does **not** include the entity's type ID, so the NBT is insufficient to recreate the entity using `AnvilChunkLoader#readWorldEntity`. Use `#writeUnlessPassenger` for that purpose.
         */
        saveWithoutId(compound: $CompoundTag_): $CompoundTag;
        getEyeInFluidType(): $FluidType;
        igniteForTicks(ticks: number): void;
        recreateFromPacket(packet: $ClientboundAddEntityPacket): void;
        addDeltaMovement(addend: $Vec3_): void;
        /**
         * Returns the string that identifies this Entity's class
         */
        getEncodeId(): string;
        getPickResult(): $ItemStack;
        startRiding(vehicle: $Entity, force: boolean): boolean;
        startRiding(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        fireImmune(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSilent(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWater(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        clearFire(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInLiquid(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        baseTick(): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, entity: $Entity | null): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWall(): boolean;
        setPos(addend: $Vec3_): void;
        setPos(x: number, arg1: number, y: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDiscrete(): boolean;
        getRandomY(): number;
        getRandomX(scale: number): number;
        getRandomZ(scale: number): number;
        setPose(pose: $Pose_): void;
        playSound(sound: $SoundEvent_, volume: number, pitch: number): void;
        playSound(sound: $SoundEvent_): void;
        /**
         * Get the Minecraft server instance
         */
        getServer(): $MinecraftServer;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        onGround(): boolean;
        getBbWidth(): number;
        /**
         * Get entity this is riding
         */
        getVehicle(): $Entity;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInLava(): boolean;
        getGravity(): number;
        dismountTo(x: number, arg1: number, y: number): void;
        /**
         * Checks if the offset position from the entity's current position has a collision with a block or a liquid.
         */
        isFree(x: number, arg1: number, y: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPushable(): boolean;
        lerpHeadTo(yaw: number, pitch: number): void;
        lerpTo(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        stopRiding(): void;
        /**
         * Measures the distance of entity to another entity.
         * Returns the distance to the entity.
         */
        distanceToEntity(entity: $Entity): number;
        /**
         * Gets called every tick from main Entity class
         */
        rideTick(): void;
        getEyeY(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPickable(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canFreeze(): boolean;
        absMoveTo(x: number, arg1: number, y: number): void;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        absMoveTo(x: number, arg1: number, y: number, arg3: number, z: number): void;
        maxUpStep(): number;
        getPose(): $Pose;
        hasPose(pose: $Pose_): boolean;
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        /**
         * Returns whether this Entity is on the given scoreboard team.
         */
        isAlliedTo(team: $Team): boolean;
        isOnSameTeam(passenger: $Entity): boolean;
        getTeam(): $PlayerTeam;
        moveToBlockPos(pos: $BlockPos_, yRot: number, xRot: number): void;
        moveTo(x: number, arg1: number, y: number): void;
        moveTo(addend: $Vec3_): void;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        setPositionAndRotation(x: number, arg1: number, y: number, arg3: number, z: number): void;
        moveTo(pos: $Vec3_, yRot: number, xRot: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        revive(): void;
        chunkPosition(): $ChunkPos;
        isColliding(pos: $BlockPos_, state: $BlockState_): boolean;
        getEntityData(): $SynchedEntityData;
        /**
         * Gets called every tick from main Entity class
         */
        onClientRemoval(): void;
        onPassengerTurned(passenger: $Entity): void;
        setPortalCooldown(ticks: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        setPortalCooldown(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTeamColor(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCrouching(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        checkBelowWorld(): void;
        setBoundingBox(bb: $AABB_): void;
        igniteForSeconds(yaw: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        ejectPassengers(): void;
        getPositionCodec(): $VecDeltaCodec;
        /**
         * Gets called every tick from main Entity class
         */
        updateSwimming(): void;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnPortalCooldown(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getPortalCooldown(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasGlowingTag(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isNoGravity(): boolean;
        setAirSupply(ticks: number): void;
        getEyeHeight(pose: $Pose_): number;
        getEyeHeight(): number;
        setNoGravity(downwards: boolean): void;
        /**
         * @deprecated
         */
        isEyeInFluid(fluidTag: $TagKey_<$Fluid>): boolean;
        /**
         * Writes this entity to NBT, unless it has been removed or it is a passenger. Also writes this entity's passengers, and the entity type ID (so the produced NBT is sufficient to recreate the entity).
         * To always write the entity, use `#writeWithoutTypeId`.
         * 
         * @return True if the entity was written (and the passed compound should be saved)" false if the entity was not written.
         */
        saveAsPassenger(compound: $CompoundTag_): boolean;
        setCustomName(component: $Component_ | null): void;
        setGlowing(downwards: boolean): void;
        absRotateTo(yRot: number, xRot: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dampensVibrations(): boolean;
        getUpVector(partialTicks: number): $Vec3;
        /**
         * Checks if the offset position from the entity's current position has a collision with a block or a liquid.
         */
        shouldRender(x: number, arg1: number, y: number): boolean;
        /**
         * Called by a player entity when they collide with an entity
         */
        playerTouch(player: $Player): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterOrBubble(): boolean;
        setSwimming(downwards: boolean): void;
        canCollideWith(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeCollidedWith(): boolean;
        positionRider(passenger: $Entity): void;
        hasPassenger(passenger: $Entity): boolean;
        hasPassenger(predicate: $Predicate_<$Entity>): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterOrRain(): boolean;
        getAttachments(): $EntityAttachments;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        showVehicleHealth(): boolean;
        getBlockStateOn(): $BlockState;
        getViewXRot(partialTick: number): number;
        /**
         * Gets called every tick from main Entity class
         */
        setOldPosAndRot(): void;
        /**
         * Returns the string that identifies this Entity's class
         */
        getScoreboardName(): string;
        static setViewScale(renderDistWeight: number): void;
        /**
         * Returns the Entity's pitch and yaw as a `Vec2`.
         */
        getRotationVector(): $Vec2;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAttackable(): boolean;
        restoreFrom(passenger: $Entity): void;
        placePortalTicket(pos: $BlockPos_): void;
        shouldBlockExplode(explosion: $Explosion, level: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, explosionPower: number): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        removeVehicle(): void;
        static getViewScale(): number;
        getLeashOffset(partialTicks: number): $Vec3;
        changeDimension(transition: $DimensionTransition_): $Entity;
        copyPosition(passenger: $Entity): void;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        isInvisibleTo(player: $Player): boolean;
        onAboveBubbleCol(downwards: boolean): void;
        teleportRelative(x: number, arg1: number, y: number): void;
        ignoreExplosion(explosion: $Explosion): boolean;
        /**
         * Add the given player to the list of players tracking this entity. For instance, a player may track a boss in order to view its associated boss bar.
         */
        startSeenByPlayer(serverPlayer: $ServerPlayer): void;
        /**
         * Add the given player to the list of players tracking this entity. For instance, a player may track a boss in order to view its associated boss bar.
         */
        stopSeenByPlayer(serverPlayer: $ServerPlayer): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVisuallyCrawling(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDescending(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canControlVehicle(): boolean;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getMotionDirection(): $Direction;
        broadcastToPlayer(player: $ServerPlayer): boolean;
        getPickRadius(): number;
        setShiftKeyDown(downwards: boolean): void;
        setInvulnerable(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        onlyOpCanSetNbt(): boolean;
        /**
         * Get entity this is riding
         */
        getFirstPassenger(): $Entity;
        setAsInsidePortal(portal: $Portal_, pos: $BlockPos_): void;
        makeStuckInBlock(state: $BlockState_, motionMultiplier: $Vec3_): void;
        getRemovalReason(): $Entity$RemovalReason;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        hasPermissions(flag: number): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        checkDespawn(): void;
        setOutOfCamera(downwards: boolean): void;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getEc$BoundingBox(): $AABB;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldInformAdmins(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOutOfCamera(): boolean;
        setEc$BoundingBox(bb: $AABB_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getEc$Position(): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isForcedVisible(): boolean;
        static collideBoundingBox(entity: $Entity, vec: $Vec3_, collisionBox: $AABB_, level: $Level_, potentialHits: $List_<any>): $Vec3;
        setEc$Position(addend: $Vec3_): void;
        setEc$PBlockPos(pos: $BlockPos_): void;
        getFusionModel(layerIndex: number): $Triple<any, any, any>;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        getAddEntityPacket(entity: $ServerEntity): $Packet<$ClientGamePacketListener>;
        getEc$PBlockPos(): $BlockPos;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        acceptsSuccess(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldBeSaved(): boolean;
        onExplosionHit(passenger: $Entity | null): void;
        mayInteract(level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getKnownMovement(): $Vec3;
        setFusionModel(layerIndex: number, model: $Triple_<any, any, any>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        acceptsFailure(): boolean;
        setIsInPowderSnow(downwards: boolean): void;
        /**
         * Get entity this is riding
         */
        getRootVehicle(): $Entity;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        trackingPosition(): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAlwaysTicking(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        unRide(): void;
        getTags(): $Set<string>;
        /**
         * Gets called every tick from main Entity class
         */
        lavaHurt(): void;
        addTag(tag: string): boolean;
        closerThan(entity: $Entity, horizontalDistance: number, arg2: number): boolean;
        closerThan(entity: $Entity, distance: number): boolean;
        turn(yRot: number, arg1: number): void;
        setPosRaw(x: number, arg1: number, y: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVehicle(): boolean;
        setRemoved(reason: $Entity$RemovalReason_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnFire(): boolean;
        getOnPos(): $BlockPos;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnRails(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSwimming(): boolean;
        setSilent(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInRain(): boolean;
        lerpMotion(x: number, arg1: number, y: number): void;
        thunderHit(level: $ServerLevel, lightning: $LightningBolt): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getForward(): $Vec3;
        deflection(projectile: $Projectile): $ProjectileDeflection;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFreezing(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSprint(): boolean;
        setCulled(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCulled(): boolean;
        removeTag(tag: string): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        getPickedResult(arg0: $HitResult): $ItemStack;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        getFluidMotionScale(arg0: $FluidType_): number;
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        isPushedByFluid(arg0: $FluidType_): boolean;
        /**
         * @deprecated
         */
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canStartSwimming(): boolean;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isMultipartEntity(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canRiderInteract(): boolean;
        isEyeInFluidType(arg0: $FluidType_): boolean;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldRiderSit(): boolean;
        getClassification(arg0: boolean): $MobCategory;
        isInFluidType(arg0: $FluidState): boolean;
        isInFluidType(arg0: $FluidType_): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        getParts(): $PartEntity<never>[];
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        setPositionAndRotation(x: number, y: number, y: number, yaw: number, z: number): void;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is a water creature.
         * Return whether this entity should be rendered as on fire.
         */
        isWaterCreature(): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         * Return whether this entity should be rendered as on fire.
         */
        isPeacefulCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is an ambient creature.
         * Return whether this entity should be rendered as on fire.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks, whether the entity is part of any team.
         * Return whether this entity should be rendered as on fire.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(tag: string): boolean;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(component: $Component_): void;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Returns the string that identifies this Entity's class
         */
        getType(): string;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         * Returns the string that identifies this Entity's class
         */
        getTeamName(): string;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, y: number): void;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(vec: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         * Gets the squared distance to the position.
         */
        distanceTo(x: number, y: number, y: number): number;
        /**
         * Get the Minecraft server instance
         */
        getServer(): $MinecraftServer;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, y: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        teleportTo(x: number, y: number, y: number, yaw: number, z: number): void;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        getScriptType(): $ScriptType;
        /**
         * Checks if the entity is a `LivingEntity`.
         * Return whether this entity should be rendered as on fire.
         */
        isLiving(): this is $LivingEntity;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getLevel(): $Level;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         * Returns the string that identifies this Entity's class
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         * Return whether this entity should be rendered as on fire.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a server-side player.
         * Return whether this entity should be rendered as on fire.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks if the entity is a client-side player.
         * Return whether this entity should be rendered as on fire.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is an item frame entity.
         * Return whether this entity should be rendered as on fire.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is a monster.
         * Return whether this entity should be rendered as on fire.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an animal.
         * Return whether this entity should be rendered as on fire.
         */
        isAnimal(): boolean;
        setNbt(compound: $CompoundTag_): void;
        setZ(renderDistWeight: number): void;
        setY(renderDistWeight: number): void;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        getNbt(): $CompoundTag;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         * Called when the entity is attacked.
         */
        attack(source: $DamageSource_, amount: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        spawn(): void;
        setX(renderDistWeight: number): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         * Return whether this entity should be rendered as on fire.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Checks if the entity is an item entity.
         * Return whether this entity should be rendered as on fire.
         */
        isItem(): this is $ItemEntity;
        setRotation(yRot: number, xRot: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         * Gets the squared distance to the position.
         */
        getDistance(x: number, y: number, y: number): number;
        setMotionX(renderDistWeight: number): void;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         * Gets the horizontal facing direction of this Entity.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         * Returns the string that identifies this Entity's class
         */
        getTeamId(): string;
        setMotionY(renderDistWeight: number): void;
        setMotionZ(renderDistWeight: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         * Gets the squared distance to the position.
         */
        getDistanceSq(x: number, y: number, y: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        getMotionY(): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        getMotionZ(): number;
        getMotionX(): number;
        lithium$SetClimbingMobCachingSectionUpdateBehavior(downwards: boolean): void;
        lithium$OnBlockCacheSet(state: $BlockState_): void;
        /**
         * Gets called every tick from main Entity class
         */
        lithium$OnBlockCacheDeleted(): void;
        setStatusMessage(component: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBoardingCooldown(): number;
        setBoardingCooldown(ticks: number): void;
        catnip$callSetLevel(level: $Level_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        transition$getRawPosition(): $Vec3;
        transition$setRawPosition(addend: $Vec3_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        getFirstTick(): boolean;
        getChangeListener(): $EntityInLevelCallback;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get alive(): boolean;
        get entityType(): $EntityType<never>;
        get random(): $RandomSource;
        get inWaterRainOrBubble(): boolean;
        get fluidJumpThreshold(): number;
        get controllingPassenger(): $LivingEntity;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get horizontalFacing(): $Direction;
        get spectator(): boolean;
        get underWater(): boolean;
        get boundingBoxForCulling(): $AABB;
        get maxHeightFluidType(): $FluidType;
        get ticksRequiredToFreeze(): number;
        get commandSenderWorld(): $Level;
        get persistentData(): $CompoundTag;
        set sharedFlagOnFire(value: boolean);
        get dimensionChangingDelay(): number;
        get ignoringBlockTriggers(): boolean;
        get suppressingBounce(): boolean;
        get nearestViewDirection(): $Direction;
        get steppingCarefully(): boolean;
        get selfAndPassengers(): $Stream<any>;
        get pistonPushReaction(): $PushReaction;
        get indirectPassengers(): $Iterable<any>;
        get controlledVehicle(): $Entity;
        get passengersAndSelf(): $Stream<any>;
        set UUID(value: $UUID_);
        get blockY(): number;
        get blockZ(): number;
        get blockX(): number;
        get uuid(): $UUID;
        get controlledByLocalInstance(): boolean;
        get lightLevelDependentMagicValue(): number;
        get forgePersistentData(): $CompoundTag;
        get addedToLevel(): boolean;
        get percentFrozen(): number;
        get soundSource(): $SoundSource;
        get stringUuid(): string;
        get maxAirSupply(): number;
        get maxFallDistance(): number;
        get weaponItem(): $ItemStack;
        get bbHeight(): number;
        get inBlockState(): $BlockState;
        get lookAngle(): $Vec3;
        get visuallySwimming(): boolean;
        get passenger(): boolean;
        get effectiveAi(): boolean;
        get fullyFrozen(): boolean;
        get encodeId(): string;
        get pickResult(): $ItemStack;
        get inWater(): boolean;
        get inLiquid(): boolean;
        get inWall(): boolean;
        get discrete(): boolean;
        get randomY(): number;
        get bbWidth(): number;
        get inLava(): boolean;
        get gravity(): number;
        get pushable(): boolean;
        get eyeY(): number;
        get pickable(): boolean;
        get team(): $PlayerTeam;
        get entityData(): $SynchedEntityData;
        get teamColor(): number;
        get crouching(): boolean;
        get positionCodec(): $VecDeltaCodec;
        get onPosLegacy(): $BlockPos;
        get onPortalCooldown(): boolean;
        get inWaterOrBubble(): boolean;
        get inWaterOrRain(): boolean;
        get attachments(): $EntityAttachments;
        get blockStateOn(): $BlockState;
        get scoreboardName(): string;
        get rotationVector(): $Vec2;
        get attackable(): boolean;
        get visuallyCrawling(): boolean;
        get descending(): boolean;
        get motionDirection(): $Direction;
        get pickRadius(): number;
        get firstPassenger(): $Entity;
        get forcedVisible(): boolean;
        set levelCallback(value: $EntityInLevelCallback);
        get knownMovement(): $Vec3;
        get rootVehicle(): $Entity;
        get alwaysTicking(): boolean;
        get tags(): $Set<string>;
        get onFire(): boolean;
        get onPos(): $BlockPos;
        get onRails(): boolean;
        get inRain(): boolean;
        get forward(): $Vec3;
        get freezing(): boolean;
        get feedbackDisplayName(): $Component;
        get multipartEntity(): boolean;
        get parts(): $PartEntity<never>[];
        get waterCreature(): boolean;
        get peacefulCreature(): boolean;
        get ambientCreature(): boolean;
        get type(): string;
        get teamName(): string;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        get living(): boolean;
        get profile(): $GameProfile;
        get username(): string;
        get player(): boolean;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get frame(): boolean;
        get monster(): boolean;
        get animal(): boolean;
        get self(): boolean;
        get facing(): $Direction;
        get teamId(): string;
        get passengers(): $EntityArrayList;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get firstTick(): boolean;
        get changeListener(): $EntityInLevelCallback;
    }
    export class $Display$ColorInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$ColorInterpolator}.
     */
    export type $Display$ColorInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $SpawnPlacements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$Data}.
     */
    export type $SpawnPlacements$Data_ = { predicate?: $SpawnPlacements$SpawnPredicate_<never>, heightMap?: $Heightmap$Types_, placement?: $SpawnPlacementType_,  } | [predicate?: $SpawnPlacements$SpawnPredicate_<never>, heightMap?: $Heightmap$Types_, placement?: $SpawnPlacementType_, ];
    export class $Display$TextDisplay$LineSplitter {
    }
    export interface $Display$TextDisplay$LineSplitter {
        split(text: $Component_, maxWidth: number): $Display$TextDisplay$CachedInfo;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$LineSplitter}.
     */
    export type $Display$TextDisplay$LineSplitter_ = ((arg0: $Component, arg1: number) => $Display$TextDisplay$CachedInfo_);
    export class $EntityType<T extends $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $InjectedEntityTypeExtension, $EntityTypeKJS, $IRenderableEntity, $EntityTypeExtension<any> {
        static getKey(entityType: $EntityType_<never>): $ResourceLocation;
        toShortString(): string;
        is(entityType: $HolderSet_<$EntityType<never>>): boolean;
        /**
         * Checks if this entity type is contained in the tag
         */
        is(tag: $TagKey_<$EntityType<never>>): boolean;
        static create(tag: $CompoundTag_, level: $Level_): ($Entity) | undefined;
        create(level: $ServerLevel, consumer: $Consumer_<T> | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        create(level: $Level_): T;
        getDimensions(): $EntityDimensions;
        getDescription(): $Component;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        getCategory(): $MobCategory;
        getWidth(): number;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        canSpawnFarFromPlayer(): boolean;
        clientTrackingRange(): number;
        chloride$whitelisted(): boolean;
        static updateCustomEntityTag(level: $Level_, player: $Player | null, entity: $Entity | null, customData: $CustomData): void;
        static loadEntitiesRecursive(tags: $List_<$Tag_>, level: $Level_): $Stream<$Entity>;
        static loadEntityRecursive(compound: $CompoundTag_, level: $Level_, entityFunction: $Function_<$Entity, $Entity>): $Entity;
        static appendDefaultStackConfig<T extends $Entity>(consumer: $Consumer_<T>, level: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        static createDefaultStackConfig<T extends $Entity>(serverLevel: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        embPlus$resourceLocation(): $ResourceLocation;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        static appendCustomNameConfig<T extends $Entity>(consumer: $Consumer_<T>, stack: $ItemStack_): $Consumer<T>;
        requiredFeatures(): $FeatureFlagSet;
        static by(compound: $CompoundTag_): ($EntityType<never>) | undefined;
        getDescriptionId(): string;
        tryCast(entity: $Entity): T;
        kjs$getKey(): $ResourceKey<any>;
        kjs$asHolder(): $Holder<any>;
        getSpawnAABB(x: number, arg1: number, y: number): $AABB;
        isBlockDangerous(state: $BlockState_): boolean;
        getBaseClass(): $Class<$Entity>;
        trackDeltas(): boolean;
        updateInterval(): number;
        spawn(serverLevel: $ServerLevel, stack: $ItemStack_ | null, player: $Player | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        spawn(level: $ServerLevel, consumer: $Consumer_<T> | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        spawn(level: $ServerLevel, pos: $BlockPos_, spawnType: $MobSpawnType_): T;
        fireImmune(): boolean;
        kjs$getId(): string;
        getHeight(): number;
        static appendCustomEntityStackConfig<T extends $Entity>(consumer: $Consumer_<T>, level: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        canSerialize(): boolean;
        canSummon(): boolean;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        /**
         * Tries to get the entity type associated by the key.
         */
        static byString(key: string): ($EntityType<never>) | undefined;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        arch$holder(): $Holder<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        static MOOSHROOM: $EntityType<$MushroomCow>;
        static MAGMA_CUBE: $EntityType<$MagmaCube>;
        static SILVERFISH: $EntityType<$Silverfish>;
        static MULE: $EntityType<$Mule>;
        static HOGLIN: $EntityType<$Hoglin>;
        static LEASH_KNOT: $EntityType<$LeashFenceKnotEntity>;
        static HUSK: $EntityType<$Husk>;
        static VINDICATOR: $EntityType<$Vindicator>;
        static WARDEN: $EntityType<$Warden>;
        static OMINOUS_ITEM_SPAWNER: $EntityType<$OminousItemSpawner>;
        static HOPPER_MINECART: $EntityType<$MinecartHopper>;
        static PILLAGER: $EntityType<$Pillager>;
        static SHULKER_BULLET: $EntityType<$ShulkerBullet>;
        static VILLAGER: $EntityType<$Villager>;
        static AREA_EFFECT_CLOUD: $EntityType<$AreaEffectCloud>;
        static PAINTING: $EntityType<$Painting>;
        static TURTLE: $EntityType<$Turtle>;
        static TRADER_LLAMA: $EntityType<$TraderLlama>;
        static SMALL_FIREBALL: $EntityType<$SmallFireball>;
        static TNT: $EntityType<$PrimedTnt>;
        static CAVE_SPIDER: $EntityType<$CaveSpider>;
        static SLIME: $EntityType<$Slime>;
        static DROWNED: $EntityType<$Drowned>;
        static FIREBALL: $EntityType<$LargeFireball>;
        static EVOKER: $EntityType<$Evoker>;
        static MARKER: $EntityType<$Marker>;
        static ENDERMITE: $EntityType<$Endermite>;
        static EXPERIENCE_BOTTLE: $EntityType<$ThrownExperienceBottle>;
        static AXOLOTL: $EntityType<$Axolotl>;
        static COMMAND_BLOCK_MINECART: $EntityType<$MinecartCommandBlock>;
        static PLAYER: $EntityType<$Player>;
        static ITEM: $EntityType<$ItemEntity>;
        static TEXT_DISPLAY: $EntityType<$Display$TextDisplay>;
        static SALMON: $EntityType<$Salmon>;
        static ZOMBIE: $EntityType<$Zombie>;
        static GOAT: $EntityType<$Goat>;
        static STRIDER: $EntityType<$Strider>;
        static PANDA: $EntityType<$Panda>;
        static OCELOT: $EntityType<$Ocelot>;
        static ENDERMAN: $EntityType<$EnderMan>;
        static CHEST_MINECART: $EntityType<$MinecartChest>;
        static ZOMBIE_VILLAGER: $EntityType<$ZombieVillager>;
        static LLAMA: $EntityType<$Llama>;
        static ENDER_DRAGON: $EntityType<$EnderDragon>;
        static WITCH: $EntityType<$Witch>;
        static EXPERIENCE_ORB: $EntityType<$ExperienceOrb>;
        static ARMADILLO: $EntityType<$Armadillo>;
        static ITEM_FRAME: $EntityType<$ItemFrame>;
        static WITHER: $EntityType<$WitherBoss>;
        static ARROW: $EntityType<$Arrow>;
        static CREEPER: $EntityType<$Creeper>;
        static BOGGED: $EntityType<$Bogged>;
        static ILLUSIONER: $EntityType<$Illusioner>;
        static BREEZE: $EntityType<$Breeze>;
        static CAMEL: $EntityType<$Camel>;
        static COD: $EntityType<$Cod>;
        static ZOMBIE_HORSE: $EntityType<$ZombieHorse>;
        static FURNACE_MINECART: $EntityType<$MinecartFurnace>;
        static RAVAGER: $EntityType<$Ravager>;
        static BOAT: $EntityType<$Boat>;
        static SHULKER: $EntityType<$Shulker>;
        static SNIFFER: $EntityType<$Sniffer>;
        static BEE: $EntityType<$Bee>;
        static ITEM_DISPLAY: $EntityType<$Display$ItemDisplay>;
        static PHANTOM: $EntityType<$Phantom>;
        static BLAZE: $EntityType<$Blaze>;
        static SKELETON_HORSE: $EntityType<$SkeletonHorse>;
        static COW: $EntityType<$Cow>;
        static WANDERING_TRADER: $EntityType<$WanderingTrader>;
        static END_CRYSTAL: $EntityType<$EndCrystal>;
        static PIG: $EntityType<$Pig>;
        static ZOGLIN: $EntityType<$Zoglin>;
        static BREEZE_WIND_CHARGE: $EntityType<$BreezeWindCharge>;
        static WOLF: $EntityType<$Wolf>;
        static IRON_GOLEM: $EntityType<$IronGolem>;
        static FROG: $EntityType<$Frog>;
        static SHEEP: $EntityType<$Sheep>;
        static VEX: $EntityType<$Vex>;
        static ENDER_PEARL: $EntityType<$ThrownEnderpearl>;
        static BLOCK_DISPLAY: $EntityType<$Display$BlockDisplay>;
        static TRIDENT: $EntityType<$ThrownTrident>;
        static PIGLIN_BRUTE: $EntityType<$PiglinBrute>;
        static POLAR_BEAR: $EntityType<$PolarBear>;
        static MINECART: $EntityType<$Minecart>;
        static LIGHTNING_BOLT: $EntityType<$LightningBolt>;
        static POTION: $EntityType<$ThrownPotion>;
        static FISHING_BOBBER: $EntityType<$FishingHook>;
        static CHEST_BOAT: $EntityType<$ChestBoat>;
        static SQUID: $EntityType<$Squid>;
        static DRAGON_FIREBALL: $EntityType<$DragonFireball>;
        static ELDER_GUARDIAN: $EntityType<$ElderGuardian>;
        static HORSE: $EntityType<$Horse>;
        static TNT_MINECART: $EntityType<$MinecartTNT>;
        static ARMOR_STAND: $EntityType<$ArmorStand>;
        static PARROT: $EntityType<$Parrot>;
        static EVOKER_FANGS: $EntityType<$EvokerFangs>;
        static FOX: $EntityType<$Fox>;
        static GIANT: $EntityType<$Giant>;
        static STRAY: $EntityType<$Stray>;
        static SPECTRAL_ARROW: $EntityType<$SpectralArrow>;
        static CAT: $EntityType<$Cat>;
        static RABBIT: $EntityType<$Rabbit>;
        static DONKEY: $EntityType<$Donkey>;
        static EYE_OF_ENDER: $EntityType<$EyeOfEnder>;
        static SPAWNER_MINECART: $EntityType<$MinecartSpawner>;
        static GLOW_ITEM_FRAME: $EntityType<$GlowItemFrame>;
        static INTERACTION: $EntityType<$Interaction>;
        static TROPICAL_FISH: $EntityType<$TropicalFish>;
        static ALLAY: $EntityType<$Allay>;
        static SPIDER: $EntityType<$Spider>;
        static SKELETON: $EntityType<$Skeleton>;
        static WITHER_SKELETON: $EntityType<$WitherSkeleton>;
        static CHICKEN: $EntityType<$Chicken>;
        static ZOMBIFIED_PIGLIN: $EntityType<$ZombifiedPiglin>;
        static SNOWBALL: $EntityType<$Snowball>;
        static GLOW_SQUID: $EntityType<$GlowSquid>;
        static SNOW_GOLEM: $EntityType<$SnowGolem>;
        static WITHER_SKULL: $EntityType<$WitherSkull>;
        static PUFFERFISH: $EntityType<$Pufferfish>;
        static GUARDIAN: $EntityType<$Guardian>;
        static EGG: $EntityType<$ThrownEgg>;
        static LLAMA_SPIT: $EntityType<$LlamaSpit>;
        static WIND_CHARGE: $EntityType<$WindCharge>;
        static FALLING_BLOCK: $EntityType<$FallingBlockEntity>;
        static PIGLIN: $EntityType<$Piglin>;
        static GHAST: $EntityType<$Ghast>;
        static BAT: $EntityType<$Bat>;
        static DOLPHIN: $EntityType<$Dolphin>;
        static TADPOLE: $EntityType<$Tadpole>;
        static FIREWORK_ROCKET: $EntityType<$FireworkRocketEntity>;
        constructor(factory: $EntityType$EntityFactory_<T>, category: $MobCategory_, serialize: boolean, summon: boolean, fireImmune: boolean, canSpawnFarFromPlayer: boolean, immuneTo: $ImmutableSet<$Block_>, dimensions: $EntityDimensions_, spawnDimensionsScale: number, clientTrackingRange: number, updateInterval: number, requiredFeatures: $FeatureFlagSet);
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet, arg12: $Predicate_<$EntityType<never>>, arg13: $ToIntFunction_<$EntityType<never>>, arg14: $ToIntFunction_<$EntityType<never>>);
        get dimensions(): $EntityDimensions;
        get description(): $Component;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get category(): $MobCategory;
        get width(): number;
        get descriptionId(): string;
        get baseClass(): $Class<$Entity>;
        get height(): number;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $EntityType}.
     */
    export type $EntityType_<T> = RegistryTypes.EntityType;
    export class $LerpingModel {
    }
    export interface $LerpingModel {
        getModelRotationValues(): $Map<string, $Vector3f>;
        get modelRotationValues(): $Map<string, $Vector3f>;
    }
    /**
     * Values that may be interpreted as {@link $LerpingModel}.
     */
    export type $LerpingModel_ = (() => $Map_<string, $Vector3f>);
    export class $Display$TransformationInterpolator extends $Record implements $Display$GenericInterpolator<$Transformation> {
    }
    /**
     * Values that may be interpreted as {@link $Display$TransformationInterpolator}.
     */
    export type $Display$TransformationInterpolator_ = { previous?: $Transformation, current?: $Transformation,  } | [previous?: $Transformation, current?: $Transformation, ];
    export class $SpawnPlacements {
        static getPlacementType(entityType: $EntityType_<never>): $SpawnPlacementType;
        static getHeightmapType(entityType: $EntityType_<never> | null): $Heightmap$Types;
        static fireSpawnPlacementEvent(): void;
        static checkSpawnRules<T extends $Entity>(entityType: $EntityType_<T>, serverLevel: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        static isSpawnPositionOk(entityType: $EntityType_<never>, level: $LevelReader, pos: $BlockPos_): boolean;
        static hasPlacement(arg0: $EntityType_<never>): boolean;
        constructor();
    }
    export class $Display$FloatInterpolator {
        static constant(value: number): $Display$FloatInterpolator;
    }
    export interface $Display$FloatInterpolator {
        get(partialTick: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$FloatInterpolator}.
     */
    export type $Display$FloatInterpolator_ = ((arg0: number) => number);
    export class $Display$IntInterpolator {
        static constant(value: number): $Display$IntInterpolator;
    }
    export interface $Display$IntInterpolator {
        get(partialTick: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$IntInterpolator}.
     */
    export type $Display$IntInterpolator_ = ((arg0: number) => number);
    export class $Leashable {
        static tickLeash<E extends $Entity>(entity: E): void;
        static LEASH_TAG: string;
        static LEASH_ELASTIC_DIST: number;
        static LEASH_TOO_FAR_DIST: number;
    }
    export interface $Leashable {
        isLeashed(): boolean;
        canHaveALeashAttachedToIt(): boolean;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        getLeashHolder(): $Entity;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        canBeLeashed(): boolean;
        getLeashData(): $Leashable$LeashData;
        mayBeLeashed(): boolean;
        dropLeash(broadcastPacket: boolean, dropItem: boolean): void;
        setDelayedLeashHolderId(delayedLeashHolderId: number): void;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        closeRangeLeashBehaviour(entity: $Entity): void;
        leashTooFarBehaviour(): void;
        get leashed(): boolean;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
    }
    export class $EntityAttachment$Fallback {
        static ZERO: $List<$Vec3>;
        static AT_CENTER: $EntityAttachment$Fallback;
        static AT_FEET: $EntityAttachment$Fallback;
        static AT_HEIGHT: $EntityAttachment$Fallback;
    }
    export interface $EntityAttachment$Fallback {
        create(width: number, height: number): $List<$Vec3>;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment$Fallback}.
     */
    export type $EntityAttachment$Fallback_ = ((arg0: number, arg1: number) => $List_<$Vec3_>);
    export class $Display$BillboardConstraints extends $Enum<$Display$BillboardConstraints> implements $StringRepresentable {
        static values(): $Display$BillboardConstraints[];
        static valueOf(arg0: string): $Display$BillboardConstraints;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$BillboardConstraints;
        static CODEC: $Codec<$Display$BillboardConstraints>;
        static VERTICAL: $Display$BillboardConstraints;
        static FIXED: $Display$BillboardConstraints;
        static BY_ID: $IntFunction<$Display$BillboardConstraints>;
        static HORIZONTAL: $Display$BillboardConstraints;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$BillboardConstraints}.
     */
    export type $Display$BillboardConstraints_ = "fixed" | "vertical" | "horizontal" | "center";
    export class $Attackable {
    }
    export interface $Attackable {
        getLastAttacker(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Attackable}.
     */
    export type $Attackable_ = (() => $LivingEntity);
    export class $Display$GenericInterpolator<T> {
        static constant<T>(value: T): $Display$GenericInterpolator<T>;
    }
    export interface $Display$GenericInterpolator<T> {
        get(partialTick: number): T;
    }
    /**
     * Values that may be interpreted as {@link $Display$GenericInterpolator}.
     */
    export type $Display$GenericInterpolator_<T> = ((arg0: number) => T);
    export class $HasCustomInventoryScreen {
    }
    export interface $HasCustomInventoryScreen {
        openCustomInventoryScreen(player: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $HasCustomInventoryScreen}.
     */
    export type $HasCustomInventoryScreen_ = ((arg0: $Player) => void);
    export class $PowerableMob {
    }
    export interface $PowerableMob {
        isPowered(): boolean;
        get powered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PowerableMob}.
     */
    export type $PowerableMob_ = (() => boolean);
    export class $SpawnPlacementType {
    }
    export interface $SpawnPlacementType {
        isSpawnPositionOk(level: $LevelReader, pos: $BlockPos_, entityType: $EntityType_<never> | null): boolean;
        adjustSpawnPosition(level: $LevelReader, pos: $BlockPos_): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacementType}.
     */
    export type $SpawnPlacementType_ = ((arg0: $LevelReader, arg1: $BlockPos, arg2: $EntityType<never>) => boolean);
    export class $Interaction extends $Entity implements $Attackable, $Targeting {
        getTarget(): $LivingEntity;
        getLastAttacker(): $LivingEntity;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get target(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    export class $FlyingMob extends $Mob {
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
    }
    export class $Display$TextDisplay$Align extends $Enum<$Display$TextDisplay$Align> implements $StringRepresentable {
        static values(): $Display$TextDisplay$Align[];
        static valueOf(arg0: string): $Display$TextDisplay$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$TextDisplay$Align;
        static CODEC: $Codec<$Display$TextDisplay$Align>;
        static LEFT: $Display$TextDisplay$Align;
        static RIGHT: $Display$TextDisplay$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$Align}.
     */
    export type $Display$TextDisplay$Align_ = "center" | "left" | "right";
    export interface $EntityType<T> extends RegistryMarked<RegistryTypes.EntityTypeTag, RegistryTypes.EntityType> {}
    export class $Display$BlockDisplay$BlockRenderState extends $Record {
        blockState(): $BlockState;
        constructor(arg0: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $Display$BlockDisplay$BlockRenderState}.
     */
    export type $Display$BlockDisplay$BlockRenderState_ = { blockState?: $BlockState_,  } | [blockState?: $BlockState_, ];
    export class $SpawnPlacementTypes {
        static IN_LAVA: $SpawnPlacementType;
        static IN_WATER: $SpawnPlacementType;
        static NO_RESTRICTIONS: $SpawnPlacementType;
        static ON_GROUND: $SpawnPlacementType;
    }
    export interface $SpawnPlacementTypes {
    }
    export class $TamableAnimal extends $Animal implements $OwnableEntity {
        isOwnedBy(target: $LivingEntity): boolean;
        setTame(tame: boolean, applyTamingSideEffects: boolean): void;
        tame(player: $Player): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInSittingPose(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isTame(): boolean;
        getOwnerUUID(): $UUID;
        setOwnerUUID(uuid: $UUID_ | null): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldTryTeleportToOwner(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        unableToMoveToOwner(): boolean;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        tryToTeleportToOwner(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOrderedToSit(): boolean;
        setOrderedToSit(sitting: boolean): void;
        wantsToAttack(target: $LivingEntity, owner: $LivingEntity): boolean;
        setInSittingPose(sitting: boolean): void;
        /**
         * Gets the active target the Goal system uses for tracking
         */
        getOwner(): $LivingEntity;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static TELEPORT_WHEN_DISTANCE_IS_SQ: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        get owner(): $LivingEntity;
    }
    export class $PlayerRideable {
    }
    export interface $PlayerRideable {
    }
    export class $Crackiness {
        byDamage(damage: number, durability: number): $Crackiness$Level;
        byDamage(stack: $ItemStack_): $Crackiness$Level;
        byFraction(fraction: number): $Crackiness$Level;
        static GOLEM: $Crackiness;
        static WOLF_ARMOR: $Crackiness;
    }
    export class $Interaction$PlayerAction extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Interaction$PlayerAction}.
     */
    export type $Interaction$PlayerAction_ = { timestamp?: number, player?: $UUID_,  } | [timestamp?: number, player?: $UUID_, ];
    export class $MobCategory extends $Enum<$MobCategory> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $MobCategory[];
        static valueOf(arg0: string): $MobCategory;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        /**
         * Gets whether this creature type is peaceful.
         */
        isPersistent(): boolean;
        /**
         * Gets whether this creature type is peaceful.
         */
        isFriendly(): boolean;
        getDespawnDistance(): number;
        getNoDespawnDistance(): number;
        getMaxInstancesPerChunk(): number;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND_WATER_CREATURE: $MobCategory;
        static WATER_CREATURE: $MobCategory;
        static WATER_AMBIENT: $MobCategory;
        static AXOLOTLS: $MobCategory;
        static CODEC: $Codec<$MobCategory>;
        static AMBIENT: $MobCategory;
        static CREATURE: $MobCategory;
        static MISC: $MobCategory;
        static MONSTER: $MobCategory;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get persistent(): boolean;
        get friendly(): boolean;
        get despawnDistance(): number;
        get noDespawnDistance(): number;
        get maxInstancesPerChunk(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        flags(): number;
        text(): $Component;
        lineWidth(): number;
        backgroundColor(): $Display$IntInterpolator;
        textOpacity(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$TextRenderState}.
     */
    export type $Display$TextDisplay$TextRenderState_ = { lineWidth?: number, text?: $Component_, flags?: number, textOpacity?: $Display$IntInterpolator_, backgroundColor?: $Display$IntInterpolator_,  } | [lineWidth?: number, text?: $Component_, flags?: number, textOpacity?: $Display$IntInterpolator_, backgroundColor?: $Display$IntInterpolator_, ];
    export class $Display$BlockDisplay extends $Display {
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        static TAG_BLOCK_STATE: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<never>, level: $Level_);
    }
    export class $ItemSteerable {
    }
    export interface $ItemSteerable {
        boost(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSteerable}.
     */
    export type $ItemSteerable_ = (() => boolean);
    export class $PlayerRideableJumping {
    }
    export interface $PlayerRideableJumping extends $PlayerRideable {
        canJump(): boolean;
        getJumpCooldown(): number;
        onPlayerJump(jumpPower: number): void;
        handleStopJump(): void;
        handleStartJump(jumpPower: number): void;
        get jumpCooldown(): number;
    }
    export class $Marker extends $Entity {
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $SpawnPlacements$SpawnPredicate<T extends $Entity> {
    }
    export interface $SpawnPlacements$SpawnPredicate<T extends $Entity> {
        test(entityType: $EntityType_<T>, serverLevel: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$SpawnPredicate}.
     */
    export type $SpawnPlacements$SpawnPredicate_<T> = ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean);
    export class $EquipmentSlot$Type extends $Enum<$EquipmentSlot$Type> {
        static values(): $EquipmentSlot$Type[];
        static valueOf(arg0: string): $EquipmentSlot$Type;
        static ANIMAL_ARMOR: $EquipmentSlot$Type;
        static HUMANOID_ARMOR: $EquipmentSlot$Type;
        static HAND: $EquipmentSlot$Type;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot$Type}.
     */
    export type $EquipmentSlot$Type_ = "hand" | "humanoid_armor" | "animal_armor";
    export class $Display$TextDisplay extends $Display implements $TextDisplayEntityAccessor {
        static getAlign(flags: number): $Display$TextDisplay$Align;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        cacheDisplay(splitter: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        languagereload_setTextLines(arg0: $Display$TextDisplay$CachedInfo_): void;
        static FLAG_SHADOW: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ALIGN_RIGHT: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static TAG_TEXT: string;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        static INITIAL_BACKGROUND: number;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static FLAG_SEE_THROUGH: number;
        static DEFAULT_BB_HEIGHT: number;
        static FLAG_USE_DEFAULT_BACKGROUND: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FLAG_ALIGN_LEFT: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<never>, level: $Level_);
    }
    export class $Display$LinearFloatInterpolator extends $Record implements $Display$FloatInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearFloatInterpolator}.
     */
    export type $Display$LinearFloatInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EquipmentSlot extends $Enum<$EquipmentSlot> implements $StringRepresentable {
        getName(): string;
        static values(): $EquipmentSlot[];
        static valueOf(targetName: string): $EquipmentSlot;
        limit(stack: $ItemStack_): $ItemStack;
        getType(): $EquipmentSlot$Type;
        /**
         * Gets the actual slot index.
         */
        getIndex(): number;
        getIndex(baseIndex: number): number;
        static byName(targetName: string): $EquipmentSlot;
        getSerializedName(): string;
        isArmor(): boolean;
        /**
         * Gets the actual slot index.
         */
        getFilterFlag(): number;
        getRemappedEnumConstantName(): string;
        static CHEST: $EquipmentSlot;
        static HEAD: $EquipmentSlot;
        static CODEC: $StringRepresentable$EnumCodec<$EquipmentSlot>;
        static OFFHAND: $EquipmentSlot;
        static MAINHAND: $EquipmentSlot;
        static LEGS: $EquipmentSlot;
        static NO_COUNT_LIMIT: number;
        static BODY: $EquipmentSlot;
        static FEET: $EquipmentSlot;
        get type(): $EquipmentSlot$Type;
        get serializedName(): string;
        get armor(): boolean;
        get filterFlag(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot}.
     */
    export type $EquipmentSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "body";
    export class $VariantHolder<T> {
    }
    export interface $VariantHolder<T> {
        getVariant(): T;
        setVariant(variant: T): void;
    }
    export class $EquipmentUser {
    }
    export interface $EquipmentUser {
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, seed: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_, params: $LootParams): void;
        getItemBySlot(slot: $EquipmentSlot_): $ItemStack;
        setItemSlot(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        setDropChance(slot: $EquipmentSlot_, dropChance: number): void;
        resolveSlot(stack: $ItemStack_, excludedSlots: $List_<$EquipmentSlot_>): $EquipmentSlot;
    }
    export class $WalkAnimationState {
        update(newSpeed: number, partialTick: number): void;
        position(partialTick: number): number;
        position(): number;
        isMoving(): boolean;
        speed(): number;
        speed(partialTick: number): number;
        setSpeed(speed: number): void;
        constructor();
        get moving(): boolean;
    }
    export class $SlotAccess {
        static of(getter: $Supplier_<$ItemStack>, setter: $Consumer_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(entity: $LivingEntity, slot: $EquipmentSlot_): $SlotAccess;
        static forEquipmentSlot(entity: $LivingEntity, slot: $EquipmentSlot_, stackFilter: $Predicate_<$ItemStack>): $SlotAccess;
        static forContainer(inventory: $Container, slot: number): $SlotAccess;
        static forContainer(inventory: $Container, slot: number, stackFilter: $Predicate_<$ItemStack>): $SlotAccess;
        static NULL: $SlotAccess;
    }
    export interface $SlotAccess {
        get(): $ItemStack;
        set(stack: $ItemStack_): boolean;
    }
    export class $LightningBolt extends $Entity {
        getCause(): $ServerPlayer;
        setCause(cause: $ServerPlayer | null): void;
        setVisualOnly(visualOnly: boolean): void;
        setDamage(seconds: number): void;
        getDamage(): number;
        handler$bjo000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getBlocksSetOnFire(): number;
        getHitEntities(): $Stream<$Entity>;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        seed: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$LightningBolt>, level: $Level_);
        set visualOnly(value: boolean);
        get blocksSetOnFire(): number;
        get hitEntities(): $Stream<$Entity>;
    }
    export class $LivingEntity$Fallsounds extends $Record {
        big(): $SoundEvent;
        small(): $SoundEvent;
        constructor(small: $SoundEvent_, big: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $LivingEntity$Fallsounds}.
     */
    export type $LivingEntity$Fallsounds_ = { small?: $SoundEvent_, big?: $SoundEvent_,  } | [small?: $SoundEvent_, big?: $SoundEvent_, ];
    export class $Display$ItemDisplay extends $Display {
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<never>, level: $Level_);
    }
    export class $EntitySelector$MobCanWearArmorEntitySelector implements $Predicate<$Entity> {
        test(entity: $Entity | null): boolean;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        constructor(stack: $ItemStack_);
    }
    export class $Entity$MovementEmission extends $Enum<$Entity$MovementEmission> {
        static values(): $Entity$MovementEmission[];
        static valueOf(arg0: string): $Entity$MovementEmission;
        emitsSounds(): boolean;
        emitsEvents(): boolean;
        emitsAnything(): boolean;
        static ALL: $Entity$MovementEmission;
        static EVENTS: $Entity$MovementEmission;
        static SOUNDS: $Entity$MovementEmission;
        static NONE: $Entity$MovementEmission;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MovementEmission}.
     */
    export type $Entity$MovementEmission_ = "none" | "sounds" | "events" | "all";
    export class $AnimationState {
        ifStarted(action: $Consumer_<$AnimationState>): void;
        isStarted(): boolean;
        start(tickCount: number): void;
        stop(): void;
        updateTime(ageInTicks: number, speed: number): void;
        startIfStopped(tickCount: number): void;
        getAccumulatedTime(): number;
        fastForward(duration: number, speed: number): void;
        animateWhen(condition: boolean, tickCount: number): void;
        constructor();
        get started(): boolean;
        get accumulatedTime(): number;
    }
    /**
     * @deprecated
     */
    export class $Shearable {
    }
    export interface $Shearable extends $IShearable {
        /**
         * @deprecated
         */
        readyForShearing(): boolean;
        /**
         * @deprecated
         */
        shear(source: $SoundSource_): void;
    }
    export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
        getOwner(): $LivingEntity;
        setOwner(owner: $LivingEntity | null): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDuration(): number;
        setDuration(duration: number): void;
        /**
         * Returns `true` if the cloud is waiting. While waiting, the radius is ignored and the cloud shows fewer particles in its area.
         */
        isWaiting(): boolean;
        setRadius(radius: number): void;
        getRadius(): number;
        addEffect(effectInstance: $MobEffectInstance): void;
        getParticle(): $ParticleOptions;
        setParticle(particleOption: $ParticleOptions_): void;
        getRadiusPerTick(): number;
        setRadiusOnUse(radius: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getWaitTime(): number;
        setRadiusPerTick(radius: number): void;
        setDurationOnUse(duration: number): void;
        setPotionContents(potionContents: $PotionContents_): void;
        setWaitTime(duration: number): void;
        getRadiusOnUse(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDurationOnUse(): number;
        hasImpulse: boolean;
        static DEFAULT_WIDTH: number;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static HEIGHT: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$AreaEffectCloud>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get waiting(): boolean;
        set potionContents(value: $PotionContents_);
    }
    export class $PathfinderMob extends $Mob {
        /**
         * Returns whether the entity got a `Path`.
         */
        isPanicking(): boolean;
        /**
         * Returns whether the entity got a `Path`.
         */
        isPathFinding(): boolean;
        getWalkTargetValue(pos: $BlockPos_): number;
        getWalkTargetValue(pos: $BlockPos_, level: $LevelReader): number;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        get panicking(): boolean;
        get pathFinding(): boolean;
    }
    export class $Display$RenderState extends $Record {
        transformation(): $Display$GenericInterpolator<$Transformation>;
        brightnessOverride(): number;
        shadowStrength(): $Display$FloatInterpolator;
        shadowRadius(): $Display$FloatInterpolator;
        billboardConstraints(): $Display$BillboardConstraints;
        glowColorOverride(): number;
        constructor(arg0: $Display$GenericInterpolator_<$Transformation>, arg1: $Display$BillboardConstraints_, arg2: number, arg3: $Display$FloatInterpolator_, arg4: $Display$FloatInterpolator_, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$RenderState}.
     */
    export type $Display$RenderState_ = { billboardConstraints?: $Display$BillboardConstraints_, glowColorOverride?: number, brightnessOverride?: number, shadowRadius?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowStrength?: $Display$FloatInterpolator_,  } | [billboardConstraints?: $Display$BillboardConstraints_, glowColorOverride?: number, brightnessOverride?: number, shadowRadius?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowStrength?: $Display$FloatInterpolator_, ];
    export class $RelativeMovement extends $Enum<$RelativeMovement> {
        static values(): $RelativeMovement[];
        static valueOf(arg0: string): $RelativeMovement;
        static unpack(packedMovements: number): $Set<$RelativeMovement>;
        static pack(movements: $Set_<$RelativeMovement_>): number;
        static ROTATION: $Set<$RelativeMovement>;
        static ALL: $Set<$RelativeMovement>;
        static Y_ROT: $RelativeMovement;
        static X_ROT: $RelativeMovement;
        static X: $RelativeMovement;
        static Y: $RelativeMovement;
        static Z: $RelativeMovement;
    }
    /**
     * Values that may be interpreted as {@link $RelativeMovement}.
     */
    export type $RelativeMovement_ = "x" | "y" | "z" | "y_rot" | "x_rot";
    export class $Display$PosRotInterpolationTarget {
    }
    export class $OminousItemSpawner extends $Entity {
        static create(level: $Level_, item: $ItemStack_): $OminousItemSpawner;
        getItem(): $ItemStack;
        /**
         * Called to update the entity's position/logic.
         */
        addParticles(): void;
        static TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND: number;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$OminousItemSpawner>, level: $Level_);
        get item(): $ItemStack;
    }
    export class $EntityType$Builder<T extends $Entity> {
        static of<T extends $Entity>(factory: $EntityType$EntityFactory_<T>, category: $MobCategory_): $EntityType$Builder<T>;
        build(key: string): $EntityType<T>;
        attach(attachment: $EntityAttachment_, x: number, y: number, z: number): $EntityType$Builder<T>;
        attach(attachment: $EntityAttachment_, pos: $Vec3_): $EntityType$Builder<T>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<T>;
        canSpawnFarFromPlayer(): $EntityType$Builder<T>;
        clientTrackingRange(clientTrackingRange: number): $EntityType$Builder<T>;
        spawnDimensionsScale(eyeHeight: number): $EntityType$Builder<T>;
        passengerAttachments(...attachPoints: number[]): $EntityType$Builder<T>;
        passengerAttachments(...attachPoints: $Vec3_[]): $EntityType$Builder<T>;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $EntityType$Builder<T>;
        noSave(): $EntityType$Builder<T>;
        nameTagOffset(eyeHeight: number): $EntityType$Builder<T>;
        ridingOffset(eyeHeight: number): $EntityType$Builder<T>;
        static createNothing<T extends $Entity>(category: $MobCategory_): $EntityType$Builder<T>;
        vehicleAttachment(attachPoint: $Vec3_): $EntityType$Builder<T>;
        updateInterval(clientTrackingRange: number): $EntityType$Builder<T>;
        fireImmune(): $EntityType$Builder<T>;
        eyeHeight(eyeHeight: number): $EntityType$Builder<T>;
        immuneTo(...blocks: $Block_[]): $EntityType$Builder<T>;
        sized(width: number, height: number): $EntityType$Builder<T>;
        noSummon(): $EntityType$Builder<T>;
        setTrackingRange(clientTrackingRange: number): $EntityType$Builder<T>;
        setUpdateInterval(clientTrackingRange: number): $EntityType$Builder<T>;
        trackingRangeSupplier: $ToIntFunction<$EntityType<never>>;
        set shouldReceiveVelocityUpdates(value: boolean);
        set trackingRange(value: number);
    }
    export class $Display$TextDisplay$CachedLine extends $Record {
        contents(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedLine}.
     */
    export type $Display$TextDisplay$CachedLine_ = { width?: number, contents?: $FormattedCharSequence_,  } | [width?: number, contents?: $FormattedCharSequence_, ];
    export class $EquipmentTable extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        slotDropChances(): $Map<$EquipmentSlot, number>;
        static CODEC: $Codec<$EquipmentTable>;
        static DROP_CHANCES_CODEC: $Codec<$Map<$EquipmentSlot, number>>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>);
    }
    /**
     * Values that may be interpreted as {@link $EquipmentTable}.
     */
    export type $EquipmentTable_ = { slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>,  } | [slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>, ];
    export class $PortalProcessor {
        getPortalTime(): number;
        getEntryPosition(): $BlockPos;
        getPortalDestination(level: $ServerLevel, entity: $Entity): $DimensionTransition;
        updateEntryPosition(entryPosition: $BlockPos_): void;
        setAsInsidePortalThisTick(insidePortalThisTick: boolean): void;
        processPortalTeleportation(level: $ServerLevel, entity: $Entity, canChangeDimensions: boolean): boolean;
        isSamePortal(portal: $Portal_): boolean;
        hasExpired(): boolean;
        isInsidePortalThisTick(): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        constructor(portal: $Portal_, entryPosition: $BlockPos_);
        get portalTime(): number;
        get entryPosition(): $BlockPos;
        set asInsidePortalThisTick(value: boolean);
        get insidePortalThisTick(): boolean;
        get portalLocalTransition(): $Portal$Transition;
    }
    export class $MobSpawnType extends $Enum<$MobSpawnType> {
        static values(): $MobSpawnType[];
        static valueOf(arg0: string): $MobSpawnType;
        static isSpawner(spawnType: $MobSpawnType_): boolean;
        static ignoresLightRequirements(spawnType: $MobSpawnType_): boolean;
        static CONVERSION: $MobSpawnType;
        static STRUCTURE: $MobSpawnType;
        static BUCKET: $MobSpawnType;
        static DISPENSER: $MobSpawnType;
        static SPAWNER: $MobSpawnType;
        static EVENT: $MobSpawnType;
        static MOB_SUMMONED: $MobSpawnType;
        static NATURAL: $MobSpawnType;
        static SPAWN_EGG: $MobSpawnType;
        static PATROL: $MobSpawnType;
        static CHUNK_GENERATION: $MobSpawnType;
        static TRIAL_SPAWNER: $MobSpawnType;
        static BREEDING: $MobSpawnType;
        static REINFORCEMENT: $MobSpawnType;
        static COMMAND: $MobSpawnType;
        static TRIGGERED: $MobSpawnType;
        static JOCKEY: $MobSpawnType;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnType}.
     */
    export type $MobSpawnType_ = "natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol" | "trial_spawner";
    export class $ExperienceOrb extends $Entity {
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        getValue(): number;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        getIcon(): number;
        static award(level: $ServerLevel, pos: $Vec3_, amount: number): void;
        repairPlayerItems(player: $ServerPlayer, value: number): number;
        /**
         * Get a fragment of the maximum experience points value for the supplied value of experience points value.
         */
        static getExperienceValue(expValue: number): number;
        static tryMergeToExisting(level: $ServerLevel, pos: $Vec3_, amount: number): boolean;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        count: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        value: number;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: number);
        constructor(entityType: $EntityType_<$ExperienceOrb>, level: $Level_);
        get icon(): number;
    }
    export class $Display$LinearIntInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearIntInterpolator}.
     */
    export type $Display$LinearIntInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EntityDimensions extends $Record {
        scale(width: number, height: number): $EntityDimensions;
        scale(factor: number): $EntityDimensions;
        fixed(): boolean;
        static fixed(width: number, height: number): $EntityDimensions;
        width(): number;
        height(): number;
        makeBoundingBox(pos: $Vec3_): $AABB;
        makeBoundingBox(x: number, arg1: number, y: number): $AABB;
        withEyeHeight(factor: number): $EntityDimensions;
        eyeHeight(): number;
        attachments(): $EntityAttachments;
        withAttachments(attachments: $EntityAttachments$Builder): $EntityDimensions;
        static scalable(width: number, height: number): $EntityDimensions;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $EntityAttachments, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityDimensions}.
     */
    export type $EntityDimensions_ = { fixed?: boolean, height?: number, eyeHeight?: number, width?: number, attachments?: $EntityAttachments,  } | [fixed?: boolean, height?: number, eyeHeight?: number, width?: number, attachments?: $EntityAttachments, ];
    export class $EntityAttachment extends $Enum<$EntityAttachment> {
        static values(): $EntityAttachment[];
        static valueOf(arg0: string): $EntityAttachment;
        createFallbackPoints(width: number, height: number): $List<$Vec3>;
        static VEHICLE: $EntityAttachment;
        static NAME_TAG: $EntityAttachment;
        static PASSENGER: $EntityAttachment;
        static WARDEN_CHEST: $EntityAttachment;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment}.
     */
    export type $EntityAttachment_ = "passenger" | "vehicle" | "name_tag" | "warden_chest";
    export class $TraceableEntity {
    }
    export interface $TraceableEntity {
        getOwner(): $Entity;
        get owner(): $Entity;
    }
    /**
     * Values that may be interpreted as {@link $TraceableEntity}.
     */
    export type $TraceableEntity_ = (() => $Entity);
    export class $HumanoidArm extends $Enum<$HumanoidArm> implements $OptionEnum, $StringRepresentable {
        static values(): $HumanoidArm[];
        static valueOf(arg0: string): $HumanoidArm;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getOpposite(): $HumanoidArm;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HumanoidArm>;
        static LEFT: $HumanoidArm;
        static BY_ID: $IntFunction<$HumanoidArm>;
        static RIGHT: $HumanoidArm;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get opposite(): $HumanoidArm;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidArm}.
     */
    export type $HumanoidArm_ = "left" | "right";
    export class $EntityType$EntityFactory<T extends $Entity> {
    }
    export interface $EntityType$EntityFactory<T extends $Entity> {
        create(entityType: $EntityType_<T>, level: $Level_): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityType$EntityFactory}.
     */
    export type $EntityType$EntityFactory_<T> = ((arg0: $EntityType<T>, arg1: $Level) => T);
    export class $MoverType extends $Enum<$MoverType> {
        static values(): $MoverType[];
        static valueOf(arg0: string): $MoverType;
        static PLAYER: $MoverType;
        static PISTON: $MoverType;
        static SHULKER_BOX: $MoverType;
        static SELF: $MoverType;
        static SHULKER: $MoverType;
    }
    /**
     * Values that may be interpreted as {@link $MoverType}.
     */
    export type $MoverType_ = "self" | "player" | "piston" | "shulker_box" | "shulker";
    export class $Entity$RemovalReason extends $Enum<$Entity$RemovalReason> {
        static values(): $Entity$RemovalReason[];
        static valueOf(arg0: string): $Entity$RemovalReason;
        shouldDestroy(): boolean;
        shouldSave(): boolean;
        static UNLOADED_TO_CHUNK: $Entity$RemovalReason;
        static UNLOADED_WITH_PLAYER: $Entity$RemovalReason;
        static DISCARDED: $Entity$RemovalReason;
        static CHANGED_DIMENSION: $Entity$RemovalReason;
        static KILLED: $Entity$RemovalReason;
    }
    /**
     * Values that may be interpreted as {@link $Entity$RemovalReason}.
     */
    export type $Entity$RemovalReason_ = "killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension";
    export class $Saddleable {
    }
    export interface $Saddleable {
        isSaddleable(): boolean;
        equipSaddle(stack: $ItemStack_, soundSource: $SoundSource_ | null): void;
        isSaddled(): boolean;
        getSaddleSoundEvent(): $SoundEvent;
        get saddleable(): boolean;
        get saddled(): boolean;
        get saddleSoundEvent(): $SoundEvent;
    }
    export class $Targeting {
    }
    export interface $Targeting {
        getTarget(): $LivingEntity;
        get target(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Targeting}.
     */
    export type $Targeting_ = (() => $LivingEntity);
    export class $Pose extends $Enum<$Pose> {
        static values(): $Pose[];
        static valueOf(arg0: string): $Pose;
        id(): number;
        static SLEEPING: $Pose;
        static SNIFFING: $Pose;
        static EMERGING: $Pose;
        static INHALING: $Pose;
        static FALL_FLYING: $Pose;
        static LONG_JUMPING: $Pose;
        static BY_ID: $IntFunction<$Pose>;
        static DYING: $Pose;
        static CROAKING: $Pose;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Pose>;
        static STANDING: $Pose;
        static SWIMMING: $Pose;
        static SITTING: $Pose;
        static SHOOTING: $Pose;
        static SLIDING: $Pose;
        static USING_TONGUE: $Pose;
        static CROUCHING: $Pose;
        static ROARING: $Pose;
        static DIGGING: $Pose;
        static SPIN_ATTACK: $Pose;
    }
    /**
     * Values that may be interpreted as {@link $Pose}.
     */
    export type $Pose_ = "standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "sliding" | "shooting" | "inhaling";
    export class $OwnableEntity {
    }
    export interface $OwnableEntity {
        getOwner(): $LivingEntity;
        level(): $EntityGetter;
        getOwnerUUID(): $UUID;
        get owner(): $LivingEntity;
        get ownerUUID(): $UUID;
    }
    export class $EquipmentSlotGroup extends $Enum<$EquipmentSlotGroup> implements $StringRepresentable {
        static values(): $EquipmentSlotGroup[];
        test(slot: $EquipmentSlot_): boolean;
        static valueOf(arg0: string): $EquipmentSlotGroup;
        getSerializedName(): string;
        static bySlot(slot: $EquipmentSlot_): $EquipmentSlotGroup;
        getRemappedEnumConstantName(): string;
        static HEAD: $EquipmentSlotGroup;
        static CODEC: $Codec<$EquipmentSlotGroup>;
        static OFFHAND: $EquipmentSlotGroup;
        static ARMOR: $EquipmentSlotGroup;
        static MAINHAND: $EquipmentSlotGroup;
        static LEGS: $EquipmentSlotGroup;
        static BY_ID: $IntFunction<$EquipmentSlotGroup>;
        static ANY: $EquipmentSlotGroup;
        static HAND: $EquipmentSlotGroup;
        static FEET: $EquipmentSlotGroup;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EquipmentSlotGroup>;
        static CHEST: $EquipmentSlotGroup;
        static BODY: $EquipmentSlotGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotGroup}.
     */
    export type $EquipmentSlotGroup_ = "any" | "mainhand" | "offhand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body";
    export class $Display extends $Entity implements $DisplayAccessor {
        calculateInterpolationProgress(partialTick: number): number;
        renderState(): $Display$RenderState;
        invokeSetWidth(height: number): void;
        invokeSetHeight(height: number): void;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<never>, level: $Level_);
    }
    export class $Crackiness$Level extends $Enum<$Crackiness$Level> {
        static values(): $Crackiness$Level[];
        static valueOf(arg0: string): $Crackiness$Level;
        static HIGH: $Crackiness$Level;
        static MEDIUM: $Crackiness$Level;
        static LOW: $Crackiness$Level;
        static NONE: $Crackiness$Level;
    }
    /**
     * Values that may be interpreted as {@link $Crackiness$Level}.
     */
    export type $Crackiness$Level_ = "none" | "low" | "medium" | "high";
    export class $Mob extends $LivingEntity implements $EquipmentUser, $Leashable, $Targeting, $MobAccessor, $EquipmentEntity, $NavigatingEntity, $MobAccess {
        /**
         * Gets the active target the Goal system uses for tracking
         */
        getTarget(): $LivingEntity;
        /**
         * Sets the active target the Goal system uses for tracking
         */
        setTarget(target: $LivingEntity | null): void;
        /**
         * @deprecated
         */
        finalizeSpawn(level: $ServerLevelAccessor, difficulty: $DifficultyInstance, spawnType: $MobSpawnType_, spawnGroupData: $SpawnGroupData | null): $SpawnGroupData;
        convertTo<T extends $Mob>(entityType: $EntityType_<T>, transferInventory: boolean): T;
        /**
         * Changes the X and Y rotation so that this entity is facing the given entity.
         */
        lookAt(entity: $Entity, maxYRotIncrease: number, maxXRotIncrease: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        lithium$updateNavigationRegistration(): void;
        restrictTo(pos: $BlockPos_, distance: number): void;
        setNoAi(aggressive: boolean): void;
        /**
         * Returns whether the entity is in a server world
         */
        isNoAi(): boolean;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setYya(speed: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        ate(): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setXxa(speed: number): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setZza(speed: number): void;
        getSensing(): $Sensing;
        lithium$getRegisteredNavigation(): $PathNavigation;
        /**
         * Returns whether the entity is in a server world
         */
        lithium$isRegisteredToWorld(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        setPersistenceRequired(): void;
        setBaby(aggressive: boolean): void;
        handler$fjb000$ad_astra$adastra$checkSpawnObstruction(arg0: $LevelReader, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Returns whether the entity is in a server world
         */
        isSpawnCancelled(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playAmbientSound(): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_): void;
        getNavigation(): $PathNavigation;
        static checkMobSpawnRules(type: $EntityType_<$Mob>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxHeadXRot(): number;
        setAggressive(aggressive: boolean): void;
        /**
         * Returns whether the entity is in a server world
         */
        isAggressive(): boolean;
        removeWhenFarAway(distanceToClosestPlayer: number): boolean;
        getBodyArmorItem(): $ItemStack;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxHeadYRot(): number;
        /**
         * Returns whether the entity is in a server world
         */
        canPickUpLoot(): boolean;
        getLookControl(): $LookControl;
        setLeftHanded(aggressive: boolean): void;
        setGuaranteedDrop(slot: $EquipmentSlot_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopInPlace(): void;
        getRestrictCenter(): $BlockPos;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        /**
         * Returns whether the entity is in a server world
         */
        canBeLeashed(): boolean;
        getJumpControl(): $JumpControl;
        setDropChance(slot: $EquipmentSlot_, chance: number): void;
        wantsToPickUp(stack: $ItemStack_): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onPathfindingStart(): void;
        checkSpawnRules(level: $LevelAccessor, reason: $MobSpawnType_): boolean;
        getMoveControl(): $MoveControl;
        canHoldItem(stack: $ItemStack_): boolean;
        setCanPickUpLoot(aggressive: boolean): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRestrictRadius(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearRestriction(): void;
        /**
         * Returns whether the entity is in a server world
         */
        isLeftHanded(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onPathfindingDone(): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getHeadRotSpeed(): number;
        /**
         * Returns whether the entity is in a server world
         */
        hasRestriction(): boolean;
        getLeashData(): $Leashable$LeashData;
        setSpawnCancelled(aggressive: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeFreeWill(): void;
        getSpawnType(): $MobSpawnType;
        removeAllGoals(filter: $Predicate_<$Goal>): void;
        /**
         * Removes the leash from this entity
         */
        dropLeash(broadcastPacket: boolean, dropLeash: boolean): void;
        lithium$setRegisteredToWorld(arg0: $PathNavigation): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        spawnAnim(): void;
        isWithinMeleeAttackRange(entity: $LivingEntity): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isPersistenceRequired(): boolean;
        isWithinRestriction(pos: $BlockPos_): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isWithinRestriction(): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getAmbientSoundInterval(): number;
        equipItemIfPossible(stack: $ItemStack_): $ItemStack;
        setPathfindingMalus(pathType: $PathType_, malus: number): void;
        static getEquipmentForSlot(slot: $EquipmentSlot_, chance: number): $Item;
        checkSpawnObstruction(level: $LevelReader): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxSpawnClusterSize(): number;
        /**
         * Returns whether the entity is in a server world
         */
        requiresCustomPersistence(): boolean;
        isMaxGroupSizeReached(size: number): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        dropPreservedEquipment(): void;
        dropPreservedEquipment(predicate: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        canFireProjectileWeapon(projectileWeapon: $ProjectileWeaponItem): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        leashTooFarBehaviour(): void;
        getPathfindingMalus(pathType: $PathType_): number;
        static createMobAttributes(): $AttributeSupplier$Builder;
        canReplaceEqualItem(candidate: $ItemStack_, existing: $ItemStack_): boolean;
        modifyExpressionValue$dkc000$create$mobRidingContraptionsMaintainTheirAttackBox(entity: $Entity): $Entity;
        /**
         * Returns whether the entity is in a server world
         */
        isWearingBodyArmor(): boolean;
        isBodyArmorItem(stack: $ItemStack_): boolean;
        setBodyArmorItem(stack: $ItemStack_): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, seed: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_, params: $LootParams): void;
        resolveSlot(stack: $ItemStack_, excludedSlots: $List_<$EquipmentSlot_>): $EquipmentSlot;
        /**
         * Returns whether the entity is in a server world
         */
        isLeashed(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        canHaveALeashAttachedToIt(): boolean;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        /**
         * Get entity this is riding
         */
        getLeashHolder(): $Entity;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        /**
         * Returns whether the entity is in a server world
         */
        mayBeLeashed(): boolean;
        /**
         * Sets the amount of arrows stuck in the entity. Used for rendering those.
         */
        setDelayedLeashHolderId(count: number): void;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        closeRangeLeashBehaviour(passenger: $Entity): void;
        sophisticatedbackpacks$getAmbientSound(): $SoundEvent;
        getHandDropChances(): number[];
        getArmorDropChances(): number[];
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        get sensing(): $Sensing;
        set baby(value: boolean);
        get navigation(): $PathNavigation;
        get maxHeadXRot(): number;
        get maxHeadYRot(): number;
        set guaranteedDrop(value: $EquipmentSlot_);
        get restrictCenter(): $BlockPos;
        get jumpControl(): $JumpControl;
        get moveControl(): $MoveControl;
        get restrictRadius(): number;
        get headRotSpeed(): number;
        get spawnType(): $MobSpawnType;
        get ambientSoundInterval(): number;
        get maxSpawnClusterSize(): number;
        get wearingBodyArmor(): boolean;
        get leashed(): boolean;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
        get handDropChances(): number[];
        get armorDropChances(): number[];
    }
    export class $Leashable$LeashData {
        setLeashHolder(leashHolder: $Entity): void;
        leashHolder: $Entity;
        delayedLeashInfo: $Either<$UUID, $BlockPos>;
    }
    export class $Entity$MoveFunction {
    }
    export interface $Entity$MoveFunction {
        accept(entity: $Entity, x: number, arg2: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MoveFunction}.
     */
    export type $Entity$MoveFunction_ = ((arg0: $Entity, arg1: number, arg2: number, arg3: number) => void);
    export class $EntityAttachments {
        get(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        scale(xScale: number, yScale: number, zScale: number): $EntityAttachments;
        static builder(): $EntityAttachments$Builder;
        static createDefault(width: number, height: number): $EntityAttachments;
        getClamped(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        getNullable(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
    }
    export class $EntitySelector {
        static notRiding(entity: $Entity): $Predicate<$Entity>;
        static pushableBy(entity: $Entity): $Predicate<$Entity>;
        static withinDistance(x: number, arg1: number, y: number, arg3: number): $Predicate<$Entity>;
        static ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static NO_SPECTATORS: $Predicate<$Entity>;
        static ENTITY_NOT_BEING_RIDDEN: $Predicate<$Entity>;
        static LIVING_ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static CAN_BE_COLLIDED_WITH: $Predicate<$Entity>;
        static NO_CREATIVE_OR_SPECTATOR: $Predicate<$Entity>;
        static CONTAINER_ENTITY_SELECTOR: $Predicate<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelector}.
     */
    export type $EntitySelector_ = string;
    export class $AgeableMob extends $PathfinderMob {
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getAge(): number;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $AgeableMob;
        setAge(amount: number): void;
        static getSpeedUpSecondsWhenFeeding(ticksUntilAdult: number): number;
        ageUp(amount: number): void;
        ageUp(amount: number, forced: boolean): void;
        /**
         * If Animal, checks if the age timer is negative
         */
        canBreed(): boolean;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
    }
    export class $ItemBasedSteering {
        readAdditionalSaveData(nbt: $CompoundTag_): void;
        addAdditionalSaveData(nbt: $CompoundTag_): void;
        boost(random: $RandomSource): boolean;
        hasSaddle(): boolean;
        onSynced(): void;
        tickBoost(): void;
        setSaddle(saddled: boolean): void;
        boostFactor(): number;
        constructor(entityData: $SynchedEntityData, boostTimeAccessor: $EntityDataAccessor_<number>, hasSaddleAccessor: $EntityDataAccessor_<boolean>);
        set saddle(value: boolean);
    }
    export class $NeutralMob {
        static TAG_ANGRY_AT: string;
        static TAG_ANGER_TIME: string;
    }
    export interface $NeutralMob {
        /**
         * Gets the active target the Task system uses for tracking
         */
        getTarget(): $LivingEntity;
        /**
         * Hint to AI tasks that we were attacked by the passed EntityLivingBase and should retaliate. Is not guaranteed to change our actual active target (for example if we are currently busy attacking someone else)
         */
        setTarget(livingEntity: $LivingEntity | null): void;
        setLastHurtByPlayer(player: $Player | null): void;
        /**
         * Hint to AI tasks that we were attacked by the passed EntityLivingBase and should retaliate. Is not guaranteed to change our actual active target (for example if we are currently busy attacking someone else)
         */
        setLastHurtByMob(livingEntity: $LivingEntity | null): void;
        /**
         * Gets the active target the Task system uses for tracking
         */
        getLastHurtByMob(): $LivingEntity;
        playerDied(player: $Player): void;
        canAttack(entity: $LivingEntity): boolean;
        stopBeingAngry(): void;
        addPersistentAngerSaveData(nbt: $CompoundTag_): void;
        startPersistentAngerTimer(): void;
        setPersistentAngerTarget(persistentAngerTarget: $UUID_ | null): void;
        isAngryAtAllPlayers(level: $Level_): boolean;
        getPersistentAngerTarget(): $UUID;
        updatePersistentAnger(serverLevel: $ServerLevel, updateAnger: boolean): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        isAngry(): boolean;
        isAngryAt(entity: $LivingEntity): boolean;
        setRemainingPersistentAngerTime(remainingPersistentAngerTime: number): void;
        getRemainingPersistentAngerTime(): number;
        readPersistentAngerSaveData(level: $Level_, tag: $CompoundTag_): void;
        set lastHurtByPlayer(value: $Player | null);
        get angry(): boolean;
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        getBabySpawnChance(): number;
        getGroupSize(): number;
        isShouldSpawnBaby(): boolean;
        increaseGroupSizeByOne(): void;
        constructor(babySpawnChance: number);
        constructor(shouldSpawnBaby: boolean);
        get babySpawnChance(): number;
        get groupSize(): number;
        get shouldSpawnBaby(): boolean;
    }
    export class $ReputationEventHandler {
    }
    export interface $ReputationEventHandler {
        onReputationEventFrom(type: $ReputationEventType, target: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $ReputationEventHandler}.
     */
    export type $ReputationEventHandler_ = ((arg0: $ReputationEventType, arg1: $Entity) => void);
    export class $TamableAnimal$TamableAnimalPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
    }
    export class $Display$ItemDisplay$ItemRenderState extends $Record {
        itemStack(): $ItemStack;
        itemTransform(): $ItemDisplayContext;
        constructor(arg0: $ItemStack_, arg1: $ItemDisplayContext_);
    }
    /**
     * Values that may be interpreted as {@link $Display$ItemDisplay$ItemRenderState}.
     */
    export type $Display$ItemDisplay$ItemRenderState_ = { itemTransform?: $ItemDisplayContext_, itemStack?: $ItemStack_,  } | [itemTransform?: $ItemDisplayContext_, itemStack?: $ItemStack_, ];
}
