import { $BlockEntityInfo, $BlockEntityBuilder } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $BlockBuilder, $BlockItemBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Item } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ProcessorRecipeDyn } from "@package/com/nred/nuclearcraft/recipe/processor";
import { $List_ } from "@package/java/util";
import { $ProcessorMenu } from "@package/com/nred/nuclearcraft/menu/processor";
import { $Consumer } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/nred/nuclearcraft/compat/kubejs/custom_processor" {
    export class $CustomProcessorBlockEntityBuilder extends $BlockEntityBuilder {
        registryKey: $ResourceKey<$Registry<$BlockEntityType<never>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        info: $BlockEntityInfo;
        constructor(arg0: $ResourceLocation_, arg1: $BlockEntityInfo);
    }
    export class $CustomProcessorMenuBuilder extends $BuilderBase<$MenuType<$ProcessorMenu<never, never, never, never>>> {
        registryKey: $ResourceKey<$Registry<$MenuType<$ProcessorMenu<never, never, never, never>>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CustomProcessorItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CustomProcessorRecipeBuilder extends $BuilderBase<$RecipeType<$ProcessorRecipeDyn>> {
        registryKey: $ResourceKey<$Registry<$RecipeType<$ProcessorRecipeDyn>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CustomProcessorRecipeSerializerBuilder extends $BuilderBase<$RecipeSerializer<$ProcessorRecipeDyn>> {
        registryKey: $ResourceKey<$Registry<$RecipeSerializer<$ProcessorRecipeDyn>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CustomProcessorBuilder$NCSlots {
        static bigSlot(arg0: number, arg1: number): number[];
        static standardSlot(arg0: number, arg1: number): number[];
        constructor();
    }
    export class $CustomProcessorBuilder extends $BlockBuilder {
        /**
         * Sets GUI's width and height
         */
        setGuiWH(arg0: number, arg1: number): this;
        /**
         * Sets item x and y coords of the machine config
         */
        setMachineConfigGuiXY(arg0: number, arg1: number): this;
        /**
         * Sets recipe handler's name
         */
        setRecipeHandlerName(arg0: string): this;
        /**
         * Sets item input slots sizes and positions
         */
        setFluidOutputSlots(arg0: $List_<never>): this;
        /**
         * Sets the x, y, width, height, u, v of the progress bar
         */
        setProgressBarGuiXYWHUV(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        /**
         * Sets the x, y, width, height, u, v of the energy bar
         */
        setEnergyBarGuiXYWHUV(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        /**
         * Sets texture for use in recipe viewers
         */
        setRecipeViewerTexture(arg0: string): this;
        /**
         * Sets x, y, width and height of the recipe viewer tooltip area
         */
        setRecipeViewerTooltipXYWH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        /**
         * Sets default time to complete and operation
         */
        setInputTankCapacity(arg0: number): this;
        /**
         * Sets item x and y coords of the redstone config
         */
        setRedstoneControlGuiXY(arg0: number, arg1: number): this;
        /**
         * Sets default power to complete and operation
         */
        setOutputTankCapacity(arg0: number): this;
        /**
         * Sets default time to complete and operation
         */
        setDefaultProcessTime(arg0: number): this;
        /**
         * Sets x, y, width and height of the speed upgrade slot
         */
        setSpeedUpgradeSlot(arg0: number, arg1: number, arg2: number, arg3: number): this;
        /**
         * Sets x, y, width and height of the energy upgrade slot
         */
        setEnergyUpgradeSlot(arg0: number, arg1: number, arg2: number, arg3: number): this;
        /**
         * Sets default power to complete and operation
         */
        setDefaultProcessPower(arg0: number): this;
        /**
         * Sets the title in the processors menu
         */
        setMenuTitle(arg0: string): this;
        /**
         * Sets x, y, width and height of the recipe viewer background
         */
        setRecipeViewerBackgroundXYWH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        /**
         * Sets x, y, width and height of the recipe viewer clickable area
         */
        setRecipeViewerClickAreaXYWH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        /**
         * Sets the title in the recipe viewer
         */
        setRecipeViewerTitle(arg0: string): this;
        /**
         * Sets the particles given off by the processor
         */
        setParticles(...arg0: string[]): this;
        /**
         * Sets item input slots sizes and positions
         */
        setItemOutputSlots(arg0: $List_<never>): this;
        /**
         * Sets item x and y coords of the players inventory
         */
        setPlayerGuiXY(arg0: number, arg1: number): this;
        /**
         * Sets whether processor consumes inputs instantly
         */
        setConsumesInputs(arg0: boolean): this;
        /**
         * Sets texture for use in the processor screen
         */
        setScreenTexture(arg0: string): this;
        /**
         * Sets x and y to be extend from the standard size
         */
        standardExtend(arg0: number, arg1: number): this;
        /**
         * Disables the progress bar
         */
        disableProgressBar(): this;
        /**
         * Sets whether processor is a generator of power
         */
        setIsGenerator(arg0: boolean): this;
        /**
         * Sets whether processor can lose progress
         */
        setLosesProgress(arg0: boolean): this;
        /**
         * Sets item input slots sizes and positions
         */
        setFluidInputSlots(arg0: $List_<never>): this;
        /**
         * Sets item input slots sizes and positions
         */
        setItemInputSlots(arg0: $List_<never>): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_, arg1: boolean);
        set recipeHandlerName(value: string);
        set fluidOutputSlots(value: $List_<never>);
        set recipeViewerTexture(value: string);
        set inputTankCapacity(value: number);
        set outputTankCapacity(value: number);
        set defaultProcessTime(value: number);
        set defaultProcessPower(value: number);
        set menuTitle(value: string);
        set recipeViewerTitle(value: string);
        set particles(value: string[]);
        set itemOutputSlots(value: $List_<never>);
        set consumesInputs(value: boolean);
        set screenTexture(value: string);
        set isGenerator(value: boolean);
        set losesProgress(value: boolean);
        set fluidInputSlots(value: $List_<never>);
        set itemInputSlots(value: $List_<never>);
    }
}
