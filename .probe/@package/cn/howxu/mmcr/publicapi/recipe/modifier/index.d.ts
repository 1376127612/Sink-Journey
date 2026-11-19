import { $IoDirection } from "@package/cn/howxu/mmcr/publicapi/recipe";
import { $Enum } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/publicapi/recipe/modifier" {
    export class $ModifierScope extends $Enum<$ModifierScope> {
        static values(): $ModifierScope[];
        static valueOf(name: string): $ModifierScope;
        static INPUT: $ModifierScope;
        static OUTPUT: $ModifierScope;
        static RECIPE: $ModifierScope;
        static MACHINE: $ModifierScope;
    }
    /**
     * Values that may be interpreted as {@link $ModifierScope}.
     */
    export type $ModifierScope_ = "input" | "output" | "machine" | "recipe";
    export class $ModifierSpec {
    }
    export interface $ModifierSpec {
    }
    export class $ModifierBundle {
    }
    export interface $ModifierBundle {
        modifiers(): $List<$ModifierSpec>;
    }
    /**
     * Values that may be interpreted as {@link $ModifierBundle}.
     */
    export type $ModifierBundle_ = (() => $List_<$ModifierSpec>);
    export class $RecipeAdjustmentSpec {
    }
    export interface $RecipeAdjustmentSpec {
        affectsChance(): boolean;
        value(): number;
        target(): string;
        add(value: number): $RecipeAdjustmentSpec;
        multiply(value: number): $RecipeAdjustmentSpec;
        io(): $IoDirection;
        operation(): $ModifierOperation;
    }
    export class $ModifierOperation extends $Enum<$ModifierOperation> {
        static values(): $ModifierOperation[];
        static valueOf(name: string): $ModifierOperation;
        static ADD: $ModifierOperation;
        static MULTIPLY: $ModifierOperation;
        static SUBTRACT: $ModifierOperation;
        static DIVIDE: $ModifierOperation;
    }
    /**
     * Values that may be interpreted as {@link $ModifierOperation}.
     */
    export type $ModifierOperation_ = "add" | "multiply" | "subtract" | "divide";
    export class $SmartModifierSpec {
    }
    export interface $SmartModifierSpec {
        interfaceType(): string;
        atMax(): number;
        atMin(): number;
        toModifier(value: number): $NumericModifierSpec;
        affectsChance(): boolean;
        scope(): $ModifierScope;
        target(): string;
        mappedValue(value: number): number;
        io(): $IoDirection;
        maxValue(): number;
        operation(): $ModifierOperation;
        minValue(): number;
    }
    export class $NumericModifierSpec {
    }
    export interface $NumericModifierSpec extends $ModifierSpec {
        affectsChance(): boolean;
        scope(): $ModifierScope;
        value(): number;
        target(): string;
        operation(): $ModifierOperation;
    }
}
