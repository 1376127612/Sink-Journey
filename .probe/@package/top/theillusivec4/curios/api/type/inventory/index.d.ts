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
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        grow(arg0: number): void;
        shrink(arg0: number): void;
        getSlots(): number;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        addTransientModifier(arg0: $AttributeModifier_): void;
        getActiveStates(): $NonNullList<boolean>;
        getDropRule(): $ICurio$DropRule;
        deserializeNBT(arg0: $CompoundTag_): void;
        serializeNBT(): $CompoundTag;
        getCosmeticStacks(): $IDynamicStackHandler;
        getSyncTag(): $CompoundTag;
        clearModifiers(): void;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        getCachedModifiers(): $Set<$AttributeModifier>;
        updateActiveState(arg0: number): void;
        applySyncTag(arg0: $CompoundTag_): void;
        hasCosmetic(): boolean;
        canToggleRendering(): boolean;
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getIdentifier(): string;
        getSlots(): number;
        isVisible(): boolean;
        removeModifier(arg0: $ResourceLocation_): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        getRenders(): $NonNullList<boolean>;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        clearCachedModifiers(): void;
        get activeStates(): $NonNullList<boolean>;
        get dropRule(): $ICurio$DropRule;
        get cosmeticStacks(): $IDynamicStackHandler;
        get syncTag(): $CompoundTag;
        get sizeShift(): number;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get identifier(): string;
        get slots(): number;
        get visible(): boolean;
        get renders(): $NonNullList<boolean>;
        get permanentModifiers(): $Set<$AttributeModifier>;
    }
}
