import { $Level_ } from "@package/net/minecraft/world/level";
import { $AnimalPanic, $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $BodyRotationControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $AnimationState, $EntityDimensions, $EntityType_, $Entity$RemovalReason, $Saddleable, $PortalProcessor, $Pose_, $AgeableMob, $WalkAnimationState, $PlayerRideableJumping } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Brain$Provider } from "@package/net/minecraft/world/entity/ai";

declare module "@package/net/minecraft/world/entity/animal/camel" {
    export class $Camel$CamelMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $Camel$CamelBodyRotationControl extends $BodyRotationControl {
    }
    export class $Camel$CamelLookControl extends $LookControl {
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
    }
    export class $CamelAi {
        static brainProvider(): $Brain$Provider<$Camel>;
        static updateActivity(camel: $Camel): void;
        static getTemptations(): $Predicate<$ItemStack>;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $CamelAi$CamelPanic extends $AnimalPanic<$Camel> {
        static DEFAULT_DURATION: number;
        constructor(arg0: number);
    }
    export class $CamelAi$RandomSitting extends $Behavior<$Camel> {
        static DEFAULT_DURATION: number;
        constructor(minimalPoseSeconds: number);
    }
    export class $Camel extends $AbstractHorse implements $PlayerRideableJumping, $Saddleable {
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDashing(): boolean;
        setDashing(dashing: boolean): void;
        /**
         * Called to update the entity's position/logic.
         */
        sitDown(): void;
        /**
         * Called to update the entity's position/logic.
         */
        standUp(): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Camel;
        resetLastPoseChangeTick(lastPoseChangeTick: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCamelVisuallySitting(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCamelSitting(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        refuseToMove(): boolean;
        getPoseTime(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canCamelChangePose(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInPoseTransition(): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        standUpInstantly(): void;
        static MAX_WEARING_ARMOR_CHANCE: number;
        sitAnimationState: $AnimationState;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_HEAD_Y_ROT: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        sitPoseAnimationState: $AnimationState;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static LAST_POSE_CHANGE_TICK: $EntityDataAccessor<number>;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
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
        tailCounter: number;
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
        static DASH: $EntityDataAccessor<boolean>;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
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
        static BABY_SCALE: number;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        dashAnimationState: $AnimationState;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        idleAnimationState: $AnimationState;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sitUpAnimationState: $AnimationState;
        sprintCounter: number;
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
        static DASH_COOLDOWN_TICKS: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        deathScore: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Camel>, level: $Level_);
        get camelVisuallySitting(): boolean;
        get camelSitting(): boolean;
        get poseTime(): number;
        get inPoseTransition(): boolean;
    }
}
