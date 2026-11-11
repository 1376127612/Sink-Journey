import { $TooltipAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $MultilineTextFieldAccess } from "@package/dev/ftb/mods/ftblibrary/core/mixin/common";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GuiMessage, $OptionInstance, $GuiMessageTag, $OptionInstance$TooltipSupplier_, $GuiMessage$Line_, $Minecraft, $GuiMessage_, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $UUID_, $Map, $OptionalInt, $UUID, $List, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $IClickableWidget } from "@package/xaero/lib/client/gui/widget";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Consumer_, $Predicate_, $Consumer, $Function_, $BooleanSupplier, $BooleanSupplier_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_ } from "@package/net/minecraft/world";
import { $EditBoxMixin } from "@package/com/almostreliable/merequester/mixin/accessors";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $UndoManager } from "@package/icyllis/modernui/core";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $LocalIntRef, $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $ScreenRectangle_, $FocusNavigationEvent$ArrowNavigation_, $FocusNavigationEvent_, $FocusNavigationEvent$TabNavigation_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $IModernEditBox, $EditBoxEditAction, $ScrollController, $ScrollController$IListener } from "@package/icyllis/modernui/mc";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $StringViewAccessor } from "@package/io/github/reserveword/imblocker/mixin";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MinecraftTextFieldWidget, $MinecraftFocusableWidget, $SinglelineCursorInfo, $Rectangle, $MinecraftMultilineEditBoxWidget, $FocusContainer, $MultilineCursorInfo } from "@package/io/github/reserveword/imblocker/common/gui";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier, $TooltipAccess {
        static create(message: $Component_): $Tooltip;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        getMessage(): $Component;
        static MAX_WIDTH: number;
        narration: $Component;
        cachedTooltip: $List<$FormattedCharSequence>;
        message: $Component;
        constructor(message: $Component_, narration: $Component_ | null);
    }
    export class $CommonButtons {
        static language(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        static accessibility(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        setDelay(delay: $Duration_): void;
        updateNarration(output: $NarrationElementOutput): void;
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        createTooltipPositioner(screenRectangle: $ScreenRectangle_, hovering: boolean, focused: boolean): $ClientTooltipPositioner;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { message?: $Component_, action?: $Consumer_<$PopupScreen>,  } | [message?: $Component_, action?: $Consumer_<$PopupScreen>, ];
    export class $MultilineTextField$StringView extends $Record implements $StringViewAccessor {
        beginIndex(): number;
        endIndex(): number;
        getBeginIndex(): number;
        getEndIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { endIndex?: number, beginIndex?: number,  } | [endIndex?: number, beginIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isSelected(): boolean;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(tabManager: $TabManager, tab: $Tab, width: number, height: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
        isStillActive(): boolean;
        refresh(location: $Vec3_): void;
        getText(): $Component;
        purgeOldInstances(displayTime: number): void;
        isAudibleFrom(location: $Vec3_): boolean;
        getClosest(location: $Vec3_): $SubtitleOverlay$SoundPlayedAt;
        constructor(text: $Component_, range: number, location: $Vec3_);
        get stillActive(): boolean;
        get text(): $Component;
    }
    export class $SplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        handler$fhn000$imblocker$onScroll(arg0: number, arg1: $CallbackInfo): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getScrollBarHeight(): number;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        scrollbarWidth(): number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get scrollBarHeight(): number;
    }
    export class $Button extends $AbstractButton {
        static builder(message: $Component_, onPress: $Button$OnPress_): $Button$Builder;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $CycleButton$Builder<T> {
        withCustomNarration(narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        create(message: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        withTooltip(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withInitialValue(initialValue: T): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withValues(values: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(values: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(...values: T[]): $CycleButton$Builder<T>;
        withValues(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        constructor(valueStringifier: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        size(x: number, y: number): $Button$Builder;
        bounds(x: number, y: number, width: number, height: number): $Button$Builder;
        pos(x: number, y: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(width: number): $Button$Builder;
        createNarration(createNarration: $Button$CreateNarration_): $Button$Builder;
        tooltip(tooltip: $Tooltip | null): $Button$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(font: $Font, maxWidth: number, maxRows: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, component: $Component_, maxWidth: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        renderLeftAlignedNoShadow(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): number;
        getWidth(): number;
        getLineCount(): number;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number): void;
        renderLeftAligned(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        get width(): number;
        get lineCount(): number;
    }
    export class $CommandSuggestions$SuggestionsList {
        localvar$bcb000$chat_heads$chatheads$captureSuggestion(suggestion: $Suggestion, playerRef: $LocalRef<any>): $Suggestion;
        modify$bcb000$chat_heads$chatheads$enlargeBackground(x: number, playerRef: $LocalRef<any>): number;
        localvar$bcb000$chat_heads$chatheads$captureGuiGraphics(guiGraphics: $GuiGraphics, graphicsRef: $LocalRef<any>): $GuiGraphics;
        handler$bcb000$chat_heads$chatheads$fixOutOfBoundChatHeads(commandSuggestions: $CommandSuggestions, x: number, y: number, width: number, suggestions: $List_<any>, narrateFirstSuggestion: boolean, ci: $CallbackInfo): void;
        useSuggestion(): void;
        cycle(change: number): void;
        select(change: number): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseClicked(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(delta: number): boolean;
        modify$bcb000$chat_heads$chatheads$renderChatHead(y: number, playerRef: $LocalRef<any>, graphicsRef: $LocalRef<any>): number;
    }
    export class $LogoRenderer {
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number): void;
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number, height: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(keepLogoThroughFade: boolean);
    }
    export class $Checkbox$Builder {
        pos(x: number, y: number): $Checkbox$Builder;
        build(): $Checkbox;
        selected(option: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(selected: boolean): $Checkbox$Builder;
        maxWidth(maxWidth: number): $Checkbox$Builder;
        tooltip(tooltip: $Tooltip): $Checkbox$Builder;
        onValueChange(onValueChange: $Checkbox$OnValueChange_): $Checkbox$Builder;
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { formattedScore?: $Component_, scoreWidth?: number, name?: $Component_, score?: number,  } | [formattedScore?: $Component_, scoreWidth?: number, name?: $Component_, score?: number, ];
    export class $ImageWidget$Texture extends $ImageWidget {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $SpriteIconButton extends $Button {
        static builder(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton$Builder;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(cycleButton: $CycleButton<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $ScrollController$IListener, $AbstractSelectionListAccessor {
        setScrollAmount(scroll: number): void;
        setSelected(entry: E | null): void;
        /**
         * Gets the focused GUI element.
         */
        getSelected(): E;
        /**
         * Gets the focused GUI element.
         */
        getFirstElement(): E;
        onScrollAmountUpdated(controller: $ScrollController, amount: number): void;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): E;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowLeft(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowRight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowWidth(): number;
        getScrollAmount(): number;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateSizeAndPosition(width: number, height: number, y: number): void;
        updateSize(width: number, layout: $HeaderAndFooterLayout): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScroll(): number;
        getEntryAtPosition(mouseX: number, arg1: number): E;
        modernUI_MC$skipAnimationTo(scroll: number): void;
        setClampedScrollAmount(scroll: number): void;
        clampScrollAmount(): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get firstElement(): E;
        get rowLeft(): number;
        get rowRight(): number;
        get rowWidth(): number;
        get maxScroll(): number;
        set clampedScrollAmount(value: number);
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        isDragging(): boolean;
        setFocused(arg0: $GuiEventListener | null): void;
        getFocused(): $GuiEventListener;
        setDragging(arg0: boolean): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        handleTabNavigation(arg0: $FocusNavigationEvent$TabNavigation_): $ComponentPath;
        handleArrowNavigation(arg0: $FocusNavigationEvent$ArrowNavigation_): $ComponentPath;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $MultilineTextField implements $MultilineTextFieldAccess {
        seekCursorToPoint(x: number, arg1: number): void;
        setCursorListener(cursorListener: $Runnable_): void;
        setValueListener(valueListener: $Consumer_<string>): void;
        setCharacterLimit(length: number): void;
        setSelecting(selecting: boolean): void;
        value(): string;
        setValue(text: string): void;
        cursor(): number;
        getSelected(): $MultilineTextField$StringView;
        keyPressed(keyCode: number): boolean;
        insertText(text: string): void;
        getLineCount(): number;
        deleteText(length: number): void;
        hasSelection(): boolean;
        getSelectedText(): string;
        seekCursor(whence: $Whence_, position: number): void;
        characterLimit(): number;
        hasCharacterLimit(): boolean;
        getLineAtCursor(): number;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        seekCursorLine(length: number): void;
        getNextWord(): $MultilineTextField$StringView;
        getPreviousWord(): $MultilineTextField$StringView;
        getLineView(offset: number): $MultilineTextField$StringView;
        setSelectCursor(length: number): void;
        static NO_CHARACTER_LIMIT: number;
        selectCursor: number;
        constructor(font: $Font, width: number);
        set cursorListener(value: $Runnable_);
        set valueListener(value: $Consumer_<string>);
        set selecting(value: boolean);
        get selected(): $MultilineTextField$StringView;
        get lineCount(): number;
        get selectedText(): string;
        get lineAtCursor(): number;
        get nextWord(): $MultilineTextField$StringView;
        get previousWord(): $MultilineTextField$StringView;
    }
    export class $ChatComponent$State {
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        focusPathAtIndex(event: $FocusNavigationEvent_, index: number): $ComponentPath;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isDragging(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(listener: $GuiEventListener | null): void;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): $GuiEventListener;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        narratables(): $List<$NarratableEntry>;
        /**
         * Sets if the GUI element is dragging or not.
         */
        setDragging(dragging: boolean): void;
        /**
         * Returns the first event listener that intersects with the mouse coordinates.
         */
        getChildAt(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        /**
         * Handles tab-based navigation events.
         * 
         * @return The next focus path for tab navigation, or `null` if no suitable path is found.
         */
        handleTabNavigation(tabNavigation: $FocusNavigationEvent$TabNavigation_): $ComponentPath;
        /**
         * Handles arrow-based navigation events.
         * 
         * @return The next focus path for arrow navigation, or `null` if no suitable path is found.
         */
        handleArrowNavigation(arrowNavigation: $FocusNavigationEvent$ArrowNavigation_): $ComponentPath;
        constructor();
    }
    export class $Checkbox extends $AbstractButton {
        static builder(message: $Component_, font: $Font): $Checkbox$Builder;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        selected(): boolean;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static getBoxSize(font: $Font): number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(font: $Font, message: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(width: number, height: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(width: number): $SpriteIconButton$Builder;
        sprite(sprite: $ResourceLocation_, spriteWidth: number, spriteHeight: number): $SpriteIconButton$Builder;
        narration(narration: $Button$CreateNarration_): $SpriteIconButton$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean);
    }
    export class $PlainTextButton extends $Button {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, font: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $WidgetSprites extends $Record {
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_,  } | [enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, ];
    export class $ImageButton extends $Button {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(component: $FormattedText, maxWidth: number, font: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        initTextureValues(sprites: $WidgetSprites_): void;
        setStateTriggered(triggered: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isStateTriggered(): boolean;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, initialState: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { width?: number, text?: $FormattedCharSequence_,  } | [width?: number, text?: $FormattedCharSequence_, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { wideModel?: $PlayerModel<never>, slimModel?: $PlayerModel<never>,  } | [wideModel?: $PlayerModel<never>, slimModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { time?: number, location?: $Vec3_,  } | [time?: number, location?: $Vec3_, ];
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $MinecraftFocusableWidget {
        getMessage(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        setSize(width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        setMessage(message: $Component_): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        handler$fhf000$imblocker$updateLastRenderTime(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        getTooltip(): $Tooltip;
        setTooltip(tooltip: $Tooltip | null): void;
        setAlpha(alpha: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        setY(height: number): void;
        setX(height: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        setHeight(height: number): void;
        setWidth(height: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        clicked(mouseX: number, arg1: number): boolean;
        getBoundsAbs(): $Rectangle;
        setRectangle(width: number, height: number, x: number, y: number): void;
        clearFGColor(): void;
        playDownSound(handler: $SoundManager): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        setTabOrderGroup(height: number): void;
        onRelease(mouseX: number, arg1: number): void;
        setFGColor(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        handler$fhf000$imblocker$focusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        setPosition(width: number, height: number): void;
        onClick(arg0: number, arg1: number, arg2: number): void;
        getGuiScale(): number;
        getFocusContainer(): $FocusContainer;
        imblocker$onFocusGained(): void;
        /**
         * Sets the focus state of the GUI element.
         */
        imblocker$onFocusChanged(focused: boolean): void;
        imblocker$onBoundsChanged(): void;
        imblocker$onFocusLost(): void;
        getInternalGuiScale(): number;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isRenderable(): boolean;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getPreferredState(): boolean;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isTrulyFocused(): boolean;
        updateIMState(): void;
        updateEnglishState(): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFontHeight(): number;
        deliverFocus(): void;
        lostFocus(): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getPreferredEnglishState(): boolean;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get right(): number;
        set alpha(value: number);
        get bottom(): number;
        get hovered(): boolean;
        set tooltipDelay(value: $Duration_);
        get boundsAbs(): $Rectangle;
        get hoveredOrFocused(): boolean;
        get currentFocusPath(): $ComponentPath;
        get guiScale(): number;
        get focusContainer(): $FocusContainer;
        get internalGuiScale(): number;
        get renderable(): boolean;
        get preferredState(): boolean;
        get trulyFocused(): boolean;
        get fontHeight(): number;
        get preferredEnglishState(): boolean;
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(messageSupplier: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { maxWidth?: number, message?: $Component_, maxRows?: $OptionalInt,  } | [maxWidth?: number, message?: $Component_, maxRows?: $OptionalInt, ];
    export class $DebugScreenOverlay {
        reset(): void;
        clearChunkCache(): void;
        render(guiGraphics: $GuiGraphics): void;
        toggleOverlay(): void;
        toggleFpsCharts(): void;
        toggleProfilerChart(): void;
        toggleNetworkCharts(): void;
        showProfilerChart(): boolean;
        logFrameDuration(frameDuration: number): void;
        showDebugScreen(): boolean;
        wrapOperation$zef000$sodium_extra$sodiumExtra$redirectDrawRightText(instance: $DebugScreenOverlay, guiGraphics: $GuiGraphics, text: $List_<any>, left: boolean, original: $Operation_<any>): void;
        getTickTimeLogger(): $LocalSampleLogger;
        getPingLogger(): $LocalSampleLogger;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        showNetworkCharts(): boolean;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        wrapOperation$zef000$sodium_extra$sodiumExtra$redirectDrawLeftText(instance: $DebugScreenOverlay, guiGraphics: $GuiGraphics, text: $List_<any>, left: boolean, original: $Operation_<any>): void;
        handler$efi000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        handler$zef000$sodium_extra$preRender(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        frameTimeLogger: $LocalSampleLogger;
        constructor(minecraft: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get bandwidthLogger(): $LocalSampleLogger;
    }
    export class $PopupScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $IModernEditBox, $EditBoxMixin, $MinecraftTextFieldWidget {
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLength(): number;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setEditable(select: boolean): void;
        setFilter(validator: $Predicate_<string>): void;
        modernUI_MC$addEdit(edit: $EditBoxEditAction, mergeInsert: boolean): void;
        handler$fdc000$modernui$onDeleteChars(i: number, ci: $CallbackInfo, j: number, k: number, string: string): void;
        handler$fdc000$modernui$onGetWordPosition(dir: number, cursor: number, withEndSpace: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$fdc000$modernui$onInsertText(string: string, ci: $CallbackInfo, i: number, j: number, k: number, string2: string, l: number, string3: string): void;
        handler$fhm000$imblocker$onTextChanged(arg0: string, arg1: $CallbackInfo): void;
        handler$fhm001$imblocker$focusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        handler$fhm000$imblocker$visibilityChanged(arg0: boolean, arg1: $CallbackInfo): void;
        handler$fdc000$modernui$onKeyPressed(i: number, j: number, k: number, cir: $CallbackInfoReturnable<any>): void;
        handler$fdn000$modernui$onRenderWidget(gr: $GuiGraphics, mouseX: number, mouseY: number, deltaTicks: number, ci: $CallbackInfo): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        setHint(hint: $Component_): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        getScreenX(delta: number): number;
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        setVisible(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        setBordered(select: boolean): void;
        setResponder(responder: $Consumer_<string>): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        setCanLoseFocus(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        checkVisibility(arg0: number): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setPreferredEnglishState(select: boolean): void;
        modernUI_MC$getUndoManager(): $UndoManager;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isEditable(): boolean;
        handler$fdc000$modernui$onSetValue(string: string, ci: $CallbackInfo): void;
        getWordPosition(delta: number): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        handler$fdc000$modernui$onGetCursorPosition(dir: number, cir: $CallbackInfoReturnable<any>): void;
        handler$fdc000$modernui$onSetCursorPosition(pos: number, ci: $CallbackInfo): void;
        handler$fhm000$imblocker$checkFocusTracking(arg0: string, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        renderHighlight(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        moveCursorToStart(select: boolean): void;
        getCursorInfo(): $SinglelineCursorInfo;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        updateCursorInfo(): boolean;
        moveCursorToEnd(select: boolean): void;
        moveCursorTo(delta: number, select: boolean): void;
        setTextShadow(select: boolean): void;
        moveCursor(delta: number, select: boolean): void;
        /**
         * Returns the current position of the cursor.
         */
        getPaddingX(): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getPrimaryEnglishState(): boolean;
        imblocker$onCursorChanged(): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        merequester$isEditable(): boolean;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        responder: $Consumer<string>;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_TEXT_COLOR: number;
        textColor: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        highlightPos: number;
        static UNSET_FG_COLOR: number;
        focused: boolean;
        static FORWARDS: number;
        maxLength: number;
        constructor(font: $Font, width: number, height: number, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        get innerWidth(): number;
        set suggestion(value: string | null);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set filter(value: $Predicate_<string>);
        set hint(value: $Component_);
        set preferredEnglishState(value: boolean);
        set textColorUneditable(value: number);
        get highlighted(): string;
        get cursorInfo(): $SinglelineCursorInfo;
        get paddingX(): number;
        get primaryEnglishState(): boolean;
    }
    export class $StringWidget extends $AbstractStringWidget {
        setColor(color: number): $StringWidget;
        alignCenter(): $StringWidget;
        alignRight(): $StringWidget;
        alignLeft(): $StringWidget;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        constructor(width: number, height: number, message: $Component_, font: $Font);
        constructor(message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(checkbox: $Checkbox, value: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(width: number): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(maxWidth: number, message: $Component_, font: $Font, alwaysShowBorder: boolean, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton {
        getValue(): T;
        static builder<T>(valueStringifier: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(value: T): void;
        static booleanBuilder(componentOn: $Component_, componentOff: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(initialValue: boolean): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        createDefaultNarrationMessage(): $MutableComponent;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(color: number): $FittingMultiLineTextWidget;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        showingScrollBar(): boolean;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(button: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $ImageWidget extends $AbstractWidget {
        static texture(width: number, height: number, texture: $ResourceLocation_, textureWidth: number, textureHeight: number): $ImageWidget;
        static sprite(width: number, height: number, sprite: $ResourceLocation_): $ImageWidget;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay {
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        render(guiGraphics: $GuiGraphics): void;
        shouldDarkenScreen(): boolean;
        shouldPlayMusic(): boolean;
        shouldCreateWorldFog(): boolean;
        events: $Map<$UUID, $LerpingBossEvent>;
        constructor(minecraft: $Minecraft);
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(color: number): $AbstractStringWidget;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        render(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        renderBack(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { deletableAfter?: number, signature?: $MessageSignature_,  } | [deletableAfter?: number, signature?: $MessageSignature_, ];
    export class $AbstractButton extends $AbstractWidget implements $IClickableWidget {
        onPress(): void;
        getXaero_tooltip(): $Supplier<any>;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        setXaero_tooltip(arg0: $Supplier_<any>): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(width: number, height: number, model: $EntityModelSet, skin: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setColor(color: number): $MultiLineTextWidget;
        setMaxRows(color: number): $MultiLineTextWidget;
        setMaxWidth(color: number): $MultiLineTextWidget;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setCentered(centered: boolean): $MultiLineTextWidget;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(message: $Component_, font: $Font);
        constructor(x: number, y: number, message: $Component_, font: $Font);
        set color(value: number);
        set maxRows(value: number);
        set maxWidth(value: number);
        set centered(value: boolean);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        getNarration(): $Component;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions {
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        isVisible(): boolean;
        hide(): void;
        getUsageNarration(): $Component;
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        mouseScrolled(delta: number): boolean;
        setAllowHiding(allowHiding: boolean): void;
        updateCommandInfo(): void;
        getNarrationMessage(): $Component;
        setAllowSuggestions(allowHiding: boolean): void;
        showSuggestions(allowHiding: boolean): void;
        renderSuggestions(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): boolean;
        renderUsage(guiGraphics: $GuiGraphics): void;
        suggestions: $CommandSuggestions$SuggestionsList;
        constructor(minecraft: $Minecraft, screen: $Screen, input: $EditBox, font: $Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number);
        get visible(): boolean;
        get usageNarration(): $Component;
        set allowHiding(value: boolean);
        get narrationMessage(): $Component;
        set allowSuggestions(value: boolean);
    }
    export class $PopupScreen$Builder {
        build(): $PopupScreen;
        onClose(onClose: $Runnable_): $PopupScreen$Builder;
        setMessage(message: $Component_): $PopupScreen$Builder;
        setWidth(width: number): $PopupScreen$Builder;
        addButton(message: $Component_, action: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setImage(image: $ResourceLocation_): $PopupScreen$Builder;
        constructor(backgroundScreen: $Screen, title: $Component_);
        set message(value: $Component_);
        set width(value: number);
        set image(value: $ResourceLocation_);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
    }
    export class $ChatComponent {
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        addMessage(chatComponent: $Component_): void;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        getWidth(): number;
        static getWidth(height: number): number;
        getScale(): number;
        restoreState(state: $ChatComponent$State): void;
        handler$bbn000$chat_heads$chatheads$renderChatHead(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): void;
        modify$bbn000$chat_heads$chatheads$moveText(font: $Font, formattedCharSequence: $FormattedCharSequence_, x: number, y: number, color: number, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): number;
        modifyExpressionValue$bbn000$chat_heads$chatheads$fixTextOverflow(original: number): number;
        scrollChat(posInc: number): void;
        getHeight(): number;
        static getHeight(height: number): number;
        getLinesPerPage(): number;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        getRecentChat(): $ArrayListDeque<string>;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        deleteMessage(messageSignature: $MessageSignature_): void;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        storeState(): $ChatComponent$State;
        static defaultUnfocusedPct(): number;
        modify$bbn000$chat_heads$chatheads$correctClickPosition(x: number, guiMessage: $GuiMessage$Line_): number;
        handler$bbn000$chat_heads$chatheads$forgetRenderData(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo): void;
        allMessages: $List<$GuiMessage>;
        constructor(minecraft: $Minecraft);
        get scale(): number;
        get linesPerPage(): number;
        get recentChat(): $ArrayListDeque<string>;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay {
        reset(): void;
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        setHeader(footer: $Component_ | null): void;
        setFooter(footer: $Component_ | null): void;
        static MAX_ROWS_PER_COL: number;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set visible(value: boolean);
        set header(value: $Component_ | null);
        set footer(value: $Component_ | null);
    }
    export class $PlayerFaceRenderer {
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number, drawHat: boolean, upsideDown: boolean): void;
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number): void;
        static draw(guiGraphics: $GuiGraphics, skin: $PlayerSkin_, x: number, y: number, size: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        findOption(option: $OptionInstance<never>): $AbstractWidget;
        addSmall(leftOption: $AbstractWidget, rightOption: $AbstractWidget | null): void;
        addSmall(options: $List_<$AbstractWidget>): void;
        addSmall(...options: $OptionInstance<never>[]): void;
        applyUnsavedChanges(): void;
        addBig(option: $OptionInstance<never>): void;
        getMouseOver(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(minecraft: $Minecraft, width: number, screen: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        render(guiGraphics: $GuiGraphics): void;
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        audibleSubtitles: $List<$SubtitleOverlay$Subtitle>;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, value: number);
    }
    export class $LockIconButton extends $Button {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isLocked(): boolean;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setLocked(locked: boolean): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, onPress: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget implements $MinecraftMultilineEditBoxWidget {
        setValueListener(valueListener: $Consumer_<string>): void;
        setCharacterLimit(characterLimit: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getInnerHeight(): number;
        getValue(): string;
        setValue(fullText: string): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        getCursorInfo(): $MultilineCursorInfo;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        updateCursorInfo(): boolean;
        handler$fho000$imblocker$onCursorChange(arg0: $CallbackInfo): void;
        handler$fho001$imblocker$checkFocusTracking(arg0: string, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        imblocker$getContentOffsetX(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        imblocker$getContentOffsetY(): number;
        imblocker$onCursorChanged(): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(font: $Font, x: number, y: number, width: number, height: number, placeholder: $Component_, message: $Component_);
        set valueListener(value: $Consumer_<string>);
        set characterLimit(value: number);
        get innerHeight(): number;
        get cursorInfo(): $MultilineCursorInfo;
    }
}
