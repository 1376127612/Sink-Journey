import { $Component_ } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ConfigurationTask$Type_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $ServerCommonPacketListener, $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ICommonPacketListener } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Connection, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Runnable_, $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/network/handling" {
    export class $IPayloadHandler<T extends $CustomPacketPayload> {
    }
    export interface $IPayloadHandler<T extends $CustomPacketPayload> {
        handle(arg0: T, arg1: $IPayloadContext): void;
    }
    /**
     * Values that may be interpreted as {@link $IPayloadHandler}.
     */
    export type $IPayloadHandler_<T> = ((arg0: T, arg1: $IPayloadContext) => void);
    export class $ServerPayloadContext extends $Record implements $IPayloadContext {
        player(): $ServerPlayer;
        payloadId(): $ResourceLocation;
        handle(arg0: $CustomPacketPayload_): void;
        listener(): $ServerCommonPacketListener;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        flow(): $PacketFlow;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        disconnect(arg0: $Component_): void;
        connection(): $Connection;
        reply(arg0: $CustomPacketPayload_): void;
        channelHandlerContext(): $ChannelHandlerContext;
        constructor(listener: $ServerCommonPacketListener, payloadId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ServerPayloadContext}.
     */
    export type $ServerPayloadContext_ = { payloadId?: $ResourceLocation_, listener?: $ServerCommonPacketListener,  } | [payloadId?: $ResourceLocation_, listener?: $ServerCommonPacketListener, ];
    export class $IPayloadContext {
    }
    export interface $IPayloadContext {
        player(): $Player;
        handle(arg0: $CustomPacketPayload_): void;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        disconnect(arg0: $Component_): void;
        listener(): $ICommonPacketListener;
        connection(): $Connection;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        reply(arg0: $CustomPacketPayload_): void;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        flow(): $PacketFlow;
        channelHandlerContext(): $ChannelHandlerContext;
    }
    export class $DirectionalPayloadHandler<T extends $CustomPacketPayload> extends $Record implements $IPayloadHandler<T> {
        clientSide(): $IPayloadHandler<T>;
        handle(arg0: T, arg1: $IPayloadContext): void;
        serverSide(): $IPayloadHandler<T>;
        constructor(clientSide: $IPayloadHandler_<T>, serverSide: $IPayloadHandler_<T>);
    }
    /**
     * Values that may be interpreted as {@link $DirectionalPayloadHandler}.
     */
    export type $DirectionalPayloadHandler_<T> = { clientSide?: $IPayloadHandler_<$CustomPacketPayload>, serverSide?: $IPayloadHandler_<$CustomPacketPayload>,  } | [clientSide?: $IPayloadHandler_<$CustomPacketPayload>, serverSide?: $IPayloadHandler_<$CustomPacketPayload>, ];
    export class $ClientPayloadContext extends $Record implements $IPayloadContext {
        player(): $Player;
        payloadId(): $ResourceLocation;
        handle(arg0: $CustomPacketPayload_): void;
        listener(): $ClientCommonPacketListener;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        flow(): $PacketFlow;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        disconnect(arg0: $Component_): void;
        connection(): $Connection;
        reply(arg0: $CustomPacketPayload_): void;
        channelHandlerContext(): $ChannelHandlerContext;
        constructor(listener: $ClientCommonPacketListener, payloadId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ClientPayloadContext}.
     */
    export type $ClientPayloadContext_ = { payloadId?: $ResourceLocation_, listener?: $ClientCommonPacketListener,  } | [payloadId?: $ResourceLocation_, listener?: $ClientCommonPacketListener, ];
    export class $MainThreadPayloadHandler<T extends $CustomPacketPayload> extends $Record implements $IPayloadHandler<T> {
        handler(): $IPayloadHandler<T>;
        handle(arg0: T, arg1: $IPayloadContext): void;
        constructor(handler: $IPayloadHandler_<T>);
    }
    /**
     * Values that may be interpreted as {@link $MainThreadPayloadHandler}.
     */
    export type $MainThreadPayloadHandler_<T> = { handler?: $IPayloadHandler_<$CustomPacketPayload>,  } | [handler?: $IPayloadHandler_<$CustomPacketPayload>, ];
}
