import { $JsonElement } from "@package/com/google/gson";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Tag } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $List_ } from "@package/java/util";
import { $FluidIngredientStacksInvoker } from "@package/dev/latvian/mods/kubejs/create/core/mixin";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Predicate, $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { SpecialTypes, RegistryMarked, RegistryTypes } from "@special/types";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $DataComponentPredicate, $DataComponentType_, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $FluidIngredientKJS, $SizedFluidIngredientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $FluidIngredientAccessor, $SizedFluidIngredientAccessor } from "@package/com/lowdragmc/mbd2/core/mixins";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/fluids/crafting" {
    export class $TagFluidIngredient extends $FluidIngredient {
        tag(): $TagKey<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$TagFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $TagKey_<$Fluid>);
    }
    export interface $FluidIngredientType<T> extends RegistryMarked<RegistryTypes.NeoforgeFluidIngredientTypeTag, RegistryTypes.NeoforgeFluidIngredientType> {}
    export class $FluidIngredientType<T extends $FluidIngredient> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
        constructor(arg0: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredientType}.
     */
    export type $FluidIngredientType_<T> = RegistryTypes.NeoforgeFluidIngredientType | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient_>, codec?: $MapCodec_<$FluidIngredient_>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient_>, codec?: $MapCodec_<$FluidIngredient_>, ];
    export class $DataComponentFluidIngredient extends $FluidIngredient {
        generateStacks(): $Stream<$FluidStack>;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Holder_<$Fluid>[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Holder_<$Fluid>[]): $FluidIngredient;
        static of<T>(arg0: boolean, arg1: $Supplier_<$DataComponentType<T>>, arg2: T, ...arg3: $Fluid_[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, arg2: $HolderSet_<$Fluid>): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Fluid_[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, arg2: $HolderSet_<$Fluid>): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Fluid_[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $FluidStack_): $FluidIngredient;
        static of<T>(arg0: boolean, arg1: $DataComponentType_<T>, arg2: T, ...arg3: $Fluid_[]): $FluidIngredient;
        isStrict(): boolean;
        components(): $DataComponentPredicate;
        fluids(): $HolderSet<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$DataComponentFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $HolderSet_<$Fluid>, arg1: $DataComponentPredicate, arg2: boolean);
        get strict(): boolean;
    }
    export class $EmptyFluidIngredient extends $FluidIngredient {
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$EmptyFluidIngredient>;
        static INSTANCE: $EmptyFluidIngredient;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
    }
    export class $SizedFluidIngredient implements $SizedFluidIngredientAccessor, $SizedFluidIngredientKJS {
        test(arg0: $FluidStack_): boolean;
        static of(arg0: $TagKey_<$Fluid>, arg1: number): $SizedFluidIngredient;
        static of(arg0: $FluidStack_): $SizedFluidIngredient;
        static of(arg0: $Fluid_, arg1: number): $SizedFluidIngredient;
        amount(): number;
        getFluids(): $FluidStack[];
        ingredient(): $FluidIngredient;
        self(): $SizedFluidIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toNestedJson(): $JsonElement;
        toFlatJson(): $JsonElement;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        setCachedStacks(arg0: $FluidStack_[]): void;
        static NESTED_CODEC: $Codec<$SizedFluidIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedFluidIngredient>;
        static FLAT_CODEC: $Codec<$SizedFluidIngredient>;
        constructor(arg0: $FluidIngredient_, arg1: number);
        get fluids(): $FluidStack[];
        set cachedStacks(value: $FluidStack_[]);
    }
    export class $FluidIngredient implements $Predicate<$FluidStack>, $FluidIngredientAccessor, $FluidIngredientKJS, $FluidIngredientStacksInvoker {
        self(): $FluidIngredient;
        hasNoFluids(): boolean;
        getStacks(): $FluidStack[];
        test(arg0: $FluidStack_): boolean;
        isEmpty(): boolean;
        static of(...arg0: $Fluid_[]): $FluidIngredient;
        static of(...arg0: $FluidStack_[]): $FluidIngredient;
        static of(): $FluidIngredient;
        static single(arg0: $FluidStack_): $FluidIngredient;
        static single(arg0: $Fluid_): $FluidIngredient;
        static single(arg0: $Holder_<$Fluid>): $FluidIngredient;
        static empty(): $FluidIngredient;
        getType(): $FluidIngredientType<never>;
        static tag(arg0: $TagKey_<$Fluid>): $FluidIngredient;
        isSimple(): boolean;
        or(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        negate(): $Predicate<$FluidStack>;
        and(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        getCodec(): $Codec<never>;
        withAmount(amount: number): $SizedFluidIngredient;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        toNBT(): $Tag;
        toJson(): $JsonElement;
        callGenerateStacks(): $Stream<$FluidStack>;
        setStacks(arg0: $FluidStack_[]): void;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $Codec<$FluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor();
        get type(): $FluidIngredientType<never>;
        get simple(): boolean;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredient}.
     */
    export type $FluidIngredient_ = $Fluid_ | RegExp | `#${RegistryTypes.FluidTag}` | `@${SpecialTypes.ModId}`;
    export class $IntersectionFluidIngredient extends $FluidIngredient {
        generateStacks(): $Stream<$FluidStack>;
        static of(...arg0: $FluidIngredient_[]): $FluidIngredient;
        children(): $List<$FluidIngredient>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$IntersectionFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $List_<$FluidIngredient_>);
    }
    export class $SingleFluidIngredient extends $FluidIngredient {
        fluid(): $Holder<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$SingleFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $Holder_<$Fluid>);
    }
    export class $CompoundFluidIngredient extends $FluidIngredient {
        generateStacks(): $Stream<$FluidStack>;
        static of(arg0: $Stream<$FluidIngredient_>): $FluidIngredient;
        static of(...arg0: $FluidIngredient_[]): $FluidIngredient;
        static of(arg0: $List_<$FluidIngredient_>): $FluidIngredient;
        children(): $List<$FluidIngredient>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$CompoundFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $List_<$FluidIngredient_>);
    }
    export class $DifferenceFluidIngredient extends $FluidIngredient {
        subtracted(): $FluidIngredient;
        generateStacks(): $Stream<$FluidStack>;
        base(): $FluidIngredient;
        static of(arg0: $FluidIngredient_, arg1: $FluidIngredient_): $FluidIngredient;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$DifferenceFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $FluidIngredient_, arg1: $FluidIngredient_);
    }
}
