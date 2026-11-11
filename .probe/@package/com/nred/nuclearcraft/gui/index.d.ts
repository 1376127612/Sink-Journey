import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/com/nred/nuclearcraft/gui" {
    export class $IGuiButton {
    }
    export interface $IGuiButton {
        getTexture(arg0: boolean): $ResourceLocation;
        getTextureWidth(): number;
        getTextureHeight(): number;
        get textureWidth(): number;
        get textureHeight(): number;
    }
}
