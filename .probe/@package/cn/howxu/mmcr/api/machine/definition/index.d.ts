import { $CapabilitySnapshot_, $CapabilitySnapshot } from "@package/cn/howxu/mmcr/api/capability";
import { $CapabilityDisplay } from "@package/cn/howxu/mmcr/api/capability/presentation";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Set_, $Collection_, $List_, $Map } from "@package/java/util";
import { $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";
import { $StressState } from "@package/cn/howxu/mmcr/api/compat/create";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $IOType, $IOType_ } from "@package/cn/howxu/mmcr/util";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MachineControllerBlockEntity } from "@package/cn/howxu/mmcr/internal/tile";
import { $DataStorage$Transaction as $DataStorage$Transaction$1, $DataStorage } from "@package/cn/howxu/mmcr/api/data/view";
import { $ExecutionStatus, $ExecutionStatus_ } from "@package/cn/howxu/mmcr/api/capability/status";
import { $OutputPolicy_, $OutputSimulation, $OutputSimulation_ } from "@package/cn/howxu/mmcr/api/capability/plan";
import { $JadeText, $ControllerScreenText } from "@package/cn/howxu/mmcr/api/controller";
import { $MachineModifier } from "@package/cn/howxu/mmcr/api/machine/modifier";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CapabilityTickContext, $CapabilityTickPhase_ } from "@package/cn/howxu/mmcr/api/capability/tick";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $MachineOutput, $RecipeIoDeclaration_, $MachineRecipe } from "@package/cn/howxu/mmcr/api/recipe";
import { $AirState } from "@package/cn/howxu/mmcr/api/compat/pneumaticcraft";
import { $DataStorage as $DataStorage$1, $DataStorage$Transaction } from "@package/cn/howxu/mmcr/api/data";

declare module "@package/cn/howxu/mmcr/api/machine/definition" {
    export class $MachineIoView$HeatState extends $Record {
        temperature(): number;
        heat(): number;
        heatCapacity(): number;
        constructor(heat: number, temperature: number, heatCapacity: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineIoView$HeatState}.
     */
    export type $MachineIoView$HeatState_ = { heatCapacity?: number, temperature?: number, heat?: number,  } | [heatCapacity?: number, temperature?: number, heat?: number, ];
    export class $DisplayStack extends $Record {
        stack(): $ItemStack;
        static of(stack: $ItemStack_): $DisplayStack;
        static optional(stack: $ItemStack_): ($DisplayStack) | undefined;
        constructor(stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $DisplayStack}.
     */
    export type $DisplayStack_ = { stack?: $ItemStack_,  } | [stack?: $ItemStack_, ];
    export class $MachineLevel extends $Record {
        statePredicate(): $BlockPredicate;
        representative(): $DisplayStack;
        priority(): number;
        id(): $ResourceLocation;
        modifier(): $ModifierDefinition;
        typeId(): $ResourceLocation;
        constructor(id: $ResourceLocation_, typeId: $ResourceLocation_, priority: number, statePredicate: $BlockPredicate, representative: $DisplayStack_, modifier: $ModifierDefinition_);
    }
    /**
     * Values that may be interpreted as {@link $MachineLevel}.
     */
    export type $MachineLevel_ = { id?: $ResourceLocation_, statePredicate?: $BlockPredicate, representative?: $DisplayStack_, typeId?: $ResourceLocation_, priority?: number, modifier?: $ModifierDefinition_,  } | [id?: $ResourceLocation_, statePredicate?: $BlockPredicate, representative?: $DisplayStack_, typeId?: $ResourceLocation_, priority?: number, modifier?: $ModifierDefinition_, ];
    export class $RecipeTickContext extends $Record {
        requirements(): $List<$MachineRequirement>;
        totalTick(): number;
        machineContext(): $MachineBehaviorContext;
        capabilitySnapshot(): $CapabilitySnapshot;
        parallelism(): number;
        recipe(): $MachineRecipe;
        currentTick(): number;
        outputs(): $List<$MachineOutput>;
        constructor(recipe: $MachineRecipe, currentTick: number, totalTick: number, parallelism: number);
        constructor(machineContext: $MachineBehaviorContext, recipe: $MachineRecipe, currentTick: number, totalTick: number, parallelism: number, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>, capabilitySnapshot: $CapabilitySnapshot_);
        constructor(machineContext: $MachineBehaviorContext, recipe: $MachineRecipe, currentTick: number, totalTick: number, parallelism: number, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeTickContext}.
     */
    export type $RecipeTickContext_ = { machineContext?: $MachineBehaviorContext, currentTick?: number, outputs?: $List_<$MachineOutput>, totalTick?: number, requirements?: $List_<$MachineRequirement>, recipe?: $MachineRecipe, capabilitySnapshot?: $CapabilitySnapshot_, parallelism?: number,  } | [machineContext?: $MachineBehaviorContext, currentTick?: number, outputs?: $List_<$MachineOutput>, totalTick?: number, requirements?: $List_<$MachineRequirement>, recipe?: $MachineRecipe, capabilitySnapshot?: $CapabilitySnapshot_, parallelism?: number, ];
    export class $MachineIoPlan {
        simulate(): $MachineIoPlan$Simulation;
        addOutput(io: $RecipeIoDeclaration_): $MachineIoPlan;
        addOutput(io: $RecipeIoDeclaration_, policy: $OutputPolicy_): $MachineIoPlan;
        addInput(io: $RecipeIoDeclaration_): $MachineIoPlan;
        requirements(): $List<$MachineRequirement>;
        commit(transactionWrites: $Consumer_<$DataStorage$Transaction>): $MachineIoPlan$CommitResult;
        commit(): $MachineIoPlan$CommitResult;
        add(io: $RecipeIoDeclaration_): $MachineIoPlan;
        view(): $MachineIoView;
        outputSimulations(): $List<$OutputSimulation>;
        inputsSatisfied(): boolean;
        energySatisfied(): boolean;
        commitData(transactionWrites: $Consumer_<$DataStorage$Transaction$1>): $MachineIoPlan$CommitResult;
        constructor(capabilitySnapshot: $CapabilitySnapshot_);
    }
    export class $TickBehaviorContext extends $MachineBehaviorContext {
        capabilityTickContext(phase: $CapabilityTickPhase_): $CapabilityTickContext;
        factoryThreadCount(): number;
        parallelism(): number;
        smartInterfaceValue(name: string): (number) | undefined;
        smartInterfaceValues(): $Map<string, number>;
        ioPlan(): $MachineIoPlan;
        constructor(base: $MachineBehaviorContext, snapshot: $CapabilitySnapshot_);
        constructor(base: $MachineBehaviorContext, snapshot: $CapabilitySnapshot_, factoryThreadCount: number, parallelism: number);
    }
    export class $MachineBehaviorContext {
        gameTime(): number;
        dataStorage(): $DataStorage;
        controllerPos(): $BlockPos;
        jadeText(): $JadeText;
        ioView(): $MachineIoView;
        screenText(): $ControllerScreenText;
        isDue(period: number): boolean;
        dataStorageForRuntime(): $Object;
        countStructureBlocks(blockId: string): number;
        countStructureBlocks(blockId: $ResourceLocation_): number;
        countStructureBlocks(block: $Block_): number;
        upgradeItems(): $List<$ItemStack>;
        level(): $ServerLevel;
        controller(): $MachineControllerBlockEntity;
        machineId(): $ResourceLocation;
        constructor(controller: $MachineControllerBlockEntity, level: $ServerLevel, controllerPos: $BlockPos_, machineId: $ResourceLocation_, gameTime: number, screenText: $ControllerScreenText, dataStorage: $DataStorage$1, ioView: $MachineIoView, upgradeItems: $List_<$ItemStack_>, jadeText: $JadeText);
        constructor(controller: $MachineControllerBlockEntity, level: $ServerLevel, controllerPos: $BlockPos_, machineId: $ResourceLocation_, gameTime: number, screenText: $ControllerScreenText, dataStorage: $DataStorage$1, ioView: $MachineIoView, upgradeItems: $List_<$ItemStack_>);
        constructor(controller: $MachineControllerBlockEntity, level: $ServerLevel, controllerPos: $BlockPos_, machineId: $ResourceLocation_, gameTime: number, screenText: $ControllerScreenText, dataStorage: $DataStorage$1, ioView: $MachineIoView);
        constructor(controller: $MachineControllerBlockEntity, level: $ServerLevel, controllerPos: $BlockPos_, machineId: $ResourceLocation_, gameTime: number, screenText: $ControllerScreenText, dataStorage: $DataStorage$1);
        constructor(controller: $MachineControllerBlockEntity, level: $ServerLevel, controllerPos: $BlockPos_, machineId: $ResourceLocation_, gameTime: number, screenText: $ControllerScreenText);
    }
    export class $MachineIoPlan$CommitResult extends $Record {
        successful(): boolean;
        failure(): $ExecutionStatus;
        constructor(successful: boolean, failure: $ExecutionStatus_);
    }
    /**
     * Values that may be interpreted as {@link $MachineIoPlan$CommitResult}.
     */
    export type $MachineIoPlan$CommitResult_ = { successful?: boolean, failure?: $ExecutionStatus_,  } | [successful?: boolean, failure?: $ExecutionStatus_, ];
    export class $RecipeStartContext$ExecutionSnapshot extends $Record {
        requirements(): $List<$MachineRequirement>;
        duration(): number;
        outputs(): $List<$MachineOutput>;
        constructor(duration: number, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeStartContext$ExecutionSnapshot}.
     */
    export type $RecipeStartContext$ExecutionSnapshot_ = { requirements?: $List_<$MachineRequirement>, outputs?: $List_<$MachineOutput>, duration?: number,  } | [requirements?: $List_<$MachineRequirement>, outputs?: $List_<$MachineOutput>, duration?: number, ];
    export class $ModifierDefinition extends $Record {
        modifiers(): $List<$MachineModifier>;
        static of(target: string, scope: string, modifier: number, operation: string, affectsChance: boolean): $ModifierDefinition;
        static combine(...definitions: $ModifierDefinition_[]): $ModifierDefinition;
        static EMPTY: $ModifierDefinition;
        constructor(modifiers: $List_<$MachineModifier>);
    }
    /**
     * Values that may be interpreted as {@link $ModifierDefinition}.
     */
    export type $ModifierDefinition_ = { modifiers?: $List_<$MachineModifier>,  } | [modifiers?: $List_<$MachineModifier>, ];
    export class $PortTiers extends $Record {
        requirements(): $List<$PortTiers$Requirement>;
        static builder(): $PortTiers$Builder;
        static combine(...declarations: $PortTiers_[]): $PortTiers;
        static none(): $PortTiers;
        constructor(requirements: $List_<$PortTiers$Requirement_>);
    }
    /**
     * Values that may be interpreted as {@link $PortTiers}.
     */
    export type $PortTiers_ = { requirements?: $List_<$PortTiers$Requirement_>,  } | [requirements?: $List_<$PortTiers$Requirement_>, ];
    export class $MachineBehavior {
    }
    export interface $MachineBehavior {
        kind(): $MachineBehavior$Kind;
    }
    /**
     * Values that may be interpreted as {@link $MachineBehavior}.
     */
    export type $MachineBehavior_ = (() => $MachineBehavior$Kind_);
    export class $MachineBehavior$Kind extends $Enum<$MachineBehavior$Kind> {
        static values(): $MachineBehavior$Kind[];
        static valueOf(name: string): $MachineBehavior$Kind;
        static RECIPE: $MachineBehavior$Kind;
        static TICK: $MachineBehavior$Kind;
    }
    /**
     * Values that may be interpreted as {@link $MachineBehavior$Kind}.
     */
    export type $MachineBehavior$Kind_ = "recipe" | "tick";
    export class $PortTiers$FluidTier extends $Enum<$PortTiers$FluidTier> {
        static values(): $PortTiers$FluidTier[];
        static valueOf(name: string): $PortTiers$FluidTier;
        id(): string;
        static BIG: $PortTiers$FluidTier;
        static VACUUM: $PortTiers$FluidTier;
        static SMALL: $PortTiers$FluidTier;
        static LUDICROUS: $PortTiers$FluidTier;
        static TINY: $PortTiers$FluidTier;
        static REINFORCED: $PortTiers$FluidTier;
        static HUGE: $PortTiers$FluidTier;
        static NORMAL: $PortTiers$FluidTier;
    }
    /**
     * Values that may be interpreted as {@link $PortTiers$FluidTier}.
     */
    export type $PortTiers$FluidTier_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous" | "vacuum";
    export class $BlockPredicate {
        alternatives(): $List<$BlockPredicate>;
        static machineCoupler(): $BlockPredicate;
        static coupler(): $BlockPredicate;
        isMachineCoupler(): boolean;
        static deferredBlock(blockSupplier: $Supplier_<$Block>): $BlockPredicate;
        static state(id: string): $BlockPredicate;
        static state(id: $ResourceLocation_): $BlockPredicate;
        static block(id: $ResourceLocation_): $BlockPredicate;
        static block(id: string): $BlockPredicate;
        block(): ($Block) | undefined;
        static block(block: $Block_): $BlockPredicate;
        tag(): ($TagKey<$Block>) | undefined;
        static tag(tag: $TagKey_<$Block>): $BlockPredicate;
        static anyOf(predicates: $Collection_<$BlockPredicate>): $BlockPredicate;
        static any(...predicates: $BlockPredicate[]): $BlockPredicate;
        blockState(): ($BlockState) | undefined;
        static blockState(state: $BlockState_): $BlockPredicate;
        blockSupplier(): ($Supplier<$Block>) | undefined;
    }
    export class $PortTiers$ChemicalTier extends $Enum<$PortTiers$ChemicalTier> {
        detectionTier(): number;
        static values(): $PortTiers$ChemicalTier[];
        static valueOf(name: string): $PortTiers$ChemicalTier;
        id(): string;
        static ELITE: $PortTiers$ChemicalTier;
        static ULTIMATE: $PortTiers$ChemicalTier;
        static BASIC: $PortTiers$ChemicalTier;
        static ADVANCED: $PortTiers$ChemicalTier;
    }
    /**
     * Values that may be interpreted as {@link $PortTiers$ChemicalTier}.
     */
    export type $PortTiers$ChemicalTier_ = "basic" | "advanced" | "elite" | "ultimate";
    export class $PortTiers$EnergyTier extends $Enum<$PortTiers$EnergyTier> {
        static values(): $PortTiers$EnergyTier[];
        static valueOf(name: string): $PortTiers$EnergyTier;
        id(): string;
        static BIG: $PortTiers$EnergyTier;
        static SMALL: $PortTiers$EnergyTier;
        static LUDICROUS: $PortTiers$EnergyTier;
        static TINY: $PortTiers$EnergyTier;
        static REINFORCED: $PortTiers$EnergyTier;
        static HUGE: $PortTiers$EnergyTier;
        static ULTIMATE: $PortTiers$EnergyTier;
        static NORMAL: $PortTiers$EnergyTier;
    }
    /**
     * Values that may be interpreted as {@link $PortTiers$EnergyTier}.
     */
    export type $PortTiers$EnergyTier_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous" | "ultimate";
    export class $PortTiers$Builder {
        anyManaOutput(): $PortTiers$Builder;
        anyAirOutput(): $PortTiers$Builder;
        anySourceOutput(): $PortTiers$Builder;
        anyManaInput(): $PortTiers$Builder;
        anyStressOutput(): $PortTiers$Builder;
        anySourceInput(): $PortTiers$Builder;
        anyAirInput(): $PortTiers$Builder;
        anyStressInput(): $PortTiers$Builder;
        build(): $PortTiers;
        anyItemInput(): $PortTiers$Builder;
        anyItemOutput(): $PortTiers$Builder;
        anyEnergyOutput(): $PortTiers$Builder;
        anyHeatInput(): $PortTiers$Builder;
        anyChemicalInput(): $PortTiers$Builder;
        anyChemicalOutput(): $PortTiers$Builder;
        anyEnergyInput(): $PortTiers$Builder;
        anyFluidOutput(): $PortTiers$Builder;
        anyFluidInput(): $PortTiers$Builder;
        anyHeatOutput(): $PortTiers$Builder;
        anyRadioactiveChemicalInput(): $PortTiers$Builder;
        anyRadioactiveChemicalOutput(): $PortTiers$Builder;
        minItemOutput(size: $PortTiers$ItemTier_): $PortTiers$Builder;
        minFluidInput(size: $PortTiers$FluidTier_): $PortTiers$Builder;
        minFluidOutput(size: $PortTiers$FluidTier_): $PortTiers$Builder;
        minEnergyInput(size: $PortTiers$EnergyTier_): $PortTiers$Builder;
        minEnergyOutput(size: $PortTiers$EnergyTier_): $PortTiers$Builder;
        minChemicalInput(size: $PortTiers$ChemicalTier_): $PortTiers$Builder;
        minChemicalOutput(size: $PortTiers$ChemicalTier_): $PortTiers$Builder;
        minItemInput(size: $PortTiers$ItemTier_): $PortTiers$Builder;
        constructor();
    }
    export class $PortTiers$PortCategory extends $Enum<$PortTiers$PortCategory> {
        static values(): $PortTiers$PortCategory[];
        static valueOf(name: string): $PortTiers$PortCategory;
        static ITEM: $PortTiers$PortCategory;
        static HEAT: $PortTiers$PortCategory;
        static ENERGY: $PortTiers$PortCategory;
        static FLUID: $PortTiers$PortCategory;
        static MANA: $PortTiers$PortCategory;
        static RADIOACTIVE_CHEMICAL: $PortTiers$PortCategory;
        static SOURCE: $PortTiers$PortCategory;
        static AIR: $PortTiers$PortCategory;
        static STRESS: $PortTiers$PortCategory;
        static CHEMICAL: $PortTiers$PortCategory;
    }
    /**
     * Values that may be interpreted as {@link $PortTiers$PortCategory}.
     */
    export type $PortTiers$PortCategory_ = "item" | "fluid" | "energy" | "source" | "mana" | "chemical" | "radioactive_chemical" | "heat" | "stress" | "air";
    export class $PortTiers$ItemTier extends $Enum<$PortTiers$ItemTier> {
        static values(): $PortTiers$ItemTier[];
        static valueOf(name: string): $PortTiers$ItemTier;
        id(): string;
        static BIG: $PortTiers$ItemTier;
        static SMALL: $PortTiers$ItemTier;
        static LUDICROUS: $PortTiers$ItemTier;
        static TINY: $PortTiers$ItemTier;
        static REINFORCED: $PortTiers$ItemTier;
        static HUGE: $PortTiers$ItemTier;
        static NORMAL: $PortTiers$ItemTier;
    }
    /**
     * Values that may be interpreted as {@link $PortTiers$ItemTier}.
     */
    export type $PortTiers$ItemTier_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous";
    export class $RecipeStartContext {
        requirements(): $List<$MachineRequirement>;
        requestedParallelism(): number;
        effectiveParallelism(): number;
        replaceExactItemInputCount(item: $Item_, expectedCount: number, replacementCount: number): boolean;
        machineContext(): $MachineBehaviorContext;
        setRequirements(requirements: $List_<$MachineRequirement>): void;
        snapshot(): $RecipeStartContext$ExecutionSnapshot;
        duration(): number;
        cancel(): void;
        cancelled(): boolean;
        recipe(): $MachineRecipe;
        setDuration(duration: number): void;
        setOutputs(outputs: $List_<$MachineOutput>): void;
        recipeId(): $ResourceLocation;
        outputs(): $List<$MachineOutput>;
        constructor(recipe: $MachineRecipe, requestedParallelism: number, effectiveParallelism: number);
        constructor(machineContext: $MachineBehaviorContext, recipe: $MachineRecipe, requestedParallelism: number, effectiveParallelism: number, duration: number, requirements: $List_<$MachineRequirement>, outputs: $List_<$MachineOutput>);
    }
    export class $MachineIoView$ResourceAmount<R> extends $Record {
        resource(): R;
        amount(): number;
        constructor(resource: R, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineIoView$ResourceAmount}.
     */
    export type $MachineIoView$ResourceAmount_<R> = { amount?: number, resource?: any,  } | [amount?: number, resource?: any, ];
    export class $MachineIoView {
        fluidAmount(ingredient: $FluidIngredient_): number;
        itemInputs(): $List<$MachineIoView$ResourceAmount<$ItemStack>>;
        fluidInputs(): $List<$MachineIoView$ResourceAmount<$FluidStack>>;
        displays(): $List<$CapabilityDisplay>;
        chemicalAmount(chemicalId: $ResourceLocation_): number;
        chemicalAmount(chemicalId: string): number;
        energyInput(): number;
        sourceInput(): number;
        manaInput(): number;
        itemAmount(ingredient: $Ingredient_): number;
        stressInputs(): $List<$StressState>;
        stressOutputs(): $List<$StressState>;
        chemicalInputs(): $List<$MachineIoView$ResourceAmount<$ResourceLocation>>;
        airInputs(): $List<$AirState>;
        airOutputs(): $List<$AirState>;
        manaOutputCapacity(): number;
        heatOutputs(): $List<$MachineIoView$HeatState>;
        itemOutputCapacity(stack: $ItemStack_): number;
        chemicalTagAmount(tagId: string): number;
        chemicalTagAmount(tagId: $ResourceLocation_): number;
        chemicalOutputCapacity(chemicalId: string): number;
        chemicalOutputCapacity(chemicalId: $ResourceLocation_): number;
        sourceOutputCapacity(): number;
        fluidOutputCapacity(stack: $FluidStack_): number;
        smartInterfaceValue(name: string): (number) | undefined;
        smartInterfaceValues(): $Map<string, number>;
        energyOutputCapacity(): number;
        heatInputs(): $List<$MachineIoView$HeatState>;
        forTags(requiredTags: $Set_<string>): $MachineIoView;
        constructor(snapshot: $CapabilitySnapshot_);
    }
    export class $PortTiers$Requirement extends $Record {
        ioType(): $IOType;
        minTierId(): string;
        category(): $PortTiers$PortCategory;
        minTier(): number;
        constructor(category: $PortTiers$PortCategory_, ioType: $IOType_, minTier: number, minTierId: string);
    }
    /**
     * Values that may be interpreted as {@link $PortTiers$Requirement}.
     */
    export type $PortTiers$Requirement_ = { minTier?: number, ioType?: $IOType_, minTierId?: string, category?: $PortTiers$PortCategory_,  } | [minTier?: number, ioType?: $IOType_, minTierId?: string, category?: $PortTiers$PortCategory_, ];
    export class $ModifierUse extends $Record {
        modifierId(): $ResourceLocation;
        static of(modifierId: $ResourceLocation_, replacement: $BlockPredicate): $ModifierUse;
        replacement(): $BlockPredicate;
        constructor(modifierId: $ResourceLocation_, replacement: $BlockPredicate);
    }
    /**
     * Values that may be interpreted as {@link $ModifierUse}.
     */
    export type $ModifierUse_ = { replacement?: $BlockPredicate, modifierId?: $ResourceLocation_,  } | [replacement?: $BlockPredicate, modifierId?: $ResourceLocation_, ];
    export class $MachineIoPlan$Simulation extends $Record {
        failure(): $ExecutionStatus;
        outputs(): $List<$OutputSimulation>;
        inputsSatisfied(): boolean;
        energySatisfied(): boolean;
        constructor(inputsSatisfied: boolean, energySatisfied: boolean, outputs: $List_<$OutputSimulation_>, failure: $ExecutionStatus_);
    }
    /**
     * Values that may be interpreted as {@link $MachineIoPlan$Simulation}.
     */
    export type $MachineIoPlan$Simulation_ = { failure?: $ExecutionStatus_, energySatisfied?: boolean, outputs?: $List_<$OutputSimulation_>, inputsSatisfied?: boolean,  } | [failure?: $ExecutionStatus_, energySatisfied?: boolean, outputs?: $List_<$OutputSimulation_>, inputsSatisfied?: boolean, ];
    export class $RecipeFinishContext {
        requestedParallelism(): number;
        effectiveParallelism(): number;
        machineContext(): $MachineBehaviorContext;
        outputsDiscarded(): boolean;
        discardOutputs(): void;
        cancel(): void;
        cancelled(): boolean;
        recipe(): $MachineRecipe;
        setOutputs(outputs: $List_<$MachineOutput>): void;
        recipeId(): $ResourceLocation;
        outputs(): $List<$MachineOutput>;
        constructor(recipe: $MachineRecipe, requestedParallelism: number, effectiveParallelism: number, outputs: $List_<$MachineOutput>);
        constructor(machineContext: $MachineBehaviorContext, recipe: $MachineRecipe, requestedParallelism: number, effectiveParallelism: number, outputs: $List_<$MachineOutput>);
    }
}
