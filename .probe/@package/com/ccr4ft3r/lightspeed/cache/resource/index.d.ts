import { $InputStream } from "@package/java/io";
import { $Predicate } from "@package/java/util/function";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $IoSupplier_, $IoSupplier, $Resource } from "@package/net/minecraft/server/packs/resources";

declare module "@package/com/ccr4ft3r/lightspeed/cache/resource" {
    export class $ResourcePackEntry {
    }
    export interface $ResourcePackEntry {
        lightspeed$resources(): $PackResources;
        lightspeed$name(): string;
        lightspeed$filter(): $Predicate<never>;
    }
    export class $ResourcePackLookup$GroupedAccess<L> {
    }
    export interface $ResourcePackLookup$GroupedAccess<L> extends $ResourcePackLookup$Access<L> {
        lightspeed$canGroup(arg0: $PackResources): boolean;
    }
    export class $ResourcePackLookup$Access<L> {
    }
    export interface $ResourcePackLookup$Access<L> {
        lightspeed$lookupRead(arg0: $PackResources, arg1: L): $IoSupplier<$InputStream>;
        lightspeed$lookupContains(arg0: $PackResources, arg1: L): boolean;
        lightspeed$lookupFiltered(arg0: $ResourcePackEntry, arg1: L): boolean;
        lightspeed$lookupResource(arg0: $PackResources, arg1: L, arg2: $IoSupplier_<$InputStream>, arg3: number): $Resource;
    }
}
