import { $IConfigurableBlockEntityProperties, $ConfigurableBlockEntityPropertiesType } from "@package/sirttas/elementalcraft/block/entity/properties";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeType, $RecipeInput, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $Record } from "@package/java/lang";

declare module "@package/sirttas/elementalcraft/block/entity/crafting" {
    export class $CraftingBlockEntityProperties extends $Record implements $IConfigurableBlockEntityProperties {
        getType(): $ConfigurableBlockEntityPropertiesType<$CraftingBlockEntityProperties>;
        outputSlot(): number;
        transferSpeed(): number;
        retrieveAll(): boolean;
        recipeType(): ($Holder<$RecipeType<never>>) | undefined;
        maxRunes(): number;
        getRecipeType<I extends $RecipeInput, R extends $Recipe<I>>(): $RecipeType<R>;
        lockable(): boolean;
        static CODEC: $MapCodec<$CraftingBlockEntityProperties>;
        static DEFAULT: $CraftingBlockEntityProperties;
        constructor(recipeType: ($Holder_<$RecipeType<never>>) | undefined, transferSpeed: number, maxRunes: number, outputSlot: number, retrieveAll: boolean, lockable: boolean);
        get type(): $ConfigurableBlockEntityPropertiesType<$CraftingBlockEntityProperties>;
    }
    /**
     * Values that may be interpreted as {@link $CraftingBlockEntityProperties}.
     */
    export type $CraftingBlockEntityProperties_ = { maxRunes?: number, lockable?: boolean, transferSpeed?: number, outputSlot?: number, retrieveAll?: boolean, recipeType?: ($Holder_<$RecipeType<never>>) | undefined,  } | [maxRunes?: number, lockable?: boolean, transferSpeed?: number, outputSlot?: number, retrieveAll?: boolean, recipeType?: ($Holder_<$RecipeType<never>>) | undefined, ];
}
