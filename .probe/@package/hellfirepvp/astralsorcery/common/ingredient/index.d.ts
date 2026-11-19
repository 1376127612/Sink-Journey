import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Predicate, $Predicate_, $Supplier_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Set } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IngredientType, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/ingredient" {
    export class $IngredientBridge implements $ICustomIngredient {
        getItems(): $Stream<$ItemStack>;
        getIngredientType(): $IngredientBridge$Type;
        getFluidIngredient(): $SizedFluidIngredient;
        test(arg0: $ItemStack_): boolean;
        isEmpty(): boolean;
        static of(arg0: $Ingredient_): $IngredientBridge;
        static of(arg0: $SizedFluidIngredient): $IngredientBridge;
        getType(): $IngredientType<never>;
        consume(arg0: $Supplier_<$ItemStack>, arg1: $Function_<$ItemStack, $ItemStack>, arg2: $Consumer_<$ItemStack>, arg3: boolean): boolean;
        isSimple(): boolean;
        getIngredient(): $Ingredient;
        toVanilla(): $Ingredient;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        isWildcard(): boolean;
        testItem(item: $Item_): boolean;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$IngredientBridge>;
        static EMPTY: $IngredientBridge;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientBridge>;
        get items(): $Stream<$ItemStack>;
        get ingredientType(): $IngredientBridge$Type;
        get fluidIngredient(): $SizedFluidIngredient;
        get empty(): boolean;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get ingredient(): $Ingredient;
        get wildcard(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
    }
    export class $IngredientBridge$Type extends $Enum<$IngredientBridge$Type> implements $StringRepresentable {
        getSerializedName(): string;
        getIngredientCodec(): $MapCodec<$IngredientBridge>;
        getIngredientStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IngredientBridge>;
        static values(): $IngredientBridge$Type[];
        static valueOf(arg0: string): $IngredientBridge$Type;
        getRemappedEnumConstantName(): string;
        static ITEM: $IngredientBridge$Type;
        static FLUID: $IngredientBridge$Type;
        get serializedName(): string;
        get ingredientCodec(): $MapCodec<$IngredientBridge>;
        get ingredientStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IngredientBridge>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $IngredientBridge$Type}.
     */
    export type $IngredientBridge$Type_ = "item" | "fluid";
}
