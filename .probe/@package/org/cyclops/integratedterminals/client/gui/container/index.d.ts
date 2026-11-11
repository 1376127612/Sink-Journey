import { $ItemStack } from "@package/net/minecraft/world/item";
import { $PanoramaRenderer, $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ITerminalStorageTabClient } from "@package/org/cyclops/integratedterminals/api/terminalstorage";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ContainerScreenExtended } from "@package/org/cyclops/cyclopscore/client/gui/container";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Set } from "@package/java/util";
import { $ContainerTerminalStorageBase } from "@package/org/cyclops/integratedterminals/inventory/container";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WidgetTextFieldExtended } from "@package/org/cyclops/cyclopscore/client/gui/component/input";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/org/cyclops/integratedterminals/client/gui/container" {
    export class $ContainerScreenTerminalStorage<L, C extends $ContainerTerminalStorageBase<L>> extends $ContainerScreenExtended<C> {
        static drawPanel(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getMenu(): C;
        containerTick(): void;
        getStorageSlotIndexAtPosition(arg0: number, arg1: number): number;
        getFieldSearch(): $WidgetTextFieldExtended;
        getGridXSize(): number;
        getBaseYSize(): number;
        getScrollHeight(): number;
        static blitRescalable(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getGridYSize(): number;
        hasSearchField(): boolean;
        getStorageSlotRect(arg0: number): $Rect2i;
        hasScrollbar(): boolean;
        hasChannelField(): boolean;
        getBaseXSize(): number;
        getSearchWidth(): number;
        getSelectedClientTab(): ($ITerminalStorageTabClient<never>) | undefined;
        repositionInventorySlots(): void;
        hasVariableFilterSlots(): boolean;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        quickCraftingType: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(arg0: C, arg1: $Inventory, arg2: $Component_);
        get menu(): C;
        get fieldSearch(): $WidgetTextFieldExtended;
        get gridXSize(): number;
        get baseYSize(): number;
        get scrollHeight(): number;
        get gridYSize(): number;
        get baseXSize(): number;
        get searchWidth(): number;
        get selectedClientTab(): ($ITerminalStorageTabClient<never>) | undefined;
    }
    export class $ContainerScreenTerminalStorage$DrawLayer extends $Enum<$ContainerScreenTerminalStorage$DrawLayer> {
        static values(): $ContainerScreenTerminalStorage$DrawLayer[];
        static valueOf(arg0: string): $ContainerScreenTerminalStorage$DrawLayer;
        static FOREGROUND: $ContainerScreenTerminalStorage$DrawLayer;
        static BACKGROUND: $ContainerScreenTerminalStorage$DrawLayer;
    }
    /**
     * Values that may be interpreted as {@link $ContainerScreenTerminalStorage$DrawLayer}.
     */
    export type $ContainerScreenTerminalStorage$DrawLayer_ = "background" | "foreground";
}
