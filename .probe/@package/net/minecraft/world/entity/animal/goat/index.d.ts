import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $WalkAnimationState, $EntityDimensions, $EntityType_, $Entity$RemovalReason, $MobSpawnType_, $PortalProcessor, $Pose_, $AgeableMob } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/net/minecraft/world/entity/animal/goat" {
    export class $GoatAi {
        static updateActivity(brain: $Goat): void;
        static getTemptations(): $Predicate<$ItemStack>;
        static MAX_LONG_JUMP_WIDTH: number;
        static RAM_PREPARE_TIME: number;
        static ADULT_RAM_KNOCKBACK_FORCE: number;
        static RAM_MIN_DISTANCE: number;
        static MAX_LONG_JUMP_HEIGHT: number;
        static MAX_JUMP_VELOCITY_MULTIPLIER: number;
        static RAM_MAX_DISTANCE: number;
        static BABY_RAM_KNOCKBACK_FORCE: number;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $Goat extends $Animal {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Goat;
        static checkGoatSpawnRules(goat: $EntityType_<$Animal>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasRightHorn(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeHorns(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isScreamingGoat(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasLeftHorn(): boolean;
        setScreamingGoat(isScreamingGoat: boolean): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRammingXHeadRot(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        addHorns(): void;
        createHorn(): $ItemStack;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dropHorn(): boolean;
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
        static LONG_JUMPING_DIMENSIONS: $EntityDimensions;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        static GOAT_FALL_DAMAGE_REDUCTION: number;
        xRotO: number;
        static UNIHORN_CHANCE: number;
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
        static GOAT_SCREAMING_CHANCE: number;
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
        constructor(entityType: $EntityType_<$Goat>, level: $Level_);
        get rammingXHeadRot(): number;
    }
}
