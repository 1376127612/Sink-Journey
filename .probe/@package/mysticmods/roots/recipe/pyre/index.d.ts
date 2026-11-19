import { $RootsTileCrafting } from "@package/mysticmods/roots/api/recipe/crafting";
import { $PyreBlockEntity } from "@package/mysticmods/roots/blockentity";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeInventory } from "@package/mysticmods/roots/api/recipe/inventory";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $TaggedPedestalCrafting } from "@package/mysticmods/roots/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BaseRecipeData, $RootsTileRecipe } from "@package/mysticmods/roots/api/recipe";
import { $Ritual, $Ritual_ } from "@package/mysticmods/roots/api/ritual";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/recipe/pyre" {
    export class $PyreCrafting extends $RootsTileCrafting<$PyreInventory, $PyreBlockEntity> {
        constructor(arg0: $PyreInventory, arg1: $PyreBlockEntity, arg2: $Player | null);
    }
    export class $PyrePedestalCrafting extends $TaggedPedestalCrafting<$PyreBlockEntity> {
        constructor(arg0: $PyreBlockEntity, arg1: $Player);
    }
    export class $PyreInventory extends $RecipeInventory {
        constructor();
    }
    export class $PyreRecipe extends $RootsTileRecipe<$PyreInventory, $PyreBlockEntity, $PyreCrafting> {
        getRitual(): $Ritual;
        static CODEC: $MapCodec<$PyreRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PyreRecipe>;
        constructor(arg0: $BaseRecipeData, arg1: ($Ritual_) | undefined);
        get ritual(): $Ritual;
    }
}
