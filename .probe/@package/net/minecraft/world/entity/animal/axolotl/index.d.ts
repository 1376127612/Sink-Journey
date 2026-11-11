import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $ServerLevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $SmoothSwimmingMoveControl, $SmoothSwimmingLookControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $VariantHolder, $PortalProcessor, $LerpingModel, $WalkAnimationState, $MobSpawnType_, $AgeableMob$AgeableMobGroupData } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $Animal, $Bucketable } from "@package/net/minecraft/world/entity/animal";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/minecraft/world/entity/animal/axolotl" {
    export class $PlayDead extends $Behavior<$Axolotl> {
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $ValidatePlayDead {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $Axolotl$AxolotlLookControl extends $SmoothSwimmingLookControl {
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
    }
    export class $Axolotl$AxolotlGroupData extends $AgeableMob$AgeableMobGroupData {
        getVariant(random: $RandomSource): $Axolotl$Variant;
        types: $Axolotl$Variant[];
        constructor(...types: $Axolotl$Variant_[]);
    }
    export class $AxolotlAi {
        static updateActivity(axolotl: $Axolotl): void;
        static getTemptations(): $Predicate<$ItemStack>;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $Axolotl$AxolotlMoveControl extends $SmoothSwimmingMoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $Axolotl extends $Animal implements $LerpingModel, $VariantHolder<$Axolotl$Variant>, $Bucketable {
        getVariant(): $Axolotl$Variant;
        setVariant(variant: $Axolotl$Variant_): void;
        /**
         * Gets called every tick from main Entity class
         */
        rehydrate(): void;
        getPickupSound(): $SoundEvent;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Gets called every tick from main Entity class
         */
        playAttackSound(): void;
        loadFromBucketTag(compound: $CompoundTag_): void;
        setFromBucket(fromBucket: boolean): void;
        saveToBucketTag(stack: $ItemStack_): void;
        getBucketItemStack(): $ItemStack;
        getModelRotationValues(): $Map<string, $Vector3f>;
        applySupportingEffects(player: $Player): void;
        static checkAxolotlSpawnRules(axolotl: $EntityType_<$LivingEntity>, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        fromBucket(): boolean;
        static onStopAttacking(axolotl: $Axolotl, target: $LivingEntity): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPlayingDead(): boolean;
        setPlayingDead(fromBucket: boolean): void;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        useItem: $ItemStack;
        yHeadRot: number;
        static TOTAL_PLAYDEAD_TIME: number;
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
        static VARIANT_TAG: string;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static RARE_VARIANT_CHANCE: number;
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
        static PLAYER_REGEN_DETECTION_RANGE: number;
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
        constructor(entityType: $EntityType_<$Axolotl>, level: $Level_);
        get pickupSound(): $SoundEvent;
        get bucketItemStack(): $ItemStack;
        get modelRotationValues(): $Map<string, $Vector3f>;
    }
    export class $Axolotl$Variant extends $Enum<$Axolotl$Variant> implements $StringRepresentable {
        getName(): string;
        static values(): $Axolotl$Variant[];
        static valueOf(arg0: string): $Axolotl$Variant;
        getId(): number;
        getSerializedName(): string;
        static byId(id: number): $Axolotl$Variant;
        static getCommonSpawnVariant(random: $RandomSource): $Axolotl$Variant;
        static getRareSpawnVariant(random: $RandomSource): $Axolotl$Variant;
        getRemappedEnumConstantName(): string;
        static GOLD: $Axolotl$Variant;
        static WILD: $Axolotl$Variant;
        static CODEC: $Codec<$Axolotl$Variant>;
        static BLUE: $Axolotl$Variant;
        static LUCY: $Axolotl$Variant;
        static CYAN: $Axolotl$Variant;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Axolotl$Variant}.
     */
    export type $Axolotl$Variant_ = "lucy" | "wild" | "gold" | "cyan" | "blue";
}
