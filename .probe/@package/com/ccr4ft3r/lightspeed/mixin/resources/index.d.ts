import { $Predicate } from "@package/java/util/function";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $ResourcePackEntry } from "@package/com/ccr4ft3r/lightspeed/cache/resource";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ZipFile } from "@package/java/util/zip";

declare module "@package/com/ccr4ft3r/lightspeed/mixin/resources" {
    export class $SharedZipFileAccessAccessor {
    }
    export interface $SharedZipFileAccessAccessor {
        lightspeed$getOrCreateZipFile(): $ZipFile;
        lightspeed$close(): void;
    }
    export class $FallbackResourceManagerPackEntryAccessor {
    }
    export interface $FallbackResourceManagerPackEntryAccessor extends $ResourcePackEntry {
        lightspeed$name(): string;
        lightspeed$filter(): $Predicate<$ResourceLocation>;
        lightspeed$isFiltered(arg0: $ResourceLocation_): boolean;
        lightspeed$resources(): $PackResources;
    }
}
