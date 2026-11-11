import { $IMixinKeyBinding } from "@package/org/anti_ad/mc/ipnext/mixin";
import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $HeadRenderable } from "@package/dzwdz/chat_heads/mixininterface";
import { $MinecraftAccessor, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $KeyboardHandlerAccessor } from "@package/io/github/reserveword/imblocker/mixin";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor as $MinecraftAccessor$1, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $List_, $Collection, $Locale, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $HeadData_, $HeadData } from "@package/dzwdz/chat_heads";
import { $File_, $File } from "@package/java/io";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $AccessOptions } from "@package/icyllis/modernui/mc/mixin";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $WidgetTooltipHolder, $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $ChatVisiblity } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $KeyMappingMixin } from "@package/dev/ftb/mods/ftbquests/mixin";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $AccessorKeyMapping } from "@package/vazkii/patchouli/mixin/client";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $IntFunction_, $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $ToIntFunction_, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor$1, $MouseHandlerAccessor {
        setup(windowPointer: number): void;
        ypos(): number;
        xpos(): number;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isRightPressed(): boolean;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        handleAccumulatedMovement(): void;
        handler$zbk000$astralsorcery$preventMouseGrab(arg0: $CallbackInfo): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMiddlePressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isLeftPressed(): boolean;
        getYVelocity(): number;
        getXVelocity(): number;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        releaseMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        cursorEntered(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        setIgnoreFirstMove(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMouseGrabbed(): boolean;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        grabMouse(): void;
        handler$zbk000$astralsorcery$expectNonScreenMouseGrab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        setMouseGrabbed(arg0: boolean): void;
        create$setXPos(movementTime: number): void;
        create$setYPos(movementTime: number): void;
        getActiveButton(): number;
        activeButton: number;
        mouseGrabbed: boolean;
        constructor(minecraft: $Minecraft);
        set up(value: number);
        get rightPressed(): boolean;
        get middlePressed(): boolean;
        get leftPressed(): boolean;
        get YVelocity(): number;
        get XVelocity(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getSessionId(): string;
        getAccessToken(): string;
        getProfileId(): $UUID;
        getXuid(): (string) | undefined;
        getClientId(): (string) | undefined;
        constructor(name: string, uuid: $UUID_, accessToken: string, xuid: (string) | undefined, clientId: (string) | undefined, type: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get sessionId(): string;
        get accessToken(): string;
        get profileId(): $UUID;
        get xuid(): (string) | undefined;
        get clientId(): (string) | undefined;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        getCollection(categories: $RecipeBookCategories_): $List<$RecipeCollection>;
        setupCollections(recipes: $Iterable_<$RecipeHolder<never>>, registryAccess: $RegistryAccess): void;
        getCollections(): $List<$RecipeCollection>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $HotbarManager {
        get(index: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(gameDirectory: $Path_, fixerUpper: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>, codec?: $Codec<any>,  } | [values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>, codec?: $Codec<any>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(delay: number, arg1: number, period: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { message?: string, delay?: number, period?: number, title?: string,  } | [message?: string, delay?: number, period?: number, title?: string, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        static takeScreenshot(framebuffer: $RenderTarget): $NativeImage;
        /**
         * Saves a screenshot in the game directory with a time-stamped filename.
         */
        static grab(gameDirectory: $File_, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        static grab(gameDirectory: $File_, screenshotName: string | null, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        addRegion(buffer: $ByteBuffer, width: number, height: number, rowWidth: number, rowHeight: number): void;
        saveRow(): void;
        static SCREENSHOT_DIR: string;
        constructor(gameDirectory: $File_, width: number, height: number, rowHeight: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
        xmap<R>(to: $IntFunction_<R>, from: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        minInclusive(): number;
        maxInclusive(): number;
        toSliderValue(value: number): number;
        fromSliderValue(value: number): number;
    }
    export class $Options implements $AccessOptions {
        /**
         * Send a client info packet with settings information to the server
         */
        load(): void;
        load(arg0: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        save(): void;
        getFile(): $File;
        chatOpacity(): $OptionInstance<number>;
        getCloudsType(): $CloudStatus;
        darknessEffectScale(): $OptionInstance<number>;
        getBackgroundColor(chatColor: number): number;
        getBackgroundColor(opacity: number): number;
        setKey(keyBinding: $KeyMapping, input: $InputConstants$Key): void;
        gamma(): $OptionInstance<number>;
        fovEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        screenEffectScale(): $OptionInstance<number>;
        notificationDisplayTime(): $OptionInstance<number>;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        loadSelectedResourcePacks(resourcePackList: $PackRepository): void;
        dumpOptionsForReport(): string;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        framerateLimit(): $OptionInstance<number>;
        glintStrength(): $OptionInstance<number>;
        enableVsync(): $OptionInstance<boolean>;
        rawMouseInput(): $OptionInstance<boolean>;
        mipmapLevels(): $OptionInstance<number>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        setCameraType(pointOfView: $CameraType_): void;
        getCameraType(): $CameraType;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        ambientOcclusion(): $OptionInstance<boolean>;
        renderDistance(): $OptionInstance<number>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        chatLinks(): $OptionInstance<boolean>;
        autoJump(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        chatColors(): $OptionInstance<boolean>;
        fullscreen(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        narrator(): $OptionInstance<$NarratorStatus>;
        guiScale(): $OptionInstance<number>;
        particles(): $OptionInstance<$ParticleStatus>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        chatLinksPrompt(): $OptionInstance<boolean>;
        textBackgroundOpacity(): $OptionInstance<number>;
        simulationDistance(): $OptionInstance<number>;
        hideLightningFlash(): $OptionInstance<boolean>;
        hideSplashTexts(): $OptionInstance<boolean>;
        touchscreen(): $OptionInstance<boolean>;
        operatorItemsTab(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        glintSpeed(): $OptionInstance<number>;
        fov(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        getMenuBackgroundBlurriness(): number;
        /**
         * Send a client info packet with settings information to the server
         */
        onboardingAccessibilityFinished(): void;
        toggleModelPart(modelPart: $PlayerModelPart_, enable: boolean): void;
        static genericValueLabel(text: $Component_, value: number): $Component;
        static genericValueLabel(text: $Component_, value: $Component_): $Component;
        isModelPartEnabled(playerModelPart: $PlayerModelPart_): boolean;
        /**
         * Send a client info packet with settings information to the server
         */
        broadcastOptions(): void;
        invertYMouse(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        autoSuggestions(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        chatLineSpacing(): $OptionInstance<number>;
        toggleSprint(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        sensitivity(): $OptionInstance<number>;
        panoramaSpeed(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        chatHeightFocused(): $OptionInstance<number>;
        /**
         * Returns `true` if the client connect to a server using the native transport system.
         */
        useNativeTransport(): boolean;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        entityShadows(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        entityDistanceScaling(): $OptionInstance<number>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        chatHeightUnfocused(): $OptionInstance<number>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        getSoundSourceOptionInstance(soundSource: $SoundSource_): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        chatScale(): $OptionInstance<number>;
        updateResourcePacks(resourcePackList: $PackRepository): void;
        static genericValueOrOffLabel(text: $Component_, value: number): $Component;
        buildPlayerInformation(): $ClientInformation;
        getBackgroundOpacity(opacity: number): number;
        setServerRenderDistance(serverRenderDistance: number): void;
        getSoundSourceVolume(category: $SoundSource_): number;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        setGuiScale(arg0: $OptionInstance<number>): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        keyMappings: $KeyMapping[];
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(minecraft: $Minecraft, gameDirectory: $File_);
        get file(): $File;
        get cloudsType(): $CloudStatus;
        get effectiveRenderDistance(): number;
        set serverRenderDistance(value: number);
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        validateValue(value: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        applyValueImmediately(): boolean;
        xmap<R>(to: $IntFunction_<R>, from: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        toSliderValue(value: number): number;
        fromSliderValue(value: number): number;
        constructor(minInclusive: number, maxInclusive: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { minInclusive?: number, maxInclusive?: number, applyValueImmediately?: boolean,  } | [minInclusive?: number, maxInclusive?: number, applyValueImmediately?: boolean, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        modifyReturnValue$dpc000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string, needsToggle: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(id: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        validateValue(value: number): (number) | undefined;
        xmap<R>(encoder: $DoubleFunction_<R>, decoder: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        codec(): $Codec<number>;
        toSliderValue(value: number): number;
        fromSliderValue(value: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        advanceTime(time: number, arg1: boolean): number;
        updatePauseState(frozen: boolean): void;
        updateFrozenState(frozen: boolean): void;
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaTicks(): number;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        constructor(ticksPerSecond: number, time: number, arg2: $FloatUnaryOperator_);
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front";
    export class $GuiMessage$Line extends $Record implements $HeadRenderable {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        addedTime(): number;
        endOfEntry(): boolean;
        chatheads$getHeadData(): $HeadData;
        handler$bcf000$chat_heads$chatheads$setOwnerForFirstLine(callbackInfo: $CallbackInfo): void;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_ | null, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { addedTime?: number, tag?: $GuiMessageTag_, content?: $FormattedCharSequence_, endOfEntry?: boolean,  } | [addedTime?: number, tag?: $GuiMessageTag_, content?: $FormattedCharSequence_, endOfEntry?: boolean, ];
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        checkStatus(narratorEnabled: boolean): void;
        say(message: $Component_): void;
        sayNow(message: $Component_): void;
        sayNow(message: string): void;
        updateNarratorStatus(status: $NarratorStatus_): void;
        sayChat(message: $Component_): void;
        static NO_TITLE: $Component;
        constructor(minecraft: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        validateValue(value: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        maxSupplier(): $IntSupplier;
        createCycleButton(): boolean;
        encodableMaxInclusive(): number;
        xmap<R>(to: $IntFunction_<R>, from: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        toSliderValue(value: number): number;
        fromSliderValue(value: number): number;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { minInclusive?: number, encodableMaxInclusive?: number, maxSupplier?: $IntSupplier_,  } | [minInclusive?: number, encodableMaxInclusive?: number, maxSupplier?: $IntSupplier_, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        icon(): $GuiMessageTag$Icon;
        indicatorColor(): number;
        static systemSinglePlayer(): $GuiMessageTag;
        logTag(): string;
        static chatError(): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        static chatModified(originalText: string): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_ | null, arg2: $Component_ | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { logTag?: string, text?: $Component_, indicatorColor?: number, icon?: $GuiMessageTag$Icon_,  } | [logTag?: string, text?: $Component_, indicatorColor?: number, icon?: $GuiMessageTag$Icon_, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        close(): void;
        constructor(notifications: $ResourceLocation_, selector: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record implements $HeadRenderable {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        icon(): $GuiMessageTag$Icon;
        addedTime(): number;
        chatheads$setHeadData(headData: $HeadData_): void;
        chatheads$getHeadData(): $HeadData;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_ | null, arg3: $GuiMessageTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { addedTime?: number, tag?: $GuiMessageTag_, content?: $Component_, signature?: $MessageSignature_,  } | [addedTime?: number, tag?: $GuiMessageTag_, content?: $Component_, signature?: $MessageSignature_, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getExtensionInfo(): $ExtensionInfo;
        static getCategories(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        getIconItems(): $List<$ItemStack>;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static get extensionInfo(): $ExtensionInfo;
        get iconItems(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { values?: $List_<any>, codec?: $Codec<any>,  } | [values?: $List_<any>, codec?: $Codec<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(value: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        history(): $Collection<string>;
        addCommand(command: string): void;
        constructor(path: $Path_);
    }
    export class $Camera {
        reset(): void;
        setup(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number): void;
        getPosition(): $Vec3;
        getBlockPosition(): $BlockPos;
        getEntity(): $Entity;
        isInitialized(): boolean;
        tick(): void;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        rotation(): $Quaternionf;
        getYRot(): number;
        getXRot(): number;
        getUpVector(): $Vector3f;
        getNearPlane(): $Camera$NearPlane;
        isDetached(): boolean;
        getRoll(): number;
        handler$zco000$sodium_extra$noLerp(ci: $CallbackInfo): void;
        getBlockAtCamera(): $BlockState;
        getLookVector(): $Vector3f;
        getLeftVector(): $Vector3f;
        static FOG_DISTANCE_SCALE: number;
        constructor();
        get position(): $Vec3;
        get blockPosition(): $BlockPos;
        get entity(): $Entity;
        get initialized(): boolean;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
        get YRot(): number;
        get XRot(): number;
        get upVector(): $Vector3f;
        get nearPlane(): $Camera$NearPlane;
        get detached(): boolean;
        get roll(): number;
        get blockAtCamera(): $BlockState;
        get lookVector(): $Vector3f;
        get leftVector(): $Vector3f;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(style: $Style, currentPos: number, contentWidth: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(typeName: string): $User$Type;
        static byName(typeName: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        realmsClient(): $RealmsClient;
        quickPlayData(): $GameConfig$QuickPlayData;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_,  } | [realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(value: $Object): void;
        static createBoolean(key: string, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, valueStringifier: $OptionInstance$CaptionBasedToString_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        codec(): $Codec<$Object>;
        createButton(options: $Options): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<$Object>): $AbstractWidget;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        static cachedConstantTooltip<T>(message: $Component_): $OptionInstance$TooltipSupplier<T>;
        getInitialValue(): $Object;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, codec: $Codec<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftAccessor, $MinecraftClientKJS, $MinecraftAccessor$1, $IXaeroMinimapMinecraftClient {
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        run(): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        static getInstance(): $Minecraft;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        stop(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        destroy(): void;
        getConnection(): $ClientPacketListener;
        getResourceManager(): $ResourceManager;
        static crash(minecraft: $Minecraft | null, gameDirectory: $File_, crashReport: $CrashReport): void;
        handler$bof000$ae2wtlib$pickBlock(arg0: $CallbackInfo, arg1: $ItemStack_, arg2: number): void;
        handler$bmg000$ae2$pickColor(arg0: $CallbackInfo): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        clearDownloadedResourcePacks(): void;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        getProfileKeySignatureValidator(): $SignatureValidator;
        renderBuffers(): $RenderBuffers;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsMultiplayer(): boolean;
        getTextureManager(): $TextureManager;
        getItemRenderer(): $ItemRenderer;
        getGuiSprites(): $GuiSpriteManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isRunning(): boolean;
        setLevel(level: $ClientLevel, reason: $ReceivingLevelScreen$Reason_): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        tick(): void;
        disconnect(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        disconnect(): void;
        disconnect(nextScreen: $Screen, keepResourcePacks: boolean): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasSingleplayerServer(): boolean;
        reloadResourcePacks(): $CompletableFuture<void>;
        /**
         * Returns the currently running integrated server
         */
        getSingleplayerServer(): $IntegratedServer;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        debugFpsMeterKeyPress(keyCount: number): void;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        emergencySaveAndCrash(report: $CrashReport): void;
        getMainRenderTarget(): $RenderTarget;
        clearResourcePacksOnError(throwable: $Throwable, errorMessage: $Component_ | null, gameLoadCookie: $Minecraft$GameLoadCookie_ | null): void;
        debugClientMetricsStart(logger: $Consumer_<$Component>): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        extraTelemetryAvailable(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useShaderTransparency(): boolean;
        getResourcePackRepository(): $PackRepository;
        getDownloadedPackSource(): $DownloadedPackSource;
        getSituationalMusic(): $Music;
        createWorldOpenFlows(): $WorldOpenFlows;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        updateReportEnvironment(reportEnvironment: $ReportEnvironment_): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useAmbientOcclusion(): boolean;
        getTelemetryManager(): $ClientTelemetryManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        telemetryOptInExtra(): boolean;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        shouldEntityAppearGlowing(entity: $Entity): boolean;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        prepareForMultiplayer(): void;
        getPlayerSocialManager(): $PlayerSocialManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        showOnlyReducedInfo(): boolean;
        getProgressListener(): $StoringChunkProgressListener;
        /**
         * Gets the sprite uploader used for paintings.
         */
        getPaintingTextures(): $PaintingTextureManager;
        getMinecraftSessionService(): $MinecraftSessionService;
        grabPanoramixScreenshot(gameDirectory: $File_, width: number, height: number): $Component;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        canValidateProfileKeys(): boolean;
        getReportingContext(): $ReportingContext;
        /**
         * Gets the sprite uploader used for potions.
         */
        getMobEffectTextures(): $MobEffectTextureManager;
        getXaeroMinimap_fps(): number;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isTextFilteringEnabled(): boolean;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        static getLauncherBrand(): string;
        getProfiler(): $ProfilerFiller;
        getResourcePackDirectory(): $Path;
        getCurrentServer(): $ServerData;
        commandHistory(): $CommandHistory;
        setWindowActive(leftClick: boolean): void;
        directoryValidator(): $DirectoryValidator;
        realmsDataFetcher(): $RealmsDataFetcher;
        quickPlayLog(): $QuickPlayLog;
        getDebugOverlay(): $DebugScreenOverlay;
        static checkModStatus(): $ModCheck;
        multiplayerBan(): $BanDetails;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isGameLoadFinished(): boolean;
        getBlockRenderer(): $BlockRenderDispatcher;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateTitle(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        resizeDisplay(): void;
        setLastInputType(lastInputType: $InputType_): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getVersionType(): string;
        getModelManager(): $ModelManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isEnforceUnicode(): boolean;
        delayCrashRaw(report: $CrashReport): void;
        getChatStatus(): $Minecraft$ChatStatus;
        /**
         * Returns the save loader that is currently being used
         */
        getLevelSource(): $LevelStorageSource;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getLaunchedVersion(): string;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cursorEntered(): void;
        getFrameTimeNs(): number;
        doWorldLoad(levelStorage: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, newWorld: boolean): void;
        getCameraEntity(): $Entity;
        getGpuUtilization(): number;
        /**
         * Return the musicTicker's instance
         */
        getMusicManager(): $MusicManager;
        forceSetScreen(nextScreen: $Screen): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsTelemetry(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useFancyGraphics(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static renderNames(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsRealms(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isNameBanned(): boolean;
        clearClientLevel(nextScreen: $Screen): void;
        getTextureAtlas(location: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getFixerUpper(): $DataFixer;
        getItemColors(): $ItemColors;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isSingleplayer(): boolean;
        getBlockColors(): $BlockColors;
        setCameraEntity(viewingEntity: $Entity): void;
        isLocalPlayer(playerUUID: $UUID_): boolean;
        getEntityModels(): $EntityModelSet;
        getSplashManager(): $SplashManager;
        getLastInputType(): $InputType;
        getNarrator(): $GameNarrator;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWindowActive(): boolean;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        updateMaxMipLevel(keyCount: number): void;
        delayTextureReload(): $CompletableFuture<void>;
        getSoundManager(): $SoundManager;
        getTutorial(): $Tutorial;
        getHotbarManager(): $HotbarManager;
        getLanguageManager(): $LanguageManager;
        getChatListener(): $ChatListener;
        getSkinManager(): $SkinManager;
        getGameProfile(): $GameProfile;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getTitle(): string;
        handler$fhg000$imblocker$recordGameRenderStartTime(arg0: boolean, arg1: $CallbackInfo): void;
        handler$zmh000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$fhg000$imblocker$onWindowFocusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        handler$fhg000$imblocker$captureGameRenderEnd(arg0: boolean, arg1: $CallbackInfo): void;
        setOverlay(loadingGui: $Overlay | null): void;
        getOverlay(): $Overlay;
        handler$bja000$inventoryprofilesnext$handleInputEvents(arg0: $CallbackInfo): void;
        handler$fhg000$imblocker$onScreenChanged(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$fhg000$imblocker$runPreRenderTasks(arg0: boolean, arg1: $CallbackInfo): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isLocalServer(): boolean;
        getProxy(): $Proxy;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isPaused(): boolean;
        getTimer(): $DeltaTracker;
        setScreen(nextScreen: $Screen | null): void;
        getToasts(): $ToastComponent;
        delayCrash(report: $CrashReport): void;
        /**
         * Adds core server Info (GL version, Texture pack, isModded, type), and the worldInfo to the crash report.
         */
        fillReport(theCrash: $CrashReport): $CrashReport;
        static fillReport(minecraft: $Minecraft | null, languageManager: $LanguageManager | null, launchVersion: string, options: $Options | null, report: $CrashReport): void;
        getFps(): number;
        pauseGame(leftClick: boolean): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isDemo(): boolean;
        isBlocked(playerUUID: $UUID_): boolean;
        getUser(): $User;
        handler$zbj000$astralsorcery$onStartUsingStellarFilament(arg0: $CallbackInfo): void;
        handler$zbj000$astralsorcery$onUsingStellarFilamentCleanUp(arg0: $CallbackInfo): void;
        getWindow(): $Window;
        getVanillaPackResources(): $VanillaPackResources;
        handler$bkl000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        getLocale(): $Locale;
        pushGuiLayer(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        popGuiLayer(): void;
        setStatusMessage(message: $Component_): void;
        getCurrentScreen(): $Screen;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(defaultText: string): void;
        setCurrentScreen(nextScreen: $Screen): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getCurrentWorldName(): string;
        setActivePostShader(id: $ResourceLocation_): void;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getKeyBindPressedTicks(id: string): number;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        /**
         * Return the singleton Minecraft instance for the game
         */
        self(): $Minecraft;
        tell(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(defaultText: string): void;
        isKeyBindDown(id: string): boolean;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isCtrlDown(): boolean;
        getName(): $Component;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isShiftDown(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isAltDown(): boolean;
        setTitle(defaultText: string): void;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        ldlib2$getClientTickCount(): number;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        create$setMissTime(keyCount: number): void;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        blockRenderer: $BlockRenderDispatcher;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        level: $ClientLevel;
        gameDirectory: $File;
        static fps: number;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        clientTickCount: number;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(gameConfig: $GameConfig);
        static get instance(): $Minecraft;
        get connection(): $ClientPacketListener;
        get resourceManager(): $ResourceManager;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get profileKeySignatureValidator(): $SignatureValidator;
        get textureManager(): $TextureManager;
        get itemRenderer(): $ItemRenderer;
        get guiSprites(): $GuiSpriteManager;
        get running(): boolean;
        get singleplayerServer(): $IntegratedServer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get mainRenderTarget(): $RenderTarget;
        get resourcePackRepository(): $PackRepository;
        get downloadedPackSource(): $DownloadedPackSource;
        get situationalMusic(): $Music;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get telemetryManager(): $ClientTelemetryManager;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get playerSocialManager(): $PlayerSocialManager;
        get progressListener(): $StoringChunkProgressListener;
        get paintingTextures(): $PaintingTextureManager;
        get minecraftSessionService(): $MinecraftSessionService;
        get scheduledEvents(): $ScheduledEvents;
        get reportingContext(): $ReportingContext;
        get mobEffectTextures(): $MobEffectTextureManager;
        get xaeroMinimap_fps(): number;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get textFilteringEnabled(): boolean;
        static get launcherBrand(): string;
        get profiler(): $ProfilerFiller;
        get resourcePackDirectory(): $Path;
        get currentServer(): $ServerData;
        get debugOverlay(): $DebugScreenOverlay;
        get gameLoadFinished(): boolean;
        get versionType(): string;
        get modelManager(): $ModelManager;
        get enforceUnicode(): boolean;
        get chatStatus(): $Minecraft$ChatStatus;
        get levelSource(): $LevelStorageSource;
        get launchedVersion(): string;
        get frameTimeNs(): number;
        get gpuUtilization(): number;
        get musicManager(): $MusicManager;
        get nameBanned(): boolean;
        get fixerUpper(): $DataFixer;
        get itemColors(): $ItemColors;
        get singleplayer(): boolean;
        get blockColors(): $BlockColors;
        get entityModels(): $EntityModelSet;
        get splashManager(): $SplashManager;
        get narrator(): $GameNarrator;
        get soundManager(): $SoundManager;
        get tutorial(): $Tutorial;
        get hotbarManager(): $HotbarManager;
        get languageManager(): $LanguageManager;
        get chatListener(): $ChatListener;
        get skinManager(): $SkinManager;
        get gameProfile(): $GameProfile;
        get localServer(): boolean;
        get proxy(): $Proxy;
        get paused(): boolean;
        get timer(): $DeltaTracker;
        get toasts(): $ToastComponent;
        get demo(): boolean;
        get user(): $User;
        get window(): $Window;
        get vanillaPackResources(): $VanillaPackResources;
        get locale(): $Locale;
        set statusMessage(value: $Component_);
        get currentWorldName(): string;
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get ctrlDown(): boolean;
        get shiftDown(): boolean;
        get altDown(): boolean;
        get displayName(): $Component;
    }
    export class $Camera$NearPlane {
        getPointOnPlane(leftScale: number, upScale: number): $Vec3;
        getTopLeft(): $Vec3;
        getBottomRight(): $Vec3;
        getBottomLeft(): $Vec3;
        getTopRight(): $Vec3;
        get topLeft(): $Vec3;
        get bottomRight(): $Vec3;
        get bottomLeft(): $Vec3;
        get topRight(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified" | "chat_ncr_encrypted";
    export class $KeyboardHandler implements $KeyboardHandlerAccessor {
        setup(window: number): void;
        tick(): void;
        getClipboard(): string;
        keyPress(windowPointer: number, arg1: number, key: number, scanCode: number, action: number): void;
        handler$ddc000$chloride$redirect$handleFullScreenToggle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        setClipboard(string: string): void;
        invokeCharTyped(windowPointer: number, arg1: number, codePoint: number): void;
        static DEBUG_CRASH_TIME: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(codePoint: number, style: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startRecovery(error: $Throwable): void;
        startReload(reloadReason: $ResourceLoadStateTracker$ReloadReason_, packs: $List_<$PackResources>): void;
        fillCrashReport(report: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        createCycleButton(): boolean;
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        validateValue(value: T): (T) | undefined;
        codec(): $Codec<T>;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(part: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        altCondition(): $BooleanSupplier;
        altValues(): $List<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { codec?: $Codec<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, altCondition?: $BooleanSupplier_, values?: $List_<any>, altValues?: $List_<any>,  } | [codec?: $Codec<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, altCondition?: $BooleanSupplier_, values?: $List_<any>, altValues?: $List_<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        splitLines(content: $FormattedText, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: string, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: string, maxWidth: number, style: $Style, withNewLines: boolean, linePos: $StringSplitter$LinePosConsumer_): void;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, prefix: $FormattedText): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, splitifier: $BiConsumer_<$FormattedText, boolean>): void;
        stringWidth(content: $FormattedText): number;
        stringWidth(content: $FormattedCharSequence_): number;
        stringWidth(content: string | null): number;
        formattedIndexByWidth(content: string, maxWidth: number, style: $Style): number;
        formattedHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        componentStyleAtWidth(content: $FormattedText, maxWidth: number): $Style;
        componentStyleAtWidth(content: $FormattedCharSequence_, maxWidth: number): $Style;
        plainIndexAtWidth(content: string, maxWidth: number, style: $Style): number;
        static getWordPosition(content: string, skipCount: number, cursorPoint: number, includeWhitespace: boolean): number;
        findLineBreak(content: string, maxWidth: number, style: $Style): number;
        plainTailByWidth(content: string, maxWidth: number, style: $Style): string;
        plainHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        headByWidth(content: $FormattedText, maxWidth: number, style: $Style): $FormattedText;
        constructor(widthProvider: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $AccessorKeyMapping, $IMixinKeyBinding, $KeyMappingMixin {
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDefault(): boolean;
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(keysym: number, scancode: number): boolean;
        getKey(): $InputConstants$Key;
        static set(key: $InputConstants$Key, held: boolean): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static setAll(): void;
        setKey(key: $InputConstants$Key): void;
        getCategory(): string;
        getDefaultKeyModifier(): $KeyModifier;
        getTranslatedKeyMessage(): $Component;
        setKeyConflictContext(arg0: $IKeyConflictContext): void;
        setKeyModifierAndCode(arg0: $KeyModifier_, arg1: $InputConstants$Key): void;
        getKeyConflictContext(): $IKeyConflictContext;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        same(binding: $KeyMapping): boolean;
        static click(key: $InputConstants$Key): void;
        static getAllKeyMappings$patchouli_$md$796745$0(): $Map<any, any>;
        getKeyModifier(): $KeyModifier;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetMapping(): void;
        /**
         * Returns a supplier which gets a keybind's current binding (eg, `key.forward` returns W by default), or the keybind's name if no such keybind exists (eg, `key.invalid` returns key.invalid)
         */
        static createNameSupplier(key: string): $Supplier<$Component>;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        consumeClick(): boolean;
        static getAll$ftbquests_$md$796745$1(): $Map<any, any>;
        getDefaultKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static releaseAll(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDown(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isUnbound(): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetToggleKeys(): void;
        saveString(): string;
        setDown(value: boolean): void;
        /**
         * Returns `true` if the `KeyMapping` is set to a mouse key and the key matches.
         */
        matchesMouse(key: number): boolean;
        getDisplayName(): $Component;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        setToDefault(): void;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        hasKeyModifierConflict(binding: $KeyMapping): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isConflictContextAndModifierActive(): boolean;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        setTimesPressed(arg0: number): void;
        getTimesPressed(): number;
        setPressed(value: boolean): void;
        getKeyCode(): $InputConstants$Key;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        getPressed(): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, type: $InputConstants$Type_, keyCode: number, category: string);
        constructor(name: string, keyCode: number, category: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        get default(): boolean;
        get name(): string;
        get category(): string;
        get defaultKeyModifier(): $KeyModifier;
        get translatedKeyMessage(): $Component;
        static get allKeyMappings$patchouli_$md$796745$0(): $Map<any, any>;
        get keyModifier(): $KeyModifier;
        static get all$ftbquests_$md$796745$1(): $Map<any, any>;
        get defaultKey(): $InputConstants$Key;
        get unbound(): boolean;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get keyCode(): $InputConstants$Key;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(name: string, value: T, stringValuefier: $Function_<string, T>, valueStringifier: $Function_<T, string>): T;
        process(name: string, value: number): number;
        process(name: string, value: string): string;
        process(name: string, value: boolean): boolean;
        process(name: string, value: number): number;
    }
    export class $DebugQueryHandler {
        queryBlockEntityTag(pos: $BlockPos_, tag: $Consumer_<$CompoundTag>): void;
        queryEntityTag(entId: number, tag: $Consumer_<$CompoundTag>): void;
        handleResponse(transactionId: number, tag: $CompoundTag_ | null): boolean;
        constructor(connection: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        static byId(id: number): $NarratorStatus;
        shouldNarrateChat(): boolean;
        shouldNarrateSystem(): boolean;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(isLocalServer: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(caption: $Component_, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(instance: $OptionInstance<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
