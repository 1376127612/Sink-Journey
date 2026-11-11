import { $Level } from "@package/net/minecraft/world/level";
import { $InfoDisplayCompiler } from "@package/xaero/hud/minimap/info/render/compile";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";

declare module "@package/xaero/common/minimap/highlight" {
    export class $DimensionHighlighterHandler {
        getVersion(): number;
        applyChunkHighlightColors(arg0: number, arg1: number): number[];
        shouldApplyTileChunkHighlights(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
        requestRefresh(arg0: number, arg1: number): void;
        requestRefresh(): void;
        shouldApplyRegionHighlights(arg0: number, arg1: number, arg2: boolean): boolean;
        addBlockHighlightTooltips(arg0: $InfoDisplayCompiler, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $HighlighterRegistry, arg2: $MinimapWriter);
        get version(): number;
    }
    export class $HighlighterRegistry {
        getHighlighters(): $List<$AbstractHighlighter>;
        end(): void;
        register(arg0: $AbstractHighlighter): void;
        constructor();
        get highlighters(): $List<$AbstractHighlighter>;
    }
    export class $AbstractHighlighter {
        isCoveringOutsideDiscovered(): boolean;
        addBlockHighlightTooltips(arg0: $InfoDisplayCompiler, arg1: $ResourceKey_<$Level>, arg2: number, arg3: number, arg4: number): void;
        regionHasHighlights(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): boolean;
        getChunkHighlitColor(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): number[];
        chunkIsHighlit(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): boolean;
        get coveringOutsideDiscovered(): boolean;
    }
}
