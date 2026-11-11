import { $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $AnimationState, $EntityDimensions, $EntityType_, $Entity$RemovalReason, $PortalProcessor, $Pose_, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate, $IntFunction } from "@package/java/util/function";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/animal/sniffer" {
    export class $SnifferAi$Digging extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
    }
    export class $SnifferAi$Sniffing extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
    }
    export class $SnifferAi$Searching extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
    }
    export class $SnifferAi$Scenting extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
    }
    export class $SnifferAi$FeelingHappy extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
    }
    export class $SnifferAi$FinishedDigging extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
    }
    export class $SnifferAi {
        static getTemptations(): $Predicate<$ItemStack>;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $Sniffer extends $Animal {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        transitionTo(state: $Sniffer$State_): $Sniffer;
        onDiggingComplete(storeExploredPosition: boolean): $Sniffer;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSearching(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canPlayDiggingSound(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSniff(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isTempted(): boolean;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        feelingHappyAnimationState: $AnimationState;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        risingAnimationState: $AnimationState;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        sniffingAnimationState: $AnimationState;
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
        scentingAnimationState: $AnimationState;
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
        constructor(entityType: $EntityType_<$Animal>, level: $Level_);
        get searching(): boolean;
        get tempted(): boolean;
    }
    export class $Sniffer$State extends $Enum<$Sniffer$State> {
        static values(): $Sniffer$State[];
        static valueOf(arg0: string): $Sniffer$State;
        id(): number;
        static SNIFFING: $Sniffer$State;
        static IDLING: $Sniffer$State;
        static SCENTING: $Sniffer$State;
        static BY_ID: $IntFunction<$Sniffer$State>;
        static DIGGING: $Sniffer$State;
        static RISING: $Sniffer$State;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Sniffer$State>;
        static FEELING_HAPPY: $Sniffer$State;
        static SEARCHING: $Sniffer$State;
    }
    /**
     * Values that may be interpreted as {@link $Sniffer$State}.
     */
    export type $Sniffer$State_ = "idling" | "feeling_happy" | "scenting" | "sniffing" | "searching" | "digging" | "rising";
}
