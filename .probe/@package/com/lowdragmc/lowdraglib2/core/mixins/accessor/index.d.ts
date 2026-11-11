import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $UnbakedModel, $ModelResourceLocation } from "@package/net/minecraft/client/resources/model";
import { $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map, $List_ } from "@package/java/util";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexFormatElement, $VertexFormatElement_, $ByteBufferBuilder$Result } from "@package/com/mojang/blaze3d/vertex";
import { $ClientTooltipPositioner_, $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Object } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Uniform, $Program, $Program$Type_, $Program$Type } from "@package/com/mojang/blaze3d/shaders";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector4f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor" {
    export class $GuiGraphicsAccessor {
    }
    export interface $GuiGraphicsAccessor {
        ldlib2$renderTooltipInternal(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        ldlib2$setTooltipStack(arg0: $ItemStack_): void;
    }
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        setMouseGrabbed(arg0: boolean): void;
        getActiveButton(): number;
        set mouseGrabbed(value: boolean);
        get activeButton(): number;
    }
    export class $ModelBakeryAccessor {
    }
    export interface $ModelBakeryAccessor {
        getMissingModel(): $UnbakedModel;
        getTopLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        invokeGetModel(arg0: $ResourceLocation_): $UnbakedModel;
        getUnbakedCache(): $Map<$ResourceLocation, $UnbakedModel>;
        get missingModel(): $UnbakedModel;
        get topLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        get unbakedCache(): $Map<$ResourceLocation, $UnbakedModel>;
    }
    export class $ProgramTypeAccessor {
        static ldlib2$createProgramType(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
    }
    export interface $ProgramTypeAccessor {
    }
    export class $ObjModelAccessor {
    }
    export interface $ObjModelAccessor {
        invokeMakeQuad(arg0: number[][], arg1: number, arg2: $Vector4f, arg3: $Vector4f, arg4: $TextureAtlasSprite, arg5: $Transformation): $Pair<$BakedQuad, $Direction>;
    }
    /**
     * Values that may be interpreted as {@link $ObjModelAccessor}.
     */
    export type $ObjModelAccessor_ = ((arg0: number[][], arg1: number, arg2: $Vector4f, arg3: $Vector4f, arg4: $TextureAtlasSprite, arg5: $Transformation) => $Pair<$BakedQuad, $Direction_>);
    export class $BufferBuilderAccessor {
    }
    export interface $BufferBuilderAccessor {
        invokeBeginElement(arg0: $VertexFormatElement_): number;
    }
    /**
     * Values that may be interpreted as {@link $BufferBuilderAccessor}.
     */
    export type $BufferBuilderAccessor_ = ((arg0: $VertexFormatElement) => number);
    export class $MeshDataAccessor {
    }
    export interface $MeshDataAccessor {
        setIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
        getIndexBuffer(): $ByteBufferBuilder$Result;
    }
    export class $SlotAccessor {
    }
    export interface $SlotAccessor {
        getY(): number;
        getX(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
    }
    export class $DelegatingOpsAccessor<T> {
    }
    export interface $DelegatingOpsAccessor<T> {
        getDelegate(): $DynamicOps<T>;
        get delegate(): $DynamicOps<T>;
    }
    /**
     * Values that may be interpreted as {@link $DelegatingOpsAccessor}.
     */
    export type $DelegatingOpsAccessor_<T> = (() => $DynamicOps<T>);
    export class $ShaderInstanceAccessor {
        static invokeGetOrCreate(arg0: $ResourceProvider_, arg1: $Program$Type_, arg2: string): $Program;
    }
    export interface $ShaderInstanceAccessor {
        getSamplerMap(): $Map<string, $Object>;
        getSamplerNames(): $List<string>;
        getUniformMap(): $Map<string, $Uniform>;
        get samplerMap(): $Map<string, $Object>;
        get samplerNames(): $List<string>;
        get uniformMap(): $Map<string, $Uniform>;
    }
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        ldlib2$getClientTickCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = (() => number);
}
