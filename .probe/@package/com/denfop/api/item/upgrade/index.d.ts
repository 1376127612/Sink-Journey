import { $EnumInfoUpgradeModules, $EnumInfoUpgradeModules_ } from "@package/com/denfop/items";
import { $List_, $List } from "@package/java/util";
export * as event from "@package/com/denfop/api/item/upgrade/event";

declare module "@package/com/denfop/api/item/upgrade" {
    export class $UpgradeItem {
    }
    export interface $UpgradeItem {
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeItem}.
     */
    export type $UpgradeItem_ = (() => $List_<$EnumInfoUpgradeModules_>);
    export class $UpgradeWithBlackList {
    }
    export interface $UpgradeWithBlackList extends $UpgradeItem {
    }
    /**
     * Values that may be interpreted as {@link $UpgradeWithBlackList}.
     */
    export type $UpgradeWithBlackList_ = (() => void);
}
