import { $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $TomeResearchPartRenderer } from "@package/hellfirepvp/astralsorcery/client/screen/tome/research";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $MutableComponent, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ResearchNode } from "@package/hellfirepvp/astralsorcery/common/research";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $RecipesUpdatedEvent } from "@package/net/neoforged/neoforge/client/event";
import { $Supplier_ } from "@package/java/util/function";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $AbstractRenderTexture } from "@package/hellfirepvp/astralsorcery/client/resource";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $FixedSizeScreen } from "@package/hellfirepvp/astralsorcery/client/screen/base";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Lumen_ } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $Runnable_, $Enum, $Comparable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
export * as page from "@package/hellfirepvp/astralsorcery/client/screen/tome/page";
export * as perk from "@package/hellfirepvp/astralsorcery/client/screen/tome/perk";

declare module "@package/hellfirepvp/astralsorcery/client/screen/tome" {
    export class $TomeConstellationScreen extends $TomeScreen {
        static getScreen(): $TomeConstellationScreen;
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
        static BOOKMARK: $BookmarkProvider;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static NO_BOOKMARK: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        static get screen(): $TomeConstellationScreen;
    }
    export class $TomeResearchScreen extends $TomeScreen {
        removeWidget(arg0: $GuiEventListener): void;
        static resetOpenTome(): void;
        expectNewInit(): void;
        preventViewRefresh(): void;
        static getOpenTome(): $TomeScreen;
        getViewType(): $TomeResearchScreen$ViewType;
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
        static BOOKMARK: $BookmarkProvider;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static NO_BOOKMARK: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        static get openTome(): $TomeScreen;
        get viewType(): $TomeResearchScreen$ViewType;
    }
    export class $TomePagesScreen extends $TomeScreen {
        static fromLumen(arg0: $TomeLumenScreen, arg1: $Lumen_): $TomePagesScreen;
        static fromConstellation(arg0: $TomeConstellationScreen, arg1: $BaseConstellation_): $TomePagesScreen;
        static fromResearchNode(arg0: $ResearchNode, arg1: number): $TomePagesScreen;
        static fromProgressNode(arg0: $TomeResearchScreen, arg1: $ResearchNode): $TomePagesScreen;
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
        static NO_BOOKMARK: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $TomeScreen extends $FixedSizeScreen {
        static addBookmark(arg0: $BookmarkProvider): void;
        doBookmarkClick(arg0: $BookmarkProvider): void;
        getBookmarkIndex(): number;
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
        static NO_BOOKMARK: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        get bookmarkIndex(): number;
    }
    export class $TomeResearchScreen$ViewType extends $Enum<$TomeResearchScreen$ViewType> {
        getRenderer(arg0: $TomeResearchScreen): $TomeResearchPartRenderer;
        static values(): $TomeResearchScreen$ViewType[];
        static valueOf(arg0: string): $TomeResearchScreen$ViewType;
        static RESEARCH: $TomeResearchScreen$ViewType;
        static SEARCH: $TomeResearchScreen$ViewType;
    }
    /**
     * Values that may be interpreted as {@link $TomeResearchScreen$ViewType}.
     */
    export type $TomeResearchScreen$ViewType_ = "research" | "search";
    export class $TomeStarParallaxLayer {
    }
    export interface $TomeStarParallaxLayer {
        drawStarParallaxLayers(arg0: $GuiGraphics, arg1: number, arg2: $ScreenRectangle_, arg3: number, arg4: number): void;
        drawStarParallaxLayer(arg0: $VertexConsumer, arg1: $GuiGraphics, arg2: $ScreenRectangle_, arg3: number, arg4: number, arg5: number, arg6: number): void;
    }
    export class $TomeLumenScreen extends $TomeScreen implements $TomeStarParallaxLayer {
        static recipesSyncedFromServer(arg0: $RecipesUpdatedEvent): void;
        drawStarParallaxLayers(arg0: $GuiGraphics, arg1: number, arg2: $ScreenRectangle_, arg3: number, arg4: number): void;
        drawStarParallaxLayer(arg0: $VertexConsumer, arg1: $GuiGraphics, arg2: $ScreenRectangle_, arg3: number, arg4: number, arg5: number, arg6: number): void;
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
        static BOOKMARK: $BookmarkProvider;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static NO_BOOKMARK: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $BookmarkProvider implements $Comparable<$BookmarkProvider> {
        canSee(): boolean;
        getBookmarkIndex(): number;
        getBookmarkTexture(): $AbstractRenderTexture;
        getOnBookmarkSelected(): void;
        getName(): $MutableComponent;
        compareTo(arg0: $BookmarkProvider): number;
        constructor(arg0: string, arg1: number, arg2: $Runnable_, arg3: $Supplier_<boolean>);
        constructor(arg0: $MutableComponent_, arg1: number, arg2: $Runnable_, arg3: $Supplier_<boolean>);
        get bookmarkIndex(): number;
        get bookmarkTexture(): $AbstractRenderTexture;
        get onBookmarkSelected(): void;
        get name(): $MutableComponent;
    }
}
