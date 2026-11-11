import { $Predicate_, $IntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $DyeColor } from "@package/net/minecraft/world/item";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $Component, $TextColor_, $MutableComponent, $Component_, $TextColor } from "@package/net/minecraft/network/chat";
import { $IIncrementalEnum, $SupportsColorMap } from "@package/mekanism/api";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Object, $Enum } from "@package/java/lang";
import { $TranslatableEnum } from "@package/net/neoforged/neoforge/common";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mekanism/api/text" {
    export class $EnumColor extends $Enum<$EnumColor> implements $IIncrementalEnum<$EnumColor>, $SupportsColorMap, $StringRepresentable {
        getName(): $MutableComponent;
        static values(): $EnumColor[];
        static valueOf(arg0: string): $EnumColor;
        getSerializedName(): string;
        getColor(): $TextColor;
        getMapColor(): $MapColor;
        byIndex(arg0: number): $EnumColor;
        getDyeColor(): $DyeColor;
        getColoredName(): $Component;
        setColorFromAtlas(arg0: number[]): void;
        getPackedColor(): number;
        getEnglishName(): string;
        getRgbCode(): number[];
        getLangEntry(): $ILangEntry;
        getRegistryPrefix(): string;
        adjust(arg0: number): $EnumColor;
        adjust(arg0: number, arg1: $Predicate_<$EnumColor>): $EnumColor;
        getNext(arg0: $Predicate_<$EnumColor>): $EnumColor;
        getNext(): $EnumColor;
        getPrevious(): $EnumColor;
        getPrevious(arg0: $Predicate_<$EnumColor>): $EnumColor;
        getColor(arg0: number): number;
        getRgbCodeFloat(): number[];
        getPackedColor(arg0: number): number;
        getRemappedEnumConstantName(): string;
        static GRAY: $EnumColor;
        static AQUA: $EnumColor;
        static WHITE: $EnumColor;
        static CODEC: $Codec<$EnumColor>;
        code: string;
        static DARK_AQUA: $EnumColor;
        static BY_ID: $IntFunction<$EnumColor>;
        static PURPLE: $EnumColor;
        static DARK_BLUE: $EnumColor;
        static INDIGO: $EnumColor;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EnumColor>;
        static RED: $EnumColor;
        static BRIGHT_PINK: $EnumColor;
        static PINK: $EnumColor;
        static DARK_RED: $EnumColor;
        static BLACK: $EnumColor;
        static DARK_GREEN: $EnumColor;
        static BRIGHT_GREEN: $EnumColor;
        static YELLOW: $EnumColor;
        static DARK_GRAY: $EnumColor;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$ByteBuf, ($EnumColor) | undefined>;
        static BROWN: $EnumColor;
        static ORANGE: $EnumColor;
        get serializedName(): string;
        get mapColor(): $MapColor;
        get dyeColor(): $DyeColor;
        get coloredName(): $Component;
        set colorFromAtlas(value: number[]);
        get englishName(): string;
        get rgbCode(): number[];
        get langEntry(): $ILangEntry;
        get registryPrefix(): string;
        get rgbCodeFloat(): number[];
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnumColor}.
     */
    export type $EnumColor_ = "black" | "blue" | "green" | "cyan" | "dark_red" | "purple" | "orange" | "light_gray" | "gray" | "light_blue" | "lime" | "aqua" | "red" | "magenta" | "yellow" | "white" | "brown" | "pink";
    export class $IHasTextComponent$IHasEnumNameTextComponent {
    }
    export interface $IHasTextComponent$IHasEnumNameTextComponent extends $IHasTextComponent, $TranslatableEnum {
        getTranslatedName(): $Component;
        get translatedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IHasTextComponent$IHasEnumNameTextComponent}.
     */
    export type $IHasTextComponent$IHasEnumNameTextComponent_ = (() => void);
    export class $IHasTextComponent {
    }
    export interface $IHasTextComponent {
        getTextComponent(): $Component;
        get textComponent(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IHasTextComponent}.
     */
    export type $IHasTextComponent_ = (() => $Component_);
    export class $ILangEntry {
    }
    export interface $ILangEntry extends $IHasTranslationKey {
        translate(...arg0: $Object[]): $MutableComponent;
        translate(): $MutableComponent;
        translateColored(arg0: $TextColor_, ...arg1: $Object[]): $MutableComponent;
        translateColored(arg0: $TextColor_): $MutableComponent;
        translateColored(arg0: $EnumColor_): $MutableComponent;
        translateColored(arg0: $EnumColor_, ...arg1: $Object[]): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $ILangEntry}.
     */
    export type $ILangEntry_ = (() => void);
    export class $IHasTranslationKey {
    }
    export interface $IHasTranslationKey {
        getTranslationKey(): string;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $IHasTranslationKey}.
     */
    export type $IHasTranslationKey_ = (() => string);
    export class $IHasTranslationKey$IHasEnumNameTranslationKey {
    }
    export interface $IHasTranslationKey$IHasEnumNameTranslationKey extends $IHasTranslationKey, $TranslatableEnum {
        getTranslatedName(): $Component;
        get translatedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IHasTranslationKey$IHasEnumNameTranslationKey}.
     */
    export type $IHasTranslationKey$IHasEnumNameTranslationKey_ = (() => void);
}
