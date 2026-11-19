import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityIngredient } from "@package/com/lowdragmc/mbd2/api/recipe/ingredient";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $List } from "@package/java/util";
import { $BindableUIElement, $Label } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $IngredientIO_ } from "@package/com/lowdragmc/lowdraglib2/integration/xei";
import { $UIElement, $Style } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Element } from "@package/org/w3c/dom";

declare module "@package/com/lowdragmc/mbd2/common/gui/recipe/ingredient/entity" {
    export class $EntityIngredientSlot$SlotStyle extends $Style {
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $EntityIngredientSlot$SlotStyle;
        holder: $UIElement;
        constructor(arg0: $EntityIngredientSlot);
    }
    export class $EntityIngredientSlot extends $BindableUIElement<$EntityIngredient> {
        static renderEntityInInventory(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $Entity): void;
        xeiRecipeIngredient(arg0: $IngredientIO_): $EntityIngredientSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $EntityIngredientSlot;
        xeiRecipeSlot(): $EntityIngredientSlot;
        getSlotStyle(): $EntityIngredientSlot$SlotStyle;
        getEntityItem(): $ItemStack;
        getEntityItems(): $Stream<$ItemStack>;
        getValue(): $EntityIngredient;
        setValue(arg0: $EntityIngredient | null, arg1: boolean): $EntityIngredientSlot;
        getCurrentEntity(): $Entity;
        xeiPhantom(): $EntityIngredientSlot;
        static getEntityIngredientXml(arg0: $Element): $EntityIngredient;
        getIngredientCountText(): $Component;
        getEntityIngredient(): $EntityIngredient;
        setEntityIngredient(arg0: $EntityIngredient): $EntityIngredientSlot;
        setEntityIngredient(arg0: $EntityIngredient, arg1: boolean): $EntityIngredientSlot;
        slotStyle(arg0: $Consumer_<$EntityIngredientSlot$SlotStyle>): $EntityIngredientSlot;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        countLabel: $Label;
        constructor();
        get fullTooltipTexts(): $List<$Component>;
        get entityItem(): $ItemStack;
        get entityItems(): $Stream<$ItemStack>;
        get currentEntity(): $Entity;
        get ingredientCountText(): $Component;
    }
}
