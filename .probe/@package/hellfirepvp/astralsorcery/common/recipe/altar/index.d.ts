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
        matches(arg0: $ServerLevel, arg1: $TileAltar): boolean;
        static of(arg0: $RecipeHolder_<$AltarRecipe>, arg1: $UUID_, arg2: $Direction_): $ActiveAltarRecipe;
        getAdditionalInput(arg0: boolean, arg1: number): $ActiveAltarRecipe$AdditionalInput;
        tick(arg0: $Level_): void;
        copyEffectDataTo(arg0: $ActiveAltarRecipe): void;
        getPlayerUUID(): $UUID;
        tickEffects(arg0: $Level_, arg1: $TileAltar): void;
        getDrawnLumen(): $List<$LumenStack>;
        getCraftingState(): $ActiveAltarRecipe$State;
        consumeItemInputs(arg0: $TileAltar$Data, arg1: $ServerLevel, arg2: $BlockPos_, arg3: boolean): boolean;
        isFinished(arg0: $Level_): boolean;
        getTick(): number;
        getDrawnFluid(): $Map<number, $FluidStack>;
        getProgressTick(): number;
        getRecipeDirection(): $Direction;
        getAdditionalInputs(): $List<$ActiveAltarRecipe$AdditionalInput>;
        playLiquidDrawEffects(arg0: $Level_, arg1: $BlockPos_): void;
        tickTrackAdditionalInputs(arg0: $TileAltar, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $Set_<$BaseConstellation_>): void;
        static CODEC: $Codec<$ActiveAltarRecipe>;
        get playerUUID(): $UUID;
        get drawnLumen(): $List<$LumenStack>;
        get craftingState(): $ActiveAltarRecipe$State;
        get drawnFluid(): $Map<number, $FluidStack>;
        get progressTick(): number;
        get recipeDirection(): $Direction;
        get additionalInputs(): $List<$ActiveAltarRecipe$AdditionalInput>;
    }
    export class $ActiveAltarRecipe$AdditionalInput implements $Comparable<$ActiveAltarRecipe$AdditionalInput> {
        compareTo(arg0: $ActiveAltarRecipe$AdditionalInput): number;
        isValid(arg0: $ServerLevel, arg1: $TileAltar): boolean;
        isItem(): boolean;
        getTargetPosition(): $Vector3;
        getInputIndex(): number;
        getCapturedEntityUUID(): ($UUID) | undefined;
        static fluidInput(arg0: number): $ActiveAltarRecipe$AdditionalInput;
        static itemInput(arg0: number): $ActiveAltarRecipe$AdditionalInput;
        static CODEC: $Codec<$ActiveAltarRecipe$AdditionalInput>;
        static EMPTY: $ActiveAltarRecipe$AdditionalInput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ActiveAltarRecipe$AdditionalInput>;
        get item(): boolean;
        get targetPosition(): $Vector3;
        get inputIndex(): number;
        get capturedEntityUUID(): ($UUID) | undefined;
    }
    export class $AltarRecipe extends $CustomRecipe<$AltarRecipe, $AltarCraftingInput> {
        matches(arg0: $AltarCraftingInput, arg1: $Level_): boolean;
        getDuration(): number;
        getEffects(): $Set<$AltarEffect>;
        getOutputs(arg0: $AltarCraftingInput, arg1: $HolderLookup$Provider): $List<$ItemStack>;
        getOutputs(): $List<$ItemStack>;
        getFocusConstellation(): ($BaseConstellation) | undefined;
        getRequiredStarlight(): $Set<$BaseConstellation>;
        getOutputsForDisplay(arg0: $AltarCraftingInput, arg1: $HolderLookup$Provider, arg2: number): $List<$ItemStack>;
        getBaseFocusShatterChance(): number;
        createInputForDisplay(arg0: number): $AltarCraftingInput;
        getRequiredType(): $TileAltar$AltarType;
        isOnlyNight(): boolean;
        consumeInputs(arg0: $AltarCraftingInput, arg1: $HolderLookup$Provider): boolean;
        getRequiredLumen(): $List<$LumenStack>;
        getRequiredFluid(): $List<$FluidStack>;
        createOutput(arg0: $AltarCraftingInput, arg1: $HolderLookup$Provider): void;
        getOutputModifiers(): $List<$AltarRecipeOutputModifier>;
        getRequiredAdditionalInputs(): $List<$SizedIngredient>;
        getGrid(): $AltarRecipeGrid;
        mayChain(): boolean;
        static CODEC: $MapCodec<$AltarRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AltarRecipe>;
        constructor(arg0: $TileAltar$AltarType_, arg1: $AltarRecipeGrid, arg2: $List_<$ItemStack_>, arg3: ($BaseConstellation_) | undefined, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: $Set_<$BaseConstellation_>, arg9: $List_<$LumenStack>, arg10: $List_<$FluidStack_>, arg11: $List_<$SizedIngredient_>, arg12: $Set_<$AltarEffect_>, arg13: $List_<$AltarRecipeOutputModifier>);
        get duration(): number;
        get effects(): $Set<$AltarEffect>;
        get focusConstellation(): ($BaseConstellation) | undefined;
        get requiredStarlight(): $Set<$BaseConstellation>;
        get baseFocusShatterChance(): number;
        get requiredType(): $TileAltar$AltarType;
        get onlyNight(): boolean;
        get requiredLumen(): $List<$LumenStack>;
        get requiredFluid(): $List<$FluidStack>;
        get outputModifiers(): $List<$AltarRecipeOutputModifier>;
        get requiredAdditionalInputs(): $List<$SizedIngredient>;
        get grid(): $AltarRecipeGrid;
    }
    export class $AltarCraftingInput extends $CustomRecipeInput {
        static create(arg0: $TileAltar, arg1: $BlockGetter, arg2: $UUID_ | null): $AltarCraftingInput;
        getCraftingServerPlayer(): ($ServerPlayer) | undefined;
        getPlayerUUID(): $UUID;
        getFocusConstellation(): ($BaseConstellation) | undefined;
        getGridInputs(): $List<$ItemStack>;
        getRelayInputs(): $List<$ItemStack>;
        static createDisplay(arg0: $BaseConstellation_ | null, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $AltarCraftingInput;
        getAltar(): $TileAltar;
        constructor(arg0: $TileAltar | null, arg1: $UUID_ | null, arg2: $BaseConstellation_ | null);
        get craftingServerPlayer(): ($ServerPlayer) | undefined;
        get playerUUID(): $UUID;
        get focusConstellation(): ($BaseConstellation) | undefined;
        get gridInputs(): $List<$ItemStack>;
        get relayInputs(): $List<$ItemStack>;
        get altar(): $TileAltar;
    }
    export class $ActiveAltarRecipe$State extends $Enum<$ActiveAltarRecipe$State> implements $StringRepresentable {
        static values(): $ActiveAltarRecipe$State[];
        static valueOf(arg0: string): $ActiveAltarRecipe$State;
        getSerializedName(): string;
        canProgress(): boolean;
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
        matches(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>): boolean;
        static create(arg0: $Map_<string, $IngredientBridge>, arg1: $List_<string>, arg2: $List_<string>): $AltarRecipeGrid;
        getInputs(): $List<$IngredientBridge>;
        getRelayInputs(): $List<$IngredientBridge>;
        static CODEC: $Codec<$AltarRecipeGrid>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AltarRecipeGrid>;
        get inputs(): $List<$IngredientBridge>;
        get relayInputs(): $List<$IngredientBridge>;
    }
}
