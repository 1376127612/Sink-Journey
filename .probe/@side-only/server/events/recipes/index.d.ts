import { $JsonElement_ } from "@package/com/google/gson";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_, $CraftingBookCategory_, $CookingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $MobCategory_ } from "@package/net/minecraft/world/entity";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $TankKubeRecipe, $FireCraftingKubeRecipe, $AlloySmelterKubeRecipe } from "@package/com/almostreliable/kubeio/recipe";
import { $Map_, $List_ } from "@package/java/util";
import { $SagMillingRecipe$BonusType_ } from "@package/com/enderio/enderio/content/machines/sag_mill";
import { $HeatCondition_, $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";
import { $ChemicalStackIngredient } from "@package/mekanism/api/recipes/ingredients";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ChemicalStack } from "@package/mekanism/api/chemical";
import { $LiquidFuelKubeRecipe, $PressKubeRecipe, $FermenterKubeRecipe } from "@package/com/almostreliable/kubeaa/recipe";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $MBDRecipeSchema$MBDRecipeJS } from "@package/com/lowdragmc/mbd2/integration/kubejs/recipe";
import { $IntegratedWorkingStationSchema$IntegratedWorkingStationKubeRecipe } from "@package/cn/dancingsnow/neoecoae/integration/kubejs/recipe";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $SizedIngredient_ } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@side-only/server/events/recipes" {
    export class Mekanism$PigmentExtracting extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Create$Cutting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Qmd$TargetChamber extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Mekanism$ChemicalConversion extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Create$MechanicalCrafting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        acceptMirrored(acceptMirrored: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Create$Milling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Enderio$Slicing extends $KubeRecipe {
        energy(energy: number): this;
    }
    export class Qmd$AtmosphereCollector extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Create$Crushing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Create$Haunting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Enderio$FireCrafting extends $FireCraftingKubeRecipe {
        blockAfterBurning(blockAfterBurning: $Block_): this;
        dimensions(dimensions: $List_<$ResourceKey_<$LevelStem>>): this;
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
    export class Actuallyadditions$Crushing extends $KubeRecipe {
    }
    export class Extendedcrafting$ShapelessTable extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Qmd$DecayChamber extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Qmd$AcceleratorSource extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Enderio$SoulBinding extends $KubeRecipe {
        energy(energy: number): this;
        experience(experience: number): this;
        entityType(entityType: $TagKey_<any>): this;
        mobCategory(mobCategory: $MobCategory_): this;
        soulData(soulData: string): this;
    }
    export class Enderio$Tank extends $TankKubeRecipe {
    }
    export class Mekanism$Painting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
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
    export class Qmd$AcceleratorCooling extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Mekanism$Reaction extends $KubeRecipe {
        itemInput(itemInput: $SizedIngredient_): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        duration(duration: $TickDuration_): this;
        itemOutput(itemOutput: $ItemStack_): this;
        chemicalOutput(chemicalOutput: $ChemicalStack): this;
        energyRequired(energyRequired: number): this;
    }
    export class Qmd$Irradiator extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class CreateHandMade$StonecuttingRecipe extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        group(group: string): this;
    }
    export class Actuallyadditions$Pressing extends $PressKubeRecipe {
    }
    export class Actuallyadditions$Laser extends $KubeRecipe {
        energy(energy: number): this;
    }
    export class Extendedcrafting$ShapedTable extends $KubeRecipe {
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
    export class Create$ItemApplication extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Qmd$NucleosynthesisChamber extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Actuallyadditions$ColorChange extends $KubeRecipe {
    }
    export class Create$Pressing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Qmd$VacuumChamberHeating extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Mekanism$Crushing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Actuallyadditions$Fermenting extends $FermenterKubeRecipe {
        time(time: number): this;
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Enderio$Painting extends $KubeRecipe {
    }
    export class Mekanism$PigmentMixing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        leftInput(leftInput: $ChemicalStackIngredient): this;
        rightInput(rightInput: $ChemicalStackIngredient): this;
    }
    export class Mekanismtools$Paxel extends $KubeRecipe {
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
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Mekanism$ChemicalInfusing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        leftInput(leftInput: $ChemicalStackIngredient): this;
        rightInput(rightInput: $ChemicalStackIngredient): this;
    }
    export class Mekanism$Compressing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Neoecoprototype$ProcessorAssembler extends $KubeRecipe {
        ingredients(ingredients: $List_<$Ingredient_>): this;
        result(result: $ItemStack_): this;
    }
    export class Mekanism$Evaporating extends $KubeRecipe {
        output(output: $FluidStack_): this;
        input(input: $SizedFluidIngredient): this;
    }
    export class Neoecoae$Cooling extends $KubeRecipe {
        input(input: $SizedFluidIngredient): this;
        coolant(coolant: number): this;
        output(output: $FluidStack_): this;
        maxOverclock(maxOverclock: number): this;
    }
    export class Mekanism$Combining extends $KubeRecipe {
        output(output: $ItemStack_): this;
        mainInput(mainInput: $SizedIngredient_): this;
        extraInput(extraInput: $SizedIngredient_): this;
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
    export class Mekanism$Activating extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class Qmd$LiquefierCoolant extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Create$Deploying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Sinkjourney$PrimitiveResearch extends $MBDRecipeSchema$MBDRecipeJS {
    }
    export class Create$Splashing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Qmd$BeamDump extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Actuallyadditions$MiningLens extends $KubeRecipe {
        weight(weight: number): this;
    }
    export class DocumentedRecipes {
        kubejs: {
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
        }
        sinkjourney: {
            primitive_research(): Sinkjourney$PrimitiveResearch;
        }
        neoecoprototype: {
            processor_assembler(ingredients: $List_<$Ingredient_>, result: $ItemStack_): Neoecoprototype$ProcessorAssembler;
        }
        extendedcrafting: {
            shapeless_table(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Extendedcrafting$ShapelessTable;
            shaped_table(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Extendedcrafting$ShapedTable;
        }
        mekanism: {
            enriching(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Enriching;
            nucleosynthesizing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, duration: $TickDuration_, perTickUsage?: boolean): Mekanism$Nucleosynthesizing;
            pigment_extracting(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$PigmentExtracting;
            pigment_mixing(output: $ChemicalStack, leftInput: $ChemicalStackIngredient, rightInput: $ChemicalStackIngredient): Mekanism$PigmentMixing;
            purifying(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Purifying;
            chemical_infusing(output: $ChemicalStack, leftInput: $ChemicalStackIngredient, rightInput: $ChemicalStackIngredient): Mekanism$ChemicalInfusing;
            energy_conversion(input: $SizedIngredient_, output: number): Mekanism$EnergyConversion;
            compressing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Compressing;
            painting(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Painting;
            injecting(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Injecting;
            separating(leftChemicalOutput: $ChemicalStack, rightChemicalOutput: $ChemicalStack, input: $SizedFluidIngredient, energyMultiplier?: number): Mekanism$Separating;
            chemical_conversion(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$ChemicalConversion;
            rotary(chemicalOutput?: $ChemicalStack, fluidOutput?: $FluidStack_, chemicalInput?: $ChemicalStackIngredient, fluidInput?: $SizedFluidIngredient): Mekanism$Rotary;
            crushing(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Crushing;
            oxidizing(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$Oxidizing;
            sawing(input: $SizedIngredient_, mainOutput?: $ItemStack_, secondaryOutput?: $ItemStack_, secondaryChance?: number): Mekanism$Sawing;
            evaporating(output: $FluidStack_, input: $SizedFluidIngredient): Mekanism$Evaporating;
            smelting(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Smelting;
            reaction(itemInput: $SizedIngredient_, fluidInput: $SizedFluidIngredient, chemicalInput: $ChemicalStackIngredient, duration?: $TickDuration_, itemOutput?: $ItemStack_, chemicalOutput?: $ChemicalStack, energyRequired?: number): Mekanism$Reaction;
            combining(output: $ItemStack_, mainInput: $SizedIngredient_, extraInput: $SizedIngredient_): Mekanism$Combining;
            washing(output: $ChemicalStack, fluidInput: $SizedFluidIngredient, chemicalInput: $ChemicalStackIngredient): Mekanism$Washing;
            activating(output: $ChemicalStack, input: $ChemicalStackIngredient): Mekanism$Activating;
            mek_data(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Mekanism$MekData;
            metallurgic_infusing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$MetallurgicInfusing;
            centrifuging(output: $ChemicalStack, input: $ChemicalStackIngredient): Mekanism$Centrifuging;
            crystallizing(output: $ItemStack_, input: $ChemicalStackIngredient): Mekanism$Crystallizing;
            dissolution(output: $ChemicalStack, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Dissolution;
        }
        create: {
            splashing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Splashing;
            basin(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Basin;
            compacting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Compacting;
            crushing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Crushing;
            mechanical_crafting(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>, acceptMirrored?: boolean): Create$MechanicalCrafting;
            pressing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Pressing;
            cutting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Cutting;
            filling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Filling;
            item_application(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$ItemApplication;
            emptying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Emptying;
            sandpaper_polishing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$SandpaperPolishing;
            deploying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Deploying;
            conversion(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Conversion;
            sequenced_assembly(results: $List_<$ProcessingOutput>, ingredient: $Ingredient_, sequence: $List_<$KubeRecipe>, transitionalItem?: $ProcessingOutput, loops?: number): Create$SequencedAssembly;
            milling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Milling;
            mixing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Mixing;
            haunting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Haunting;
        }
        mmcr: {
            machine_recipe(tickTime: number, requirements: $List_<$JsonElement_> | $JsonElement_, maxThreads?: number, parallelized?: boolean, cancelIfPerTickFails?: boolean, allowPartialOutputs?: boolean): Mmcr$MachineRecipe;
        }
        create_hand_made: {
            bellows_recipe(fanType: string, ingredients: $List_<$Ingredient_>, results: $List_<$ItemStack_>): CreateHandMade$BellowsRecipe;
            stonecutting_recipe(result: $ItemStack_, ingredient: $Ingredient_, group?: string): CreateHandMade$StonecuttingRecipe;
            tool_recipe(tool: string, ingredients: $List_<$Ingredient_ | $SizedFluidIngredient>, results: $List_<$ItemStack_ | $FluidStack_>, processingTime?: number, heatRequirement?: string): CreateHandMade$ToolRecipe;
        }
        minecraft: {
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
        }
        qmd: {
            accelerator_source(recipe: $Map_<any, any>): Qmd$AcceleratorSource;
            decay_chamber(recipe: $Map_<any, any>): Qmd$DecayChamber;
            mass_spectrometer(recipe: $Map_<any, any>): Qmd$MassSpectrometer;
            vacuum_chamber_heating(recipe: $Map_<any, any>): Qmd$VacuumChamberHeating;
            collision_chamber(recipe: $Map_<any, any>): Qmd$CollisionChamber;
            target_chamber(recipe: $Map_<any, any>): Qmd$TargetChamber;
            cell_filling(recipe: $Map_<any, any>): Qmd$CellFilling;
            liquefier(recipe: $Map_<any, any>): Qmd$Liquefier;
            liquid_collector(recipe: $Map_<any, any>): Qmd$LiquidCollector;
            atmosphere_collector(recipe: $Map_<any, any>): Qmd$AtmosphereCollector;
            irradiator_fuel(recipe: $Map_<any, any>): Qmd$IrradiatorFuel;
            beam_dump(recipe: $Map_<any, any>): Qmd$BeamDump;
            irradiator(recipe: $Map_<any, any>): Qmd$Irradiator;
            nucleosynthesis_chamber(recipe: $Map_<any, any>): Qmd$NucleosynthesisChamber;
            ore_leacher(recipe: $Map_<any, any>): Qmd$OreLeacher;
            liquefier_coolant(recipe: $Map_<any, any>): Qmd$LiquefierCoolant;
            accelerator_cooling(recipe: $Map_<any, any>): Qmd$AcceleratorCooling;
            neutral_containment(recipe: $Map_<any, any>): Qmd$NeutralContainment;
        }
        enderio: {
            fire_crafting(): Enderio$FireCrafting;
            soul_binding(energy?: number, experience?: number): Enderio$SoulBinding;
            painting(): Enderio$Painting;
            sag_milling(energy?: number, bonus?: $SagMillingRecipe$BonusType_): Enderio$SagMilling;
            alloy_smelting(energy?: number, experience?: number): Enderio$AlloySmelting;
            vat_fermenting(ticks?: number): Enderio$VatFermenting;
            tank(): Enderio$Tank;
            enchanting(costMultiplier?: number): Enderio$Enchanting;
            slicing(energy?: number): Enderio$Slicing;
        }
        actuallyadditions: {
            pressing(): Actuallyadditions$Pressing;
            liquid_fuel(energy?: number, time?: number): Actuallyadditions$LiquidFuel;
            crushing(): Actuallyadditions$Crushing;
            color_change(): Actuallyadditions$ColorChange;
            mining_lens(weight?: number): Actuallyadditions$MiningLens;
            fermenting(time?: number): Actuallyadditions$Fermenting;
            laser(energy?: number): Actuallyadditions$Laser;
            coffee_ingredient(maxAmplifier?: number, extraText?: string): Actuallyadditions$CoffeeIngredient;
            empowering(energy?: number, color?: number, time?: number): Actuallyadditions$Empowering;
        }
        neoecoae: {
            cooling(input: $SizedFluidIngredient, coolant: number, output: $FluidStack_, maxOverclock?: number): Neoecoae$Cooling;
            large_integrated_working_station(energy: number, inputItems?: $List_<$SizedIngredient_> | $SizedIngredient_, inputFluid?: $SizedFluidIngredient, itemOutput?: $ItemStack_, fluidOutput?: $FluidStack_, processingTicks?: number): Neoecoae$LargeIntegratedWorkingStation;
            integrated_working_station(energy: number, inputItems?: $List_<$SizedIngredient_> | $SizedIngredient_, inputFluid?: $SizedFluidIngredient, itemOutput?: $ItemStack_, fluidOutput?: $FluidStack_, processingTicks?: number): Neoecoae$IntegratedWorkingStation;
        }
        mekanismtools: {
            paxel(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Mekanismtools$Paxel;
        }
    }
    export class Qmd$CollisionChamber extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Enderio$SagMilling extends $KubeRecipe {
        energy(energy: number): this;
        bonus(bonus: $SagMillingRecipe$BonusType_): this;
    }
    export class Mekanism$Injecting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Create$Conversion extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class CreateHandMade$BellowsRecipe extends $KubeRecipe {
        fanType(fanType: string): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        results(results: $List_<$ItemStack_>): this;
    }
    export class Qmd$MassSpectrometer extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Mekanism$Separating extends $KubeRecipe {
        leftChemicalOutput(leftChemicalOutput: $ChemicalStack): this;
        rightChemicalOutput(rightChemicalOutput: $ChemicalStack): this;
        input(input: $SizedFluidIngredient): this;
        energyMultiplier(energyMultiplier: number): this;
    }
    export class Mekanism$Centrifuging extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class Mekanism$MekData extends $KubeRecipe {
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
    export class Mekanism$Washing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Enderio$Enchanting extends $KubeRecipe {
        costMultiplier(costMultiplier: number): this;
    }
    export class Qmd$LiquidCollector extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Mekanism$Nucleosynthesizing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        duration(duration: $TickDuration_): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Qmd$IrradiatorFuel extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Actuallyadditions$CoffeeIngredient extends $KubeRecipe {
        maxAmplifier(maxAmplifier: number): this;
        extraText(extraText: string): this;
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
    export class Create$Mixing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$SandpaperPolishing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
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
    export class Qmd$Liquefier extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Neoecoae$LargeIntegratedWorkingStation extends $IntegratedWorkingStationSchema$IntegratedWorkingStationKubeRecipe {
        energy(energy: number): this;
        inputItems(inputItems: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        inputFluid(inputFluid: $SizedFluidIngredient): this;
        itemOutput(itemOutput: $ItemStack_): this;
        fluidOutput(fluidOutput: $FluidStack_): this;
        processingTicks(processingTicks: number): this;
    }
    export class Qmd$CellFilling extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Create$Filling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Enriching extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class Qmd$NeutralContainment extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
    export class Mekanism$Sawing extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        mainOutput(mainOutput: $ItemStack_): this;
        secondaryOutput(secondaryOutput: $ItemStack_): this;
        secondaryChance(secondaryChance: number): this;
    }
    export class Mekanism$EnergyConversion extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        output(output: number): this;
    }
    export class Mekanism$Purifying extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Create$Compacting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Emptying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Crystallizing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Enderio$VatFermenting extends $KubeRecipe {
        ticks(ticks: number): this;
    }
    export class Create$SequencedAssembly extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredient(ingredient: $Ingredient_): this;
        sequence(sequence: $List_<$KubeRecipe>): this;
        transitionalItem(transitionalItem: $ProcessingOutput): this;
        loops(loops: number): this;
    }
    export class Actuallyadditions$LiquidFuel extends $LiquidFuelKubeRecipe {
        energy(energy: number): this;
        time(time: number): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Mekanism$MetallurgicInfusing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Enderio$AlloySmelting extends $AlloySmelterKubeRecipe {
        energy(energy: number): this;
        experience(experience: number): this;
    }
    export class Mekanism$Dissolution extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Mekanism$Oxidizing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Mekanism$Rotary extends $KubeRecipe {
        chemicalOutput(chemicalOutput: $ChemicalStack): this;
        fluidOutput(fluidOutput: $FluidStack_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
    }
    export class Mekanism$Smelting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class Actuallyadditions$Empowering extends $KubeRecipe {
        energy(energy: number): this;
        color(color: number): this;
        time(time: number): this;
    }
    export class Create$Basin extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Qmd$OreLeacher extends $KubeRecipe {
        recipe(recipe: $Map_<any, any>): this;
    }
}
