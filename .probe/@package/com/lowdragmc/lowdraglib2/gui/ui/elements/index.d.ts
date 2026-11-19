import { $HistoryStack } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigNumber$Type } from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Tag_, $Tag, $LongArrayTag, $ListTag_, $ByteArrayTag, $IntArrayTag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IGuiTexture_, $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ISearch, $IResultHandler_ } from "@package/com/lowdragmc/lowdraglib2/utils/search";
import { $ISceneBlockRenderHook, $ParticleManager, $WorldSceneRenderer } from "@package/com/lowdragmc/lowdraglib2/client/scene";
import { $Set_, $Map, $Set, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $StringConfigurator, $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $FormattedCharSequence, $Tuple } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $Predicate, $BiConsumer, $BiConsumer_, $Function_, $IntConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction } from "@package/net/minecraft/core";
import { $IngredientIO_ } from "@package/com/lowdragmc/lowdraglib2/integration/xei";
import { $IPersistedSerializable, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIEventListener_, $UIEvent } from "@package/com/lowdragmc/lowdraglib2/gui/ui/event";
import { $Style, $ModularUI, $UITemplate, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $TaffyDimension } from "@package/dev/vfyjxf/taffy/style";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $StyleSizeLength } from "@package/org/appliedenergistics/yoga/style";
import { $File_, $File } from "@package/java/io";
import { $ClipContext$Fluid_, $ClipContext$Fluid, $ClipContext$Block_, $ClipContext$Block, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $BiMap } from "@package/com/google/common/collect";
import { $ITreeNode, $FileNode } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Cursor, $FillDirection, $FillDirection_, $TextWrap_, $ScrollerMode_, $Vertical, $ScrollerMode, $Horizontal, $Cursor_, $ScrollDisplay, $TextWrap, $ScrollDisplay_, $Horizontal_, $Vertical_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $IHistoryStack, $UIElementProvider, $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $FloatConsumer_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $Stream } from "@package/java/util/stream";
import { $IBinding, $IObservable, $IDataProvider, $IDataConsumer, $IObserver_, $IObserver, $IBindable } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TrackedDummyWorld } from "@package/com/lowdragmc/lowdraglib2/utils/virtuallevel";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockPosFace, $BlockPosFace_ } from "@package/com/lowdragmc/lowdraglib2/utils/data";
import { $Vector3f } from "@package/org/joml";
export * as inventory from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/inventory";
export * as codeeditor from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements" {
    export class $SearchComponent$ISearchUI$Empty<T> implements $SearchComponent$ISearchUI<T> {
        onResultSelected(arg0: T): void;
        search(arg0: string, arg1: $IResultHandler_<T>): void;
        resultText(arg0: T): string;
        constructor();
    }
    export class $Slider$SliderStyle extends $Style {
        static init(): void;
        trackSize(): number;
        trackSize(arg0: number): $Slider$SliderStyle;
        sliderStep(): number;
        sliderStep(arg0: number): $Slider$SliderStyle;
        handleSize(arg0: number): $Slider$SliderStyle;
        handleSize(): number;
        holder: $UIElement;
        constructor(arg0: $Slider);
    }
    export class $TreeList$DropMode extends $Enum<$TreeList$DropMode> {
        static values(): $TreeList$DropMode[];
        static valueOf(arg0: string): $TreeList$DropMode;
        static BEFORE: $TreeList$DropMode;
        static INTO: $TreeList$DropMode;
        static AFTER: $TreeList$DropMode;
    }
    /**
     * Values that may be interpreted as {@link $TreeList$DropMode}.
     */
    export type $TreeList$DropMode_ = "before" | "into" | "after";
    export class $Selector$SelectorStyle extends $Style {
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        maxItemCount(): number;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        focusOverlay(): $IGuiTexture;
        static init(): void;
        holder: $UIElement;
    }
    export class $TextField extends $BindableUIElement<string> {
        getRawText(): string;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setTextRegexValidator(arg0: string): $TextField;
        getCursorUnderMouseX(arg0: number): number;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        setCursor(arg0: number): void;
        getWordPosition(arg0: number): number;
        deleteCharsToPos(arg0: number): void;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        getHighlighted(): string;
        deleteWords(arg0: number): void;
        setCompoundTagOnly(): $TextField;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        getCursorPos(): number;
        getStyledLine(): $Component;
        setWheelDur(arg0: number): $TextField;
        setWheelDur(arg0: number, arg1: number): $TextField;
        setAnyString(): $TextField;
        getWheelDur(): number;
        getDisplayOffset(): number;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        deleteChars(arg0: number): void;
        getHistoryStack(): $HistoryStack<string>;
        getValue(): string;
        setValue(arg0: string, arg1: boolean): $TextField;
        isError(): boolean;
        setText(arg0: string, arg1: boolean): $TextField;
        setText(arg0: string): $TextField;
        getText(): string;
        setResourceLocationOnly(): $TextField;
        setSelection(arg0: number, arg1: number): void;
        getSelectionEnd(): number;
        getSelectionStart(): number;
        getFont(): $Font;
        setFormatter(arg0: $Function_<string, $Component>): $TextField;
        getFormatter(): $Function<string, $Component>;
        getMode(): $TextField$Mode;
        insertText(arg0: string): void;
        isEditable(): boolean;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get rawText(): string;
        set textRegexValidator(value: string);
        set cursor(value: number);
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        get highlighted(): string;
        get cursorPos(): number;
        get styledLine(): $Component;
        get displayOffset(): number;
        set textValidator(value: $Predicate_<string>);
        set textResponder(value: $Consumer_<string>);
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<string>;
        get error(): boolean;
        get selectionEnd(): number;
        get selectionStart(): number;
        get font(): $Font;
        get mode(): $TextField$Mode;
        get editable(): boolean;
    }
    export class $GraphView extends $UIElement {
        getScale(): number;
        static resolveGridFineLevel(arg0: number, arg1: number, arg2: number, arg3: number): $GraphView$GridFineLevel;
        clearAllContentChildren(): $GraphView;
        addContentChild(arg0: $UIElement): $GraphView;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        removeContentChild(arg0: $UIElement): $GraphView;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        fitToChildren(arg0: number, arg1: number): void;
        getPixelScale(): number;
        static resolveGridLevels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $List<$GraphView$GridLevel>;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        setScale(arg0: number): void;
        static resolveLod(arg0: number, arg1: boolean, arg2: number, arg3: number): $GraphViewLod;
        setOffsetX(arg0: number): void;
        setOffsetY(arg0: number): void;
        getOffsetX(): number;
        getOffsetY(): number;
        getLod(): $GraphViewLod;
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get pixelScale(): number;
        get lod(): $GraphViewLod;
    }
    export class $Scroller$ScrollerStyle extends $Style {
        scrollDelta(arg0: number): $Scroller$ScrollerStyle;
        scrollDelta(): number;
        static init(): void;
        scrollBarSize(): number;
        scrollBarSize(arg0: number): $Scroller$ScrollerStyle;
        holder: $UIElement;
        constructor(arg0: $Scroller);
    }
    export class $FluidSlot$SlotStyle extends $Style {
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(): boolean;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        setOnTabSelected(arg0: $Runnable_): $Tab;
        getTabStyle(): $Tab$TabStyle;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        getTabView(): $TabView;
        getContent(): $UIElement;
        setText(arg0: string, arg1: boolean): $Tab;
        setText(arg0: $Component_): $Tab;
        setText(arg0: string): $Tab;
        setSelected(arg0: boolean): void;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        set onTabSelected(value: $Runnable_);
        set dynamicText(value: $Supplier_<$Component>);
        set onTabUnselected(value: $Runnable_);
        get tabView(): $TabView;
        get content(): $UIElement;
        set selected(value: boolean);
    }
    export class $TextField$TextFieldStyle extends $Style {
        textColor(): number;
        textColor(arg0: number): $TextField$TextFieldStyle;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        cursorColor(): number;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        static init(): void;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        fontSize(): number;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        placeholder(): $Component;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        errorColor(): number;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        holder: $UIElement;
        constructor(arg0: $TextField);
    }
    export class $Button$ButtonStyle extends $Style {
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        pressedTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        pressedTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Button);
    }
    export class $Scroller$Horizontal extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Button$State extends $Enum<$Button$State> {
        static values(): $Button$State[];
        static valueOf(arg0: string): $Button$State;
        static PRESSED: $Button$State;
        static HOVERED: $Button$State;
        static DEFAULT: $Button$State;
    }
    /**
     * Values that may be interpreted as {@link $Button$State}.
     */
    export type $Button$State_ = "default" | "hovered" | "pressed";
    export class $Toggle$ToggleStyle extends $Style {
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        unmarkTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        static init(): void;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        scrollToChildDelayed(arg0: $UIElement): void;
        removeScrollViewChild(arg0: $UIElement): boolean;
        clearAllScrollViewChildren(): void;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        scrollToChild(arg0: $UIElement): boolean;
        hasScrollViewChild(arg0: $UIElement): boolean;
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        getContainerHeight(): number;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        getContainerWidth(): number;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        get containerHeight(): number;
        get containerWidth(): number;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        maxItemCount(): number;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        scrollerViewHeight(): number;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        focusOverlay(): $IGuiTexture;
        static init(): void;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        getClampNormalizedValue(): $Function<number, number>;
        setMinValue(arg0: number): $Scroller;
        setMaxValue(arg0: number): $Scroller;
        getNormalizedValue(): number;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        scrollByWheel(arg0: number): void;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        scrollValue(arg0: number): void;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $Scroller;
        setValue(arg0: number): $Scroller;
        getMinValue(): number;
        getMaxValue(): number;
        setScrollBarSize(arg0: number): $Scroller;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        setRange(arg0: number, arg1: number): $Scroller;
        isDragging(): boolean;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onValueChanged(value: $FloatConsumer_);
        set scrollBarSize(value: number);
        get dragging(): boolean;
    }
    export class $ToggleGroupElement extends $UIElement {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        toggleGroup: $Toggle$ToggleGroup;
        constructor();
    }
    export class $GraphViewLod extends $Enum<$GraphViewLod> {
        static values(): $GraphViewLod[];
        static valueOf(arg0: string): $GraphViewLod;
        static BLOCK: $GraphViewLod;
        static FULL: $GraphViewLod;
        static SIMPLIFIED: $GraphViewLod;
    }
    /**
     * Values that may be interpreted as {@link $GraphViewLod}.
     */
    export type $GraphViewLod_ = "full" | "simplified" | "block";
    export class $Slider extends $BindableUIElement<number> {
        setClampNormalizedValue(arg0: $Function_<number, number>): $Slider;
        getClampNormalizedValue(): $Function<number, number>;
        setMinValue(arg0: number): $Slider;
        setMaxValue(arg0: number): $Slider;
        getNormalizedValue(): number;
        setNormalizedValue(arg0: number): $Slider;
        setNormalizedValue(arg0: number, arg1: boolean): $Slider;
        getSliderStyle(): $Slider$SliderStyle;
        trackContainer(arg0: $Consumer_<$UIElement>): $Slider;
        sliderStyle(arg0: $Consumer_<$Slider$SliderStyle>): $Slider;
        setOnValueChanged(arg0: $FloatConsumer_): $Slider;
        getValue(): number;
        fill(arg0: $Consumer_<$UIElement>): $Slider;
        setValue(arg0: number): $Slider;
        setValue(arg0: number, arg1: boolean): $Slider;
        handle(arg0: $Consumer_<$Button>): $Slider;
        getMinValue(): number;
        getMaxValue(): number;
        setRange(arg0: number, arg1: number): $Slider;
        track(arg0: $Consumer_<$UIElement>): $Slider;
        slideValue(arg0: number): void;
        isDragging(): boolean;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onValueChanged(value: $FloatConsumer_);
        get dragging(): boolean;
    }
    export class $BindableUIElement<T> extends $UIElement implements $IBindable<T>, $IObservable<T>, $IDataConsumer<T> {
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        getBoundDataSources(): $Collection<$IDataProvider<T>>;
        bindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        bindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        unbindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        getBoundObservers(): $Collection<$IObserver<T>>;
        unbindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        getValue(): T;
        setValue(arg0: T, arg1: boolean): $BindableUIElement<T>;
        setValue(arg0: T): $BindableUIElement<T>;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<T>>;
        get boundObservers(): $Collection<$IObserver<T>>;
    }
    export class $ItemSlot extends $BindableUIElement<$ItemStack> {
        setItem(arg0: $ItemStack_): $ItemSlot;
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        getFullTooltipTexts(arg0: boolean): $List<$Component>;
        updateSlotPosition(): void;
        static compactCount(arg0: $ItemStack_): string;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(): $ItemSlot;
        getSlotStyle(): $ItemSlot$SlotStyle;
        getSlot(): $Slot;
        getValue(): $ItemStack;
        setValue(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        bind(arg0: $Slot): $ItemSlot;
        bind(arg0: $IItemHandlerModifiable, arg1: number): $ItemSlot;
        xeiPhantom(): $ItemSlot;
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        static DRAGGING_BG: $IGuiTexture;
        static ITEM_SLOT_TEXTURE: $IGuiTexture;
        constructor(arg0: $Slot);
        constructor();
        get slot(): $Slot;
    }
    export class $VirtualItemHeightMode extends $Enum<$VirtualItemHeightMode> {
        static values(): $VirtualItemHeightMode[];
        static valueOf(arg0: string): $VirtualItemHeightMode;
        static VARIABLE: $VirtualItemHeightMode;
        static FIXED: $VirtualItemHeightMode;
    }
    /**
     * Values that may be interpreted as {@link $VirtualItemHeightMode}.
     */
    export type $VirtualItemHeightMode_ = "fixed" | "variable";
    export class $SearchComponent$ISearchUI<T> {
        static empty<T>(): $SearchComponent$ISearchUI<T>;
        static EMPTY: $SearchComponent$ISearchUI$Empty<any>;
    }
    export interface $SearchComponent$ISearchUI<T> extends $ISearch<T> {
        onResultSelected(arg0: T): void;
        resultText(arg0: T): string;
    }
    export class $Tab$TabStyle extends $Style {
        hoverTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        hoverTexture(): $IGuiTexture;
        selectedTexture(): $IGuiTexture;
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        holder: $UIElement;
        constructor(arg0: $Tab);
    }
    export class $Label extends $TextElement implements $IBindable<$Component>, $IDataConsumer<$Component> {
        getBoundDataSources(): $Collection<$IDataProvider<$Component>>;
        bindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        getValue(): $Component;
        setValue(arg0: $Component_): $Label;
        bind(arg0: $IBinding<$Component_>): $UIElement;
        unbind(arg0: $IBinding<$Component_>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<$Component>>;
    }
    export class $TextArea$History extends $Record {
        lines(): string[];
        cursor(): $Cursor;
        constructor(lines: string[], cursor: $Cursor_);
    }
    /**
     * Values that may be interpreted as {@link $TextArea$History}.
     */
    export type $TextArea$History_ = { lines?: string[], cursor?: $Cursor_,  } | [lines?: string[], cursor?: $Cursor_, ];
    export class $Slider$Horizontal extends $Slider {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $TreeList<NODE extends $ITreeNode<never, never>> extends $UIElement {
        getTreeListStyle(): $TreeList$TreeListStyle;
        isWidthFitsContent(): boolean;
        getHoveredNode(): NODE;
        isFlattenRoot(): boolean;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        getExpandedNodes(): $Set<NODE>;
        isNodeSelected(arg0: NODE): boolean;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        createNodeUI(arg0: NODE): $UIElement;
        setDraggable(arg0: boolean): $TreeList<NODE>;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        toggleNodeExpanded(arg0: NODE): void;
        isNodeExpanded(arg0: NODE): boolean;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        expandsOnClick(arg0: NODE): boolean;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        collapseNode(arg0: NODE): void;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        setOnReorder(arg0: $Consumer_<$TreeList$ReorderRequest<NODE>>): $TreeList<NODE>;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        setClickToExpandFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setRightClickToExpand(arg0: boolean): $TreeList<NODE>;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        static createDraggingOverlay(arg0: $TreeList$DropMode_, arg1: boolean): $IGuiTexture;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setDragPayloadFactory(arg0: $Function_<NODE, $Object>): $TreeList<NODE>;
        setReorderValidator(arg0: $Predicate_<$TreeList$ReorderRequest<NODE>>): $TreeList<NODE>;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        getRoot(): NODE;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        setRoot(arg0: NODE): $TreeList<NODE>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        getSelected(): $Set<NODE>;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        reloadList(): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: NODE);
        constructor(arg0: NODE, arg1: boolean);
        get treeListStyle(): $TreeList$TreeListStyle;
        get hoveredNode(): NODE;
        set clickToExpand(value: boolean);
        get expandedNodes(): $Set<NODE>;
        set draggable(value: boolean);
        set staticTree(value: boolean);
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        set onReorder(value: $Consumer_<$TreeList$ReorderRequest<NODE>>);
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        set doubleClickToExpand(value: boolean);
        set clickToExpandFilter(value: $Predicate_<NODE>);
        set rightClickToExpand(value: boolean);
        set selectableNodeFilter(value: $Predicate_<NODE>);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set dragPayloadFactory(value: $Function_<NODE, $Object>);
        set reorderValidator(value: $Predicate_<$TreeList$ReorderRequest<NODE>>);
        set supportMultipleSelection(value: boolean);
        get nodeUIs(): $BiMap<NODE, $UIElement>;
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        collapseSelectionToCursor(): void;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        setCursor(arg0: number, arg1: number): void;
        pushHistory(): void;
        drawContentView(arg0: $GUIContext): void;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        getSelStartLine(): number;
        hasSelection(): boolean;
        getCursorLine(): number;
        getCursorCol(): number;
        getSelEndLine(): number;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        getSelStartCol(): number;
        getSelEndCol(): number;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        getFont(): $Font;
        getLines(): $List<string>;
        getScrollX(): number;
        getScrollY(): number;
        isEditable(): boolean;
        lineHeight(): number;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        setLines(arg0: $List_<string>): $TextArea;
        cursorPos(): $Cursor;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set textValidator(value: $Predicate_<string[]>);
        get selStartLine(): number;
        get cursorLine(): number;
        get cursorCol(): number;
        get selEndLine(): number;
        set charValidator(value: $Predicate_<string>);
        set linesResponder(value: $Consumer_<string[]>);
        get selStartCol(): number;
        get selEndCol(): number;
        get historyStack(): $HistoryStack<$TextArea$History>;
        get error(): boolean;
        get font(): $Font;
        get scrollX(): number;
        get scrollY(): number;
        get editable(): boolean;
    }
    export class $Switch$SwitchStyle extends $Style {
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        markTexture(): $IGuiTexture;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        baseTexture(): $IGuiTexture;
        static init(): void;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        collapseIcon(): $IGuiTexture;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        expandIcon(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        getSearchStyle(): $SearchComponent$SearchStyle;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        isSearchOnServer(): boolean;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        hide(): void;
        show(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T): $SearchComponent<T>;
        preview: $UIElement;
        dialog: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        scrollerView: $VirtualScrollerView<T>;
        textField: $TextField;
        constructor(arg0: $SearchComponent$ISearchUI<T>);
        constructor();
        set candidateUIProvider(value: $UIElementProvider_<T>);
        set onValueChanged(value: $Consumer_<T>);
        get open(): boolean;
    }
    export class $FluidSlot extends $BindableUIElement<$FluidStack> {
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        isAllowClickDrained(): boolean;
        getFullTooltipTexts(): $List<$Component>;
        getFullTooltipTexts(arg0: boolean): $List<$Component>;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        getFluidAmountText(): $Component;
        isAllowClickFilled(): boolean;
        getValue(): $FluidStack;
        setValue(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        bind(arg0: $IFluidHandler, arg1: number): $FluidSlot;
        getCapacity(): number;
        getFluid(): $FluidStack;
        setCapacity(arg0: number): $FluidSlot;
        xeiPhantom(): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        amountLabel: $Label;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get fluidAmountText(): $Component;
    }
    export class $VirtualScrollerView<T> extends $ScrollerView {
        getLastMountedIndex(): number;
        setBeforeMountItems(arg0: $Runnable_): $VirtualScrollerView<$CompoundTag>;
        getFirstMountedIndex(): number;
        getMountedItemCount(): number;
        virtualScrollerViewStyle(arg0: $Consumer_<$VirtualScrollerView$VirtualScrollerViewStyle>): $VirtualScrollerView<$CompoundTag>;
        updateMeasuredItemHeight(arg0: number, arg1: number): boolean;
        getTotalVirtualHeight(): number;
        refreshVisibleItems(arg0: number, arg1: number): void;
        refreshVisibleItems(): void;
        setItems(arg0: $List_<$CompoundTag_>): $VirtualScrollerView<$CompoundTag>;
        scrollToTop(): void;
        setItemUIProvider(arg0: $UIElementProvider_<$CompoundTag>): $VirtualScrollerView<$CompoundTag>;
        getItemCount(): number;
        getVirtualScrollerViewStyle(): $VirtualScrollerView$VirtualScrollerViewStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get lastMountedIndex(): number;
        set beforeMountItems(value: $Runnable_);
        get firstMountedIndex(): number;
        get mountedItemCount(): number;
        get totalVirtualHeight(): number;
        set items(value: $List_<$CompoundTag_>);
        set itemUIProvider(value: $UIElementProvider_<$CompoundTag>);
        get itemCount(): number;
    }
    export class $TagField extends $BindableUIElement<$Tag> {
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setListOnly(): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        setCompoundTagOnly(): $TagField;
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $TagField;
        setAny(): $TagField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        editButton: $Button;
        textField: $TextField;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
    }
    export class $Button extends $UIElement {
        setOnServerClick(arg0: $UIEventListener_): $Button;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        getState(): $Button$State;
        setText(arg0: string, arg1: boolean): $Button;
        addPreIcon(arg0: $IGuiTexture_): $Button;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Button;
        setText(arg0: $Component_): $Button;
        enableText(): $Button;
        setOnClick(arg0: $UIEventListener_): $Button;
        noText(): $Button;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $TextElement;
        constructor();
        set onServerClick(value: $UIEventListener_);
        get state(): $Button$State;
        set onClick(value: $UIEventListener_);
    }
    export class $GraphView$GraphViewStyle extends $Style {
        lodSimplifiedPixelScale(arg0: number): $GraphView$GraphViewStyle;
        lodSimplifiedPixelScale(): number;
        gridSubdivisions(arg0: number): $GraphView$GraphViewStyle;
        gridSubdivisions(): number;
        gridLineWidth(): number;
        gridLineWidth(arg0: number): $GraphView$GraphViewStyle;
        gridLineColor(arg0: number): $GraphView$GraphViewStyle;
        gridLineColor(): number;
        gridMinPixels(): number;
        gridMinPixels(arg0: number): $GraphView$GraphViewStyle;
        lodBlockPixelScale(arg0: number): $GraphView$GraphViewStyle;
        lodBlockPixelScale(): number;
        gridAccentColor(): number;
        gridAccentColor(arg0: number): $GraphView$GraphViewStyle;
        gridSize(): number;
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        minScale(): number;
        minScale(arg0: number): $GraphView$GraphViewStyle;
        allowPan(): boolean;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        lodEnabled(arg0: boolean): $GraphView$GraphViewStyle;
        lodEnabled(): boolean;
        maxScale(): number;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        allowZoom(): boolean;
        holder: $UIElement;
        constructor(arg0: $GraphView);
    }
    export class $SplitView$Horizontal extends $SplitView {
        setPercentage(arg0: number): $SplitView$Horizontal;
        left(arg0: $UIElement): $SplitView$Horizontal;
        right(arg0: $UIElement): $SplitView$Horizontal;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $StructuredTagEditor extends $BindableUIElement<$Tag> {
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        setListOnly(): $StructuredTagEditor;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        setCompoundTagOnly(): $StructuredTagEditor;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $StructuredTagEditor;
        setAny(): $StructuredTagEditor;
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        showItemTooltips(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        quickMovePriority(): number;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        isPlayerSlot(): boolean;
        holder: $UIElement;
        constructor(arg0: $ItemSlot);
    }
    export class $ProgressBar$ProgressBarStyle extends $Style {
        interpolateStep(arg0: number): $ProgressBar$ProgressBarStyle;
        interpolateStep(): number;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $ProgressBar$ProgressBarStyle;
        static init(): void;
        interpolate(): boolean;
        interpolate(arg0: boolean): $ProgressBar$ProgressBarStyle;
        holder: $UIElement;
        constructor(arg0: $ProgressBar);
    }
    export class $Scroller$Vertical extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $GraphView$GridLevel extends $Record {
        color(): number;
        cellSize(): number;
        skipEvery(): number;
        constructor(cellSize: number, color: number, skipEvery: number);
    }
    /**
     * Values that may be interpreted as {@link $GraphView$GridLevel}.
     */
    export type $GraphView$GridLevel_ = { color?: number, skipEvery?: number, cellSize?: number,  } | [color?: number, skipEvery?: number, cellSize?: number, ];
    export class $Menu<K, T> extends $UIElement {
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        setCloseOnClick(arg0: boolean): $Menu<K, $CompoundTag>;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        close(): void;
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        set autoClose(value: boolean);
        set onClose(value: $Runnable_);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
        set closeOnClick(value: boolean);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set uiProvider(value: $UIElementProvider_<K>);
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
    }
    export class $Dialog extends $UIElement {
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        setTitle(arg0: string): $Dialog;
        show(arg0: $UIElement): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        setAutoClose(arg0: boolean): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: number, arg5: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: number, arg6: $Consumer_<$File>): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        setClickOutsideClose(arg0: boolean): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        static showCheckBox(arg0: string, arg1: $Component_, arg2: $BooleanConsumer_): $Dialog;
        removeExternalElement(arg0: $UIElement): $Dialog;
        allowInteraction(): $Dialog;
        rememberSize(arg0: string): $Dialog;
        darkenBackground(): $Dialog;
        addExternalElement(arg0: $UIElement): $Dialog;
        bottom(): $Dialog;
        close(): void;
        top(): $Dialog;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $Dialog;
        width(arg0: $TaffyDimension): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set title(value: string);
        set autoClose(value: boolean);
        set onClose(value: $Runnable_);
        set clickOutsideClose(value: boolean);
    }
    export class $TabView extends $UIElement {
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        getSelectedTab(): $Tab;
        selectTab(arg0: $Tab): $TabView;
        removeTab(arg0: $Tab): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        clear(): $TabView;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get tabContents(): $BiMap<$Tab, $UIElement>;
        set onTabSelected(value: $Consumer_<$Tab>);
        get selectedTab(): $Tab;
    }
    export class $Scene extends $UIElement {
        getRenderer(): $WorldSceneRenderer;
        setCenter(arg0: $Vector3f): $Scene;
        setDraggable(arg0: boolean): $Scene;
        camZoom(): number;
        isUseCache(): boolean;
        xeiLookup(): $Scene;
        useOrtho(arg0: boolean): $Scene;
        useOrtho(): $Scene;
        isScalable(): boolean;
        setZoom(arg0: number): $Scene;
        isUseOrtho(): boolean;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        getLastHoverPosFace(): $BlockPosFace;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        getLastSelectedPosFace(): $BlockPosFace;
        isShowHoverBlockTips(): boolean;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        releaseRendererResource(): void;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        getLastClickPosFace(): $BlockPosFace;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        setOrthoRange(arg0: number): $Scene;
        getDummyWorld(): $TrackedDummyWorld;
        isRenderFacing(): boolean;
        isRenderSelect(): boolean;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        needCompileCache(): void;
        setScalable(arg0: boolean): $Scene;
        isIntractable(): boolean;
        getParticleManager(): $ParticleManager;
        setIntractable(arg0: boolean): $Scene;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        syncCompile(arg0: boolean): $Scene;
        syncCompile(): $Scene;
        useCacheBuffer(): $Scene;
        useCacheBuffer(arg0: boolean): $Scene;
        isAutoReleased(): boolean;
        getClipBlock(): $ClipContext$Block;
        setTickWorld(arg0: boolean): $Scene;
        getLastHoverItem(): $ItemStack;
        isSyncCompile(): boolean;
        setAllowXEILookup(arg0: boolean): $Scene;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        getRotationPitch(): number;
        isAllowXEILookup(): boolean;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        getRotationYaw(): number;
        getClipFluid(): $ClipContext$Fluid;
        isTickWorld(): boolean;
        isDraggable(): boolean;
        setRenderFacing(arg0: boolean): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        createScene(arg0: $Level_): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderSelect(arg0: boolean): $Scene;
        getRange(): number;
        getZoom(): number;
        getCenter(): $Vector3f;
        isDragging(): boolean;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get renderer(): $WorldSceneRenderer;
        get useCache(): boolean;
        set afterWorldRender(value: $Consumer_<$Scene>);
        get lastHoverPosFace(): $BlockPosFace;
        get lastSelectedPosFace(): $BlockPosFace;
        set beforeWorldRender(value: $Consumer_<$Scene>);
        get lastClickPosFace(): $BlockPosFace;
        set orthoRange(value: number);
        get dummyWorld(): $TrackedDummyWorld;
        get particleManager(): $ParticleManager;
        get autoReleased(): boolean;
        get clipBlock(): $ClipContext$Block;
        get lastHoverItem(): $ItemStack;
        get rotationPitch(): number;
        get rotationYaw(): number;
        get clipFluid(): $ClipContext$Fluid;
        get range(): number;
        get dragging(): boolean;
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveWidth(): boolean;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        scrollerViewMargin(): number;
        mode(): $ScrollerMode;
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        static init(): void;
        holder: $UIElement;
        constructor(arg0: $ScrollerView);
    }
    export class $TextArea$TextAreaStyle extends $Style {
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        textColor(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        cursorColor(): number;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        scrollerViewMargin(): number;
        static init(): void;
        fontSize(): number;
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        font(arg0: $ResourceLocation_): $TextArea$TextAreaStyle;
        font(): $ResourceLocation;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        placeholder(): $Component;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        viewMode(): $ScrollerMode;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        errorColor(): number;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        textShadow(): boolean;
        holder: $UIElement;
        constructor(arg0: $TextArea);
    }
    export class $Slider$Vertical extends $Slider {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $GraphView$GridFineLevel extends $Record {
        size(): number;
        fade(): number;
        constructor(size: number, fade: number);
    }
    /**
     * Values that may be interpreted as {@link $GraphView$GridFineLevel}.
     */
    export type $GraphView$GridFineLevel_ = { size?: number, fade?: number,  } | [size?: number, fade?: number, ];
    export class $TextField$Mode extends $Enum<$TextField$Mode> {
        getNumberType(): $ConfigNumber$Type;
        static values(): $TextField$Mode[];
        static valueOf(arg0: string): $TextField$Mode;
        isNumber(): boolean;
        static NUMBER_FLOAT: $TextField$Mode;
        static RESOURCE_LOCATION: $TextField$Mode;
        static NUMBER_INT: $TextField$Mode;
        static NUMBER_BYTE: $TextField$Mode;
        static INTERNAL: $TextField$Mode;
        static COMPOUND_TAG: $TextField$Mode;
        static STRING: $TextField$Mode;
        static NUMBER_DOUBLE: $TextField$Mode;
        static NUMBER_SHORT: $TextField$Mode;
        static NUMBER_LONG: $TextField$Mode;
        get numberType(): $ConfigNumber$Type;
        get number(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextField$Mode}.
     */
    export type $TextField$Mode_ = "internal" | "string" | "compound_tag" | "resource_location" | "number_long" | "number_int" | "number_float" | "number_double" | "number_short" | "number_byte";
    export class $BindableValue<T> extends $BindableUIElement<T> {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: T);
    }
    export class $TextElement extends $UIElement {
        getTextStyle(): $TextElement$TextStyle;
        setText(arg0: string, arg1: boolean): $TextElement;
        getText(): $Component;
        recompute(): void;
        getFont(): $Font;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $TextElement;
        setText(arg0: $Component_): $TextElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get font(): $Font;
    }
    export class $UITemplateElement extends $UIElement {
        setTemplate(arg0: $IResourcePath): $UITemplateElement;
        getPath(): $IResourcePath;
        getTemplate(): $UITemplate;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: $IResourcePath);
        get path(): $IResourcePath;
    }
    export class $Switch extends $BindableUIElement<boolean> {
        setOnSwitchChanged(arg0: $BooleanConsumer_): $Switch;
        switchStyle(arg0: $Consumer_<$Switch$SwitchStyle>): $Switch;
        getSwitchStyle(): $Switch$SwitchStyle;
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean): $Switch;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        placeholder: $UIElement;
        markIcon: $UIElement;
        constructor();
        set onSwitchChanged(value: $BooleanConsumer_);
    }
    export class $SplitView$Vertical extends $SplitView {
        setPercentage(arg0: number): $SplitView$Vertical;
        bottom(arg0: $UIElement): $SplitView$Vertical;
        top(arg0: $UIElement): $SplitView$Vertical;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $VirtualScrollerView$VirtualScrollerViewStyle extends $Style {
        estimatedItemHeight(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        estimatedItemHeight(): number;
        overscanPixels(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        overscanPixels(): number;
        itemHeightMode(arg0: $VirtualItemHeightMode_): $VirtualScrollerView$VirtualScrollerViewStyle;
        itemHeightMode(): $VirtualItemHeightMode;
        static init(): void;
        holder: $UIElement;
    }
    export class $TextElement$TextStyle extends $Style {
        textColor(): number;
        textColor(arg0: number): $TextElement$TextStyle;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        textAlignHorizontal(): $Horizontal;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        adaptiveHeight(): boolean;
        static init(): void;
        fontSize(arg0: number): $TextElement$TextStyle;
        fontSize(): number;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        font(): $ResourceLocation;
        rollSpeed(): number;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        lineSpacing(): number;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        textShadow(): boolean;
        textWrap(): $TextWrap;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        getToggleStyle(): $Toggle$ToggleStyle;
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        setText(arg0: string, arg1: boolean): $Toggle;
        setText(arg0: $Component_): $Toggle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        setOn(arg0: boolean): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        enableText(): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        noText(): $Toggle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        getToggles(): $List<$Toggle>;
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        getCurrentToggle(): $Toggle;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        constructor();
        get toggles(): $List<$Toggle>;
        set allowEmpty(value: boolean);
        get currentToggle(): $Toggle;
        get configurableName(): string;
    }
    export class $StructuredTagEditor$TagKind extends $Enum<$StructuredTagEditor$TagKind> {
        static values(): $StructuredTagEditor$TagKind[];
        static valueOf(arg0: string): $StructuredTagEditor$TagKind;
        static FLOAT: $StructuredTagEditor$TagKind;
        static BYTE_ARRAY: $StructuredTagEditor$TagKind;
        displayName: string;
        static COMPOUND: $StructuredTagEditor$TagKind;
        static INT_ARRAY: $StructuredTagEditor$TagKind;
        static INT: $StructuredTagEditor$TagKind;
        static LONG_ARRAY: $StructuredTagEditor$TagKind;
        static BOOLEAN: $StructuredTagEditor$TagKind;
        static SHORT: $StructuredTagEditor$TagKind;
        static BYTE: $StructuredTagEditor$TagKind;
        static STRING: $StructuredTagEditor$TagKind;
        static END: $StructuredTagEditor$TagKind;
        static DOUBLE: $StructuredTagEditor$TagKind;
        static LIST: $StructuredTagEditor$TagKind;
        static LONG: $StructuredTagEditor$TagKind;
    }
    /**
     * Values that may be interpreted as {@link $StructuredTagEditor$TagKind}.
     */
    export type $StructuredTagEditor$TagKind_ = "end" | "byte" | "short" | "int" | "long" | "float" | "double" | "string" | "list" | "compound" | "byte_array" | "int_array" | "long_array" | "boolean";
    export class $SplitView extends $UIElement {
        getMinPercentage(): number;
        getBorderSize(): number;
        getMaxPercentage(): number;
        setMinPercentage(arg0: number): $SplitView;
        setMaxPercentage(arg0: number): $SplitView;
        setBorderSize(arg0: number): $SplitView;
        setPercentage(arg0: number): $SplitView;
        getPercentage(): number;
        first(arg0: $UIElement): $SplitView;
        second(arg0: $UIElement): $SplitView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(): $IGuiTexture;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        arrowIcon(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Menu<any, any>);
    }
    export class $ProgressBar extends $UIElement implements $IBindable<number>, $IDataConsumer<number> {
        getBoundDataSources(): $Collection<$IDataProvider<number>>;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        setProgress(arg0: number): $ProgressBar;
        setMinValue(arg0: number): $ProgressBar;
        setMaxValue(arg0: number): $ProgressBar;
        getNormalizedValue(arg0: number): number;
        getNormalizedValue(): number;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        bindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        unbindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        getValue(): number;
        setValue(arg0: number): $ProgressBar;
        label(arg0: $Consumer_<$Label>): $ProgressBar;
        getMinValue(): number;
        getMaxValue(): number;
        setRange(arg0: number, arg1: number): $ProgressBar;
        bar(arg0: $Consumer_<$UIElement>): $ProgressBar;
        bind(arg0: $IBinding<number>): $UIElement;
        unbind(arg0: $IBinding<number>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        barBackground: $UIElement;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<number>>;
        set progress(value: number);
    }
    export class $TreeList$ReorderRequest<N> extends $Record {
        mode(): $TreeList$DropMode;
        target(): N;
        dragged(): $Set<N>;
        constructor(dragged: $Set_<N>, target: N, mode: $TreeList$DropMode_);
    }
    /**
     * Values that may be interpreted as {@link $TreeList$ReorderRequest}.
     */
    export type $TreeList$ReorderRequest_<N> = { target?: any, mode?: $TreeList$DropMode_, dragged?: $Set_<any>,  } | [target?: any, mode?: $TreeList$DropMode_, dragged?: $Set_<any>, ];
    export class $Selector<T> extends $BindableUIElement<T> {
        hide(): void;
        show(): void;
        getSelectorStyle(): $Selector$SelectorStyle;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        getCandidates(): $List<T>;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $Selector<T>;
        setSelected(arg0: T): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        preview: $UIElement;
        dialog: $UIElement;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        display: $UIElement;
        scrollerView: $ScrollerView;
        constructor();
        set candidateUIProvider(value: $UIElementProvider_<T>);
        set onValueChanged(value: $Consumer_<T>);
        get open(): boolean;
    }
    export class $Inspector extends $UIElement {
        getInspectedConfigurable(): $IConfigurable;
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
        getHistoryStack(): $IHistoryStack;
        clear(): void;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        get inspectedConfigurable(): $IConfigurable;
    }
    export class $ColorSelector extends $BindableUIElement<number> {
        setOnColorChangeListener(arg0: $IntConsumer_): $ColorSelector;
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number): $ColorSelector;
        setColor(arg0: number, arg1: boolean): $ColorSelector;
        getColor(): number;
        hexConfigurator: $StringConfigurator;
        colorSlider: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        pickerContainer: $UIElement;
        hsbButton: $Button;
        textContainer: $UIElement;
        colorPreview: $UIElement;
        alphaSlider: $UIElement;
        constructor();
        set onColorChangeListener(value: $IntConsumer_);
    }
}
