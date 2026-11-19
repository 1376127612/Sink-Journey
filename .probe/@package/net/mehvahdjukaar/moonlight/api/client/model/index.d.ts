import { $EntityModel } from "@package/net/minecraft/client/model";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";

declare module "@package/net/mehvahdjukaar/moonlight/api/client/model" {
    export class $IModelPartExtension {
        static getTextureSize(arg0: $EntityModel<never>): number[];
        static getRootPart(arg0: $EntityModel<never>): $ModelPart;
    }
    export interface $IModelPartExtension {
        moonlight$setDimensions(arg0: number, arg1: number): void;
        moonlight$getTextWidth(): number;
        moonlight$getTextHeight(): number;
    }
}
