import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        getBone(arg0: string): ($GeoBone) | undefined;
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>,  } | [properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>, ];
    export class $GeoBone {
        setPosX(arg0: number): void;
        setPosY(arg0: number): void;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getMirror(): boolean;
        getScaleX(): number;
        setScaleX(arg0: number): void;
        getScaleY(): number;
        setScaleY(arg0: number): void;
        setPivotY(arg0: number): void;
        getPivotX(): number;
        setPivotX(arg0: number): void;
        getPivotY(): number;
        setRotX(arg0: number): void;
        setRotY(arg0: number): void;
        getRotX(): number;
        getRotY(): number;
        getRotationVector(): $Vector3d;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getChildBones(): $List<$GeoBone>;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getWorldPosition(): $Vector3d;
        getRotZ(): number;
        getReset(): boolean;
        getInflate(): number;
        setPosZ(arg0: number): void;
        setScaleZ(arg0: number): void;
        getScaleZ(): number;
        setRotZ(arg0: number): void;
        setPivotZ(arg0: number): void;
        getPosZ(): number;
        getPivotZ(): number;
        getPosY(): number;
        getPosX(): number;
        getLocalPosition(): $Vector3d;
        setHidden(arg0: boolean): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        setChildrenHidden(arg0: boolean): void;
        shouldNeverRender(): boolean;
        saveSnapshot(): $BoneSnapshot;
        resetStateChanges(): void;
        isTrackingMatrices(): boolean;
        getModelPosition(): $Vector3d;
        getPositionVector(): $Vector3d;
        getScaleVector(): $Vector3d;
        hasScaleChanged(): boolean;
        isHidingChildren(): boolean;
        hasPositionChanged(): boolean;
        setModelPosition(arg0: $Vector3d): void;
        hasRotationChanged(): boolean;
        markScaleAsChanged(): void;
        getInitialSnapshot(): $BoneSnapshot;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        markPositionAsChanged(): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        markRotationAsChanged(): void;
        getWorldSpaceNormal(): $Matrix3f;
        getModelRotationMatrix(): $Matrix4f;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setTrackingMatrices(arg0: boolean): void;
        saveInitialSnapshot(): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        getModelSpaceMatrix(): $Matrix4f;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        getCubes(): $List<$GeoCube>;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
        get rotationVector(): $Vector3d;
        get childBones(): $List<$GeoBone>;
        get worldPosition(): $Vector3d;
        get reset(): boolean;
        get inflate(): number;
        get localPosition(): $Vector3d;
        set childrenHidden(value: boolean);
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get hidingChildren(): boolean;
        get initialSnapshot(): $BoneSnapshot;
        get modelRotationMatrix(): $Matrix4f;
        get cubes(): $List<$GeoCube>;
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
    export type $GeoQuad_ = { direction?: $Direction_, normal?: $Vector3f, vertices?: $GeoVertex_[],  } | [direction?: $Direction_, normal?: $Vector3f, vertices?: $GeoVertex_[], ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        quads(): $GeoQuad[];
        mirror(): boolean;
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean,  } | [pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        texV(): number;
        texU(): number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { position?: $Vector3f, texV?: number, texU?: number,  } | [position?: $Vector3f, texV?: number, texU?: number, ];
}
