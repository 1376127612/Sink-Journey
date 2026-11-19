import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $PackRepository, $PackSource, $Pack, $PackCompatibility } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Runnable_, $AutoCloseable } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/packs" {
    export class $PackSelectionScreen$Watcher implements $AutoCloseable {
    }
    export class $PackSelectionModel {
        commit(): void;
        getSelected(): $Stream<$PackSelectionModel$Entry>;
        getUnselected(): $Stream<$PackSelectionModel$Entry>;
        findNewPacks(): void;
        constructor(onListChanged: $Runnable_, iconGetter: $Function_<$Pack, $ResourceLocation>, repository: $PackRepository, output: $Consumer_<$PackRepository>);
        get selected(): $Stream<$PackSelectionModel$Entry>;
        get unselected(): $Stream<$PackSelectionModel$Entry>;
    }
    export class $PackSelectionModel$SelectedPackEntry extends $PackSelectionModel$EntryBase {
        pack: $Pack;
    }
    export class $PackSelectionModel$UnselectedPackEntry extends $PackSelectionModel$EntryBase {
        pack: $Pack;
    }
    export class $TransferableSelectionList extends $ObjectSelectionList<$TransferableSelectionList$PackEntry> {
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        screen: $PackSelectionScreen;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        static SCROLLER_SPRITE: $ResourceLocation;
        focused: boolean;
        hovered: $TransferableSelectionList$PackEntry;
        height: number;
        constructor(minecraft: $Minecraft, screen: $PackSelectionScreen, width: number, height: number, title: $Component_);
    }
    export class $PackSelectionModel$EntryBase implements $PackSelectionModel$Entry {
        getPackSource(): $PackSource;
        getId(): string;
        getDescription(): $Component;
        getTitle(): $Component;
        getCompatibility(): $PackCompatibility;
        isRequired(): boolean;
        isFixedPosition(): boolean;
        moveUp(): void;
        moveDown(): void;
        canMoveDown(): boolean;
        getIconTexture(): $ResourceLocation;
        canMoveUp(): boolean;
        getExtendedDescription(): $Component;
        canSelect(): boolean;
        canUnselect(): boolean;
        pack: $Pack;
        constructor(pack: $PackSelectionModel, arg1: $Pack);
        get packSource(): $PackSource;
        get id(): string;
        get description(): $Component;
        get title(): $Component;
        get compatibility(): $PackCompatibility;
        get required(): boolean;
        get fixedPosition(): boolean;
        get iconTexture(): $ResourceLocation;
        get extendedDescription(): $Component;
    }
    export class $PackSelectionScreen extends $Screen {
        clearSelected(): void;
        updateFocus(selection: $TransferableSelectionList): void;
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
        constructor(repository: $PackRepository, output: $Consumer_<$PackRepository>, packDir: $Path_, title: $Component_);
    }
    export class $TransferableSelectionList$PackEntry extends $ObjectSelectionList$Entry<$TransferableSelectionList$PackEntry> {
        getPackId(): string;
        keyboardSelection(): void;
        constructor(minecraft: $Minecraft, parent: $TransferableSelectionList, pack: $PackSelectionModel$Entry);
        get packId(): string;
    }
    export class $PackSelectionModel$Entry {
    }
    export interface $PackSelectionModel$Entry {
        getPackSource(): $PackSource;
        getId(): string;
        getDescription(): $Component;
        select(): void;
        isSelected(): boolean;
        getTitle(): $Component;
        getCompatibility(): $PackCompatibility;
        isRequired(): boolean;
        isFixedPosition(): boolean;
        moveUp(): void;
        moveDown(): void;
        getExtendedDescription(): $Component;
        canSelect(): boolean;
        canMoveDown(): boolean;
        getIconTexture(): $ResourceLocation;
        canUnselect(): boolean;
        unselect(): void;
        canMoveUp(): boolean;
        get packSource(): $PackSource;
        get id(): string;
        get description(): $Component;
        get selected(): boolean;
        get title(): $Component;
        get compatibility(): $PackCompatibility;
        get required(): boolean;
        get fixedPosition(): boolean;
        get extendedDescription(): $Component;
        get iconTexture(): $ResourceLocation;
    }
}
