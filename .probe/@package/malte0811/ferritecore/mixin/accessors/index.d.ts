import { $Direction$Axis } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $BitSetDVSAccess {
    }
    export interface $BitSetDVSAccess extends $DiscreteVSAccess {
        getXMin(): number;
        getZMin(): number;
        getYMax(): number;
        getXMax(): number;
        getYMin(): number;
        getStorage(): $BitSet;
        getZMax(): number;
        get XMin(): number;
        get ZMin(): number;
        get YMax(): number;
        get XMax(): number;
        get YMin(): number;
        get storage(): $BitSet;
        get ZMax(): number;
    }
    export class $SliceShapeAccess {
    }
    export interface $SliceShapeAccess extends $VoxelShapeAccess {
        getAxis(): $Direction$Axis;
        getDelegate(): $VoxelShape;
        get axis(): $Direction$Axis;
        get delegate(): $VoxelShape;
    }
    export class $DiscreteVSAccess {
    }
    export interface $DiscreteVSAccess {
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        get XSize(): number;
        get YSize(): number;
        get ZSize(): number;
    }
    export class $ArrayVSAccess {
    }
    export interface $ArrayVSAccess extends $VoxelShapeAccess {
        getYPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        getZPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
        setZPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
    }
    export class $BakedQuadAccess {
    }
    export interface $BakedQuadAccess {
        setVertices(arg0: number[]): void;
        set vertices(value: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BakedQuadAccess}.
     */
    export type $BakedQuadAccess_ = ((arg0: number[]) => void);
    export class $SubShapeAccess {
    }
    export interface $SubShapeAccess extends $DiscreteVSAccess {
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
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        setFaces(arg0: $VoxelShape[]): void;
        setShape(arg0: $DiscreteVoxelShape): void;
        getFaces(): $VoxelShape[];
    }
}
