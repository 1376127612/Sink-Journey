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
        static init$lithium_$md$e03d8d$0(arg0: $DiscreteVoxelShape, arg1: $DoubleList, arg2: $DoubleList, arg3: $DoubleList): $ArrayVoxelShape;
        getYPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        getZPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
        setZPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
        shape: $DiscreteVoxelShape;
    }
    export class $BitSetDiscreteVoxelShape extends $DiscreteVoxelShape implements $BitSetDiscreteVoxelShapeAccessor, $DiscreteVSAccess, $BitSetDVSAccess {
        static withFilledBounds(x: number, y: number, z: number, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): $BitSetDiscreteVoxelShape;
        isInterior(x: number, y: number, z: number): boolean;
        getXMin(): number;
        getZMin(): number;
        getYMax(): number;
        getXMax(): number;
        getYMin(): number;
        getStorage(): $BitSet;
        getZMax(): number;
        constructor(xSize: number, ySize: number, zSize: number);
        constructor(shape: $DiscreteVoxelShape);
        get XMin(): number;
        get ZMin(): number;
        get YMax(): number;
        get XMax(): number;
        get YMin(): number;
        get storage(): $BitSet;
        get ZMax(): number;
    }
    export class $SubShape extends $DiscreteVoxelShape implements $DiscreteVSAccess, $SubShapeAccess {
        getEndZ(): number;
        getStartZ(): number;
        getStartX(): number;
        getEndX(): number;
        getStartY(): number;
        getParent(): $DiscreteVoxelShape;
        getEndY(): number;
        get endZ(): number;
        get startZ(): number;
        get startX(): number;
        get endX(): number;
        get startY(): number;
        get parent(): $DiscreteVoxelShape;
        get endY(): number;
    }
    export class $EntityCollisionContext implements $CollisionContext {
        isDescending(): boolean;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        getHeldItem(): $ItemStack;
        handler$cej000$lithium$canWalkOnFluid(arg0: $FluidState, arg1: $FluidState, arg2: $CallbackInfoReturnable<any>): void;
        handler$cej000$lithium$isHolding(arg0: $Item_, arg1: $CallbackInfoReturnable<any>): void;
        getEntity(): $Entity;
        isHoldingItem(item: $Item_): boolean;
        get descending(): boolean;
        get heldItem(): $ItemStack;
        get entity(): $Entity;
    }
    export class $Shapes {
        static joinIsNotEmpty(shape1: $VoxelShape, shape2: $VoxelShape, resultOperator: $BooleanOp_): boolean;
        static blockOccudes(shape: $VoxelShape, adjacentShape: $VoxelShape, side: $Direction_): boolean;
        static mergedFaceOccludes(shape: $VoxelShape, adjacentShape: $VoxelShape, side: $Direction_): boolean;
        static faceShapeOccludes(voxelShape1: $VoxelShape, voxelShape2: $VoxelShape): boolean;
        static join(shape1: $VoxelShape, shape2: $VoxelShape, _function: $BooleanOp_): $VoxelShape;
        static empty(): $VoxelShape;
        static create(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): $VoxelShape;
        static create(aabb: $AABB_): $VoxelShape;
        static box(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): $VoxelShape;
        static block(): $VoxelShape;
        static collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, possibleHits: $Iterable_<$VoxelShape>, desiredOffset: number): number;
        static or(shape1: $VoxelShape, shape2: $VoxelShape): $VoxelShape;
        static or(shape1: $VoxelShape, ...others: $VoxelShape[]): $VoxelShape;
        static findBits(minBits: number, arg1: number): number;
        static getFaceShape(voxelShape: $VoxelShape, direction: $Direction_): $VoxelShape;
        static joinUnoptimized(shape1: $VoxelShape, shape2: $VoxelShape, _function: $BooleanOp_): $VoxelShape;
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
        isDescending(): boolean;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        isHoldingItem(item: $Item_): boolean;
        get descending(): boolean;
    }
    export class $VoxelShape implements $OffsetVoxelShapeCache, $VoxelShapeAccess {
        forAllEdges(action: $Shapes$DoubleLineConsumer_): void;
        singleEncompassing(): $VoxelShape;
        lithium$setShape(arg0: number, arg1: $Direction_, arg2: $VoxelShape): void;
        forAllBoxes(action: $Shapes$DoubleLineConsumer_): void;
        closestPointTo(point: $Vec3_): ($Vec3) | undefined;
        min(axis: $Direction$Axis_): number;
        min(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        max(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        max(axis: $Direction$Axis_): number;
        isEmpty(): boolean;
        bounds(): $AABB;
        optimize(): $VoxelShape;
        collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, desiredOffset: number): number;
        move(xOffset: number, arg1: number, yOffset: number): $VoxelShape;
        collideX(movementAxis: $AxisCycle_, collisionBox: $AABB_, desiredOffset: number): number;
        findIndex(axis: $Direction$Axis_, position: number): number;
        getFaceShape(side: $Direction_): $VoxelShape;
        lithium$getOffsetSimplifiedShape(arg0: number, arg1: $Direction_): $VoxelShape;
        clip(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_): $BlockHitResult;
        toAabbs(): $List<$AABB>;
        getCoords(axis: $Direction$Axis_): $DoubleList;
        getShape(): $DiscreteVoxelShape;
        setFaces(arg0: $VoxelShape[]): void;
        setShape(shape: $DiscreteVoxelShape): void;
        getFaces(): $VoxelShape[];
        shape: $DiscreteVoxelShape;
        constructor(shape: $DiscreteVoxelShape);
        get empty(): boolean;
    }
    export class $CubePointRange extends $AbstractDoubleList {
        handler$cel000$lithium$initScale(arg0: number, arg1: $CallbackInfo): void;
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
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        size(): number;
        getList(): $DoubleList;
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
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape implements $DiscreteVSAccess {
        forAllEdges(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllBoxes(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllFaces(faceConsumer: $DiscreteVoxelShape$IntFaceConsumer_): void;
        getSize(axis: $Direction$Axis_): number;
        isEmpty(): boolean;
        fill(xSize: number, ySize: number, zSize: number): void;
        isFull(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFull(x: number, y: number, z: number): boolean;
        lastFull(axis: $Direction$Axis_, y: number, z: number): number;
        lastFull(axis: $Direction$Axis_): number;
        firstFull(axis: $Direction$Axis_): number;
        firstFull(axis: $Direction$Axis_, y: number, z: number): number;
        isFullWide(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFullWide(x: number, y: number, z: number): boolean;
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
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        size(): number;
        getList(): $DoubleList;
        constructor(coords: $DoubleList);
        get list(): $DoubleList;
    }
    export class $DiscreteCubeMerger implements $IndexMerger {
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        size(): number;
        getList(): $DoubleList;
        get list(): $DoubleList;
    }
    export class $IndexMerger {
    }
    export interface $IndexMerger {
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        size(): number;
        getList(): $DoubleList;
        get list(): $DoubleList;
    }
    export class $SliceShape extends $VoxelShape implements $SliceShapeAccess, $VoxelShapeAccess {
        getAxis(): $Direction$Axis;
        getDelegate(): $VoxelShape;
        shape: $DiscreteVoxelShape;
        constructor(delegate: $VoxelShape, axis: $Direction$Axis_, index: number);
        get axis(): $Direction$Axis;
        get delegate(): $VoxelShape;
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
