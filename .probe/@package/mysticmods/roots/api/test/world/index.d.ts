import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/test/world" {
    export class $WorldTestType<W extends $WorldTest> {
    }
    export interface $WorldTestType<W extends $WorldTest> {
        codec(): $MapCodec<W>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, W>;
    }
    /**
     * Values that may be interpreted as {@link $WorldTestType}.
     */
    export type $WorldTestType_<W> = RegistryTypes.RootsWorldTestTypes;
    export class $WorldTest {
        test(arg0: $BlockState_, arg1: $RandomSource): boolean;
        getBlockState(arg0: $HolderLookup$Provider): $BlockState;
        getIngredient(): $Ingredient;
        static CODEC: $Codec<$WorldTest>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WorldTest>;
        constructor();
        get ingredient(): $Ingredient;
    }
    export interface $WorldTestType<W> extends RegistryMarked<RegistryTypes.RootsWorldTestTypesTag, RegistryTypes.RootsWorldTestTypes> {}
}
