import { $Enum } from "@package/java/lang";

declare module "@package/cn/dancingsnow/neoecoae/api/capability" {
    export class $ECOFeature extends $Enum<$ECOFeature> {
        static values(): $ECOFeature[];
        static valueOf(arg0: string): $ECOFeature;
        static INFINITE_STORAGE_HOST: $ECOFeature;
        static VIRTUAL_CRAFTING: $ECOFeature;
        static INFINITE_STORAGE_CELL: $ECOFeature;
        static NETWORK_SWITCH: $ECOFeature;
    }
    /**
     * Values that may be interpreted as {@link $ECOFeature}.
     */
    export type $ECOFeature_ = "network_switch" | "virtual_crafting" | "infinite_storage_host" | "infinite_storage_cell";
}
