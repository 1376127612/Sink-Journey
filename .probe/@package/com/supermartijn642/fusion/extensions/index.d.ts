import { $Triple, $Triple_ } from "@package/com/supermartijn642/fusion/util";
import { $FusionModelPart } from "@package/com/supermartijn642/fusion/entity/model";
import { $SpriteInstance } from "@package/com/supermartijn642/fusion/api/texture/custom";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $FusionPackMetadata } from "@package/com/supermartijn642/fusion/resources";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelInstance } from "@package/com/supermartijn642/fusion/api/model";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/supermartijn642/fusion/extensions" {
    export class $EntityRendererExtension {
    }
    export interface $EntityRendererExtension {
        getFusionModelParts(): $List<$FusionModelPart>;
        setFusionModelParts(parts: $List_<$FusionModelPart>): void;
    }
    export class $EntityExtension {
    }
    export interface $EntityExtension {
        setFusionModel(layerIndex: number, model: $Triple_<$ModelPart, $ResourceLocation_, number>): void;
        getFusionModel(layerIndex: number): $Triple<$ModelPart, $ResourceLocation, number>;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        markFusionRecomputeModels(): void;
    }
    export class $BlockModelExtension {
    }
    export interface $BlockModelExtension {
        setFusionModel(model: $ModelInstance<never>): void;
        getFusionModel(): $ModelInstance<never>;
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
        getFusionSpriteInstance(): $SpriteInstance;
        setFusionSpriteInstance(instance: $SpriteInstance): void;
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
