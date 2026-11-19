import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $ActiveRecipe, $CustomRecipe, $CustomRecipeInput } from "@package/hellfirepvp/astralsorcery/common/recipe";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $AltarRecipeOutputModifier } from "@package/hellfirepvp/astralsorcery/common/recipe/altar/output";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $TileAltar$AltarType, $TileAltar$AltarType_, $TileAltar, $TileAltar$Data } from "@package/hellfirepvp/astralsorcery/common/tile";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IngredientBridge } from "@package/hellfirepvp/astralsorcery/common/ingredient";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Vector3 } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $LumenStack } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $AltarEffect_, $AltarEffect } from "@package/hellfirepvp/astralsorcery/common/recipe/altar/effect";
import { $Enum, $Comparable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $SizedIngredient, $SizedIngredient_ } from "@package/net/neoforged/neoforge/common/crafting";
export * as effect from "@package/hellfirepvp/astralsorcery/common/recipe/altar/effect";
export * as output from "@package/hellfirepvp/astralsorcery/common/recipe/altar/output";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/altar" {
    export class $ActiveAltarRecipe extends $ActiveRecipe<$AltarRecipe> {
        getPlayerUUID(): $UUID;
        isFinished(arg0: $Level_): boolean;
        getTick(): number;
        consumeItemInputs(arg0: $TileAltar$Data, arg1: $ServerLevel, arg2: $BlockPos_, arg3: boolean): boolean;
        getAdditionalInputs(): $List<$ActiveAltarRecipe$AdditionalInput>;
        tickTrackAdditionalInputs(arg0: $TileAltar, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $Set_<$BaseConstellation_>): void;
        playLiquidDrawEffects(arg0: $Level_, arg1: $BlockPos_): void;
        copyEffectDataTo(arg0: $ActiveAltarRecipe): void;
        getDrawnFluid(): $Map<number, $FluidStack>;
        getRecipeDirection(): $Direction;
        getProgressTick(): number;
        getCraftingState(): $ActiveAltarRecipe$State;
        getDrawnLumen(): $List<$LumenStack>;
        matches(arg0: $ServerLevel, arg1: $TileAltar): boolean;
        static of(arg0: $RecipeHolder_<$AltarRecipe>, arg1: $UUID_, arg2: $Direction_): $ActiveAltarRecipe;
        tick(arg0: $Level_): void;
        tickEffects(arg0: $Level_, arg1: $TileAltar): void;
        getAdditionalInput(arg0: boolean, arg1: number): $ActiveAltarRecipe$AdditionalInput;
        static CODEC: $Codec<$ActiveAltarRecipe>;
        get playerUUID(): $UUID;
        get additionalInputs(): $List<$ActiveAltarRecipe$AdditionalInput>;
        get drawnFluid(): $Map<number, $FluidStack>;
        get recipeDirection(): $Direction;
        get progressTick(): number;
        get craftingState(): $ActiveAltarRecipe$State;
        get drawnLumen(): $List<$LumenStack>;
    }
    export class $ActiveAltarRecipe$AdditionalInput implements $Comparable<$ActiveAltarRecipe$AdditionalInput> {
        isItem(): boolean;
        getCapturedEntityUUID(): ($UUID) | undefined;
        getInputIndex(): number;
        getTargetPosition(): $Vector3;
        compareTo(arg0: $ActiveAltarRecipe$AdditionalInput): number;
        isValid(arg0: $ServerLevel, arg1: $TileAltar): boolean;
        static itemInput(arg0: number): $ActiveAltarRecipe$AdditionalInput;
        static fluidInput(arg0: number): $ActiveAltarRecipe$AdditionalInput;
        static CODEC: $Codec<$ActiveAltarRecipe$AdditionalInput>;
        static EMPTY: $ActiveAltarRecipe$AdditionalInput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ActiveAltarRecipe$AdditionalInput>;
        get item(): boolean;
        get capturedEntityUUID(): ($UUID) | undefined;
        get inputIndex(): number;
        get targetPosition(): $Vector3;
    }
    export class $AltarRecipe extends $CustomRecipe<$AltarRecipe, $AltarCraftingInput> {
        getRequiredStarlight(): $Set<$BaseConstellation>;
        createInputForDisplay(arg0: number): $AltarCraftingInput;
        getOutputsForDisplay(arg0: $AltarCraftingInput, arg1: $HolderLookup$Provider, arg2: number): $List<$ItemStack>;
        getFocusConstellation(): ($BaseConstellation) | undefined;
        getBaseFocusShatterChance(): number;
        isOnlyNight(): boolean;
        getRequiredFluid(): $List<$FluidStack>;
        getRequiredType(): $TileAltar$AltarType;
        getRequiredLumen(): $List<$LumenStack>;
        mayChain(): boolean;
        consumeInputs(arg0: $AltarCraftingInput, arg1: $HolderLookup$Provider): boolean;
        getOutputModifiers(): $List<$AltarRecipeOutputModifier>;
        createOutput(arg0: $AltarCraftingInput, arg1: $HolderLookup$Provider): void;
        matches(arg0: $AltarCraftingInput, arg1: $Level_): boolean;
        getDuration(): number;
        getGrid(): $AltarRecipeGrid;
        getOutputs(arg0: $AltarCraftingInput, arg1: $HolderLookup$Provider): $List<$ItemStack>;
        getOutputs(): $List<$ItemStack>;
        getRequiredAdditionalInputs(): $List<$SizedIngredient>;
        getEffects(): $Set<$AltarEffect>;
        static CODEC: $MapCodec<$AltarRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AltarRecipe>;
        constructor(arg0: $TileAltar$AltarType_, arg1: $AltarRecipeGrid, arg2: $List_<$ItemStack_>, arg3: ($BaseConstellation_) | undefined, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: $Set_<$BaseConstellation_>, arg9: $List_<$LumenStack>, arg10: $List_<$FluidStack_>, arg11: $List_<$SizedIngredient_>, arg12: $Set_<$AltarEffect_>, arg13: $List_<$AltarRecipeOutputModifier>);
        get requiredStarlight(): $Set<$BaseConstellation>;
        get focusConstellation(): ($BaseConstellation) | undefined;
        get baseFocusShatterChance(): number;
        get onlyNight(): boolean;
        get requiredFluid(): $List<$FluidStack>;
        get requiredType(): $TileAltar$AltarType;
        get requiredLumen(): $List<$LumenStack>;
        get outputModifiers(): $List<$AltarRecipeOutputModifier>;
        get duration(): number;
        get grid(): $AltarRecipeGrid;
        get requiredAdditionalInputs(): $List<$SizedIngredient>;
        get effects(): $Set<$AltarEffect>;
    }
    export class $AltarCraftingInput extends $CustomRecipeInput {
        getPlayerUUID(): $UUID;
        getFocusConstellation(): ($BaseConstellation) | undefined;
        getRelayInputs(): $List<$ItemStack>;
        getAltar(): $TileAltar;
        getGridInputs(): $List<$ItemStack>;
        static createDisplay(arg0: $BaseConstellation_ | null, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $AltarCraftingInput;
        getCraftingServerPlayer(): ($ServerPlayer) | undefined;
        static create(arg0: $TileAltar, arg1: $BlockGetter, arg2: $UUID_ | null): $AltarCraftingInput;
        constructor(arg0: $TileAltar | null, arg1: $UUID_ | null, arg2: $BaseConstellation_ | null);
        get playerUUID(): $UUID;
        get focusConstellation(): ($BaseConstellation) | undefined;
        get relayInputs(): $List<$ItemStack>;
        get altar(): $TileAltar;
        get gridInputs(): $List<$ItemStack>;
        get craftingServerPlayer(): ($ServerPlayer) | undefined;
    }
    export class $ActiveAltarRecipe$State extends $Enum<$ActiveAltarRecipe$State> implements $StringRepresentable {
        getSerializedName(): string;
        canProgress(): boolean;
        static values(): $ActiveAltarRecipe$State[];
        static valueOf(arg0: string): $ActiveAltarRecipe$State;
        getRemappedEnumConstantName(): string;
        static WAITING_STARLIGHT_LEVELS: $ActiveAltarRecipe$State;
        static CODEC: $Codec<$ActiveAltarRecipe$State>;
        static ACTIVE: $ActiveAltarRecipe$State;
        static WAITING_ADDITIONAL_INPUTS: $ActiveAltarRecipe$State;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ActiveAltarRecipe$State}.
     */
    export type $ActiveAltarRecipe$State_ = "active" | "waiting_starlight_levels" | "waiting_additional_inputs";
    export class $AltarRecipeGrid {
        getRelayInputs(): $List<$IngredientBridge>;
        matches(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>): boolean;
        static create(arg0: $Map_<string, $IngredientBridge>, arg1: $List_<string>, arg2: $List_<string>): $AltarRecipeGrid;
        getInputs(): $List<$IngredientBridge>;
        static CODEC: $Codec<$AltarRecipeGrid>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AltarRecipeGrid>;
        get relayInputs(): $List<$IngredientBridge>;
        get inputs(): $List<$IngredientBridge>;
    }
}
