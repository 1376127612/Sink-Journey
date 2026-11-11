import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $MenuScreensAccessor } from "@package/cn/dancingsnow/neoecoae/mixins/client/accessor";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ReloadInstance } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $List, $List_, $Map } from "@package/java/util";
import { $FormattedCharSequence, $FormattedCharSequence_, $ProgressListener } from "@package/net/minecraft/util";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Consumer_, $BooleanSupplier_ } from "@package/java/util/function";
import { $TransferState_, $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $Music } from "@package/net/minecraft/sounds";
import { $CreateWorldScreen, $WorldCreationContext_ } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $Holder, $HolderGetter } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $URI } from "@package/java/net";
import { $Connection, $DisconnectionDetails_ } from "@package/net/minecraft/network";
import { $ClientTooltipPositioner_, $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $SimpleTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Throwable, $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $StructureSet_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ScreenAccessor } from "@package/com/extendedae_plus/mixin/accessor";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ScreenAccessor as $ScreenAccessor$2 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarratableEntry$NarrationPriority_ } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Biome_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $WidgetTooltipHolder, $Tooltip, $LogoRenderer, $Button$OnPress, $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ScreenAccessor as $ScreenAccessor$1 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AccessorScreen } from "@package/vazkii/patchouli/mixin/client";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BanDetails_ } from "@package/com/mojang/authlib/minecraft";
import { $GuiEventListener, $ContainerEventHandler, $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as options from "@package/net/minecraft/client/gui/screens/options";
export * as inventory from "@package/net/minecraft/client/gui/screens/inventory";
export * as reporting from "@package/net/minecraft/client/gui/screens/reporting";
export * as recipebook from "@package/net/minecraft/client/gui/screens/recipebook";
export * as achievement from "@package/net/minecraft/client/gui/screens/achievement";
export * as worldselection from "@package/net/minecraft/client/gui/screens/worldselection";
export * as packs from "@package/net/minecraft/client/gui/screens/packs";
export * as advancements from "@package/net/minecraft/client/gui/screens/advancements";
export * as telemetry from "@package/net/minecraft/client/gui/screens/telemetry";
export * as multiplayer from "@package/net/minecraft/client/gui/screens/multiplayer";
export * as social from "@package/net/minecraft/client/gui/screens/social";
export * as debug from "@package/net/minecraft/client/gui/screens/debug";

declare module "@package/net/minecraft/client/gui/screens" {
    export class $LoadingOverlay extends $Overlay {
        static registerTextures(minecraft: $Minecraft): void;
        reload: $ReloadInstance;
        static FADE_OUT_TIME: number;
        static FADE_IN_TIME: number;
        constructor(minecraft: $Minecraft, reload: $ReloadInstance, onFinish: $Consumer_<($Throwable) | undefined>, fadeIn: boolean);
    }
    export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
        create(menu: T, inventory: $Inventory, title: $Component_): U;
        fromPacket(title: $Component_, type: $MenuType_<T>, mc: $Minecraft, windowId: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MenuScreens$ScreenConstructor}.
     */
    export type $MenuScreens$ScreenConstructor_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
    export class $ReceivingLevelScreen extends $Screen {
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
        constructor(levelReceived: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_);
    }
    export class $DatapackLoadFailureScreen extends $Screen {
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
        constructor(cancelCallback: $Runnable_, safeModeCallback: $Runnable_);
    }
    export class $CreateBuffetWorldScreen extends $Screen {
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
        constructor(parent: $Screen, context: $WorldCreationContext_, applySettings: $Consumer_<$Holder<$Biome>>);
    }
    export class $OutOfMemoryScreen extends $Screen {
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
        constructor();
    }
    export class $ReceivingLevelScreen$Reason extends $Enum<$ReceivingLevelScreen$Reason> {
        static values(): $ReceivingLevelScreen$Reason[];
        static valueOf(arg0: string): $ReceivingLevelScreen$Reason;
        static OTHER: $ReceivingLevelScreen$Reason;
        static NETHER_PORTAL: $ReceivingLevelScreen$Reason;
        static END_PORTAL: $ReceivingLevelScreen$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ReceivingLevelScreen$Reason}.
     */
    export type $ReceivingLevelScreen$Reason_ = "nether_portal" | "end_portal" | "other";
    export class $PresetFlatWorldScreen$PresetsList$Entry extends $ObjectSelectionList$Entry<$PresetFlatWorldScreen$PresetsList$Entry> {
    }
    export class $ProgressScreen extends $Screen implements $ProgressListener {
        stop(): void;
        progressStart(component: $Component_): void;
        progressStage(component: $Component_): void;
        progressStartNoAbort(component: $Component_): void;
        /**
         * Updates the progress bar on the loading screen to the specified amount.
         */
        progressStagePercentage(progress: number): void;
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
        constructor(clearScreenAfterStop: boolean);
    }
    export class $ConnectScreen extends $Screen {
        static startConnecting(parent: $Screen, minecraft: $Minecraft, serverAddress: $ServerAddress, serverData: $ServerData, isQuickPlay: boolean, transferState: $TransferState_ | null): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static UNKNOWN_HOST_MESSAGE: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static ABORT_CONNECTION: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        connection: $Connection;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ErrorScreen extends $Screen {
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
        constructor(title: $Component_, message: $Component_);
    }
    export class $DirectJoinServerScreen extends $Screen {
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
        constructor(lastScreen: $Screen, callback: $BooleanConsumer_, serverData: $ServerData);
    }
    export class $CreateBuffetWorldScreen$BiomeList$Entry extends $ObjectSelectionList$Entry<$CreateBuffetWorldScreen$BiomeList$Entry> {
    }
    export class $CreateFlatWorldScreen extends $Screen {
        settings(): $FlatLevelGeneratorSettings;
        setConfig(generator: $FlatLevelGeneratorSettings): void;
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
        constructor(parent: $CreateWorldScreen, applySettings: $Consumer_<$FlatLevelGeneratorSettings>, generator: $FlatLevelGeneratorSettings);
        set config(value: $FlatLevelGeneratorSettings);
    }
    export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $GuiEventListener, $ContainerEventHandler, $AccessorScreen, $ScreenAccessor$2, $ScreenAccessor$1, $ScreenAccessor {
        init(minecraft: $Minecraft, width: number, height: number): void;
        resize(minecraft: $Minecraft, width: number, height: number): void;
        added(): void;
        removed(): void;
        onClose(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isPauseScreen(): boolean;
        static getTooltipFromItem(minecraft: $Minecraft, item: $ItemStack_): $List<$Component>;
        getTitle(): $Component;
        static isCopy(keyCode: number): boolean;
        tick(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasControlDown(): boolean;
        static wrapScreenError(action: $Runnable_, errorDesc: string, screenName: string): void;
        getBackgroundMusic(): $Music;
        getMinecraft(): $Minecraft;
        addWidget<T extends $GuiEventListener>(widget: T): T;
        static isPaste(keyCode: number): boolean;
        static isCut(keyCode: number): boolean;
        clearFocus(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasAltDown(): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasShiftDown(): boolean;
        setInitialFocus(listener: $GuiEventListener): void;
        addRenderableOnly<T extends $Renderable>(renderable: T): T;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderBackground(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        shouldCloseOnEsc(): boolean;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWithTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        onFilesDrop(packs: $List_<$Path_>): void;
        afterMouseAction(): void;
        static isSelectAll(keyCode: number): boolean;
        afterMouseMove(): void;
        setTooltipForNextRenderPass(packs: $List_<$FormattedCharSequence_>): void;
        setTooltipForNextRenderPass(tooltip: $Tooltip, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(title: $Component_): void;
        setTooltipForNextRenderPass(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_, override: boolean): void;
        static renderMenuBackgroundTexture(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, width: number, height: number): void;
        renderTransparentBackground(partialTick: $GuiGraphics): void;
        static findNarratableWidget(entries: $List_<$NarratableEntry>, target: $NarratableEntry | null): $Screen$NarratableSearchResult;
        handleComponentClicked(style: $Style | null): boolean;
        addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        updateNarratorStatus(onlyNarrateNew: boolean): void;
        triggerImmediateNarration(onlyNarrateNew: boolean): void;
        afterKeyboardAction(): void;
        handleDelayedNarration(): void;
        getNarrationMessage(): $Component;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        eap$getRenderables(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getRenderables(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        eap$getChildren(): $List<$GuiEventListener>;
        eap$getFont(): $Font;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        libgui$getChildren(): $List<$GuiEventListener>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getNarratables(): $List<$NarratableEntry>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        catnip$getRenderables(): $List<$Renderable>;
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
        get pauseScreen(): boolean;
        get title(): $Component;
        get backgroundMusic(): $Music;
        set initialFocus(value: $GuiEventListener);
        get narrationMessage(): $Component;
    }
    export class $CreateFlatWorldScreen$DetailsList$Entry extends $ObjectSelectionList$Entry<$CreateFlatWorldScreen$DetailsList$Entry> {
    }
    export class $MenuScreens implements $MenuScreensAccessor {
        /**
         * @deprecated
         */
        static register<M extends $AbstractContainerMenu, U extends $Screen>(type: $MenuType_<M>, factory: $MenuScreens$ScreenConstructor_<M, U>): void;
        static init(): void;
        static create<T extends $AbstractContainerMenu>(type: $MenuType_<T>, mc: $Minecraft, windowId: number, title: $Component_): void;
        static getScreenFactory<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>): ($MenuScreens$ScreenConstructor<T, never>) | undefined;
        static selfTest(): boolean;
        static getScreens$neoecoae_$md$796745$0(): $Map<any, any>;
        constructor();
        static get screens$neoecoae_$md$796745$0(): $Map<any, any>;
    }
    export class $DemoIntroScreen extends $Screen {
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
        constructor();
    }
    export class $LevelLoadingScreen extends $Screen {
        static renderChunks(guiGraphics: $GuiGraphics, progressListener: $StoringChunkProgressListener, x: number, y: number, arg4: number, arg5: number): void;
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
        constructor(progressListener: $StoringChunkProgressListener);
    }
    export class $RecoverWorldDataScreen extends $Screen {
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
        constructor(minecraft: $Minecraft, callback: $BooleanConsumer_, storageAccess: $LevelStorageSource$LevelStorageAccess);
    }
    export class $EditServerScreen extends $Screen {
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
        constructor(lastScreen: $Screen, callback: $BooleanConsumer_, serverData: $ServerData);
    }
    export class $TitleScreen extends $Screen {
        static preloadResources(texMngr: $TextureManager, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        handler$znf000$iris$firstInit(arg0: $CallbackInfo): void;
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
        constructor(fading: boolean, logoRenderer: $LogoRenderer | null);
        constructor(fading: boolean);
        constructor();
    }
    export class $GenericMessageScreen extends $Screen {
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
        constructor(arg0: $Component_);
    }
    export class $GenericWaitingScreen extends $Screen {
        static createCompleted(title: $Component_, messageText: $Component_, buttonLabel: $Component_, buttonCallback: $Runnable_): $GenericWaitingScreen;
        static createWaiting(title: $Component_, buttonLabel: $Component_, buttonCallback: $Runnable_): $GenericWaitingScreen;
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
    export class $ConfirmScreen extends $Screen {
        setDelay(y: number): void;
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
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_);
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, yesButton: $Component_, noButton: $Component_);
        set delay(value: number);
    }
    export class $LoadingDotsText {
        static get(millis: number): string;
        constructor();
    }
    export class $NoticeWithLinkScreen extends $Screen {
        static createWorldSymlinkWarningScreen(onClose: $Runnable_): $Screen;
        static createPackSymlinkWarningScreen(onClose: $Runnable_): $Screen;
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
        constructor(title: $Component_, message: $Component_, uri: $URI, onClose: $Runnable_);
    }
    export class $ChatScreen extends $Screen {
        handler$fhe000$imblocker$removeChatState(arg0: $CallbackInfo): void;
        handler$fhe000$imblocker$updateChatState(arg0: string, arg1: $CallbackInfo): void;
        handleChatInput(message: string, addToRecentChat: boolean): void;
        /**
         * Input is relative and is applied directly to the sentHistoryCursor so -1 is the previous message, 1 is the next message from the current cursor position.
         */
        moveInHistory(msgPos: number): void;
        handler$dgp000$nochatreports$onBeforeMessage(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        normalizeChatMessage(message: string): string;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static MOUSE_SCROLL_SPEED: number;
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
        constructor(initial: string);
    }
    export class $PauseScreen$FeedbackSubScreen extends $Screen {
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
    export class $CreateBuffetWorldScreen$BiomeList extends $ObjectSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry> {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $DisconnectedScreen extends $Screen {
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
        constructor(parent: $Screen, title: $Component_, details: $DisconnectionDetails_, buttonText: $Component_);
        constructor(parent: $Screen, title: $Component_, details: $DisconnectionDetails_);
        constructor(parent: $Screen, title: $Component_, reason: $Component_, buttonText: $Component_);
        constructor(parent: $Screen, title: $Component_, reason: $Component_);
    }
    export class $ConfirmLinkScreen extends $ConfirmScreen {
        /**
         * Copies the link to the system clipboard.
         */
        copyToClipboard(): void;
        static confirmLinkNow(lastScreen: $Screen, uri: $URI, trusted: boolean): void;
        static confirmLinkNow(lastScreen: $Screen, uri: $URI): void;
        static confirmLinkNow(lastScreen: $Screen, url: string, trusted: boolean): void;
        static confirmLinkNow(lastScreen: $Screen, url: string): void;
        static confirmLink(lastScreen: $Screen, uri: $URI): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, url: string): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, uri: $URI, trusted: boolean): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, url: string, trusted: boolean): $Button$OnPress;
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
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, url: string, noButton: $Component_, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, uri: $URI, noButton: $Component_, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, uri: $URI, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, url: string, trusted: boolean);
        constructor(callback: $BooleanConsumer_, url: string, trusted: boolean);
    }
    export class $ShareToLanScreen extends $Screen {
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
        constructor(lastScreen: $Screen);
    }
    export class $DeathScreen$TitleConfirmScreen extends $ConfirmScreen {
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
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_);
    }
    export class $BackupConfirmScreen extends $Screen {
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
        constructor(onCancel: $Runnable_, onProceed: $BackupConfirmScreen$Listener_, title: $Component_, description: $Component_, promptForCacheErase: boolean);
    }
    export class $BackupConfirmScreen$Listener {
    }
    export interface $BackupConfirmScreen$Listener {
        proceed(confirmed: boolean, eraseCache: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BackupConfirmScreen$Listener}.
     */
    export type $BackupConfirmScreen$Listener_ = ((arg0: boolean, arg1: boolean) => void);
    export class $FaviconTexture implements $AutoCloseable {
        clear(): void;
        close(): void;
        upload(image: $NativeImage): void;
        static forServer(textureManager: $TextureManager, worldName: string): $FaviconTexture;
        textureLocation(): $ResourceLocation;
        static forWorld(textureManager: $TextureManager, worldName: string): $FaviconTexture;
    }
    export class $PresetFlatWorldScreen extends $Screen {
        static fromString(blockGetter: $HolderGetter<$Block_>, biomeGetter: $HolderGetter<$Biome_>, structureSetGetter: $HolderGetter<$StructureSet_>, placedFeatureGetter: $HolderGetter<$PlacedFeature_>, settings: string, layerGenerationSettings: $FlatLevelGeneratorSettings): $FlatLevelGeneratorSettings;
        updateButtonValidity(valid: boolean): void;
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
        static UNKNOWN_PRESET: $Component;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $CreateFlatWorldScreen);
    }
    export class $PauseScreen extends $Screen {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        showsPauseMenu(): boolean;
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
        constructor(showPauseMenu: boolean);
    }
    export class $WinScreen$CreditsReader {
    }
    export interface $WinScreen$CreditsReader {
    }
    /**
     * Values that may be interpreted as {@link $WinScreen$CreditsReader}.
     */
    export type $WinScreen$CreditsReader_ = (() => void);
    export class $Screen$DeferredTooltipRendering extends $Record {
        positioner(): $ClientTooltipPositioner;
        tooltip(): $List<$FormattedCharSequence>;
        constructor(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_);
    }
    /**
     * Values that may be interpreted as {@link $Screen$DeferredTooltipRendering}.
     */
    export type $Screen$DeferredTooltipRendering_ = { tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_,  } | [tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_, ];
    export class $AccessibilityOnboardingScreen extends $Screen {
        init(): void;
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
        constructor(options: $Options, onClose: $Runnable_);
    }
    export class $InBedChatScreen extends $ChatScreen {
        onPlayerWokeUp(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static MOUSE_SCROLL_SPEED: number;
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
        constructor();
    }
    export class $CreditsAndAttributionScreen extends $Screen {
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
        constructor(lastScreen: $Screen);
    }
    export class $Overlay implements $Renderable {
        isPauseScreen(): boolean;
        constructor();
        get pauseScreen(): boolean;
    }
    export class $LoadingOverlay$LogoTexture extends $SimpleTexture {
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
    }
    export class $CreateFlatWorldScreen$DetailsList extends $ObjectSelectionList<$CreateFlatWorldScreen$DetailsList$Entry> {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $PresetFlatWorldScreen$PresetsList extends $ObjectSelectionList<$PresetFlatWorldScreen$PresetsList$Entry> {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $AlertScreen extends $Screen {
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
        constructor(callback: $Runnable_, title: $Component_, text: $Component_);
        constructor(callback: $Runnable_, title: $Component_, messageText: $Component_, okButton: $Component_, shouldCloseOnEsc: boolean);
    }
    export class $Screen$NarratableSearchResult {
        entry: $NarratableEntry;
        index: number;
        priority: $NarratableEntry$NarrationPriority;
        constructor(entry: $NarratableEntry, index: number, priority: $NarratableEntry$NarrationPriority_);
    }
    export class $DeathScreen extends $Screen {
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
        constructor(causeOfDeath: $Component_ | null, hardcore: boolean);
    }
    export class $WinScreen extends $Screen {
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
        constructor(poem: boolean, onFinished: $Runnable_);
    }
    export class $BanNoticeScreens {
        static create(callback: $BooleanConsumer_, banDetails: $BanDetails_): $ConfirmLinkScreen;
        static createSkinBan(callback: $Runnable_): $ConfirmLinkScreen;
        static createNameBan(username: string, callback: $Runnable_): $ConfirmLinkScreen;
        static NAME_BAN_TITLE: $Component;
        constructor();
    }
}
