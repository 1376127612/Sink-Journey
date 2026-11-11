import { $Codec } from "@package/com/mojang/serialization";
import { $AssetLocation_, $SpriteSheet, $AbstractRenderTexture } from "@package/hellfirepvp/astralsorcery/client/resource";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/client/resource/query" {
    export class $SpriteSheetQuery extends $TextureQuery {
        resolveSprite(): $SpriteSheet;
        getRows(): number;
        getColumns(): number;
        static CODEC: $Codec<$TextureQuery>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TextureQuery>;
        constructor(arg0: $AssetLocation_, arg1: number, arg2: number, ...arg3: string[]);
        get rows(): number;
        get columns(): number;
    }
    export class $TextureQuery {
        resolve(): $AbstractRenderTexture;
        asSpriteSheet(arg0: number, arg1: number): $SpriteSheetQuery;
        static CODEC: $Codec<$TextureQuery>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TextureQuery>;
        constructor(arg0: $AssetLocation_, ...arg1: string[]);
    }
}
