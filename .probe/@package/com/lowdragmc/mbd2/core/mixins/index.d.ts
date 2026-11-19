import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Ingredient$Value_ } from "@package/net/minecraft/world/item/crafting";
import { $RenderBuffers } from "@package/net/minecraft/client/renderer";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@package/com/lowdragmc/mbd2/core/mixins" {
    export class $IngredientAccessor {
    }
    export interface $IngredientAccessor {
        setCustomIngredient(arg0: $ICustomIngredient): void;
        setItemStacks(arg0: $ItemStack_[]): void;
        setValues(arg0: $Ingredient$Value_[]): void;
        set customIngredient(value: $ICustomIngredient);
        set itemStacks(value: $ItemStack_[]);
        set values(value: $Ingredient$Value_[]);
    }
    export class $FluidIngredientAccessor {
    }
    export interface $FluidIngredientAccessor {
        setStacks(arg0: $FluidStack_[]): void;
        set stacks(value: $FluidStack_[]);
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredientAccessor}.
     */
    export type $FluidIngredientAccessor_ = ((arg0: $FluidStack[]) => void);
    export class $SizedIngredientAccessor {
    }
    export interface $SizedIngredientAccessor {
        setCachedStacks(arg0: $ItemStack_[]): void;
        set cachedStacks(value: $ItemStack_[]);
    }
    /**
     * Values that may be interpreted as {@link $SizedIngredientAccessor}.
     */
    export type $SizedIngredientAccessor_ = ((arg0: $ItemStack[]) => void);
    export class $ItemValueAccessor {
    }
    export interface $ItemValueAccessor {
        setItem(arg0: $ItemStack_): void;
        getItem(): $ItemStack;
    }
    export class $SizedFluidIngredientAccessor {
    }
    export interface $SizedFluidIngredientAccessor {
        setCachedStacks(arg0: $FluidStack_[]): void;
        set cachedStacks(value: $FluidStack_[]);
    }
    /**
     * Values that may be interpreted as {@link $SizedFluidIngredientAccessor}.
     */
    export type $SizedFluidIngredientAccessor_ = ((arg0: $FluidStack[]) => void);
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        getRenderBuffers(): $RenderBuffers;
        get renderBuffers(): $RenderBuffers;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = (() => $RenderBuffers);
    export class $TagValueAccessor {
    }
    export interface $TagValueAccessor {
        getTag(): $TagKey<$Item>;
        setTag(arg0: $TagKey_<$Item>): void;
    }
}
