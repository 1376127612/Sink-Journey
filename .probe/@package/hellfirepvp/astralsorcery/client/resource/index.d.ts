import { $RenderStateShard$TextureStateShard } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as query from "@package/hellfirepvp/astralsorcery/client/resource/query";

declare module "@package/hellfirepvp/astralsorcery/client/resource" {
    export class $UVFrame extends $Record {
        static fromAtlasSprite(arg0: $TextureAtlasSprite): $UVFrame;
        multiplyVHeight(arg0: number): $UVFrame;
        v(): number;
        u(): number;
        uWidth(): number;
        vHeight(): number;
        multiplyUWidth(arg0: number): $UVFrame;
        static FULL: $UVFrame;
        constructor(u: number, v: number, uWidth: number, vHeight: number);
    }
    /**
     * Values that may be interpreted as {@link $UVFrame}.
     */
    export type $UVFrame_ = { uWidth?: number, v?: number, u?: number, vHeight?: number,  } | [uWidth?: number, v?: number, u?: number, vHeight?: number, ];
    export class $SpriteSheet extends $AbstractRenderTexture {
        getColumns(): number;
        getRows(): number;
        getUV(arg0: number): $UVFrame;
        getFrameCount(): number;
        getTexture(): $AbstractRenderTexture;
        constructor(arg0: $AbstractRenderTexture, arg1: number, arg2: number);
        get columns(): number;
        get rows(): number;
        get frameCount(): number;
        get texture(): $AbstractRenderTexture;
    }
    export class $AbstractRenderTexture implements $ReloadableResource {
        asState(): $RenderStateShard$TextureStateShard;
        getUV(): $UVFrame;
        asSpriteSheet(arg0: number, arg1: number): $SpriteSheet;
        asSpriteSheet(): $SpriteSheet;
        getKey(): $ResourceLocation;
        bindTexture(): void;
        get UV(): $UVFrame;
        get key(): $ResourceLocation;
    }
    export class $AssetLocation extends $Enum<$AssetLocation> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $AssetLocation[];
        static valueOf(arg0: string): $AssetLocation;
        getLocation(): string;
        getRemappedEnumConstantName(): string;
        static SCREEN: $AssetLocation;
        static BLOCKS: $AssetLocation;
        static CONSTELLATION: $AssetLocation;
        static ENVIRONMENT: $AssetLocation;
        static MISC: $AssetLocation;
        static EFFECT: $AssetLocation;
        static ITEMS: $AssetLocation;
        static MODEL: $AssetLocation;
        get serializedName(): string;
        get location(): string;
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
