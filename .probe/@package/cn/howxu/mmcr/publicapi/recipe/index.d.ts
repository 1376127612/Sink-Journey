import { $JsonElement } from "@package/com/google/gson";
import { $FluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ComponentConstraints } from "@package/cn/howxu/mmcr/publicapi/recipe/component";
import { $RequirementSpec, $SmartInterfaceRequirementSpec } from "@package/cn/howxu/mmcr/publicapi/recipe/requirement";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Enum } from "@package/java/lang";
import { $List, $Set, $List_ } from "@package/java/util";
export * as modifier from "@package/cn/howxu/mmcr/publicapi/recipe/modifier";
export * as requirement from "@package/cn/howxu/mmcr/publicapi/recipe/requirement";
export * as component from "@package/cn/howxu/mmcr/publicapi/recipe/component";

declare module "@package/cn/howxu/mmcr/publicapi/recipe" {
    export class $ItemInputSpec {
    }
    export interface $ItemInputSpec {
        count(): number;
        components(): $ComponentConstraints;
        ingredient(): $Ingredient;
        consumeChance(): number;
    }
    export class $RecipeSpec {
    }
    export interface $RecipeSpec {
        cancelRecipeOnPerTickFailure(): boolean;
        customOutputs(): $List<$CustomIoSpec>;
        requiredHosts(): $Set<$HostConstraint>;
        priority(): number;
        id(): $ResourceLocation;
        maxThreads(): number;
        itemInputs(): $List<$ItemInputSpec>;
        fluidInputs(): $List<$FluidInputSpec>;
        itemOutputs(): $List<$ItemOutputSpec>;
        fluidOutputs(): $List<$FluidOutputSpec>;
        tickTime(): number;
        requirements(): $List<$RequirementSpec>;
        allowPartialOutputs(): boolean;
        recipePoolId(): $ResourceLocation;
        modifierIds(): $List<$ResourceLocation>;
        parallelized(): boolean;
        requiredHostIds(): $Set<$ResourceLocation>;
        energyInputs(): $List<$EnergyRateSpec>;
        energyOutputs(): $List<$EnergyRateSpec>;
    }
    export class $RecipeDraft {
    }
    export interface $RecipeDraft {
        priority(priority: number): $RecipeDraft;
        duration(ticks: number): $RecipeDraft;
        build(): $RecipeSpec;
        modifier(id: $ResourceLocation_): $RecipeDraft;
        maxThreads(threads: number): $RecipeDraft;
        custom(value: $CustomIoSpec): $RecipeDraft;
        inputSource(amount: number, consumeChance: number): $RecipeDraft;
        inputSource(amount: number): $RecipeDraft;
        outputChemical(id: $ResourceLocation_, amount: number, chance: number): $RecipeDraft;
        outputItem(item: $Item_, count: number): $RecipeDraft;
        outputItem(stack: $ItemStack_): $RecipeDraft;
        outputItem(stack: $ItemStack_, components: $ComponentConstraints): $RecipeDraft;
        outputHeat(heat: number): $RecipeDraft;
        outputEnergy(fePerTick: number): $RecipeDraft;
        requirement(value: $RequirementSpec): $RecipeDraft;
        inputChemical(id: $ResourceLocation_, amount: number, consumeChance: number): $RecipeDraft;
        inputChemical(id: $ResourceLocation_, amount: number): $RecipeDraft;
        inputItem(item: $Item_, count: number): $RecipeDraft;
        inputItem(tag: $TagKey_<$Item>, count: number): $RecipeDraft;
        inputItem(item: $Ingredient_, count: number, components: $ComponentConstraints, consumeChance: number): $RecipeDraft;
        inputItem(item: $Ingredient_, count: number): $RecipeDraft;
        allowPartialOutputs(value: boolean): $RecipeDraft;
        inputEnergy(fePerTick: number): $RecipeDraft;
        inputFluid(fluid: $Fluid_, amount: number, consumeChance: number): $RecipeDraft;
        inputFluid(fluid: $Fluid_, amount: number): $RecipeDraft;
        outputFluid(fluid: $Fluid_, amount: number): $RecipeDraft;
        smartInterface(value: $SmartInterfaceRequirementSpec): $RecipeDraft;
        parallelized(value: boolean): $RecipeDraft;
        levelRequirement(typeId: $ResourceLocation_, levelId: $ResourceLocation_): $RecipeDraft;
        stageRequirement(minStage: number): $RecipeDraft;
        recipePool(id: $ResourceLocation_): $RecipeDraft;
        inputAir(airPerTick: number, minPressure: number, consumeChance: number, tags: $List_<string>): $RecipeDraft;
        inputAir(airPerTick: number, minPressure: number, consumeChance: number): $RecipeDraft;
        inputAir(airPerTick: number, minPressure: number): $RecipeDraft;
        inputAir(airPerTick: number, minPressure: number, tags: $List_<string>): $RecipeDraft;
        outputAir(airPerTick: number, tags: $List_<string>): $RecipeDraft;
        outputAir(airPerTick: number): $RecipeDraft;
        outputAir(airPerTick: number, chance: number): $RecipeDraft;
        outputAir(airPerTick: number, chance: number, tags: $List_<string>): $RecipeDraft;
        inputMana(amount: number): $RecipeDraft;
        inputMana(amount: number, consumeChance: number): $RecipeDraft;
        outputMana(amount: number): $RecipeDraft;
        outputMana(amount: number, chance: number): $RecipeDraft;
        cancelIfPerTickFails(value: boolean): $RecipeDraft;
        lightningInput(tier: $LightningTier_, amount: number): $RecipeDraft;
        lightningOutput(tier: $LightningTier_, amount: number, chance: number): $RecipeDraft;
        lightningOutput(tier: $LightningTier_, amount: number): $RecipeDraft;
        outputSource(amount: number): $RecipeDraft;
        outputSource(amount: number, chance: number): $RecipeDraft;
        requiredHost(id: $ResourceLocation_): $RecipeDraft;
        inputHeatTemperature(temperature: number): $RecipeDraft;
        outputStress(stress: number, rpm: number): $RecipeDraft;
        outputStress(stress: number, rpm: number, tags: $List_<string>): $RecipeDraft;
        inputItemTag(tag: $TagKey_<$Item>, count: number): $RecipeDraft;
        inputStress(stress: number, minRpm: number, tags: $List_<string>): $RecipeDraft;
        inputStress(stress: number, minRpm: number): $RecipeDraft;
        outputChance(stack: $ItemStack_, chance: number): $RecipeDraft;
        outputChance(stack: $ItemStack_, chance: number, components: $ComponentConstraints): $RecipeDraft;
        inputChemicalTag(id: $ResourceLocation_, amount: number, consumeChance: number): $RecipeDraft;
        inputChemicalTag(id: $ResourceLocation_, amount: number): $RecipeDraft;
        oFEt(fePerTick: number): $RecipeDraft;
        iFEt(fePerTick: number): $RecipeDraft;
    }
    export class $EnergyRateSpec {
    }
    export interface $EnergyRateSpec {
        fePerTick(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnergyRateSpec}.
     */
    export type $EnergyRateSpec_ = (() => number);
    export class $FluidOutputSpec {
    }
    export interface $FluidOutputSpec {
        stack(): $FluidStack;
        chance(): number;
    }
    export class $ItemOutputSpec {
    }
    export interface $ItemOutputSpec {
        stack(): $ItemStack;
        components(): $ComponentConstraints;
        chance(): number;
    }
    export class $IoDirection extends $Enum<$IoDirection> {
        static values(): $IoDirection[];
        static valueOf(name: string): $IoDirection;
        static INPUT: $IoDirection;
        static OUTPUT: $IoDirection;
    }
    /**
     * Values that may be interpreted as {@link $IoDirection}.
     */
    export type $IoDirection_ = "input" | "output";
    export class $LightningTier extends $Enum<$LightningTier> {
        static values(): $LightningTier[];
        static valueOf(name: string): $LightningTier;
        static EXTREME_HIGH_VOLTAGE: $LightningTier;
        static HIGH_VOLTAGE: $LightningTier;
    }
    /**
     * Values that may be interpreted as {@link $LightningTier}.
     */
    export type $LightningTier_ = "high_voltage" | "extreme_high_voltage";
    export class $HostConstraint {
    }
    export interface $HostConstraint {
        id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $HostConstraint}.
     */
    export type $HostConstraint_ = (() => $ResourceLocation_);
    export class $CustomIoSpec {
    }
    export interface $CustomIoSpec {
        payload(): $JsonElement;
        io(): $IoDirection;
        ioType(): $IoDirection;
        typeId(): $ResourceLocation;
    }
    export class $FluidInputSpec {
    }
    export interface $FluidInputSpec {
        amount(): number;
        ingredient(): $FluidIngredient;
        consumeChance(): number;
    }
}
