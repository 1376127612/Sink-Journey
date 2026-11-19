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
        registrar(): $WorkstationRegistrar;
        addMachineWorkstation(machine: $ResourceLocation_, type: $ResourceLocation_): void;
        addRecipePoolWorkstation(pool: $ResourceLocation_, item: $ItemStack_): void;
        addRecipePoolWorkstation(pool: $ResourceLocation_, item: $ResourceLocation_): void;
        addRecipePoolWorkstation(pool: $ResourceLocation_, item: $ItemLike_): void;
        entries(): $List<$Workstation>;
        constructor();
    }
    export class $RegisterJeiRecipeInformationEvent extends $Event {
        registrar(): $RecipeInformationRegistrar;
        registerRecipe(id: $ResourceLocation_, key: string, ...args: $Object[]): void;
        registerRecipePool(id: $ResourceLocation_, key: string, ...args: $Object[]): void;
        entries(): $List<$RecipeInformation>;
        constructor();
    }
    export class $RegisterMachineRecipesEvent extends $Event {
        registrar(): $RecipeRegistrar;
        recipes(): $Map<$ResourceLocation, $RecipeSpec>;
        registerRecipe(id: $ResourceLocation_, configuration: $Consumer_<$RecipeDraft>): void;
        registerRecipe(recipe: $RecipeSpec): void;
        constructor(registrar: $RecipeRegistrar);
        constructor();
    }
    export class $RegisterControllerUiProtocolsEvent extends $Event implements $IModBusEvent {
        registrar(): $UiProtocolRegistrar;
        constructor(machineIds: $Collection_<$ResourceLocation_>);
    }
    export class $RegisterMachineDefinitionsEvent extends $Event {
        registrar(): $MachineRegistrar;
        registerMachine(id: $ResourceLocation_, configuration: $Consumer_<$MachineDraft>): void;
        registerMachine(definition: $MachineSpec): void;
        definitions(): $Map<$ResourceLocation, $MachineSpec>;
        constructor();
        constructor(registrar: $MachineRegistrar);
    }
    export class $RegisterControllerUisEvent extends $Event implements $IModBusEvent {
        registrar(): $RegisterControllerUisEvent$Registrar;
        register(machineId: $ResourceLocation_, factory: $ControllerUiFactory_): void;
        constructor(machineIds: $Collection_<$ResourceLocation_>);
    }
    export class $RegisterControllerRenderersEvent extends $Event implements $IModBusEvent {
        registrar(): $RendererRegistrar;
        register(id: $ResourceLocation_, renderer: $ControllerRenderer_): void;
        renderers(): $Map<$ResourceLocation, $ControllerRenderer>;
        constructor(machineIds: $Collection_<$ResourceLocation_>);
    }
    export class $RegisterMachineStructuresEvent extends $Event {
        structures(): $Map<$ResourceLocation, $StructureSpec>;
        registrar(): $StructureRegistrar;
        registerStructure(id: $ResourceLocation_, configuration: $Consumer_<$StructureDraft>): void;
        registerStructure(structure: $StructureSpec): void;
        registerModifierItem(itemId: $ResourceLocation_, id: $ResourceLocation_): void;
        registerLevelType(type: $LevelTypeSpec): void;
        modifierItems(): $Map<$ResourceLocation, $List<$ItemStack>>;
        registerModifier(id: $ResourceLocation_, modifier: $ModifierBundle_): void;
        registerLevel(level: $MachineLevelSpec): void;
        modifierItemIds(): $Map<$ResourceLocation, $ResourceLocation>;
        levelTypes(): $Map<$ResourceLocation, $LevelTypeSpec>;
        modifiers(): $Map<$ResourceLocation, $ModifierBundle>;
        levels(): $Map<$ResourceLocation, $MachineLevelSpec>;
        constructor(registrar: $StructureRegistrar);
        constructor(machineIds: $Collection_<$ResourceLocation_>);
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
