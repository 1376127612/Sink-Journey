import { $DataMapFile, $DataMapType, $DataMapFile_ } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $List_, $Map_, $Map, $List } from "@package/java/util";

declare module "@package/com/blamejared/crafttweaker/impl/datamap" {
    export class $LoadResultGetter {
    }
    export interface $LoadResultGetter {
        results(): $Map<$DataMapType<never, never>, $List<$DataMapFile<never, never>>>;
    }
    /**
     * Values that may be interpreted as {@link $LoadResultGetter}.
     */
    export type $LoadResultGetter_ = (() => $Map_<$DataMapType<never, never>, $List_<$DataMapFile_<never, never>>>);
}
