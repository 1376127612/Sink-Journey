import { $ChannelHandler } from "@package/io/netty/channel";
import { $Connection } from "@package/net/minecraft/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ConnectionType_ } from "@package/net/neoforged/neoforge/network/connection";
import { $Enum, $Record } from "@package/java/lang";
import { $MessageToMessageEncoder } from "@package/io/netty/handler/codec";

declare module "@package/net/neoforged/neoforge/network/filters" {
    export class $VanillaPacketFilter extends $MessageToMessageEncoder<$Packet<never>> implements $DynamicChannelHandler {
        isNecessary(arg0: $Connection): boolean;
    }
    export class $NetworkFilters {
        static cleanIfNecessary(arg0: $Connection): void;
        static injectIfNecessary(arg0: $Connection): void;
    }
    export class $GenericPacketSplitter extends $MessageToMessageEncoder<$Packet<never>> implements $DynamicChannelHandler {
        static getRemoteCompatibility(arg0: $Connection): $GenericPacketSplitter$RemoteCompatibility;
        static determineMaxPayloadSize(arg0: number): number;
        isNecessary(arg0: $Connection): boolean;
        static isRemoteCompatible(arg0: $Connection): boolean;
        static CHANNEL_HANDLER_NAME: string;
        constructor();
    }
    export class $DynamicChannelHandler {
    }
    export interface $DynamicChannelHandler extends $ChannelHandler {
        isNecessary(arg0: $Connection): boolean;
    }
    export class $GenericPacketSplitter$RemoteCompatibility extends $Enum<$GenericPacketSplitter$RemoteCompatibility> {
        static values(): $GenericPacketSplitter$RemoteCompatibility[];
        static valueOf(arg0: string): $GenericPacketSplitter$RemoteCompatibility;
        static PRESENT: $GenericPacketSplitter$RemoteCompatibility;
        static ABSENT: $GenericPacketSplitter$RemoteCompatibility;
    }
    /**
     * Values that may be interpreted as {@link $GenericPacketSplitter$RemoteCompatibility}.
     */
    export type $GenericPacketSplitter$RemoteCompatibility_ = "absent" | "present";
    export class $VanillaConnectionNetworkFilter extends $VanillaPacketFilter {
        constructor(arg0: $ConnectionType_);
    }
    export class $GenericPacketSplitter$SizeLimits extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $GenericPacketSplitter$SizeLimits}.
     */
    export type $GenericPacketSplitter$SizeLimits_ = { part?: number, packet?: number,  } | [part?: number, packet?: number, ];
    export class $CommandTreeCleaner {
    }
}
