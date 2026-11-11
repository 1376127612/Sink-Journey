import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $JsonElement_ } from "@package/com/google/gson";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CookingBookCategory_, $Ingredient_, $CraftingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $MiningRecipeKubeRecipe } from "@package/com/bmaster/createrns/compat/kubejs";
import { $IntegratedWorkingStationSchema$IntegratedWorkingStationKubeRecipe } from "@package/cn/dancingsnow/neoecoae/integration/kubejs/recipe";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Map_, $List_ } from "@package/java/util";
import { $SizedIngredient_ } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@side-only/server/events/recipes" {
    export class DocumentedRecipes {
        minecraft: {
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
        }
        kubejs: {
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
        }
        neoecoprototype: {
            processor_assembler(ingredients: $List_<$Ingredient_>, result: $ItemStack_): Neoecoprototype$ProcessorAssembler;
        }
        create_rns: {
            mining(): CreateRns$Mining;
        }
        neoecoae: {
            large_integrated_working_station(energy: number, inputItems?: $List_<$SizedIngredient_> | $SizedIngredient_, inputFluid?: $SizedFluidIngredient, itemOutput?: $ItemStack_, fluidOutput?: $FluidStack_, processingTicks?: number): Neoecoae$LargeIntegratedWorkingStation;
            cooling(input: $SizedFluidIngredient, coolant: number, output: $FluidStack_, maxOverclock?: number): Neoecoae$Cooling;
            integrated_working_station(energy: number, inputItems?: $List_<$SizedIngredient_> | $SizedIngredient_, inputFluid?: $SizedFluidIngredient, itemOutput?: $ItemStack_, fluidOutput?: $FluidStack_, processingTicks?: number): Neoecoae$IntegratedWorkingStation;
        }
        mmcr: {
            machine_recipe(tickTime: number, requirements: $List_<$JsonElement_> | $JsonElement_, maxThreads?: number, parallelized?: boolean, cancelIfPerTickFails?: boolean, allowPartialOutputs?: boolean): Mmcr$MachineRecipe;
        }
        create_hand_made: {
            stonecutting_recipe(result: $ItemStack_, ingredient: $Ingredient_, group?: string): CreateHandMade$StonecuttingRecipe;
            tool_recipe(tool: string, ingredients: $List_<$Ingredient_ | $SizedFluidIngredient>, results: $List_<$ItemStack_ | $FluidStack_>, processingTime?: number, heatRequirement?: string): CreateHandMade$ToolRecipe;
            bellows_recipe(fanType: string, ingredients: $List_<$Ingredient_>, results: $List_<$ItemStack_>): CreateHandMade$BellowsRecipe;
        }
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class CreateHandMade$BellowsRecipe extends $KubeRecipe {
        fanType(fanType: string): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        results(results: $List_<$ItemStack_>): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class CreateRns$Mining extends $MiningRecipeKubeRecipe {
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Minecraft$CampfireCooking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Neoecoae$IntegratedWorkingStation extends $IntegratedWorkingStationSchema$IntegratedWorkingStationKubeRecipe {
        energy(energy: number): this;
        inputItems(inputItems: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        inputFluid(inputFluid: $SizedFluidIngredient): this;
        itemOutput(itemOutput: $ItemStack_): this;
        fluidOutput(fluidOutput: $FluidStack_): this;
        processingTicks(processingTicks: number): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Kubejs$Shaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Mmcr$MachineRecipe extends $KubeRecipe {
        tickTime(tickTime: number): this;
        requirements(requirements: $List_<$JsonElement_> | $JsonElement_): this;
        outputs(outputs: $List_<$JsonElement_> | $JsonElement_): this;
        modifiers(modifiers: $List_<$JsonElement_> | $JsonElement_): this;
        maxThreads(maxThreads: number): this;
        parallelized(parallelized: boolean): this;
        cancelIfPerTickFails(cancelIfPerTickFails: boolean): this;
        allowPartialOutputs(allowPartialOutputs: boolean): this;
        allowPartialOutputs(): this;
        smartInterfaceInput(arg0: string, arg1: number): this;
        smartInterfaceInputRange(arg0: string, arg1: number, arg2: number): this;
        smartInterfaceOutput(arg0: string, arg1: number): this;
        custom(arg0: string, arg1: string, arg2: $JsonElement_): this;
        inputMana(arg0: number): this;
        outputMana(arg0: number): this;
        inputSource(arg0: number): this;
        outputSource(arg0: number): this;
        inputSourceChance(arg0: number, arg1: number): this;
        outputSourceChance(arg0: number, arg1: number): this;
        inputManaChance(arg0: number, arg1: number): this;
        outputManaChance(arg0: number, arg1: number): this;
        inputAir(arg0: number, arg1: number): this;
        outputAir(arg0: number): this;
        inputAirChance(arg0: number, arg1: number, arg2: number): this;
        outputAirChance(arg0: number, arg1: number): this;
        requiredHost(arg0: string): this;
        requiresLevel(arg0: string, arg1: string): this;
        chemicalInput(arg0: string, arg1: number): this;
        chemicalTagInput(arg0: string, arg1: number): this;
        chemicalInputChance(arg0: string, arg1: number, arg2: number): this;
        chemicalTagInputChance(arg0: string, arg1: number, arg2: number): this;
        chemicalOutput(arg0: string, arg1: number, arg2: number): this;
        heatTemperatureInput(arg0: number): this;
        heatOutput(arg0: number): this;
        lightningInput(arg0: string, arg1: number): this;
        lightningOutput(arg0: string, arg1: number): this;
        lightningOutputChance(arg0: string, arg1: number, arg2: number): this;
    }
    export class Neoecoprototype$ProcessorAssembler extends $KubeRecipe {
        ingredients(ingredients: $List_<$Ingredient_>): this;
        result(result: $ItemStack_): this;
    }
    export class CreateHandMade$ToolRecipe extends $KubeRecipe {
        tool(tool: string): this;
        ingredients(ingredients: $List_<$Ingredient_ | $SizedFluidIngredient>): this;
        results(results: $List_<$ItemStack_ | $FluidStack_>): this;
        processingTime(processingTime: number): this;
        heatRequirement(heatRequirement: string): this;
        superheated(): this;
        heated(): this;
    }
    export class CreateHandMade$StonecuttingRecipe extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        group(group: string): this;
    }
    export class Neoecoae$LargeIntegratedWorkingStation extends $IntegratedWorkingStationSchema$IntegratedWorkingStationKubeRecipe {
        energy(energy: number): this;
        inputItems(inputItems: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        inputFluid(inputFluid: $SizedFluidIngredient): this;
        itemOutput(itemOutput: $ItemStack_): this;
        fluidOutput(fluidOutput: $FluidStack_): this;
        processingTicks(processingTicks: number): this;
    }
    export class Neoecoae$Cooling extends $KubeRecipe {
        input(input: $SizedFluidIngredient): this;
        coolant(coolant: number): this;
        output(output: $FluidStack_): this;
        maxOverclock(maxOverclock: number): this;
    }
    export class Minecraft$CraftingShaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
}
