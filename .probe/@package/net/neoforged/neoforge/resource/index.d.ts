import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $PackRepository, $Pack$ResourcesSupplier, $Pack, $RepositorySource, $Pack$Metadata_ } from "@package/net/minecraft/server/packs/repository";
import { $IModFileInfo } from "@package/net/neoforged/neoforgespi/language";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $PackResources, $AbstractPackResources, $PackLocationInfo_, $PackSelectionConfig_, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ICondition$IContext_ } from "@package/net/neoforged/neoforge/common/conditions";
import { $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Collection_, $List, $Map_ } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $PackMetadataSection_, $PackMetadataSection } from "@package/net/minecraft/server/packs/metadata/pack";

declare module "@package/net/neoforged/neoforge/resource" {
    export class $EmptyPackResources$EmptyResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
        constructor(arg0: $PackMetadataSection_);
    }
    export class $EmptyPackResources extends $AbstractPackResources {
        constructor(arg0: $PackLocationInfo_, arg1: $PackMetadataSection_);
    }
    export class $ResourcePackLoader {
        static expandAndRemoveRootChildren(arg0: $Stream<$Pack>, arg1: $Collection_<$Pack>): $List<$Pack>;
        static getPackFor(arg0: string): ($Pack$ResourcesSupplier) | undefined;
        static populatePackRepository(arg0: $PackRepository, arg1: $PackType_, arg2: boolean): void;
        static readWithOptionalMeta(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: $PackType_, arg3: $PackSelectionConfig_): $Pack;
        static getPackNames(arg0: $PackType_): $List<string>;
        static createPackForMod(arg0: $IModFileInfo): $Pack$ResourcesSupplier;
        static reorderNewlyDiscoveredPacks(arg0: $Collection_<string>, arg1: $Collection_<string>, arg2: $PackRepository): void;
        static buildPackFinder(arg0: $Map_<$IModFile, $Pack$ResourcesSupplier>, arg1: $PackType_): $RepositorySource;
        static MOD_RESOURCES_ID: string;
        static MOD_DATA_ID: string;
        static OPTIONAL_FORMAT: $MetadataSectionType<$PackMetadataSection>;
        constructor();
    }
    export class $ContextAwareReloadListener implements $PreparableReloadListener {
        injectContext(arg0: $ICondition$IContext_, arg1: $HolderLookup$Provider): void;
        getName(): string;
        constructor();
        get name(): string;
    }
}
