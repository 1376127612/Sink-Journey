import { $BaseConstellation } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $TileAttunementAltar } from "@package/hellfirepvp/astralsorcery/common/tile";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection } from "@package/java/util";
import { $LogicalSide_ } from "@package/net/neoforged/fml";

declare module "@package/hellfirepvp/astralsorcery/common/recipe/attunement" {
    export class $AttunementRecipe<T extends $AttunementRecipe$Active<never, never>> {
        getIdentifier(): $ResourceLocation;
        static getAllRecipes(): $Collection<$AttunementRecipe<never>>;
        canStartCrafting(arg0: $TileAttunementAltar): boolean;
        createActiveRecipe(arg0: $TileAttunementAltar): T;
        codec(): $MapCodec<T>;
        static initRecipes(): void;
        static CODEC: $Codec<$AttunementRecipe<never>>;
        static ACTIVE_CODEC: $Codec<$AttunementRecipe$Active<never, never>>;
        get identifier(): $ResourceLocation;
        static get allRecipes(): $Collection<$AttunementRecipe<never>>;
    }
    export class $AttunementRecipe$Active<T extends $AttunementRecipe<A>, A extends $AttunementRecipe$Active<T, A>> {
        matches(arg0: $TileAttunementAltar): boolean;
        tick(arg0: $LogicalSide_, arg1: $TileAttunementAltar): void;
        doTick(arg0: $LogicalSide_, arg1: $TileAttunementAltar): void;
        getConstellation(): $BaseConstellation;
        startCrafting(arg0: $TileAttunementAltar): void;
        finishRecipe(arg0: $TileAttunementAltar): void;
        stopEffects(arg0: $TileAttunementAltar): void;
        stopCrafting(arg0: $TileAttunementAltar): void;
        copyEffectDataTo(arg0: A): void;
        getRecipe(): T;
        isFinished(arg0: $TileAttunementAltar): boolean;
        get constellation(): $BaseConstellation;
        get recipe(): T;
    }
}
