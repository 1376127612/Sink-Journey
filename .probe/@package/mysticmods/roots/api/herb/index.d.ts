import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MutableComponent, $TextColor, $Style, $TextColor_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Predicate_ } from "@package/java/util/function";
import { $ICostedParent, $IStyled, $ICostedChild } from "@package/mysticmods/roots/api/registry";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ParentChargeType } from "@package/mysticmods/roots/api/spell";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/herb" {
    export class $Cost {
        getHolder(): $Holder<$Herb>;
        getHerb(): $Herb;
        static negateBase(): $Cost;
        static multTotal(arg0: $Holder_<$Herb>, arg1: number): $Cost;
        getValue(): number;
        static add(arg0: $Holder_<$Herb>, arg1: number): $Cost;
        getType(): $CostType;
        static negate(arg0: $Cost): $Cost;
        static mult(arg0: $Holder_<$Herb>, arg1: number): $Cost;
        static CODEC: $Codec<$Cost>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Cost>;
        constructor(arg0: $CostType_, arg1: $Holder_<$Herb>, arg2: number);
        get holder(): $Holder<$Herb>;
        get herb(): $Herb;
        get value(): number;
        get type(): $CostType;
    }
    export class $Costing {
        getChargeType(): $ParentChargeType;
        noCharge(): void;
        canAfford(arg0: $Player, arg1: boolean): boolean;
        updateHerbCache(arg0: $Player): void;
        shouldCharge(): boolean;
        discount(arg0: number): void;
        operations(): number;
        operations(arg0: number): void;
        charge(arg0: $Player, arg1: boolean): boolean;
        charge(arg0: $Player): boolean;
        charge(arg0: $Holder_<$ICostedChild>): void;
        charge(arg0: $ICostedChild): void;
        getTooltipCost(): $Map<$Herb, $Costing$HerbCost>;
        hasNoCharge(): boolean;
        constructor(arg0: $ICostedParent);
        get chargeType(): $ParentChargeType;
        get tooltipCost(): $Map<$Herb, $Costing$HerbCost>;
    }
    export interface $Herb extends RegistryMarked<RegistryTypes.RootsHerbsTag, RegistryTypes.RootsHerbs> {}
    export class $CostType extends $Enum<$CostType> implements $StringRepresentable {
        getSerializedName(): string;
        isMultiplicative(): boolean;
        static values(): $CostType[];
        static valueOf(arg0: string): $CostType;
        isNegative(): boolean;
        isAdditive(): boolean;
        getRemappedEnumConstantName(): string;
        static MULTIPLICATIVE_TOTAL: $CostType;
        static CODEC: $Codec<$CostType>;
        static ADDITIVE: $CostType;
        static NEGATE_BASE_COST: $CostType;
        static BY_ID: $IntFunction<$CostType>;
        static MULTIPLICATIVE_BASE: $CostType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CostType>;
        get serializedName(): string;
        get multiplicative(): boolean;
        get negative(): boolean;
        get additive(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CostType}.
     */
    export type $CostType_ = "additive" | "multiplicative_base" | "multiplicative_total" | "negate_base_cost";
    export class $Costing$HerbCost extends $Record {
        modifiers(): number;
        total(): number;
        constructor(total: number, modifiers: number);
    }
    /**
     * Values that may be interpreted as {@link $Costing$HerbCost}.
     */
    export type $Costing$HerbCost_ = { modifiers?: number, total?: number,  } | [modifiers?: number, total?: number, ];
    export class $CostInstance extends $Record {
        costs(): $List<$Cost>;
        static multTotal(arg0: $Holder_<$Herb>, arg1: number): $CostInstance;
        isEmpty(): boolean;
        static add(arg0: $Holder_<$Herb>, arg1: number): $CostInstance;
        static of(...arg0: $Cost[]): $CostInstance;
        static of(arg0: $List_<$Cost>): $CostInstance;
        static empty(): $CostInstance;
        static mult(arg0: $Holder_<$Herb>, arg1: number): $CostInstance;
        static CODEC: $Codec<$CostInstance>;
        static MAP_CODEC: $MapCodec<$CostInstance>;
        static EMPTY: $CostInstance;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CostInstance>;
        constructor(costs: $List_<$Cost>);
    }
    /**
     * Values that may be interpreted as {@link $CostInstance}.
     */
    export type $CostInstance_ = { costs?: $List_<$Cost>,  } | [costs?: $List_<$Cost>, ];
    export class $Herb implements $IStyled {
        getTextColor(): $TextColor;
        getOrCreateStyle(): $Style;
        static getHerb(arg0: $ItemStack_): $Herb;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $Herb_): boolean;
        is(arg0: $ResourceKey_<$Herb>): boolean;
        is(arg0: $Predicate_<$ResourceKey<$Herb>>): boolean;
        is(arg0: $TagKey_<$Herb>): boolean;
        getItem(): $Holder<$Item>;
        getTag(): $TagKey<$Item>;
        builtInRegistryHolder(): $Holder<$Herb>;
        getOrCreateDescriptionId(): string;
        isBold(): boolean;
        getStyledName(arg0: boolean): $MutableComponent;
        getStyledName(): $MutableComponent;
        getStyle(): $Style;
        getName(arg0: $Style): $MutableComponent;
        getName(): $MutableComponent;
        getDescriptionId(): string;
        /**
         * @deprecated
         */
        constructor(arg0: $Holder_<$Item>, arg1: $TagKey_<$Item>, arg2: $ChatFormatting_);
        constructor(arg0: $Holder_<$Item>, arg1: $TagKey_<$Item>, arg2: $TextColor_);
        get textColor(): $TextColor;
        get orCreateStyle(): $Style;
        get item(): $Holder<$Item>;
        get tag(): $TagKey<$Item>;
        get orCreateDescriptionId(): string;
        get bold(): boolean;
        get style(): $Style;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $Herb}.
     */
    export type $Herb_ = RegistryTypes.RootsHerbs;
}
