import { $IntUnaryOperator_, $IntUnaryOperator } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BakedModel, $ModelManager, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $Record } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
export * as turtle from "@package/dan200/computercraft/api/client/turtle";

declare module "@package/dan200/computercraft/api/client" {
    export class $ModelLocation {
        static ofModel(arg0: $ModelResourceLocation_): $ModelLocation;
        getDependencies(): $Stream<$ResourceLocation>;
        getModel(arg0: $ModelManager): $BakedModel;
        static ofResource(arg0: $ResourceLocation_): $ModelLocation;
        get dependencies(): $Stream<$ResourceLocation>;
    }
    export class $TransformedModel extends $Record {
        static of(arg0: $ItemStack_, arg1: $Transformation): $TransformedModel;
        static of(arg0: $ModelResourceLocation_): $TransformedModel;
        static of(arg0: $ResourceLocation_): $TransformedModel;
        static of(arg0: $ModelLocation): $TransformedModel;
        model(): $BakedModel;
        matrix(): $Transformation;
        getTint(arg0: number): number;
        tints(): $IntUnaryOperator;
        constructor(model: $BakedModel, matrix: $Transformation, tints: $IntUnaryOperator_);
        constructor(arg0: $BakedModel, arg1: $Transformation);
        constructor(arg0: $BakedModel);
    }
    /**
     * Values that may be interpreted as {@link $TransformedModel}.
     */
    export type $TransformedModel_ = { tints?: $IntUnaryOperator_, matrix?: $Transformation, model?: $BakedModel,  } | [tints?: $IntUnaryOperator_, matrix?: $Transformation, model?: $BakedModel, ];
}
