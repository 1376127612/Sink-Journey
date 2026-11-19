import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/com/blamejared/crafttweaker/api/villager/trade/type" {
    export class $IBasicItemListing {
    }
    export interface $IBasicItemListing {
        getXp(): number;
        getPrice(): $ItemStack;
        getPrice2(): $ItemStack;
        getForSale(): $ItemStack;
        getPriceMult(): number;
        getMaxTrades(): number;
        get xp(): number;
        get price(): $ItemStack;
        get price2(): $ItemStack;
        get forSale(): $ItemStack;
        get priceMult(): number;
        get maxTrades(): number;
    }
}
