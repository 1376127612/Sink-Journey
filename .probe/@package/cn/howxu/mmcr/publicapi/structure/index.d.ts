import { $TagKey } from "@package/net/minecraft/tags";
import { $Consumer_, $Supplier } from "@package/java/util/function";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IoDirection_, $IoDirection } from "@package/cn/howxu/mmcr/publicapi/recipe";
import { $Enum } from "@package/java/lang";
import { $List, $Map_, $Map, $List_, $OptionalInt } from "@package/java/util";
export * as level from "@package/cn/howxu/mmcr/publicapi/structure/level";

declare module "@package/cn/howxu/mmcr/publicapi/structure" {
    export class $BlockCondition {
    }
    export interface $BlockCondition {
        block(): ($Block) | undefined;
        tag(): ($TagKey<$Block>) | undefined;
        isAir(): boolean;
        blockState(): ($BlockState) | undefined;
        isAny(): boolean;
        blockSupplier(): ($Supplier<$Block>) | undefined;
        alternatives(): $List<$BlockCondition>;
        isMachineCoupler(): boolean;
        isNetworkInterface(): boolean;
        get air(): boolean;
        get any(): boolean;
        get machineCoupler(): boolean;
        get networkInterface(): boolean;
    }
    export class $StructureConstraints$Builder {
    }
    export interface $StructureConstraints$Builder {
        build(): $StructureConstraints;
        modifier(symbol: string, modifierId: $ResourceLocation_): $StructureConstraints$Builder;
        modifier(symbol: string, modifierId: $ResourceLocation_, replacement: $BlockCondition): $StructureConstraints$Builder;
        levelSlot(symbol: string, typeId: $ResourceLocation_): $StructureConstraints$Builder;
    }
    export class $PatternDraft {
    }
    export interface $PatternDraft {
        pattern(...rows: string[]): $PatternDraft;
        layer(...rows: string[]): $PatternDraft;
        build(): $PatternSpec;
        where(symbol: string, condition: $BlockCondition): $PatternDraft;
        controller(symbol: string): $PatternDraft;
    }
    export class $StructureStageSpec$Kind extends $Enum<$StructureStageSpec$Kind> {
        static values(): $StructureStageSpec$Kind[];
        static valueOf(name: string): $StructureStageSpec$Kind;
        static EXPANSION: $StructureStageSpec$Kind;
        static EXTENSION: $StructureStageSpec$Kind;
        static FULL: $StructureStageSpec$Kind;
    }
    /**
     * Values that may be interpreted as {@link $StructureStageSpec$Kind}.
     */
    export type $StructureStageSpec$Kind_ = "full" | "expansion" | "extension";
    export class $PortTierLimits$ChemicalTier extends $Enum<$PortTierLimits$ChemicalTier> {
        static values(): $PortTierLimits$ChemicalTier[];
        static valueOf(name: string): $PortTierLimits$ChemicalTier;
        id(): string;
        static ELITE: $PortTierLimits$ChemicalTier;
        static ULTIMATE: $PortTierLimits$ChemicalTier;
        static BASIC: $PortTierLimits$ChemicalTier;
        static ADVANCED: $PortTierLimits$ChemicalTier;
    }
    /**
     * Values that may be interpreted as {@link $PortTierLimits$ChemicalTier}.
     */
    export type $PortTierLimits$ChemicalTier_ = "basic" | "advanced" | "elite" | "ultimate";
    export class $StructureConstraints {
        static builder(): $StructureConstraints$Builder;
        static empty(): $StructureConstraints;
    }
    export interface $StructureConstraints {
        modifierReplacements(): $Map<string, $List<$StructureConstraints$ModifierPlacementView>>;
        levelSlots(): $Map<string, $ResourceLocation>;
    }
    export class $StructureStageSpec {
    }
    export interface $StructureStageSpec {
        pattern(): $PatternSpec;
        kind(): $StructureStageSpec$Kind;
        requirements(): $StructureConstraints;
        portRequirements(): $PortLimits;
        portTiers(): $PortTierLimits;
    }
    export class $PortTierLimits$ItemTier extends $Enum<$PortTierLimits$ItemTier> {
        static values(): $PortTierLimits$ItemTier[];
        static valueOf(name: string): $PortTierLimits$ItemTier;
        id(): string;
        static BIG: $PortTierLimits$ItemTier;
        static SMALL: $PortTierLimits$ItemTier;
        static LUDICROUS: $PortTierLimits$ItemTier;
        static TINY: $PortTierLimits$ItemTier;
        static REINFORCED: $PortTierLimits$ItemTier;
        static HUGE: $PortTierLimits$ItemTier;
        static NORMAL: $PortTierLimits$ItemTier;
    }
    /**
     * Values that may be interpreted as {@link $PortTierLimits$ItemTier}.
     */
    export type $PortTierLimits$ItemTier_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous";
    export class $PortTierLimits$RequirementView {
    }
    export interface $PortTierLimits$RequirementView {
        category(): $PortTierLimits$PortCategory;
        minTierId(): string;
        ioType(): $IoDirection;
        minTier(): number;
    }
    export class $PortLimits$CountRangeView {
    }
    export interface $PortLimits$CountRangeView {
        min(): number;
        max(): $OptionalInt;
    }
    export class $PortTierLimits$EnergyTier extends $Enum<$PortTierLimits$EnergyTier> {
        static values(): $PortTierLimits$EnergyTier[];
        static valueOf(name: string): $PortTierLimits$EnergyTier;
        id(): string;
        static BIG: $PortTierLimits$EnergyTier;
        static SMALL: $PortTierLimits$EnergyTier;
        static LUDICROUS: $PortTierLimits$EnergyTier;
        static TINY: $PortTierLimits$EnergyTier;
        static REINFORCED: $PortTierLimits$EnergyTier;
        static HUGE: $PortTierLimits$EnergyTier;
        static ULTIMATE: $PortTierLimits$EnergyTier;
        static NORMAL: $PortTierLimits$EnergyTier;
    }
    /**
     * Values that may be interpreted as {@link $PortTierLimits$EnergyTier}.
     */
    export type $PortTierLimits$EnergyTier_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous" | "ultimate";
    export class $StructureConstraints$ModifierPlacementView {
    }
    export interface $StructureConstraints$ModifierPlacementView {
        replacement(): $BlockCondition;
        modifierId(): $ResourceLocation;
    }
    export class $PatternSpec {
    }
    export interface $PatternSpec {
        depth(): number;
        layers(): $List<$List<string>>;
        width(): number;
        predicates(): $Map<string, $BlockCondition>;
        height(): number;
        controllerSymbol(): string;
    }
    export class $StructureSpec {
    }
    export interface $StructureSpec {
        machineId(): $ResourceLocation;
        stateSensitive(): boolean;
        stages(): $List<$StructureStageSpec>;
    }
    export class $PortTierLimits$FluidTier extends $Enum<$PortTierLimits$FluidTier> {
        static values(): $PortTierLimits$FluidTier[];
        static valueOf(name: string): $PortTierLimits$FluidTier;
        id(): string;
        static BIG: $PortTierLimits$FluidTier;
        static VACUUM: $PortTierLimits$FluidTier;
        static SMALL: $PortTierLimits$FluidTier;
        static LUDICROUS: $PortTierLimits$FluidTier;
        static TINY: $PortTierLimits$FluidTier;
        static REINFORCED: $PortTierLimits$FluidTier;
        static HUGE: $PortTierLimits$FluidTier;
        static NORMAL: $PortTierLimits$FluidTier;
    }
    /**
     * Values that may be interpreted as {@link $PortTierLimits$FluidTier}.
     */
    export type $PortTierLimits$FluidTier_ = "tiny" | "small" | "normal" | "reinforced" | "big" | "huge" | "ludicrous" | "vacuum";
    export class $PortLimits {
        static builder(): $PortLimits$Builder;
        static none(): $PortLimits;
    }
    export interface $PortLimits {
        requirements(): $Map<string, $PortLimits$CountRangeView>;
    }
    /**
     * Values that may be interpreted as {@link $PortLimits}.
     */
    export type $PortLimits_ = (() => $Map_<string, $PortLimits$CountRangeView>);
    export class $PortTierLimits$PortCategory extends $Enum<$PortTierLimits$PortCategory> {
        static values(): $PortTierLimits$PortCategory[];
        static valueOf(name: string): $PortTierLimits$PortCategory;
        static ITEM: $PortTierLimits$PortCategory;
        static HEAT: $PortTierLimits$PortCategory;
        static ENERGY: $PortTierLimits$PortCategory;
        static FLUID: $PortTierLimits$PortCategory;
        static MANA: $PortTierLimits$PortCategory;
        static RADIOACTIVE_CHEMICAL: $PortTierLimits$PortCategory;
        static SOURCE: $PortTierLimits$PortCategory;
        static AIR: $PortTierLimits$PortCategory;
        static STRESS: $PortTierLimits$PortCategory;
        static CHEMICAL: $PortTierLimits$PortCategory;
    }
    /**
     * Values that may be interpreted as {@link $PortTierLimits$PortCategory}.
     */
    export type $PortTierLimits$PortCategory_ = "item" | "fluid" | "energy" | "source" | "mana" | "chemical" | "radioactive_chemical" | "heat" | "stress" | "air";
    export class $PortLimits$Builder {
    }
    export interface $PortLimits$Builder {
        min(portId: string, min: number): $PortLimits$Builder;
        range(portId: string, min: number, max: number): $PortLimits$Builder;
        build(): $PortLimits;
    }
    export class $PortTierLimits {
        static builder(): $PortTierLimits$Builder;
        static combine(...declarations: $PortTierLimits_[]): $PortTierLimits;
        static item(id: string): $PortTierLimits;
        static item(tier: $PortTierLimits$ItemTier_, io: $IoDirection_): $PortTierLimits;
        static item(tier: $PortTierLimits$ItemTier_): $PortTierLimits;
        static none(): $PortTierLimits;
        static manaOutput(): $PortTierLimits;
        static manaOutput(id: string): $PortTierLimits;
        static airOutput(): $PortTierLimits;
        static heatOutput(): $PortTierLimits;
        static airInput(): $PortTierLimits;
        static manaInput(id: string): $PortTierLimits;
        static manaInput(): $PortTierLimits;
        static air(): $PortTierLimits;
        static air(io: $IoDirection_): $PortTierLimits;
        static fluid(tier: $PortTierLimits$FluidTier_, io: $IoDirection_): $PortTierLimits;
        static fluid(tier: $PortTierLimits$FluidTier_): $PortTierLimits;
        static fluid(id: string): $PortTierLimits;
        static heat(io: $IoDirection_): $PortTierLimits;
        static heat(): $PortTierLimits;
        static fluidOutput(tier: $PortTierLimits$FluidTier_): $PortTierLimits;
        static fluidOutput(id: string): $PortTierLimits;
        static chemical(tier: $PortTierLimits$ChemicalTier_): $PortTierLimits;
        static chemical(id: string): $PortTierLimits;
        static chemical(tier: $PortTierLimits$ChemicalTier_, io: $IoDirection_): $PortTierLimits;
        static energy(tier: $PortTierLimits$EnergyTier_): $PortTierLimits;
        static energy(tier: $PortTierLimits$EnergyTier_, io: $IoDirection_): $PortTierLimits;
        static energy(id: string): $PortTierLimits;
        static fluidInput(tier: $PortTierLimits$FluidTier_): $PortTierLimits;
        static fluidInput(id: string): $PortTierLimits;
        static itemInput(tier: $PortTierLimits$ItemTier_): $PortTierLimits;
        static itemInput(id: string): $PortTierLimits;
        static itemOutput(tier: $PortTierLimits$ItemTier_): $PortTierLimits;
        static itemOutput(id: string): $PortTierLimits;
        static chemicalInput(tier: $PortTierLimits$ChemicalTier_): $PortTierLimits;
        static chemicalInput(id: string): $PortTierLimits;
        static stressOutput(): $PortTierLimits;
        static sourceInput(): $PortTierLimits;
        static sourceInput(id: string): $PortTierLimits;
        static stressInput(): $PortTierLimits;
        static chemicalOutput(tier: $PortTierLimits$ChemicalTier_): $PortTierLimits;
        static chemicalOutput(id: string): $PortTierLimits;
        static energyInput(id: string): $PortTierLimits;
        static energyInput(tier: $PortTierLimits$EnergyTier_): $PortTierLimits;
        static sourceOutput(): $PortTierLimits;
        static sourceOutput(id: string): $PortTierLimits;
        static energyOutput(tier: $PortTierLimits$EnergyTier_): $PortTierLimits;
        static energyOutput(id: string): $PortTierLimits;
        static stress(): $PortTierLimits;
        static stress(io: $IoDirection_): $PortTierLimits;
        static radioactiveChemicalInput(): $PortTierLimits;
        static radioactiveChemicalOutput(): $PortTierLimits;
        static radioactiveChemical(io: $IoDirection_): $PortTierLimits;
        static radioactiveChemical(): $PortTierLimits;
        static heatInput(): $PortTierLimits;
    }
    export interface $PortTierLimits {
        requirements(): $List<$PortTierLimits$RequirementView>;
    }
    /**
     * Values that may be interpreted as {@link $PortTierLimits}.
     */
    export type $PortTierLimits_ = (() => $List_<$PortTierLimits$RequirementView>);
    export class $PortTierLimits$Builder {
    }
    export interface $PortTierLimits$Builder {
        build(): $PortTierLimits;
        anyManaOutput(): $PortTierLimits$Builder;
        anyManaInput(): $PortTierLimits$Builder;
        anyAirInput(): $PortTierLimits$Builder;
        anySourceOutput(): $PortTierLimits$Builder;
        anyStressInput(): $PortTierLimits$Builder;
        anySourceInput(): $PortTierLimits$Builder;
        anyStressOutput(): $PortTierLimits$Builder;
        anyAirOutput(): $PortTierLimits$Builder;
        anyChemicalInput(): $PortTierLimits$Builder;
        anyHeatInput(): $PortTierLimits$Builder;
        minItemInput(tier: $PortTierLimits$ItemTier_): $PortTierLimits$Builder;
        minFluidInput(tier: $PortTierLimits$FluidTier_): $PortTierLimits$Builder;
        anyItemInput(): $PortTierLimits$Builder;
        anyItemOutput(): $PortTierLimits$Builder;
        anyFluidInput(): $PortTierLimits$Builder;
        anyEnergyOutput(): $PortTierLimits$Builder;
        anyChemicalOutput(): $PortTierLimits$Builder;
        anyHeatOutput(): $PortTierLimits$Builder;
        minEnergyInput(tier: $PortTierLimits$EnergyTier_): $PortTierLimits$Builder;
        minEnergyOutput(tier: $PortTierLimits$EnergyTier_): $PortTierLimits$Builder;
        minFluidOutput(tier: $PortTierLimits$FluidTier_): $PortTierLimits$Builder;
        minChemicalOutput(tier: $PortTierLimits$ChemicalTier_): $PortTierLimits$Builder;
        minItemOutput(tier: $PortTierLimits$ItemTier_): $PortTierLimits$Builder;
        anyFluidOutput(): $PortTierLimits$Builder;
        anyEnergyInput(): $PortTierLimits$Builder;
        minChemicalInput(tier: $PortTierLimits$ChemicalTier_): $PortTierLimits$Builder;
        anyRadioactiveChemicalInput(): $PortTierLimits$Builder;
        anyRadioactiveChemicalOutput(): $PortTierLimits$Builder;
    }
    export class $StructureDraft {
    }
    export interface $StructureDraft {
        build(machineId: $ResourceLocation_): $StructureSpec;
        extension(configure: $Consumer_<$StructureStageDraft>): $StructureDraft;
        stateSensitive(): $StructureDraft;
        stateInsensitive(): $StructureDraft;
        fullStructure(configure: $Consumer_<$StructureStageDraft>): $StructureDraft;
        expandStructure(configure: $Consumer_<$StructureStageDraft>): $StructureDraft;
        singlePattern(configure: $Consumer_<$PatternDraft>): $StructureDraft;
    }
    export class $StructureStageDraft {
    }
    export interface $StructureStageDraft {
        pattern(configure: $Consumer_<$PatternDraft>): $StructureStageDraft;
        full(): $StructureStageDraft;
        build(): $StructureStageSpec;
        modifier(symbol: string, modifierId: $ResourceLocation_, replacement: $BlockCondition): $StructureStageDraft;
        extension(): $StructureStageDraft;
        expansion(): $StructureStageDraft;
        requirements(configure: $Consumer_<$StructureConstraints$Builder>): $StructureStageDraft;
        ports(configure: $Consumer_<$PortLimits$Builder>): $StructureStageDraft;
        portTiers(configure: $Consumer_<$PortTierLimits$Builder>): $StructureStageDraft;
    }
}
