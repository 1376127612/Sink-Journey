import { $RawUdpPacket } from "@package/de/maxhenkel/voicechat/api";
import { $SecretKeySpec } from "@package/javax/crypto/spec";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $ClientConnection, $Server } from "@package/de/maxhenkel/voicechat/voice/server";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/de/maxhenkel/voicechat/voice/common" {
    export class $PingPacket implements $Packet<$PingPacket> {
        fromBytes(arg0: $FriendlyByteBuf): $PingPacket;
        toBytes(arg0: $FriendlyByteBuf): void;
        getId(): $UUID;
        getTimestamp(): number;
        getTTL(): number;
        constructor(arg0: $UUID_, arg1: number);
        constructor();
        get id(): $UUID;
        get timestamp(): number;
        get TTL(): number;
    }
    export class $MicPacket implements $Packet<$MicPacket> {
        fromBytes(arg0: $FriendlyByteBuf): $MicPacket;
        isWhispering(): boolean;
        getTTL(): number;
        toBytes(arg0: $FriendlyByteBuf): void;
        getData(): number[];
        setData(arg0: number[]): void;
        getSequenceNumber(): number;
        constructor(arg0: number[], arg1: boolean, arg2: number);
        constructor();
        get whispering(): boolean;
        get TTL(): number;
        get sequenceNumber(): number;
    }
    export class $PlayerState {
        getUuid(): $UUID;
        static fromBytes(arg0: $FriendlyByteBuf): $PlayerState;
        setDisabled(arg0: boolean): void;
        isDisconnected(): boolean;
        hasGroup(): boolean;
        setDisconnected(arg0: boolean): void;
        getName(): string;
        toBytes(arg0: $FriendlyByteBuf): void;
        setName(arg0: string): void;
        setGroup(arg0: $UUID_ | null): void;
        getGroup(): $UUID;
        setUuid(arg0: $UUID_): void;
        isDisabled(): boolean;
        constructor(arg0: $UUID_, arg1: string, arg2: boolean, arg3: boolean);
    }
    export class $Packet<T extends $Packet<any>> {
    }
    export interface $Packet<T extends $Packet<any>> {
        fromBytes(arg0: $FriendlyByteBuf): T;
        getTTL(): number;
        toBytes(arg0: $FriendlyByteBuf): void;
        get TTL(): number;
    }
    export class $Secret {
        static fromBytes(arg0: number[]): $Secret;
        static fromBytes(arg0: $ByteBuf): $Secret;
        static generateIV(): number[];
        static generateNewRandomSecret(): $Secret;
        toBytes(arg0: $ByteBuf): void;
        getSecret(): number[];
        encrypt(arg0: number[]): number[];
        getKeySpec(): $SecretKeySpec;
        decrypt(arg0: number[]): number[];
        static IV_SIZE_BYTES: number;
        static CIPHER: string;
        static SECRET_SIZE_BYTES: number;
        static TAG_LEN_BITS: number;
        get secret(): number[];
        get keySpec(): $SecretKeySpec;
    }
    export class $SoundPacket<T extends $SoundPacket<any>> implements $Packet<T> {
        getChannelId(): $UUID;
        isFromClientAudioChannel(): boolean;
        getData(): number[];
        getCategory(): string;
        getSequenceNumber(): number;
        getSender(): $UUID;
        getTTL(): number;
        static WHISPER_MASK: number;
        static HAS_CATEGORY_MASK: number;
        constructor();
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: string | null);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: number, arg4: string | null);
        get channelId(): $UUID;
        get fromClientAudioChannel(): boolean;
        get data(): number[];
        get category(): string;
        get sequenceNumber(): number;
        get sender(): $UUID;
        get TTL(): number;
    }
    export class $NetworkMessage {
        getPacket(): $Packet<$Packet<any>>;
        getTTL(): number;
        write(arg0: $Secret): number[];
        getAddress(): $SocketAddress;
        getTimestamp(): number;
        static readFromBytes(arg0: $SocketAddress, arg1: $Secret, arg2: number[], arg3: number): $NetworkMessage;
        static readPacketServer(arg0: $RawUdpPacket, arg1: $Server): $NetworkMessage;
        writeServer(arg0: $Server, arg1: $ClientConnection): number[];
        static MAGIC_BYTE: number;
        constructor(arg0: number, arg1: $Packet<never>);
        constructor(arg0: $Packet<never>);
        get packet(): $Packet<$Packet<any>>;
        get TTL(): number;
        get address(): $SocketAddress;
        get timestamp(): number;
    }
}
