import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $AnimationState, $EntityDimensions, $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Pose_, $WalkAnimationState, $Entity } from "@package/net/minecraft/world/entity";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Comparator, $UUID_, $List_, $OptionalInt } from "@package/java/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $ToDoubleFunction_, $Predicate_, $Function_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Holder_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $Monster } from "@package/net/minecraft/world/entity/monster";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/monster/warden" {
    export class $Warden$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        onDataChanged(): void;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $WardenAi {
        static updateActivity(warden: $Warden): void;
        static setDisturbanceLocation(warden: $Warden, disturbanceLocation: $BlockPos_): void;
        static setDigCooldown(entity: $LivingEntity): void;
        static DIGGING_COOLDOWN: number;
        static ROAR_DURATION: number;
        static EMERGE_DURATION: number;
        constructor();
        static set digCooldown(value: $LivingEntity);
    }
    export class $WardenSpawnTracker {
        reset(): void;
        tick(): void;
        static tryWarn(level: $ServerLevel, pos: $BlockPos_, player: $ServerPlayer): $OptionalInt;
        getWarningLevel(): number;
        setWarningLevel(warningLevel: number): void;
        static CODEC: $Codec<$WardenSpawnTracker>;
        static MAX_WARNING_LEVEL: number;
        constructor(ticksSinceLastWarning: number, warningLevel: number, cooldownTicks: number);
    }
    export class $AngerLevel extends $Enum<$AngerLevel> {
        static values(): $AngerLevel[];
        static valueOf(arg0: string): $AngerLevel;
        static byAnger(anger: number): $AngerLevel;
        getMinimumAnger(): number;
        getAmbientSound(): $SoundEvent;
        isAngry(): boolean;
        getListeningSound(): $SoundEvent;
        static CALM: $AngerLevel;
        static AGITATED: $AngerLevel;
        static ANGRY: $AngerLevel;
        get minimumAnger(): number;
        get ambientSound(): $SoundEvent;
        get angry(): boolean;
        get listeningSound(): $SoundEvent;
    }
    /**
     * Values that may be interpreted as {@link $AngerLevel}.
     */
    export type $AngerLevel_ = "calm" | "agitated" | "angry";
    export class $Warden extends $Monster implements $VibrationSystem {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        clearAnger(entity: $Entity): void;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getClientAngerLevel(): number;
        static applyDarknessAround(level: $ServerLevel, pos: $Vec3_, source: $Entity | null, radius: number): void;
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        getTendrilAnimation(partialTick: number): number;
        setAttackTarget(attackTarget: $LivingEntity): void;
        getEntityAngryAt(): ($LivingEntity) | undefined;
        getAngerLevel(): $AngerLevel;
        canTargetEntity(vehicle: $Entity | null): boolean;
        getHeartAnimation(partialTick: number): number;
        increaseAngerAt(entity: $Entity | null): void;
        increaseAngerAt(entity: $Entity | null, offset: number, playListeningSound: boolean): void;
        getAngerManagement(): $AngerManagement;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        sonicBoomAnimationState: $AnimationState;
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
        diggingAnimationState: $AnimationState;
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
        sniffAnimationState: $AnimationState;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        emergeAnimationState: $AnimationState;
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
        attackAnimationState: $AnimationState;
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
        roarAnimationState: $AnimationState;
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
        constructor(entityType: $EntityType_<$Monster>, level: $Level_);
        get clientAngerLevel(): number;
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
        set attackTarget(value: $LivingEntity);
        get entityAngryAt(): ($LivingEntity) | undefined;
        get angerLevel(): $AngerLevel;
        get angerManagement(): $AngerManagement;
    }
    export class $AngerManagement {
        tick(level: $ServerLevel, predicate: $Predicate_<$Entity>): void;
        static codec(filter: $Predicate_<$Entity>): $Codec<$AngerManagement>;
        clearAnger(entity: $Entity): void;
        getActiveEntity(): ($LivingEntity) | undefined;
        getActiveAnger(entity: $Entity | null): number;
        increaseAnger(entity: $Entity, offset: number): number;
        constructor(filter: $Predicate_<$Entity>, angerByUuid: $List_<$Pair<$UUID_, number>>);
        get activeEntity(): ($LivingEntity) | undefined;
    }
    export class $AngerManagement$Sorter extends $Record implements $Comparator<$Entity> {
        reversed(): $Comparator<$Entity>;
        thenComparing<U>(arg0: $Function_<$Entity, U>, arg1: $Comparator<U>): $Comparator<$Entity>;
        thenComparing(arg0: $Comparator<$Entity>): $Comparator<$Entity>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$Entity, U>): $Comparator<$Entity>;
        thenComparingInt(arg0: $ToIntFunction_<$Entity>): $Comparator<$Entity>;
        thenComparingLong(arg0: $ToLongFunction_<$Entity>): $Comparator<$Entity>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$Entity>): $Comparator<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $AngerManagement$Sorter}.
     */
    export type $AngerManagement$Sorter_ = { angerManagement?: $AngerManagement,  } | [angerManagement?: $AngerManagement, ];
}
