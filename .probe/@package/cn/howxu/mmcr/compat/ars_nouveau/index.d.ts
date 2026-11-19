import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeModifier$IOType_, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $RequirementType, $RequirementHandler_, $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";

declare module "@package/cn/howxu/mmcr/compat/ars_nouveau" {
    export class $SourceRequirement extends $Record implements $MachineRequirement {
        chance(): number;
        consumeChance(): number;
        static supportsSearchSnapshot(): boolean;
        static installHandler(handler: $RequirementHandler_<$SourceRequirement>): void;
        static installUnavailableHandler(): void;
        type(): $RequirementType<$SourceRequirement>;
        static input(amount: number): $SourceRequirement;
        static input(amount: number, consumeChance: number): $SourceRequirement;
        io(): $RecipeModifier$IOType;
        static output(amount: number, chance: number): $SourceRequirement;
        static output(amount: number): $SourceRequirement;
        tags(): $List<string>;
        amount(): number;
        static CODEC: $MapCodec<$SourceRequirement>;
        static TYPE: $RequirementType<$SourceRequirement>;
        constructor(io: $RecipeModifier$IOType_, amount: number, tags: $List_<string>);
        constructor(io: $RecipeModifier$IOType_, amount: number, chance: number, consumeChance: number, tags: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $SourceRequirement}.
     */
    export type $SourceRequirement_ = { chance?: number, amount?: number, consumeChance?: number, tags?: $List_<string>, io?: $RecipeModifier$IOType_,  } | [chance?: number, amount?: number, consumeChance?: number, tags?: $List_<string>, io?: $RecipeModifier$IOType_, ];
}
