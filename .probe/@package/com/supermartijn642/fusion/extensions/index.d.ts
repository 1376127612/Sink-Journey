import { $Triple, $Triple_ } from "@package/com/supermartijn642/fusion/util";
import { $FusionModelPart } from "@package/com/supermartijn642/fusion/entity/model";
import { $SpriteInstance } from "@package/com/supermartijn642/fusion/api/texture/custom";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $FusionPackMetadata } from "@package/com/supermartijn642/fusion/resources";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $ModelInstance } from "@package/com/supermartijn642/fusion/api/model";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/supermartijn642/fusion/extensions" {
    export class $EntityRendererExtension {
    }
    export interface $EntityRendererExtension {
        setFusionModelParts(parts: $List_<$FusionModelPart>): void;
        getFusionModelParts(): $List<$FusionModelPart>;
    }
    export class $EntityExtension {
    }
    export interface $EntityExtension {
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        markFusionRecomputeModels(): void;
        getFusionModel(layerIndex: number): $Triple<$ModelPart, $ResourceLocation, number>;
        setFusionModel(layerIndex: number, model: $Triple_<$ModelPart, $ResourceLocation_, number>): void;
    }
    export class $BlockModelExtension {
    }
    export interface $BlockModelExtension {
        getFusionModel(): $ModelInstance<never>;
        setFusionModel(model: $ModelInstance<never>): void;
    }
    export class $PackExtension {
    }
    export interface $PackExtension {
        getFusionMetadata(): $FusionPackMetadata;
        get fusionMetadata(): $FusionPackMetadata;
    }
    /**
     * Values that may be interpreted as {@link $PackExtension}.
     */
    export type $PackExtension_ = (() => $FusionPackMetadata);
    export class $TextureAtlasSpriteExtension {
    }
    export interface $TextureAtlasSpriteExtension {
        setFusionSpriteInstance(instance: $SpriteInstance): void;
        getFusionSpriteInstance(): $SpriteInstance;
    }
    export class $BufferSourceExtension {
    }
    export interface $BufferSourceExtension {
        fusionGetLastRenderType(): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $BufferSourceExtension}.
     */
    export type $BufferSourceExtension_ = (() => $RenderType);
}
