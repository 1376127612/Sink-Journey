import { $GameType_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $HumanoidArm, $EntityDimensions, $Entity$RemovalReason, $PortalProcessor, $WalkAnimationState, $PlayerRideableJumping, $Entity } from "@package/net/minecraft/world/entity";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $PhaseFlightPlayerState$ClientAccess } from "@package/com/moakiee/ae2lt/celestweave";
import { $Minecraft, $ClientRecipeBook, $Options } from "@package/net/minecraft/client";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $PlayerInfo, $ClientPacketListener, $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $LocalPlayerInterface } from "@package/net/irisshaders/iris/mixinterface";
import { $BlockPos } from "@package/net/minecraft/core";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $AbstractClientPlayerAccessor } from "@package/dev/engine_room/flywheel/backend/mixin";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Portal$Transition } from "@package/net/minecraft/world/level/block";
import { $InventoryMenu, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ClientPlayerKJS, $LocalClientPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $StatsCounter } from "@package/net/minecraft/stats";
export * as inventory from "@package/net/minecraft/client/player/inventory";

declare module "@package/net/minecraft/client/player" {
    export class $LocalPlayer extends $AbstractClientPlayer implements $LocalPlayerInterface, $LocalClientPlayerKJS, $PhaseFlightPlayerState$ClientAccess {
        drop(fullStack: boolean): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        shouldShowDeathScreen(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isHandsBusy(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendOpenInventory(): void;
        /**
         * Heal living entity (param: amount of half-hearts)
         */
        hurtTo(healAmount: number): void;
        getStatsCounter(): $StatsCounter;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetPos(): void;
        /**
         * Returns whether the entity is in a server world
         */
        isAutoJumpEnabled(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getWaterVision(): number;
        onGameModeChanged(gameMode: $GameType_): void;
        /**
         * Returns whether the entity is in a server world
         */
        isMovingSlowly(): boolean;
        setPermissionLevel(permissionLevel: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpRidingScale(): number;
        getRecipeBook(): $ClientRecipeBook;
        jumpableVehicle(): $PlayerRideableJumping;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentMood(): number;
        setShowDeathScreen(useConfusion: boolean): void;
        handler$doj000$xaerominimap$onTickStart(arg0: $CallbackInfo): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        serverAiStep(): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getPermissionLevel(): number;
        getActivePortalLocalTransition(): $Portal$Transition;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clientSideCloseContainer(): void;
        removeRecipeHighlight(recipe: $RecipeHolder_<never>): void;
        /**
         * Sets the current XP, total XP, and level number.
         */
        setExperienceValues(currentXP: number, maxXP: number, level: number): void;
        setDoLimitedCrafting(useConfusion: boolean): void;
        /**
         * Returns whether the entity is in a server world
         */
        getDoLimitedCrafting(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        ae2lt$isLocalClientPlayer(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentConstantMood(): number;
        getMinecraft(): $Minecraft;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        useItem: $ItemStack;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        connection: $ClientPacketListener;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        xBob: number;
        static ID_TAG: string;
        elytraRotZ: number;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        input: $Input;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        yBob: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        spinningEffectIntensity: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        xBobO: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        tickCount: number;
        yBobO: number;
        static BOARDING_COOLDOWN: number;
        oSpinningEffectIntensity: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        static LOGGER: $Logger;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
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
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(minecraft: $Minecraft, clientLevel: $ClientLevel, connection: $ClientPacketListener, stats: $StatsCounter, recipeBook: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean);
        get handsBusy(): boolean;
        get statsCounter(): $StatsCounter;
        get autoJumpEnabled(): boolean;
        get waterVision(): number;
        get movingSlowly(): boolean;
        get jumpRidingScale(): number;
        get recipeBook(): $ClientRecipeBook;
        get currentMood(): number;
        set showDeathScreen(value: boolean);
        get activePortalLocalTransition(): $Portal$Transition;
        get currentConstantMood(): number;
        get minecraft(): $Minecraft;
    }
    export class $KeyboardInput extends $Input {
        forwardImpulse: number;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
        shiftKeyDown: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor(options: $Options);
    }
    export class $AbstractClientPlayer extends $Player implements $ClientPlayerKJS, $AbstractClientPlayerAccessor {
        getSkin(): $PlayerSkin;
        handler$zbe000$astralsorcery$getSextantFovModifier(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getFieldOfViewModifier(): number;
        getDeltaMovementLerped(patialTick: number): $Vec3;
        flywheel$getPlayerInfo(): $PlayerInfo;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        useItem: $ItemStack;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        elytraRotZ: number;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
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
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(clientLevel: $ClientLevel, gameProfile: $GameProfile);
        get skin(): $PlayerSkin;
        get fieldOfViewModifier(): number;
    }
    export class $Input {
        tick(isSneaking: boolean, sneakingSpeedMultiplier: number): void;
        getMoveVector(): $Vec2;
        hasForwardImpulse(): boolean;
        forwardImpulse: number;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
        shiftKeyDown: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor();
        get moveVector(): $Vec2;
    }
    export class $RemotePlayer extends $AbstractClientPlayer {
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        useItem: $ItemStack;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        elytraRotZ: number;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        inventory: $Inventory;
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
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(clientLevel: $ClientLevel, gameProfile: $GameProfile);
    }
}
