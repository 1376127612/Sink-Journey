import { $IOException } from "@package/java/io";
import { $Executor_, $BlockingQueue } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $SecretPacket } from "@package/de/maxhenkel/voicechat/net";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Speaker } from "@package/de/maxhenkel/voicechat/voice/client/speaker";
import { $ClientVoicechatSocket } from "@package/de/maxhenkel/voicechat/api";
import { $ALCapabilities } from "@package/org/lwjgl/openal";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetAddress } from "@package/java/net";
import { $ServerConfig$Codec } from "@package/de/maxhenkel/voicechat/config";
import { $Secret, $NetworkMessage, $SoundPacket } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread, $Runnable_, $Exception } from "@package/java/lang";
export * as speaker from "@package/de/maxhenkel/voicechat/voice/client/speaker";

declare module "@package/de/maxhenkel/voicechat/voice/client" {
    export class $ClientVoicechat {
        onVoiceChatDisconnected(): void;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        toggleRecording(): boolean;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        closeAudioChannel(arg0: $UUID_): boolean;
        getTalkCache(): $TalkCache;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        getMicThread(): $MicThread;
        getInitializationData(): $InitializationData;
        connect(arg0: $InitializationData): void;
        close(): void;
        getConnection(): $ClientVoicechatConnection;
        getStartTime(): number;
        getSoundManager(): $SoundManager;
        setRecording(arg0: boolean): boolean;
        getRecorder(): $AudioRecorder;
        reloadAudio(): void;
        closeMicThread(): void;
        reloadSoundManager(): void;
        constructor();
        get talkCache(): $TalkCache;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get micThread(): $MicThread;
        get initializationData(): $InitializationData;
        get connection(): $ClientVoicechatConnection;
        get startTime(): number;
        get soundManager(): $SoundManager;
        set recording(value: boolean);
        get recorder(): $AudioRecorder;
    }
    export class $AudioChannel extends $Thread {
        getChannelId(): $UUID;
        getPacketBuffer(): $AudioPacketBuffer;
        canKill(): boolean;
        addToQueue(arg0: $SoundPacket<never>): void;
        getSpeaker(): $Speaker;
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        isClosed(): boolean;
        closeAndKill(): void;
        getLostPackets(): number;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $SoundManager, arg3: $UUID_);
        get channelId(): $UUID;
        get packetBuffer(): $AudioPacketBuffer;
        get speaker(): $Speaker;
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get closed(): boolean;
        get lostPackets(): number;
    }
    export class $AudioRecorder {
        saveAndClose(): void;
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(): string;
        getDuration(arg0: number): string;
        getStartTime(): number;
        getStorage(arg0: number): string;
        getStorage(): string;
        flushChunkThreaded(arg0: $UUID_): void;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        getRecordedPlayerCount(): number;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get startTime(): number;
        get recordedPlayerCount(): number;
    }
    export class $InitializationData {
        getKeepAlive(): number;
        getPlayerUUID(): $UUID;
        getCodec(): $ServerConfig$Codec;
        groupsEnabled(): boolean;
        allowRecording(): boolean;
        getServerIP(): string;
        getServerPort(): number;
        getMtuSize(): number;
        getSecret(): $Secret;
        getVoiceChatDistance(): number;
        constructor(arg0: string, arg1: $SecretPacket);
        get keepAlive(): number;
        get playerUUID(): $UUID;
        get codec(): $ServerConfig$Codec;
        get serverIP(): string;
        get serverPort(): number;
        get mtuSize(): number;
        get secret(): $Secret;
        get voiceChatDistance(): number;
    }
    export class $MicrophoneException extends $IOException {
        constructor(arg0: string);
        constructor(arg0: $Exception);
    }
    export class $AudioPacketBuffer {
        getSize(): number;
        clear(): void;
        poll(arg0: $BlockingQueue<$SoundPacket<never>>): $SoundPacket<never>;
        constructor(arg0: number);
        get size(): number;
    }
    export class $SoundManager {
        isClosing(): boolean;
        closeContext(): void;
        getMaxGain(): number;
        static getAlcError(arg0: number): string;
        static checkAlcError(arg0: number): boolean;
        trackSpeaker(arg0: $Speaker): void;
        untrackSpeaker(arg0: $Speaker): void;
        static checkAlError(): boolean;
        static cleanDeviceName(arg0: string): string;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        static canEnumerate(): boolean;
        static canEnumerateAll(): boolean;
        static getAllSpeakers(): $List<string>;
        close(): void;
        static create(arg0: string | null): $SoundManager;
        static create(): $SoundManager;
        isClosed(): boolean;
        openContext(): boolean;
        static getAlError(arg0: number): string;
        constructor(arg0: string | null, arg1: number, arg2: number, arg3: $ALCapabilities, arg4: number);
        get closing(): boolean;
        get maxGain(): number;
        static get allSpeakers(): $List<string>;
        get closed(): boolean;
    }
    export class $TalkCache {
        isWhispering(arg0: $UUID_): boolean;
        isWhispering(arg0: $Entity): boolean;
        updateLevel(arg0: $UUID_, arg1: string | null, arg2: boolean, arg3: number[]): void;
        updateCategoryVolume(arg0: string, arg1: number): void;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        getPlayerAudioLevel(arg0: $UUID_): number;
        getCategoryAudioLevel(arg0: string): number;
        isTalking(arg0: $UUID_): boolean;
        isTalking(arg0: $Entity): boolean;
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        checkTimeout(): void;
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        isConnected(): boolean;
        disconnect(): void;
        isInitialized(): boolean;
        getSocket(): $ClientVoicechatSocket;
        sendToServer(arg0: $NetworkMessage): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get address(): $InetAddress;
        get data(): $InitializationData;
        get connected(): boolean;
        get initialized(): boolean;
        get socket(): $ClientVoicechatSocket;
    }
    export class $MicThread extends $Thread {
        isWhispering(): boolean;
        close(): void;
        isClosed(): boolean;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        isTalking(): boolean;
        pollMic(): number[];
        pollProcessedAudio(arg0: boolean): number[];
        setMicrophoneLocked(arg0: boolean): void;
        shouldTransmitAudio(): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat | null, arg1: $ClientVoicechatConnection | null, arg2: $Consumer_<$MicrophoneException>);
        get whispering(): boolean;
        get closed(): boolean;
        get talking(): boolean;
        set microphoneLocked(value: boolean);
    }
}
