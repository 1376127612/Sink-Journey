import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeModifier$IOType_, $RecipeModifier$IOType } from "@package/cn/howxu/mmcr/api/recipe/modifier";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $RequirementType, $MachineRequirement } from "@package/cn/howxu/mmcr/api/recipe/requirement";

declare module "@package/cn/howxu/mmcr/compat/pneumaticcraft" {
    export class $AirRequirement extends $Record implements $MachineRequirement {
        type(): $RequirementType<$AirRequirement>;
        static input(airPerTick: number, minPressure: number, tags: $List_<string>): $AirRequirement;
        static input(airPerTick: number, minPressure: number, consumeChance: number, tags: $List_<string>): $AirRequirement;
        static input(airPerTick: number, minPressure: number, consumeChance: number): $AirRequirement;
        static input(airPerTick: number, minPressure: number): $AirRequirement;
        io(): $RecipeModifier$IOType;
        static output(airPerTick: number): $AirRequirement;
        static output(airPerTick: number, tags: $List_<string>): $AirRequirement;
        static output(airPerTick: number, chance: number, tags: $List_<string>): $AirRequirement;
        static output(airPerTick: number, chance: number): $AirRequirement;
        tags(): $List<string>;
        chance(): number;
        minPressure(): number;
        airPerTick(): number;
        consumeChance(): number;
        static CODEC: $MapCodec<$AirRequirement>;
        static TYPE: $RequirementType<$AirRequirement>;
        constructor(io: $RecipeModifier$IOType_, airPerTick: number, minPressure: number, tags: $List_<string>);
        constructor(io: $RecipeModifier$IOType_, airPerTick: number, minPressure: number, chance: number, consumeChance: number, tags: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $AirRequirement}.
     */
    export type $AirRequirement_ = { chance?: number, minPressure?: number, io?: $RecipeModifier$IOType_, tags?: $List_<string>, airPerTick?: number, consumeChance?: number,  } | [chance?: number, minPressure?: number, io?: $RecipeModifier$IOType_, tags?: $List_<string>, airPerTick?: number, consumeChance?: number, ];
}
