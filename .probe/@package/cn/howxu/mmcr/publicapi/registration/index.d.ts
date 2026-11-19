import { $ModifierBundle, $ModifierBundle_ } from "@package/cn/howxu/mmcr/publicapi/recipe/modifier";
import { $Consumer_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MachineSpec, $MachineDraft } from "@package/cn/howxu/mmcr/publicapi/machine";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeDraft, $RecipeSpec } from "@package/cn/howxu/mmcr/publicapi/recipe";
import { $List, $Map } from "@package/java/util";
import { $StructureSpec, $StructureDraft } from "@package/cn/howxu/mmcr/publicapi/structure";
import { $MachineLevelSpec, $LevelTypeSpec } from "@package/cn/howxu/mmcr/publicapi/structure/level";

declare module "@package/cn/howxu/mmcr/publicapi/registration" {
    export class $MachineRegistrar {
    }
    export interface $MachineRegistrar {
        registerMachine(id: $ResourceLocation_, configuration: $Consumer_<$MachineDraft>): void;
        registerMachine(definition: $MachineSpec): void;
        definitions(): $Map<$ResourceLocation, $MachineSpec>;
    }
    export class $StructureRegistrar {
    }
    export interface $StructureRegistrar {
        structures(): $Map<$ResourceLocation, $StructureSpec>;
        registerStructure(machineId: $ResourceLocation_, configuration: $Consumer_<$StructureDraft>): void;
        registerStructure(structure: $StructureSpec): void;
        registerModifierItem(itemId: $ResourceLocation_, modifierId: $ResourceLocation_): void;
        registerLevelType(type: $LevelTypeSpec): void;
        modifierItems(): $Map<$ResourceLocation, $List<$ItemStack>>;
        registerModifier(id: $ResourceLocation_, modifier: $ModifierBundle_): void;
        registerLevel(level: $MachineLevelSpec): void;
        modifierItemIds(): $Map<$ResourceLocation, $ResourceLocation>;
        levelTypes(): $Map<$ResourceLocation, $LevelTypeSpec>;
        modifiers(): $Map<$ResourceLocation, $ModifierBundle>;
        levels(): $Map<$ResourceLocation, $MachineLevelSpec>;
    }
    export class $RecipeRegistrar {
    }
    export interface $RecipeRegistrar {
        recipes(): $Map<$ResourceLocation, $RecipeSpec>;
        registerRecipe(id: $ResourceLocation_, configuration: $Consumer_<$RecipeDraft>): void;
        registerRecipe(recipe: $RecipeSpec): void;
    }
}
