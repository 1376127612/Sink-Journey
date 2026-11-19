import { $GlStateManager$TextureState } from "@package/com/mojang/blaze3d/platform";

declare module "@package/dev/compactmods/gander/render/mixin" {
    export class $GlStateManagerAccessor {
        static getActiveTexture(): number;
        static getTEXTURES(): $GlStateManager$TextureState[];
        static get activeTexture(): number;
        static get TEXTURES(): $GlStateManager$TextureState[];
    }
    export interface $GlStateManagerAccessor {
    }
}
