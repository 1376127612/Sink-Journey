import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $WalkAnimationState, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $GameEventListener, $GameEvent, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $InventoryCarrier } from "@package/net/minecraft/world/entity/npc";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand, $SimpleContainer } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/animal/allay" {
    export class $Allay$JukeboxListener implements $GameEventListener {
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $Allay extends $PathfinderMob implements $InventoryCarrier, $VibrationSystem {
        getHoldingItemAnimationProgress(partialTick: number): number;
        setDancing(dancing: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDancing(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSpinning(): boolean;
        getInventory(): $SimpleContainer;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFlapping(): boolean;
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        getSpinningProgress(partialTick: number): number;
        setJukeboxPlaying(jukeboxPos: $BlockPos_, jukeboxPlaying: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasItemInHand(): boolean;
        readInventoryFromTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        writeInventoryToTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
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
        static THROW_SOUND_PITCHES: $ImmutableList<number>;
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
        constructor(entityType: $EntityType_<$Allay>, level: $Level_);
        get spinning(): boolean;
        get inventory(): $SimpleContainer;
        get leashOffset(): $Vec3;
        get flapping(): boolean;
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
    }
    export class $AllayAi {
        static updateActivity(allay: $Allay): void;
        static hearNoteblock(entity: $LivingEntity, pos: $BlockPos_): void;
        static getLikedPlayer(entity: $LivingEntity): ($ServerPlayer) | undefined;
        constructor();
    }
    export class $Allay$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        onDataChanged(): void;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
}
