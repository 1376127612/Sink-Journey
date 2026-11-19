import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $TextColor, $Style, $TextColor_ } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Predicate_, $Function_ } from "@package/java/util/function";
import { $IDataMapInitialize, $IStyled } from "@package/mysticmods/roots/api/registry";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/grove" {
    export class $IGroveNumber {
        static codec<T extends $IGroveNumber>(arg0: $Function_<$GroveNumber, T>): $Codec<T>;
    }
    export interface $IGroveNumber {
        grove(): $Grove;
        type(): $IGroveNumber$Type;
        value(): number;
    }
    export class $ReputationRanks extends $Record {
        getProgress(arg0: number): $ReputationRanks$Progress;
        getCurrentRankMax(arg0: number): number;
        threshold4(): number;
        threshold2(): number;
        threshold3(): number;
        threshold1(): number;
        getRank(arg0: number): number;
        getCurrentRankProgress(arg0: number): number;
        static CODEC: $Codec<$ReputationRanks>;
        static MAP_CODEC: $MapCodec<$ReputationRanks>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ReputationRanks>;
        constructor(threshold1: number, threshold2: number, threshold3: number, threshold4: number);
    }
    /**
     * Values that may be interpreted as {@link $ReputationRanks}.
     */
    export type $ReputationRanks_ = { threshold4?: number, threshold3?: number, threshold2?: number, threshold1?: number,  } | [threshold4?: number, threshold3?: number, threshold2?: number, threshold1?: number, ];
    export class $GroveNumber extends $Record implements $IGroveNumber {
        static fromTag(arg0: $TagKey_<$Grove>, arg1: number, arg2: $IGroveNumber$Type_): $List<$GroveNumber>;
        grove(): $Grove;
        static reputation(arg0: $Grove_, arg1: number): $GroveNumber;
        static reputation(arg0: $Holder_<$Grove>, arg1: number): $GroveNumber;
        type(): $IGroveNumber$Type;
        value(): number;
        static all(arg0: number, arg1: $IGroveNumber$Type_): $List<$GroveNumber>;
        static power(arg0: $Grove_, arg1: number): $GroveNumber;
        static power(arg0: $Holder_<$Grove>, arg1: number): $GroveNumber;
        static CODEC: $Codec<$GroveNumber>;
        static MAP_CODEC: $MapCodec<$GroveNumber>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GroveNumber>;
        constructor(arg0: $Holder_<$Grove>, arg1: number, arg2: $IGroveNumber$Type_);
        constructor(grove: $Grove_, value: number, type: $IGroveNumber$Type_);
    }
    /**
     * Values that may be interpreted as {@link $GroveNumber}.
     */
    export type $GroveNumber_ = { value?: number, grove?: $Grove_, type?: $IGroveNumber$Type_,  } | [value?: number, grove?: $Grove_, type?: $IGroveNumber$Type_, ];
    export class $IGroveNumber$Type extends $Enum<$IGroveNumber$Type> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $IGroveNumber$Type[];
        static valueOf(arg0: string): $IGroveNumber$Type;
        getRemappedEnumConstantName(): string;
        static REPUTATION: $IGroveNumber$Type;
        static CODEC: $Codec<$IGroveNumber$Type>;
        static BY_ID: $IntFunction<$IGroveNumber$Type>;
        static POWER: $IGroveNumber$Type;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $IGroveNumber$Type>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $IGroveNumber$Type}.
     */
    export type $IGroveNumber$Type_ = "reputation" | "power";
    export class $Grove implements $IStyled, $IDataMapInitialize<$Grove> {
        getIcon(): $ItemStack;
        getTextColor(): $TextColor;
        getOrCreateStyle(): $Style;
        getColor2(): number;
        getColor1(): number;
        getRanks(): $ReputationRanks;
        getDefaultRanks(): $ReputationRanks;
        init(arg0: $Holder_<$Grove>): void;
        is(arg0: $ResourceKey_<$Grove>): boolean;
        is(arg0: $Predicate_<$ResourceKey<$Grove>>): boolean;
        is(arg0: $TagKey_<$Grove>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        builtInRegistryHolder(): $Holder<$Grove>;
        getOrCreateDescriptionId(): string;
        isBold(): boolean;
        getStyledName(arg0: boolean): $MutableComponent;
        getStyledName(): $MutableComponent;
        getStyle(): $Style;
        performInit(arg0: $Holder_<never>): void;
        getName(arg0: $Style): $MutableComponent;
        getName(): $MutableComponent;
        getDescriptionId(): string;
        /**
         * @deprecated
         */
        constructor(arg0: $ChatFormatting_, arg1: number, arg2: number);
        constructor(arg0: $TextColor_, arg1: number, arg2: number);
        get icon(): $ItemStack;
        get textColor(): $TextColor;
        get orCreateStyle(): $Style;
        get color2(): number;
        get color1(): number;
        get ranks(): $ReputationRanks;
        get defaultRanks(): $ReputationRanks;
        get orCreateDescriptionId(): string;
        get bold(): boolean;
        get style(): $Style;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $Grove}.
     */
    export type $Grove_ = RegistryTypes.RootsGroves;
    export interface $Grove extends RegistryMarked<RegistryTypes.RootsGrovesTag, RegistryTypes.RootsGroves> {}
    export class $ReputationRanks$Progress extends $Record {
        nextRank(): number;
        total(): number;
        progress(): number;
        rank(): number;
        constructor(rank: number, progress: number, nextRank: number, total: number);
    }
    /**
     * Values that may be interpreted as {@link $ReputationRanks$Progress}.
     */
    export type $ReputationRanks$Progress_ = { total?: number, nextRank?: number, progress?: number, rank?: number,  } | [total?: number, nextRank?: number, progress?: number, rank?: number, ];
}
