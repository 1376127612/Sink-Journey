import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List_ } from "@package/java/util";

declare module "@package/com/blakebr0/cucumber/event" {
    export class $RecipeManagerLoadedEvent extends $Event {
        getRecipeManager(): $RecipeManager;
        constructor(arg0: $RecipeManager);
        get recipeManager(): $RecipeManager;
    }
    export class $ScytheHarvestCropEvent extends $Event implements $ICancellableEvent {
        getPos(): $BlockPos;
        getState(): $BlockState;
        getLevel(): $LevelAccessor;
        getItemStack(): $ItemStack;
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ItemStack_, arg4: $Player);
        get pos(): $BlockPos;
        get state(): $BlockState;
        get level(): $LevelAccessor;
        get itemStack(): $ItemStack;
        get player(): $Player;
    }
    export class $RecipeManagerLoadingEvent extends $Event {
        addRecipe(arg0: $RecipeHolder_<never>): void;
        getRecipeManager(): $RecipeManager;
        constructor(arg0: $RecipeManager, arg1: $List_<$RecipeHolder_<never>>);
        get recipeManager(): $RecipeManager;
    }
    export class $ItemBreakEvent extends $Event {
        getAmount(): number;
        getItem(): $Item;
        getLevel(): $ServerLevel;
        getEntity(): $LivingEntity;
        getItemStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: number, arg2: $ServerLevel, arg3: $LivingEntity);
        get amount(): number;
        get item(): $Item;
        get level(): $ServerLevel;
        get entity(): $LivingEntity;
        get itemStack(): $ItemStack;
    }
}
