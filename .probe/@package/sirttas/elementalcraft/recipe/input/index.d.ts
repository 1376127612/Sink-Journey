import { $Rune$BonusType_ } from "@package/sirttas/elementalcraft/api/rune";

declare module "@package/sirttas/elementalcraft/recipe/input" {
    export class $RuneBonusesRecipeInput {
    }
    export interface $RuneBonusesRecipeInput extends $ECRecipeInput {
        getRuneBonus(arg0: $Rune$BonusType_): number;
    }
}
