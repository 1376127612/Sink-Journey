import { $Level_ } from "@package/net/minecraft/world/level";
import { $ILevelCondition, $ILevelConditionType, $IPlayerCondition } from "@package/mysticmods/roots/api/condition";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $GroveNumber, $GroveNumber_ } from "@package/mysticmods/roots/api/grove";
import { $Ingredient, $Ingredient_, $Recipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $IRootsCrafting, $IRootsBlockEntityCrafting } from "@package/mysticmods/roots/api/recipe/crafting";
import { $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ChanceOutput, $ChanceOutput_ } from "@package/mysticmods/roots/api/recipe/output";
import { $Unlock } from "@package/mysticmods/roots/api/attachment";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as crafting from "@package/mysticmods/roots/api/recipe/crafting";
export * as output from "@package/mysticmods/roots/api/recipe/output";
export * as inventory from "@package/mysticmods/roots/api/recipe/inventory";

declare module "@package/mysticmods/roots/api/recipe" {
    export class $RootsRecipe<H extends $IItemHandler, W extends $IRootsCrafting<H>> implements $IRootsRecipe<W> {
        getUnlocks(): $List<$Unlock<never>>;
        assemble(arg0: W, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        getPowerRequirements(): $List<$GroveNumber>;
        getPlayerConditions(): $List<$IPlayerCondition>;
        buildCachedOutputs(arg0: $HolderLookup$Provider): void;
        getChanceOutputs(): $List<$ChanceOutput>;
        getCachedOutputs(): $List<$ChanceOutput>;
        getLevelConditions(): $List<$ILevelCondition>;
        matches(arg0: W, arg1: $Level_): boolean;
        getPriority(): number;
        assembleChanceOutputs(arg0: W, arg1: $RandomSource, arg2: $HolderLookup$Provider): $List<$ItemStack>;
        buildCachedOutputs(arg0: $List_<$ChanceOutput_>, arg1: $HolderLookup$Provider): void;
        hasOtherOutput(arg0: $HolderLookup$Provider): boolean;
        hasChanceOutputs(arg0: $HolderLookup$Provider): boolean;
        hasItemOutput(arg0: $HolderLookup$Provider): boolean;
        assembleOutputs(arg0: W, arg1: $RandomSource, arg2: $HolderLookup$Provider, arg3: $Supplier_<$List<$ItemStack>> | null): $List<$ItemStack>;
        checkUnlocks(arg0: $Level_, arg1: $ServerPlayer): $UnlockResult;
        partiallyMatches(arg0: W, arg1: $Level_): boolean;
        process(arg0: $List_<$ItemStack_>): $NonNullList<$ItemStack>;
        isDynamic(): boolean;
        checkConditions(arg0: $Level_, arg1: $Player, arg2: $BoundingBox, arg3: $BlockPos_): $ConditionResult;
        hasOutput(arg0: $HolderLookup$Provider): boolean;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        isSpecial(): boolean;
        handler$elb000$bclib$bcl_getRemainingItems(arg0: $RecipeInput, arg1: $CallbackInfoReturnable<any>): void;
        getGroup(): string;
        getRemainingItems(arg0: W): $NonNullList<$ItemStack>;
        constructor(arg0: $BaseRecipeData);
        get unlocks(): $List<$Unlock<never>>;
        get ingredients(): $NonNullList<$Ingredient>;
        get powerRequirements(): $List<$GroveNumber>;
        get playerConditions(): $List<$IPlayerCondition>;
        get chanceOutputs(): $List<$ChanceOutput>;
        get cachedOutputs(): $List<$ChanceOutput>;
        get levelConditions(): $List<$ILevelCondition>;
        get priority(): number;
        get dynamic(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
        get group(): string;
    }
    export class $UnlockResult extends $Record {
        player(): $Player;
        failedUnlocks(): $List<$Unlock<never>>;
        anyFailed(): boolean;
        report(): void;
        constructor(failedUnlocks: $List_<$Unlock<never>>, player: $Player);
    }
    /**
     * Values that may be interpreted as {@link $UnlockResult}.
     */
    export type $UnlockResult_ = { player?: $Player, failedUnlocks?: $List_<$Unlock<never>>,  } | [player?: $Player, failedUnlocks?: $List_<$Unlock<never>>, ];
    export class $BaseRecipeData {
        updateFrom(arg0: $BaseRecipeData): void;
        hasTaggedCondition(arg0: $TagKey_<$ILevelConditionType<never>>): boolean;
        isEmpty(): boolean;
        result: $ItemStack;
        levelConditions: $List<$ILevelCondition>;
        static CODEC: $MapCodec<$BaseRecipeData>;
        powerRequirements: $List<$GroveNumber>;
        playerConditions: $List<$IPlayerCondition>;
        static OPTIONAL_CODEC: $Codec<$BaseRecipeData>;
        ingredients: $NonNullList<$Ingredient>;
        chanceOutputs: $List<$ChanceOutput>;
        unlocks: $List<$Unlock<never>>;
        priority: number;
        static INGREDIENT_LIST_STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $NonNullList<$Ingredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BaseRecipeData>;
        constructor(arg0: $NonNullList<$Ingredient_>, arg1: $List_<$ILevelCondition>, arg2: $List_<$IPlayerCondition>, arg3: $ItemStack_, arg4: $List_<$ChanceOutput_>, arg5: $List_<$Unlock<never>>, arg6: $List_<$GroveNumber_>, arg7: number);
        constructor();
        get empty(): boolean;
    }
    export class $RootsTileRecipe<H extends $IItemHandler, T extends $BlockEntity, W extends $IRootsBlockEntityCrafting<H, T>> extends $RootsRecipe<H, W> {
        constructor(arg0: $BaseRecipeData);
    }
    export class $IRootsRecipe<W extends $RecipeInput> {
    }
    export interface $IRootsRecipe<W extends $RecipeInput> extends $Recipe<W> {
        getUnlocks(): $List<$Unlock<never>>;
        getPowerRequirements(): $List<$GroveNumber>;
        assembleChanceOutputs(arg0: W, arg1: $RandomSource, arg2: $HolderLookup$Provider): $List<$ItemStack>;
        getPlayerConditions(): $List<$IPlayerCondition>;
        buildCachedOutputs(arg0: $HolderLookup$Provider): void;
        buildCachedOutputs(arg0: $List_<$ChanceOutput_>, arg1: $HolderLookup$Provider): void;
        getChanceOutputs(): $List<$ChanceOutput>;
        getCachedOutputs(): $List<$ChanceOutput>;
        hasOtherOutput(arg0: $HolderLookup$Provider): boolean;
        getLevelConditions(): $List<$ILevelCondition>;
        hasChanceOutputs(arg0: $HolderLookup$Provider): boolean;
        hasItemOutput(arg0: $HolderLookup$Provider): boolean;
        assembleOutputs(arg0: W, arg1: $RandomSource, arg2: $HolderLookup$Provider, arg3: $Supplier_<$List<$ItemStack>> | null): $List<$ItemStack>;
        checkUnlocks(arg0: $Level_, arg1: $ServerPlayer): $UnlockResult;
        partiallyMatches(arg0: W, arg1: $Level_): boolean;
        getPriority(): number;
        process(arg0: $List_<$ItemStack_>): $NonNullList<$ItemStack>;
        isDynamic(): boolean;
        checkConditions(arg0: $Level_, arg1: $Player, arg2: $BoundingBox, arg3: $BlockPos_): $ConditionResult;
        hasOutput(arg0: $HolderLookup$Provider): boolean;
        get unlocks(): $List<$Unlock<never>>;
        get powerRequirements(): $List<$GroveNumber>;
        get playerConditions(): $List<$IPlayerCondition>;
        get chanceOutputs(): $List<$ChanceOutput>;
        get cachedOutputs(): $List<$ChanceOutput>;
        get levelConditions(): $List<$ILevelCondition>;
        get priority(): number;
        get dynamic(): boolean;
    }
    export class $ConditionResult extends $Record {
        anyFailed(): boolean;
        report(arg0: $Player): void;
        failedLevelConditions(): $List<$ILevelCondition>;
        failedPlayerConditions(): $List<$IPlayerCondition>;
        constructor(failedLevelConditions: $List_<$ILevelCondition>, failedPlayerConditions: $List_<$IPlayerCondition>);
    }
    /**
     * Values that may be interpreted as {@link $ConditionResult}.
     */
    export type $ConditionResult_ = { failedLevelConditions?: $List_<$ILevelCondition>, failedPlayerConditions?: $List_<$IPlayerCondition>,  } | [failedLevelConditions?: $List_<$ILevelCondition>, failedPlayerConditions?: $List_<$IPlayerCondition>, ];
}
