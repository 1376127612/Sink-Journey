import { $IGridService } from "@package/appeng/api/networking";
import { $Actionable, $PowerMultiplier_, $Actionable_, $PowerMultiplier } from "@package/appeng/api/config";

declare module "@package/appeng/api/networking/energy" {
    export class $IEnergySource {
        static empty(): $IEnergySource;
    }
    export interface $IEnergySource {
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
    }
    /**
     * Values that may be interpreted as {@link $IEnergySource}.
     */
    export type $IEnergySource_ = ((arg0: number, arg1: $Actionable, arg2: $PowerMultiplier) => number);
    export class $IEnergyService {
    }
    export interface $IEnergyService extends $IGridService, $IEnergySource {
        getEnergyDemand(arg0: number): number;
        getStoredPower(): number;
        getIdlePowerUsage(): number;
        injectPower(arg0: number, arg1: $Actionable_): number;
        getAvgPowerUsage(): number;
        isNetworkPowered(): boolean;
        getMaxStoredPower(): number;
        getAvgPowerInjection(): number;
        getChannelPowerUsage(): number;
        get storedPower(): number;
        get idlePowerUsage(): number;
        get avgPowerUsage(): number;
        get networkPowered(): boolean;
        get maxStoredPower(): number;
        get avgPowerInjection(): number;
        get channelPowerUsage(): number;
    }
}
