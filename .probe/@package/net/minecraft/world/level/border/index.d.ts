import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        worldBorder: $WorldBorder;
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
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        getCenterX(): number;
        getCenterZ(): number;
        getSizeLerpTime(): number;
        getSafeZone(): number;
        getSizeLerpTarget(): number;
        getWarningTime(): number;
        getWarningBlocks(): number;
        getSize(): number;
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getDamagePerBlock(): number;
        get centerX(): number;
        get centerZ(): number;
        get sizeLerpTime(): number;
        get safeZone(): number;
        get sizeLerpTarget(): number;
        get warningTime(): number;
        get warningBlocks(): number;
        get size(): number;
        get damagePerBlock(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
        getMinZ(): number;
        getMaxZ(): number;
        getCollisionShape(): $VoxelShape;
        getLerpRemainingTime(): number;
        onAbsoluteMaxSizeChange(): void;
        onCenterChange(): void;
        getLerpTarget(): number;
        getLerpSpeed(): number;
        getSize(): number;
        update(): $WorldBorder$BorderExtent;
        getMinX(): number;
        getMaxX(): number;
        getStatus(): $BorderStatus;
        get minZ(): number;
        get maxZ(): number;
        get collisionShape(): $VoxelShape;
        get lerpRemainingTime(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get size(): number;
        get minX(): number;
        get maxX(): number;
        get status(): $BorderStatus;
    }
    export class $WorldBorder {
        setCenter(x: number, arg1: number): void;
        getMinZ(): number;
        getMaxZ(): number;
        getDistanceToBorder(x: number, arg1: number): number;
        getDistanceToBorder(entity: $Entity): number;
        getCollisionShape(): $VoxelShape;
        getLerpRemainingTime(): number;
        getCenterX(): number;
        getCenterZ(): number;
        setAbsoluteMaxSize(size: number): void;
        setDamageSafeZone(damagePerBlock: number): void;
        setWarningBlocks(size: number): void;
        getLerpTarget(): number;
        setDamagePerBlock(damagePerBlock: number): void;
        createSettings(): $WorldBorder$Settings;
        getWarningTime(): number;
        setWarningTime(size: number): void;
        getWarningBlocks(): number;
        applySettings(serializer: $WorldBorder$Settings): void;
        getLerpSpeed(): number;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        getAbsoluteMaxSize(): number;
        getSize(): number;
        setSize(damagePerBlock: number): void;
        tick(): void;
        removeListener(listener: $BorderChangeListener): void;
        getListeners(): $List<$BorderChangeListener>;
        addListener(listener: $BorderChangeListener): void;
        getMinX(): number;
        getMaxX(): number;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        getStatus(): $BorderStatus;
        wrapOperation$cga000$lithium$getUpdatedArea(arg0: $WorldBorder$BorderExtent, arg1: $Operation_<any>): $WorldBorder$BorderExtent;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        listeners: $List<$BorderChangeListener>;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get minZ(): number;
        get maxZ(): number;
        get collisionShape(): $VoxelShape;
        get lerpRemainingTime(): number;
        get centerX(): number;
        get centerZ(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get minX(): number;
        get maxX(): number;
        get status(): $BorderStatus;
    }
}
