import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $RecipeUpdateListener, $AbstractFurnaceRecipeBookComponent, $RecipeBookComponent } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Map, $Set, $List, $List_ } from "@package/java/util";
import { $AccessorSmithingScreen } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $AbstractContainerScreenAccessor } from "@package/com/denfop/mixin/access";
import { $HorseInventoryMenu, $ChestMenu, $FurnaceMenu, $LecternMenu, $BeaconMenu, $CartographyTableMenu, $StonecutterMenu, $AnvilMenu, $Slot, $ShulkerBoxMenu, $ItemCombinerMenu, $EnchantmentMenu, $CrafterMenu, $CraftingMenu, $SmokerMenu, $BlastFurnaceMenu, $MerchantMenu, $SmithingMenu, $HopperMenu, $GrindstoneMenu, $DispenserMenu, $AbstractContainerMenu, $BrewingStandMenu, $AbstractFurnaceMenu, $InventoryMenu, $LoomMenu, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $AbstractContainerScreenExtension } from "@package/earth/terrarium/adastra/client/screens/base";
import { $ContainerScreenInputControl } from "@package/cn/howxu/mmcr/client/controller/ui";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$1 } from "@package/com/extendedae_plus/mixin/accessor";
import { $BaseCommandBlock } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$2 } from "@package/com/ultramega/ae2importexportcard/mixin";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EditBox, $AbstractButton, $Renderable, $WidgetTooltipHolder, $Button, $Button$OnPress_ } from "@package/net/minecraft/client/gui/components";
import { $BookScreenAccessor } from "@package/com/euphony/neo_language_reload/mixin";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CreativeTabsScreenPage } from "@package/net/neoforged/neoforge/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $SignBlockEntity, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as tooltip from "@package/net/minecraft/client/gui/screens/inventory/tooltip";

declare module "@package/net/minecraft/client/gui/screens/inventory" {
    export class $SmithingScreen extends $ItemCombinerScreen<$SmithingMenu> implements $AccessorSmithingScreen {
        containerTick(): void;
        callUpdateArmorStandPreview(stack: $ItemStack_): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static ARMOR_STAND_TRANSLATION: $Vector3f;
        snapbackStartY: number;
        static EMPTY_SLOT_SMITHING_TEMPLATES: $List<$ResourceLocation>;
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
        static ARMOR_STAND_ANGLE: $Quaternionf;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static MISSING_TEMPLATE_TOOLTIP: $Component;
        quickCraftingType: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        static ERROR_TOOLTIP: $Component;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(menu: $SmithingMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentScreen extends $AbstractContainerScreen<$EnchantmentMenu> {
        containerTick(): void;
        tickBook(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        oFlip: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        flipT: number;
        oOpen: number;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        flip: number;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        flipA: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        quickCraftingType: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        time: number;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        open: number;
        font: $Font;
        constructor(menu: $EnchantmentMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookViewScreen$BookAccess extends $Record {
        pages(): $List<$Component>;
        getPage(page: number): $FormattedText;
        /**
         * Returns the size of the book
         */
        getPageCount(): number;
        static fromItem(stack: $ItemStack_): $BookViewScreen$BookAccess;
        constructor(arg0: $List_<$Component_>);
        get pageCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $BookViewScreen$BookAccess}.
     */
    export type $BookViewScreen$BookAccess_ = { pages?: $List_<$Component_>,  } | [pages?: $List_<$Component_>, ];
    export class $BeaconScreen$BeaconPowerButton extends $BeaconScreen$BeaconScreenButton {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $CyclingSlotBackground {
        tick(icons: $List_<$ResourceLocation_>): void;
        render(containerMenu: $AbstractContainerMenu, guiGraphics: $GuiGraphics, partialTick: number, x: number, y: number): void;
        constructor(slotIndex: number);
    }
    export class $ShulkerBoxScreen extends $AbstractContainerScreen<$ShulkerBoxMenu> {
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
        constructor(menu: $ShulkerBoxMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$SlotWrapper extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        backgroundPair: $Pair<$ResourceLocation, $ResourceLocation>;
    }
    export class $CommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        updateGui(): void;
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
        constructor(autoCommandBlock: $CommandBlockEntity);
    }
    export class $BrewingStandScreen extends $AbstractContainerScreen<$BrewingStandMenu> {
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
        constructor(menu: $BrewingStandMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen extends $EffectRenderingInventoryScreen<$CreativeModeInventoryScreen$ItemPickerMenu> {
        static handleHotbarLoadOrSave(client: $Minecraft, index: number, load: boolean, save: boolean): void;
        containerTick(): void;
        getTooltipFromContainerItem(stack: $ItemStack_): $List<$Component>;
        setCurrentPage(arg0: $CreativeTabsScreenPage): void;
        getCurrentPage(): $CreativeTabsScreenPage;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        isInventoryOpen(): boolean;
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
        destroyItemSlot: $Slot;
        static FOOTER_SEPARATOR: $ResourceLocation;
        quickCraftingType: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(player: $LocalPlayer, enabledFeatures: $FeatureFlagSet, displayOperatorCreativeTab: boolean);
        get inventoryOpen(): boolean;
    }
    export class $AbstractCommandBlockEditScreen extends $Screen {
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
    export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        canSeeEffects(): boolean;
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
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
    }
    export class $DispenserScreen extends $AbstractContainerScreen<$DispenserMenu> {
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
        constructor(menu: $DispenserMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$CustomCreativeSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        backgroundPair: $Pair<$ResourceLocation, $ResourceLocation>;
    }
    export class $BookViewScreen extends $Screen implements $BookScreenAccessor {
        setBookAccess(bookAccess: $BookViewScreen$BookAccess_): void;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        /**
         * I'm not sure why this exists. The function it calls is public and does all the work.
         */
        setPage(pageNum: number): boolean;
        languagereload_setCachedPageIndex(arg0: number): void;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
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
        constructor(bookAccess: $BookViewScreen$BookAccess_);
        set bookAccess(value: $BookViewScreen$BookAccess_);
        set page(value: number);
    }
    export class $BeaconScreen extends $AbstractContainerScreen<$BeaconMenu> {
        containerTick(): void;
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
        constructor(menu: $BeaconMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $ContainerScreen extends $AbstractContainerScreen<$ChestMenu> implements $MenuAccess<$ChestMenu> {
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
        constructor(menu: $ChestMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconCancelButton extends $BeaconScreen$BeaconSpriteScreenButton {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $InventoryScreen extends $EffectRenderingInventoryScreen<$InventoryMenu> implements $RecipeUpdateListener {
        static renderEntityInInventoryFollowsMouse(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        static renderEntityInInventoryFollowsAngle(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        handler$bia000$patchouli$onGuiInitPost(arg0: $CallbackInfo): void;
        containerTick(): void;
        recipesUpdated(): void;
        static renderEntityInInventory(guiGraphics: $GuiGraphics, x: number, y: number, scale: number, translate: $Vector3f, pose: $Quaternionf, cameraOrientation: $Quaternionf | null, entity: $LivingEntity): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        yMouse: number;
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
        xMouse: number;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(player: $Player);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $HopperScreen extends $AbstractContainerScreen<$HopperMenu> {
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
        constructor(menu: $HopperMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookEditScreen$DisplayCache {
    }
    export class $FurnaceScreen extends $AbstractFurnaceScreen<$FurnaceMenu> {
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
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(menu: $FurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $MerchantScreen$TradeOfferButton extends $Button {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getIndex(): number;
        renderToolTip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(x: $MerchantScreen, y: number, index: number, onPress: number, arg4: $Button$OnPress_);
        get index(): number;
    }
    export class $CartographyTableScreen extends $AbstractContainerScreen<$CartographyTableMenu> {
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
        constructor(menu: $CartographyTableMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $LoomScreen extends $AbstractContainerScreen<$LoomMenu> {
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
        constructor(menu: $LoomMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractFurnaceScreen<T extends $AbstractFurnaceMenu> extends $AbstractContainerScreen<T> implements $RecipeUpdateListener {
        init(): void;
        containerTick(): void;
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
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
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(menu: T, recipeBookComponent: $AbstractFurnaceRecipeBookComponent, playerInventory: $Inventory, title: $Component_, texture: $ResourceLocation_, listProgressSprite: $ResourceLocation_, burnProgressSprite: $ResourceLocation_);
    }
    export class $SmokerScreen extends $AbstractFurnaceScreen<$SmokerMenu> {
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
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(menu: $SmokerMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentNames {
        static getInstance(): $EnchantmentNames;
        getRandomName(fontRenderer: $Font, maxWidth: number): $FormattedText;
        /**
         * Resets the underlying random number generator using a given seed.
         */
        initSeed(seed: number): void;
        static get instance(): $EnchantmentNames;
    }
    export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess<T>, $ContainerEventHandler, $AbstractContainerScreenAccessor$2, $AbstractContainerScreenAccessor, $AbstractContainerScreenAccessor$1<any>, $ContainerScreenInputControl, $AbstractContainerScreenExtension {
        isHovering(slot: $Slot, mouseX: number, arg2: number): boolean;
        renderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        findSlot(mouseX: number, arg1: number): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getXSize(): number;
        getMenu(): T;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getYSize(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiLeft(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiTop(): number;
        renderFloatingItem(guiGraphics: $GuiGraphics, stack: $ItemStack_, x: number, y: number, text: string): void;
        clearDraggingState(): void;
        getSlotColor(arg0: number): number;
        getSlotUnderMouse(): $Slot;
        recalculateQuickCraftRemaining(): void;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, blitOffset: number): void;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        resetControllerSlotInput(): void;
        adastra$renderPreSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        setTopPos(keyCode: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        eap$getImageHeight(): number;
        getSnapbackEnd(): $Slot;
        getClickedSlot(): $Slot;
        getSnapbackTime(): number;
        setSnapbackItem(arg0: $ItemStack_): void;
        setImageHeight(keyCode: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getSnapbackStartX(): number;
        getHoveredSlot(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        eap$getLeftPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        eap$getTopPos(): number;
        getDraggingItem(): $ItemStack;
        getQuickdropSlot(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        eap$getImageWidth(): number;
        getSnapbackItem(): $ItemStack;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getSnapbackStartY(): number;
        eap$getHoveredSlot(): $Slot;
        eap$setHoveredSlot(arg0: $Slot): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        getIsSplittingStack(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getQuickCraftingType(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getQuickCraftingRemainder(): number;
        setQuickCraftingRemainder(keyCode: number): void;
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
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
        get XSize(): number;
        get menu(): T;
        get YSize(): number;
        get guiLeft(): number;
        get guiTop(): number;
        get slotUnderMouse(): $Slot;
        set imageHeight(value: number);
        get quickdropSlot(): $Slot;
    }
    export class $CreativeInventoryListener implements $ContainerListener {
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BlastFurnaceScreen extends $AbstractFurnaceScreen<$BlastFurnaceMenu> {
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
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(menu: $BlastFurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CrafterScreen extends $AbstractContainerScreen<$CrafterMenu> {
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
        constructor(menu: $CrafterMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $HorseInventoryScreen extends $AbstractContainerScreen<$HorseInventoryMenu> {
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
        constructor(menu: $HorseInventoryMenu, inventory: $Inventory, horse: $AbstractHorse, inventoryColumns: number);
    }
    export class $BeaconScreen$BeaconConfirmButton extends $BeaconScreen$BeaconSpriteScreenButton {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $BeaconScreen$BeaconUpgradePowerButton extends $BeaconScreen$BeaconPowerButton {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $MinecartCommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        getCommandBlock(): $BaseCommandBlock;
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
        constructor(commandBlock: $BaseCommandBlock);
        get commandBlock(): $BaseCommandBlock;
    }
    export class $ItemCombinerScreen<T extends $ItemCombinerMenu> extends $AbstractContainerScreen<T> implements $ContainerListener {
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
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
        constructor(menu: T, playerInventory: $Inventory, title: $Component_, menuResource: $ResourceLocation_);
    }
    export class $LecternScreen extends $BookViewScreen implements $MenuAccess<$LecternMenu> {
        getMenu(): $LecternMenu;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(menu: $LecternMenu, playerInventory: $Inventory, title: $Component_);
        get menu(): $LecternMenu;
    }
    export class $SignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static MAGIC_TEXT_SCALE: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static MAGIC_SCALE_NUMBER: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $CraftingScreen extends $AbstractContainerScreen<$CraftingMenu> implements $RecipeUpdateListener {
        containerTick(): void;
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
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
        constructor(menu: $CraftingMenu, playerInventory: $Inventory, title: $Component_);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $MerchantScreen extends $AbstractContainerScreen<$MerchantMenu> {
        postButtonClick(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        scrollOff: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        shopItem: number;
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
        tradeOfferButtons: $MerchantScreen$TradeOfferButton[];
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(menu: $MerchantMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconSpriteScreenButton extends $BeaconScreen$BeaconScreenButton {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $BookEditScreen$Pos2i {
    }
    export class $JigsawBlockEditScreen extends $Screen {
        static isValidResourceLocation(location: string): boolean;
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
        constructor(jigsawEntity: $JigsawBlockEntity);
    }
    export class $BeaconScreen$BeaconScreenButton extends $AbstractButton implements $BeaconScreen$BeaconButton {
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        focused: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
    }
    export class $CreativeModeInventoryScreen$ItemPickerMenu extends $AbstractContainerMenu {
        canScroll(): boolean;
        /**
         * Updates the gui slot's ItemStacks based on scroll position.
         */
        scrollTo(pos: number): void;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        containerId: number;
        items: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(player: $Player);
    }
    export class $BookEditScreen$LineInfo {
    }
    export class $BeaconScreen$BeaconButton {
    }
    export interface $BeaconScreen$BeaconButton {
    }
    /**
     * Values that may be interpreted as {@link $BeaconScreen$BeaconButton}.
     */
    export type $BeaconScreen$BeaconButton_ = (() => void);
    export class $BookEditScreen extends $Screen {
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
        constructor(owner: $Player, book: $ItemStack_, hand: $InteractionHand_);
    }
    export class $HangingSignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static MAGIC_BACKGROUND_SCALE: number;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $StonecutterScreen extends $AbstractContainerScreen<$StonecutterMenu> {
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
        constructor(menu: $StonecutterMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $MenuAccess<T extends $AbstractContainerMenu> {
    }
    export interface $MenuAccess<T extends $AbstractContainerMenu> {
        getMenu(): T;
        get menu(): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuAccess}.
     */
    export type $MenuAccess_<T> = (() => T);
    export class $AnvilScreen extends $ItemCombinerScreen<$AnvilMenu> {
        renderFg(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
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
        name: $EditBox;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        font: $Font;
        constructor(menu: $AnvilMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractSignEditScreen extends $Screen {
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
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean);
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean, title: $Component_);
    }
    export class $GrindstoneScreen extends $AbstractContainerScreen<$GrindstoneMenu> {
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
        constructor(menu: $GrindstoneMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $PageButton extends $Button {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_WIDTH: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        focused: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, isForward: boolean, onPress: $Button$OnPress_, playTurnSound: boolean);
    }
    export class $StructureBlockEditScreen extends $Screen {
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
        constructor(structure: $StructureBlockEntity);
    }
}
