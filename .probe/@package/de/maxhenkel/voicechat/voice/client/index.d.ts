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
        closeAudioChannel(arg0: $UUID_): boolean;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        getTalkCache(): $TalkCache;
        getMicThread(): $MicThread;
        connect(arg0: $InitializationData): void;
        close(): void;
        getConnection(): $ClientVoicechatConnection;
        setRecording(arg0: boolean): boolean;
        getRecorder(): $AudioRecorder;
        getStartTime(): number;
        getSoundManager(): $SoundManager;
        onVoiceChatDisconnected(): void;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        toggleRecording(): boolean;
        getInitializationData(): $InitializationData;
        reloadAudio(): void;
        closeMicThread(): void;
        reloadSoundManager(): void;
        constructor();
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get talkCache(): $TalkCache;
        get micThread(): $MicThread;
        get connection(): $ClientVoicechatConnection;
        set recording(value: boolean);
        get recorder(): $AudioRecorder;
        get startTime(): number;
        get soundManager(): $SoundManager;
        get initializationData(): $InitializationData;
    }
    export class $AudioChannel extends $Thread {
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        isClosed(): boolean;
        addToQueue(arg0: $SoundPacket<never>): void;
        getPacketBuffer(): $AudioPacketBuffer;
        getChannelId(): $UUID;
        canKill(): boolean;
        closeAndKill(): void;
        getSpeaker(): $Speaker;
        getLostPackets(): number;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $SoundManager, arg3: $UUID_);
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get closed(): boolean;
        get packetBuffer(): $AudioPacketBuffer;
        get channelId(): $UUID;
        get speaker(): $Speaker;
        get lostPackets(): number;
    }
    export class $AudioRecorder {
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(arg0: number): string;
        getDuration(): string;
        getStartTime(): number;
        getStorage(): string;
        getStorage(arg0: number): string;
        saveAndClose(): void;
        flushChunkThreaded(arg0: $UUID_): void;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        getRecordedPlayerCount(): number;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get startTime(): number;
        get recordedPlayerCount(): number;
    }
    export class $InitializationData {
        getServerIP(): string;
        getCodec(): $ServerConfig$Codec;
        getKeepAlive(): number;
        getSecret(): $Secret;
        getServerPort(): number;
        getVoiceChatDistance(): number;
        groupsEnabled(): boolean;
        allowRecording(): boolean;
        getPlayerUUID(): $UUID;
        getMtuSize(): number;
        constructor(arg0: string, arg1: $SecretPacket);
        get serverIP(): string;
        get codec(): $ServerConfig$Codec;
        get keepAlive(): number;
        get secret(): $Secret;
        get serverPort(): number;
        get voiceChatDistance(): number;
        get playerUUID(): $UUID;
        get mtuSize(): number;
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
        getMaxGain(): number;
        static getAlError(arg0: number): string;
        close(): void;
        static create(): $SoundManager;
        static create(arg0: string | null): $SoundManager;
        isClosed(): boolean;
        isClosing(): boolean;
        openContext(): boolean;
        closeContext(): void;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        static cleanDeviceName(arg0: string): string;
        static getAlcError(arg0: number): string;
        static getAllSpeakers(): $List<string>;
        trackSpeaker(arg0: $Speaker): void;
        static checkAlError(): boolean;
        static canEnumerateAll(): boolean;
        untrackSpeaker(arg0: $Speaker): void;
        static canEnumerate(): boolean;
        static checkAlcError(arg0: number): boolean;
        constructor(arg0: string | null, arg1: number, arg2: number, arg3: $ALCapabilities, arg4: number);
        get maxGain(): number;
        get closed(): boolean;
        get closing(): boolean;
        static get allSpeakers(): $List<string>;
    }
    export class $TalkCache {
        updateCategoryVolume(arg0: string, arg1: number): void;
        isWhispering(arg0: $Entity): boolean;
        isWhispering(arg0: $UUID_): boolean;
        updateLevel(arg0: $UUID_, arg1: string | null, arg2: boolean, arg3: number[]): void;
        isTalking(arg0: $UUID_): boolean;
        isTalking(arg0: $Entity): boolean;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        getPlayerAudioLevel(arg0: $UUID_): number;
        getCategoryAudioLevel(arg0: string): number;
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        isConnected(): boolean;
        isInitialized(): boolean;
        disconnect(): void;
        sendToServer(arg0: $NetworkMessage): boolean;
        getSocket(): $ClientVoicechatSocket;
        checkTimeout(): void;
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
        close(): void;
        isClosed(): boolean;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        isWhispering(): boolean;
        isTalking(): boolean;
        pollProcessedAudio(arg0: boolean): number[];
        pollMic(): number[];
        setMicrophoneLocked(arg0: boolean): void;
        shouldTransmitAudio(): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat | null, arg1: $ClientVoicechatConnection | null, arg2: $Consumer_<$MicrophoneException>);
        get closed(): boolean;
        get whispering(): boolean;
        get talking(): boolean;
        set microphoneLocked(value: boolean);
    }
}
