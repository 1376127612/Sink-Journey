import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RenderStateShard$TexturingStateShard, $RenderStateShard$TransparencyStateShard, $RenderStateShard$OutputStateShard, $RenderStateShard$WriteMaskStateShard, $RenderType$CompositeRenderType, $RenderType$OutlineProperty, $RenderStateShard$LineStateShard, $RenderStateShard$OverlayStateShard, $RenderStateShard$CullStateShard, $RenderType$OutlineProperty_, $RenderStateShard$EmptyTextureStateShard, $RenderType$CompositeState, $RenderStateShard$ShaderStateShard, $ItemModelShaper, $RenderStateShard$DepthTestStateShard, $RenderStateShard$LightmapStateShard, $RenderStateShard$ColorLogicStateShard, $RenderStateShard$LayeringStateShard } from "@package/net/minecraft/client/renderer";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $TrackingEmitter, $ParticleRenderType, $SpriteSet, $Particle } from "@package/net/minecraft/client/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VertexConsumer, $VertexFormat, $PoseStack, $VertexFormat$Mode_ } from "@package/com/mojang/blaze3d/vertex";
import { $ModelResourceLocation } from "@package/net/minecraft/client/resources/model";
import { $Queue, $Map } from "@package/java/util";

declare module "@package/mysticmods/roots/mixin/client/accessor" {
    export class $AccessorMixinParticleEngine {
    }
    export interface $AccessorMixinParticleEngine {
        roots$GetParticles(): $Map<$ParticleRenderType, $Queue<$Particle>>;
        roots$GetTrackingEmitters(): $Queue<$TrackingEmitter>;
        roots$GetSpriteSets(): $Map<$ResourceLocation, $SpriteSet>;
    }
    export class $AccessorMixinCompositeState {
        static roots$CreateCompositeState(arg0: $RenderStateShard$EmptyTextureStateShard, arg1: $RenderStateShard$ShaderStateShard, arg2: $RenderStateShard$TransparencyStateShard, arg3: $RenderStateShard$DepthTestStateShard, arg4: $RenderStateShard$CullStateShard, arg5: $RenderStateShard$LightmapStateShard, arg6: $RenderStateShard$OverlayStateShard, arg7: $RenderStateShard$LayeringStateShard, arg8: $RenderStateShard$OutputStateShard, arg9: $RenderStateShard$TexturingStateShard, arg10: $RenderStateShard$WriteMaskStateShard, arg11: $RenderStateShard$LineStateShard, arg12: $RenderStateShard$ColorLogicStateShard, arg13: $RenderType$OutlineProperty_): $RenderType$CompositeState;
    }
    export interface $AccessorMixinCompositeState {
        roots$GetLineState(): $RenderStateShard$LineStateShard;
        roots$GetCullState(): $RenderStateShard$CullStateShard;
        roots$GetOverlayState(): $RenderStateShard$OverlayStateShard;
        roots$GetLayeringState(): $RenderStateShard$LayeringStateShard;
        roots$GetTextureState(): $RenderStateShard$EmptyTextureStateShard;
        roots$GetShaderState(): $RenderStateShard$ShaderStateShard;
        roots$GetTransparencyState(): $RenderStateShard$TransparencyStateShard;
        roots$GetDepthTestState(): $RenderStateShard$DepthTestStateShard;
        roots$GetLightmapState(): $RenderStateShard$LightmapStateShard;
        roots$GetTexturingState(): $RenderStateShard$TexturingStateShard;
        roots$GetWriteMaskState(): $RenderStateShard$WriteMaskStateShard;
        roots$GetColorLogicState(): $RenderStateShard$ColorLogicStateShard;
        roots$GetOutputState(): $RenderStateShard$OutputStateShard;
        roots$GetOutlineProperty(): $RenderType$OutlineProperty;
    }
    export class $AccessorMixinEntityRenderer {
    }
    export interface $AccessorMixinEntityRenderer {
        roots$GetEntityRenderDispatcher(): $EntityRenderDispatcher;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinEntityRenderer}.
     */
    export type $AccessorMixinEntityRenderer_ = (() => $EntityRenderDispatcher);
    export class $AccessorMixinItemRenderer {
    }
    export interface $AccessorMixinItemRenderer {
        roots$GetSpyglassInHandModel(): $ModelResourceLocation;
        roots$GetTridentInHandModel(): $ModelResourceLocation;
        roots$GetTridentModel(): $ModelResourceLocation;
        roots$GetSpyglassModel(): $ModelResourceLocation;
        roots$GetItemModelShaper(): $ItemModelShaper;
    }
    export class $AccessorMixinFrustum {
    }
    export interface $AccessorMixinFrustum {
        roots_1_21$cubeInFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinFrustum}.
     */
    export type $AccessorMixinFrustum_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => boolean);
    export class $AccessorMixinCompositeRenderType {
        static roots$CreateCompositeRenderType(arg0: string, arg1: $VertexFormat, arg2: $VertexFormat$Mode_, arg3: number, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState): $RenderType$CompositeRenderType;
    }
    export interface $AccessorMixinCompositeRenderType {
        rootsGetState(): $RenderType$CompositeState;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinCompositeRenderType}.
     */
    export type $AccessorMixinCompositeRenderType_ = (() => $RenderType$CompositeState);
    export class $AccessorMixinParticle {
    }
    export interface $AccessorMixinParticle {
        roots_1_21$isRemoved(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinParticle}.
     */
    export type $AccessorMixinParticle_ = (() => boolean);
    export class $AccessorMixinTextureAtlas {
    }
    export interface $AccessorMixinTextureAtlas {
        roots$GetWidth(): number;
        roots$GetHeight(): number;
    }
    export class $AccessorMixinLevelRenderer {
    }
    export interface $AccessorMixinLevelRenderer {
        roots$CallRenderHitOutline(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Entity, arg3: number, arg4: number, arg5: number, arg6: $BlockPos_, arg7: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMixinLevelRenderer}.
     */
    export type $AccessorMixinLevelRenderer_ = ((arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Entity, arg3: number, arg4: number, arg5: number, arg6: $BlockPos, arg7: $BlockState) => void);
    export class $AccessorMixinGui {
    }
    export interface $AccessorMixinGui {
        roots$SetLastToolHighlight(arg0: $ItemStack_): void;
        roots$SetToolHighlightTimer(arg0: number): void;
    }
}
