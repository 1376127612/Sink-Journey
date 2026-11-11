import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MachineModifier } from "@package/cn/howxu/mmcr/api/machine/modifier";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockPredicate, $BlockPredicate_ } from "@package/cn/howxu/mmcr/api/machine";
import { $Enum } from "@package/java/lang";
import { $Collection_, $List, $List_ } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/api/recipe/modifier" {
    export class $RecipeModifier$IOType extends $Enum<$RecipeModifier$IOType> {
        static values(): $RecipeModifier$IOType[];
        static valueOf(name: string): $RecipeModifier$IOType;
        getKey(): string;
        static byKey(key: string): $RecipeModifier$IOType;
        isInput(): boolean;
        static INPUT: $RecipeModifier$IOType;
        static OUTPUT: $RecipeModifier$IOType;
        get key(): string;
        get input(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecipeModifier$IOType}.
     */
    export type $RecipeModifier$IOType_ = "input" | "output";
    export class $RecipeModifier$ModifierApplier {
        isDefault(): boolean;
        apply(value: number, ioType: $RecipeModifier$IOType_): number;
        inputMul: number;
        inputAdd: number;
        outputAdd: number;
        static DEFAULT_APPLIER: $RecipeModifier$ModifierApplier;
        outputMul: number;
        constructor();
        get default(): boolean;
    }
    export class $RecipeModifier {
        add(value: number): $RecipeModifier;
        getTarget(): string;
        multiply(value: number): $RecipeModifier;
        getOperation(): $RecipeModifier$Operation;
        getModifier(): number;
        static applyModifiers(modifiers: $Collection_<$RecipeModifier>, target: string, ioType: $RecipeModifier$IOType_, value: number, isChance: boolean): number;
        static applyModifiers(modifiers: $Collection_<$RecipeModifier>, target: string, ioType: $RecipeModifier$IOType_, value: number, isChance: boolean): number;
        affectsChance(): boolean;
        static deserializeNbt(tag: $CompoundTag_): $RecipeModifier;
        getIOTarget(): $RecipeModifier$IOType;
        serializeNbt(): $CompoundTag;
        static applyValueToApplier(applier: $RecipeModifier$ModifierApplier, mod: $RecipeModifier): void;
        static OPERATION_CODEC: $Codec<$RecipeModifier$Operation>;
        static CODEC: $Codec<$RecipeModifier>;
        static IO_TYPE_CODEC: $Codec<$RecipeModifier$IOType>;
        static IO_INPUT: string;
        static IO_OUTPUT: string;
        constructor(target: string, ioTarget: $RecipeModifier$IOType_, modifier: number, operation: $RecipeModifier$Operation_, affectsChance: boolean);
        get target(): string;
        get operation(): $RecipeModifier$Operation;
        get modifier(): number;
        get IOTarget(): $RecipeModifier$IOType;
    }
    export class $AbstractModifierReplacement {
        getModifiers(): $List<$MachineModifier>;
        getModifierName(): string;
        getDescriptiveStack(): $ItemStack;
        getDescriptionLines(): $List<string>;
        get modifiers(): $List<$MachineModifier>;
        get modifierName(): string;
        get descriptiveStack(): $ItemStack;
        get descriptionLines(): $List<string>;
    }
    export class $RecipeModifier$Operation extends $Enum<$RecipeModifier$Operation> {
        static values(): $RecipeModifier$Operation[];
        static valueOf(name: string): $RecipeModifier$Operation;
        getId(): number;
        static byId(id: number): $RecipeModifier$Operation;
        static ADD: $RecipeModifier$Operation;
        static MULTIPLY: $RecipeModifier$Operation;
        static SUBTRACT: $RecipeModifier$Operation;
        static DIVIDE: $RecipeModifier$Operation;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $RecipeModifier$Operation}.
     */
    export type $RecipeModifier$Operation_ = "add" | "multiply" | "subtract" | "divide";
    export class $SingleBlockModifierReplacement extends $AbstractModifierReplacement {
        getReplacement(): $BlockPredicate;
        getModifierId(): $ResourceLocation;
        constructor(modifierName: string, replacement: $BlockPredicate_, modifiers: $List_<$MachineModifier>, descriptiveStack: $ItemStack_);
        constructor(modifierId: $ResourceLocation_, replacement: $BlockPredicate_);
        constructor(modifierName: string, replacement: $BlockPredicate_);
        get replacement(): $BlockPredicate;
        get modifierId(): $ResourceLocation;
    }
}
