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
        setItem(arg0: $ItemStack_): void;
        getUpgrade(): U;
        remove(): void;
        getItem(): $ItemStack;
        getData(): $DataComponentPatch;
        setData(arg0: $DataComponentPatch_): void;
        get upgrade(): U;
    }
    export interface $UpgradeType<T> extends RegistryMarked<RegistryTypes.ComputercraftTurtleUpgradeTypeTag, RegistryTypes.ComputercraftTurtleUpgradeType> {}
    export class $UpgradeType<T extends $UpgradeBase> {
        static simpleWithCustomIngredient<T extends $UpgradeBase>(arg0: $Function_<$Ingredient, T>): $UpgradeType<T>;
        static simpleWithCustomItem<T extends $UpgradeBase>(arg0: $Function_<$ItemStack, T>): $UpgradeType<T>;
        static create<T extends $UpgradeBase>(arg0: $MapCodec_<T>): $UpgradeType<T>;
        static simple<T extends $UpgradeBase>(arg0: T): $UpgradeType<T>;
    }
    export interface $UpgradeType<T extends $UpgradeBase> {
        codec(): $MapCodec<T>;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeType}.
     */
    export type $UpgradeType_<T> = RegistryTypes.ComputercraftPocketUpgradeType | RegistryTypes.ComputercraftTurtleUpgradeType | (() => $MapCodec_<T>);
    export class $UpgradeBase {
        static getDefaultAdjective(arg0: $ResourceLocation_): string;
    }
    export interface $UpgradeBase {
        getUpgradeItem(arg0: $DataComponentPatch_): $ItemStack;
        /**
         * @deprecated
         */
        getUpgradeData(arg0: $ItemStack_): $DataComponentPatch;
        /**
         * @deprecated
         */
        getCraftingItem(): $ItemStack;
        isItemSuitable(arg0: $ItemStack_): boolean;
        getAdjective(): $Component;
        getCraftingIngredient(): $Ingredient;
        getType(): $UpgradeType<never>;
        get craftingItem(): $ItemStack;
        get adjective(): $Component;
        get craftingIngredient(): $Ingredient;
        get type(): $UpgradeType<never>;
    }
    export class $UpgradeData<T extends $UpgradeBase> {
        getUpgradeItem(): $ItemStack;
        static ofDefault<T extends $UpgradeBase>(arg0: $Holder$Reference<T>): $UpgradeData<T>;
        /**
         * @deprecated
         */
        static of<T extends $UpgradeBase>(arg0: $Holder$Reference<T>, arg1: $DataComponentPatch_): $UpgradeData<T>;
        static of<T extends $UpgradeBase>(arg0: $Holder$Reference<T>, arg1: $ItemStack_, arg2: $DataComponentPatch_): $UpgradeData<T>;
        data(): $DataComponentPatch;
        holder(): $Holder$Reference<T>;
        upgrade(): T;
        /**
         * @deprecated
         */
        constructor(arg0: $Holder$Reference<T>, arg1: $DataComponentPatch_);
        get upgradeItem(): $ItemStack;
    }
}
