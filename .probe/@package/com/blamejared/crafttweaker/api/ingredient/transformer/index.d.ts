import { $Function_, $Function, $UnaryOperator } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemStack } from "@package/com/blamejared/crafttweaker/api/item";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/blamejared/crafttweaker/api/ingredient/transformer" {
    export class $IIngredientTransformerSerializer<T extends $IIngredientTransformer> {
        static CODEC: $Codec<$IIngredientTransformerSerializer<$IIngredientTransformer>>;
    }
    export interface $IIngredientTransformerSerializer<T extends $IIngredientTransformer> {
        codec(): $MapCodec<T>;
        getType(): $ResourceLocation;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        get type(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientTransformerSerializer}.
     */
    export type $IIngredientTransformerSerializer_<T> = RegistryTypes.CrafttweakerTransformerSerializer;
    export interface $IIngredientTransformerSerializer<T> extends RegistryMarked<RegistryTypes.CrafttweakerTransformerSerializerTag, RegistryTypes.CrafttweakerTransformerSerializer> {}
    export class $IngredientTransformers implements $UnaryOperator<$IItemStack> {
        getCommandString(arg0: string): string;
        isEmpty(): boolean;
        add(arg0: $IIngredientTransformer): void;
        apply(arg0: $IItemStack): $IItemStack;
        copy(): $IngredientTransformers;
        transformers(): $List<$IIngredientTransformer>;
        compose<V>(arg0: $Function_<V, $IItemStack>): $Function<V, $IItemStack>;
        andThen<V>(arg0: $Function_<$IItemStack, V>): $Function<$IItemStack, V>;
        static CODEC: $Codec<$IngredientTransformers>;
        static EMPTY: $IngredientTransformers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientTransformers>;
        constructor(arg0: $List_<$IIngredientTransformer>);
        constructor();
        get empty(): boolean;
    }
    export class $IIngredientTransformer {
        static CODEC: $Codec<$IIngredientTransformer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IIngredientTransformer>;
    }
    export interface $IIngredientTransformer {
        getCommandString(arg0: string): string;
        getSerializer(): $IIngredientTransformerSerializer<never>;
        transform(arg0: $IItemStack): $IItemStack;
        get serializer(): $IIngredientTransformerSerializer<never>;
    }
}
