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
        isWall(): boolean;
        static values(): $VoxelCuboid$WallRelative[];
        static valueOf(name: string): $VoxelCuboid$WallRelative;
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
        getAxis(): $Structure$Axis;
        hasFrame(): boolean;
        getMaxCol(): number;
        getMinCol(): number;
        getMinRow(): number;
        getMaxRow(): number;
        size(): number;
        length(): number;
        merge(other: $VoxelPlane): void;
        isFull(): boolean;
        height(): number;
        getMissing(): number;
        isOutside(pos: $BlockPos_): boolean;
        constructor(axis: $Structure$Axis_, pos: $BlockPos_, frame: boolean);
        get axis(): $Structure$Axis;
        get maxCol(): number;
        get minCol(): number;
        get minRow(): number;
        get maxRow(): number;
        get full(): boolean;
        get missing(): number;
    }
    export class $VoxelCuboid$CuboidRelative extends $Enum<$VoxelCuboid$CuboidRelative> {
        isWall(): boolean;
        static values(): $VoxelCuboid$CuboidRelative[];
        static valueOf(name: string): $VoxelCuboid$CuboidRelative;
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
        getMaxPos(): $BlockPos;
        getRelativeLocation(pos: $BlockPos_): $VoxelCuboid$CuboidRelative;
        getWallRelative(pos: $BlockPos_): $VoxelCuboid$WallRelative;
        greaterOrEqual(other: $VoxelCuboid): boolean;
        isOnSide(pos: $BlockPos_): boolean;
        asAABB(): $AABB;
        setMinPos(minPos: $BlockPos_): void;
        setMaxPos(maxPos: $BlockPos_): void;
        length(): number;
        static from(p1: $VoxelPlane, p2: $VoxelPlane, p1Pos: number, p2Pos: number): $VoxelCuboid;
        width(): number;
        getMatches(pos: $BlockPos_): number;
        getMinPos(): $BlockPos;
        isOnCorner(pos: $BlockPos_): boolean;
        isOnEdge(pos: $BlockPos_): boolean;
        getSide(pos: $BlockPos_): $Direction;
        height(): number;
        getCenter(): $BlockPos;
        constructor(length: number, height: number, width: number);
        constructor(minPos: $BlockPos_, maxPos: $BlockPos_);
        get center(): $BlockPos;
    }
}
