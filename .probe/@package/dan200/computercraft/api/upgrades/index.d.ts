import { $Function_ } from "@package/java/util/function";
import { $Holder$Reference } from "@package/net/minecraft/core";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";

declare module "@package/dan200/computercraft/api/upgrades" {
    export class $UpgradeHandle<U extends $UpgradeBase> {
    }
    export interface $UpgradeHandle<U extends $UpgradeBase> {
        remove(): void;
        getItem(): $ItemStack;
        getData(): $DataComponentPatch;
        setData(arg0: $DataComponentPatch_): void;
        setItem(arg0: $ItemStack_): void;
        getUpgrade(): U;
        get upgrade(): U;
    }
    export interface $UpgradeType<T> extends RegistryMarked<RegistryTypes.ComputercraftPocketUpgradeTypeTag, RegistryTypes.ComputercraftPocketUpgradeType> {}
    export class $UpgradeType<T extends $UpgradeBase> {
        static create<T extends $UpgradeBase>(arg0: $MapCodec_<T>): $UpgradeType<T>;
        static simple<T extends $UpgradeBase>(arg0: T): $UpgradeType<T>;
        static simpleWithCustomItem<T extends $UpgradeBase>(arg0: $Function_<$ItemStack, T>): $UpgradeType<T>;
        static simpleWithCustomIngredient<T extends $UpgradeBase>(arg0: $Function_<$Ingredient, T>): $UpgradeType<T>;
    }
    export interface $UpgradeType<T extends $UpgradeBase> {
        codec(): $MapCodec<T>;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeType}.
     */
    export type $UpgradeType_<T> = RegistryTypes.ComputercraftTurtleUpgradeType | RegistryTypes.ComputercraftPocketUpgradeType | (() => $MapCodec_<T>);
    export class $UpgradeBase {
        static getDefaultAdjective(arg0: $ResourceLocation_): string;
    }
    export interface $UpgradeBase {
        getType(): $UpgradeType<never>;
        /**
         * @deprecated
         */
        getUpgradeData(arg0: $ItemStack_): $DataComponentPatch;
        getUpgradeItem(arg0: $DataComponentPatch_): $ItemStack;
        getCraftingIngredient(): $Ingredient;
        getAdjective(): $Component;
        isItemSuitable(arg0: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        getCraftingItem(): $ItemStack;
        get type(): $UpgradeType<never>;
        get craftingIngredient(): $Ingredient;
        get adjective(): $Component;
        get craftingItem(): $ItemStack;
    }
    export class $UpgradeData<T extends $UpgradeBase> {
        static of<T extends $UpgradeBase>(arg0: $Holder$Reference<T>, arg1: $ItemStack_, arg2: $DataComponentPatch_): $UpgradeData<T>;
        /**
         * @deprecated
         */
        static of<T extends $UpgradeBase>(arg0: $Holder$Reference<T>, arg1: $DataComponentPatch_): $UpgradeData<T>;
        data(): $DataComponentPatch;
        holder(): $Holder$Reference<T>;
        upgrade(): T;
        static ofDefault<T extends $UpgradeBase>(arg0: $Holder$Reference<T>): $UpgradeData<T>;
        getUpgradeItem(): $ItemStack;
        /**
         * @deprecated
         */
        constructor(arg0: $Holder$Reference<T>, arg1: $DataComponentPatch_);
        get upgradeItem(): $ItemStack;
    }
}
