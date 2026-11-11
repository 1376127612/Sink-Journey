import { $Level } from "@package/net/minecraft/world/level";
import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity$RemovalReason, $PortalProcessor, $WalkAnimationState, $Entity } from "@package/net/minecraft/world/entity";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $Set } from "@package/java/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand, $Difficulty_ } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Holder_, $HolderGetter } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $PatrollingMonster } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";

declare module "@package/net/minecraft/world/entity/raid" {
    export class $Raider$RaiderCelebration extends $Goal {
    }
    export class $Raider$ObtainRaidLeaderBannerGoal<T extends $Raider> extends $Goal {
    }
    export class $Raid {
        hasFirstWaveSpawned(): boolean;
        getTotalRaidersAlive(): number;
        getHealthOfLivingRaiders(): number;
        getTotalHealth(): number;
        isBetweenWaves(): boolean;
        getAllRaiders(): $Set<$Raider>;
        absorbRaidOmen(player: $ServerPlayer): boolean;
        setRaidOmenLevel(wave: number): void;
        isStarted(): boolean;
        stop(): void;
        getId(): number;
        save(compound: $CompoundTag_): $CompoundTag;
        isActive(): boolean;
        isStopped(): boolean;
        getLevel(): $Level;
        tick(): void;
        static getLeaderBannerInstance(patternRegistry: $HolderGetter<$BannerPattern_>): $ItemStack;
        getCenter(): $BlockPos;
        getMaxRaidOmenLevel(): number;
        getLeader(wave: number): $Raider;
        joinRaid(wave: number, raider: $Raider, pos: $BlockPos_ | null, isRecruited: boolean): void;
        addWaveMob(wave: number, raider: $Raider, isRecruited: boolean): boolean;
        setLeader(wave: number, raider: $Raider): void;
        isLoss(): boolean;
        isOver(): boolean;
        getRaidOmenLevel(): number;
        addHeroOfTheVillage(player: $Entity): void;
        getGroupsSpawned(): number;
        updateBossbar(): void;
        removeLeader(wave: number): void;
        removeFromRaid(raider: $Raider, wanderedOutOfRaid: boolean): void;
        getNumGroups(difficulty: $Difficulty_): number;
        getEnchantOdds(): number;
        isVictory(): boolean;
        static RAID_REMOVAL_THRESHOLD_SQR: number;
        static TICKS_PER_DAY: number;
        static VILLAGE_RADIUS_BUFFER: number;
        static MAX_CELEBRATION_TICKS: number;
        static VALID_RAID_RADIUS_SQR: number;
        static MAX_NO_ACTION_TIME: number;
        static DEFAULT_MAX_RAID_OMEN_LEVEL: number;
        constructor(id: number, level: $ServerLevel, center: $BlockPos_);
        constructor(level: $ServerLevel, compound: $CompoundTag_);
        get totalRaidersAlive(): number;
        get healthOfLivingRaiders(): number;
        get totalHealth(): number;
        get betweenWaves(): boolean;
        get allRaiders(): $Set<$Raider>;
        get started(): boolean;
        get id(): number;
        get active(): boolean;
        get stopped(): boolean;
        get level(): $Level;
        get center(): $BlockPos;
        get maxRaidOmenLevel(): number;
        get loss(): boolean;
        get over(): boolean;
        get groupsSpawned(): number;
        get enchantOdds(): number;
        get victory(): boolean;
    }
    export class $Raid$RaiderType extends $Enum<$Raid$RaiderType> implements $IExtensibleEnum {
        static values(): $Raid$RaiderType[];
        static valueOf(arg0: string): $Raid$RaiderType;
        static getExtensionInfo(): $ExtensionInfo;
        static EVOKER: $Raid$RaiderType;
        static VINDICATOR: $Raid$RaiderType;
        static WITCH: $Raid$RaiderType;
        static PILLAGER: $Raid$RaiderType;
        static RAVAGER: $Raid$RaiderType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaiderType}.
     */
    export type $Raid$RaiderType_ = "vindicator" | "evoker" | "pillager" | "witch" | "ravager";
    export class $Raider$RaiderMoveThroughVillageGoal extends $Goal {
    }
    export class $Raid$RaidStatus extends $Enum<$Raid$RaidStatus> {
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaidStatus}.
     */
    export type $Raid$RaidStatus_ = "ongoing" | "victory" | "loss" | "stopped";
    export class $Raider$HoldGroundAttackGoal extends $Goal {
    }
    export class $Raids extends $SavedData {
        get(id: number): $Raid;
        static load(level: $ServerLevel, tag: $CompoundTag_): $Raids;
        static factory(level: $ServerLevel): $SavedData$Factory<$Raids>;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        tick(): void;
        createOrExtendRaid(player: $ServerPlayer, pos: $BlockPos_): $Raid;
        getNearbyRaid(pos: $BlockPos_, distance: number): $Raid;
        static getFileId(dimensionTypeHolder: $Holder_<$DimensionType>): string;
        static canJoinRaid(raider: $Raider, raid: $Raid): boolean;
        constructor(level: $ServerLevel);
    }
    export class $Raider extends $PatrollingMonster {
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCaptain(): boolean;
        setWave(ticksOutsideRaid: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getWave(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasRaid(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksOutsideRaid(): number;
        setTicksOutsideRaid(ticksOutsideRaid: number): void;
        setCelebrating(canJoinRaid: boolean): void;
        applyRaidBuffs(level: $ServerLevel, wave: number, unused: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canJoinRaid(): boolean;
        setCanJoinRaid(canJoinRaid: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasActiveRaid(): boolean;
        getCurrentRaid(): $Raid;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCelebrating(): boolean;
        getCelebrateSound(): $SoundEvent;
        setCurrentRaid(raid: $Raid | null): void;
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
        get captain(): boolean;
        get celebrateSound(): $SoundEvent;
    }
}
