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
        definitions(): $Map<$ResourceLocation, $MachineSpec>;
        registerMachine(definition: $MachineSpec): void;
        registerMachine(id: $ResourceLocation_, configuration: $Consumer_<$MachineDraft>): void;
    }
    export class $StructureRegistrar {
    }
    export interface $StructureRegistrar {
        modifiers(): $Map<$ResourceLocation, $ModifierBundle>;
        levels(): $Map<$ResourceLocation, $MachineLevelSpec>;
        registerLevelType(type: $LevelTypeSpec): void;
        registerLevel(level: $MachineLevelSpec): void;
        registerModifier(id: $ResourceLocation_, modifier: $ModifierBundle_): void;
        registerStructure(structure: $StructureSpec): void;
        registerStructure(machineId: $ResourceLocation_, configuration: $Consumer_<$StructureDraft>): void;
        structures(): $Map<$ResourceLocation, $StructureSpec>;
        registerModifierItem(itemId: $ResourceLocation_, modifierId: $ResourceLocation_): void;
        modifierItems(): $Map<$ResourceLocation, $List<$ItemStack>>;
        modifierItemIds(): $Map<$ResourceLocation, $ResourceLocation>;
        levelTypes(): $Map<$ResourceLocation, $LevelTypeSpec>;
    }
    export class $RecipeRegistrar {
    }
    export interface $RecipeRegistrar {
        recipes(): $Map<$ResourceLocation, $RecipeSpec>;
        registerRecipe(id: $ResourceLocation_, configuration: $Consumer_<$RecipeDraft>): void;
        registerRecipe(recipe: $RecipeSpec): void;
    }
}
