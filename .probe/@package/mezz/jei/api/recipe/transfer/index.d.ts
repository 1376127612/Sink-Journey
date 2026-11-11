import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient, $RecipeHolder_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IRecipeSlotsView_, $IRecipeSlotView, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Slot, $MenuType_, $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $Map, $Collection_, $List_ } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";

declare module "@package/mezz/jei/api/recipe/transfer" {
    export class $IRecipeTransferError$Type extends $Enum<$IRecipeTransferError$Type> {
        static values(): $IRecipeTransferError$Type[];
        static valueOf(arg0: string): $IRecipeTransferError$Type;
        static COSMETIC: $IRecipeTransferError$Type;
        static USER_FACING: $IRecipeTransferError$Type;
        static INTERNAL: $IRecipeTransferError$Type;
        allowsTransfer: boolean;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeTransferError$Type}.
     */
    export type $IRecipeTransferError$Type_ = "internal" | "user_facing" | "cosmetic";
    export class $IRecipeTransferListener {
    }
    export interface $IRecipeTransferListener {
        afterRecipeTransfer(arg0: $IRecipeTransferContext<never, never>, arg1: $RecipeTransferResult_): void;
        beforeRecipeTransfer(arg0: $IRecipeTransferContext<never, never>): void;
    }
    export class $IRecipeTransferError {
        static DEFAULT_BUTTON_HIGHLIGHT_COLOR: number;
    }
    export interface $IRecipeTransferError {
        getType(): $IRecipeTransferError$Type;
        getTooltip(arg0: $ITooltipBuilder): void;
        /**
         * @deprecated
         */
        getTooltip(): $List<$Component>;
        showError(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): void;
        getButtonHighlightColor(): number;
        getMissingCountHint(): number;
        get type(): $IRecipeTransferError$Type;
        get buttonHighlightColor(): number;
        get missingCountHint(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeTransferError}.
     */
    export type $IRecipeTransferError_ = (() => $IRecipeTransferError$Type_);
    export class $IRecipeTransferHandlerHelper {
    }
    export interface $IRecipeTransferHandlerHelper {
        createUserErrorWithTooltip(arg0: $Component_): $IRecipeTransferError;
        createInternalError(): $IRecipeTransferError;
        createRecipeSlotsView(arg0: $List_<$IRecipeSlotView>): $IRecipeSlotsView;
        copyWithIngredients(arg0: $IRecipeSlotView, arg1: $List_<$ItemStack_>): $IRecipeSlotView;
        createUnregisteredRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo<C, R>): $IRecipeTransferHandler<C, R>;
        transferRecipeWithInputAlternatives<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>, arg1: $IRecipeTransferContext<R, C>, arg2: $List_<$IRecipeSlotsView_>, arg3: boolean): $IRecipeTransferError;
        createBasicRecipeTransferInfo<C extends $AbstractContainerMenu, R>(arg0: $Class<C>, arg1: $MenuType_<C>, arg2: $RecipeType<R>, arg3: number, arg4: number, arg5: number, arg6: number): $IRecipeTransferInfo<C, R>;
        getGuiSlotIndexToIngredientMap(arg0: $RecipeHolder_<$CraftingRecipe>): $Map<number, $Ingredient>;
        createUserErrorForMissingSlots(arg0: $Component_, arg1: $Collection_<$IRecipeSlotView>): $IRecipeTransferError;
        recipeTransferHasServerSupport(): boolean;
    }
    export class $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {
    }
    export interface $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {
        getRecipeType(): $RecipeType<R>;
        getMenuType(): ($MenuType<C>) | undefined;
        getContainerClass(): $Class<C>;
        /**
         * @deprecated
         */
        transferRecipe(arg0: C, arg1: R, arg2: $IRecipeSlotsView_, arg3: $Player, arg4: boolean, arg5: boolean): $IRecipeTransferError;
        transferRecipe(arg0: $IRecipeTransferContext<R, C>, arg1: boolean): $IRecipeTransferError;
        get recipeType(): $RecipeType<R>;
        get menuType(): ($MenuType<C>) | undefined;
        get containerClass(): $Class<C>;
    }
    export class $IRecipeTransferManager {
    }
    export interface $IRecipeTransferManager {
        getRecipeTransferListeners(): $List<$IRecipeTransferListener>;
        getRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: C, arg1: $IRecipeCategory<R>): ($IRecipeTransferHandler<C, R>) | undefined;
        get recipeTransferListeners(): $List<$IRecipeTransferListener>;
    }
    export class $IUniversalRecipeTransferHandler<C extends $AbstractContainerMenu> {
    }
    export interface $IUniversalRecipeTransferHandler<C extends $AbstractContainerMenu> {
        getMenuType(): ($MenuType<C>) | undefined;
        getContainerClass(): $Class<C>;
        transferRecipe(arg0: C, arg1: $Object, arg2: $IRecipeSlotsView_, arg3: $Player, arg4: boolean, arg5: boolean): $IRecipeTransferError;
        get menuType(): ($MenuType<C>) | undefined;
        get containerClass(): $Class<C>;
    }
    export class $IRecipeTransferContext<R, C extends $AbstractContainerMenu> {
    }
    export interface $IRecipeTransferContext<R, C extends $AbstractContainerMenu> {
        getTransferId(): number;
        completeRecipeTransfer(arg0: $RecipeTransferResult_): void;
        getContainer(): C;
        getScreen(): $AbstractContainerScreen<C>;
        getPlayer(): $Player;
        getRecipe(): R;
        getRecipeType(): $RecipeType<R>;
        getRecipeSlots(): $IRecipeSlotsView;
        isMaxTransfer(): boolean;
        get transferId(): number;
        get container(): C;
        get screen(): $AbstractContainerScreen<C>;
        get player(): $Player;
        get recipe(): R;
        get recipeType(): $RecipeType<R>;
        get recipeSlots(): $IRecipeSlotsView;
        get maxTransfer(): boolean;
    }
    export class $IRecipeTransferInfo<C extends $AbstractContainerMenu, R> {
    }
    export interface $IRecipeTransferInfo<C extends $AbstractContainerMenu, R> {
        requireCompleteSets(arg0: C, arg1: R): boolean;
        getRecipeType(): $RecipeType<R>;
        getRecipeSlots(arg0: C, arg1: R): $List<$Slot>;
        canHandle(arg0: C, arg1: R): boolean;
        getMenuType(): ($MenuType<C>) | undefined;
        getContainerClass(): $Class<C>;
        getInventorySlots(arg0: C, arg1: R): $List<$Slot>;
        getHandlingError(arg0: C, arg1: R): $IRecipeTransferError;
        get recipeType(): $RecipeType<R>;
        get menuType(): ($MenuType<C>) | undefined;
        get containerClass(): $Class<C>;
    }
    export class $RecipeTransferResult extends $Enum<$RecipeTransferResult> {
        static values(): $RecipeTransferResult[];
        static valueOf(arg0: string): $RecipeTransferResult;
        static SUCCESS: $RecipeTransferResult;
        static REJECTED: $RecipeTransferResult;
    }
    /**
     * Values that may be interpreted as {@link $RecipeTransferResult}.
     */
    export type $RecipeTransferResult_ = "success" | "rejected";
}
