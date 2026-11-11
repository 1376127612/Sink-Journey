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
        findNewPacks(): void;
        getUnselected(): $Stream<$PackSelectionModel$Entry>;
        commit(): void;
        getSelected(): $Stream<$PackSelectionModel$Entry>;
        constructor(onListChanged: $Runnable_, iconGetter: $Function_<$Pack, $ResourceLocation>, repository: $PackRepository, output: $Consumer_<$PackRepository>);
        get unselected(): $Stream<$PackSelectionModel$Entry>;
        get selected(): $Stream<$PackSelectionModel$Entry>;
    }
    export class $PackSelectionModel$SelectedPackEntry extends $PackSelectionModel$EntryBase {
        pack: $Pack;
    }
    export class $PackSelectionModel$UnselectedPackEntry extends $PackSelectionModel$EntryBase {
        pack: $Pack;
    }
    export class $TransferableSelectionList extends $ObjectSelectionList<$TransferableSelectionList$PackEntry> {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        screen: $PackSelectionScreen;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(minecraft: $Minecraft, screen: $PackSelectionScreen, width: number, height: number, title: $Component_);
    }
    export class $PackSelectionModel$EntryBase implements $PackSelectionModel$Entry {
        getId(): string;
        getDescription(): $Component;
        getCompatibility(): $PackCompatibility;
        isRequired(): boolean;
        getTitle(): $Component;
        isFixedPosition(): boolean;
        moveDown(): void;
        moveUp(): void;
        getPackSource(): $PackSource;
        canMoveUp(): boolean;
        canMoveDown(): boolean;
        getIconTexture(): $ResourceLocation;
        canSelect(): boolean;
        getExtendedDescription(): $Component;
        canUnselect(): boolean;
        pack: $Pack;
        constructor(pack: $PackSelectionModel, arg1: $Pack);
        get id(): string;
        get description(): $Component;
        get compatibility(): $PackCompatibility;
        get required(): boolean;
        get title(): $Component;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get iconTexture(): $ResourceLocation;
        get extendedDescription(): $Component;
    }
    export class $PackSelectionScreen extends $Screen {
        updateFocus(selection: $TransferableSelectionList): void;
        clearSelected(): void;
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
        getId(): string;
        getDescription(): $Component;
        getCompatibility(): $PackCompatibility;
        isRequired(): boolean;
        isSelected(): boolean;
        getTitle(): $Component;
        select(): void;
        isFixedPosition(): boolean;
        moveDown(): void;
        moveUp(): void;
        getPackSource(): $PackSource;
        canSelect(): boolean;
        getExtendedDescription(): $Component;
        canMoveUp(): boolean;
        unselect(): void;
        canMoveDown(): boolean;
        canUnselect(): boolean;
        getIconTexture(): $ResourceLocation;
        get id(): string;
        get description(): $Component;
        get compatibility(): $PackCompatibility;
        get required(): boolean;
        get selected(): boolean;
        get title(): $Component;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get extendedDescription(): $Component;
        get iconTexture(): $ResourceLocation;
    }
}
