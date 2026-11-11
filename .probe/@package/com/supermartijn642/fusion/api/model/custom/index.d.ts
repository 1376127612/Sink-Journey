import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ItemOverride, $BlockModel$GuiLight, $ItemTransform } from "@package/net/minecraft/client/renderer/block/model";
import { $Material, $ModelState, $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $List, $Map, $List_, $Collection } from "@package/java/util";
import { $QuadAccess, $MutableQuad } from "@package/com/supermartijn642/fusion/api/model/custom/quad";
import { $ModelGeometry } from "@package/com/supermartijn642/fusion/api/model/custom/geometry";
import { $Consumer_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates";
import { $ModelInstance } from "@package/com/supermartijn642/fusion/api/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $PropertyGetter, $Property, $Either } from "@package/com/supermartijn642/fusion/api/util";
import { $Vector3fc, $Matrix4fc, $Quaternionfc } from "@package/org/joml";
export * as geometry from "@package/com/supermartijn642/fusion/api/model/custom/geometry";
export * as quad from "@package/com/supermartijn642/fusion/api/model/custom/quad";

declare module "@package/com/supermartijn642/fusion/api/model/custom" {
    export class $ModelBakingContext {
    }
    export interface $ModelBakingContext extends $ModelResolver {
        getModel(identifier: $ResourceLocation_): $ModelInstance<never>;
        getMaterial(material: $ModelMaterial): $TextureAtlasSprite;
        getTransformation(): $ModelTransform;
        pushWarning(warning: string): void;
        getMissingBakedModel(): $BakedModel;
        walkModelTree<T>(modelInstance: $UntypedModelInstance, walker: $ModelWalker_<T>): (T) | undefined;
        walkModelTree<T>(model: $ResourceLocation_, walker: $ModelWalker_<T>): (T) | undefined;
        getModelIdentifier(): $ResourceLocation;
        get transformation(): $ModelTransform;
        get missingBakedModel(): $BakedModel;
        get modelIdentifier(): $ResourceLocation;
    }
    export class $CullableQuads$QuadMutator {
    }
    export interface $CullableQuads$QuadMutator {
        mutate(cullDirection: $Direction_, quad: $MutableQuad): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CullableQuads$QuadMutator}.
     */
    export type $CullableQuads$QuadMutator_ = ((cullDirection: $Direction, quad: $MutableQuad) => boolean);
    export class $UntypedModelInstance {
    }
    export interface $UntypedModelInstance extends $PropertyGetter {
        getParents(): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        getTransform(): $ModelTransform;
        getDependencies(): $Collection<$ResourceLocation>;
        getShade(): boolean;
        getMaterial(key: string): $Either<string, $ModelMaterial>;
        getCondition(): $ModelPredicate;
        getItemTransform(type: $ItemDisplayContext_): $ItemTransform;
        bakeModel(context: $ModelBakingContext, modelStack: $ModelStack): $BakedModel;
        getGeometry(): $ModelGeometry;
        getGuiLight(): $BlockModel$GuiLight;
        getItemOverrides(): $List<$ItemOverride>;
        getEmissive(): boolean;
        getMaterials(): $Map<string, $Either<string, $ModelMaterial>>;
        getAmbientOcclusion(): boolean;
        get parents(): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        get transform(): $ModelTransform;
        get dependencies(): $Collection<$ResourceLocation>;
        get shade(): boolean;
        get condition(): $ModelPredicate;
        get geometry(): $ModelGeometry;
        get guiLight(): $BlockModel$GuiLight;
        get itemOverrides(): $List<$ItemOverride>;
        get emissive(): boolean;
        get materials(): $Map<string, $Either<string, $ModelMaterial>>;
        get ambientOcclusion(): boolean;
    }
    export class $ModelWalker<T> {
        static walkModelTree<T>(modelResolver: $ModelResolver_, model: $ResourceLocation_, walker: $ModelWalker_<T>): (T) | undefined;
        static walkModelTree<T>(modelResolver: $ModelResolver_, modelInstance: $UntypedModelInstance, walker: $ModelWalker_<T>): (T) | undefined;
    }
    export interface $ModelWalker<T> {
        consume(modelInstance: $UntypedModelInstance, stack: $ModelStack): $ModelWalker$Result<T>;
    }
    /**
     * Values that may be interpreted as {@link $ModelWalker}.
     */
    export type $ModelWalker_<T> = ((modelInstance: $UntypedModelInstance, stack: $ModelStack) => $ModelWalker$Result<T>);
    export class $ModelMaterial {
        static of(material: $Material): $ModelMaterial;
        static of(atlas: $ResourceLocation_, texture: $ResourceLocation_): $ModelMaterial;
        static missing(atlas: $ResourceLocation_): $ModelMaterial;
        static missingBlockAtlas(): $ModelMaterial;
        static blockAtlas(texture: $ResourceLocation_): $ModelMaterial;
        static isMissingSprite(sprite: $TextureAtlasSprite): boolean;
    }
    export interface $ModelMaterial {
        texture(): $ResourceLocation;
        isMissing(): boolean;
        toMaterial(): $Material;
        atlas(): $ResourceLocation;
    }
    export class $CullableQuads {
        static builder(): $CullableQuads$Builder;
        static empty(): $CullableQuads;
        static combine(...quads: $CullableQuads[]): $CullableQuads;
    }
    export interface $CullableQuads {
        unculled(): $List<$QuadAccess>;
        get(cullDirection: $Direction_): $List<$QuadAccess>;
        all(): $List<$QuadAccess>;
        up(): $List<$QuadAccess>;
        down(): $List<$QuadAccess>;
        north(): $List<$QuadAccess>;
        east(): $List<$QuadAccess>;
        south(): $List<$QuadAccess>;
        west(): $List<$QuadAccess>;
        mutateQuads(mutator: $CullableQuads$QuadMutator_): $CullableQuads;
    }
    export class $ModelWalker$Result<T> {
        static stop(): $ModelWalker$Result<void>;
        static stop<T>(value: T): $ModelWalker$Result<T>;
        static proceed<T>(): $ModelWalker$Result<T>;
        static endBranch<T>(): $ModelWalker$Result<T>;
        static stopIfPresent<T>(value: (T) | undefined): $ModelWalker$Result<T>;
    }
    export interface $ModelWalker$Result<T> {
    }
    export class $CullableQuads$Builder {
    }
    export interface $CullableQuads$Builder {
        add(quads: $CullableQuads): $CullableQuads$Builder;
        add(cullDirection: $Direction_, quad: $QuadAccess): $CullableQuads$Builder;
        add(cullDirection: $Direction_, quads: $List_<$QuadAccess>): $CullableQuads$Builder;
        build(): $CullableQuads;
        mutateQuads(mutator: $CullableQuads$QuadMutator_): $CullableQuads$Builder;
    }
    export class $ModelStack {
        static empty(): $ModelStack;
    }
    export interface $ModelStack extends $Iterable<$UntypedModelInstance> {
        walkStack<T>(walker: $ModelWalker_<T>): (T) | undefined;
        findShade(): boolean;
        findMaterialRecursiveIncludingParents(key: string, reportCircular: $Consumer_<$List<string>>, modelResolver: $ModelResolver_): $ModelMaterial;
        size(): number;
        get(index: number): $UntypedModelInstance;
        push(instance: $UntypedModelInstance, identifier: $ResourceLocation_): $ModelStack;
        push(instance: $UntypedModelInstance): $ModelStack;
        getIdentifier(index: number): $ResourceLocation;
        findMaterial(key: string): $Either<string, $ModelMaterial>;
        findProperty<X>(property: $Property<X, void>): (X) | undefined;
        findProperty<X, C>(property: $Property<X, C>, context: C): (X) | undefined;
        composeTransforms(): $ModelTransform;
        findEmissiveIncludingParents(modelResolver: $ModelResolver_): boolean;
        findMaterialIncludingParents(key: string, modelResolver: $ModelResolver_): $Either<string, $ModelMaterial>;
        findItemTransformIncludingParents(type: $ItemDisplayContext_, modelResolver: $ModelResolver_): $ItemTransform;
        findPropertyIncludingParents<X, C>(property: $Property<X, C>, context: C, modelResolver: $ModelResolver_): (X) | undefined;
        findPropertyIncludingParents<X>(property: $Property<X, void>, modelResolver: $ModelResolver_): (X) | undefined;
        findGuiLightIncludingParents(modelResolver: $ModelResolver_): $BlockModel$GuiLight;
        combineConditions(): $ModelPredicate;
        findShadeIncludingParents(modelResolver: $ModelResolver_): boolean;
        findAmbientOcclusionIncludingParents(modelResolver: $ModelResolver_): boolean;
        findItemTransform(type: $ItemDisplayContext_): $ItemTransform;
        walkParents<T>(modelResolver: $ModelResolver_, walker: $ModelWalker_<T>): (T) | undefined;
        findGuiLight(): $BlockModel$GuiLight;
        findGeometry(): $ModelGeometry;
        findEmissive(): boolean;
        findMaterials(): $Map<string, $Either<string, $ModelMaterial>>;
        findAmbientOcclusion(): boolean;
        walkStackAndParents<T>(modelResolver: $ModelResolver_, walker: $ModelWalker_<T>): (T) | undefined;
        findMaterialRecursive(key: string, reportCircular: $Consumer_<$List<string>>): $ModelMaterial;
        findMaterialsIncludingParents(modelResolver: $ModelResolver_): $Map<string, $Either<string, $ModelMaterial>>;
        findGeometryIncludingParents(modelResolver: $ModelResolver_): $ModelGeometry;
    }
    export class $ModelTransform {
        static of(matrix: $Matrix4fc, uvLock: boolean): $ModelTransform;
        static of(modelState: $ModelState): $ModelTransform;
        static of(transformation: $Transformation, uvLock: boolean): $ModelTransform;
        static identity(): $ModelTransform;
        static compose(...transforms: $ModelTransform[]): $ModelTransform;
    }
    export interface $ModelTransform {
        scale(): $Vector3fc;
        translation(): $Vector3fc;
        rightRotation(): $Quaternionfc;
        toTransformation(): $Transformation;
        matrix(): $Matrix4fc;
        uvLock(): boolean;
        leftRotation(): $Quaternionfc;
        toModelState(): $ModelState;
    }
    export class $ModelResolver {
        static MISSING_MODEL: $ResourceLocation;
    }
    export interface $ModelResolver {
        getModel(identifier: $ResourceLocation_): $UntypedModelInstance;
        getModelOrMissing(identifier: $ResourceLocation_): $UntypedModelInstance;
    }
    /**
     * Values that may be interpreted as {@link $ModelResolver}.
     */
    export type $ModelResolver_ = ((identifier: $ResourceLocation) => $UntypedModelInstance);
}
