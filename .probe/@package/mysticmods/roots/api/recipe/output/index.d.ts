import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/recipe/output" {
    export class $ChanceOutput extends $Record {
        chance(): number;
        copy(): $ChanceOutput;
        multiply(arg0: number): $ChanceOutput;
        getResult(arg0: $RandomSource): $ItemStack;
        output(): $ItemStack;
        static getOutputs(arg0: $List_<$ChanceOutput_>, arg1: $RandomSource): $List<$ItemStack>;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$ChanceOutput>>;
        static CODEC: $Codec<$ChanceOutput>;
        static LIST_CODEC: $Codec<$List<$ChanceOutput>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChanceOutput>;
        constructor(output: $ItemStack_, chance: number);
    }
    /**
     * Values that may be interpreted as {@link $ChanceOutput}.
     */
    export type $ChanceOutput_ = { output?: $ItemStack_, chance?: number,  } | [output?: $ItemStack_, chance?: number, ];
}
