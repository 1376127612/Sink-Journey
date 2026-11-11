import { $HistoryStack } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigNumber$Type } from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Tag_, $Tag, $LongArrayTag, $ListTag_, $ByteArrayTag, $IntArrayTag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IGuiTexture_, $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ISearch, $IResultHandler_ } from "@package/com/lowdragmc/lowdraglib2/utils/search";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
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
        search(arg0: string, arg1: $IResultHandler_<T>): void;
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
        constructor();
    }
    export class $Slider$SliderStyle extends $Style {
        static init(): void;
        handleSize(arg0: number): $Slider$SliderStyle;
        handleSize(): number;
        trackSize(): number;
        trackSize(arg0: number): $Slider$SliderStyle;
        sliderStep(): number;
        sliderStep(arg0: number): $Slider$SliderStyle;
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
        static init(): void;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        focusOverlay(): $IGuiTexture;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        maxItemCount(): number;
        holder: $UIElement;
    }
    export class $TextField extends $BindableUIElement<string> {
        getValue(): string;
        setValue(arg0: string, arg1: boolean): $TextField;
        isError(): boolean;
        setText(arg0: string, arg1: boolean): $TextField;
        setText(arg0: string): $TextField;
        getSelectionStart(): number;
        setSelection(arg0: number, arg1: number): void;
        getSelectionEnd(): number;
        setFormatter(arg0: $Function_<string, $Component>): $TextField;
        getFormatter(): $Function<string, $Component>;
        getText(): string;
        getMode(): $TextField$Mode;
        getRawText(): string;
        insertText(arg0: string): void;
        getFont(): $Font;
        deleteChars(arg0: number): void;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        getHistoryStack(): $HistoryStack<string>;
        setCursor(arg0: number): void;
        isEditable(): boolean;
        setResourceLocationOnly(): $TextField;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setTextRegexValidator(arg0: string): $TextField;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        getCursorUnderMouseX(arg0: number): number;
        getDisplayOffset(): number;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        getCursorPos(): number;
        getWordPosition(arg0: number): number;
        setAnyString(): $TextField;
        setCompoundTagOnly(): $TextField;
        deleteWords(arg0: number): void;
        deleteCharsToPos(arg0: number): void;
        getStyledLine(): $Component;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        getHighlighted(): string;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        setWheelDur(arg0: number, arg1: number): $TextField;
        setWheelDur(arg0: number): $TextField;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        getWheelDur(): number;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        handler$fil000$imblocker$checkFocusTracking(arg0: $UIEvent, arg1: $CallbackInfo): void;
        handler$fil000$imblocker$onDisplayOffsetUpdated(arg0: $CallbackInfo): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get selectionStart(): number;
        get selectionEnd(): number;
        get mode(): $TextField$Mode;
        get rawText(): string;
        get font(): $Font;
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<string>;
        set cursor(value: number);
        get editable(): boolean;
        set textRegexValidator(value: string);
        get displayOffset(): number;
        set textResponder(value: $Consumer_<string>);
        set textValidator(value: $Predicate_<string>);
        get cursorPos(): number;
        get styledLine(): $Component;
        get highlighted(): string;
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
    }
    export class $GraphView extends $UIElement {
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setScale(arg0: number): void;
        getScale(): number;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        getPixelScale(): number;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        addContentChild(arg0: $UIElement): $GraphView;
        removeContentChild(arg0: $UIElement): $GraphView;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        static resolveGridLevels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $List<$GraphView$GridLevel>;
        fitToChildren(arg0: number, arg1: number): void;
        static resolveGridFineLevel(arg0: number, arg1: number, arg2: number, arg3: number): $GraphView$GridFineLevel;
        clearAllContentChildren(): $GraphView;
        getOffsetX(): number;
        getOffsetY(): number;
        static resolveLod(arg0: number, arg1: boolean, arg2: number, arg3: number): $GraphViewLod;
        setOffsetY(arg0: number): void;
        getLod(): $GraphViewLod;
        setOffsetX(arg0: number): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get pixelScale(): number;
        get lod(): $GraphViewLod;
    }
    export class $Scroller$ScrollerStyle extends $Style {
        static init(): void;
        scrollBarSize(arg0: number): $Scroller$ScrollerStyle;
        scrollBarSize(): number;
        scrollDelta(arg0: number): $Scroller$ScrollerStyle;
        scrollDelta(): number;
        holder: $UIElement;
        constructor(arg0: $Scroller);
    }
    export class $FluidSlot$SlotStyle extends $Style {
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(): boolean;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        getContent(): $UIElement;
        setText(arg0: string, arg1: boolean): $Tab;
        setText(arg0: string): $Tab;
        setText(arg0: $Component_): $Tab;
        setSelected(arg0: boolean): void;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        getTabView(): $TabView;
        setOnTabSelected(arg0: $Runnable_): $Tab;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        getTabStyle(): $Tab$TabStyle;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get content(): $UIElement;
        set selected(value: boolean);
        get tabView(): $TabView;
        set onTabSelected(value: $Runnable_);
        set dynamicText(value: $Supplier_<$Component>);
        set onTabUnselected(value: $Runnable_);
    }
    export class $TextField$TextFieldStyle extends $Style {
        static init(): void;
        fontSize(): number;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        font(): $ResourceLocation;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        placeholder(): $Component;
        textColor(arg0: number): $TextField$TextFieldStyle;
        textColor(): number;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        cursorColor(): number;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        focusOverlay(): $IGuiTexture;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        textShadow(): boolean;
        errorColor(): number;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        holder: $UIElement;
        constructor(arg0: $TextField);
    }
    export class $Button$ButtonStyle extends $Style {
        hoverTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        hoverTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(): $IGuiTexture;
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
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
        static init(): void;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        unmarkTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        scrollToChildDelayed(arg0: $UIElement): void;
        removeScrollViewChild(arg0: $UIElement): boolean;
        clearAllScrollViewChildren(): void;
        getContainerHeight(): number;
        scrollToChild(arg0: $UIElement): boolean;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        getContainerWidth(): number;
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        hasScrollViewChild(arg0: $UIElement): boolean;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        get containerHeight(): number;
        get containerWidth(): number;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        static init(): void;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        focusOverlay(): $IGuiTexture;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        scrollerViewHeight(): number;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        maxItemCount(): number;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number): $Scroller;
        setValue(arg0: number, arg1: boolean): $Scroller;
        setScrollBarSize(arg0: number): $Scroller;
        getMinValue(): number;
        getMaxValue(): number;
        isDragging(): boolean;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        scrollValue(arg0: number): void;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        setRange(arg0: number, arg1: number): $Scroller;
        setMaxValue(arg0: number): $Scroller;
        setMinValue(arg0: number): $Scroller;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        getNormalizedValue(): number;
        setNormalizedValue(arg0: number): $Scroller;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        scrollByWheel(arg0: number): void;
        getClampNormalizedValue(): $Function<number, number>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set scrollBarSize(value: number);
        get dragging(): boolean;
        set onValueChanged(value: $FloatConsumer_);
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
        getValue(): number;
        fill(arg0: $Consumer_<$UIElement>): $Slider;
        setValue(arg0: number): $Slider;
        setValue(arg0: number, arg1: boolean): $Slider;
        handle(arg0: $Consumer_<$Button>): $Slider;
        getMinValue(): number;
        getMaxValue(): number;
        track(arg0: $Consumer_<$UIElement>): $Slider;
        isDragging(): boolean;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Slider;
        setOnValueChanged(arg0: $FloatConsumer_): $Slider;
        slideValue(arg0: number): void;
        trackContainer(arg0: $Consumer_<$UIElement>): $Slider;
        getSliderStyle(): $Slider$SliderStyle;
        setRange(arg0: number, arg1: number): $Slider;
        sliderStyle(arg0: $Consumer_<$Slider$SliderStyle>): $Slider;
        setMaxValue(arg0: number): $Slider;
        setMinValue(arg0: number): $Slider;
        getNormalizedValue(): number;
        setNormalizedValue(arg0: number, arg1: boolean): $Slider;
        setNormalizedValue(arg0: number): $Slider;
        getClampNormalizedValue(): $Function<number, number>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get dragging(): boolean;
        set onValueChanged(value: $FloatConsumer_);
    }
    export class $BindableUIElement<T> extends $UIElement implements $IBindable<T>, $IObservable<T>, $IDataConsumer<T> {
        getValue(): T;
        setValue(arg0: T): $BindableUIElement<T>;
        setValue(arg0: T, arg1: boolean): $BindableUIElement<T>;
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        getBoundDataSources(): $Collection<$IDataProvider<T>>;
        unbindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        getBoundObservers(): $Collection<$IObserver<T>>;
        unbindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        bindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<T>>;
        get boundObservers(): $Collection<$IObserver<T>>;
    }
    export class $ItemSlot extends $BindableUIElement<$ItemStack> {
        getSlot(): $Slot;
        getValue(): $ItemStack;
        setValue(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        bind(arg0: $IItemHandlerModifiable, arg1: number): $ItemSlot;
        bind(arg0: $Slot): $ItemSlot;
        xeiRecipeSlot(): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        static compactCount(arg0: $ItemStack_): string;
        getSlotStyle(): $ItemSlot$SlotStyle;
        updateSlotPosition(): void;
        setItem(arg0: $ItemStack_): $ItemSlot;
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        getFullTooltipTexts(arg0: boolean): $List<$Component>;
        xeiPhantom(): $ItemSlot;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        static DRAGGING_BG: $IGuiTexture;
        static ITEM_SLOT_TEXTURE: $IGuiTexture;
        constructor();
        constructor(arg0: $Slot);
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
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
    }
    export class $Tab$TabStyle extends $Style {
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(): $IGuiTexture;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        holder: $UIElement;
        constructor(arg0: $Tab);
    }
    export class $Label extends $TextElement implements $IBindable<$Component>, $IDataConsumer<$Component> {
        getValue(): $Component;
        setValue(arg0: $Component_): $Label;
        getBoundDataSources(): $Collection<$IDataProvider<$Component>>;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        bindDataSource(arg0: $IDataProvider<$Component_>): $Label;
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
        getRoot(): NODE;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        getSelected(): $Set<NODE>;
        setRoot(arg0: NODE): $TreeList<NODE>;
        setClickToExpandFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        static createDraggingOverlay(arg0: $TreeList$DropMode_, arg1: boolean): $IGuiTexture;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        setRightClickToExpand(arg0: boolean): $TreeList<NODE>;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setDragPayloadFactory(arg0: $Function_<NODE, $Object>): $TreeList<NODE>;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setReorderValidator(arg0: $Predicate_<$TreeList$ReorderRequest<NODE>>): $TreeList<NODE>;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        expandNodeAlongPath(arg0: NODE): void;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        expandsOnClick(arg0: NODE): boolean;
        setDraggable(arg0: boolean): $TreeList<NODE>;
        setOnReorder(arg0: $Consumer_<$TreeList$ReorderRequest<NODE>>): $TreeList<NODE>;
        collapseNode(arg0: NODE): void;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        isFlattenRoot(): boolean;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        isWidthFitsContent(): boolean;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        isNodeSelected(arg0: NODE): boolean;
        getTreeListStyle(): $TreeList$TreeListStyle;
        toggleNodeExpanded(arg0: NODE): void;
        getHoveredNode(): NODE;
        createNodeUI(arg0: NODE): $UIElement;
        isNodeExpanded(arg0: NODE): boolean;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        getExpandedNodes(): $Set<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        reloadList(): $TreeList<NODE>;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        constructor();
        set clickToExpandFilter(value: $Predicate_<NODE>);
        set rightClickToExpand(value: boolean);
        set dragPayloadFactory(value: $Function_<NODE, $Object>);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set selectableNodeFilter(value: $Predicate_<NODE>);
        set reorderValidator(value: $Predicate_<$TreeList$ReorderRequest<NODE>>);
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set doubleClickToExpand(value: boolean);
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        set draggable(value: boolean);
        set onReorder(value: $Consumer_<$TreeList$ReorderRequest<NODE>>);
        set clickToExpand(value: boolean);
        set staticTree(value: boolean);
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        get treeListStyle(): $TreeList$TreeListStyle;
        get hoveredNode(): NODE;
        get expandedNodes(): $Set<NODE>;
        set supportMultipleSelection(value: boolean);
        get nodeUIs(): $BiMap<NODE, $UIElement>;
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        getLines(): $List<string>;
        collapseSelectionToCursor(): void;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        getScrollX(): number;
        getScrollY(): number;
        getFont(): $Font;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        getSelStartCol(): number;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        getSelEndCol(): number;
        setCursor(arg0: number, arg1: number): void;
        handler$fim001$imblocker$checkFocusTracking(arg0: $UIEvent, arg1: $CallbackInfo): void;
        handler$fim000$imblocker$onScrollersUpdated(arg0: $CallbackInfo): void;
        isEditable(): boolean;
        cursorPos(): $Cursor;
        lineHeight(): number;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        getSelEndLine(): number;
        pushHistory(): void;
        getCursorLine(): number;
        drawContentView(arg0: $GUIContext): void;
        hasSelection(): boolean;
        getCursorCol(): number;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        getSelStartLine(): number;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        setLines(arg0: $List_<string>): $TextArea;
        handler$fim000$imblocker$onScrolling(arg0: number, arg1: $CallbackInfo): void;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get scrollX(): number;
        get scrollY(): number;
        get font(): $Font;
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<$TextArea$History>;
        get selStartCol(): number;
        set linesResponder(value: $Consumer_<string[]>);
        get selEndCol(): number;
        get editable(): boolean;
        set textValidator(value: $Predicate_<string[]>);
        get selEndLine(): number;
        get cursorLine(): number;
        get cursorCol(): number;
        get selStartLine(): number;
    }
    export class $Switch$SwitchStyle extends $Style {
        static init(): void;
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        baseTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        collapseIcon(): $IGuiTexture;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        nodeTexture(): $IGuiTexture;
        expandIcon(): $IGuiTexture;
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T): $SearchComponent<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        hide(): void;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        show(): void;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        isSearchOnServer(): boolean;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        getSearchStyle(): $SearchComponent$SearchStyle;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        preview: $UIElement;
        dialog: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        scrollerView: $VirtualScrollerView<T>;
        textField: $TextField;
        constructor(arg0: $SearchComponent$ISearchUI<T>);
        constructor();
        get open(): boolean;
        set candidateUIProvider(value: $UIElementProvider_<T>);
        set onValueChanged(value: $Consumer_<T>);
    }
    export class $FluidSlot extends $BindableUIElement<$FluidStack> {
        getValue(): $FluidStack;
        setValue(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        bind(arg0: $IFluidHandler, arg1: number): $FluidSlot;
        setCapacity(arg0: number): $FluidSlot;
        getCapacity(): number;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        getFluid(): $FluidStack;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        getFullTooltipTexts(arg0: boolean): $List<$Component>;
        getFullTooltipTexts(): $List<$Component>;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        xeiPhantom(): $FluidSlot;
        getFluidAmountText(): $Component;
        isAllowClickFilled(): boolean;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        isAllowClickDrained(): boolean;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        amountLabel: $Label;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get fluidAmountText(): $Component;
    }
    export class $VirtualScrollerView<T> extends $ScrollerView {
        getItemCount(): number;
        setItems(arg0: $List_<$CompoundTag_>): $VirtualScrollerView<$CompoundTag>;
        getFirstMountedIndex(): number;
        refreshVisibleItems(): void;
        refreshVisibleItems(arg0: number, arg1: number): void;
        getTotalVirtualHeight(): number;
        setBeforeMountItems(arg0: $Runnable_): $VirtualScrollerView<$CompoundTag>;
        getLastMountedIndex(): number;
        virtualScrollerViewStyle(arg0: $Consumer_<$VirtualScrollerView$VirtualScrollerViewStyle>): $VirtualScrollerView<$CompoundTag>;
        updateMeasuredItemHeight(arg0: number, arg1: number): boolean;
        getMountedItemCount(): number;
        getVirtualScrollerViewStyle(): $VirtualScrollerView$VirtualScrollerViewStyle;
        setItemUIProvider(arg0: $UIElementProvider_<$CompoundTag>): $VirtualScrollerView<$CompoundTag>;
        scrollToTop(): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get itemCount(): number;
        set items(value: $List_<$CompoundTag_>);
        get firstMountedIndex(): number;
        get totalVirtualHeight(): number;
        set beforeMountItems(value: $Runnable_);
        get lastMountedIndex(): number;
        get mountedItemCount(): number;
        set itemUIProvider(value: $UIElementProvider_<$CompoundTag>);
    }
    export class $TagField extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $TagField;
        setAny(): $TagField;
        setCompoundTagOnly(): $TagField;
        setListOnly(): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        editButton: $Button;
        textField: $TextField;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
    }
    export class $Button extends $UIElement {
        getState(): $Button$State;
        setText(arg0: string, arg1: boolean): $Button;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Button;
        addPreIcon(arg0: $IGuiTexture_): $Button;
        setText(arg0: $Component_): $Button;
        setOnServerClick(arg0: $UIEventListener_): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        enableText(): $Button;
        setOnClick(arg0: $UIEventListener_): $Button;
        noText(): $Button;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $TextElement;
        constructor();
        get state(): $Button$State;
        set onServerClick(value: $UIEventListener_);
        set onClick(value: $UIEventListener_);
    }
    export class $GraphView$GraphViewStyle extends $Style {
        lodBlockPixelScale(): number;
        lodBlockPixelScale(arg0: number): $GraphView$GraphViewStyle;
        gridAccentColor(arg0: number): $GraphView$GraphViewStyle;
        gridAccentColor(): number;
        gridLineWidth(): number;
        gridLineWidth(arg0: number): $GraphView$GraphViewStyle;
        gridLineColor(): number;
        gridLineColor(arg0: number): $GraphView$GraphViewStyle;
        gridMinPixels(): number;
        gridMinPixels(arg0: number): $GraphView$GraphViewStyle;
        gridSubdivisions(arg0: number): $GraphView$GraphViewStyle;
        gridSubdivisions(): number;
        lodSimplifiedPixelScale(): number;
        lodSimplifiedPixelScale(arg0: number): $GraphView$GraphViewStyle;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        maxScale(): number;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        allowPan(): boolean;
        allowZoom(): boolean;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        gridSize(): number;
        lodEnabled(): boolean;
        lodEnabled(arg0: boolean): $GraphView$GraphViewStyle;
        minScale(): number;
        minScale(arg0: number): $GraphView$GraphViewStyle;
        holder: $UIElement;
        constructor(arg0: $GraphView);
    }
    export class $SplitView$Horizontal extends $SplitView {
        left(arg0: $UIElement): $SplitView$Horizontal;
        right(arg0: $UIElement): $SplitView$Horizontal;
        setPercentage(arg0: number): $SplitView$Horizontal;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $StructuredTagEditor extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $StructuredTagEditor;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        setAny(): $StructuredTagEditor;
        setCompoundTagOnly(): $StructuredTagEditor;
        setListOnly(): $StructuredTagEditor;
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        showItemTooltips(): boolean;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        isPlayerSlot(): boolean;
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        quickMovePriority(): number;
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        holder: $UIElement;
        constructor(arg0: $ItemSlot);
    }
    export class $ProgressBar$ProgressBarStyle extends $Style {
        static init(): void;
        interpolate(): boolean;
        interpolate(arg0: boolean): $ProgressBar$ProgressBarStyle;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $ProgressBar$ProgressBarStyle;
        interpolateStep(): number;
        interpolateStep(arg0: number): $ProgressBar$ProgressBarStyle;
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
    export type $GraphView$GridLevel_ = { cellSize?: number, color?: number, skipEvery?: number,  } | [cellSize?: number, color?: number, skipEvery?: number, ];
    export class $Menu<K, T> extends $UIElement {
        close(): void;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        setCloseOnClick(arg0: boolean): $Menu<K, $CompoundTag>;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        set onClose(value: $Runnable_);
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set autoClose(value: boolean);
        set closeOnClick(value: boolean);
        set uiProvider(value: $UIElementProvider_<K>);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
    }
    export class $Dialog extends $UIElement {
        bottom(): $Dialog;
        close(): void;
        top(): $Dialog;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $Dialog;
        width(arg0: $TaffyDimension): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        removeExternalElement(arg0: $UIElement): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        setTitle(arg0: string): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        show(arg0: $UIElement): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: number, arg6: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: number, arg5: $Consumer_<$File>): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        setAutoClose(arg0: boolean): $Dialog;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        static showCheckBox(arg0: string, arg1: $Component_, arg2: $BooleanConsumer_): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        darkenBackground(): $Dialog;
        allowInteraction(): $Dialog;
        addExternalElement(arg0: $UIElement): $Dialog;
        rememberSize(arg0: string): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set clickOutsideClose(value: boolean);
        set title(value: string);
        set onClose(value: $Runnable_);
        set autoClose(value: boolean);
    }
    export class $TabView extends $UIElement {
        clear(): $TabView;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        removeTab(arg0: $Tab): $TabView;
        selectTab(arg0: $Tab): $TabView;
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        getSelectedTab(): $Tab;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onTabSelected(value: $Consumer_<$Tab>);
        get selectedTab(): $Tab;
        get tabContents(): $BiMap<$Tab, $UIElement>;
    }
    export class $Scene extends $UIElement {
        getRange(): number;
        getRenderer(): $WorldSceneRenderer;
        isDragging(): boolean;
        setDraggable(arg0: boolean): $Scene;
        getCenter(): $Vector3f;
        setRenderFacing(arg0: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        createScene(arg0: $Level_): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        setRenderSelect(arg0: boolean): $Scene;
        setCenter(arg0: $Vector3f): $Scene;
        getRotationYaw(): number;
        useCacheBuffer(): $Scene;
        useCacheBuffer(arg0: boolean): $Scene;
        isIntractable(): boolean;
        getClipBlock(): $ClipContext$Block;
        needCompileCache(): void;
        setAllowXEILookup(arg0: boolean): $Scene;
        isAutoReleased(): boolean;
        isTickWorld(): boolean;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        getParticleManager(): $ParticleManager;
        setOrthoRange(arg0: number): $Scene;
        isRenderSelect(): boolean;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        getDummyWorld(): $TrackedDummyWorld;
        isDraggable(): boolean;
        setScalable(arg0: boolean): $Scene;
        setIntractable(arg0: boolean): $Scene;
        getRotationPitch(): number;
        isAllowXEILookup(): boolean;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        syncCompile(): $Scene;
        syncCompile(arg0: boolean): $Scene;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        isSyncCompile(): boolean;
        isRenderFacing(): boolean;
        getClipFluid(): $ClipContext$Fluid;
        setTickWorld(arg0: boolean): $Scene;
        getLastHoverItem(): $ItemStack;
        isUseOrtho(): boolean;
        setZoom(arg0: number): $Scene;
        getZoom(): number;
        xeiLookup(): $Scene;
        isUseCache(): boolean;
        useOrtho(arg0: boolean): $Scene;
        useOrtho(): $Scene;
        camZoom(): number;
        isScalable(): boolean;
        getLastSelectedPosFace(): $BlockPosFace;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        isShowHoverBlockTips(): boolean;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        releaseRendererResource(): void;
        getLastHoverPosFace(): $BlockPosFace;
        getLastClickPosFace(): $BlockPosFace;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get range(): number;
        get renderer(): $WorldSceneRenderer;
        get dragging(): boolean;
        get rotationYaw(): number;
        get clipBlock(): $ClipContext$Block;
        get autoReleased(): boolean;
        get particleManager(): $ParticleManager;
        set orthoRange(value: number);
        get dummyWorld(): $TrackedDummyWorld;
        get rotationPitch(): number;
        get clipFluid(): $ClipContext$Fluid;
        get lastHoverItem(): $ItemStack;
        get useCache(): boolean;
        get lastSelectedPosFace(): $BlockPosFace;
        set afterWorldRender(value: $Consumer_<$Scene>);
        get lastHoverPosFace(): $BlockPosFace;
        get lastClickPosFace(): $BlockPosFace;
        set beforeWorldRender(value: $Consumer_<$Scene>);
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        mode(): $ScrollerMode;
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        static init(): void;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        scrollerViewMargin(): number;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        holder: $UIElement;
        constructor(arg0: $ScrollerView);
    }
    export class $TextArea$TextAreaStyle extends $Style {
        static init(): void;
        fontSize(): number;
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextArea$TextAreaStyle;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        placeholder(): $Component;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        lineSpacing(): number;
        textColor(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        cursorColor(): number;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        scrollerViewMargin(): number;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        textShadow(): boolean;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        viewMode(): $ScrollerMode;
        errorColor(): number;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
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
        static values(): $TextField$Mode[];
        static valueOf(arg0: string): $TextField$Mode;
        isNumber(): boolean;
        getNumberType(): $ConfigNumber$Type;
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
        get number(): boolean;
        get numberType(): $ConfigNumber$Type;
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
        setText(arg0: string, arg1: boolean): $TextElement;
        getText(): $Component;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $TextElement;
        getFont(): $Font;
        setText(arg0: $Component_): $TextElement;
        recompute(): void;
        getTextStyle(): $TextElement$TextStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get font(): $Font;
    }
    export class $UITemplateElement extends $UIElement {
        getPath(): $IResourcePath;
        getTemplate(): $UITemplate;
        setTemplate(arg0: $IResourcePath): $UITemplateElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: $IResourcePath);
        get path(): $IResourcePath;
    }
    export class $Switch extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean): $Switch;
        switchStyle(arg0: $Consumer_<$Switch$SwitchStyle>): $Switch;
        setOnSwitchChanged(arg0: $BooleanConsumer_): $Switch;
        getSwitchStyle(): $Switch$SwitchStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        placeholder: $UIElement;
        markIcon: $UIElement;
        constructor();
        set onSwitchChanged(value: $BooleanConsumer_);
    }
    export class $SplitView$Vertical extends $SplitView {
        bottom(arg0: $UIElement): $SplitView$Vertical;
        top(arg0: $UIElement): $SplitView$Vertical;
        setPercentage(arg0: number): $SplitView$Vertical;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $VirtualScrollerView$VirtualScrollerViewStyle extends $Style {
        static init(): void;
        estimatedItemHeight(): number;
        estimatedItemHeight(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        overscanPixels(): number;
        overscanPixels(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        itemHeightMode(): $VirtualItemHeightMode;
        itemHeightMode(arg0: $VirtualItemHeightMode_): $VirtualScrollerView$VirtualScrollerViewStyle;
        holder: $UIElement;
    }
    export class $TextElement$TextStyle extends $Style {
        static init(): void;
        fontSize(): number;
        fontSize(arg0: number): $TextElement$TextStyle;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        textColor(arg0: number): $TextElement$TextStyle;
        textColor(): number;
        textAlignHorizontal(): $Horizontal;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        textWrap(): $TextWrap;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        rollSpeed(): number;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        setText(arg0: string, arg1: boolean): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        setText(arg0: $Component_): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        enableText(): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        setOn(arg0: boolean): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
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
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        afterSerialize(): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        beforeDeserialize(): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
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
        first(arg0: $UIElement): $SplitView;
        second(arg0: $UIElement): $SplitView;
        setPercentage(arg0: number): $SplitView;
        setMaxPercentage(arg0: number): $SplitView;
        getPercentage(): number;
        getBorderSize(): number;
        setBorderSize(arg0: number): $SplitView;
        setMinPercentage(arg0: number): $SplitView;
        getMinPercentage(): number;
        getMaxPercentage(): number;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        leafTexture(): $IGuiTexture;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(): $IGuiTexture;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        holder: $UIElement;
        constructor(arg0: $Menu<any, any>);
    }
    export class $ProgressBar extends $UIElement implements $IBindable<number>, $IDataConsumer<number> {
        getValue(): number;
        setValue(arg0: number): $ProgressBar;
        label(arg0: $Consumer_<$Label>): $ProgressBar;
        getMinValue(): number;
        getMaxValue(): number;
        bar(arg0: $Consumer_<$UIElement>): $ProgressBar;
        getBoundDataSources(): $Collection<$IDataProvider<number>>;
        unbindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        bindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        setProgress(arg0: number): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        setRange(arg0: number, arg1: number): $ProgressBar;
        setMaxValue(arg0: number): $ProgressBar;
        setMinValue(arg0: number): $ProgressBar;
        getNormalizedValue(): number;
        getNormalizedValue(arg0: number): number;
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
    export type $TreeList$ReorderRequest_<N> = { dragged?: $Set_<any>, target?: any, mode?: $TreeList$DropMode_,  } | [dragged?: $Set_<any>, target?: any, mode?: $TreeList$DropMode_, ];
    export class $Selector<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $Selector<T>;
        setSelected(arg0: T): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        hide(): void;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        show(): void;
        getSelectorStyle(): $Selector$SelectorStyle;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        getCandidates(): $List<T>;
        preview: $UIElement;
        dialog: $UIElement;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        display: $UIElement;
        scrollerView: $ScrollerView;
        constructor();
        get open(): boolean;
        set candidateUIProvider(value: $UIElementProvider_<T>);
        set onValueChanged(value: $Consumer_<T>);
    }
    export class $Inspector extends $UIElement {
        clear(): void;
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        getHistoryStack(): $IHistoryStack;
        getInspectedConfigurable(): $IConfigurable;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        get inspectedConfigurable(): $IConfigurable;
    }
    export class $ColorSelector extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number): $ColorSelector;
        getColor(): number;
        setOnColorChangeListener(arg0: $IntConsumer_): $ColorSelector;
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
