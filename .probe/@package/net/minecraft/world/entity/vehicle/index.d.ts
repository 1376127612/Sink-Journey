import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $PortalProcessor, $VariantHolder, $Pose_, $SlotAccess, $Entity, $Leashable$LeashData, $Entity$RemovalReason, $LivingEntity, $HasCustomInventoryScreen, $Leashable } from "@package/net/minecraft/world/entity";
import { $FluidType_ } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $MinecartFurnaceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $Function_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $MenuProvider, $Container } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $IBoatExtension, $IAbstractMinecartExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IMinecartCollisionHandler } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $CollisionGetter, $BaseCommandBlock, $Level, $BlockGetter, $BaseSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LithiumInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Hopper } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/vehicle" {
    export class $Boat extends $VehicleEntity implements $Leashable, $VariantHolder<$Boat$Type>, $IBoatExtension {
        getVariant(): $Boat$Type;
        setInput(inputLeft: boolean, inputRight: boolean, inputUp: boolean, inputDown: boolean): void;
        setVariant(variant: $Boat$Type_): void;
        handler$fjm000$ad_astra$adastra$floatBoat(arg0: $CallbackInfo): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        getLeashData(): $Leashable$LeashData;
        hasEnoughSpaceFor(passenger: $Entity): boolean;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getGroundFriction(): number;
        getBubbleAngle(partialTicks: number): number;
        static canVehicleCollide(vehicle: $Entity, entity: $Entity): boolean;
        getDropItem(): $Item;
        getPaddleState(side: number): boolean;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getWaterLevelAbove(): number;
        getRowingTime(side: number, limbSwing: number): number;
        setPaddleState(left: boolean, right: boolean): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isLeashed(): boolean;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canHaveALeashAttachedToIt(): boolean;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        /**
         * Get entity this is riding
         */
        getLeashHolder(): $Entity;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canBeLeashed(): boolean;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        mayBeLeashed(): boolean;
        dropLeash(left: boolean, right: boolean): void;
        setDelayedLeashHolderId(bubbleTime: number): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        /**
         * Applies this boat's yaw to the given entity. Used to update the orientation of its passenger.
         */
        closeRangeLeashBehaviour(entityToUpdate: $Entity): void;
        /**
         * Update the boat's speed, based on momentum.
         */
        leashTooFarBehaviour(): void;
        canBoatInFluid(arg0: $FluidState): boolean;
        canBoatInFluid(arg0: $FluidType_): boolean;
        hasImpulse: boolean;
        static PADDLE_RIGHT: number;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static BUBBLE_TIME: number;
        moveDist: number;
        static ID_TAG: string;
        static PADDLE_SOUND_TIME: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PADDLE_LEFT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$Boat>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get leashOffset(): $Vec3;
        get groundFriction(): number;
        get dropItem(): $Item;
        get waterLevelAbove(): number;
        get leashed(): boolean;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
    }
    export class $Boat$Type extends $Enum<$Boat$Type> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $Boat$Type[];
        static valueOf(name: string): $Boat$Type;
        static byName(name: string): $Boat$Type;
        static getExtensionInfo(): $ExtensionInfo;
        getPlanks(): $Block;
        isRaft(): boolean;
        getSticks(): $Item;
        getSerializedName(): string;
        /**
         * Get a boat type by its enum ordinal
         */
        static byId(id: number): $Boat$Type;
        getRemappedEnumConstantName(): string;
        static MANGROVE: $Boat$Type;
        static SPRUCE: $Boat$Type;
        static CHERRY: $Boat$Type;
        static BAMBOO: $Boat$Type;
        static CODEC: $StringRepresentable$EnumCodec<$Boat$Type>;
        static BIRCH: $Boat$Type;
        static JUNGLE: $Boat$Type;
        static ACACIA: $Boat$Type;
        static OAK: $Boat$Type;
        static DARK_OAK: $Boat$Type;
        static get extensionInfo(): $ExtensionInfo;
        get planks(): $Block;
        get raft(): boolean;
        get sticks(): $Item;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Boat$Type}.
     */
    export type $Boat$Type_ = "oak" | "spruce" | "birch" | "jungle" | "acacia" | "cherry" | "dark_oak" | "mangrove" | "bamboo";
    export class $ContainerEntity {
    }
    export interface $ContainerEntity extends $Container, $MenuProvider {
        position(): $Vec3;
        isEmpty(): boolean;
        level(): $Level;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        removeChestVehicleItemNoUpdate(slot: number): $ItemStack;
        isRemoved(): boolean;
        getBoundingBox(): $AABB;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        unpackChestVehicleLootTable(player: $Player | null): void;
        setLootTableSeed(lootTableSeed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        setChestVehicleItem(slot: number, stack: $ItemStack_): void;
        isChestVehicleEmpty(): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        isChestVehicleStillValid(player: $Player): boolean;
        getChestVehicleSlot(index: number): $SlotAccess;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        removeChestVehicleItem(slot: number, amount: number): $ItemStack;
        getChestVehicleItem(slot: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        get empty(): boolean;
        get removed(): boolean;
        get boundingBox(): $AABB;
        get chestVehicleEmpty(): boolean;
        get itemStacks(): $NonNullList<$ItemStack>;
    }
    export class $MinecartHopper extends $AbstractMinecartContainer implements $Hopper {
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        isEnabled(): boolean;
        createMenu(id: number, playerInventory: $Inventory): $AbstractContainerMenu;
        /**
         * Set whether this hopper minecart is being blocked by an activator rail.
         */
        setEnabled(enabled: boolean): void;
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        isGridAligned(): boolean;
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        suckInItems(): boolean;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelZ(): number;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelY(): number;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelX(): number;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getSuckAabb(): $AABB;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$MinecartHopper>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get gridAligned(): boolean;
        get levelZ(): number;
        get levelY(): number;
        get levelX(): number;
        get suckAabb(): $AABB;
    }
    export class $MinecartChest extends $AbstractMinecartContainer {
        createMenu(id: number, playerInventory: $Inventory): $AbstractContainerMenu;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$MinecartChest>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $AbstractMinecart extends $VehicleEntity implements $IAbstractMinecartExtension {
        getDefaultDisplayBlockState(): $BlockState;
        setCurrentCartSpeedCapOnRail(yaw: number): void;
        getCurrentCartSpeedCapOnRail(): number;
        handler$fjo004$ad_astra$adastra$tick(arg0: $CallbackInfo): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canUseRail(): boolean;
        getPosOffs(x: number, arg1: number, y: number, arg3: number): $Vec3;
        setDragAir(renderDistWeight: number): void;
        /**
         * Gets the maximum speed for a minecart
         */
        getDragAir(): number;
        getPos(x: number, arg1: number, y: number): $Vec3;
        static createMinecart(level: $ServerLevel, x: number, arg2: number, y: number, arg4: $AbstractMinecart$Type_, z: $ItemStack_, arg6: $Player | null): $AbstractMinecart;
        setMaxSpeedAirVertical(yaw: number): void;
        getMaxSpeedAirLateral(): number;
        setDisplayBlockState(displayState: $BlockState_): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDefaultDisplayOffset(): number;
        setMaxSpeedAirLateral(yaw: number): void;
        static registerCollisionHandler(arg0: $IMinecartCollisionHandler | null): void;
        /**
         * Gets the maximum speed for a minecart
         */
        getMaxSpeedWithRail(): number;
        getMaxSpeedAirVertical(): number;
        getCollisionHandler(): $IMinecartCollisionHandler;
        getDisplayBlockState(): $BlockState;
        getMinecartType(): $AbstractMinecart$Type;
        setCustomDisplay(customDisplay: boolean): void;
        setDisplayOffset(displayOffset: number): void;
        setCanUseRail(customDisplay: boolean): void;
        /**
         * Called every tick the minecart is on an activator rail.
         */
        activateMinecart(x: number, y: number, z: number, powered: boolean): void;
        moveMinecartOnRail(pos: $BlockPos_): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        hasCustomDisplay(): boolean;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDisplayOffset(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getComparatorLevel(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        shouldDoRailFunctions(): boolean;
        getMaxCartSpeedOnRail(): number;
        getCurrentRailPosition(): $BlockPos;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isPoweredCart(): boolean;
        /**
         * Gets the maximum speed for a minecart
         */
        getSlopeAdjustment(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canBeRidden(): boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        get defaultDisplayBlockState(): $BlockState;
        get defaultDisplayOffset(): number;
        get maxSpeedWithRail(): number;
        get collisionHandler(): $IMinecartCollisionHandler;
        get minecartType(): $AbstractMinecart$Type;
        set customDisplay(value: boolean);
        get comparatorLevel(): number;
        get maxCartSpeedOnRail(): number;
        get currentRailPosition(): $BlockPos;
        get poweredCart(): boolean;
        get slopeAdjustment(): number;
    }
    export class $DismountHelper {
        static findSafeDismountLocation(entityType: $EntityType_<never>, level: $CollisionGetter, pos: $BlockPos_, onlySafePositions: boolean): $Vec3;
        static offsetsForDirection(direction: $Direction_): number[][];
        static canDismountTo(level: $CollisionGetter, offset: $Vec3_, passenger: $LivingEntity, pose: $Pose_): boolean;
        static canDismountTo(level: $CollisionGetter, passenger: $LivingEntity, boundingBox: $AABB_): boolean;
        static nonClimbableShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        static findCeilingFrom(pos: $BlockPos_, ceiling: number, shapeForPos: $Function_<$BlockPos, $VoxelShape>): number;
        static isBlockFloorValid(distance: number): boolean;
        constructor();
    }
    export class $AbstractMinecart$Type extends $Enum<$AbstractMinecart$Type> {
        static values(): $AbstractMinecart$Type[];
        static valueOf(arg0: string): $AbstractMinecart$Type;
        static CHEST: $AbstractMinecart$Type;
        static FURNACE: $AbstractMinecart$Type;
        static RIDEABLE: $AbstractMinecart$Type;
        static COMMAND_BLOCK: $AbstractMinecart$Type;
        static TNT: $AbstractMinecart$Type;
        static SPAWNER: $AbstractMinecart$Type;
        static HOPPER: $AbstractMinecart$Type;
    }
    /**
     * Values that may be interpreted as {@link $AbstractMinecart$Type}.
     */
    export type $AbstractMinecart$Type_ = "rideable" | "chest" | "furnace" | "tnt" | "spawner" | "hopper" | "command_block";
    export class $Boat$Status extends $Enum<$Boat$Status> {
        static values(): $Boat$Status[];
        static valueOf(arg0: string): $Boat$Status;
        static UNDER_WATER: $Boat$Status;
        static UNDER_FLOWING_WATER: $Boat$Status;
        static IN_AIR: $Boat$Status;
        static IN_WATER: $Boat$Status;
        static ON_LAND: $Boat$Status;
    }
    /**
     * Values that may be interpreted as {@link $Boat$Status}.
     */
    export type $Boat$Status_ = "in_water" | "under_water" | "under_flowing_water" | "on_land" | "in_air";
    export class $ChestBoat extends $Boat implements $HasCustomInventoryScreen, $ContainerEntity {
        destroy(source: $DamageSource_): void;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        stopOpen(player: $Player): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        unpackLootTable(player: $Player | null): void;
        setLootTableSeed(lootTableSeed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        openCustomInventoryScreen(player: $Player): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        isEmpty(): boolean;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        /**
         * Returns the stack in the given slot.
         */
        removeChestVehicleItemNoUpdate(slot: number): $ItemStack;
        unpackChestVehicleLootTable(player: $Player | null): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setChestVehicleItem(slot: number, stack: $ItemStack_): void;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        isChestVehicleEmpty(): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        isChestVehicleStillValid(player: $Player): boolean;
        getChestVehicleSlot(slot: number): $SlotAccess;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeChestVehicleItem(slot: number, amount: number): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getChestVehicleItem(slot: number): $ItemStack;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        asContainer(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        setTransferCooldown(lootTableSeed: number): void;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        canReceiveTransferCooldown(): boolean;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        hasImpulse: boolean;
        static PADDLE_RIGHT: number;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static BUBBLE_TIME: number;
        moveDist: number;
        static ID_TAG: string;
        static PADDLE_SOUND_TIME: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PADDLE_LEFT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$Boat>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get containerSize(): number;
        get itemStacks(): $NonNullList<$ItemStack>;
        get chestVehicleEmpty(): boolean;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        set transferCooldown(value: number);
        get allItems(): $List<$ItemStack>;
    }
    export class $Minecart extends $AbstractMinecart {
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $VehicleEntity extends $Entity {
        destroy(dropItem: $Item_): void;
        handler$dfh001$ftbchunks$onHurt(damageSource: $DamageSource_, f: number, cir: $CallbackInfoReturnable<any>): void;
        setHurtDir(hurtDir: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getHurtDir(): number;
        setDamage(damage: number): void;
        getDamage(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getHurtTime(): number;
        setHurtTime(hurtDir: number): void;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<never>, level: $Level_);
    }
    export class $MinecartSpawner extends $AbstractMinecart {
        getSpawner(): $BaseSpawner;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$MinecartSpawner>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get spawner(): $BaseSpawner;
    }
    export class $MinecartCommandBlock extends $AbstractMinecart {
        getCommandBlock(): $BaseCommandBlock;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$MinecartCommandBlock>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get commandBlock(): $BaseCommandBlock;
    }
    export class $MinecartCommandBlock$MinecartCommandBase extends $BaseCommandBlock {
        getMinecart(): $MinecartCommandBlock;
        constructor(arg0: $MinecartCommandBlock);
        get minecart(): $MinecartCommandBlock;
    }
    export class $MinecartFurnace extends $AbstractMinecart implements $MinecartFurnaceAccessor {
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        create$getFuel(): number;
        create$setFuel(id: number): void;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        zPush: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        xPush: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$MinecartFurnace>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $MinecartTNT extends $AbstractMinecart {
        destroy(source: $DamageSource_): void;
        /**
         * Gets the remaining fuse time in ticks.
         */
        getFuse(): number;
        /**
         * Ignites this TNT cart.
         */
        primeFuse(): void;
        /**
         * Returns `true` if the TNT minecart is ignited.
         */
        isPrimed(): boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$MinecartTNT>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get fuse(): number;
        get primed(): boolean;
    }
    export class $AbstractMinecartContainer extends $AbstractMinecart implements $ContainerEntity, $LithiumInventory {
        destroy(source: $DamageSource_): void;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        setLootTableSeed(lootTableSeed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        isEmpty(): boolean;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        /**
         * Returns the stack in the given slot.
         */
        removeChestVehicleItemNoUpdate(index: number): $ItemStack;
        /**
         * Called by a player entity when they collide with an entity
         */
        unpackChestVehicleLootTable(player: $Player | null): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setChestVehicleItem(index: number, stack: $ItemStack_): void;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        isChestVehicleEmpty(): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        isChestVehicleStillValid(player: $Player): boolean;
        getChestVehicleSlot(slot: number): $SlotAccess;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeChestVehicleItem(index: number, count: number): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getChestVehicleItem(index: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        generateLootLithium(): void;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * Called by a player entity when they collide with an entity
         */
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Called by a player entity when they collide with an entity
         */
        stopOpen(player: $Player): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        asContainer(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        setTransferCooldown(lootTableSeed: number): void;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        canReceiveTransferCooldown(): boolean;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        /**
         * Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at `Entity#onlyOpCanSetNbt()`.For example, command block minecarts and mob spawner minecarts (spawning command block minecarts or drops) are considered accessible.@return true if this entity offers ways for unauthorized players to use restricted commands
         */
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        get itemStacks(): $NonNullList<$ItemStack>;
        get chestVehicleEmpty(): boolean;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        set transferCooldown(value: number);
        get allItems(): $List<$ItemStack>;
    }
}
