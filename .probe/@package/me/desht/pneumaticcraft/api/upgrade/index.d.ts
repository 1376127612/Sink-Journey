import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/me/desht/pneumaticcraft/api/upgrade" {
    export class $PNCUpgrade {
        static from(arg0: $ItemStack_): $PNCUpgrade;
    }
    export interface $PNCUpgrade {
        getMaxTier(): number;
        getCacheId(): number;
        isDependencyLoaded(): boolean;
        getItemRegistryName(arg0: number): $ResourceLocation;
        getItemRegistryName(): $ResourceLocation;
        getId(): $ResourceLocation;
        getItem(arg0: number): $Item;
        getItem(): $Item;
        getItemStack(arg0: number): $ItemStack;
        getItemStack(): $ItemStack;
        get maxTier(): number;
        get cacheId(): number;
        get dependencyLoaded(): boolean;
        get id(): $ResourceLocation;
    }
}
