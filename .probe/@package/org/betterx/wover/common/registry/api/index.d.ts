import { $Function_ } from "@package/java/util/function";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/org/betterx/wover/common/registry/api" {
    export class $CustomRegistryData$DataKey<T> {
        id: $ResourceLocation;
    }
    export class $CustomRegistryData {
        static createKey<T>(arg0: $ResourceLocation_): $CustomRegistryData$DataKey<T>;
    }
    export interface $CustomRegistryData {
        wover_putData<T>(arg0: $CustomRegistryData$DataKey<T>, arg1: T): void;
        wover_getData<T>(arg0: $CustomRegistryData$DataKey<T>): T;
        wover_computeDataIfAbsent<T>(arg0: $CustomRegistryData$DataKey<T>, arg1: $Function_<$ResourceLocation, T>): T;
    }
}
