import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        constructor(worldBorder: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        getSize(): number;
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getCenterX(): number;
        getCenterZ(): number;
        getDamagePerBlock(): number;
        getWarningTime(): number;
        getWarningBlocks(): number;
        getSafeZone(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        get size(): number;
        get centerX(): number;
        get centerZ(): number;
        get damagePerBlock(): number;
        get warningTime(): number;
        get warningBlocks(): number;
        get safeZone(): number;
        get sizeLerpTime(): number;
        get sizeLerpTarget(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
        getSize(): number;
        update(): $WorldBorder$BorderExtent;
        getStatus(): $BorderStatus;
        getCollisionShape(): $VoxelShape;
        getLerpRemainingTime(): number;
        onAbsoluteMaxSizeChange(): void;
        getMinZ(): number;
        getMaxX(): number;
        getMinX(): number;
        getMaxZ(): number;
        onCenterChange(): void;
        getLerpTarget(): number;
        getLerpSpeed(): number;
        get size(): number;
        get status(): $BorderStatus;
        get collisionShape(): $VoxelShape;
        get lerpRemainingTime(): number;
        get minZ(): number;
        get maxX(): number;
        get minX(): number;
        get maxZ(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
    }
    export class $WorldBorder {
        getSize(): number;
        setSize(damagePerBlock: number): void;
        getDistanceToBorder(x: number, arg1: number): number;
        getDistanceToBorder(entity: $Entity): number;
        getStatus(): $BorderStatus;
        removeListener(listener: $BorderChangeListener): void;
        tick(): void;
        addListener(listener: $BorderChangeListener): void;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        getCenterX(): number;
        getCenterZ(): number;
        getDamagePerBlock(): number;
        getDamageSafeZone(): number;
        getCollisionShape(): $VoxelShape;
        setAbsoluteMaxSize(size: number): void;
        getLerpRemainingTime(): number;
        wrapOperation$ckh000$lithium$getUpdatedArea(arg0: $WorldBorder$BorderExtent, arg1: $Operation_<any>): $WorldBorder$BorderExtent;
        getMinZ(): number;
        getMaxX(): number;
        getMinX(): number;
        getMaxZ(): number;
        setCenter(x: number, arg1: number): void;
        getWarningTime(): number;
        createSettings(): $WorldBorder$Settings;
        applySettings(serializer: $WorldBorder$Settings): void;
        getWarningBlocks(): number;
        setWarningBlocks(size: number): void;
        setDamagePerBlock(damagePerBlock: number): void;
        setWarningTime(size: number): void;
        setDamageSafeZone(damagePerBlock: number): void;
        getLerpTarget(): number;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        getAbsoluteMaxSize(): number;
        getLerpSpeed(): number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get status(): $BorderStatus;
        get centerX(): number;
        get centerZ(): number;
        get collisionShape(): $VoxelShape;
        get lerpRemainingTime(): number;
        get minZ(): number;
        get maxX(): number;
        get minX(): number;
        get maxZ(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
    }
}
