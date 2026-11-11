import { $Level_ } from "@package/net/minecraft/world/level";
import { $UpgradeBase, $UpgradeData, $UpgradeHandle, $UpgradeType } from "@package/dan200/computercraft/api/upgrades";
import { $Registry } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $IPeripheral } from "@package/dan200/computercraft/api/peripheral";

declare module "@package/dan200/computercraft/api/pocket" {
    export class $IPocketUpgrade {
        static typeRegistry(): $ResourceKey<$Registry<$UpgradeType<$IPocketUpgrade>>>;
        static REGISTRY: $ResourceKey<$Registry<$IPocketUpgrade>>;
    }
    export interface $IPocketUpgrade extends $UpgradeBase {
        update(arg0: $IPocketAccess, arg1: $IPeripheral): void;
        getType(): $UpgradeType<$IPocketUpgrade>;
        onRightClick(arg0: $Level_, arg1: $IPocketAccess, arg2: $IPeripheral): boolean;
        createPeripheral(arg0: $IPocketAccess): $IPeripheral;
        get type(): $UpgradeType<$IPocketUpgrade>;
    }
    /**
     * Values that may be interpreted as {@link $IPocketUpgrade}.
     */
    export type $IPocketUpgrade_ = RegistryTypes.ComputercraftPocketUpgrade;
    export interface $IPocketUpgrade extends RegistryMarked<RegistryTypes.ComputercraftPocketUpgradeTag, RegistryTypes.ComputercraftPocketUpgrade> {}
    export class $IPocketAccess {
    }
    export interface $IPocketAccess {
        getPosition(): $Vec3;
        getEntity(): $Entity;
        getLevel(): $ServerLevel;
        setLight(arg0: number): void;
        getLight(): number;
        /**
         * @deprecated
         */
        getUpgradeData(): $DataComponentPatch;
        getUpgrade(): $UpgradeData<$IPocketUpgrade>;
        setColour(arg0: number): void;
        setUpgrade(arg0: $UpgradeData<$IPocketUpgrade_>): void;
        getColour(): number;
        invalidatePeripheral(): void;
        /**
         * @deprecated
         */
        setUpgradeData(arg0: $DataComponentPatch_): void;
        getUpgradeHandle(): $UpgradeHandle<$IPocketUpgrade>;
        get position(): $Vec3;
        get entity(): $Entity;
        get level(): $ServerLevel;
        get upgradeHandle(): $UpgradeHandle<$IPocketUpgrade>;
    }
}
