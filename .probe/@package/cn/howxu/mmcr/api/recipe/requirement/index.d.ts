import { $MachineCapability } from "@package/cn/howxu/mmcr/api/capability";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeModifier, $RecipeModifier$IOType_, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $RecipeSyncCodec, $MachineIngredient_, $RecipeIoDeclaration } from "@package/cn/howxu/mmcr/api/recipe";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $FailureReason_ } from "@package/cn/howxu/mmcr/api/capability/status";
import { $PlanningContext, $RequirementPlan, $RequirementPlan_, $PlanningContext_ } from "@package/cn/howxu/mmcr/api/capability/plan";

declare module "@package/cn/howxu/mmcr/api/recipe/requirement" {
    export class $RequirementHandler$ResourceWakeup extends $Record {
        reason(): $RequirementHandler$WakeupReason;
        matches(failureReason: $FailureReason_): boolean;
        matches(failureReason: string): boolean;
        matcher(): $Predicate<$Object>;
        failureReasonIds(): $Set<$ResourceLocation>;
        constructor(failureReasonIds: $Set_<$ResourceLocation_>, reason: $RequirementHandler$WakeupReason_, matcher: $Predicate_<$Object>);
    }
    /**
     * Values that may be interpreted as {@link $RequirementHandler$ResourceWakeup}.
     */
    export type $RequirementHandler$ResourceWakeup_ = { failureReasonIds?: $Set_<$ResourceLocation_>, reason?: $RequirementHandler$WakeupReason_, matcher?: $Predicate_<$Object>,  } | [failureReasonIds?: $Set_<$ResourceLocation_>, reason?: $RequirementHandler$WakeupReason_, matcher?: $Predicate_<$Object>, ];
    export class $MachineRequirement {
        static fluidOutput(stack: $FluidStack_, chance: number): $MachineRequirement;
        static fluidOutput(stack: $FluidStack_): $MachineRequirement;
        static copyList(requirements: $List_<$MachineRequirement>): $List<$MachineRequirement>;
        static fromInput(ingredient: $MachineIngredient_): $MachineRequirement;
        static copyOf(requirement: $MachineRequirement): $MachineRequirement;
        static itemOutput(stack: $ItemStack_): $MachineRequirement;
        static itemOutput(stack: $ItemStack_, chance: number): $MachineRequirement;
        static TAGS_CODEC: $Codec<$List<string>>;
        static CODEC: $Codec<$MachineRequirement>;
    }
    export interface $MachineRequirement extends $RecipeIoDeclaration {
        type(): $RequirementType<$MachineRequirement>;
        io(): $RecipeModifier$IOType;
        tags(): $List<string>;
    }
    export class $EnergyRequirement extends $Record implements $MachineRequirement {
        fePerTick(): number;
        type(): $RequirementType<$EnergyRequirement>;
        io(): $RecipeModifier$IOType;
        tags(): $List<string>;
        static CODEC: $MapCodec<$EnergyRequirement>;
        static TYPE: $RequirementType<$EnergyRequirement>;
        constructor(io: $RecipeModifier$IOType_, fePerTick: number, tags: $List_<string>);
        constructor(fePerTick: number);
        constructor(fePerTick: number, tags: $List_<string>);
        constructor(io: $RecipeModifier$IOType_, fePerTick: number);
    }
    /**
     * Values that may be interpreted as {@link $EnergyRequirement}.
     */
    export type $EnergyRequirement_ = { tags?: $List_<string>, io?: $RecipeModifier$IOType_, fePerTick?: number,  } | [tags?: $List_<string>, io?: $RecipeModifier$IOType_, fePerTick?: number, ];
    export class $RequirementHandler$WakeupReason extends $Enum<$RequirementHandler$WakeupReason> {
        static values(): $RequirementHandler$WakeupReason[];
        static valueOf(name: string): $RequirementHandler$WakeupReason;
        static INPUT_AVAILABLE: $RequirementHandler$WakeupReason;
        static OUTPUT_CAPACITY: $RequirementHandler$WakeupReason;
        static ENERGY_AVAILABLE: $RequirementHandler$WakeupReason;
    }
    /**
     * Values that may be interpreted as {@link $RequirementHandler$WakeupReason}.
     */
    export type $RequirementHandler$WakeupReason_ = "input_available" | "energy_available" | "output_capacity";
    export class $RequirementHandlerSupport$Sampling {
        constructor();
    }
    export class $SmartInterfaceRequirement extends $Record implements $MachineRequirement {
        interfaceType(): string;
        type(): $RequirementType<$SmartInterfaceRequirement>;
        static input(type: string, minValue: number, maxValue: number): $SmartInterfaceRequirement;
        static input(type: string, value: number): $SmartInterfaceRequirement;
        io(): $RecipeModifier$IOType;
        static output(type: string, value: number): $SmartInterfaceRequirement;
        maxValue(): number;
        minValue(): number;
        tags(): $List<string>;
        static CODEC: $MapCodec<$SmartInterfaceRequirement>;
        static TYPE: $RequirementType<$SmartInterfaceRequirement>;
        constructor(io: $RecipeModifier$IOType_, interfaceType: string, minValue: number, maxValue: number);
    }
    /**
     * Values that may be interpreted as {@link $SmartInterfaceRequirement}.
     */
    export type $SmartInterfaceRequirement_ = { interfaceType?: string, minValue?: number, io?: $RecipeModifier$IOType_, maxValue?: number,  } | [interfaceType?: string, minValue?: number, io?: $RecipeModifier$IOType_, maxValue?: number, ];
    export class $LevelRequirement extends $Record implements $MachineRequirement {
        levelId(): $ResourceLocation;
        type(): $RequirementType<$LevelRequirement>;
        static input(typeId: $ResourceLocation_, levelId: $ResourceLocation_): $LevelRequirement;
        io(): $RecipeModifier$IOType;
        typeId(): $ResourceLocation;
        tags(): $List<string>;
        static CODEC: $MapCodec<$LevelRequirement>;
        static TYPE: $RequirementType<$LevelRequirement>;
        constructor(io: $RecipeModifier$IOType_, typeId: $ResourceLocation_, levelId: $ResourceLocation_);
        constructor(typeId: $ResourceLocation_, levelId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $LevelRequirement}.
     */
    export type $LevelRequirement_ = { typeId?: $ResourceLocation_, io?: $RecipeModifier$IOType_, levelId?: $ResourceLocation_,  } | [typeId?: $ResourceLocation_, io?: $RecipeModifier$IOType_, levelId?: $ResourceLocation_, ];
    export class $RequirementHandler<R extends $MachineRequirement> {
    }
    export interface $RequirementHandler<R extends $MachineRequirement> {
        plan(requirement: R, capabilities: $List_<$MachineCapability>, context: $PlanningContext_): $RequirementPlan;
        resourceWakeups(requirement: R): $List<$RequirementHandler$ResourceWakeup>;
        applyModifiers(requirement: R, modifiers: $List_<$RecipeModifier>): R;
        applyLevelModifiers(requirement: R, energyMultiplier: number, outputMultiplier: number): R;
        overlaps(requirement: R, other: $MachineRequirement): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RequirementHandler}.
     */
    export type $RequirementHandler_<R> = ((requirement: R, capabilities: $List<$MachineCapability>, context: $PlanningContext) => $RequirementPlan_);
    export class $RequirementType<R extends $MachineRequirement> {
    }
    export interface $RequirementType<R extends $MachineRequirement> {
        codec(): $MapCodec<R>;
        syncCodec(): $RecipeSyncCodec<R>;
        applyModifiers(requirement: R, modifiers: $List_<$RecipeModifier>): R;
        applyLevelModifiers(requirement: R, energyMultiplier: number, outputMultiplier: number): R;
        presentation(): $RequirementType$Presentation;
        capabilityIds(): $Set<$ResourceLocation>;
        id(): $ResourceLocation;
        handler(): $RequirementHandler<R>;
        copy(requirement: R): R;
        overlaps(requirement: R, other: $MachineRequirement): boolean;
    }
    export class $StageRequirement extends $Record implements $MachineRequirement {
        minStage(): number;
        type(): $RequirementType<$StageRequirement>;
        static input(minStage: number): $StageRequirement;
        io(): $RecipeModifier$IOType;
        tags(): $List<string>;
        static CODEC: $MapCodec<$StageRequirement>;
        static TYPE: $RequirementType<$StageRequirement>;
        constructor(io: $RecipeModifier$IOType_, minStage: number);
        constructor(minStage: number);
    }
    /**
     * Values that may be interpreted as {@link $StageRequirement}.
     */
    export type $StageRequirement_ = { minStage?: number, io?: $RecipeModifier$IOType_,  } | [minStage?: number, io?: $RecipeModifier$IOType_, ];
    export class $RequirementType$Presentation extends $Record {
        descriptionKey(): string;
        static defaults(id: $ResourceLocation_): $RequirementType$Presentation;
        translationKey(): string;
        constructor(translationKey: string, descriptionKey: string);
    }
    /**
     * Values that may be interpreted as {@link $RequirementType$Presentation}.
     */
    export type $RequirementType$Presentation_ = { descriptionKey?: string, translationKey?: string,  } | [descriptionKey?: string, translationKey?: string, ];
}
