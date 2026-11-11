import { $StrollThroughVillageGoal, $PanicGoal, $MeleeAttackGoal, $GoalSelector, $FollowParentGoal, $JumpGoal, $WaterAvoidingRandomFlyingGoal, $AvoidEntityGoal, $RandomStrollGoal, $BreedGoal, $FleeSunGoal, $MoveToBlockGoal, $TemptGoal, $FloatGoal, $RandomSwimmingGoal, $LookAtPlayerGoal, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $JumpControl, $MoveControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $VariantHolder, $Pose_, $AgeableMob$AgeableMobGroupData, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $Saddleable, $AgeableMob, $WalkAnimationState, $Mob, $ItemSteerable, $PortalProcessor, $SpawnGroupData, $Entity, $PathfinderMob, $TamableAnimal, $Crackiness$Level, $Shearable, $MobSpawnType_, $NeutralMob } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Predicate_, $Predicate } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $SoundEvent, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AmphibiousPathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $BeeAccessor } from "@package/com/denfop/mixin/access";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $HurtByTargetGoal, $NearestAttackableTargetGoal } from "@package/net/minecraft/world/entity/ai/goal/target";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RangedAttackMob } from "@package/net/minecraft/world/entity/monster";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as frog from "@package/net/minecraft/world/entity/animal/frog";
export * as sniffer from "@package/net/minecraft/world/entity/animal/sniffer";
export * as horse from "@package/net/minecraft/world/entity/animal/horse";
export * as camel from "@package/net/minecraft/world/entity/animal/camel";
export * as armadillo from "@package/net/minecraft/world/entity/animal/armadillo";
export * as allay from "@package/net/minecraft/world/entity/animal/allay";
export * as axolotl from "@package/net/minecraft/world/entity/animal/axolotl";
export * as goat from "@package/net/minecraft/world/entity/animal/goat";

declare module "@package/net/minecraft/world/entity/animal" {
    export class $Animal extends $AgeableMob {
        mobInteract(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Returns if the entity is currently in 'love mode'.
         */
        canFallInLove(): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getInLoveTime(): number;
        setInLoveTime(inLove: number): void;
        getLoveCause(): $ServerPlayer;
        static checkAnimalSpawnRules(animal: $EntityType_<$Animal>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        spawnChildFromBreeding(level: $ServerLevel, mate: $Animal): void;
        finalizeSpawnChildFromBreeding(level: $ServerLevel, animal: $Animal, baby: $AgeableMob | null): void;
        /**
         * Checks if the parameter is an item which this animal can be fed to breed it (wheat, carrots or seeds depending on the animal type)
         */
        isFood(stack: $ItemStack_): boolean;
        /**
         * Returns if the entity is currently in 'love mode'.
         */
        isInLove(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetLove(): void;
        setInLove(player: $Player | null): void;
        /**
         * Returns `true` if the mob is currently able to mate with the specified mob.
         */
        canMate(otherAnimal: $Animal): boolean;
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
        get loveCause(): $ServerPlayer;
    }
    export class $Chicken extends $Animal {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Chicken;
        /**
         * Determines if this chicken is a jokey with a zombie riding it.
         */
        isChickenJockey(): boolean;
        /**
         * Sets whether this chicken is a jockey or not.
         */
        setChickenJockey(isChickenJockey: boolean): void;
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
        eggTime: number;
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
        flap: number;
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
        oFlapSpeed: number;
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
        flapSpeed: number;
        xOld: number;
        wasInPowderSnow: boolean;
        oFlap: number;
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
        flapping: number;
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
        constructor(entityType: $EntityType_<$Chicken>, level: $Level_);
    }
    export class $Panda$PandaLookAtPlayerGoal extends $LookAtPlayerGoal {
        static DEFAULT_PROBABILITY: number;
    }
    export class $Fox$FoxStrollThroughVillageGoal extends $StrollThroughVillageGoal {
    }
    export class $Fox$FoxSearchForItemsGoal extends $Goal {
    }
    export class $Pufferfish$PufferfishPuffGoal extends $Goal {
        constructor(fish: $Pufferfish);
    }
    export class $AbstractSchoolingFish extends $AbstractFish {
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFollower(): boolean;
        /**
         * Will return how many at most can spawn in a chunk at once.
         */
        getMaxSchoolSize(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeFollowed(): boolean;
        startFollowing(leader: $AbstractSchoolingFish): $AbstractSchoolingFish;
        /**
         * Called to update the entity's position/logic.
         */
        stopFollowing(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        inRangeOfLeader(): boolean;
        addFollowers(followers: $Stream<$AbstractSchoolingFish>): void;
        /**
         * Called to update the entity's position/logic.
         */
        pathToLeader(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasFollowers(): boolean;
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
        constructor(entityType: $EntityType_<$AbstractSchoolingFish>, level: $Level_);
        get follower(): boolean;
        get maxSchoolSize(): number;
    }
    export class $Cod extends $AbstractSchoolingFish {
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
        constructor(entityType: $EntityType_<$Cod>, level: $Level_);
    }
    export class $Cat extends $TamableAnimal implements $VariantHolder<$Holder<$CatVariant>> {
        getVariant(): $Holder<$CatVariant>;
        setVariant(variant: $Holder_<$CatVariant>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isLying(): boolean;
        setLying(lying: boolean): void;
        /**
         * Called to update the entity's position/logic.
         */
        hiss(): void;
        getTextureId(): $ResourceLocation;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Called to update the entity's position/logic.
         */
        customServerAiStep(): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Cat;
        getRelaxStateOneAmount(partialTicks: number): number;
        getLieDownAmountTail(partialTicks: number): number;
        setCollarColor(color: $DyeColor_): void;
        getLieDownAmount(partialTicks: number): number;
        getCollarColor(): $DyeColor;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        static TEMPT_SPEED_MOD: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        static SPRINT_SPEED_MOD: number;
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
        static WALK_SPEED_MOD: number;
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
        constructor(entityType: $EntityType_<$Cat>, level: $Level_);
        get textureId(): $ResourceLocation;
    }
    export class $WolfVariants {
        static bootstrap(context: $BootstrapContext<$WolfVariant_>): void;
        static getSpawnVariant(registryAccess: $RegistryAccess, biome: $Holder_<$Biome>): $Holder<$WolfVariant>;
        static SNOWY: $ResourceKey<$WolfVariant>;
        static ASHEN: $ResourceKey<$WolfVariant>;
        static STRIPED: $ResourceKey<$WolfVariant>;
        static SPOTTED: $ResourceKey<$WolfVariant>;
        static WOODS: $ResourceKey<$WolfVariant>;
        static BLACK: $ResourceKey<$WolfVariant>;
        static CHESTNUT: $ResourceKey<$WolfVariant>;
        static RUSTY: $ResourceKey<$WolfVariant>;
        static DEFAULT: $ResourceKey<$WolfVariant>;
        static PALE: $ResourceKey<$WolfVariant>;
        constructor();
    }
    export class $Fox$DefendTrustedTargetGoal extends $NearestAttackableTargetGoal<$LivingEntity> {
    }
    export class $PolarBear extends $Animal implements $NeutralMob {
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isStanding(): boolean;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Called to update the entity's position/logic.
         */
        startPersistentAngerTimer(): void;
        setPersistentAngerTarget(target: $UUID_ | null): void;
        getPersistentAngerTarget(): $UUID;
        setRemainingPersistentAngerTime(time: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getRemainingPersistentAngerTime(): number;
        static checkPolarBearSpawnRules(polarBear: $EntityType_<$PolarBear>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        getStandingAnimationScale(partialTick: number): number;
        setStanding(standing: boolean): void;
        playerDied(player: $Player): void;
        /**
         * Called to update the entity's position/logic.
         */
        stopBeingAngry(): void;
        addPersistentAngerSaveData(compound: $CompoundTag_): void;
        isAngryAtAllPlayers(level: $Level_): boolean;
        updatePersistentAnger(serverLevel: $ServerLevel, updateAnger: boolean): void;
        /**
         * Called to update the entity's position/logic.
         */
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAngry(): boolean;
        isAngryAt(target: $LivingEntity): boolean;
        readPersistentAngerSaveData(level: $Level_, tag: $CompoundTag_): void;
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
        constructor(entityType: $EntityType_<$PolarBear>, level: $Level_);
        get angry(): boolean;
    }
    export class $Cow extends $Animal {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Cow;
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
        constructor(entityType: $EntityType_<$Cow>, level: $Level_);
    }
    export class $WolfVariant {
        biomes(): $HolderSet<$Biome>;
        tameTexture(): $ResourceLocation;
        wildTexture(): $ResourceLocation;
        angryTexture(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$WolfVariant>>;
        static DIRECT_CODEC: $Codec<$WolfVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WolfVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$WolfVariant>>;
        constructor(wildTexture: $ResourceLocation_, tameTexture: $ResourceLocation_, angryTexture: $ResourceLocation_, biomes: $HolderSet_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $WolfVariant}.
     */
    export type $WolfVariant_ = RegistryTypes.WolfVariant;
    export class $Fox extends $Animal implements $VariantHolder<$Fox$Type> {
        getVariant(): $Fox$Type;
        setVariant(variant: $Fox$Type_): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Fox;
        /**
         * Dead and sleeping entities cannot move
         */
        isSitting(): boolean;
        /**
         * Dead and sleeping entities cannot move
         */
        isPouncing(): boolean;
        setSitting(defending: boolean): void;
        /**
         * Dead and sleeping entities cannot move
         */
        isFaceplanted(): boolean;
        static checkFoxSpawnRules(fox: $EntityType_<$Fox>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Dead and sleeping entities cannot move
         */
        isInterested(): boolean;
        static isPathClear(fox: $Fox, livingEntity: $LivingEntity): boolean;
        getHeadRollAngle(partialTick: number): number;
        /**
         * Dead and sleeping entities cannot move
         */
        isFullyCrouched(): boolean;
        setIsInterested(defending: boolean): void;
        setIsPouncing(defending: boolean): void;
        getCrouchAmount(partialTick: number): number;
        setIsCrouching(defending: boolean): void;
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
        static FLAG_INTERESTED: number;
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
        static FLAG_POUNCING: number;
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
        static FLAG_CROUCHING: number;
        constructor(entityType: $EntityType_<$Fox>, level: $Level_);
        get leashOffset(): $Vec3;
        get pouncing(): boolean;
        get faceplanted(): boolean;
        get interested(): boolean;
        get fullyCrouched(): boolean;
    }
    export class $Fox$FoxFollowParentGoal extends $FollowParentGoal {
        static DONT_FOLLOW_IF_CLOSER_THAN: number;
        static HORIZONTAL_SCAN_RANGE: number;
        static VERTICAL_SCAN_RANGE: number;
    }
    export class $Dolphin$DolphinSwimToTreasureGoal extends $Goal {
    }
    export class $Panda$PandaMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $Fox$Type extends $Enum<$Fox$Type> implements $StringRepresentable {
        static values(): $Fox$Type[];
        static valueOf(name: string): $Fox$Type;
        getId(): number;
        static byName(name: string): $Fox$Type;
        getSerializedName(): string;
        static byId(index: number): $Fox$Type;
        static byBiome(biome: $Holder_<$Biome>): $Fox$Type;
        getRemappedEnumConstantName(): string;
        static RED: $Fox$Type;
        static CODEC: $StringRepresentable$EnumCodec<$Fox$Type>;
        static SNOW: $Fox$Type;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Fox$Type}.
     */
    export type $Fox$Type_ = "red" | "snow";
    export class $Dolphin extends $WaterAnimal {
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Called to update the entity's position/logic.
         */
        playAttackSound(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        gotFish(): boolean;
        setGotFish(gotFish: boolean): void;
        setTreasurePos(pos: $BlockPos_): void;
        /**
         * The speed it takes to move the entity's rotationPitch through the faceEntity method. This is only currently use in wolves.
         */
        getMoistnessLevel(): number;
        getTreasurePos(): $BlockPos;
        setMoisntessLevel(airSupply: number): void;
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
        static ALLOWED_ITEMS: $Predicate<$ItemEntity>;
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
        constructor(entityType: $EntityType_<$Dolphin>, level: $Level_);
        get moistnessLevel(): number;
        set moisntessLevel(value: number);
    }
    export class $Cat$CatTemptGoal extends $TemptGoal {
    }
    export class $Pufferfish extends $AbstractFish {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        setPuffState(puffState: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getPuffState(): number;
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
        static STATE_FULL: number;
        swingTime: number;
        static STATE_MID: number;
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
        static STATE_SMALL: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Pufferfish>, level: $Level_);
    }
    export interface $CatVariant extends RegistryMarked<RegistryTypes.CatVariantTag, RegistryTypes.CatVariant> {}
    export class $Squid$SquidFleeGoal extends $Goal {
    }
    export class $PolarBear$PolarBearAttackPlayersGoal extends $NearestAttackableTargetGoal<$Player> {
    }
    export class $Squid$SquidRandomMovementGoal extends $Goal {
        constructor(squid: $Squid, arg1: $Squid);
    }
    export class $Fox$FoxMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $Turtle$TurtlePathNavigation extends $AmphibiousPathNavigation {
    }
    export class $Fox$FoxBehaviorGoal extends $Goal {
    }
    export class $MushroomCow$MushroomType extends $Enum<$MushroomCow$MushroomType> implements $StringRepresentable {
        static values(): $MushroomCow$MushroomType[];
        static valueOf(name: string): $MushroomCow$MushroomType;
        getSerializedName(): string;
        /**
         * A block state that is rendered on the back of the mooshroom.
         */
        getBlockState(): $BlockState;
        getRemappedEnumConstantName(): string;
        static RED: $MushroomCow$MushroomType;
        static CODEC: $StringRepresentable$EnumCodec<$MushroomCow$MushroomType>;
        static BROWN: $MushroomCow$MushroomType;
        get serializedName(): string;
        get blockState(): $BlockState;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MushroomCow$MushroomType}.
     */
    export type $MushroomCow$MushroomType_ = "red" | "brown";
    export class $Bee extends $Animal implements $NeutralMob, $FlyingAnimal, $BeeAccessor {
        setHivePos(pos: $BlockPos_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasStung(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasHive(): boolean;
        getHivePos(): $BlockPos;
        /**
         * Called frequently, so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetTicksWithoutNectarSinceExitingHive(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFlying(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasSavedFlowerPos(): boolean;
        setSavedFlowerPos(pos: $BlockPos_): void;
        getSavedFlowerPos(): $BlockPos;
        /**
         * Called frequently, so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        dropOffNectar(): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Bee;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFlapping(): boolean;
        /**
         * Called frequently, so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startPersistentAngerTimer(): void;
        setPersistentAngerTarget(target: $UUID_ | null): void;
        getPersistentAngerTarget(): $UUID;
        setStayOutOfHiveCountdown(time: number): void;
        setRemainingPersistentAngerTime(time: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getRemainingPersistentAngerTime(): number;
        getBlacklistedHives(): $List<$BlockPos>;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasNectar(): boolean;
        setHasNectar(hasNectar: boolean): void;
        getRollAmount(partialTick: number): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTravellingTicks(): number;
        getGoalSelector(): $GoalSelector;
        playerDied(player: $Player): void;
        /**
         * Called frequently, so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopBeingAngry(): void;
        addPersistentAngerSaveData(compound: $CompoundTag_): void;
        isAngryAtAllPlayers(level: $Level_): boolean;
        updatePersistentAnger(serverLevel: $ServerLevel, updateAnger: boolean): void;
        /**
         * Called frequently, so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAngry(): boolean;
        isAngryAt(target: $LivingEntity): boolean;
        readPersistentAngerSaveData(level: $Level_, tag: $CompoundTag_): void;
        invokeSetFlag(flagId: number, value: boolean): void;
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
        static TAG_CROPS_GROWN_SINCE_POLLINATION: string;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static TAG_HAS_NECTAR: string;
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
        static TAG_CANNOT_ENTER_HIVE_TICKS: string;
        rotA: number;
        horizontalCollision: boolean;
        static TAG_FLOWER_POS: string;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static TAG_TICKS_SINCE_POLLINATION: string;
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
        static TICKS_PER_FLAP: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static TAG_HIVE_POS: string;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static TAG_HAS_STUNG: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static FLAP_DEGREES_PER_TICK: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Bee>, level: $Level_);
        get flying(): boolean;
        get leashOffset(): $Vec3;
        get flapping(): boolean;
        set stayOutOfHiveCountdown(value: number);
        get blacklistedHives(): $List<$BlockPos>;
        get travellingTicks(): number;
        get angry(): boolean;
    }
    export class $Fox$FoxLookAtPlayerGoal extends $LookAtPlayerGoal {
        static DEFAULT_PROBABILITY: number;
    }
    export class $Fox$FoxPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
    }
    export class $TropicalFish$TropicalFishGroupData extends $AbstractSchoolingFish$SchoolSpawnGroupData {
        leader: $AbstractSchoolingFish;
    }
    export class $Bee$BeeGrowCropGoal extends $Bee$BaseBeeGoal {
    }
    export class $AbstractFish extends $WaterAnimal implements $Bucketable {
        getPickupSound(): $SoundEvent;
        static createAttributes(): $AttributeSupplier$Builder;
        loadFromBucketTag(compound: $CompoundTag_): void;
        setFromBucket(fromBucket: boolean): void;
        saveToBucketTag(stack: $ItemStack_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        fromBucket(): boolean;
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
        constructor(entityType: $EntityType_<$AbstractFish>, level: $Level_);
        get pickupSound(): $SoundEvent;
    }
    export class $AbstractSchoolingFish$SchoolSpawnGroupData implements $SpawnGroupData {
        leader: $AbstractSchoolingFish;
        constructor(leader: $AbstractSchoolingFish);
    }
    export class $Turtle$TurtleGoHomeGoal extends $Goal {
    }
    export class $Turtle$TurtleTravelGoal extends $Goal {
    }
    export class $WaterAnimal extends $PathfinderMob {
        static checkSurfaceWaterAnimalSpawnRules(waterAnimal: $EntityType_<$WaterAnimal>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
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
    export class $Panda$PandaLieOnBackGoal extends $Goal {
    }
    export class $Fox$FoxPounceGoal extends $JumpGoal {
        constructor(arg0: $Fox);
    }
    export class $Bee$BeeHurtByOtherGoal extends $HurtByTargetGoal {
    }
    export class $PolarBear$PolarBearHurtByTargetGoal extends $HurtByTargetGoal {
    }
    export class $Fox$FoxBreedGoal extends $BreedGoal {
    }
    export class $AbstractFish$FishSwimGoal extends $RandomSwimmingGoal {
        static DEFAULT_INTERVAL: number;
    }
    export class $Turtle$TurtleBreedGoal extends $BreedGoal {
    }
    export class $Panda extends $Animal {
        getVariant(): $Panda$Gene;
        roll(eating: boolean): void;
        /**
         * Called to update the entity's position/logic.
         */
        setAttributes(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isEating(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isRolling(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isScared(): boolean;
        sneeze(eating: boolean): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canPerformAction(): boolean;
        eat(eating: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isLazy(): boolean;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Called to update the entity's position/logic.
         */
        playAttackSound(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSitting(): boolean;
        getRollAmount(partialTick: number): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getUnhappyCounter(): number;
        setMainGene(pandaType: $Panda$Gene_): void;
        setHiddenGene(pandaType: $Panda$Gene_): void;
        setUnhappyCounter(eatCounter: number): void;
        setSneezeCounter(eatCounter: number): void;
        setGeneFromParents(father: $Panda, mother: $Panda | null): void;
        getMainGene(): $Panda$Gene;
        getSitAmount(partialTick: number): number;
        getHiddenGene(): $Panda$Gene;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getSneezeCounter(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSneezing(): boolean;
        sit(eating: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isWeak(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isBrown(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isWorried(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPlayful(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnBack(): boolean;
        setOnBack(eating: boolean): void;
        getLieOnBackAmount(partialTick: number): number;
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
        static TOTAL_ROLL_STEPS: number;
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
        rollCounter: number;
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
        constructor(entityType: $EntityType_<$Panda>, level: $Level_);
        get variant(): $Panda$Gene;
        get eating(): boolean;
        get rolling(): boolean;
        get scared(): boolean;
        get lazy(): boolean;
        get sitting(): boolean;
        get sneezing(): boolean;
        get weak(): boolean;
        get brown(): boolean;
        get worried(): boolean;
        get playful(): boolean;
    }
    export class $Fox$PerchAndSearchGoal extends $Fox$FoxBehaviorGoal {
    }
    export class $TropicalFish$Base extends $Enum<$TropicalFish$Base> {
        static values(): $TropicalFish$Base[];
        static valueOf(arg0: string): $TropicalFish$Base;
        static SMALL: $TropicalFish$Base;
        static LARGE: $TropicalFish$Base;
    }
    /**
     * Values that may be interpreted as {@link $TropicalFish$Base}.
     */
    export type $TropicalFish$Base_ = "small" | "large";
    export class $Ocelot extends $Animal {
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        customServerAiStep(): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Ocelot;
        static checkOcelotSpawnRules(ocelot: $EntityType_<$Ocelot>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        static SPRINT_SPEED_MOD: number;
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
        static WALK_SPEED_MOD: number;
        zo: number;
        walkDist: number;
        static CROUCH_SPEED_MOD: number;
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
        constructor(entityType: $EntityType_<$Ocelot>, level: $Level_);
        get leashOffset(): $Vec3;
    }
    export class $Fox$FoxEatBerriesGoal extends $MoveToBlockGoal {
        speedModifier: number;
        constructor(speedModifier: $Fox, arg1: number, searchRange: number, verticalSearchRange: number);
    }
    export class $Panda$PandaSitGoal extends $Goal {
    }
    export class $Panda$PandaSneezeGoal extends $Goal {
    }
    export class $Bee$BeeWanderGoal extends $Goal {
    }
    export class $Salmon extends $AbstractSchoolingFish {
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
        constructor(entityType: $EntityType_<$Salmon>, level: $Level_);
    }
    export interface $FrogVariant extends RegistryMarked<RegistryTypes.FrogVariantTag, RegistryTypes.FrogVariant> {}
    export class $Ocelot$OcelotAvoidEntityGoal<T extends $LivingEntity> extends $AvoidEntityGoal<T> {
    }
    export class $FlyingAnimal {
    }
    export interface $FlyingAnimal {
        isFlying(): boolean;
        get flying(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FlyingAnimal}.
     */
    export type $FlyingAnimal_ = (() => boolean);
    export class $Cat$CatRelaxOnOwnerGoal extends $Goal {
    }
    export class $Turtle extends $Animal {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        setHomePos(homePos: $BlockPos_): void;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isLayingEgg(): boolean;
        static checkTurtleSpawnRules(turtle: $EntityType_<$Turtle>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasEgg(): boolean;
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
        static BABY_ON_LAND_SELECTOR: $Predicate<$LivingEntity>;
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
        constructor(entityType: $EntityType_<$Turtle>, level: $Level_);
        set homePos(value: $BlockPos_);
        get layingEgg(): boolean;
    }
    export class $Bee$BeeEnterHiveGoal extends $Bee$BaseBeeGoal {
    }
    export class $Bee$BeeLookControl extends $LookControl {
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
    }
    export class $Bee$BeePollinateGoal extends $Bee$BaseBeeGoal {
    }
    export class $Turtle$TurtlePanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
    }
    export class $AbstractFish$FishMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $TropicalFish$Variant extends $Record {
        pattern(): $TropicalFish$Pattern;
        patternColor(): $DyeColor;
        getPackedId(): number;
        baseColor(): $DyeColor;
        static CODEC: $Codec<$TropicalFish$Variant>;
        constructor(id: number);
        constructor(arg0: $TropicalFish$Pattern_, arg1: $DyeColor_, arg2: $DyeColor_);
        get packedId(): number;
    }
    /**
     * Values that may be interpreted as {@link $TropicalFish$Variant}.
     */
    export type $TropicalFish$Variant_ = { patternColor?: $DyeColor_, pattern?: $TropicalFish$Pattern_, baseColor?: $DyeColor_,  } | [patternColor?: $DyeColor_, pattern?: $TropicalFish$Pattern_, baseColor?: $DyeColor_, ];
    export class $Rabbit extends $Animal implements $VariantHolder<$Rabbit$Variant> {
        getVariant(): $Rabbit$Variant;
        setVariant(variant: $Rabbit$Variant_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Called frequently, so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playAttackSound(): void;
        /**
         * Called frequently, so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        customServerAiStep(): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Rabbit;
        static checkRabbitSpawnRules(rabbit: $EntityType_<$Rabbit>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        setSpeedModifier(speedModifier: number): void;
        /**
         * Called frequently, so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startJumping(): void;
        getJumpCompletion(partialTick: number): number;
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
        static FLEE_SPEED_MOD: number;
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
        static ATTACK_SPEED_MOD: number;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BREED_SPEED_MOD: number;
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
        static STROLL_SPEED_MOD: number;
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
        static FOLLOW_SPEED_MOD: number;
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
        constructor(entityType: $EntityType_<$Rabbit>, level: $Level_);
        get leashOffset(): $Vec3;
        set speedModifier(value: number);
    }
    export class $Turtle$TurtleRandomStrollGoal extends $RandomStrollGoal {
        static DEFAULT_INTERVAL: number;
    }
    export class $Bee$BeeAttackGoal extends $MeleeAttackGoal {
    }
    export class $CatVariant extends $Record {
        static bootstrap(registry: $Registry<$CatVariant_>): $CatVariant;
        texture(): $ResourceLocation;
        static RED: $ResourceKey<$CatVariant>;
        static RAGDOLL: $ResourceKey<$CatVariant>;
        static JELLIE: $ResourceKey<$CatVariant>;
        static TABBY: $ResourceKey<$CatVariant>;
        static WHITE: $ResourceKey<$CatVariant>;
        static ALL_BLACK: $ResourceKey<$CatVariant>;
        static BRITISH_SHORTHAIR: $ResourceKey<$CatVariant>;
        static BLACK: $ResourceKey<$CatVariant>;
        static SIAMESE: $ResourceKey<$CatVariant>;
        static CALICO: $ResourceKey<$CatVariant>;
        static PERSIAN: $ResourceKey<$CatVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$CatVariant>>;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CatVariant}.
     */
    export type $CatVariant_ = RegistryTypes.CatVariant | { texture?: $ResourceLocation_,  } | [texture?: $ResourceLocation_, ];
    export class $Rabbit$RabbitPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
    }
    export class $Turtle$TurtleGoToWaterGoal extends $MoveToBlockGoal {
        speedModifier: number;
    }
    export class $Bee$BeeLocateHiveGoal extends $Bee$BaseBeeGoal {
    }
    export class $Wolf$WolfAvoidEntityGoal<T extends $LivingEntity> extends $AvoidEntityGoal<T> {
    }
    export class $Fox$FaceplantGoal extends $Goal {
    }
    export class $Ocelot$OcelotTemptGoal extends $TemptGoal {
    }
    export class $Fox$FoxFloatGoal extends $FloatGoal {
    }
    export class $Bee$BeeGoToKnownFlowerGoal extends $Bee$BaseBeeGoal {
    }
    export class $Rabbit$RabbitGroupData extends $AgeableMob$AgeableMobGroupData {
        variant: $Rabbit$Variant;
        constructor(variant: $Rabbit$Variant_);
    }
    export class $Pig extends $Animal implements $ItemSteerable, $Saddleable {
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Pig;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSaddleable(): boolean;
        equipSaddle(stack: $ItemStack_, soundSource: $SoundSource_ | null): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSaddled(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        boost(): boolean;
        getSaddleSoundEvent(): $SoundEvent;
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
        constructor(entityType: $EntityType_<$Pig>, level: $Level_);
        get leashOffset(): $Vec3;
        get saddleable(): boolean;
        get saddled(): boolean;
        get saddleSoundEvent(): $SoundEvent;
    }
    export interface $WolfVariant extends RegistryMarked<RegistryTypes.WolfVariantTag, RegistryTypes.WolfVariant> {}
    export class $Sheep extends $Animal implements $Shearable {
        /**
         * Sets the wool color of this sheep
         */
        setColor(dyeColor: $DyeColor_): void;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        /**
         * Makes a sheep sheared if set to `true`.
         */
        setSheared(sheared: boolean): void;
        /**
         * Returns `true` if a sheep's wool has been sheared.
         */
        readyForShearing(): boolean;
        /**
         * Returns `true` if a sheep's wool has been sheared.
         */
        isSheared(): boolean;
        static getColor(dyeColor: $DyeColor_): number;
        /**
         * Gets the wool color of this sheep.
         */
        getColor(): $DyeColor;
        shear(category: $SoundSource_): void;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Sheep;
        static getRandomSheepColor(random: $RandomSource): $DyeColor;
        getHeadEatAngleScale(partialTick: number): number;
        getHeadEatPositionScale(partialTick: number): number;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        spawnShearedDrop(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
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
        constructor(entityType: $EntityType_<$Sheep>, level: $Level_);
        get defaultLootTable(): $ResourceKey<$LootTable>;
    }
    export class $TropicalFish$Pattern extends $Enum<$TropicalFish$Pattern> implements $StringRepresentable {
        base(): $TropicalFish$Base;
        static values(): $TropicalFish$Pattern[];
        static valueOf(arg0: string): $TropicalFish$Pattern;
        displayName(): $Component;
        getSerializedName(): string;
        static byId(packedId: number): $TropicalFish$Pattern;
        getPackedId(): number;
        getRemappedEnumConstantName(): string;
        static CLAYFISH: $TropicalFish$Pattern;
        static CODEC: $Codec<$TropicalFish$Pattern>;
        static BLOCKFISH: $TropicalFish$Pattern;
        static GLITTER: $TropicalFish$Pattern;
        static SUNSTREAK: $TropicalFish$Pattern;
        static SPOTTY: $TropicalFish$Pattern;
        static BRINELY: $TropicalFish$Pattern;
        static STRIPEY: $TropicalFish$Pattern;
        static BETTY: $TropicalFish$Pattern;
        static FLOPPER: $TropicalFish$Pattern;
        static DASHER: $TropicalFish$Pattern;
        static KOB: $TropicalFish$Pattern;
        static SNOOPER: $TropicalFish$Pattern;
        get serializedName(): string;
        get packedId(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TropicalFish$Pattern}.
     */
    export type $TropicalFish$Pattern_ = "kob" | "sunstreak" | "snooper" | "dasher" | "brinely" | "spotty" | "flopper" | "stripey" | "glitter" | "blockfish" | "betty" | "clayfish";
    export class $Parrot$ParrotWanderGoal extends $WaterAvoidingRandomFlyingGoal {
        static PROBABILITY: number;
        static DEFAULT_INTERVAL: number;
    }
    export class $Cat$CatAvoidEntityGoal<T extends $LivingEntity> extends $AvoidEntityGoal<T> {
    }
    export class $Dolphin$DolphinSwimWithPlayerGoal extends $Goal {
    }
    export class $Fox$SeekShelterGoal extends $FleeSunGoal {
    }
    export class $Rabbit$Variant extends $Enum<$Rabbit$Variant> implements $StringRepresentable {
        static values(): $Rabbit$Variant[];
        static valueOf(arg0: string): $Rabbit$Variant;
        id(): number;
        getSerializedName(): string;
        static byId(id: number): $Rabbit$Variant;
        getRemappedEnumConstantName(): string;
        static SALT: $Rabbit$Variant;
        static WHITE_SPLOTCHED: $Rabbit$Variant;
        static GOLD: $Rabbit$Variant;
        static WHITE: $Rabbit$Variant;
        static CODEC: $Codec<$Rabbit$Variant>;
        static EVIL: $Rabbit$Variant;
        static BLACK: $Rabbit$Variant;
        static BROWN: $Rabbit$Variant;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Rabbit$Variant}.
     */
    export type $Rabbit$Variant_ = "brown" | "white" | "black" | "white_splotched" | "gold" | "salt" | "evil";
    export class $Rabbit$RabbitMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $Rabbit$RaidGardenGoal extends $MoveToBlockGoal {
        speedModifier: number;
    }
    export class $PolarBear$PolarBearMeleeAttackGoal extends $MeleeAttackGoal {
    }
    export class $Bee$BeeGoToHiveGoal extends $Bee$BaseBeeGoal {
        static MAX_TRAVELLING_TICKS: number;
    }
    export class $Wolf extends $TamableAnimal implements $NeutralMob, $VariantHolder<$Holder<$WolfVariant>> {
        getVariant(): $Holder<$WolfVariant>;
        setVariant(variant: $Holder_<$WolfVariant>): void;
        getTexture(): $ResourceLocation;
        /**
         * True if the wolf is wet
         */
        isWet(): boolean;
        /**
         * True if the wolf is wet
         */
        hasArmor(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Wolf;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startPersistentAngerTimer(): void;
        setPersistentAngerTarget(target: $UUID_ | null): void;
        getPersistentAngerTarget(): $UUID;
        setRemainingPersistentAngerTime(time: number): void;
        /**
         * The speed it takes to move the entity's rotationPitch through the faceEntity method. This is only currently use in wolves.
         */
        getRemainingPersistentAngerTime(): number;
        static checkWolfSpawnRules(wolf: $EntityType_<$Wolf>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        setCollarColor(collarColor: $DyeColor_): void;
        getCollarColor(): $DyeColor;
        /**
         * True if the wolf is wet
         */
        isInterested(): boolean;
        getHeadRollAngle(partialTicks: number): number;
        setIsInterested(isInterested: boolean): void;
        getBodyRollAngle(partialTicks: number, offset: number): number;
        /**
         * Returns the volume for the sounds this mob makes.
         */
        getTailAngle(): number;
        getWetShade(partialTicks: number): number;
        playerDied(player: $Player): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopBeingAngry(): void;
        addPersistentAngerSaveData(compound: $CompoundTag_): void;
        isAngryAtAllPlayers(level: $Level_): boolean;
        updatePersistentAnger(serverLevel: $ServerLevel, updateAnger: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        /**
         * True if the wolf is wet
         */
        isAngry(): boolean;
        isAngryAt(entity: $LivingEntity): boolean;
        readPersistentAngerSaveData(level: $Level_, tag: $CompoundTag_): void;
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
        static PREY_SELECTOR: $Predicate<$LivingEntity>;
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
        constructor(entityType: $EntityType_<$Wolf>, level: $Level_);
        get texture(): $ResourceLocation;
        get wet(): boolean;
        get leashOffset(): $Vec3;
        get interested(): boolean;
        get tailAngle(): number;
        get angry(): boolean;
    }
    export class $Fox$FoxAlertableEntitiesSelector implements $Predicate<$LivingEntity> {
        test(entity: $LivingEntity): boolean;
        or(arg0: $Predicate_<$LivingEntity>): $Predicate<$LivingEntity>;
        negate(): $Predicate<$LivingEntity>;
        and(arg0: $Predicate_<$LivingEntity>): $Predicate<$LivingEntity>;
        constructor(arg0: $Fox);
    }
    export class $Rabbit$RabbitAvoidEntityGoal<T extends $LivingEntity> extends $AvoidEntityGoal<T> {
    }
    export class $Fox$FoxMeleeAttackGoal extends $MeleeAttackGoal {
    }
    export class $Panda$Gene extends $Enum<$Panda$Gene> implements $StringRepresentable {
        static values(): $Panda$Gene[];
        static valueOf(name: string): $Panda$Gene;
        getId(): number;
        static getRandom(random: $RandomSource): $Panda$Gene;
        static byName(name: string): $Panda$Gene;
        isRecessive(): boolean;
        getSerializedName(): string;
        static byId(index: number): $Panda$Gene;
        getRemappedEnumConstantName(): string;
        static WEAK: $Panda$Gene;
        static CODEC: $StringRepresentable$EnumCodec<$Panda$Gene>;
        static WORRIED: $Panda$Gene;
        static LAZY: $Panda$Gene;
        static PLAYFUL: $Panda$Gene;
        static AGGRESSIVE: $Panda$Gene;
        static NORMAL: $Panda$Gene;
        static BROWN: $Panda$Gene;
        get id(): number;
        get recessive(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Panda$Gene}.
     */
    export type $Panda$Gene_ = "normal" | "lazy" | "worried" | "playful" | "brown" | "weak" | "aggressive";
    export class $Fox$StalkPreyGoal extends $Goal {
    }
    export class $AbstractGolem extends $PathfinderMob {
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
    export class $MushroomCow extends $Cow implements $Shearable, $VariantHolder<$MushroomCow$MushroomType> {
        getVariant(): $MushroomCow$MushroomType;
        setVariant(variant: $MushroomCow$MushroomType_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        readyForShearing(): boolean;
        shear(category: $SoundSource_): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $MushroomCow;
        static checkMushroomSpawnRules(mushroomCow: $EntityType_<$MushroomCow>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, randomSource: $RandomSource): boolean;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        spawnShearedDrop(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
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
        constructor(entityType: $EntityType_<$MushroomCow>, level: $Level_);
    }
    export class $Wolf$WolfPackData extends $AgeableMob$AgeableMobGroupData {
        type: $Holder<$WolfVariant>;
        constructor(type: $Holder_<$WolfVariant>);
    }
    export class $Panda$PandaAttackGoal extends $MeleeAttackGoal {
    }
    export class $Turtle$TurtleLayEggGoal extends $MoveToBlockGoal {
        speedModifier: number;
    }
    export class $Rabbit$RabbitJumpControl extends $JumpControl {
        canJump(): boolean;
        setCanJump(canJump: boolean): void;
        wantJump(): boolean;
        constructor(rabbit: $Rabbit);
    }
    export class $Panda$PandaBreedGoal extends $BreedGoal {
    }
    export class $Fox$SleepGoal extends $Fox$FoxBehaviorGoal {
    }
    export class $Panda$PandaRollGoal extends $Goal {
    }
    export class $TropicalFish extends $AbstractSchoolingFish implements $VariantHolder<$TropicalFish$Pattern> {
        getVariant(): $TropicalFish$Pattern;
        static getPattern(variantId: number): $TropicalFish$Pattern;
        static checkTropicalFishSpawnRules(tropicalFish: $EntityType_<$TropicalFish>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        setVariant(variant: $TropicalFish$Pattern_): void;
        static getPredefinedName(variantId: number): string;
        getBaseColor(): $DyeColor;
        static getBaseColor(variantId: number): $DyeColor;
        static getPatternColor(variantId: number): $DyeColor;
        getPatternColor(): $DyeColor;
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
        static COMMON_VARIANTS: $List<$TropicalFish$Variant>;
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
        static BUCKET_VARIANT_TAG: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$TropicalFish>, level: $Level_);
    }
    export class $Parrot$Variant extends $Enum<$Parrot$Variant> implements $StringRepresentable {
        static values(): $Parrot$Variant[];
        static valueOf(arg0: string): $Parrot$Variant;
        getId(): number;
        getSerializedName(): string;
        static byId(id: number): $Parrot$Variant;
        getRemappedEnumConstantName(): string;
        static GRAY: $Parrot$Variant;
        static CODEC: $Codec<$Parrot$Variant>;
        static BLUE: $Parrot$Variant;
        static YELLOW_BLUE: $Parrot$Variant;
        static RED_BLUE: $Parrot$Variant;
        static GREEN: $Parrot$Variant;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Parrot$Variant}.
     */
    export type $Parrot$Variant_ = "red_blue" | "blue" | "green" | "yellow_blue" | "gray";
    export class $SnowGolem extends $AbstractGolem implements $Shearable, $RangedAttackMob {
        /**
         * Return whether this entity should be rendered as on fire.
         */
        readyForShearing(): boolean;
        shear(category: $SoundSource_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Attack the specified entity using a ranged attack.
         */
        performRangedAttack(target: $LivingEntity, distanceFactor: number): void;
        setPumpkin(pumpkinEquipped: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasPumpkin(): boolean;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        spawnShearedDrop(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
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
        constructor(entityType: $EntityType_<$SnowGolem>, level: $Level_);
        get leashOffset(): $Vec3;
        set pumpkin(value: boolean);
    }
    export class $Panda$PandaAvoidGoal<T extends $LivingEntity> extends $AvoidEntityGoal<T> {
    }
    export class $FrogVariant extends $Record {
        static bootstrap(registry: $Registry<$FrogVariant_>): $FrogVariant;
        texture(): $ResourceLocation;
        static TEMPERATE: $ResourceKey<$FrogVariant>;
        static COLD: $ResourceKey<$FrogVariant>;
        static WARM: $ResourceKey<$FrogVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$FrogVariant>>;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $FrogVariant}.
     */
    export type $FrogVariant_ = RegistryTypes.FrogVariant | { texture?: $ResourceLocation_,  } | [texture?: $ResourceLocation_, ];
    export class $Squid extends $WaterAnimal {
        static createAttributes(): $AttributeSupplier$Builder;
        setMovementVector(tx: number, ty: number, tz: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasMovementVector(): boolean;
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
        constructor(entityType: $EntityType_<$Squid>, level: $Level_);
    }
    export class $Parrot extends $ShoulderRidingEntity implements $VariantHolder<$Parrot$Variant>, $FlyingAnimal {
        getVariant(): $Parrot$Variant;
        setVariant(variant: $Parrot$Variant_): void;
        static getPitch(random: $RandomSource): number;
        /**
         * If Animal, checks if the age timer is negative
         */
        isFlying(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        static imitateNearbyMobs(level: $Level_, parrot: $Entity): boolean;
        getAmbientSound(): $SoundEvent;
        static getAmbient(level: $Level_, random: $RandomSource): $SoundEvent;
        static checkParrotSpawnRules(parrot: $EntityType_<$Parrot>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * If Animal, checks if the age timer is negative
         */
        isPartyParrot(): boolean;
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
        flap: number;
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
        oFlapSpeed: number;
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
        flapSpeed: number;
        xOld: number;
        wasInPowderSnow: boolean;
        oFlap: number;
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
        constructor(entityType: $EntityType_<$Parrot>, level: $Level_);
        get flying(): boolean;
        get leashOffset(): $Vec3;
        get ambientSound(): $SoundEvent;
        get partyParrot(): boolean;
    }
    export class $Fox$FoxGroupData extends $AgeableMob$AgeableMobGroupData {
        type: $Fox$Type;
        constructor(type: $Fox$Type_);
    }
    export class $Panda$PandaHurtByTargetGoal extends $HurtByTargetGoal {
    }
    export class $Bee$BaseBeeGoal extends $Goal {
    }
    export class $Bucketable {
        static bucketMobPickup<T extends $LivingEntity>(player: $Player, hand: $InteractionHand_, entity: T): ($InteractionResult) | undefined;
        /**
         * @deprecated
         */
        static saveDefaultDataToBucketTag(mob: $Mob, bucket: $ItemStack_): void;
        /**
         * @deprecated
         */
        static loadDefaultDataFromBucketTag(mob: $Mob, tag: $CompoundTag_): void;
    }
    export interface $Bucketable {
        getPickupSound(): $SoundEvent;
        loadFromBucketTag(tag: $CompoundTag_): void;
        setFromBucket(fromBucket: boolean): void;
        saveToBucketTag(stack: $ItemStack_): void;
        getBucketItemStack(): $ItemStack;
        fromBucket(): boolean;
        get pickupSound(): $SoundEvent;
        get bucketItemStack(): $ItemStack;
    }
    export class $ShoulderRidingEntity extends $TamableAnimal {
        setEntityOnShoulder(player: $ServerPlayer): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSitOnShoulder(): boolean;
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
        set entityOnShoulder(value: $ServerPlayer);
    }
    export class $Fox$FoxLookControl extends $LookControl {
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
        constructor(arg0: $Fox);
    }
    export class $Turtle$TurtleMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $Bee$BeeBecomeAngryTargetGoal extends $NearestAttackableTargetGoal<$Player> {
    }
    export class $Dolphin$PlayWithItemsGoal extends $Goal {
    }
    export class $Panda$PandaPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
    }
    export class $IronGolem extends $AbstractGolem implements $NeutralMob {
        setPlayerCreated(offeringFlower: boolean): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        getCrackiness(): $Crackiness$Level;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPlayerCreated(): boolean;
        offerFlower(offeringFlower: boolean): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getOfferFlowerTick(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startPersistentAngerTimer(): void;
        setPersistentAngerTarget(target: $UUID_ | null): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getAttackAnimationTick(): number;
        getPersistentAngerTarget(): $UUID;
        setRemainingPersistentAngerTime(time: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getRemainingPersistentAngerTime(): number;
        playerDied(player: $Player): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopBeingAngry(): void;
        addPersistentAngerSaveData(compound: $CompoundTag_): void;
        isAngryAtAllPlayers(level: $Level_): boolean;
        updatePersistentAnger(serverLevel: $ServerLevel, updateAnger: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAngry(): boolean;
        isAngryAt(entity: $LivingEntity): boolean;
        readPersistentAngerSaveData(level: $Level_, tag: $CompoundTag_): void;
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
        constructor(entityType: $EntityType_<$IronGolem>, level: $Level_);
        get leashOffset(): $Vec3;
        get crackiness(): $Crackiness$Level;
        get offerFlowerTick(): number;
        get attackAnimationTick(): number;
        get angry(): boolean;
    }
}
