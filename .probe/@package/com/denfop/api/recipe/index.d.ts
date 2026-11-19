import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $Inventory } from "@package/com/denfop/inventory";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $List_ } from "@package/java/util";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $ProcessMultiComponent } from "@package/com/denfop/componets";
import { $IInputItemStack } from "@package/com/denfop/recipe";

declare module "@package/com/denfop/api/recipe" {
    export class $BaseMachineRecipe {
        static readNBT(arg0: $CompoundTag_, arg1: $RegistryAccess): $BaseMachineRecipe;
        writeNBT(arg0: $RegistryAccess): $CompoundTag;
        matches(arg0: $List_<$ItemStack_>): boolean;
        getOutput(): $RecipeOutput;
        output: $RecipeOutput;
        input: $IInput;
        constructor(arg0: $IInput, arg1: $RecipeOutput);
    }
    export class $InventoryMultiRecipes extends $Inventory {
        getRecipe(): $IBaseRecipe;
        continue_proccess(arg0: $InventoryOutput, arg1: number): boolean;
        changeAccepts(arg0: $ItemStack_): void;
        setNameRecipe(arg0: string): void;
        fastprocess(arg0: number): $MachineRecipe;
        load(): void;
        process(arg0: number): $MachineRecipe;
        consume(arg0: number, arg1: number, arg2: number): void;
        consume(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        consume(arg0: number): $MachineRecipe;
        consume(arg0: number, arg1: number): void;
        consume(arg0: $MachineRecipe): $BaseMachineRecipe;
        recycler_output: $MachineRecipe;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: $IBaseRecipe, arg2: $IMultiUpdateTick, arg3: number, arg4: $ProcessMultiComponent);
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IMultiUpdateTick, arg3: $FluidTank, arg4: number, arg5: $ProcessMultiComponent);
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IMultiUpdateTick, arg3: number, arg4: $ProcessMultiComponent);
        get recipe(): $IBaseRecipe;
        set nameRecipe(value: string);
    }
    export class $InventoryOutput extends $Inventory {
        addWithoutIgnoring(arg0: $List_<$ItemStack_>, arg1: boolean): boolean;
        add(arg0: $List_<$ItemStack_>, arg1: number): boolean;
        add(arg0: $ItemStack_, arg1: number): void;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: number);
    }
    export class $IMultiUpdateTick {
    }
    export interface $IMultiUpdateTick extends $IUpdateTick {
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: $MachineRecipe, arg1: number): void;
    }
    export class $MachineRecipe {
        getRecipe(): $BaseMachineRecipe;
        getList(): $List<number>;
        constructor(arg0: $BaseMachineRecipe, arg1: $List_<number>);
        get recipe(): $BaseMachineRecipe;
        get list(): $List<number>;
    }
    export class $IBaseRecipe {
    }
    export interface $IBaseRecipe {
        workbench(): boolean;
        getSize(): number;
        getName(): string;
        consume(): boolean;
        require(): boolean;
        get size(): number;
        get name(): string;
    }
    export class $RecipeOutput {
        metadata: $CompoundTag;
        items: $List<$ItemStack>;
        constructor(arg0: $CompoundTag_, arg1: $List_<$ItemStack_>);
        constructor(arg0: $CompoundTag_, ...arg1: $ItemStack_[]);
    }
    export class $IInput {
    }
    export interface $IInput {
        getStackInputs(): $List<$ItemStack>;
        writeNBT(arg0: $RegistryAccess): $CompoundTag;
        getAllStackInputs(): $List<$ItemStack>;
        getFluidInputs(): $List<$FluidStack>;
        hasFluids(): boolean;
        getInputs(): $List<$IInputItemStack>;
        getFluid(): $FluidStack;
        get stackInputs(): $List<$ItemStack>;
        get allStackInputs(): $List<$ItemStack>;
        get fluidInputs(): $List<$FluidStack>;
        get inputs(): $List<$IInputItemStack>;
        get fluid(): $FluidStack;
    }
    export class $IUpdateTick {
    }
    export interface $IUpdateTick {
        getRecipeOutput(arg0: number): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        onUpdate(): void;
    }
    export class $IHasRecipe {
    }
    export interface $IHasRecipe {
        getName(): string;
        init(): void;
        get name(): string;
    }
}
