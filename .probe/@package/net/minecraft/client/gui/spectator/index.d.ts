import { $Component } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $List } from "@package/java/util";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as categories from "@package/net/minecraft/client/gui/spectator/categories";

declare module "@package/net/minecraft/client/gui/spectator" {
    export class $SpectatorMenuItem {
    }
    export interface $SpectatorMenuItem {
        getName(): $Component;
        isEnabled(): boolean;
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        selectItem(menu: $SpectatorMenu): void;
        get name(): $Component;
        get enabled(): boolean;
    }
    export class $SpectatorMenu$ScrollMenuItem implements $SpectatorMenuItem {
    }
    export class $SpectatorMenuListener {
    }
    export interface $SpectatorMenuListener {
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
    }
    /**
     * Values that may be interpreted as {@link $SpectatorMenuListener}.
     */
    export type $SpectatorMenuListener_ = ((arg0: $SpectatorMenu) => void);
    export class $SpectatorMenu {
        exit(): void;
        getItem(index: number): $SpectatorMenuItem;
        getSelectedItem(): $SpectatorMenuItem;
        getItems(): $List<$SpectatorMenuItem>;
        getCurrentPage(): $SpectatorPage;
        selectSlot(slot: number): void;
        getSelectedCategory(): $SpectatorMenuCategory;
        getSelectedSlot(): number;
        selectCategory(category: $SpectatorMenuCategory): void;
        static EMPTY_SLOT: $SpectatorMenuItem;
        constructor(listener: $SpectatorMenuListener_);
        get selectedItem(): $SpectatorMenuItem;
        get items(): $List<$SpectatorMenuItem>;
        get currentPage(): $SpectatorPage;
        get selectedCategory(): $SpectatorMenuCategory;
        get selectedSlot(): number;
    }
    export class $SpectatorMenu$CloseSpectatorItem implements $SpectatorMenuItem {
    }
    export class $SpectatorMenuCategory {
    }
    export interface $SpectatorMenuCategory {
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
    export class $PlayerMenuItem implements $SpectatorMenuItem {
        getName(): $Component;
        isEnabled(): boolean;
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        selectItem(menu: $SpectatorMenu): void;
        constructor(profile: $GameProfile);
        get name(): $Component;
        get enabled(): boolean;
    }
    export class $RootSpectatorMenuCategory implements $SpectatorMenuCategory {
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        constructor();
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
}
