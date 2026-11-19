import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties, $ModelProperties_, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3d, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        topLevelBones(): $List<$GeoBone>;
        getBone(arg0: string): ($GeoBone) | undefined;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        properties(): $ModelProperties;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_,  } | [topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_, ];
    export class $GeoBone {
        isHidingChildren(): boolean;
        getChildBones(): $List<$GeoBone>;
        getWorldPosition(): $Vector3d;
        getRotationVector(): $Vector3d;
        getCubes(): $List<$GeoCube>;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        isTrackingMatrices(): boolean;
        getRotX(): number;
        setRotX(arg0: number): void;
        getRotY(): number;
        setRotY(arg0: number): void;
        getScaleZ(): number;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getInitialSnapshot(): $BoneSnapshot;
        setPosY(arg0: number): void;
        setPosX(arg0: number): void;
        getLocalPosition(): $Vector3d;
        getInflate(): number;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        saveSnapshot(): $BoneSnapshot;
        setModelPosition(arg0: $Vector3d): void;
        setChildrenHidden(arg0: boolean): void;
        hasScaleChanged(): boolean;
        shouldNeverRender(): boolean;
        hasRotationChanged(): boolean;
        getPositionVector(): $Vector3d;
        resetStateChanges(): void;
        markScaleAsChanged(): void;
        getScaleVector(): $Vector3d;
        hasPositionChanged(): boolean;
        getModelPosition(): $Vector3d;
        setRotZ(arg0: number): void;
        setPivotZ(arg0: number): void;
        getRotZ(): number;
        setPosZ(arg0: number): void;
        getPosZ(): number;
        setScaleZ(arg0: number): void;
        getPivotZ(): number;
        getReset(): boolean;
        markRotationAsChanged(): void;
        markPositionAsChanged(): void;
        setTrackingMatrices(arg0: boolean): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getModelSpaceMatrix(): $Matrix4f;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        getWorldSpaceNormal(): $Matrix3f;
        getWorldSpaceMatrix(): $Matrix4f;
        getModelRotationMatrix(): $Matrix4f;
        saveInitialSnapshot(): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getMirror(): boolean;
        getPivotX(): number;
        getPivotY(): number;
        setPivotY(arg0: number): void;
        setScaleX(arg0: number): void;
        setPivotX(arg0: number): void;
        getScaleY(): number;
        getScaleX(): number;
        setScaleY(arg0: number): void;
        setHidden(arg0: boolean): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getPosX(): number;
        getPosY(): number;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get hidingChildren(): boolean;
        get childBones(): $List<$GeoBone>;
        get worldPosition(): $Vector3d;
        get rotationVector(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get initialSnapshot(): $BoneSnapshot;
        get localPosition(): $Vector3d;
        get inflate(): number;
        set childrenHidden(value: boolean);
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get reset(): boolean;
        get modelRotationMatrix(): $Matrix4f;
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { normal?: $Vector3f, vertices?: $GeoVertex_[], direction?: $Direction_,  } | [normal?: $Vector3f, vertices?: $GeoVertex_[], direction?: $Direction_, ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        mirror(): boolean;
        rotation(): $Vec3;
        quads(): $GeoQuad[];
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, pivot?: $Vec3_, quads?: $GeoQuad_[],  } | [rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, pivot?: $Vec3_, quads?: $GeoQuad_[], ];
    export class $GeoVertex extends $Record {
        texU(): number;
        texV(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        position(): $Vector3f;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { texV?: number, texU?: number, position?: $Vector3f,  } | [texV?: number, texU?: number, position?: $Vector3f, ];
}
