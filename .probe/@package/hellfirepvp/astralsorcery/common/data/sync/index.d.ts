import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/hellfirepvp/astralsorcery/common/data/sync" {
    export class $ClientSyncData<C extends $ClientData> {
        type(): $SyncData$Type<never, never, never, C>;
        updateClientData(arg0: C): void;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientSyncData<never>>;
        constructor();
    }
    export class $ClientSyncDiffData<C extends $ClientData> {
        type(): $SyncData$Type<never, never, never, C>;
        updateClientData(arg0: C): void;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientSyncDiffData<never>>;
        constructor();
    }
    export class $ClientData {
        clear(): void;
        constructor();
    }
    export interface $SyncData$Type<D, SA, SD, C> extends RegistryMarked<RegistryTypes.AstralsorcerySyncDataTypesTag, RegistryTypes.AstralsorcerySyncDataTypes> {}
    export class $SyncData<SA extends $ClientSyncData<C>, SD extends $ClientSyncDiffData<C>, C extends $ClientData> {
        getType(): $SyncData$Type<never, SA, SD, C>;
        clearAll(): void;
        clearLevel(arg0: $ServerLevel): void;
        markDirty(): void;
        syncDiffData(): SD;
        syncAllData(): SA;
        constructor();
        get type(): $SyncData$Type<never, SA, SD, C>;
    }
    export class $SyncData$Type<D extends $SyncData<SA, SD, C>, SA extends $ClientSyncData<C>, SD extends $ClientSyncDiffData<C>, C extends $ClientData> extends $Record {
        dataProvider(): $Supplier<D>;
        syncCodec(): $StreamCodec<$RegistryFriendlyByteBuf, SA>;
        syncDiffCodec(): $StreamCodec<$RegistryFriendlyByteBuf, SD>;
        clientDataProvider(): $Supplier<C>;
        constructor(dataProvider: $Supplier_<D>, clientDataProvider: $Supplier_<C>, syncCodec: $StreamCodec<$RegistryFriendlyByteBuf, SA>, syncDiffCodec: $StreamCodec<$RegistryFriendlyByteBuf, SD>);
    }
    /**
     * Values that may be interpreted as {@link $SyncData$Type}.
     */
    export type $SyncData$Type_<D, SA, SD, C> = RegistryTypes.AstralsorcerySyncDataTypes | { clientDataProvider?: $Supplier_<$ClientData>, syncDiffCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ClientSyncDiffData<C>>, dataProvider?: $Supplier_<$SyncData<SA, SD, C>>, syncCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ClientSyncData<C>>,  } | [clientDataProvider?: $Supplier_<$ClientData>, syncDiffCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ClientSyncDiffData<C>>, dataProvider?: $Supplier_<$SyncData<SA, SD, C>>, syncCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ClientSyncData<C>>, ];
}
