import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $AnimalPanic, $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $AnimationState, $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $WalkAnimationState, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Brain$Provider } from "@package/net/minecraft/world/entity/ai";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/animal/armadillo" {
    export class $Armadillo$ArmadilloState extends $Enum<$Armadillo$ArmadilloState> implements $StringRepresentable {
        static values(): $Armadillo$ArmadilloState[];
        static valueOf(name: string): $Armadillo$ArmadilloState;
        static fromName(name: string): $Armadillo$ArmadilloState;
        getSerializedName(): string;
        shouldHideInShell(inStateTicks: number): boolean;
        animationDuration(): number;
        isThreatened(): boolean;
        getRemappedEnumConstantName(): string;
        static SCARED: $Armadillo$ArmadilloState;
        static ROLLING: $Armadillo$ArmadilloState;
        static IDLE: $Armadillo$ArmadilloState;
        static UNROLLING: $Armadillo$ArmadilloState;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Armadillo$ArmadilloState>;
        get serializedName(): string;
        get threatened(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Armadillo$ArmadilloState}.
     */
    export type $Armadillo$ArmadilloState_ = "idle" | "rolling" | "scared" | "unrolling";
    export class $Armadillo extends $Animal {
        getState(): $Armadillo$ArmadilloState;
        /**
         * Called to update the entity's position/logic.
         */
        rollUp(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isScared(): boolean;
        isScaredBy(entity: $LivingEntity): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        rollOut(): void;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldSwitchToScaredState(): boolean;
        static checkArmadilloSpawnRules(entityType: $EntityType_<$Armadillo>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldHideInShell(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canStayRolledUp(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        brushOffScute(): boolean;
        switchToState(state: $Armadillo$ArmadilloState_): void;
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
        rollUpAnimationState: $AnimationState;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static SCARE_CHECK_INTERVAL: number;
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
        static BABY_SCALE: number;
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
        rollOutAnimationState: $AnimationState;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        peekAnimationState: $AnimationState;
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
        static MAX_HEAD_ROTATION_EXTENT: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Animal>, level: $Level_);
        get state(): $Armadillo$ArmadilloState;
        get scared(): boolean;
    }
    export class $ArmadilloAi$ArmadilloPanic extends $AnimalPanic<$Armadillo> {
        static DEFAULT_DURATION: number;
        constructor(arg0: number);
    }
    export class $ArmadilloAi$ArmadilloBallUp extends $Behavior<$Armadillo> {
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $ArmadilloAi {
        static brainProvider(): $Brain$Provider<$Armadillo>;
        static updateActivity(armadillo: $Armadillo): void;
        static getTemptations(): $Predicate<$ItemStack>;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
}
