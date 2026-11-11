import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemEntityAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Entity, $TraceableEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FallingBlockEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $UUID_ } from "@package/java/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ItemEntityAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $ItemEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Object } from "@package/java/lang";
import { $ChangeSubscriber$CountChangeSubscriber, $ChangeSubscriber, $ChangePublisher } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";

declare module "@package/net/minecraft/world/entity/item" {
    export class $ItemEntity extends $Entity implements $TraceableEntity, $ItemEntityKJS, $ItemEntityAccessor, $ChangePublisher<any>, $ChangeSubscriber$CountChangeSubscriber<any>, $ItemEntityAccess {
        static merge(destinationStack: $ItemStack_, originStack: $ItemStack_, amount: number): $ItemStack;
        copy(): $ItemEntity;
        getTarget(): $UUID;
        setTarget(target: $UUID_ | null): void;
        /**
         * Get entity this is riding
         */
        getOwner(): $Entity;
        /**
         * Gets the item that this entity represents.
         */
        getItem(): $ItemStack;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        handler$fjo004$ad_astra$adastra$tick(arg0: $CallbackInfo): void;
        lithium$forceUnsubscribe(arg0: $ItemStack_, arg1: number): void;
        lithium$notifyCount(arg0: $ItemStack_, arg1: number, arg2: number): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        lithium$unsubscribe(arg0: $ChangeSubscriber<any>): number;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setExtendedLifetime(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setUnlimitedLifetime(): void;
        lithium$notify(arg0: $ItemStack_, arg1: number): void;
        lithium$subscribe(arg0: $ChangeSubscriber<any>, arg1: number): void;
        /**
         * Sets the item that this entity represents.
         */
        setItem(stack: $ItemStack_): void;
        setPickUpDelay(pickupDelay: number): void;
        /**
         * Prepares this entity in new dimension by copying NBT data from entity in old dimension
         */
        setThrower(entity: $Entity): void;
        getSpin(partialTicks: number): number;
        static areMergable(destinationStack: $ItemStack_, originStack: $ItemStack_): boolean;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNeverPickUp(): void;
        /**
         * Returns `true` if it's possible to attack this entity with an item.
         */
        hasPickUpDelay(): boolean;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        makeFakeItem(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTicksUntilDespawn(): number;
        setTicksUntilDespawn(pickupDelay: number): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setInfinitePickUpDelay(): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getLifespan(): number;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoDespawn(): void;
        setLifespan(pickupDelay: number): void;
        lithium$isSubscribedWithData(arg0: $ChangeSubscriber<$ItemStack_>, arg1: number): boolean;
        lithium$unsubscribeWithData(arg0: $ChangeSubscriber<$Object>, arg1: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getAge(): number;
        lithium$getOwner(): $UUID;
        setAge(pickupDelay: number): void;
        lifespan: number;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static EYE_HEIGHT: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static INFINITE_PICKUP_DELAY: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static LIFETIME: number;
        bobOffs: number;
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
        thrower: $UUID;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        pickupDelay: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        target: $UUID;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$ItemEntity>, level: $Level_);
        constructor(level: $Level_, posX: number, arg2: number, posY: number, arg4: $ItemStack_, posZ: number, arg6: number, itemStack: number);
        constructor(level: $Level_, posX: number, arg2: number, posY: number, arg4: $ItemStack_);
        get owner(): $Entity;
        set pickUpDelay(value: number);
    }
    export class $PrimedTnt extends $Entity implements $TraceableEntity {
        /**
         * Returns null or the entityliving it was ignited by
         */
        getOwner(): $LivingEntity;
        handler$fjo004$ad_astra$adastra$tick(arg0: $CallbackInfo): void;
        setFuse(life: number): void;
        /**
         * Gets the fuse from the data manager
         */
        getFuse(): number;
        getBlockState(): $BlockState;
        setBlockState(blockState: $BlockState_): void;
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
        static TAG_FUSE: string;
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
        constructor(entityType: $EntityType_<$PrimedTnt>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: $LivingEntity | null);
        get owner(): $LivingEntity;
    }
    export class $FallingBlockEntity extends $Entity implements $FallingBlockEntityAccessor {
        setHurtsEntities(fallDamagePerDistance: number, fallDamageMax: number): void;
        getBlockState(): $BlockState;
        handler$bjj000$architectury$handleLand(ci: $CallbackInfo, block: $Block_, blockPos2: $BlockPos_, bl: boolean, bl2: boolean, d: number, blockState: $BlockState_): void;
        static fall(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FallingBlockEntity;
        static callInit$create_$md$796745$0(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $BlockState_): $FallingBlockEntity;
        callOnBrokenAfterFall(block: $Block_, pos: $BlockPos_): void;
        /**
         * Called to update the entity's position/logic.
         */
        disableDrop(): void;
        setStartPos(startPos: $BlockPos_): void;
        getStartPos(): $BlockPos;
        setBlockState(state: $BlockState_): void;
        hasImpulse: boolean;
        dropItem: boolean;
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
        blockData: $CompoundTag;
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
        forceTickAfterTeleportToDuplicate: boolean;
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
        time: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$FallingBlockEntity>, level: $Level_);
    }
}
