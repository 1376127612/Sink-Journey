import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeModifier$IOType_, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $RequirementType, $RequirementHandler_, $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";

declare module "@package/cn/howxu/mmcr/compat/ars_nouveau" {
    export class $SourceRequirement extends $Record implements $MachineRequirement {
        type(): $RequirementType<$SourceRequirement>;
        static input(amount: number, consumeChance: number): $SourceRequirement;
        static input(amount: number): $SourceRequirement;
        io(): $RecipeModifier$IOType;
        static output(amount: number): $SourceRequirement;
        static output(amount: number, chance: number): $SourceRequirement;
        tags(): $List<string>;
        amount(): number;
        chance(): number;
        static installHandler(handler: $RequirementHandler_<$SourceRequirement>): void;
        static supportsSearchSnapshot(): boolean;
        static installUnavailableHandler(): void;
        consumeChance(): number;
        static CODEC: $MapCodec<$SourceRequirement>;
        static TYPE: $RequirementType<$SourceRequirement>;
        constructor(io: $RecipeModifier$IOType_, amount: number, tags: $List_<string>);
        constructor(io: $RecipeModifier$IOType_, amount: number, chance: number, consumeChance: number, tags: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $SourceRequirement}.
     */
    export type $SourceRequirement_ = { io?: $RecipeModifier$IOType_, chance?: number, amount?: number, consumeChance?: number, tags?: $List_<string>,  } | [io?: $RecipeModifier$IOType_, chance?: number, amount?: number, consumeChance?: number, tags?: $List_<string>, ];
}
