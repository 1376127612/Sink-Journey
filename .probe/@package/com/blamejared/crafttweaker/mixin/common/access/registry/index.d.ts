import { $RegistryAccess, $RegistryAccess$RegistryEntry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/registry" {
    export class $AccessRegistrySynchronization {
        static crafttweaker$callOwnedNetworkableRegistries(arg0: $RegistryAccess): $Stream<$RegistryAccess$RegistryEntry<never>>;
    }
    export interface $AccessRegistrySynchronization {
    }
    export class $AccessMappedRegistry {
    }
    export interface $AccessMappedRegistry {
        crafttweaker$isFrozen(): boolean;
        crafttweaker$setFrozen(arg0: boolean): void;
    }
}
