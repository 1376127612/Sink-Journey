import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";

declare module "@package/xaero/lib/client/level/block" {
    export class $BlockTextureColorUtils {
        getBlockTintIndex(arg0: $BlockState_): number;
        getBlockTextureColor(arg0: $BlockState_, arg1: boolean, arg2: $Level_, arg3: $Registry<$Block_>, arg4: $BlockPos_): number;
        requestCachedColoursClear(): void;
        getParticleIcon(arg0: $BlockModelShaper, arg1: $BakedModel, arg2: $BlockState_): $TextureAtlasSprite;
    }
}
