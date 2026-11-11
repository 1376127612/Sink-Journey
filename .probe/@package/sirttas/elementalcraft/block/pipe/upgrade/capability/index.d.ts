import { $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Class } from "@package/java/lang";
import { $ElementPipeBlockEntity } from "@package/sirttas/elementalcraft/block/pipe";
import { $PipeUpgrade } from "@package/sirttas/elementalcraft/block/pipe/upgrade";
import { $BaseCapability, $ICapabilityProvider } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/sirttas/elementalcraft/block/pipe/upgrade/capability" {
    export class $PipeUpgradeCapability<T, C> extends $BaseCapability<T, C> {
        static create<T, C>(arg0: $ResourceLocation_, arg1: $Class<T>, arg2: $Class<C>): $PipeUpgradeCapability<T, C>;
        getCapability(arg0: $PipeUpgrade, arg1: C): T;
        static getAll(): $List<$PipeUpgradeCapability<never, never>>;
        static createVoid<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $PipeUpgradeCapability<T, void>;
        static createSided<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $PipeUpgradeCapability<T, $Direction>;
        getBlockCapabilityProvider<B extends $ElementPipeBlockEntity>(): $ICapabilityProvider<B, $Direction, T>;
        static get all(): $List<$PipeUpgradeCapability<never, never>>;
        get blockCapabilityProvider(): $ICapabilityProvider<B, $Direction, T>;
    }
}
