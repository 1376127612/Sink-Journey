import { $DisplayInfo, $AdvancementProgress, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientChunkCache$Storage } from "@package/net/minecraft/client/multiplayer";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Display$TextDisplay$CachedInfo_, $Display$TextDisplay$CachedInfo } from "@package/net/minecraft/world/entity";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $AdvancementTab, $AdvancementWidget } from "@package/net/minecraft/client/gui/screens/advancements";
import { $LanguageSelectScreen$LanguageSelectionList, $LanguageSelectScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";

declare module "@package/com/euphony/neo_language_reload/mixin" {
    export class $AdvancementWidgetAccessor {
    }
    export interface $AdvancementWidgetAccessor {
        languagereload_getAdvancement(): $AdvancementNode;
        languagereload_getTab(): $AdvancementTab;
        languagereload_getProgress(): $AdvancementProgress;
        languagereload_getParent(): $AdvancementWidget;
        languagereload_setChildren(arg0: $List_<$AdvancementWidget>): void;
        languagereload_setParent(arg0: $AdvancementWidget): void;
        languagereload_getDisplay(): $DisplayInfo;
        languagereload_getChildren(): $List<$AdvancementWidget>;
    }
    export class $TextDisplayEntityAccessor {
    }
    export interface $TextDisplayEntityAccessor {
        languagereload_setTextLines(arg0: $Display$TextDisplay$CachedInfo_): void;
    }
    /**
     * Values that may be interpreted as {@link $TextDisplayEntityAccessor}.
     */
    export type $TextDisplayEntityAccessor_ = ((arg0: $Display$TextDisplay$CachedInfo) => void);
    export class $LanguageSelectionListWidgetAccessor {
        static languagereload_init(arg0: $LanguageSelectScreen, arg1: $Minecraft): $LanguageSelectScreen$LanguageSelectionList;
    }
    export interface $LanguageSelectionListWidgetAccessor {
    }
    export class $ClientChunkMapAccessor {
    }
    export interface $ClientChunkMapAccessor {
        languagereload_getChunks(): $AtomicReferenceArray<$LevelChunk>;
    }
    /**
     * Values that may be interpreted as {@link $ClientChunkMapAccessor}.
     */
    export type $ClientChunkMapAccessor_ = (() => $AtomicReferenceArray<$LevelChunk>);
    export class $BookScreenAccessor {
    }
    export interface $BookScreenAccessor {
        languagereload_setCachedPageIndex(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BookScreenAccessor}.
     */
    export type $BookScreenAccessor_ = ((arg0: number) => void);
    export class $SignTextAccessor {
    }
    export interface $SignTextAccessor {
        languagereload_setOrderedMessages(arg0: $FormattedCharSequence_[]): void;
    }
    /**
     * Values that may be interpreted as {@link $SignTextAccessor}.
     */
    export type $SignTextAccessor_ = ((arg0: $FormattedCharSequence[]) => void);
    export class $ClientChunkManagerAccessor {
    }
    export interface $ClientChunkManagerAccessor {
        languagereload_getChunks(): $ClientChunkCache$Storage;
    }
    /**
     * Values that may be interpreted as {@link $ClientChunkManagerAccessor}.
     */
    export type $ClientChunkManagerAccessor_ = (() => $ClientChunkCache$Storage);
}
