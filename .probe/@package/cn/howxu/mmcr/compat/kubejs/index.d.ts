import { $JsonElement_ } from "@package/com/google/gson";
import { $ManaRequirement } from "@package/cn/howxu/mmcr/compat/botania";
import { $SourceRequirement } from "@package/cn/howxu/mmcr/compat/ars_nouveau";
import { $MachineReference_, $RequestProcess_, $NetworkInterfaceReference, $RequestFailed_ } from "@package/cn/howxu/mmcr/api/network/view";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $RecipeModifier$Operation_, $RecipeModifier$Operation, $RecipeModifier$IOType_, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $List, $Map_, $List_ } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EnergyRequirement, $SmartInterfaceRequirement, $StageRequirement, $LevelRequirement, $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $Registry } from "@package/net/minecraft/core";
import { $PortRequirementSpec_, $PortTierRequirementSpec, $MachineStructureRequirements_, $PortTierRequirementSpec_, $BlockArray_, $BlockPredicate as $BlockPredicate$1, $MachineControllerSpec_, $DynamicPatternSpec_, $MachineStructureDefinition$Declaration, $MachineStructureDefinition, $BlockPredicate_, $PortRequirementSpec, $MachineRegistration } from "@package/cn/howxu/mmcr/api/machine";
import { $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $DataValue } from "@package/cn/howxu/mmcr/api/data/view";
import { $OutputPolicy } from "@package/cn/howxu/mmcr/api/capability/plan";
import { $ControllerScreenTextScope } from "@package/cn/howxu/mmcr/api/controller";
import { $BigDecimal, $BigInteger } from "@package/java/math";
import { $ModifierDefinition, $BlockPredicate, $MachineBehavior$Kind_, $MachineBehavior, $MachineLevel, $RecipeTickContext, $RecipeFinishContext, $TickBehaviorContext, $ModifierDefinition_, $ModifierUse_, $ModifierUse, $RecipeStartContext, $MachineBehaviorContext } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $MachineModifier$Numeric, $MachineModifier, $MachineModifier$Parallelized } from "@package/cn/howxu/mmcr/api/machine/modifier";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelType, $LevelSlot } from "@package/cn/howxu/mmcr/api/machine/level";
import { $MachineIngredient, $CustomRecipeIo } from "@package/cn/howxu/mmcr/api/recipe";
import { $AirRequirement } from "@package/cn/howxu/mmcr/compat/pneumaticcraft";

declare module "@package/cn/howxu/mmcr/compat/kubejs" {
    export class $MMCRServerEventJS implements $KubeEvent {
        getAPI(): $KubeJSApi;
        createStructure(id: $ResourceLocation_): $MachineStructureBuilderJS;
        createStructure(id: string): $MachineStructureBuilderJS;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
        get API(): $KubeJSApi;
    }
    export class $LevelTypeBuilderJS extends $BuilderBase<$LevelType> {
        register(): $LevelTypeBuilderJS;
        displayName(displayName: string): $LevelTypeBuilderJS;
        displayNameKey(key: string): $LevelTypeBuilderJS;
        registerObject(): void;
        registryKey: $ResourceKey<$Registry<$LevelType>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
        constructor(id: string);
    }
    export class $MMCRValues {
        LONG_MAX: number;
        INT_MAX: number;
        LONG_MIN: number;
        INT_MIN: number;
        constructor();
    }
    export class $MMCRStartupEventJS implements $KubeEvent {
        createMachine(id: $ResourceLocation_): $MachineBuilderJS;
        createMachine(id: string): $MachineBuilderJS;
        addMachineWorkstation(machineId: string, recipeTypeId: string): void;
        addMachineWorkstation(machineId: $ResourceLocation_, recipeTypeId: $ResourceLocation_): void;
        addRecipePoolWorkstation(recipePoolId: $ResourceLocation_, itemId: $ResourceLocation_): void;
        addRecipePoolWorkstation(recipePoolId: string, itemId: string): void;
        registerModifierItem(itemId: $ResourceLocation_, modifierId: $ResourceLocation_): void;
        registerModifierItem(itemId: string, modifierId: string): void;
        getAPI(): $KubeJSApi;
        levelSlot(typeId: $ResourceLocation_): $LevelSlot;
        levelSlot(typeId: string): $LevelSlot;
        registerModifier(id: $ResourceLocation_, definition: $ModifierDefinition_): void;
        registerModifier(id: string, definition: $ModifierDefinition_): void;
        registerControllerScreenText(machineId: string, handler: $Consumer_<$ControllerScreenTextEventJS>): void;
        registerControllerScreenText(machineId: $ResourceLocation_, handler: $Consumer_<$ControllerScreenTextEventJS>): void;
        addMachineWorkStation(machineId: string, recipeTypeId: string): void;
        addMachineWorkStation(machineId: $ResourceLocation_, recipeTypeId: $ResourceLocation_): void;
        createLevelType(id: $ResourceLocation_): $LevelTypeBuilderJS;
        createLevelType(id: string): $LevelTypeBuilderJS;
        createLevel(id: string): $MachineLevelBuilderJS;
        createLevel(id: $ResourceLocation_): $MachineLevelBuilderJS;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
        get API(): $KubeJSApi;
    }
    export class $KubeJSApi$ScreenScopeValues {
        CONTROLLER: $ControllerScreenTextScope;
        OPERATION: $ControllerScreenTextScope;
        constructor();
    }
    export class $MachineBehaviorBuilderJS {
        serverTick(callback: $Consumer_<$TickBehaviorContext>): $MachineBehaviorBuilderJS;
        recipeTick(callback: $Consumer_<$RecipeTickContext>): $MachineBehaviorBuilderJS;
        idleEnd(callback: $Consumer_<$MachineBehaviorContext>): $MachineBehaviorBuilderJS;
        idleStart(callback: $Consumer_<$MachineBehaviorContext>): $MachineBehaviorBuilderJS;
        beforeFinish(callback: $Consumer_<$RecipeFinishContext>): $MachineBehaviorBuilderJS;
        build(): $MachineBehavior;
        beforeStart(callback: $Consumer_<$RecipeStartContext>): $MachineBehaviorBuilderJS;
        constructor(kind: $MachineBehavior$Kind_);
    }
    export class $KubeJSApi$RecipeIoValues {
        INPUT: $RecipeModifier$IOType;
        OUTPUT: $RecipeModifier$IOType;
        constructor();
    }
    export class $KubeJSApi$OutputPolicyValues {
        ALLOW_PARTIAL: $OutputPolicy;
        REQUIRE_FULL: $OutputPolicy;
        constructor();
    }
    export class $KubeJSApi {
        air(): $BlockPredicate$1;
        dataStorage(): $BlockPredicate$1;
        dataValue(value: $Object): $DataValue;
        chemicalOutput(chemicalId: $ResourceLocation_, amount: number, chance: number): $CustomRecipeIo;
        chemicalOutput(chemicalId: string, amount: number, chance: number): $CustomRecipeIo;
        chemicalInput(chemicalId: string, amount: number): $CustomRecipeIo;
        chemicalInput(chemicalId: $ResourceLocation_, amount: number, consumeChance: number): $CustomRecipeIo;
        chemicalInput(chemicalId: $ResourceLocation_, amount: number): $CustomRecipeIo;
        chemicalInput(chemicalId: string, amount: number, consumeChance: number): $CustomRecipeIo;
        fluidStack(fluidId: string, amount: number): $FluidStack;
        fluidStack(fluidId: $ResourceLocation_, amount: number): $FluidStack;
        fluidStack(fluidId: string, amount: number): $FluidStack;
        fluidStack(fluidId: $ResourceLocation_, amount: number): $FluidStack;
        ports(): $BlockPredicate$1;
        itemOutputRequirementWithComponents(itemId: string, count: number, components: $JsonElement_, chance: number): $MachineRequirement;
        itemOutputRequirementWithComponents(itemId: $ResourceLocation_, count: number, components: $JsonElement_, chance: number): $MachineRequirement;
        itemOutputRequirementWithComponents(itemId: $ResourceLocation_, count: number, components: $JsonElement_, chance: number): $MachineRequirement;
        itemOutputRequirementWithComponents(itemId: string, count: number, components: $JsonElement_, chance: number): $MachineRequirement;
        energyRequirement(io: $RecipeModifier$IOType_, fePerTick: number): $EnergyRequirement;
        anyManaOutput(): $BlockPredicate$1;
        anySourcePorts(): $BlockPredicate$1;
        anyAirOutput(): $BlockPredicate$1;
        levelRequirement(typeId: $ResourceLocation_, levelId: $ResourceLocation_): $LevelRequirement;
        levelRequirement(typeId: string, levelId: string): $LevelRequirement;
        sourceOutput(amount: number): $CustomRecipeIo;
        sourceOutput(amount: number, chance: number): $CustomRecipeIo;
        stressOutput(stress: $Object, rpm: $Object): $CustomRecipeIo;
        stressOutput(stress: $Object, rpm: $Object, tags: $List_<string>): $CustomRecipeIo;
        readableNumberFull(value: number): string;
        anyManaPorts(): $BlockPredicate$1;
        anySourceOutput(): $BlockPredicate$1;
        modifierUse(modifierId: $ResourceLocation_, replacement: $BlockPredicate_): $ModifierUse;
        modifierUse(modifierId: string, replacement: $BlockPredicate_): $ModifierUse;
        anyManaInput(): $BlockPredicate$1;
        anyStressOutput(): $BlockPredicate$1;
        readableNumber(value: number): string;
        anySourceInput(): $BlockPredicate$1;
        anyStressPorts(): $BlockPredicate$1;
        modifierDefinition(modifiers: $List_<$MachineModifier>): $ModifierDefinition;
        energyInput(fePerTick: number): $MachineIngredient;
        portRequirements(ranges: $Map_<string, $Object>): $PortRequirementSpec;
        stageRequirement(minStage: number): $StageRequirement;
        sourceInput(amount: number): $CustomRecipeIo;
        sourceInput(amount: number, consumeChance: number): $CustomRecipeIo;
        anyAirPorts(): $BlockPredicate$1;
        energyOutput(fePerTick: number): $MachineIngredient;
        anyAirInput(): $BlockPredicate$1;
        stressInput(stress: $Object, minRpm: $Object, tags: $List_<string>): $CustomRecipeIo;
        stressInput(stress: $Object, minRpm: $Object): $CustomRecipeIo;
        anyStressInput(): $BlockPredicate$1;
        anyOfChemicalPorts(): $BlockPredicate$1;
        anyOfAirOutput(): $BlockPredicate$1;
        sendRequest(source: $NetworkInterfaceReference, target: $MachineReference_, requestId: string, body: $Object): void;
        sendRequest(source: $NetworkInterfaceReference, target: $MachineReference_, requestId: $ResourceLocation_, body: $Object): void;
        anyOfAirPorts(): $BlockPredicate$1;
        manaInputTier(id: string): $PortTierRequirementSpec;
        anyOfStressOutput(): $BlockPredicate$1;
        heatInputTier(): $PortTierRequirementSpec;
        stressOutputTier(): $PortTierRequirementSpec;
        airInputTier(): $PortTierRequirementSpec;
        anyOfEnergyOutput(): $BlockPredicate$1;
        factoryController(): $BlockPredicate$1;
        anyOfEnergyInput(): $BlockPredicate$1;
        smartInterface(): $BlockPredicate$1;
        anyOfItemPorts(): $BlockPredicate$1;
        anyOfFluidPorts(): $BlockPredicate$1;
        anyOfStressPorts(): $BlockPredicate$1;
        heatOutputTier(): $PortTierRequirementSpec;
        anyOfManaOutput(): $BlockPredicate$1;
        anyOfSourcePorts(): $BlockPredicate$1;
        anyOfFluidInput(): $BlockPredicate$1;
        chemicalInputTier(id: string): $PortTierRequirementSpec;
        sourceInputTier(id: string): $PortTierRequirementSpec;
        anyOfHeatPorts(): $BlockPredicate$1;
        anyOfEnergyPorts(): $BlockPredicate$1;
        chemicalOutputTier(id: string): $PortTierRequirementSpec;
        anyOfManaInput(): $BlockPredicate$1;
        outputPolicy(): $KubeJSApi$OutputPolicyValues;
        anyOfAirInput(): $BlockPredicate$1;
        airOutputTier(): $PortTierRequirementSpec;
        screenScope(): $KubeJSApi$ScreenScopeValues;
        anyOfItemOutput(): $BlockPredicate$1;
        modifierOperation(): $KubeJSApi$ModifierOperationValues;
        networkInterface(): $BlockPredicate$1;
        anyOfItemInput(): $BlockPredicate$1;
        anyOfStressInput(): $BlockPredicate$1;
        manaOutputTier(id: string): $PortTierRequirementSpec;
        anyOfUpgradeBus(): $BlockPredicate$1;
        anyOfFluidOutput(): $BlockPredicate$1;
        anyOfManaPorts(): $BlockPredicate$1;
        sourceOutputTier(id: string): $PortTierRequirementSpec;
        stressInputTier(): $PortTierRequirementSpec;
        anyOfSourceOutput(): $BlockPredicate$1;
        anyOfSourceInput(): $BlockPredicate$1;
        chemicalTagInput(tagId: string, amount: number, consumeChance: number): $CustomRecipeIo;
        chemicalTagInput(tagId: string, amount: number): $CustomRecipeIo;
        chemicalTagInput(tagId: $ResourceLocation_, amount: number): $CustomRecipeIo;
        chemicalTagInput(tagId: $ResourceLocation_, amount: number, consumeChance: number): $CustomRecipeIo;
        customRecipeIo(typeId: $ResourceLocation_, io: $RecipeModifier$IOType_, payload: $JsonElement_): $CustomRecipeIo;
        customRecipeIo(typeId: string, io: $RecipeModifier$IOType_, payload: $JsonElement_): $CustomRecipeIo;
        tagInput(tagId: string, count: number, consumeChance: number): $MachineIngredient;
        tagInput(tagId: string, count: number, consumeChance: number): $MachineIngredient;
        tagInput(tagId: $ResourceLocation_, count: number, consumeChance: number): $MachineIngredient;
        tagInput(tagId: $ResourceLocation_, count: number, consumeChance: number): $MachineIngredient;
        airInput(airPerTick: $Object, minPressure: $Object): $CustomRecipeIo;
        airInput(airPerTick: $Object, minPressure: $Object, consumeChance: number, tags: $List_<string>): $CustomRecipeIo;
        airInput(airPerTick: $Object, minPressure: $Object, chanceOrTags: $Object): $CustomRecipeIo;
        coupler(): $BlockPredicate$1;
        heatOutput(heat: number): $CustomRecipeIo;
        manaOutput(amount: number, chance: number): $CustomRecipeIo;
        manaOutput(amount: number): $CustomRecipeIo;
        manaInput(amount: number, consumeChance: number): $CustomRecipeIo;
        manaInput(amount: number): $CustomRecipeIo;
        recipeIO(): $KubeJSApi$RecipeIoValues;
        levelSlot(typeId: $ResourceLocation_): $LevelSlot;
        levelSlot(typeId: string): $LevelSlot;
        airOutput(airPerTick: $Object, chanceOrTags: $Object): $CustomRecipeIo;
        airOutput(airPerTick: $Object): $CustomRecipeIo;
        airOutput(airPerTick: $Object, chance: number, tags: $List_<string>): $CustomRecipeIo;
        parallelControllers(): $BlockPredicate$1;
        readableNumberFullBigDecimal(value: $BigDecimal): string;
        anyOfRadioactiveChemicalPorts(): $BlockPredicate$1;
        radioactiveChemicalOutputTier(): $PortTierRequirementSpec;
        radioactiveChemicalInputTier(): $PortTierRequirementSpec;
        manaInputRequirement(amount: number, consumeChance: number, tags: $List_<string>): $ManaRequirement;
        manaInputRequirement(amount: number): $ManaRequirement;
        manaInputRequirement(amount: number, chanceOrTags: $Object): $ManaRequirement;
        readableNumberExact(value: number): string;
        manaOutputRequirement(amount: number): $ManaRequirement;
        manaOutputRequirement(amount: number, chance: number, tags: $List_<string>): $ManaRequirement;
        manaOutputRequirement(amount: number, chanceOrTags: $Object): $ManaRequirement;
        readableNumberForSlot(value: number, scale: number, unit: string): string;
        readableNumberBigInt(value: $BigInteger): string;
        heatTemperatureInput(temperature: number): $CustomRecipeIo;
        airOutputRequirement(airPerTick: $Object, chance: number, tags: $List_<string>): $AirRequirement;
        airOutputRequirement(airPerTick: $Object): $AirRequirement;
        airOutputRequirement(airPerTick: $Object, chanceOrTags: $Object): $AirRequirement;
        fluidOutputRequirement(fluidId: string, amount: number, chance: number): $MachineRequirement;
        fluidOutputRequirement(fluidId: $ResourceLocation_, amount: number, chance: number): $MachineRequirement;
        fluidOutputRequirement(fluidId: $ResourceLocation_, amount: number, chance: number): $MachineRequirement;
        fluidOutputRequirement(fluidId: string, amount: number, chance: number): $MachineRequirement;
        readableNumberFullBigInt(value: $BigInteger): string;
        sourceInputRequirement(amount: number): $SourceRequirement;
        sourceInputRequirement(amount: number, chanceOrTags: $Object): $SourceRequirement;
        sourceInputRequirement(amount: number, consumeChance: number, tags: $List_<string>): $SourceRequirement;
        fluidInputRequirement(fluidId: string, amount: number): $MachineRequirement;
        fluidInputRequirement(fluidId: $ResourceLocation_, amount: number): $MachineRequirement;
        fluidInputRequirement(fluidId: string, amount: number): $MachineRequirement;
        fluidInputRequirement(fluidId: $ResourceLocation_, amount: number): $MachineRequirement;
        sourceOutputRequirement(amount: number, chance: number, tags: $List_<string>): $SourceRequirement;
        sourceOutputRequirement(amount: number): $SourceRequirement;
        sourceOutputRequirement(amount: number, chanceOrTags: $Object): $SourceRequirement;
        airInputRequirement(airPerTick: $Object, minPressure: $Object, chanceOrTags: $Object): $AirRequirement;
        airInputRequirement(airPerTick: $Object, minPressure: $Object): $AirRequirement;
        airInputRequirement(airPerTick: $Object, minPressure: $Object, consumeChance: number, tags: $List_<string>): $AirRequirement;
        itemInputRequirement(itemId: $ResourceLocation_, count: number): $MachineRequirement;
        itemInputRequirement(itemId: string, count: number): $MachineRequirement;
        itemInputRequirement(itemId: string, count: number): $MachineRequirement;
        itemInputRequirement(itemId: $ResourceLocation_, count: number): $MachineRequirement;
        smartInterfaceOutput(type: string, value: number): $SmartInterfaceRequirement;
        readableNumberBigDecimal(value: $BigDecimal): string;
        itemOutputRequirement(itemId: string, count: number, chance: number): $MachineRequirement;
        itemOutputRequirement(itemId: string, count: number, chance: number): $MachineRequirement;
        itemOutputRequirement(itemId: $ResourceLocation_, count: number, chance: number): $MachineRequirement;
        itemOutputRequirement(itemId: $ResourceLocation_, count: number, chance: number): $MachineRequirement;
        smartInterfaceInput(type: string, min: number, max: number): $SmartInterfaceRequirement;
        portTierRequirements(minimums: $List_<string>): $PortTierRequirementSpec;
        id(id: string): $ResourceLocation;
        state(blockStateId: string): $BlockPredicate$1;
        block(blockId: string): $BlockPredicate$1;
        block(blockId: $ResourceLocation_): $BlockPredicate$1;
        modifier(target: string, scope: string, value: boolean): $MachineModifier$Parallelized;
        modifier(target: string, scope: string, value: number, operation: string, chance: boolean): $MachineModifier$Numeric;
        tag(tagId: $ResourceLocation_): $BlockPredicate$1;
        tag(tagId: string): $BlockPredicate$1;
        networkInterfaces(context: $MachineBehaviorContext): $List<$NetworkInterfaceReference>;
        anyOf(...children: $BlockPredicate_[]): $BlockPredicate$1;
        any(): $BlockPredicate$1;
        itemInput(itemId: $ResourceLocation_, count: number, consumeChance: number): $MachineIngredient;
        itemInput(itemId: string, count: number, consumeChance: number): $MachineIngredient;
        itemInput(itemId: string, count: number, consumeChance: number): $MachineIngredient;
        itemInput(itemId: $ResourceLocation_, count: number, consumeChance: number): $MachineIngredient;
        fluidInput(fluidId: string, amount: number): $MachineIngredient;
        fluidInput(fluidId: $ResourceLocation_, amount: number): $MachineIngredient;
        fluidInput(fluidId: $ResourceLocation_, amount: number): $MachineIngredient;
        fluidInput(fluidId: string, amount: number): $MachineIngredient;
        constructor();
    }
    export class $MMCRKubeJS {
        getAPI(): $KubeJSApi;
        getValues(): $MMCRValues;
        constructor();
        get API(): $KubeJSApi;
        get values(): $MMCRValues;
    }
    export class $ControllerScreenTextEventJS implements $KubeEvent {
        controllerPos(): $BlockPos;
        appendAfter(scope: string, lineId: string, afterLineId: string, text: $Component_): void;
        remove(scope: string, lineId: string): void;
        append(scope: string, lineId: string, text: $Component_): void;
        replace(lineId: string, text: $Component_): void;
        machineId(): $ResourceLocation;
        appendAfterTranslatable(scope: string, lineId: string, afterLineId: string, key: string, ...args: $Object[]): void;
        replaceTranslatable(lineId: string, key: string, ...args: $Object[]): void;
        appendTranslatable(scope: string, lineId: string, key: string, ...args: $Object[]): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
    }
    export class $RecipeInformationEventJS implements $KubeEvent {
        addRecipeInfo(recipeId: string, translationKey: string, ...arg2: $Object[]): void;
        addRecipePoolInfo(poolId: string, translationKey: string, ...arg2: $Object[]): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
    }
    export class $MachineLevelBuilderJS extends $BuilderBase<$MachineLevel> {
        priority(priority: number): $MachineLevelBuilderJS;
        type(typeId: $ResourceLocation_): $MachineLevelBuilderJS;
        type(typeId: string): $MachineLevelBuilderJS;
        register(): $MachineLevelBuilderJS;
        state(blockStateId: string): $MachineLevelBuilderJS;
        modifier(modifier: $ModifierDefinition_): $MachineLevelBuilderJS;
        registerObject(): void;
        registryKey: $ResourceKey<$Registry<$MachineLevel>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
        constructor(id: string);
    }
    export class $MachineStructureBuilderJS extends $BuilderBase<$MachineStructureDefinition> {
        dataStorage(): $BlockPredicate$1;
        anyManaOutput(): $BlockPredicate$1;
        anySourcePorts(): $BlockPredicate$1;
        anyAirOutput(): $BlockPredicate$1;
        energyInputTier(id: string): $PortTierRequirementSpec;
        anyManaPorts(): $BlockPredicate$1;
        fluidInputTier(id: string): $PortTierRequirementSpec;
        anySourceOutput(): $BlockPredicate$1;
        anyManaInput(): $BlockPredicate$1;
        anyStressOutput(): $BlockPredicate$1;
        itemInputTier(id: string): $PortTierRequirementSpec;
        energyOutputTier(id: string): $PortTierRequirementSpec;
        anySourceInput(): $BlockPredicate$1;
        anyStressPorts(): $BlockPredicate$1;
        fluidOutputTier(id: string): $PortTierRequirementSpec;
        portRequirements(requirements: $PortRequirementSpec_): $MachineStructureBuilderJS;
        anyAirPorts(): $BlockPredicate$1;
        itemOutputTier(id: string): $PortTierRequirementSpec;
        anyAirInput(): $BlockPredicate$1;
        anyStressInput(): $BlockPredicate$1;
        anyOfChemicalPorts(): $BlockPredicate$1;
        anyOfAirOutput(): $BlockPredicate$1;
        anyOfAirPorts(): $BlockPredicate$1;
        manaInputTier(id: string): $PortTierRequirementSpec;
        anyOfStressOutput(): $BlockPredicate$1;
        heatInputTier(): $PortTierRequirementSpec;
        stressOutputTier(): $PortTierRequirementSpec;
        airInputTier(): $PortTierRequirementSpec;
        anyOfEnergyOutput(): $BlockPredicate$1;
        factoryController(): $BlockPredicate$1;
        anyOfEnergyInput(): $BlockPredicate$1;
        smartInterface(): $BlockPredicate$1;
        anyOfItemPorts(): $BlockPredicate$1;
        anyOfFluidPorts(): $BlockPredicate$1;
        anyOfStressPorts(): $BlockPredicate$1;
        heatOutputTier(): $PortTierRequirementSpec;
        anyOfManaOutput(): $BlockPredicate$1;
        anyOfSourcePorts(): $BlockPredicate$1;
        anyOfFluidInput(): $BlockPredicate$1;
        chemicalInputTier(id: string): $PortTierRequirementSpec;
        sourceInputTier(id: string): $PortTierRequirementSpec;
        anyOfHeatPorts(): $BlockPredicate$1;
        anyOfEnergyPorts(): $BlockPredicate$1;
        chemicalOutputTier(id: string): $PortTierRequirementSpec;
        anyOfManaInput(): $BlockPredicate$1;
        anyOfAirInput(): $BlockPredicate$1;
        airOutputTier(): $PortTierRequirementSpec;
        anyOfItemOutput(): $BlockPredicate$1;
        anyOfItemInput(): $BlockPredicate$1;
        anyOfStressInput(): $BlockPredicate$1;
        manaOutputTier(id: string): $PortTierRequirementSpec;
        anyOfUpgradeBus(): $BlockPredicate$1;
        anyOfFluidOutput(): $BlockPredicate$1;
        anyOfManaPorts(): $BlockPredicate$1;
        sourceOutputTier(id: string): $PortTierRequirementSpec;
        stressInputTier(): $PortTierRequirementSpec;
        anyOfSourceOutput(): $BlockPredicate$1;
        anyOfSourceInput(): $BlockPredicate$1;
        parallelControllers(): $BlockPredicate$1;
        dynamicPattern(pattern: $DynamicPatternSpec_): $MachineStructureBuilderJS;
        anyOfPort(...predicates: $BlockPredicate[]): $BlockPredicate$1;
        anyOfPort(...ids: string[]): $BlockPredicate$1;
        stateSensitive(): $MachineStructureBuilderJS;
        anyOfRadioactiveChemicalPorts(): $BlockPredicate$1;
        radioactiveChemicalOutputTier(): $PortTierRequirementSpec;
        radioactiveChemicalInputTier(): $PortTierRequirementSpec;
        portTierRequirements(requirements: $PortTierRequirementSpec_): $MachineStructureBuilderJS;
        patternAll(slices: $List_<$List_<string>>): $MachineStructureBuilderJS;
        pattern(...rows: string[]): $MachineStructureBuilderJS;
        set(symbol: string, value: $Object): $MachineStructureBuilderJS;
        build(): void;
        modifier(symbol: string, use: $ModifierUse_): $MachineStructureBuilderJS;
        controller(symbol: string): $MachineStructureBuilderJS;
        extension(consumer: $Consumer_<$MachineStructureStageBuilderJS>): $MachineStructureBuilderJS;
        fullStructure(ports: $PortRequirementSpec_, tiers: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_): $MachineStructureBuilderJS;
        fullStructure(pattern: $BlockArray_): $MachineStructureBuilderJS;
        fullStructure(pattern: $BlockArray_, ports: $PortRequirementSpec_, tiers: $PortTierRequirementSpec_, dynamicPatterns: $List_<$DynamicPatternSpec_>, requirements: $MachineStructureRequirements_): $MachineStructureBuilderJS;
        mainStructure(consumer: $Consumer_<$MachineStructureStageBuilderJS>): $MachineStructureBuilderJS;
        expandStructure(consumer: $Consumer_<$MachineStructureStageBuilderJS>): $MachineStructureBuilderJS;
        stateInsensitive(): $MachineStructureBuilderJS;
        registryKey: $ResourceKey<$Registry<$MachineStructureDefinition>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
        constructor(id: string);
    }
    export class $KubeJSApi$ModifierOperationValues {
        ADD: $RecipeModifier$Operation;
        MULTIPLY: $RecipeModifier$Operation;
        SUBTRACT: $RecipeModifier$Operation;
        DIVIDE: $RecipeModifier$Operation;
        constructor();
    }
    export class $MachineBuilderJS extends $BuilderBase<$MachineRegistration> {
        postServerTick(callback: $Consumer_<$MachineBehaviorContext>): $MachineBuilderJS;
        preServerTick(callback: $Consumer_<$MachineBehaviorContext>): $MachineBuilderJS;
        dataStorage(): $BlockPredicate$1;
        anyManaOutput(): $BlockPredicate$1;
        anySourcePorts(): $BlockPredicate$1;
        anyAirOutput(): $BlockPredicate$1;
        energyInputTier(id: string): $PortTierRequirementSpec;
        anyManaPorts(): $BlockPredicate$1;
        fluidInputTier(id: string): $PortTierRequirementSpec;
        anySourceOutput(): $BlockPredicate$1;
        anyManaInput(): $BlockPredicate$1;
        anyStressOutput(): $BlockPredicate$1;
        itemInputTier(id: string): $PortTierRequirementSpec;
        energyOutputTier(id: string): $PortTierRequirementSpec;
        anySourceInput(): $BlockPredicate$1;
        anyStressPorts(): $BlockPredicate$1;
        fluidOutputTier(id: string): $PortTierRequirementSpec;
        anyAirPorts(): $BlockPredicate$1;
        itemOutputTier(id: string): $PortTierRequirementSpec;
        anyAirInput(): $BlockPredicate$1;
        anyStressInput(): $BlockPredicate$1;
        anyOfChemicalPorts(): $BlockPredicate$1;
        anyOfAirOutput(): $BlockPredicate$1;
        anyOfAirPorts(): $BlockPredicate$1;
        manaInputTier(id: string): $PortTierRequirementSpec;
        anyOfStressOutput(): $BlockPredicate$1;
        heatInputTier(): $PortTierRequirementSpec;
        stressOutputTier(): $PortTierRequirementSpec;
        airInputTier(): $PortTierRequirementSpec;
        anyOfEnergyOutput(): $BlockPredicate$1;
        anyOfEnergyInput(): $BlockPredicate$1;
        smartInterface(): $BlockPredicate$1;
        smartInterface(type: string, defaultValue: number): $MachineBuilderJS$SmartInterfaceTypeBuilderJS;
        smartInterface(type: string, minValue: number, maxValue: number): $MachineBuilderJS$SmartInterfaceTypeBuilderJS;
        anyOfItemPorts(): $BlockPredicate$1;
        anyOfFluidPorts(): $BlockPredicate$1;
        anyOfStressPorts(): $BlockPredicate$1;
        heatOutputTier(): $PortTierRequirementSpec;
        anyOfManaOutput(): $BlockPredicate$1;
        anyOfSourcePorts(): $BlockPredicate$1;
        anyOfFluidInput(): $BlockPredicate$1;
        chemicalInputTier(id: string): $PortTierRequirementSpec;
        sourceInputTier(id: string): $PortTierRequirementSpec;
        anyOfHeatPorts(): $BlockPredicate$1;
        anyOfEnergyPorts(): $BlockPredicate$1;
        chemicalOutputTier(id: string): $PortTierRequirementSpec;
        anyOfManaInput(): $BlockPredicate$1;
        anyOfAirInput(): $BlockPredicate$1;
        airOutputTier(): $PortTierRequirementSpec;
        anyOfItemOutput(): $BlockPredicate$1;
        networkInterface(maxCount: number, maxConnections: number): $MachineBuilderJS;
        anyOfItemInput(): $BlockPredicate$1;
        anyOfStressInput(): $BlockPredicate$1;
        manaOutputTier(id: string): $PortTierRequirementSpec;
        anyOfFluidOutput(): $BlockPredicate$1;
        anyOfManaPorts(): $BlockPredicate$1;
        sourceOutputTier(id: string): $PortTierRequirementSpec;
        stressInputTier(): $PortTierRequirementSpec;
        anyOfSourceOutput(): $BlockPredicate$1;
        anyOfSourceInput(): $BlockPredicate$1;
        parallelControllers(): $BlockPredicate$1;
        anyOfPort(...predicates: $BlockPredicate[]): $BlockPredicate$1;
        anyOfPort(...ids: string[]): $BlockPredicate$1;
        recipePool(): $MachineBuilderJS;
        recipePool(...recipePoolIds: string[]): $MachineBuilderJS;
        controllerIdleOverlayTexture(texture: string): $MachineBuilderJS;
        controllerActiveOverlayTexture(texture: string): $MachineBuilderJS;
        chemicalOutputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        chemicalOutputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $MachineBuilderJS;
        fluidOutputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        fluidOutputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $MachineBuilderJS;
        chemicalInputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        chemicalInputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $MachineBuilderJS;
        fluidInputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        fluidInputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $MachineBuilderJS;
        itemOutputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $MachineBuilderJS;
        itemOutputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        controllerFrontTexture(texture: string): $MachineBuilderJS;
        controllerFrontTexture(texture: $ResourceLocation_): $MachineBuilderJS;
        controllerBottomTexture(texture: $ResourceLocation_): $MachineBuilderJS;
        controllerBottomTexture(texture: string): $MachineBuilderJS;
        controllerTopTexture(texture: string): $MachineBuilderJS;
        controllerTopTexture(texture: $ResourceLocation_): $MachineBuilderJS;
        controllerBaseTexture(textureId: string): $MachineBuilderJS;
        controllerBaseTexture(textureId: $ResourceLocation_): $MachineBuilderJS;
        shareSmartInterface(share: boolean): $MachineBuilderJS;
        shareSmartInterface(): $MachineBuilderJS;
        smartInterfaceBlock(): $BlockPredicate$1;
        chemicalInputByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        itemInputByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        fluidInputByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        heatInputByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        allowMultithreading(): $MachineBuilderJS;
        allowMultithreading(allow: boolean): $MachineBuilderJS;
        chemicalOutputByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        durationByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        durationByInterface(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $MachineBuilderJS;
        allowVerticalFacing(): $MachineBuilderJS;
        allowVerticalFacing(allow: boolean): $MachineBuilderJS;
        fullyRotationallySymmetric(symmetric: boolean): $MachineBuilderJS;
        fullyRotationallySymmetric(): $MachineBuilderJS;
        allowNetworkMachine(machineId: $ResourceLocation_): $MachineBuilderJS;
        allowNetworkMachine(machineId: string): $MachineBuilderJS;
        itemInputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $MachineBuilderJS;
        itemInputChanceByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        formedPortBaseTexture(textureId: string): $MachineBuilderJS;
        formedPortBaseTexture(textureId: $ResourceLocation_): $MachineBuilderJS;
        fluidOutputByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        controllerSideTexture(texture: string): $MachineBuilderJS;
        controllerSideTexture(texture: $ResourceLocation_): $MachineBuilderJS;
        requireVerticalFacing(): $MachineBuilderJS;
        requireVerticalFacing(required: boolean): $MachineBuilderJS;
        itemOutputByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        expandableStructure(expandableStructure: boolean): $MachineBuilderJS;
        expandableStructure(): $MachineBuilderJS;
        heatOutputByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        anyOfRadioactiveChemicalPorts(): $BlockPredicate$1;
        radioactiveChemicalOutputTier(): $PortTierRequirementSpec;
        radioactiveChemicalInputTier(): $PortTierRequirementSpec;
        controllerSpec(controllerSpec: $MachineControllerSpec_): $MachineBuilderJS;
        factoryThreads(factoryThreads: number): $MachineBuilderJS;
        allowModifiers(allow: boolean): $MachineBuilderJS;
        allowModifiers(): $MachineBuilderJS;
        allowParallelism(): $MachineBuilderJS;
        allowParallelism(allow: boolean): $MachineBuilderJS;
        runningSound(soundId: $ResourceLocation_): $MachineBuilderJS;
        runningSound(soundId: string): $MachineBuilderJS;
        controllerTextures(front: $ResourceLocation_, side: $ResourceLocation_, top: $ResourceLocation_, bottom: $ResourceLocation_): $MachineBuilderJS;
        controllerTextures(front: string, side: string, top: string, bottom: string): $MachineBuilderJS;
        controllerTextures(front: string, otherFive: string): $MachineBuilderJS;
        controllerTextures(front: $ResourceLocation_, otherFive: $ResourceLocation_): $MachineBuilderJS;
        requestFailed(requestId: $ResourceLocation_, failure: $RequestFailed_): $MachineBuilderJS;
        requestFailed(requestId: string, failure: $RequestFailed_): $MachineBuilderJS;
        maxParallelism(maxParallelism: number): $MachineBuilderJS;
        tickBehavior(builder: $Consumer_<$MachineBehaviorBuilderJS>): $MachineBuilderJS;
        controllerTooltip(...lines: string[]): $MachineBuilderJS;
        energyByInterface(type: string, min: number, max: number, atMin: number, atMax: number): $MachineBuilderJS;
        energyByInterface(type: string, min: number, max: number, atMin: number, atMax: number, operation: $RecipeModifier$Operation_): $MachineBuilderJS;
        finishSound(soundId: string): $MachineBuilderJS;
        finishSound(soundId: $ResourceLocation_): $MachineBuilderJS;
        machineBasicBlock(blockId: string): $MachineBuilderJS;
        machineBasicBlock(blockId: $ResourceLocation_): $MachineBuilderJS;
        requestProcess(requestId: string, process: $RequestProcess_): $MachineBuilderJS;
        requestProcess(requestId: $ResourceLocation_, process: $RequestProcess_): $MachineBuilderJS;
        maxParallelAmount(amount: number): $MachineBuilderJS;
        recipeBehavior(builder: $Consumer_<$MachineBehaviorBuilderJS>): $MachineBuilderJS;
        module(module: boolean): $MachineBuilderJS;
        module(): $MachineBuilderJS;
        host(...moduleIds: string[]): $MachineBuilderJS;
        host(): $MachineBuilderJS;
        register(): $MachineBuilderJS;
        displayNameKey(key: string): $MachineBuilderJS;
        registerObject(): void;
        /**
         * @deprecated
         */
        localizedName(name: string): $MachineBuilderJS;
        role(role: string): $MachineBuilderJS;
        appearance(machineBasicBlock: string): $MachineBuilderJS;
        appearance(machineBasicBlock: $ResourceLocation_): $MachineBuilderJS;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$MachineRegistration>>;
        constructor(id: string);
        constructor(id: $ResourceLocation_);
    }
    export class $MachineBuilderJS$SmartInterfaceTypeBuilderJS {
        priority(priority: number): $MachineBuilderJS$SmartInterfaceTypeBuilderJS;
        end(): $MachineBuilderJS;
        valueType(valueType: string): $MachineBuilderJS$SmartInterfaceTypeBuilderJS;
    }
    export class $MachineStructureStageBuilderJS extends $BuilderBase<$MachineStructureDefinition$Declaration> {
        anyManaOutput(): $BlockPredicate$1;
        anySourcePorts(): $BlockPredicate$1;
        anyAirOutput(): $BlockPredicate$1;
        energyInputTier(id: string): $PortTierRequirementSpec;
        anyManaPorts(): $BlockPredicate$1;
        fluidInputTier(id: string): $PortTierRequirementSpec;
        anySourceOutput(): $BlockPredicate$1;
        anyManaInput(): $BlockPredicate$1;
        anyStressOutput(): $BlockPredicate$1;
        itemInputTier(id: string): $PortTierRequirementSpec;
        energyOutputTier(id: string): $PortTierRequirementSpec;
        anySourceInput(): $BlockPredicate$1;
        anyStressPorts(): $BlockPredicate$1;
        fluidOutputTier(id: string): $PortTierRequirementSpec;
        portRequirements(requirements: $PortRequirementSpec_): $MachineStructureStageBuilderJS;
        anyAirPorts(): $BlockPredicate$1;
        itemOutputTier(id: string): $PortTierRequirementSpec;
        anyAirInput(): $BlockPredicate$1;
        anyStressInput(): $BlockPredicate$1;
        anyOfChemicalPorts(): $BlockPredicate$1;
        anyOfAirOutput(): $BlockPredicate$1;
        anyOfAirPorts(): $BlockPredicate$1;
        manaInputTier(id: string): $PortTierRequirementSpec;
        anyOfStressOutput(): $BlockPredicate$1;
        heatInputTier(): $PortTierRequirementSpec;
        stressOutputTier(): $PortTierRequirementSpec;
        airInputTier(): $PortTierRequirementSpec;
        anyOfEnergyOutput(): $BlockPredicate$1;
        factoryController(): $BlockPredicate$1;
        anyOfEnergyInput(): $BlockPredicate$1;
        smartInterface(): $BlockPredicate$1;
        anyOfItemPorts(): $BlockPredicate$1;
        anyOfFluidPorts(): $BlockPredicate$1;
        anyOfStressPorts(): $BlockPredicate$1;
        heatOutputTier(): $PortTierRequirementSpec;
        anyOfManaOutput(): $BlockPredicate$1;
        anyOfSourcePorts(): $BlockPredicate$1;
        anyOfFluidInput(): $BlockPredicate$1;
        chemicalInputTier(id: string): $PortTierRequirementSpec;
        sourceInputTier(id: string): $PortTierRequirementSpec;
        anyOfHeatPorts(): $BlockPredicate$1;
        anyOfEnergyPorts(): $BlockPredicate$1;
        chemicalOutputTier(id: string): $PortTierRequirementSpec;
        anyOfManaInput(): $BlockPredicate$1;
        anyOfAirInput(): $BlockPredicate$1;
        airOutputTier(): $PortTierRequirementSpec;
        anyOfItemOutput(): $BlockPredicate$1;
        anyOfItemInput(): $BlockPredicate$1;
        anyOfStressInput(): $BlockPredicate$1;
        manaOutputTier(id: string): $PortTierRequirementSpec;
        anyOfUpgradeBus(): $BlockPredicate$1;
        anyOfFluidOutput(): $BlockPredicate$1;
        anyOfManaPorts(): $BlockPredicate$1;
        sourceOutputTier(id: string): $PortTierRequirementSpec;
        stressInputTier(): $PortTierRequirementSpec;
        anyOfSourceOutput(): $BlockPredicate$1;
        anyOfSourceInput(): $BlockPredicate$1;
        parallelControllers(): $BlockPredicate$1;
        dynamicPattern(pattern: $DynamicPatternSpec_): $MachineStructureStageBuilderJS;
        anyOfPort(...predicates: $BlockPredicate[]): $BlockPredicate$1;
        anyOfPort(...ids: string[]): $BlockPredicate$1;
        anyOfRadioactiveChemicalPorts(): $BlockPredicate$1;
        radioactiveChemicalOutputTier(): $PortTierRequirementSpec;
        radioactiveChemicalInputTier(): $PortTierRequirementSpec;
        portTierRequirements(requirements: $PortTierRequirementSpec_): $MachineStructureStageBuilderJS;
        patternAll(slices: $List_<$List_<string>>): $MachineStructureStageBuilderJS;
        pattern(...rows: string[]): $MachineStructureStageBuilderJS;
        set(symbol: string, value: $Object): $MachineStructureStageBuilderJS;
        build(): $MachineStructureDefinition$Declaration;
        modifier(symbol: string, use: $ModifierUse_): $MachineStructureStageBuilderJS;
        controller(symbol: string): $MachineStructureStageBuilderJS;
        registryKey: $ResourceKey<$Registry<$MachineStructureDefinition$Declaration>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: string);
        constructor(id: $ResourceLocation_);
    }
}
