import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LightningTier, $LightningTier_ } from "@package/com/moakiee/ae2lt/api/lightning";

declare module "@package/com/moakiee/ae2lt/api/event" {
    export class $LightningCollectedEvent extends $Event implements $ICancellableEvent {
        getLevel(): $ServerLevel;
        setAmount(arg0: number): void;
        getAmount(): number;
        getTier(): $LightningTier;
        getCollectorPos(): $BlockPos;
        isNaturalWeather(): boolean;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $LightningTier_, arg3: number, arg4: boolean);
        get level(): $ServerLevel;
        get tier(): $LightningTier;
        get collectorPos(): $BlockPos;
        get naturalWeather(): boolean;
    }
    export class $LightningCaptureCompletedEvent extends $Event {
        getLevel(): $ServerLevel;
        getTier(): $LightningTier;
        getCollectorPos(): $BlockPos;
        getInsertedAmount(): number;
        isNaturalWeather(): boolean;
        getRequestedAmount(): number;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $LightningTier_, arg3: boolean, arg4: number, arg5: number);
        get level(): $ServerLevel;
        get tier(): $LightningTier;
        get collectorPos(): $BlockPos;
        get insertedAmount(): number;
        get naturalWeather(): boolean;
        get requestedAmount(): number;
    }
}
