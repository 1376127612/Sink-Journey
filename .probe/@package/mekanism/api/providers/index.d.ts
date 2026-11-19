import { $ItemLike } from "@package/net/minecraft/world/level";
import { $ChemicalStack, $Chemical, $Chemical_ } from "@package/mekanism/api/chemical";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IHasTranslationKey, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICustomModule, $ModuleData_, $ModuleData } from "@package/mekanism/api/gear";

declare module "@package/mekanism/api/providers" {
    /**
     * @deprecated
     */
    export class $IBaseProvider {
    }
    export interface $IBaseProvider extends $IHasTextComponent, $IHasTranslationKey {
        getRegistryName(): $ResourceLocation;
        getTextComponent(): $Component;
        getName(): string;
        get registryName(): $ResourceLocation;
        get textComponent(): $Component;
        get name(): string;
    }
    /**
     * @deprecated
     */
    export class $IModuleDataProvider<MODULE extends $ICustomModule<MODULE>> {
    }
    export interface $IModuleDataProvider<MODULE extends $ICustomModule<MODULE>> extends $IBaseProvider {
        getRegistryName(): $ResourceLocation;
        getTranslationKey(): string;
        getModuleData(): $ModuleData<MODULE>;
        get registryName(): $ResourceLocation;
        get translationKey(): string;
        get moduleData(): $ModuleData<MODULE>;
    }
    /**
     * Values that may be interpreted as {@link $IModuleDataProvider}.
     */
    export type $IModuleDataProvider_<MODULE> = (() => $ModuleData_<MODULE>);
    /**
     * @deprecated
     */
    export class $IItemProvider {
    }
    export interface $IItemProvider extends $IBaseProvider, $ItemLike {
        getRegistryName(): $ResourceLocation;
        getTranslationKey(): string;
        getTextComponent(): $Component;
        getItemStack(arg0: number): $ItemStack;
        getItemStack(): $ItemStack;
        get registryName(): $ResourceLocation;
        get translationKey(): string;
        get textComponent(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IItemProvider}.
     */
    export type $IItemProvider_ = (() => void);
    /**
     * @deprecated
     */
    export class $IChemicalProvider {
    }
    export interface $IChemicalProvider extends $IBaseProvider {
        getRegistryName(): $ResourceLocation;
        getTranslationKey(): string;
        getChemical(): $Chemical;
        getTextComponent(): $Component;
        getStack(arg0: number): $ChemicalStack;
        get registryName(): $ResourceLocation;
        get translationKey(): string;
        get chemical(): $Chemical;
        get textComponent(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IChemicalProvider}.
     */
    export type $IChemicalProvider_ = (() => $Chemical_);
}
