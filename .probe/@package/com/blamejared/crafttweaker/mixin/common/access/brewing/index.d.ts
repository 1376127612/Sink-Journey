import { $PotionBrewing$Mix_, $Potion, $PotionBrewing$Mix, $Potion_ } from "@package/net/minecraft/world/item/alchemy";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/brewing" {
    export class $AccessPotionBrewing {
    }
    export interface $AccessPotionBrewing {
        crafttweaker$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        crafttweaker$setPotionMixes(arg0: $List_<$PotionBrewing$Mix_<$Potion_>>): void;
    }
}
