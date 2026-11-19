import { $BaseConstellation } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $TileAttunementAltar } from "@package/hellfirepvp/astralsorcery/common/tile";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection } from "@package/java/util";
import { $LogicalSide_ } from "@package/net/neoforged/fml";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/attunement" {
    export class $AttunementRecipe<T extends $AttunementRecipe$Active<never, never>> {
        codec(): $MapCodec<T>;
        static initRecipes(): void;
        static getAllRecipes(): $Collection<$AttunementRecipe<never>>;
        canStartCrafting(arg0: $TileAttunementAltar): boolean;
        createActiveRecipe(arg0: $TileAttunementAltar): T;
        getIdentifier(): $ResourceLocation;
        static CODEC: $Codec<$AttunementRecipe<never>>;
        static ACTIVE_CODEC: $Codec<$AttunementRecipe$Active<never, never>>;
        static get allRecipes(): $Collection<$AttunementRecipe<never>>;
        get identifier(): $ResourceLocation;
    }
    export class $AttunementRecipe$Active<T extends $AttunementRecipe<A>, A extends $AttunementRecipe$Active<T, A>> {
        isFinished(arg0: $TileAttunementAltar): boolean;
        doTick(arg0: $LogicalSide_, arg1: $TileAttunementAltar): void;
        getRecipe(): T;
        stopCrafting(arg0: $TileAttunementAltar): void;
        copyEffectDataTo(arg0: A): void;
        finishRecipe(arg0: $TileAttunementAltar): void;
        stopEffects(arg0: $TileAttunementAltar): void;
        startCrafting(arg0: $TileAttunementAltar): void;
        matches(arg0: $TileAttunementAltar): boolean;
        tick(arg0: $LogicalSide_, arg1: $TileAttunementAltar): void;
        getConstellation(): $BaseConstellation;
        get recipe(): T;
        get constellation(): $BaseConstellation;
    }
}
