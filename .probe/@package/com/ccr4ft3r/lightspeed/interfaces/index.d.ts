import { $PackResources, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Map_, $Map } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";

declare module "@package/com/ccr4ft3r/lightspeed/interfaces" {
    export class $IndexedPackResources {
    }
    export interface $IndexedPackResources {
        lightspeed$containsIndexed(arg0: string, arg1: string, arg2: string): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IndexedPackResources}.
     */
    export type $IndexedPackResources_ = ((arg0: string, arg1: string, arg2: string) => boolean);
    export class $IPackResources {
    }
    export interface $IPackResources extends $ICache {
        lightspeed$getExistenceByResource(): $Map<string, boolean>;
        lightspeed$setExistenceByResource(arg0: $Map_<string, boolean>): void;
    }
    export class $ICache {
    }
    export interface $ICache {
        lightspeed$persistAndClearCache(): void;
    }
    /**
     * Values that may be interpreted as {@link $ICache}.
     */
    export type $ICache_ = (() => void);
    export class $IPathResourcePack {
    }
    export interface $IPathResourcePack extends $PackResources, $IPackResources {
        lightspeed$hasIndexedResource(arg0: $PackType_, arg1: $ResourceLocation_): boolean;
        lightspeed$setModFile(arg0: $IModFile): void;
    }
}
