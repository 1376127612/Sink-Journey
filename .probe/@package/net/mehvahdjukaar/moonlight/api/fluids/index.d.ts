import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List, $Map, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Triplet } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/fluids" {
    export class $FluidContainerList implements $Iterable<$FluidContainerList$Category> {
        getCategories(): $List<$FluidContainerList$Category>;
        getFilled(arg0: $Item_): ($Item) | undefined;
        getCategoryFromFilled(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getCategoryFromEmpty(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getPossibleFilled(): $Collection<$Item>;
        getPossibleEmpty(): $Collection<$Item>;
        iterator(): $Iterator<$FluidContainerList$Category>;
        getEmpty(arg0: $Item_): ($Item) | undefined;
        spliterator(): $Spliterator<$FluidContainerList$Category>;
        forEach(arg0: $Consumer_<$FluidContainerList$Category>): void;
        static CODEC: $Codec<$FluidContainerList>;
        constructor(arg0: $List_<$FluidContainerList$Category>);
        constructor();
        [Symbol.iterator](): Iterator<$FluidContainerList$Category>
        get categories(): $List<$FluidContainerList$Category>;
        get possibleFilled(): $Collection<$Item>;
        get possibleEmpty(): $Collection<$Item>;
    }
    export class $SoftFluid {
        getTranslatedName(): $Component;
        getStillTexture(): $ResourceLocation;
        getFlowingTexture(): $ResourceLocation;
        getEmptyContainer(arg0: $Item_): ($Item) | undefined;
        getLuminosity(): number;
        afterInit(): void;
        isColored(): boolean;
        static getFluidSpecificAttributes(arg0: $Fluid_): $Pair<number, $Component>;
        getAverageTextureTintColor(): number;
        getEquivalentFluids(): $HolderSet<$Fluid>;
        getPreservedComponents(): $HolderSet<$DataComponentType<never>>;
        static getRenderingData(arg0: $ResourceLocation_): $Triplet<$ResourceLocation, $ResourceLocation, number>;
        getTintMethod(): $SoftFluid$TintMethod;
        getFoodProvider(): $FoodProvider;
        getFilledContainer(arg0: $Item_): ($Item) | undefined;
        getVanillaFluid(): $Holder<$Fluid>;
        /**
         * @deprecated
         */
        isEmptyFluid(): boolean;
        getTextureOverride(): $ResourceLocation;
        getEmissivity(): number;
        isEnabled(): boolean;
        isEquivalent(arg0: $Holder_<$Fluid>): boolean;
        getTintColor(): number;
        getContainerList(): $FluidContainerList;
        isFood(): boolean;
        static BOTTLE_COUNT: number;
        isGenerated: boolean;
        static CODEC: $Codec<$SoftFluid>;
        static BUCKET_COUNT: number;
        static HOLDER_CODEC: $Codec<$Holder<$SoftFluid>>;
        static REFERENCE_CODEC: $Codec<$Holder<$SoftFluid>>;
        static TRANSLATABLE_COMPONENT: $Codec<$Component>;
        static BOWL_COUNT: number;
        static WATER_BUCKET_COUNT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SoftFluid>>;
        constructor(arg0: $Holder_<$Fluid>);
        get translatedName(): $Component;
        get stillTexture(): $ResourceLocation;
        get flowingTexture(): $ResourceLocation;
        get luminosity(): number;
        get colored(): boolean;
        get averageTextureTintColor(): number;
        get equivalentFluids(): $HolderSet<$Fluid>;
        get preservedComponents(): $HolderSet<$DataComponentType<never>>;
        get tintMethod(): $SoftFluid$TintMethod;
        get foodProvider(): $FoodProvider;
        get vanillaFluid(): $Holder<$Fluid>;
        get emptyFluid(): boolean;
        get textureOverride(): $ResourceLocation;
        get emissivity(): number;
        get enabled(): boolean;
        get tintColor(): number;
        get containerList(): $FluidContainerList;
        get food(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid}.
     */
    export type $SoftFluid_ = RegistryTypes.MoonlightSoftFluid;
    export class $FluidContainerList$Category {
        /**
         * @deprecated
         */
        getAmount(): number;
        getFillSound(): $SoundEvent;
        getFilledItems(): $List<$Item>;
        getEmptyContainer(): $Item;
        getFirstFilled(): ($Item) | undefined;
        isEmpty(): boolean;
        getCapacity(): number;
        getEmptySound(): $SoundEvent;
        static CODEC: $Codec<$FluidContainerList$Category>;
        get amount(): number;
        get fillSound(): $SoundEvent;
        get filledItems(): $List<$Item>;
        get emptyContainer(): $Item;
        get firstFilled(): ($Item) | undefined;
        get empty(): boolean;
        get capacity(): number;
        get emptySound(): $SoundEvent;
    }
    export interface $SoftFluid extends RegistryMarked<RegistryTypes.MoonlightSoftFluidTag, RegistryTypes.MoonlightSoftFluid> {}
    export class $SoftFluid$TintMethod extends $Enum<$SoftFluid$TintMethod> implements $StringRepresentable {
        getSerializedName(): string;
        appliesToFlowing(): boolean;
        appliesToStill(): boolean;
        static values(): $SoftFluid$TintMethod[];
        static valueOf(arg0: string): $SoftFluid$TintMethod;
        getRemappedEnumConstantName(): string;
        static FLOWING: $SoftFluid$TintMethod;
        static CODEC: $Codec<$SoftFluid$TintMethod>;
        static STILL_AND_FLOWING: $SoftFluid$TintMethod;
        static NO_TINT: $SoftFluid$TintMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid$TintMethod}.
     */
    export type $SoftFluid$TintMethod_ = "no_tint" | "flowing" | "still_and_flowing";
    export class $FoodProvider {
        getDivider(): number;
        getFoodItem(): $Item;
        isEmpty(): boolean;
        static create(arg0: $Item_, arg1: number): $FoodProvider;
        consume(arg0: $Player, arg1: $Level_, arg2: $Consumer_<$ItemStack>): boolean;
        static CODEC: $Codec<$FoodProvider>;
        static CUSTOM_PROVIDERS: $Map<$Item, $FoodProvider>;
        static EMPTY: $FoodProvider;
        get divider(): number;
        get foodItem(): $Item;
        get empty(): boolean;
    }
}
