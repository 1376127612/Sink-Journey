import { $ArrayVoxelShapeInvoker, $BitSetDiscreteVoxelShapeAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/collisions/empty_space";
import { $BlockPos_, $Direction_, $AxisCycle_, $Direction$Axis, $Direction$Axis_, $Direction } from "@package/net/minecraft/core";
import { $OffsetVoxelShapeCache } from "@package/net/caffeinemc/mods/lithium/common/shapes";
import { $Item_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $VoxelShapeAccess, $BitSetDVSAccess, $SubShapeAccess, $ArrayVSAccess, $SliceShapeAccess, $DiscreteVSAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AbstractDoubleList, $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Iterable_ } from "@package/java/lang";
import { $List, $BitSet } from "@package/java/util";
import { $Vec3_, $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/phys/shapes" {
    export class $ArrayVoxelShape extends $VoxelShape implements $ArrayVoxelShapeInvoker, $VoxelShapeAccess, $ArrayVSAccess {
        static init$lithium_$md$796745$0(arg0: $DiscreteVoxelShape, arg1: $DoubleList, arg2: $DoubleList, arg3: $DoubleList): $ArrayVoxelShape;
        getYPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        setZPoints(arg0: $DoubleList): void;
        getZPoints(): $DoubleList;
        shape: $DiscreteVoxelShape;
    }
    export class $BitSetDiscreteVoxelShape extends $DiscreteVoxelShape implements $BitSetDiscreteVoxelShapeAccessor, $DiscreteVSAccess, $BitSetDVSAccess {
        isInterior(x: number, y: number, z: number): boolean;
        static withFilledBounds(x: number, y: number, z: number, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): $BitSetDiscreteVoxelShape;
        getZMin(): number;
        getXMin(): number;
        getXMax(): number;
        getYMin(): number;
        getYMax(): number;
        getStorage(): $BitSet;
        getZMax(): number;
        constructor(xSize: number, ySize: number, zSize: number);
        constructor(shape: $DiscreteVoxelShape);
        get ZMin(): number;
        get XMin(): number;
        get XMax(): number;
        get YMin(): number;
        get YMax(): number;
        get storage(): $BitSet;
        get ZMax(): number;
    }
    export class $SubShape extends $DiscreteVoxelShape implements $DiscreteVSAccess, $SubShapeAccess {
        getParent(): $DiscreteVoxelShape;
        getStartY(): number;
        getStartX(): number;
        getStartZ(): number;
        getEndZ(): number;
        getEndY(): number;
        getEndX(): number;
        get parent(): $DiscreteVoxelShape;
        get startY(): number;
        get startX(): number;
        get startZ(): number;
        get endZ(): number;
        get endY(): number;
        get endX(): number;
    }
    export class $EntityCollisionContext implements $CollisionContext {
        handler$cja000$lithium$canWalkOnFluid(arg0: $FluidState, arg1: $FluidState, arg2: $CallbackInfoReturnable<any>): void;
        getEntity(): $Entity;
        isHoldingItem(item: $Item_): boolean;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isDescending(): boolean;
        handler$cja000$lithium$isHolding(arg0: $Item_, arg1: $CallbackInfoReturnable<any>): void;
        getHeldItem(): $ItemStack;
        get entity(): $Entity;
        get descending(): boolean;
        get heldItem(): $ItemStack;
    }
    export class $Shapes {
        static join(shape1: $VoxelShape, shape2: $VoxelShape, _function: $BooleanOp_): $VoxelShape;
        static empty(): $VoxelShape;
        static create(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): $VoxelShape;
        static create(aabb: $AABB_): $VoxelShape;
        static box(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): $VoxelShape;
        static block(): $VoxelShape;
        static collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, possibleHits: $Iterable_<$VoxelShape>, desiredOffset: number): number;
        static or(shape1: $VoxelShape, shape2: $VoxelShape): $VoxelShape;
        static or(shape1: $VoxelShape, ...others: $VoxelShape[]): $VoxelShape;
        static getFaceShape(voxelShape: $VoxelShape, direction: $Direction_): $VoxelShape;
        static joinUnoptimized(shape1: $VoxelShape, shape2: $VoxelShape, _function: $BooleanOp_): $VoxelShape;
        static findBits(minBits: number, arg1: number): number;
        static joinIsNotEmpty(shape1: $VoxelShape, shape2: $VoxelShape, resultOperator: $BooleanOp_): boolean;
        static faceShapeOccludes(voxelShape1: $VoxelShape, voxelShape2: $VoxelShape): boolean;
        static mergedFaceOccludes(shape: $VoxelShape, adjacentShape: $VoxelShape, side: $Direction_): boolean;
        static blockOccudes(shape: $VoxelShape, adjacentShape: $VoxelShape, side: $Direction_): boolean;
        static INFINITY: $VoxelShape;
        static BLOCK: $VoxelShape;
        static BIG_EPSILON: number;
        static EPSILON: number;
        constructor();
    }
    export class $CollisionContext {
        static of(entity: $Entity): $CollisionContext;
        static empty(): $CollisionContext;
    }
    export interface $CollisionContext {
        isHoldingItem(item: $Item_): boolean;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isDescending(): boolean;
        get descending(): boolean;
    }
    export class $VoxelShape implements $OffsetVoxelShapeCache, $VoxelShapeAccess {
        min(axis: $Direction$Axis_): number;
        min(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        max(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        max(axis: $Direction$Axis_): number;
        isEmpty(): boolean;
        bounds(): $AABB;
        optimize(): $VoxelShape;
        collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, desiredOffset: number): number;
        move(xOffset: number, arg1: number, yOffset: number): $VoxelShape;
        toAabbs(): $List<$AABB>;
        clip(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_): $BlockHitResult;
        getFaceShape(side: $Direction_): $VoxelShape;
        findIndex(axis: $Direction$Axis_, position: number): number;
        collideX(movementAxis: $AxisCycle_, collisionBox: $AABB_, desiredOffset: number): number;
        closestPointTo(point: $Vec3_): ($Vec3) | undefined;
        getCoords(axis: $Direction$Axis_): $DoubleList;
        lithium$getOffsetSimplifiedShape(arg0: number, arg1: $Direction_): $VoxelShape;
        forAllBoxes(action: $Shapes$DoubleLineConsumer_): void;
        lithium$setShape(arg0: number, arg1: $Direction_, arg2: $VoxelShape): void;
        forAllEdges(action: $Shapes$DoubleLineConsumer_): void;
        singleEncompassing(): $VoxelShape;
        getShape(): $DiscreteVoxelShape;
        getFaces(): $VoxelShape[];
        setShape(shape: $DiscreteVoxelShape): void;
        setFaces(arg0: $VoxelShape[]): void;
        shape: $DiscreteVoxelShape;
        constructor(shape: $DiscreteVoxelShape);
        get empty(): boolean;
    }
    export class $CubePointRange extends $AbstractDoubleList {
        handler$cjc000$lithium$initScale(arg0: number, arg1: $CallbackInfo): void;
        constructor(parts: number);
    }
    export class $DiscreteVoxelShape$IntLineConsumer {
    }
    export interface $DiscreteVoxelShape$IntLineConsumer {
        consume(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntLineConsumer}.
     */
    export type $DiscreteVoxelShape$IntLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $BooleanOp {
        static SAME: $BooleanOp;
        static OR: $BooleanOp;
        static TRUE: $BooleanOp;
        static NOT_AND: $BooleanOp;
        static ONLY_SECOND: $BooleanOp;
        static FIRST: $BooleanOp;
        static CAUSED_BY: $BooleanOp;
        static NOT_SAME: $BooleanOp;
        static NOT_OR: $BooleanOp;
        static AND: $BooleanOp;
        static FALSE: $BooleanOp;
        static SECOND: $BooleanOp;
        static CAUSES: $BooleanOp;
        static ONLY_FIRST: $BooleanOp;
        static NOT_FIRST: $BooleanOp;
        static NOT_SECOND: $BooleanOp;
    }
    export interface $BooleanOp {
        apply(primaryBool: boolean, secondaryBool: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BooleanOp}.
     */
    export type $BooleanOp_ = ((arg0: boolean, arg1: boolean) => boolean);
    export class $IndirectMerger implements $IndexMerger {
        size(): number;
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        constructor(lower: $DoubleList, upper: $DoubleList, excludeUpper: boolean, excludeLower: boolean);
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape$IntFaceConsumer {
    }
    export interface $DiscreteVoxelShape$IntFaceConsumer {
        consume(direction: $Direction_, x: number, y: number, z: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntFaceConsumer}.
     */
    export type $DiscreteVoxelShape$IntFaceConsumer_ = ((arg0: $Direction, arg1: number, arg2: number, arg3: number) => void);
    export class $CubeVoxelShape extends $VoxelShape {
        shape: $DiscreteVoxelShape;
    }
    export class $NonOverlappingMerger extends $AbstractDoubleList implements $IndexMerger {
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape implements $DiscreteVSAccess {
        getSize(axis: $Direction$Axis_): number;
        isEmpty(): boolean;
        fill(xSize: number, ySize: number, zSize: number): void;
        isFull(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFull(x: number, y: number, z: number): boolean;
        firstFull(axis: $Direction$Axis_, y: number, z: number): number;
        firstFull(axis: $Direction$Axis_): number;
        lastFull(axis: $Direction$Axis_, y: number, z: number): number;
        lastFull(axis: $Direction$Axis_): number;
        isFullWide(x: number, y: number, z: number): boolean;
        isFullWide(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        forAllBoxes(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllEdges(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllFaces(faceConsumer: $DiscreteVoxelShape$IntFaceConsumer_): void;
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        get empty(): boolean;
        get XSize(): number;
        get YSize(): number;
        get ZSize(): number;
    }
    export class $OffsetDoubleList extends $AbstractDoubleList {
        constructor(delegate: $DoubleList, offset: number);
    }
    export class $IndexMerger$IndexConsumer {
    }
    export interface $IndexMerger$IndexConsumer {
        merge(firstValue: number, secondValue: number, thirdValue: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IndexMerger$IndexConsumer}.
     */
    export type $IndexMerger$IndexConsumer_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $IdenticalMerger implements $IndexMerger {
        size(): number;
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        constructor(coords: $DoubleList);
        get list(): $DoubleList;
    }
    export class $DiscreteCubeMerger implements $IndexMerger {
        size(): number;
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        get list(): $DoubleList;
    }
    export class $IndexMerger {
    }
    export interface $IndexMerger {
        size(): number;
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        get list(): $DoubleList;
    }
    export class $SliceShape extends $VoxelShape implements $SliceShapeAccess, $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        shape: $DiscreteVoxelShape;
        constructor(delegate: $VoxelShape, axis: $Direction$Axis_, index: number);
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $Shapes$DoubleLineConsumer {
    }
    export interface $Shapes$DoubleLineConsumer {
        consume(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Shapes$DoubleLineConsumer}.
     */
    export type $Shapes$DoubleLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
}
