import { $ZoneSyncPayload$ZoneEntry, $ZoneSyncPayload$ZoneEntry_ } from "@package/com/herobrot/scalingdifficulty/network/payload";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";

declare module "@package/com/herobrot/scalingdifficulty/api/events" {
    export class $ZoneEnterEvent extends $LivingEvent implements $ICancellableEvent {
        getZone(): $ZoneSyncPayload$ZoneEntry;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ZoneSyncPayload$ZoneEntry_ | null);
        get zone(): $ZoneSyncPayload$ZoneEntry;
    }
}
