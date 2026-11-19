import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Method } from "@package/java/lang/reflect";
import { $RPCPacketHandler } from "@package/com/lowdragmc/lowdraglib2/networking/rpc";
import { $Object } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/rpc" {
    export class $RPCMethodMeta implements $RPCPacketHandler {
        args2Bytes(...arg0: $Object[]): number[];
        bytes2Args(arg0: number[]): $Object[];
        serializeArgs(arg0: $RegistryFriendlyByteBuf, arg1: $Object[]): void;
        invoke(arg0: $Object, arg1: $RPCSender_, arg2: $RegistryFriendlyByteBuf): void;
        getName(): string;
        handler(arg0: $RPCSender_, ...arg1: $Object[]): void;
        constructor(arg0: $Method);
        get name(): string;
    }
    export class $RPCSender {
        static ofClient(arg0: $ServerPlayer): $RPCSender;
        static ofServer(): $RPCSender;
    }
    export interface $RPCSender {
        asPlayer(): $ServerPlayer;
        isServer(): boolean;
        isRemote(): boolean;
        get server(): boolean;
        get remote(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RPCSender}.
     */
    export type $RPCSender_ = (() => boolean);
}
