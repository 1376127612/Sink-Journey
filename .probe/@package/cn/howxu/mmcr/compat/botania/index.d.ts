import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeModifier$IOType_, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $RecipeSyncCodec } from "@package/cn/howxu/mmcr/api/recipe";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $RequirementType, $RequirementHandler_, $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";

declare module "@package/cn/howxu/mmcr/compat/botania" {
    export class $ManaRequirement extends $Record implements $MachineRequirement {
        type(): $RequirementType<$ManaRequirement>;
        static input(amount: number, consumeChance: number): $ManaRequirement;
        static input(amount: number): $ManaRequirement;
        io(): $RecipeModifier$IOType;
        static output(amount: number): $ManaRequirement;
        static output(amount: number, chance: number): $ManaRequirement;
        tags(): $List<string>;
        amount(): number;
        chance(): number;
        static installHandler(handler: $RequirementHandler_<$ManaRequirement>): void;
        static supportsSearchSnapshot(): boolean;
        static installUnavailableHandler(): void;
        consumeChance(): number;
        static CODEC: $MapCodec<$ManaRequirement>;
        static SYNC_CODEC: $RecipeSyncCodec<$ManaRequirement>;
        static TYPE: $RequirementType<$ManaRequirement>;
        constructor(io: $RecipeModifier$IOType_, amount: number, tags: $List_<string>);
        constructor(io: $RecipeModifier$IOType_, amount: number, chance: number, consumeChance: number, tags: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ManaRequirement}.
     */
    export type $ManaRequirement_ = { io?: $RecipeModifier$IOType_, chance?: number, amount?: number, consumeChance?: number, tags?: $List_<string>,  } | [io?: $RecipeModifier$IOType_, chance?: number, amount?: number, consumeChance?: number, tags?: $List_<string>, ];
}
