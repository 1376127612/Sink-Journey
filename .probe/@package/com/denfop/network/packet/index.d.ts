import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ByteBuf } from "@package/io/netty/buffer";

declare module "@package/com/denfop/network/packet" {
    export class $CustomPacketBuffer extends $RegistryFriendlyByteBuf {
        flip(): void;
        readString(): string;
        writeString(arg0: string): $CustomPacketBuffer;
        toByteBuf(): $ByteBuf;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        constructor(arg0: $RegistryAccess);
        constructor(arg0: number[], arg1: $RegistryAccess);
        constructor(arg0: number, arg1: $RegistryAccess);
        constructor(arg0: $ByteBuf, arg1: $RegistryAccess);
        constructor(arg0: $RegistryFriendlyByteBuf);
        constructor(arg0: $FriendlyByteBuf);
    }
}
