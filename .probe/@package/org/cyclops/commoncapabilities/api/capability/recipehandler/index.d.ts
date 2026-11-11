import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Byte2ObjectMap } from "@package/it/unimi/dsi/fastutil/bytes";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IMixedIngredients, $IngredientComponent, $IngredientComponent_, $IPrototypedIngredient } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $List, $List_, $Map_, $Collection, $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";

declare module "@package/org/cyclops/commoncapabilities/api/capability/recipehandler" {
    export class $IPrototypedIngredientAlternatives<T, M> {
        static SERIALIZERS: $Byte2ObjectMap<$IPrototypedIngredientAlternatives$ISerializer<never>>;
    }
    export interface $IPrototypedIngredientAlternatives<T, M> {
        getSerializer(): $IPrototypedIngredientAlternatives$ISerializer<never>;
        getAlternatives(): $Collection<$IPrototypedIngredient<T, M>>;
        get serializer(): $IPrototypedIngredientAlternatives$ISerializer<never>;
        get alternatives(): $Collection<$IPrototypedIngredient<T, M>>;
    }
    export class $IPrototypedIngredientAlternatives$ISerializer<A extends $IPrototypedIngredientAlternatives<never, never>> {
    }
    export interface $IPrototypedIngredientAlternatives$ISerializer<A extends $IPrototypedIngredientAlternatives<never, never>> {
        getId(): number;
        deserialize<T, M>(arg0: $HolderLookup$Provider, arg1: $IngredientComponent_<T, M>, arg2: $Tag_): A;
        serialize<T, M>(arg0: $HolderLookup$Provider, arg1: $IngredientComponent_<T, M>, arg2: A): $Tag;
        get id(): number;
    }
    export class $IRecipeDefinition {
        static deserialize(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $RecipeDefinition;
        static serialize(arg0: $HolderLookup$Provider, arg1: $IRecipeDefinition): $CompoundTag;
    }
    export interface $IRecipeDefinition extends $Comparable<$IRecipeDefinition> {
        getOutput(): $IMixedIngredients;
        getInputs<T, M>(arg0: $IngredientComponent_<T, M>): $List<$IPrototypedIngredientAlternatives<T, M>>;
        isInputReusable<T, M>(arg0: $IngredientComponent_<T, M>, arg1: number): boolean;
        getInputComponents(): $Set<$IngredientComponent<never, never>>;
        getRecipeId(): $ResourceLocation;
        get output(): $IMixedIngredients;
        get inputComponents(): $Set<$IngredientComponent<never, never>>;
        get recipeId(): $ResourceLocation;
    }
    export class $RecipeDefinition implements $IRecipeDefinition {
        compareTo(arg0: $IRecipeDefinition): number;
        getOutput(): $IMixedIngredients;
        getInputs<T, M>(arg0: $IngredientComponent_<T, M>): $List<$IPrototypedIngredientAlternatives<T, M>>;
        isInputReusable<T, M>(arg0: $IngredientComponent_<T, M>, arg1: number): boolean;
        getInputComponents(): $Set<$IngredientComponent<never, never>>;
        static fromRecipeId(arg0: $HolderLookup$Provider, arg1: $ResourceLocation_): $RecipeDefinition;
        getRecipeId(): $ResourceLocation;
        static ofIngredients<T, R, M>(arg0: $IngredientComponent_<T, M>, arg1: $List_<$List_<$IPrototypedIngredient<T, M>>>, arg2: $IMixedIngredients): $RecipeDefinition;
        static ofIngredients<T, R, M>(arg0: $IngredientComponent_<T, M>, arg1: $List_<$List_<$IPrototypedIngredient<T, M>>>, arg2: $IMixedIngredients, arg3: $ResourceLocation_ | null): $RecipeDefinition;
        static ofAlternatives<T, R, M>(arg0: $IngredientComponent_<T, M>, arg1: $List_<$IPrototypedIngredientAlternatives<T, M>>, arg2: $IMixedIngredients): $RecipeDefinition;
        static ofAlternatives<T, R, M>(arg0: $IngredientComponent_<T, M>, arg1: $List_<$IPrototypedIngredientAlternatives<T, M>>, arg2: $IMixedIngredients, arg3: $ResourceLocation_ | null): $RecipeDefinition;
        static ofIngredient<T, R, M>(arg0: $IngredientComponent_<T, M>, arg1: $List_<$IPrototypedIngredient<T, M>>, arg2: $IMixedIngredients): $RecipeDefinition;
        constructor(arg0: $Map_<$IngredientComponent_<never, never>, $List_<$IPrototypedIngredientAlternatives<never, never>>>, arg1: $Map_<$IngredientComponent_<never, never>, $List_<boolean>>, arg2: $IMixedIngredients, arg3: $ResourceLocation_ | null);
        constructor(arg0: $Map_<$IngredientComponent_<never, never>, $List_<$IPrototypedIngredientAlternatives<never, never>>>, arg1: $Map_<$IngredientComponent_<never, never>, $List_<boolean>>, arg2: $IMixedIngredients);
        constructor(arg0: $Map_<$IngredientComponent_<never, never>, $List_<$IPrototypedIngredientAlternatives<never, never>>>, arg1: $IMixedIngredients);
        constructor(arg0: $Map_<$IngredientComponent_<never, never>, $List_<$IPrototypedIngredientAlternatives<never, never>>>, arg1: $IMixedIngredients, arg2: $ResourceLocation_ | null);
        get output(): $IMixedIngredients;
        get inputComponents(): $Set<$IngredientComponent<never, never>>;
        get recipeId(): $ResourceLocation;
    }
}
