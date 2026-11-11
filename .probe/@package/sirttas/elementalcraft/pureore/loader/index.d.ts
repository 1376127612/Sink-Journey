import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder_, $HolderSet$Named, $RegistryAccess, $Holder } from "@package/net/minecraft/core";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $RecipeType_, $Recipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $OrePurificationRecipe } from "@package/sirttas/elementalcraft/recipe/instrument/io/purification";
import { $Record } from "@package/java/lang";
import { $List, $Set } from "@package/java/util";

declare module "@package/sirttas/elementalcraft/pureore/loader" {
    export class $PureOreLoaderType<T extends $IPureOreLoader> extends $Record {
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $PureOreLoaderType}.
     */
    export type $PureOreLoaderType_<T> = RegistryTypes.ElementalcraftPureOreLoaderSerializer | { codec?: $MapCodec_<$IPureOreLoader>,  } | [codec?: $MapCodec_<$IPureOreLoader>, ];
    export interface $PureOreLoaderType<T> extends RegistryMarked<RegistryTypes.ElementalcraftPureOreLoaderSerializerTag, RegistryTypes.ElementalcraftPureOreLoaderSerializer> {}
    export class $IPureOreLoader {
        static CODEC: $Codec<$IPureOreLoader>;
    }
    export interface $IPureOreLoader {
        type(): $PureOreLoaderType<$IPureOreLoader>;
        generate(arg0: $RegistryAccess): $List<$LoadedPureOre>;
        getOrder(): number;
        get order(): number;
    }
    export class $LoadedPureOre {
        contains(arg0: $Holder_<$Item>): boolean;
        getId(): $ResourceLocation;
        getInput(): $Ingredient;
        getOrePurificationRecipe(): $OrePurificationRecipe;
        addRecipe<C extends $RecipeInput, T extends $Recipe<C>>(arg0: T, arg1: $ItemStack_): void;
        addTag(arg0: $HolderSet$Named<$Item_>): void;
        addTag(arg0: $TagKey_<$Item>): void;
        getRecipe<C extends $RecipeInput, T extends $Recipe<C>>(arg0: $RecipeType_<T>): T;
        getResultForColor(): $ItemStack;
        isProcessable(): boolean;
        getOres(): $Set<$Holder<$Item>>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number);
        get id(): $ResourceLocation;
        get input(): $Ingredient;
        get orePurificationRecipe(): $OrePurificationRecipe;
        get resultForColor(): $ItemStack;
        get processable(): boolean;
        get ores(): $Set<$Holder<$Item>>;
    }
}
