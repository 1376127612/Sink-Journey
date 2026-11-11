import { $Structure$Axis_, $Structure$Axis } from "@package/mekanism/common/lib/multiblock";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/mekanism/common/lib/math/voxel" {
    export class $IShape {
    }
    export interface $IShape {
    }
    export class $VoxelCuboid$WallRelative extends $Enum<$VoxelCuboid$WallRelative> {
        static values(): $VoxelCuboid$WallRelative[];
        static valueOf(name: string): $VoxelCuboid$WallRelative;
        isWall(): boolean;
        isOnCorner(): boolean;
        isOnEdge(): boolean;
        static SIDE: $VoxelCuboid$WallRelative;
        static CORNER: $VoxelCuboid$WallRelative;
        static INVALID: $VoxelCuboid$WallRelative;
        static EDGE: $VoxelCuboid$WallRelative;
        get wall(): boolean;
        get onCorner(): boolean;
        get onEdge(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VoxelCuboid$WallRelative}.
     */
    export type $VoxelCuboid$WallRelative_ = "side" | "edge" | "corner" | "invalid";
    export class $VoxelPlane {
        size(): number;
        length(): number;
        merge(other: $VoxelPlane): void;
        getMinRow(): number;
        getMinCol(): number;
        getMaxRow(): number;
        isFull(): boolean;
        height(): number;
        getAxis(): $Structure$Axis;
        getMaxCol(): number;
        hasFrame(): boolean;
        getMissing(): number;
        isOutside(pos: $BlockPos_): boolean;
        constructor(axis: $Structure$Axis_, pos: $BlockPos_, frame: boolean);
        get minRow(): number;
        get minCol(): number;
        get maxRow(): number;
        get full(): boolean;
        get axis(): $Structure$Axis;
        get maxCol(): number;
        get missing(): number;
    }
    export class $VoxelCuboid$CuboidRelative extends $Enum<$VoxelCuboid$CuboidRelative> {
        static values(): $VoxelCuboid$CuboidRelative[];
        static valueOf(name: string): $VoxelCuboid$CuboidRelative;
        isWall(): boolean;
        static WALLS: $VoxelCuboid$CuboidRelative;
        static OUTSIDE: $VoxelCuboid$CuboidRelative;
        static INSIDE: $VoxelCuboid$CuboidRelative;
        get wall(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VoxelCuboid$CuboidRelative}.
     */
    export type $VoxelCuboid$CuboidRelative_ = "inside" | "outside" | "walls";
    export class $VoxelCuboid implements $IShape {
        length(): number;
        static from(p1: $VoxelPlane, p2: $VoxelPlane, p1Pos: number, p2Pos: number): $VoxelCuboid;
        isOnSide(pos: $BlockPos_): boolean;
        setMinPos(minPos: $BlockPos_): void;
        setMaxPos(maxPos: $BlockPos_): void;
        getSide(pos: $BlockPos_): $Direction;
        width(): number;
        height(): number;
        getMaxPos(): $BlockPos;
        getMatches(pos: $BlockPos_): number;
        getCenter(): $BlockPos;
        greaterOrEqual(other: $VoxelCuboid): boolean;
        getRelativeLocation(pos: $BlockPos_): $VoxelCuboid$CuboidRelative;
        isOnCorner(pos: $BlockPos_): boolean;
        getMinPos(): $BlockPos;
        getWallRelative(pos: $BlockPos_): $VoxelCuboid$WallRelative;
        isOnEdge(pos: $BlockPos_): boolean;
        asAABB(): $AABB;
        constructor(minPos: $BlockPos_, maxPos: $BlockPos_);
        constructor(length: number, height: number, width: number);
        get center(): $BlockPos;
    }
}
