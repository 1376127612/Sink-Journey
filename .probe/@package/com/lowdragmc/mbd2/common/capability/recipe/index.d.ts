import { $IContentSerializer } from "@package/com/lowdragmc/mbd2/api/recipe/content";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCapability } from "@package/com/lowdragmc/mbd2/api/capability/recipe";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@package/com/lowdragmc/mbd2/common/capability/recipe" {
    export class $ItemRecipeCapability extends $RecipeCapability<$SizedIngredient> {
        createDefaultContent(): $SizedIngredient;
        static CAP: $ItemRecipeCapability;
        static CODEC: $Codec<$RecipeCapability<never>>;
        serializer: $IContentSerializer<$SizedIngredient>;
    }
}
