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
        getMaterial(material: $ModelMaterial): $TextureAtlasSprite;
        getTransformation(): $ModelTransform;
        pushWarning(warning: string): void;
        walkModelTree<T>(modelInstance: $UntypedModelInstance, walker: $ModelWalker_<T>): (T) | undefined;
        walkModelTree<T>(model: $ResourceLocation_, walker: $ModelWalker_<T>): (T) | undefined;
        getModelIdentifier(): $ResourceLocation;
        getModel(identifier: $ResourceLocation_): $ModelInstance<never>;
        getMissingBakedModel(): $BakedModel;
        get transformation(): $ModelTransform;
        get modelIdentifier(): $ResourceLocation;
        get missingBakedModel(): $BakedModel;
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
        getMaterial(key: string): $Either<string, $ModelMaterial>;
        getEmissive(): boolean;
        getGeometry(): $ModelGeometry;
        getGuiLight(): $BlockModel$GuiLight;
        getItemOverrides(): $List<$ItemOverride>;
        getMaterials(): $Map<string, $Either<string, $ModelMaterial>>;
        getParents(): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        getTransform(): $ModelTransform;
        getShade(): boolean;
        getAmbientOcclusion(): boolean;
        getDependencies(): $Collection<$ResourceLocation>;
        getItemTransform(type: $ItemDisplayContext_): $ItemTransform;
        bakeModel(context: $ModelBakingContext, modelStack: $ModelStack): $BakedModel;
        getCondition(): $ModelPredicate;
        get emissive(): boolean;
        get geometry(): $ModelGeometry;
        get guiLight(): $BlockModel$GuiLight;
        get itemOverrides(): $List<$ItemOverride>;
        get materials(): $Map<string, $Either<string, $ModelMaterial>>;
        get parents(): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        get transform(): $ModelTransform;
        get shade(): boolean;
        get ambientOcclusion(): boolean;
        get dependencies(): $Collection<$ResourceLocation>;
        get condition(): $ModelPredicate;
    }
    export class $ModelWalker<T> {
        static walkModelTree<T>(modelResolver: $ModelResolver_, modelInstance: $UntypedModelInstance, walker: $ModelWalker_<T>): (T) | undefined;
        static walkModelTree<T>(modelResolver: $ModelResolver_, model: $ResourceLocation_, walker: $ModelWalker_<T>): (T) | undefined;
    }
    export interface $ModelWalker<T> {
        consume(modelInstance: $UntypedModelInstance, stack: $ModelStack): $ModelWalker$Result<T>;
    }
    /**
     * Values that may be interpreted as {@link $ModelWalker}.
     */
    export type $ModelWalker_<T> = ((modelInstance: $UntypedModelInstance, stack: $ModelStack) => $ModelWalker$Result<T>);
    export class $ModelMaterial {
        static isMissingSprite(sprite: $TextureAtlasSprite): boolean;
        static missingBlockAtlas(): $ModelMaterial;
        static of(atlas: $ResourceLocation_, texture: $ResourceLocation_): $ModelMaterial;
        static of(material: $Material): $ModelMaterial;
        static blockAtlas(texture: $ResourceLocation_): $ModelMaterial;
        static missing(atlas: $ResourceLocation_): $ModelMaterial;
    }
    export interface $ModelMaterial {
        isMissing(): boolean;
        atlas(): $ResourceLocation;
        toMaterial(): $Material;
        texture(): $ResourceLocation;
    }
    export class $CullableQuads {
        static builder(): $CullableQuads$Builder;
        static empty(): $CullableQuads;
        static combine(...quads: $CullableQuads[]): $CullableQuads;
    }
    export interface $CullableQuads {
        south(): $List<$QuadAccess>;
        west(): $List<$QuadAccess>;
        east(): $List<$QuadAccess>;
        north(): $List<$QuadAccess>;
        mutateQuads(mutator: $CullableQuads$QuadMutator_): $CullableQuads;
        unculled(): $List<$QuadAccess>;
        get(cullDirection: $Direction_): $List<$QuadAccess>;
        all(): $List<$QuadAccess>;
        up(): $List<$QuadAccess>;
        down(): $List<$QuadAccess>;
    }
    export class $ModelWalker$Result<T> {
        static proceed<T>(): $ModelWalker$Result<T>;
        static endBranch<T>(): $ModelWalker$Result<T>;
        static stopIfPresent<T>(value: (T) | undefined): $ModelWalker$Result<T>;
        static stop(): $ModelWalker$Result<void>;
        static stop<T>(value: T): $ModelWalker$Result<T>;
    }
    export interface $ModelWalker$Result<T> {
    }
    export class $CullableQuads$Builder {
    }
    export interface $CullableQuads$Builder {
        mutateQuads(mutator: $CullableQuads$QuadMutator_): $CullableQuads$Builder;
        add(quads: $CullableQuads): $CullableQuads$Builder;
        add(cullDirection: $Direction_, quad: $QuadAccess): $CullableQuads$Builder;
        add(cullDirection: $Direction_, quads: $List_<$QuadAccess>): $CullableQuads$Builder;
        build(): $CullableQuads;
    }
    export class $ModelStack {
        static empty(): $ModelStack;
    }
    export interface $ModelStack extends $Iterable<$UntypedModelInstance> {
        composeTransforms(): $ModelTransform;
        combineConditions(): $ModelPredicate;
        findAmbientOcclusionIncludingParents(modelResolver: $ModelResolver_): boolean;
        findMaterials(): $Map<string, $Either<string, $ModelMaterial>>;
        findEmissive(): boolean;
        findItemTransform(type: $ItemDisplayContext_): $ItemTransform;
        findGuiLight(): $BlockModel$GuiLight;
        findGeometry(): $ModelGeometry;
        walkParents<T>(modelResolver: $ModelResolver_, walker: $ModelWalker_<T>): (T) | undefined;
        walkStackAndParents<T>(modelResolver: $ModelResolver_, walker: $ModelWalker_<T>): (T) | undefined;
        findMaterialRecursive(key: string, reportCircular: $Consumer_<$List<string>>): $ModelMaterial;
        findAmbientOcclusion(): boolean;
        findMaterial(key: string): $Either<string, $ModelMaterial>;
        findMaterialsIncludingParents(modelResolver: $ModelResolver_): $Map<string, $Either<string, $ModelMaterial>>;
        findGeometryIncludingParents(modelResolver: $ModelResolver_): $ModelGeometry;
        findMaterialRecursiveIncludingParents(key: string, reportCircular: $Consumer_<$List<string>>, modelResolver: $ModelResolver_): $ModelMaterial;
        findShade(): boolean;
        walkStack<T>(walker: $ModelWalker_<T>): (T) | undefined;
        size(): number;
        get(index: number): $UntypedModelInstance;
        push(instance: $UntypedModelInstance): $ModelStack;
        push(instance: $UntypedModelInstance, identifier: $ResourceLocation_): $ModelStack;
        getIdentifier(index: number): $ResourceLocation;
        findShadeIncludingParents(modelResolver: $ModelResolver_): boolean;
        findProperty<X, C>(property: $Property<X, C>, context: C): (X) | undefined;
        findProperty<X>(property: $Property<X, void>): (X) | undefined;
        findGuiLightIncludingParents(modelResolver: $ModelResolver_): $BlockModel$GuiLight;
        findPropertyIncludingParents<X>(property: $Property<X, void>, modelResolver: $ModelResolver_): (X) | undefined;
        findPropertyIncludingParents<X, C>(property: $Property<X, C>, context: C, modelResolver: $ModelResolver_): (X) | undefined;
        findEmissiveIncludingParents(modelResolver: $ModelResolver_): boolean;
        findMaterialIncludingParents(key: string, modelResolver: $ModelResolver_): $Either<string, $ModelMaterial>;
        findItemTransformIncludingParents(type: $ItemDisplayContext_, modelResolver: $ModelResolver_): $ItemTransform;
    }
    export class $ModelTransform {
        static of(matrix: $Matrix4fc, uvLock: boolean): $ModelTransform;
        static of(modelState: $ModelState): $ModelTransform;
        static of(transformation: $Transformation, uvLock: boolean): $ModelTransform;
        static identity(): $ModelTransform;
        static compose(...transforms: $ModelTransform[]): $ModelTransform;
    }
    export interface $ModelTransform {
        toModelState(): $ModelState;
        leftRotation(): $Quaternionfc;
        toTransformation(): $Transformation;
        scale(): $Vector3fc;
        rightRotation(): $Quaternionfc;
        translation(): $Vector3fc;
        matrix(): $Matrix4fc;
        uvLock(): boolean;
    }
    export class $ModelResolver {
        static MISSING_MODEL: $ResourceLocation;
    }
    export interface $ModelResolver {
        getModelOrMissing(identifier: $ResourceLocation_): $UntypedModelInstance;
        getModel(identifier: $ResourceLocation_): $UntypedModelInstance;
    }
    /**
     * Values that may be interpreted as {@link $ModelResolver}.
     */
    export type $ModelResolver_ = ((identifier: $ResourceLocation) => $UntypedModelInstance);
}
