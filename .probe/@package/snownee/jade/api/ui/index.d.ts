import { $Codec } from "@package/com/mojang/serialization";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ITooltip } from "@package/snownee/jade/api";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $GuiSpriteScaling$NineSlice_ } from "@package/net/minecraft/client/resources/metadata/gui";
import { $JadeFluidObject } from "@package/snownee/jade/api/fluid";
import { $List } from "@package/java/util";
import { $StyledElement } from "@package/snownee/jade/impl/ui";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $Cloneable } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec2 } from "@package/net/minecraft/world/phys";

declare module "@package/snownee/jade/api/ui" {
    export class $ColorPalette extends $Record {
        get(arg0: $MessageType_): number;
        info(): number;
        failure(): number;
        normal(): number;
        warning(): number;
        danger(): number;
        title(): number;
        success(): number;
        static CODEC: $Codec<$ColorPalette>;
        static DEFAULT: $ColorPalette;
        constructor(normal: number, info: number, title: number, success: number, warning: number, danger: number, failure: number);
    }
    /**
     * Values that may be interpreted as {@link $ColorPalette}.
     */
    export type $ColorPalette_ = { title?: number, success?: number, failure?: number, warning?: number, info?: number, danger?: number, normal?: number,  } | [title?: number, success?: number, failure?: number, warning?: number, info?: number, danger?: number, normal?: number, ];
    export class $IBoxElement {
    }
    export interface $IBoxElement extends $IElement, $StyledElement {
        setIcon(arg0: $IElement): void;
        getBoxProgress(): number;
        clearBoxProgress(): void;
        setBoxProgress(arg0: $MessageType_, arg1: number): void;
        padding(arg0: $ScreenDirection_): number;
        setPadding(arg0: $ScreenDirection_, arg1: number): void;
        getStyle(): $BoxStyle;
        getTooltip(): $ITooltip;
        set icon(value: $IElement);
        get style(): $BoxStyle;
        get tooltip(): $ITooltip;
    }
    export class $MessageType extends $Enum<$MessageType> {
        static values(): $MessageType[];
        static valueOf(arg0: string): $MessageType;
        static parse(arg0: string): $MessageType;
        static DANGER: $MessageType;
        static SUCCESS: $MessageType;
        static TITLE: $MessageType;
        static INFO: $MessageType;
        static WARNING: $MessageType;
        static FAILURE: $MessageType;
        static NORMAL: $MessageType;
    }
    /**
     * Values that may be interpreted as {@link $MessageType}.
     */
    export type $MessageType_ = "normal" | "info" | "title" | "success" | "warning" | "danger" | "failure";
    export class $BoxStyle$SpriteBase extends $BoxStyle {
        clone(): $BoxStyle$SpriteBase;
        static blitNineSlicedSprite(arg0: $GuiGraphics, arg1: $TextureAtlasSprite, arg2: $GuiSpriteScaling$NineSlice_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static blitSprite(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        withIconSprite: $ResourceLocation;
        static CODEC: $Codec<$BoxStyle>;
        boxProgressColors: $ColorPalette;
        sprite: $ResourceLocation;
        static GRADIENT_BORDER_CODEC: $Codec<$BoxStyle$GradientBorder>;
        static SPRITE_BASE_CODEC: $Codec<$BoxStyle$SpriteBase>;
        constructor(arg0: (number[]) | undefined, arg1: $ColorPalette_, arg2: (number[]) | undefined, arg3: $ResourceLocation_, arg4: ($ResourceLocation_) | undefined);
    }
    export class $BoxStyle$GradientBorder extends $BoxStyle {
        clone(): $BoxStyle$GradientBorder;
        borderColor: number[];
        static CODEC: $Codec<$BoxStyle>;
        static GRADIENT_BORDER_CODEC: $Codec<$BoxStyle$GradientBorder>;
        roundCorner: boolean;
        bgColor: number;
        boxProgressColors: $ColorPalette;
        static TRANSPARENT: $BoxStyle$GradientBorder;
        static DEFAULT_NESTED_BOX: $BoxStyle$GradientBorder;
        static DEFAULT_VIEW_GROUP: $BoxStyle$GradientBorder;
        static SPRITE_BASE_CODEC: $Codec<$BoxStyle$SpriteBase>;
    }
    export class $IElementHelper {
        static get(): $IElementHelper;
    }
    export interface $IElementHelper {
        fluid(arg0: $JadeFluidObject): $IElement;
        smallItem(arg0: $ItemStack_): $IElement;
        spacer(arg0: number, arg1: number): $IElement;
        box(arg0: $ITooltip, arg1: $BoxStyle): $IBoxElement;
        text(arg0: $Component_): $ITextElement;
        item(arg0: $ItemStack_, arg1: number): $IElement;
        item(arg0: $ItemStack_): $IElement;
        item(arg0: $ItemStack_, arg1: number, arg2: string): $IElement;
        progress(arg0: number, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: number, arg4: number, arg5: boolean): $IElement;
        progress(arg0: number): $IElement;
        progress(arg0: number, arg1: $Component_, arg2: $ProgressStyle, arg3: $BoxStyle, arg4: boolean): $IElement;
        sprite(arg0: $ResourceLocation_, arg1: number, arg2: number): $IElement;
        tooltip(): $ITooltip;
        progressStyle(): $ProgressStyle;
    }
    export class $IElement {
    }
    export interface $IElement {
        getTranslation(): $Vec2;
        getCachedSize(): $Vec2;
        getCachedMessage(): string;
        clearCachedMessage(): $IElement;
        getSize(): $Vec2;
        size(arg0: $Vec2): $IElement;
        getMessage(): string;
        message(arg0: string): $IElement;
        tag(arg0: $ResourceLocation_): $IElement;
        getTag(): $ResourceLocation;
        getAlignment(): $IElement$Align;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        align(arg0: $IElement$Align_): $IElement;
        translate(arg0: $Vec2): $IElement;
        get translation(): $Vec2;
        get cachedSize(): $Vec2;
        get cachedMessage(): string;
        get alignment(): $IElement$Align;
    }
    export class $BoxStyle implements $Cloneable {
        borderWidth(): number;
        boxProgressOffset(arg0: $ScreenDirection_): number;
        hasRoundCorner(): boolean;
        static getTransparent(): $BoxStyle$GradientBorder;
        clone(): $BoxStyle;
        padding(arg0: $ScreenDirection_): number;
        static getSprite(arg0: $ResourceLocation_, arg1: number[]): $BoxStyle;
        render(arg0: $GuiGraphics, arg1: $StyledElement, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static getNestedBox(): $BoxStyle;
        static getViewGroup(): $BoxStyle;
        static CODEC: $Codec<$BoxStyle>;
        boxProgressColors: $ColorPalette;
        static GRADIENT_BORDER_CODEC: $Codec<$BoxStyle$GradientBorder>;
        static SPRITE_BASE_CODEC: $Codec<$BoxStyle$SpriteBase>;
        constructor(arg0: (number[]) | undefined, arg1: $ColorPalette_, arg2: (number[]) | undefined);
        static get transparent(): $BoxStyle$GradientBorder;
        static get nestedBox(): $BoxStyle;
        static get viewGroup(): $BoxStyle;
    }
    export class $IElement$Align extends $Enum<$IElement$Align> {
        static values(): $IElement$Align[];
        static valueOf(arg0: string): $IElement$Align;
        static CENTER: $IElement$Align;
        static LEFT: $IElement$Align;
        static RIGHT: $IElement$Align;
        static VALUES: $IElement$Align[];
    }
    /**
     * Values that may be interpreted as {@link $IElement$Align}.
     */
    export type $IElement$Align_ = "left" | "right" | "center";
    export class $ITextElement {
    }
    export interface $ITextElement extends $IElement {
        zOffset(arg0: number): $ITextElement;
        scale(arg0: number): $ITextElement;
    }
    export class $ScreenDirection extends $Enum<$ScreenDirection> {
        isHorizontal(): boolean;
        static values(): $ScreenDirection[];
        static valueOf(arg0: string): $ScreenDirection;
        static fromIndex(arg0: number): $ScreenDirection;
        isVertical(): boolean;
        static DOWN: $ScreenDirection;
        static LEFT: $ScreenDirection;
        static RIGHT: $ScreenDirection;
        static VALUES: $List<$ScreenDirection>;
        static UP: $ScreenDirection;
        get horizontal(): boolean;
        get vertical(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenDirection}.
     */
    export type $ScreenDirection_ = "up" | "down" | "left" | "right";
    export class $ProgressStyle {
        textColor(arg0: number): $ProgressStyle;
        color(arg0: number, arg1: number): $ProgressStyle;
        color(arg0: number): $ProgressStyle;
        direction(): $ScreenDirection;
        direction(arg0: $ScreenDirection_): $ProgressStyle;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Component_): void;
        overlay(arg0: $IElement): $ProgressStyle;
        fitContentY(): boolean;
        fitContentY(arg0: boolean): $ProgressStyle;
        fitContentX(): boolean;
        fitContentX(arg0: boolean): $ProgressStyle;
        constructor();
    }
    export class $TooltipRect {
        rect: $Rect2i;
        scale: number;
        expectedRect: $Rect2i;
        constructor();
    }
}
