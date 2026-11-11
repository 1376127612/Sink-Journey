import { $PostPass } from "@package/net/minecraft/client/renderer";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $List } from "@package/java/util";

declare module "@package/hellfirepvp/astralsorcery/mixin/client" {
    export class $AccessorPostChain {
    }
    export interface $AccessorPostChain {
        getResourceProvider(): $ResourceProvider;
        getPasses(): $List<$PostPass>;
        get resourceProvider(): $ResourceProvider;
        get passes(): $List<$PostPass>;
    }
    export class $AccessorPostPass {
    }
    export interface $AccessorPostPass {
        setInTarget(arg0: $RenderTarget): void;
        setOutTarget(arg0: $RenderTarget): void;
        set inTarget(value: $RenderTarget);
        set outTarget(value: $RenderTarget);
    }
    export class $AccessorGameRenderer {
    }
    export interface $AccessorGameRenderer {
        getFov(): number;
        callGetFov(arg0: $Camera, arg1: number, arg2: boolean): number;
        getOldFov(): number;
        get fov(): number;
        get oldFov(): number;
    }
}
