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
        isInput(): boolean;
        static values(): $RecipeModifier$IOType[];
        static valueOf(name: string): $RecipeModifier$IOType;
        getKey(): string;
        static byKey(key: string): $RecipeModifier$IOType;
        static INPUT: $RecipeModifier$IOType;
        static OUTPUT: $RecipeModifier$IOType;
        get input(): boolean;
        get key(): string;
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
        static applyModifiers(modifiers: $Collection_<$RecipeModifier>, target: string, ioType: $RecipeModifier$IOType_, value: number, isChance: boolean): number;
        static applyModifiers(modifiers: $Collection_<$RecipeModifier>, target: string, ioType: $RecipeModifier$IOType_, value: number, isChance: boolean): number;
        getIOTarget(): $RecipeModifier$IOType;
        serializeNbt(): $CompoundTag;
        static deserializeNbt(tag: $CompoundTag_): $RecipeModifier;
        static applyValueToApplier(applier: $RecipeModifier$ModifierApplier, mod: $RecipeModifier): void;
        affectsChance(): boolean;
        add(value: number): $RecipeModifier;
        getTarget(): string;
        multiply(value: number): $RecipeModifier;
        getOperation(): $RecipeModifier$Operation;
        getModifier(): number;
        static OPERATION_CODEC: $Codec<$RecipeModifier$Operation>;
        static CODEC: $Codec<$RecipeModifier>;
        static IO_TYPE_CODEC: $Codec<$RecipeModifier$IOType>;
        static IO_INPUT: string;
        static IO_OUTPUT: string;
        constructor(target: string, ioTarget: $RecipeModifier$IOType_, modifier: number, operation: $RecipeModifier$Operation_, affectsChance: boolean);
        get IOTarget(): $RecipeModifier$IOType;
        get target(): string;
        get operation(): $RecipeModifier$Operation;
        get modifier(): number;
    }
    export class $AbstractModifierReplacement {
        getModifierName(): string;
        getDescriptiveStack(): $ItemStack;
        getDescriptionLines(): $List<string>;
        getModifiers(): $List<$MachineModifier>;
        get modifierName(): string;
        get descriptiveStack(): $ItemStack;
        get descriptionLines(): $List<string>;
        get modifiers(): $List<$MachineModifier>;
    }
    export class $RecipeModifier$Operation extends $Enum<$RecipeModifier$Operation> {
        static byId(id: number): $RecipeModifier$Operation;
        static values(): $RecipeModifier$Operation[];
        static valueOf(name: string): $RecipeModifier$Operation;
        getId(): number;
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
        getModifierId(): $ResourceLocation;
        getReplacement(): $BlockPredicate;
        constructor(modifierName: string, replacement: $BlockPredicate_);
        constructor(modifierName: string, replacement: $BlockPredicate_, modifiers: $List_<$MachineModifier>, descriptiveStack: $ItemStack_);
        constructor(modifierId: $ResourceLocation_, replacement: $BlockPredicate_);
        get modifierId(): $ResourceLocation;
        get replacement(): $BlockPredicate;
    }
}
