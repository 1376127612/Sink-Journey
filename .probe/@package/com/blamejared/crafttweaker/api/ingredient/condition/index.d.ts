import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemStack } from "@package/com/blamejared/crafttweaker/api/item";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/blamejared/crafttweaker/api/ingredient/condition" {
    export interface $IIngredientConditionSerializer<T> extends RegistryMarked<RegistryTypes.CrafttweakerConditionSerializerTag, RegistryTypes.CrafttweakerConditionSerializer> {}
    export class $IngredientConditions implements $Predicate<$IItemStack> {
        getCommandString(arg0: string): string;
        componentFilter(): $Predicate<$DataComponentType<never>>;
        test(arg0: $IItemStack): boolean;
        isEmpty(): boolean;
        add(arg0: $IIngredientCondition): void;
        copy(): $IngredientConditions;
        conditions(): $List<$IIngredientCondition>;
        or(arg0: $Predicate_<$IItemStack>): $Predicate<$IItemStack>;
        negate(): $Predicate<$IItemStack>;
        and(arg0: $Predicate_<$IItemStack>): $Predicate<$IItemStack>;
        static CODEC: $Codec<$IngredientConditions>;
        static EMPTY: $IngredientConditions;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientConditions>;
        constructor();
        constructor(arg0: $List_<$IIngredientCondition>);
        get empty(): boolean;
    }
    export class $IIngredientConditionSerializer<T extends $IIngredientCondition> {
        static CODEC: $Codec<$IIngredientConditionSerializer<$IIngredientCondition>>;
    }
    export interface $IIngredientConditionSerializer<T extends $IIngredientCondition> {
        codec(): $MapCodec<T>;
        getType(): $ResourceLocation;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        get type(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientConditionSerializer}.
     */
    export type $IIngredientConditionSerializer_<T> = RegistryTypes.CrafttweakerConditionSerializer;
    export class $IIngredientCondition {
        static CODEC: $Codec<$IIngredientCondition>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IIngredientCondition>;
    }
    export interface $IIngredientCondition {
        getCommandString(arg0: string): string;
        componentFilter(): $Predicate<$DataComponentType<never>>;
        getSerializer(): $IIngredientConditionSerializer<$IIngredientCondition>;
        matches(arg0: $IItemStack): boolean;
        getType(): $ResourceLocation;
        get serializer(): $IIngredientConditionSerializer<$IIngredientCondition>;
        get type(): $ResourceLocation;
    }
}
