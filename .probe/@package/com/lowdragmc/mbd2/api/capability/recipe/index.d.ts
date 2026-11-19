import { $LDLRegister } from "@package/com/lowdragmc/lowdraglib2/registry/annotation";
import { $Content, $ContentModifier, $IContentSerializer } from "@package/com/lowdragmc/mbd2/api/recipe/content";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Table } from "@package/com/google/common/collect";
import { $AutoRegistry$Holder, $AutoRegistry$LDLibRegister, $ILDLRegister } from "@package/com/lowdragmc/lowdraglib2/registry";
import { $List, $Set, $List_, $Collection } from "@package/java/util";
import { $MBDRecipe } from "@package/com/lowdragmc/mbd2/api/recipe";
import { $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Type } from "@package/java/lang/reflect";
import { $Runnable_, $Enum, $Object } from "@package/java/lang";

declare module "@package/com/lowdragmc/mbd2/api/capability/recipe" {
    export class $RecipeCapability<T> implements $ILDLRegister<$RecipeCapability<never>, $RecipeCapability<never>> {
        bindXEIWidget(arg0: $UIElement, arg1: $Content, arg2: $IO_): void;
        copyWithModifier(arg0: $RecipeCapability<never>, arg1: $ContentModifier): $RecipeCapability<never>;
        copyInner(arg0: $RecipeCapability<never>): $RecipeCapability<never>;
        createContentConfigurator(arg0: $ConfiguratorGroup, arg1: $Supplier_<$RecipeCapability<never>>, arg2: $Consumer_<$RecipeCapability<never>>): void;
        getTraslateComponent(): $Component;
        createDefaultContent(): $RecipeCapability<never>;
        xeiLayoutType(): $RecipeCapability$XEILayoutType;
        createXEITemplate(): $UIElement;
        getLeftErrorInfo(arg0: $List_<$RecipeCapability<never>>): $Component;
        copyContent(arg0: $Object): $RecipeCapability<never>;
        copyContent(arg0: $Object, arg1: $ContentModifier): $RecipeCapability<never>;
        getLookupKeys(arg0: $Object): $Collection<never>;
        calculateAmount(arg0: $List_<$RecipeCapability<never>>): number;
        deepCopyContent(arg0: $Object): $RecipeCapability<never>;
        deepCopyContent(arg0: $Object, arg1: $ContentModifier): $RecipeCapability<never>;
        of(arg0: $Object): $RecipeCapability<never>;
        contentType(): $Type;
        createPreview(arg0: $Supplier_<$RecipeCapability<never>>): $UIElement;
        getRegisterUI(): $LDLRegister;
        name(): string;
        group(): string;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegister, $RecipeCapability<never>, $RecipeCapability<never>>;
        getRegistry(): $AutoRegistry$LDLibRegister<$RecipeCapability<never>, $RecipeCapability<never>>;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegister, $RecipeCapability<never>, $RecipeCapability<never>>) | undefined;
        registryName(): $ResourceLocation;
        static CODEC: $Codec<$RecipeCapability<never>>;
        serializer: $IContentSerializer<$RecipeCapability<never>>;
        get traslateComponent(): $Component;
        get registerUI(): $LDLRegister;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegister, $RecipeCapability<never>, $RecipeCapability<never>>;
        get registry(): $AutoRegistry$LDLibRegister<$RecipeCapability<never>, $RecipeCapability<never>>;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegister, $RecipeCapability<never>, $RecipeCapability<never>>) | undefined;
    }
    export class $IO extends $Enum<$IO> {
        getName(): string;
        static values(): $IO[];
        static valueOf(arg0: string): $IO;
        support(arg0: $IO_): boolean;
        getTooltip(): string;
        static IN: $IO;
        static NONE: $IO;
        static BOTH: $IO;
        static OUT: $IO;
        get tooltip(): string;
    }
    /**
     * Values that may be interpreted as {@link $IO}.
     */
    export type $IO_ = "in" | "out" | "both" | "none";
    export class $RecipeCapability$XEILayoutType extends $Enum<$RecipeCapability$XEILayoutType> {
        static values(): $RecipeCapability$XEILayoutType[];
        static valueOf(arg0: string): $RecipeCapability$XEILayoutType;
        static BAR: $RecipeCapability$XEILayoutType;
        static SLOT: $RecipeCapability$XEILayoutType;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCapability$XEILayoutType}.
     */
    export type $RecipeCapability$XEILayoutType_ = "slot" | "bar";
    export class $IRecipeHandlerTrait<K> {
    }
    export interface $IRecipeHandlerTrait<K> extends $IRecipeHandler<K> {
        addChangedListener(arg0: $Runnable_): $ISubscription;
        notifiesAllChanges(): boolean;
        getHandlerIO(): $IO;
        getRecipeLogicScope(): $Set<string>;
        compatibleWith(arg0: $IO_): boolean;
        get handlerIO(): $IO;
        get recipeLogicScope(): $Set<string>;
    }
    export class $IRecipeCapabilityHolder {
    }
    export interface $IRecipeCapabilityHolder {
        getRecipeCapabilitiesProxy(): $Table<$IO, $RecipeCapability<never>, $List<$IRecipeHandler<never>>>;
        getChanceTier(): number;
        hasProxies(): boolean;
        get recipeCapabilitiesProxy(): $Table<$IO, $RecipeCapability<never>, $List<$IRecipeHandler<never>>>;
        get chanceTier(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeCapabilityHolder}.
     */
    export type $IRecipeCapabilityHolder_ = (() => $Table<$IO_, $RecipeCapability<never>, $List_<$IRecipeHandler<never>>>);
    export class $IRecipeHandler<K> {
    }
    export interface $IRecipeHandler<K> {
        supportsMultipleRecipeLogics(): boolean;
        getSlotNames(): $Set<string>;
        getRecipeCapability(): $RecipeCapability<K>;
        isDistinct(): boolean;
        preWorking(arg0: $IRecipeCapabilityHolder_, arg1: $IO_, arg2: $MBDRecipe): void;
        copyContent(arg0: $Object): K;
        handleRecipe(arg0: $IO_, arg1: $MBDRecipe, arg2: $List_<never>, arg3: string | null, arg4: boolean): $List<K>;
        postWorking(arg0: $IRecipeCapabilityHolder_, arg1: $IO_, arg2: $MBDRecipe): void;
        getAvailableLookupKeys(): $Collection<never>;
        handleRecipeInner(arg0: $IO_, arg1: $MBDRecipe, arg2: $List_<K>, arg3: string | null, arg4: boolean): $List<K>;
        get slotNames(): $Set<string>;
        get recipeCapability(): $RecipeCapability<K>;
        get distinct(): boolean;
        get availableLookupKeys(): $Collection<never>;
    }
}
