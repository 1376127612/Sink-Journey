import { $BlockGetter, $Explosion } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $PartRayTraceResult } from "@package/codechicken/multipart/util";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemDisplayContext_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Vector3 } from "@package/codechicken/lib/vec";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MicroblockPart } from "@package/codechicken/microblock/part";
import { $List } from "@package/java/util";
import { $CCRenderState } from "@package/codechicken/lib/render";
import { $Consumer_ } from "@package/java/util/function";
import { $MaskedCuboid } from "@package/codechicken/microblock/util";
import { $BlockPos_, $Direction_, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $Iterable_ } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/codechicken/microblock/api" {
    export class $MicroMaterial {
        getItem(): $ItemStack;
        getStrength(arg0: $Player): number;
        getLocalizedName(): $Component;
        initializeClient(arg0: $Consumer_<$MicroMaterialClient>): void;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getSound(): $SoundType;
        getLightEmission(): number;
        getRegistryName(): $ResourceLocation;
        isTransparent(): boolean;
        static CODEC: $Codec<$MicroMaterial>;
        static MULTIPART_TYPES: $ResourceKey<$Registry<$MicroMaterial>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MicroMaterial>;
        static REGISTRY: $Registry<$MicroMaterial>;
        constructor();
        get item(): $ItemStack;
        get localizedName(): $Component;
        get sound(): $SoundType;
        get lightEmission(): number;
        get registryName(): $ResourceLocation;
        get transparent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MicroMaterial}.
     */
    export type $MicroMaterial_ = RegistryTypes.CbMicroblockMicroMaterial;
    export interface $MicroMaterial extends RegistryMarked<RegistryTypes.CbMicroblockMicroMaterialTag, RegistryTypes.CbMicroblockMicroMaterial> {}
    export class $MicroMaterialClient {
        getItemRenderLayer(): $RenderType;
        static get(arg0: $MicroMaterial_): $MicroMaterialClient;
        getQuads(arg0: $MicroblockPart, arg1: $Direction_, arg2: $RenderType, arg3: $Iterable_<$MaskedCuboid>): $List<$BakedQuad>;
        addHitEffects(arg0: $MicroblockPart, arg1: $PartRayTraceResult, arg2: $ParticleEngine): void;
        addDestroyEffects(arg0: $MicroblockPart, arg1: $PartRayTraceResult, arg2: $ParticleEngine): void;
        addLandingEffects(arg0: $MicroblockPart, arg1: $PartRayTraceResult, arg2: $Vector3, arg3: number): void;
        addRunningEffects(arg0: $MicroblockPart, arg1: $PartRayTraceResult, arg2: $Entity): void;
        renderDynamic(arg0: $MicroblockPart, arg1: $ItemDisplayContext_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: number): void;
        /**
         * @deprecated
         */
        renderCuboids(arg0: $CCRenderState, arg1: $RenderType, arg2: $Iterable_<$MaskedCuboid>): void;
        constructor();
        get itemRenderLayer(): $RenderType;
    }
}
