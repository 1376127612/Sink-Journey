import { $TagManager } from "@package/net/minecraft/tags";
import { $MinecraftServer$ReloadableResources_, $MinecraftServer$ReloadableResources } from "@package/net/minecraft/server";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/server" {
    export class $AccessReloadableServerResources {
    }
    export interface $AccessReloadableServerResources {
        crafttweaker$getTagManager(): $TagManager;
    }
    /**
     * Values that may be interpreted as {@link $AccessReloadableServerResources}.
     */
    export type $AccessReloadableServerResources_ = (() => $TagManager);
    export class $AccessMinecraftServer {
    }
    export interface $AccessMinecraftServer {
        crafttweaker$getResources(): $MinecraftServer$ReloadableResources;
    }
    /**
     * Values that may be interpreted as {@link $AccessMinecraftServer}.
     */
    export type $AccessMinecraftServer_ = (() => $MinecraftServer$ReloadableResources_);
}
