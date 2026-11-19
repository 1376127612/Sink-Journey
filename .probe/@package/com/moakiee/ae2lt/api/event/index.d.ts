import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LightningTier, $LightningTier_ } from "@package/com/moakiee/ae2lt/api/lightning";

declare module "@package/com/moakiee/ae2lt/api/event" {
    export class $LightningCollectedEvent extends $Event implements $ICancellableEvent {
        getAmount(): number;
        setAmount(arg0: number): void;
        getTier(): $LightningTier;
        getCollectorPos(): $BlockPos;
        isNaturalWeather(): boolean;
        getLevel(): $ServerLevel;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $LightningTier_, arg3: number, arg4: boolean);
        get tier(): $LightningTier;
        get collectorPos(): $BlockPos;
        get naturalWeather(): boolean;
        get level(): $ServerLevel;
    }
    export class $LightningCaptureCompletedEvent extends $Event {
        getTier(): $LightningTier;
        getRequestedAmount(): number;
        getCollectorPos(): $BlockPos;
        getInsertedAmount(): number;
        isNaturalWeather(): boolean;
        getLevel(): $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $LightningTier_, arg3: boolean, arg4: number, arg5: number);
        get tier(): $LightningTier;
        get requestedAmount(): number;
        get collectorPos(): $BlockPos;
        get insertedAmount(): number;
        get naturalWeather(): boolean;
        get level(): $ServerLevel;
    }
}
