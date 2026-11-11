import { $RenderStateShard$TextureStateShard } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as query from "@package/hellfirepvp/astralsorcery/client/resource/query";

declare module "@package/hellfirepvp/astralsorcery/client/resource" {
    export class $UVFrame extends $Record {
        v(): number;
        u(): number;
        uWidth(): number;
        vHeight(): number;
        static fromAtlasSprite(arg0: $TextureAtlasSprite): $UVFrame;
        multiplyVHeight(arg0: number): $UVFrame;
        multiplyUWidth(arg0: number): $UVFrame;
        static FULL: $UVFrame;
        constructor(u: number, v: number, uWidth: number, vHeight: number);
    }
    /**
     * Values that may be interpreted as {@link $UVFrame}.
     */
    export type $UVFrame_ = { v?: number, u?: number, vHeight?: number, uWidth?: number,  } | [v?: number, u?: number, vHeight?: number, uWidth?: number, ];
    export class $SpriteSheet extends $AbstractRenderTexture {
        getTexture(): $AbstractRenderTexture;
        getRows(): number;
        getColumns(): number;
        getFrameCount(): number;
        getUV(arg0: number): $UVFrame;
        constructor(arg0: $AbstractRenderTexture, arg1: number, arg2: number);
        get texture(): $AbstractRenderTexture;
        get rows(): number;
        get columns(): number;
        get frameCount(): number;
    }
    export class $AbstractRenderTexture implements $ReloadableResource {
        getKey(): $ResourceLocation;
        bindTexture(): void;
        asState(): $RenderStateShard$TextureStateShard;
        asSpriteSheet(arg0: number, arg1: number): $SpriteSheet;
        asSpriteSheet(): $SpriteSheet;
        getUV(): $UVFrame;
        get key(): $ResourceLocation;
        get UV(): $UVFrame;
    }
    export class $AssetLocation extends $Enum<$AssetLocation> implements $StringRepresentable {
        static values(): $AssetLocation[];
        static valueOf(arg0: string): $AssetLocation;
        getLocation(): string;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SCREEN: $AssetLocation;
        static BLOCKS: $AssetLocation;
        static CONSTELLATION: $AssetLocation;
        static ENVIRONMENT: $AssetLocation;
        static MISC: $AssetLocation;
        static EFFECT: $AssetLocation;
        static ITEMS: $AssetLocation;
        static MODEL: $AssetLocation;
        get location(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AssetLocation}.
     */
    export type $AssetLocation_ = "items" | "blocks" | "screen" | "misc" | "model" | "effect" | "environment" | "constellation";
    export class $ReloadableResource {
    }
    export interface $ReloadableResource {
        invalidateAndReload(): void;
    }
    /**
     * Values that may be interpreted as {@link $ReloadableResource}.
     */
    export type $ReloadableResource_ = (() => void);
}
