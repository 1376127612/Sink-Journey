import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $Codec } from "@package/com/mojang/serialization";
import { $ServerInfo, $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerStatus_, $ServerStatusPacketListener, $ServerboundStatusRequestPacket } from "@package/net/minecraft/network/protocol/status";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RelativeMovement_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Set_, $List, $List_ } from "@package/java/util";
import { $ServerboundCookieResponsePacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ServerboundKeepAlivePacket, $ServerboundCustomPayloadPacket_, $ServerboundPongPacket, $ServerboundResourcePackPacket_, $ServerboundClientInformationPacket_, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ClientInformation, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetAddress, $SocketAddress } from "@package/java/net";
import { $PacketSendListener, $Connection, $DisconnectionDetails_, $TickablePacketListener, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $RuntimeException, $Exception, $Throwable, $Iterable_, $Record, $AutoCloseable } from "@package/java/lang";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Component_, $ChatType$Bound_, $PlayerChatMessage_, $FilterMask } from "@package/net/minecraft/network/chat";
import { $ServerboundLoginAcknowledgedPacket, $ServerLoginPacketListener, $ServerboundKeyPacket, $ServerboundHelloPacket_, $ServerboundCustomQueryAnswerPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerHandshakePacketListener, $ClientIntentionPacket_ } from "@package/net/minecraft/network/protocol/handshake";
import { $ServerboundSetCommandMinecartPacket, $ServerboundJigsawGeneratePacket, $ServerboundDebugSampleSubscriptionPacket_, $ServerboundChangeDifficultyPacket, $ServerboundPlaceRecipePacket, $ServerboundUseItemPacket, $ServerboundBlockEntityTagQueryPacket, $ServerboundPickItemPacket, $ServerboundChatPacket_, $ServerGamePacketListener, $ServerboundPlayerActionPacket, $ServerboundPaddleBoatPacket, $ServerboundMoveVehiclePacket, $ServerboundLockDifficultyPacket, $ServerboundSetBeaconPacket_, $ServerboundInteractPacket$Handler, $ServerboundSetStructureBlockPacket, $ServerboundPlayerInputPacket, $ServerboundEditBookPacket_, $ServerboundConfigurationAcknowledgedPacket, $ServerboundClientCommandPacket, $ServerboundSelectTradePacket, $ServerboundPlayerCommandPacket, $ServerboundSeenAdvancementsPacket, $ServerboundSwingPacket, $ServerboundMovePlayerPacket, $ServerboundSetJigsawBlockPacket, $ServerboundContainerClickPacket, $ServerboundPlayerAbilitiesPacket, $ServerboundCommandSuggestionPacket, $ServerboundRecipeBookChangeSettingsPacket, $ServerboundEntityTagQueryPacket, $ServerboundInteractPacket, $ServerboundChunkBatchReceivedPacket_, $ServerboundSetCarriedItemPacket, $ServerboundChatSessionUpdatePacket_, $ServerboundSetCommandBlockPacket, $ServerboundSignUpdatePacket, $ServerboundAcceptTeleportationPacket, $ServerboundChatAckPacket_, $ServerboundContainerSlotStateChangedPacket_, $ServerboundUseItemOnPacket, $ServerboundTeleportToEntityPacket, $ServerboundContainerClosePacket, $ServerboundChatCommandSignedPacket_, $ServerboundChatCommandPacket_, $ServerboundRenameItemPacket, $ServerboundContainerButtonClickPacket_, $ServerboundRecipeBookSeenRecipePacket, $ServerboundSetCreativeModeSlotPacket_ } from "@package/net/minecraft/network/protocol/game";
import { $ServerConfigurationPacketListener, $ServerboundFinishConfigurationPacket, $ServerboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ServerboundPingRequestPacket } from "@package/net/minecraft/network/protocol/ping";
import { $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/net/minecraft/server/network/config";

declare module "@package/net/minecraft/server/network" {
    export class $ServerGamePacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerGamePacketListener, $ServerPlayerConnection, $TickablePacketListener {
        getRemoteAddress(): $SocketAddress;
        tick(): void;
        handlePickItem(packet: $ServerboundPickItemPacket): void;
        getPlayer(): $ServerPlayer;
        /**
         * Teleports the player position to the (relative) values specified, and syncs to the client
         */
        teleport(x: number, arg1: number, y: number, arg3: number, z: number, arg5: $Set_<$RelativeMovement_>): void;
        teleport(x: number, arg1: number, y: number, arg3: number, z: number): void;
        resetPosition(): void;
        handleTeleportToEntityPacket(packet: $ServerboundTeleportToEntityPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCustomCommandSuggestions(packet: $ServerboundCommandSuggestionPacket): void;
        handleRecipeBookSeenRecipePacket(packet: $ServerboundRecipeBookSeenRecipePacket): void;
        handleContainerSlotStateChanged(packet: $ServerboundContainerSlotStateChangedPacket_): void;
        handleConfigurationAcknowledged(packet: $ServerboundConfigurationAcknowledgedPacket): void;
        handleDebugSampleSubscription(packet: $ServerboundDebugSampleSubscriptionPacket_): void;
        handlePlaceRecipe(packet: $ServerboundPlaceRecipePacket): void;
        wrapOperation$zbc000$astralsorcery$allowInteractableEntityAttack(arg0: $ServerboundInteractPacket, arg1: $ServerboundInteractPacket$Handler, arg2: $Operation_<any>): void;
        handleRecipeBookChangeSettingsPacket(packet: $ServerboundRecipeBookChangeSettingsPacket): void;
        handler$fjd001$ad_astra$adastra$tick(arg0: $CallbackInfo): void;
        /**
         * Process chat messages (broadcast back to clients) and commands (executes)
         */
        handleChat(packet: $ServerboundChatPacket_): void;
        ackBlockChangesUpTo(sequence: number): void;
        handleAcceptTeleportPacket(packet: $ServerboundAcceptTeleportationPacket): void;
        handleSetStructureBlock(packet: $ServerboundSetStructureBlockPacket): void;
        handleJigsawGenerate(packet: $ServerboundJigsawGeneratePacket): void;
        handleSetCommandMinecart(packet: $ServerboundSetCommandMinecartPacket): void;
        /**
         * Updates which quickbar slot is selected
         */
        handleSetCarriedItem(packet: $ServerboundSetCarriedItemPacket): void;
        /**
         * Processes a range of action-types: sneaking, sprinting, waking from sleep, opening the inventory or setting jump height of the horse the player is riding
         */
        handlePlayerCommand(packet: $ServerboundPlayerCommandPacket): void;
        sendDisguisedChatMessage(message: $Component_, boundType: $ChatType$Bound_): void;
        /**
         * Update the server with an ItemStack in a slot.
         */
        handleSetCreativeModeSlot(packet: $ServerboundSetCreativeModeSlotPacket_): void;
        handleSetCommandBlock(packet: $ServerboundSetCommandBlockPacket): void;
        handleSetBeaconPacket(packet: $ServerboundSetBeaconPacket_): void;
        handleBlockEntityTagQuery(packet: $ServerboundBlockEntityTagQueryPacket): void;
        handleSignedChatCommand(packet: $ServerboundChatCommandSignedPacket_): void;
        handleEntityTagQuery(packet: $ServerboundEntityTagQueryPacket): void;
        /**
         * Processes the client status updates: respawn attempt from player, opening statistics or achievements, or acquiring 'open inventory' achievement
         */
        handleClientCommand(packet: $ServerboundClientCommandPacket): void;
        /**
         * Processes the client closing windows (container)
         */
        handleContainerClose(packet: $ServerboundContainerClosePacket): void;
        /**
         * Executes a container/inventory slot manipulation as indicated by the packet. Sends the serverside result if they didn't match the indicated result and prevents further manipulation by the player until he confirms that it has the same open container/inventory
         */
        handleContainerClick(packet: $ServerboundContainerClickPacket): void;
        handleSetJigsawBlock(packet: $ServerboundSetJigsawBlockPacket): void;
        /**
         * Enchants the item identified by the packet given some convoluted conditions (matching window, which should/shouldn't be in use?)
         */
        handleContainerButtonClick(packet: $ServerboundContainerButtonClickPacket_): void;
        /**
         * Processes a player starting/stopping flying
         */
        handlePlayerAbilities(packet: $ServerboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(packet: $ServerboundChangeDifficultyPacket): void;
        sendPlayerChatMessage(chatMessage: $PlayerChatMessage_, boundType: $ChatType$Bound_): void;
        handleSeenAdvancements(packet: $ServerboundSeenAdvancementsPacket): void;
        handleChunkBatchReceived(packet: $ServerboundChunkBatchReceivedPacket_): void;
        handleLockDifficulty(packet: $ServerboundLockDifficultyPacket): void;
        handleChatSessionUpdate(packet: $ServerboundChatSessionUpdatePacket_): void;
        handleSelectTrade(packet: $ServerboundSelectTradePacket): void;
        handleRenameItem(packet: $ServerboundRenameItemPacket): void;
        handleEditBook(packet: $ServerboundEditBookPacket_): void;
        handleMoveVehicle(packet: $ServerboundMoveVehiclePacket): void;
        /**
         * Processes player movement input. Includes walking, strafing, jumping, and sneaking. Excludes riding and toggling flying/sprinting.
         */
        handlePlayerInput(packet: $ServerboundPlayerInputPacket): void;
        handlePaddleBoat(packet: $ServerboundPaddleBoatPacket): void;
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        /**
         * Processes clients perspective on player positioning and/or orientation
         */
        handleMovePlayer(packet: $ServerboundMovePlayerPacket): void;
        handleChatAck(packet: $ServerboundChatAckPacket_): void;
        handleAnimate(packet: $ServerboundSwingPacket): void;
        addPendingMessage(message: $PlayerChatMessage_): void;
        /**
         * Processes left and right clicks on entities
         */
        handleInteract(packet: $ServerboundInteractPacket): void;
        handleChatCommand(packet: $ServerboundChatCommandPacket_): void;
        switchToConfig(): void;
        handleUseItemOn(packet: $ServerboundUseItemOnPacket): void;
        /**
         * Called when a client is using an item while not pointing at a block, but simply using an item
         */
        handleUseItem(packet: $ServerboundUseItemPacket): void;
        /**
         * Processes the player initiating/stopping digging on a particular spot, as well as a player dropping items
         */
        handlePlayerAction(packet: $ServerboundPlayerActionPacket): void;
        handleSignUpdate(packet: $ServerboundSignUpdatePacket): void;
        handler$dge000$ftbquests$handleClientInformation(packet: $ServerboundClientInformationPacket_, ci: $CallbackInfo): void;
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        sendBundled(arg0: $Iterable_<$CustomPacketPayload>): void;
        static LATENCY_CHECK_INTERVAL: number;
        aboveGroundTickCount: number;
        aboveGroundVehicleTickCount: number;
        chunkSender: $PlayerChunkSender;
        player: $ServerPlayer;
        constructor(server: $MinecraftServer, connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_);
        get remoteAddress(): $SocketAddress;
    }
    export class $ServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask {
    }
    export interface $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(task: $Consumer_<$Packet<never>>): void;
    }
    export class $TextFilterClient$JoinOrLeaveEncoder {
    }
    export interface $TextFilterClient$JoinOrLeaveEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$JoinOrLeaveEncoder}.
     */
    export type $TextFilterClient$JoinOrLeaveEncoder_ = (() => void);
    export class $ServerConnectionListener$LatencySimulator$DelayedMessage {
    }
    export class $ServerLoginPacketListenerImpl$State extends $Enum<$ServerLoginPacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginPacketListenerImpl$State}.
     */
    export type $ServerLoginPacketListenerImpl$State_ = "hello" | "key" | "authenticating" | "negotiating" | "verifying" | "waiting_for_dupe_disconnect" | "protocol_switching" | "accepted";
    export class $ServerConnectionListener {
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        stop(): void;
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        tick(): void;
        /**
         * Adds a channel that listens on publicly accessible network ports
         */
        startTcpServerListener(address: $InetAddress | null, port: number): void;
        getConnections(): $List<$Connection>;
        /**
         * Adds a channel that listens locally
         */
        startMemoryChannel(): $SocketAddress;
        getServer(): $MinecraftServer;
        running: boolean;
        static SERVER_EVENT_GROUP: $Supplier<$NioEventLoopGroup>;
        static SERVER_EPOLL_EVENT_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(server: $MinecraftServer);
        get connections(): $List<$Connection>;
        get server(): $MinecraftServer;
    }
    export class $LegacyQueryHandler extends $ChannelInboundHandlerAdapter {
        constructor(server: $ServerInfo);
    }
    export class $ServerConnectionListener$LatencySimulator extends $ChannelInboundHandlerAdapter {
    }
    export class $ServerConfigurationPacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerConfigurationPacketListener, $TickablePacketListener {
        returnToWorld(): void;
        startConfiguration(): void;
        finishCurrentTask(taskType: $ConfigurationTask$Type_): void;
        tick(): void;
        handleConfigurationFinished(packet: $ServerboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(packet: $ServerboundSelectKnownPacks_): void;
        static LATENCY_CHECK_INTERVAL: number;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
    }
    export class $CommonListenerCookie extends $Record {
        transferred(): boolean;
        latency(): number;
        static createInitial(gameProfile: $GameProfile, transferred: boolean): $CommonListenerCookie;
        clientInformation(): $ClientInformation;
        gameProfile(): $GameProfile;
        connectionType(): $ConnectionType;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: number, arg2: $ClientInformation_, arg3: boolean);
        constructor(gameProfile: $GameProfile, latency: number, clientInformation: $ClientInformation_, transferred: boolean, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { gameProfile?: $GameProfile, connectionType?: $ConnectionType_, clientInformation?: $ClientInformation_, latency?: number, transferred?: boolean,  } | [gameProfile?: $GameProfile, connectionType?: $ConnectionType_, clientInformation?: $ClientInformation_, latency?: number, transferred?: boolean, ];
    export class $ServerGamePacketListenerImpl$EntityInteraction {
    }
    export interface $ServerGamePacketListenerImpl$EntityInteraction {
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImpl$EntityInteraction}.
     */
    export type $ServerGamePacketListenerImpl$EntityInteraction_ = (() => void);
    export class $TextFilterClient$IgnoreStrategy {
        static select(threshold: number): $TextFilterClient$IgnoreStrategy;
        static ignoreOverThreshold(threshold: number): $TextFilterClient$IgnoreStrategy;
        static NEVER_IGNORE: $TextFilterClient$IgnoreStrategy;
        static IGNORE_FULLY_FILTERED: $TextFilterClient$IgnoreStrategy;
    }
    export interface $TextFilterClient$IgnoreStrategy {
        shouldIgnore(text: string, threshold: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$IgnoreStrategy}.
     */
    export type $TextFilterClient$IgnoreStrategy_ = ((arg0: string, arg1: number) => boolean);
    export class $Filterable<T> extends $Record {
        get(filtered: boolean): T;
        map<U>(mappingFunction: $Function_<T, U>): $Filterable<U>;
        static from(filteredText: $FilteredText_): $Filterable<string>;
        resolve<U>(resolver: $Function_<T, (U) | undefined>): ($Filterable<U>) | undefined;
        raw(): T;
        filtered(): (T) | undefined;
        static streamCodec<B extends $ByteBuf, T>(codec: $StreamCodec<B, T>): $StreamCodec<B, $Filterable<T>>;
        static codec<T>(codec: $Codec<T>): $Codec<$Filterable<T>>;
        static passThrough<T>(value: T): $Filterable<T>;
        constructor(arg0: T, arg1: (T) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Filterable}.
     */
    export type $Filterable_<T> = { filtered?: (T) | undefined, raw?: any,  } | [filtered?: (T) | undefined, raw?: any, ];
    export class $TextFilter {
        static DUMMY: $TextFilter;
    }
    export interface $TextFilter {
        join(): void;
        processStreamMessage(text: string): $CompletableFuture<$FilteredText>;
        processMessageBundle(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        leave(): void;
    }
    export class $TextFilterClient$RequestFailedException extends $RuntimeException {
    }
    export class $TextFilterClient$PlayerContext implements $TextFilter {
    }
    export class $LegacyProtocolUtils {
        static readLegacyString(buffer: $ByteBuf): string;
        static writeLegacyString(buffer: $ByteBuf, string: string): void;
        static GET_INFO_PACKET_VERSION_1: number;
        static GET_INFO_PACKET_ID: number;
        static CUSTOM_PAYLOAD_PACKET_ID: number;
        static FAKE_PROTOCOL_VERSION: number;
        static CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: string;
        static DISCONNECT_PACKET_ID: number;
        constructor();
    }
    export class $ServerStatusPacketListenerImpl implements $ServerStatusPacketListener {
        handleStatusRequest(packet: $ServerboundStatusRequestPacket): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(status: $ServerStatus_, connection: $Connection);
        constructor(arg0: $ServerStatus_, arg1: $Connection, arg2: string);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask$Type extends $Record {
        id(): string;
        constructor(arg0: $ResourceLocation_);
        constructor(id: string);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationTask$Type}.
     */
    export type $ConfigurationTask$Type_ = { id?: string,  } | [id?: string, ];
    export class $PlayerChunkSender {
        dropChunk(player: $ServerPlayer, chunkPos: $ChunkPos): void;
        markChunkPendingToSend(chunk: $LevelChunk): void;
        onChunkBatchReceivedByClient(desiredBatchSize: number): void;
        sendNextChunks(player: $ServerPlayer): void;
        isPending(chunkPos: number): boolean;
        static MIN_CHUNKS_PER_TICK: number;
        static MAX_CHUNKS_PER_TICK: number;
        constructor(memoryConnection: boolean);
    }
    export class $ServerCommonPacketListenerImpl implements $ServerCommonPacketListener {
        getOwner(): $GameProfile;
        getConnection(): $Connection;
        latency(): number;
        send(packet: $Packet<never>, listener: $PacketSendListener | null): void;
        send(packet: $Packet<never>): void;
        disconnect(disconnectionDetails: $DisconnectionDetails_): void;
        disconnect(reason: $Component_): void;
        onDisconnect(disconnectionDetails: $DisconnectionDetails_): void;
        getConnectionType(): $ConnectionType;
        suspendFlushing(): void;
        resumeFlushing(): void;
        handlePong(packet: $ServerboundPongPacket): void;
        handleResourcePackResponse(packet: $ServerboundResourcePackPacket_): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        handleCustomPayload(packet: $ServerboundCustomPayloadPacket_): void;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        handleKeepAlive(packet: $ServerboundKeepAlivePacket): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        send(arg0: $CustomPacketPayload_): void;
        send(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
        flow(): $PacketFlow;
        hasChannel(arg0: $ResourceLocation_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        fillCrashReport(crashReport: $CrashReport): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        static LATENCY_CHECK_INTERVAL: number;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
        get owner(): $GameProfile;
        get connection(): $Connection;
        get connectionType(): $ConnectionType;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $FilteredText extends $Record {
        mask(): $FilterMask;
        raw(): string;
        filtered(): string;
        isFiltered(): boolean;
        filteredOrEmpty(): string;
        static passThrough(raw: string): $FilteredText;
        static fullyFiltered(raw: string): $FilteredText;
        static EMPTY: $FilteredText;
        constructor(arg0: string, arg1: $FilterMask);
    }
    /**
     * Values that may be interpreted as {@link $FilteredText}.
     */
    export type $FilteredText_ = { mask?: $FilterMask, raw?: string,  } | [mask?: $FilterMask, raw?: string, ];
    export class $TextFilterClient implements $AutoCloseable {
        static createFromConfig(config: string): $TextFilterClient;
        close(): void;
        createContext(profile: $GameProfile): $TextFilter;
    }
    export class $ServerLoginPacketListenerImpl implements $ServerLoginPacketListener, $TickablePacketListener {
        tick(): void;
        getUserName(): string;
        disconnect(reason: $Component_): void;
        handleKey(packet: $ServerboundKeyPacket): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleHello(packet: $ServerboundHelloPacket_): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        isAcceptingMessages(): boolean;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        handleLoginAcknowledgement(packet: $ServerboundLoginAcknowledgedPacket): void;
        handleCustomQueryPacket(packet: $ServerboundCustomQueryAnswerPacket_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(server: $MinecraftServer, connection: $Connection, transferred: boolean);
        get userName(): string;
        get acceptingMessages(): boolean;
    }
    export class $TextFilterClient$MessageEncoder {
    }
    export interface $TextFilterClient$MessageEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$MessageEncoder}.
     */
    export type $TextFilterClient$MessageEncoder_ = (() => void);
    export class $ServerPlayerConnection {
    }
    export interface $ServerPlayerConnection {
        send(packet: $Packet<never>): void;
        getPlayer(): $ServerPlayer;
        get player(): $ServerPlayer;
    }
    export class $MemoryServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
}
