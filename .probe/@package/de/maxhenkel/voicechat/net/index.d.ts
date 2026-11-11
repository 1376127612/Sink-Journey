import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ServerConfig$Codec, $ServerConfig } from "@package/de/maxhenkel/voicechat/config";
import { $CustomPacketPayload, $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $Secret } from "@package/de/maxhenkel/voicechat/voice/common";
import { $UUID } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";

declare module "@package/de/maxhenkel/voicechat/net" {
    export class $SecretPacket implements $Packet<$SecretPacket> {
        type(): $CustomPacketPayload$Type<$SecretPacket>;
        toBytes(arg0: $FriendlyByteBuf): void;
        fromBytes(arg0: $FriendlyByteBuf): $SecretPacket;
        getCodec(): $ServerConfig$Codec;
        getKeepAlive(): number;
        getSecret(): $Secret;
        getVoiceHost(): string;
        getServerPort(): number;
        getVoiceChatDistance(): number;
        groupsEnabled(): boolean;
        allowRecording(): boolean;
        getPlayerUUID(): $UUID;
        getMtuSize(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static SECRET: $CustomPacketPayload$Type<$SecretPacket>;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: $Secret, arg2: number, arg3: $ServerConfig, arg4: string);
        get keepAlive(): number;
        get secret(): $Secret;
        get voiceHost(): string;
        get serverPort(): number;
        get voiceChatDistance(): number;
        get playerUUID(): $UUID;
        get mtuSize(): number;
    }
    export class $Packet<T extends $Packet<T>> {
    }
    export interface $Packet<T extends $Packet<T>> extends $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<T>;
        toBytes(arg0: $FriendlyByteBuf): void;
        fromBytes(arg0: $FriendlyByteBuf): T;
    }
}
