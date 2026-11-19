import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/com/nred/nuclearcraft/gui" {
    export class $IGuiButton {
    }
    export interface $IGuiButton {
        getTextureWidth(): number;
        getTextureHeight(): number;
        getTexture(arg0: boolean): $ResourceLocation;
        get textureWidth(): number;
        get textureHeight(): number;
    }
}
