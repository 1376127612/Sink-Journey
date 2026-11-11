import { $RecipeModifier, $RecipeModifier$Operation_, $RecipeModifier$Operation } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $Collection_, $List } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/api/machine/modifier" {
    export class $MachineModifier {
        static apply(modifiers: $Collection_<$MachineModifier>, target: $ModifierTarget_, value: number, affectsChance: boolean): number;
        static numeric(target: string, scope: string, value: number, operation: string, affectsChance: boolean): $MachineModifier$Numeric;
        static parallelized(value: boolean): $MachineModifier$Parallelized;
        static recipeModifiers(modifiers: $Collection_<$MachineModifier>): $List<$RecipeModifier>;
    }
    export interface $MachineModifier {
    }
    export class $MachineModifier$Parallelized extends $Record implements $MachineModifier {
        value(): boolean;
        constructor(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MachineModifier$Parallelized}.
     */
    export type $MachineModifier$Parallelized_ = { value?: boolean,  } | [value?: boolean, ];
    export class $ModifierTarget extends $Enum<$ModifierTarget> {
        static values(): $ModifierTarget[];
        static valueOf(name: string): $ModifierTarget;
        key(): string;
        static parse(target: string, scope: string): $ModifierTarget;
        numeric(): boolean;
        supportsChance(): boolean;
        static FACTORY_THREADS: $ModifierTarget;
        static HEAT: $ModifierTarget;
        static ENERGY: $ModifierTarget;
        static PARALLELISM: $ModifierTarget;
        static OUTPUT: $ModifierTarget;
        static RECIPE_THREADS: $ModifierTarget;
        static PARALLELIZED: $ModifierTarget;
        static DURATION: $ModifierTarget;
        static CHEMICAL: $ModifierTarget;
    }
    /**
     * Values that may be interpreted as {@link $ModifierTarget}.
     */
    export type $ModifierTarget_ = "duration" | "energy" | "chemical" | "heat" | "output" | "parallelism" | "factory_threads" | "recipe_threads" | "parallelized";
    export class $MachineModifier$Numeric extends $Record implements $MachineModifier {
        value(): number;
        target(): $ModifierTarget;
        operation(): $RecipeModifier$Operation;
        affectsChance(): boolean;
        constructor(target: $ModifierTarget_, value: number, operation: $RecipeModifier$Operation_, affectsChance: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MachineModifier$Numeric}.
     */
    export type $MachineModifier$Numeric_ = { operation?: $RecipeModifier$Operation_, target?: $ModifierTarget_, affectsChance?: boolean, value?: number,  } | [operation?: $RecipeModifier$Operation_, target?: $ModifierTarget_, affectsChance?: boolean, value?: number, ];
}
