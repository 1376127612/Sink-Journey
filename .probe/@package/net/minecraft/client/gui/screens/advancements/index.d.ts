import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $AdvancementWidgetAccessor } from "@package/com/euphony/neo_language_reload/mixin";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $IAdvancementsScreen, $IAdvancementsTab } from "@package/com/euphony/neo_language_reload/access";
import { $AdvancementHolder_, $DisplayInfo, $AdvancementProgress, $AdvancementType_, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientAdvancements, $ClientAdvancements$Listener } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/advancements" {
    export class $AdvancementTabType extends $Enum<$AdvancementTabType> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType}.
     */
    export type $AdvancementTabType_ = "above" | "below" | "left" | "right";
    export class $AdvancementTabType$Sprites extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType$Sprites}.
     */
    export type $AdvancementTabType$Sprites_ = { last?: $ResourceLocation_, middle?: $ResourceLocation_, first?: $ResourceLocation_,  } | [last?: $ResourceLocation_, middle?: $ResourceLocation_, first?: $ResourceLocation_, ];
    export class $AdvancementsScreen extends $Screen implements $ClientAdvancements$Listener, $IAdvancementsScreen {
        renderWindow(guiGraphics: $GuiGraphics, offsetX: number, offsetY: number): void;
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        languagereload_recreateWidgets(): void;
        onAdvancementsCleared(): void;
        onAddAdvancementTask(advancement: $AdvancementNode): void;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
        onRemoveAdvancementTask(advancement: $AdvancementNode): void;
        onRemoveAdvancementRoot(advancement: $AdvancementNode): void;
        getAdvancementWidget(advancement: $AdvancementNode): $AdvancementWidget;
        onAddAdvancementRoot(advancement: $AdvancementNode): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static WINDOW_INSIDE_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static WINDOW_HEIGHT: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static WINDOW_INSIDE_WIDTH: number;
        static BACKGROUND_TILE_COUNT_X: number;
        static BACKGROUND_TILE_COUNT_Y: number;
        static BACKGROUND_TILE_WIDTH: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static BACKGROUND_TILE_HEIGHT: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(advancements: $ClientAdvancements);
        constructor(advancements: $ClientAdvancements, lastScreen: $Screen | null);
    }
    export class $AdvancementWidgetType extends $Enum<$AdvancementWidgetType> {
        static values(): $AdvancementWidgetType[];
        static valueOf(arg0: string): $AdvancementWidgetType;
        boxSprite(): $ResourceLocation;
        frameSprite(type: $AdvancementType_): $ResourceLocation;
        static OBTAINED: $AdvancementWidgetType;
        static UNOBTAINED: $AdvancementWidgetType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementWidgetType}.
     */
    export type $AdvancementWidgetType_ = "obtained" | "unobtained";
    export class $AdvancementTab implements $IAdvancementsTab {
        getType(): $AdvancementTabType;
        static create(minecraft: $Minecraft, screen: $AdvancementsScreen, index: number, rootNode: $AdvancementNode): $AdvancementTab;
        getIndex(): number;
        getTitle(): $Component;
        getRootNode(): $AdvancementNode;
        getWidget(advancement: $AdvancementHolder_): $AdvancementWidget;
        getPage(): number;
        drawIcon(guiGraphics: $GuiGraphics, x: number, y: number): void;
        drawTab(guiGraphics: $GuiGraphics, offsetX: number, offsetY: number, isSelected: boolean): void;
        scroll(dragX: number, arg1: number): void;
        getScreen(): $AdvancementsScreen;
        isMouseOver(offsetX: number, offsetY: number, mouseX: number, arg3: number): boolean;
        drawContents(guiGraphics: $GuiGraphics, x: number, y: number): void;
        drawTooltips(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, width: number, height: number): void;
        addAdvancement(node: $AdvancementNode): void;
        languagereload_recreateWidgets(): void;
        getDisplay(): $DisplayInfo;
        constructor(minecraft: $Minecraft, screen: $AdvancementsScreen, type: $AdvancementTabType_, index: number, rootNode: $AdvancementNode, display: $DisplayInfo);
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: number, arg5: $AdvancementNode, arg6: $DisplayInfo);
        get type(): $AdvancementTabType;
        get index(): number;
        get title(): $Component;
        get rootNode(): $AdvancementNode;
        get page(): number;
        get screen(): $AdvancementsScreen;
        get display(): $DisplayInfo;
    }
    export class $AdvancementWidget implements $AdvancementWidgetAccessor {
        addChild(advancementWidget: $AdvancementWidget): void;
        getY(): number;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        getWidth(): number;
        getX(): number;
        isMouseOver(x: number, y: number, mouseX: number, mouseY: number): boolean;
        setProgress(progress: $AdvancementProgress): void;
        drawHover(guiGraphics: $GuiGraphics, x: number, y: number, fade: number, width: number, height: number): void;
        drawConnectivity(guiGraphics: $GuiGraphics, x: number, y: number, dropShadow: boolean): void;
        attachToParent(): void;
        languagereload_getAdvancement(): $AdvancementNode;
        languagereload_getTab(): $AdvancementTab;
        languagereload_getProgress(): $AdvancementProgress;
        languagereload_getParent(): $AdvancementWidget;
        languagereload_setChildren(arg0: $List_<$AdvancementWidget>): void;
        languagereload_setParent(advancementWidget: $AdvancementWidget): void;
        languagereload_getDisplay(): $DisplayInfo;
        languagereload_getChildren(): $List<$AdvancementWidget>;
        constructor(tab: $AdvancementTab, minecraft: $Minecraft, advancementNode: $AdvancementNode, display: $DisplayInfo);
        get y(): number;
        get width(): number;
        get x(): number;
        set progress(value: $AdvancementProgress);
    }
}
