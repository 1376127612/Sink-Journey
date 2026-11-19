import { $AnvilRecipe } from "@package/org/betterx/bclib/recipes";
import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List_, $List } from "@package/java/util";
import { $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/org/betterx/bclib/interfaces" {
    export class $UnknownReceipBookCategory {
    }
    export interface $UnknownReceipBookCategory {
    }
    export class $LootPoolAccessor {
    }
    export interface $LootPoolAccessor {
        bcl_mergeEntries(arg0: $List_<$LootPoolEntryContainer>): $LootPool;
    }
    /**
     * Values that may be interpreted as {@link $LootPoolAccessor}.
     */
    export type $LootPoolAccessor_ = ((arg0: $List<$LootPoolEntryContainer>) => $LootPool);
    export class $ClientLevelAccess {
    }
    export interface $ClientLevelAccess {
        bcl_getLevelRenderer(): $LevelRendererAccess;
        bcl_addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
    }
    export class $AnvilScreenHandlerExtended {
    }
    export interface $AnvilScreenHandlerExtended {
        be_nextRecipe(): void;
        be_previousRecipe(): void;
        bcl_getRecipes(): $List<$RecipeHolder<$AnvilRecipe>>;
        bcl_getSyncedRecipeCount(): number;
        bcl_getCurrentRecipe(): $RecipeHolder<$AnvilRecipe>;
        bcl_hasActiveRecipe(): boolean;
        bcl_updateCurrentRecipe(arg0: $RecipeHolder_<$AnvilRecipe>): void;
    }
    export class $LevelRendererAccess {
    }
    export interface $LevelRendererAccess {
        bcl_addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccess}.
     */
    export type $LevelRendererAccess_ = ((arg0: $ParticleOptions, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number) => $Particle);
}
