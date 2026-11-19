import { $RPCSender_ } from "@package/com/lowdragmc/lowdraglib2/syncdata/rpc";
import { $Object } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/networking/rpc" {
    export class $RPCPacketHandler {
        static EMPTY: $RPCPacketHandler;
    }
    export interface $RPCPacketHandler {
        args2Bytes(...arg0: $Object[]): number[];
        bytes2Args(arg0: number[]): $Object[];
        handler(arg0: $RPCSender_, ...arg1: $Object[]): void;
    }
}
