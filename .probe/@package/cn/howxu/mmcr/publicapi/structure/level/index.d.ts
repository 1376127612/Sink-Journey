import { $ModifierBundle } from "@package/cn/howxu/mmcr/publicapi/recipe/modifier";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockCondition } from "@package/cn/howxu/mmcr/publicapi/structure";

declare module "@package/cn/howxu/mmcr/publicapi/structure/level" {
    export class $LevelTypeSpec {
    }
    export interface $LevelTypeSpec {
        id(): $ResourceLocation;
        displayName(): $Component;
    }
    export class $MachineLevelSpec {
    }
    export interface $MachineLevelSpec {
        priority(): number;
        id(): $ResourceLocation;
        modifier(): $ModifierBundle;
        typeId(): $ResourceLocation;
        representative(): $ItemStack;
        statePredicate(): $BlockCondition;
    }
}
