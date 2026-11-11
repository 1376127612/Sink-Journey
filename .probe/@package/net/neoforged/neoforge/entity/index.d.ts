import { $BlockPos } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Entity$RemovalReason, $Entity, $PortalProcessor, $ExperienceOrb } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/net/neoforged/neoforge/entity" {
    export class $PartEntity<T extends $Entity> extends $Entity {
        getParent(): $CompoundTag;
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
        constructor(arg0: $CompoundTag_);
        get parent(): $CompoundTag;
    }
    export class $XpOrbTargetingEvent extends $Event {
        getXpOrb(): $ExperienceOrb;
        getFollowingPlayer(): $Player;
        setFollowingPlayer(arg0: $Player): void;
        getScanDistance(): number;
        constructor(arg0: $ExperienceOrb, arg1: number);
        get xpOrb(): $ExperienceOrb;
        get scanDistance(): number;
    }
    export class $IEntityWithComplexSpawn {
    }
    export interface $IEntityWithComplexSpawn {
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
    }
}
