import { $TagNetworkSerialization$NetworkPayload, $TagNetworkSerialization$TagOutput_ } from "@package/net/minecraft/tags";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/com/blamejared/crafttweaker/mixin/common/access/tag" {
    export class $AccessTagNetworkSerialization {
        static crafttweaker$$callDeserializeTagsFromNetwork<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Registry<T>, arg2: $TagNetworkSerialization$NetworkPayload, arg3: $TagNetworkSerialization$TagOutput_<T>): void;
    }
    export interface $AccessTagNetworkSerialization {
    }
    export class $AccessTagManager {
    }
    export interface $AccessTagManager {
        crafttweaker$getRegistryAccess(): $RegistryAccess;
    }
    /**
     * Values that may be interpreted as {@link $AccessTagManager}.
     */
    export type $AccessTagManager_ = (() => $RegistryAccess);
}
