import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        grow(arg0: number): void;
        getStackInSlot(arg0: number): $ItemStack;
        shrink(arg0: number): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlots(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        updateActiveState(arg0: number): void;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        getCachedModifiers(): $Set<$AttributeModifier>;
        applySyncTag(arg0: $CompoundTag_): void;
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        getIdentifier(): string;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getSyncTag(): $CompoundTag;
        getSlots(): number;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        isVisible(): boolean;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): void;
        removeModifier(arg0: $ResourceLocation_): void;
        getRenders(): $NonNullList<boolean>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        clearCachedModifiers(): void;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        hasCosmetic(): boolean;
        canToggleRendering(): boolean;
        clearModifiers(): void;
        getCosmeticStacks(): $IDynamicStackHandler;
        getActiveStates(): $NonNullList<boolean>;
        getDropRule(): $ICurio$DropRule;
        get sizeShift(): number;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get identifier(): string;
        get syncTag(): $CompoundTag;
        get slots(): number;
        get visible(): boolean;
        get renders(): $NonNullList<boolean>;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get cosmeticStacks(): $IDynamicStackHandler;
        get activeStates(): $NonNullList<boolean>;
        get dropRule(): $ICurio$DropRule;
    }
}
