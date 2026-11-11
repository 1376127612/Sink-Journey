import { $Level_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tank } from "@package/com/nred/nuclearcraft/block_entity/internal/fluid";
import { $RecipeType_, $RecipeManager, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List, $Set, $List_ } from "@package/java/util";
import { $MenuFunction_ } from "@package/com/nred/nuclearcraft/menu";
import { $Predicate_, $Function_ } from "@package/java/util/function";
import { $RecipeInfo, $IRecipeHandler, $BasicRecipe, $SizedChanceFluidIngredient, $SizedChanceItemIngredient } from "@package/com/nred/nuclearcraft/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Class } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/nred/nuclearcraft/handler" {
    export class $BasicRecipeHandler<RECIPE extends $BasicRecipe> extends $AbstractRecipeHandler<RECIPE> implements $IRecipeHandler {
        isValidFluidInput(arg0: $FluidStack_, arg1: $RecipeManager): boolean;
        isValidFluidInput(arg0: $FluidStack_, arg1: $Level_): boolean;
        isValidFluidInput(arg0: $RecipeManager, arg1: $FluidStack_, arg2: number, arg3: $List_<$FluidStack_>, arg4: $List_<$ItemStack_>, arg5: $RecipeInfo<$BasicRecipe>, arg6: $Predicate_<$FluidStack>, arg7: $Predicate_<$ItemStack>, arg8: $Predicate_<$FluidStack>, arg9: $Function_<$BasicRecipe, $List<$SizedChanceFluidIngredient>>, arg10: $Function_<$BasicRecipe, $List<$SizedChanceItemIngredient>>): boolean;
        isValidFluidInput(arg0: $RecipeManager, arg1: $FluidStack_, arg2: number, arg3: $List_<$Tank>, arg4: $List_<$ItemStack_>, arg5: $RecipeInfo<$BasicRecipe> | null): boolean;
        isValidItemInput(arg0: $ItemStack_, arg1: $Level_): boolean;
        isValidItemInput(arg0: $RecipeManager, arg1: $ItemStack_, arg2: number, arg3: $List_<$ItemStack_>, arg4: $List_<$FluidStack_>, arg5: $RecipeInfo<$BasicRecipe>, arg6: $Predicate_<$ItemStack>, arg7: $Predicate_<$FluidStack>, arg8: $Predicate_<$ItemStack>, arg9: $Function_<$BasicRecipe, $List<$SizedChanceItemIngredient>>, arg10: $Function_<$BasicRecipe, $List<$SizedChanceFluidIngredient>>): boolean;
        isValidItemInput(arg0: $RecipeManager, arg1: $ItemStack_, arg2: number, arg3: $List_<$ItemStack_>, arg4: $List_<$Tank>, arg5: $RecipeInfo<$BasicRecipe>): boolean;
        isValidInput(arg0: $ItemStack_, arg1: $Function_<$BasicRecipe, $List<$SizedChanceItemIngredient>>, arg2: $RecipeManager): boolean;
        isValidInput(arg0: $FluidStack_, arg1: $Function_<$BasicRecipe, $List<$SizedChanceFluidIngredient>>, arg2: $RecipeManager): boolean;
        getValidFluids(arg0: $RecipeManager): $List<$Set<$ResourceLocation>>;
        getValidFluids(arg0: $Level_, arg1: number): $Set<$ResourceLocation>;
        getItemInputSize(): number;
        getFluidInputSize(): number;
        getItemOutputSize(): number;
        getFluidOutputSize(): number;
        setValidFluids(): void;
        fluidInputSize: number;
        itemInputSize: number;
        itemOutputSize: number;
        name: string;
        fluidOutputSize: number;
        static INVALID: $IntList;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $AbstractRecipeHandler<RECIPE extends $BasicRecipe> {
        getName(): string;
        init(arg0: $RecipeManager): void;
        getRecipeList(arg0: $RecipeManager): $List<RECIPE>;
        getRecipeInfoFromInputs(arg0: $Level_, arg1: $List_<$ItemStack_>, arg2: $List_<$Tank>): $RecipeInfo<RECIPE>;
        postInit(arg0: $RecipeManager): void;
        getRecipeType(): $RecipeType<RECIPE>;
        setRecipes(arg0: $RecipeManager): void;
        postReload(arg0: $RecipeManager): void;
        static getRecipeFromIngredients(arg0: $Level_, arg1: $RecipeType_<$BasicRecipe>, arg2: $List_<$SizedChanceItemIngredient>, arg3: $List_<$SizedChanceFluidIngredient>): $BasicRecipe;
        getRecipeFromIngredients(arg0: $Level_, arg1: $List_<$SizedChanceItemIngredient>, arg2: $List_<$SizedChanceFluidIngredient>): RECIPE;
        static INVALID: $IntList;
        constructor();
        get name(): string;
        get recipeType(): $RecipeType<RECIPE>;
        set recipes(value: $RecipeManager);
    }
    export class $BlockEntityMenuInfo<TILE extends $BlockEntity> {
        getDisplayName(): $Component;
        createMenu(arg0: number, arg1: $Inventory, arg2: TILE): $AbstractContainerMenu;
        name: string;
        constructor(arg0: string, arg1: $Class<TILE>, arg2: $MenuFunction_<TILE>);
        get displayName(): $Component;
    }
}
