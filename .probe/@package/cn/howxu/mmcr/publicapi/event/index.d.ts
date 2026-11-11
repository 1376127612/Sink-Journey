import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ModifierBundle, $ModifierBundle_ } from "@package/cn/howxu/mmcr/publicapi/recipe/modifier";
import { $ControllerRenderer_, $RendererRegistrar, $ControllerRenderer } from "@package/cn/howxu/mmcr/publicapi/client/render";
import { $RecipeInformation, $RecipeInformationRegistrar, $Workstation, $WorkstationRegistrar } from "@package/cn/howxu/mmcr/publicapi/client/jei";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ControllerUiFactory_, $ControllerUiFactory } from "@package/cn/howxu/mmcr/publicapi/client/ui";
import { $List, $Map, $Collection_ } from "@package/java/util";
import { $MachineLevelSpec, $LevelTypeSpec } from "@package/cn/howxu/mmcr/publicapi/structure/level";
import { $Consumer_ } from "@package/java/util/function";
import { $StructureRegistrar, $RecipeRegistrar, $MachineRegistrar } from "@package/cn/howxu/mmcr/publicapi/registration";
import { $MachineDraft, $MachineSpec } from "@package/cn/howxu/mmcr/publicapi/machine";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeSpec, $RecipeDraft } from "@package/cn/howxu/mmcr/publicapi/recipe";
import { $Object } from "@package/java/lang";
import { $UiProtocolRegistrar } from "@package/cn/howxu/mmcr/publicapi/ui";
import { $StructureSpec, $StructureDraft } from "@package/cn/howxu/mmcr/publicapi/structure";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/cn/howxu/mmcr/publicapi/event" {
    export class $RegisterJeiWorkstationsEvent extends $Event {
        entries(): $List<$Workstation>;
        registrar(): $WorkstationRegistrar;
        addRecipePoolWorkstation(pool: $ResourceLocation_, item: $ItemLike_): void;
        addRecipePoolWorkstation(pool: $ResourceLocation_, item: $ItemStack_): void;
        addRecipePoolWorkstation(pool: $ResourceLocation_, item: $ResourceLocation_): void;
        addMachineWorkstation(machine: $ResourceLocation_, type: $ResourceLocation_): void;
        constructor();
    }
    export class $RegisterJeiRecipeInformationEvent extends $Event {
        entries(): $List<$RecipeInformation>;
        registrar(): $RecipeInformationRegistrar;
        registerRecipe(id: $ResourceLocation_, key: string, ...args: $Object[]): void;
        registerRecipePool(id: $ResourceLocation_, key: string, ...args: $Object[]): void;
        constructor();
    }
    export class $RegisterMachineRecipesEvent extends $Event {
        registrar(): $RecipeRegistrar;
        recipes(): $Map<$ResourceLocation, $RecipeSpec>;
        registerRecipe(id: $ResourceLocation_, configuration: $Consumer_<$RecipeDraft>): void;
        registerRecipe(recipe: $RecipeSpec): void;
        constructor();
        constructor(registrar: $RecipeRegistrar);
    }
    export class $RegisterControllerUiProtocolsEvent extends $Event implements $IModBusEvent {
        registrar(): $UiProtocolRegistrar;
        constructor(machineIds: $Collection_<$ResourceLocation_>);
    }
    export class $RegisterMachineDefinitionsEvent extends $Event {
        definitions(): $Map<$ResourceLocation, $MachineSpec>;
        registrar(): $MachineRegistrar;
        registerMachine(definition: $MachineSpec): void;
        registerMachine(id: $ResourceLocation_, configuration: $Consumer_<$MachineDraft>): void;
        constructor();
        constructor(registrar: $MachineRegistrar);
    }
    export class $RegisterControllerUisEvent extends $Event implements $IModBusEvent {
        register(machineId: $ResourceLocation_, factory: $ControllerUiFactory_): void;
        registrar(): $RegisterControllerUisEvent$Registrar;
        constructor(machineIds: $Collection_<$ResourceLocation_>);
    }
    export class $RegisterControllerRenderersEvent extends $Event implements $IModBusEvent {
        register(id: $ResourceLocation_, renderer: $ControllerRenderer_): void;
        registrar(): $RendererRegistrar;
        renderers(): $Map<$ResourceLocation, $ControllerRenderer>;
        constructor(machineIds: $Collection_<$ResourceLocation_>);
    }
    export class $RegisterMachineStructuresEvent extends $Event {
        modifiers(): $Map<$ResourceLocation, $ModifierBundle>;
        levels(): $Map<$ResourceLocation, $MachineLevelSpec>;
        registerLevelType(type: $LevelTypeSpec): void;
        registerLevel(level: $MachineLevelSpec): void;
        registerModifier(id: $ResourceLocation_, modifier: $ModifierBundle_): void;
        registerStructure(id: $ResourceLocation_, configuration: $Consumer_<$StructureDraft>): void;
        registerStructure(structure: $StructureSpec): void;
        structures(): $Map<$ResourceLocation, $StructureSpec>;
        registrar(): $StructureRegistrar;
        registerModifierItem(itemId: $ResourceLocation_, id: $ResourceLocation_): void;
        modifierItems(): $Map<$ResourceLocation, $List<$ItemStack>>;
        modifierItemIds(): $Map<$ResourceLocation, $ResourceLocation>;
        levelTypes(): $Map<$ResourceLocation, $LevelTypeSpec>;
        constructor(machineIds: $Collection_<$ResourceLocation_>);
        constructor(registrar: $StructureRegistrar);
    }
    export class $RegisterControllerUisEvent$Registrar {
    }
    export interface $RegisterControllerUisEvent$Registrar {
        register(machineId: $ResourceLocation_, factory: $ControllerUiFactory_): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterControllerUisEvent$Registrar}.
     */
    export type $RegisterControllerUisEvent$Registrar_ = ((machineId: $ResourceLocation, factory: $ControllerUiFactory) => void);
}
