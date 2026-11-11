import { $JsonObject_ } from "@package/com/google/gson";
import { $MinecraftServer, $PlayerAdvancements, $RegistryLayer_ } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $UUID_, $Date, $List_, $Collection, $Map } from "@package/java/util";
import { $SimpleDateFormat } from "@package/java/text";
import { $Function_ } from "@package/java/util/function";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $Connection } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $GameProfileRepository_, $GameProfile } from "@package/com/mojang/authlib";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $PlayerListAccessor } from "@package/com/teamresourceful/resourcefulconfig/mixins/common";
import { $RuntimeException } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $File, $File_ } from "@package/java/io";
import { $Component_, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $ServerGamePacketListenerImpl, $CommonListenerCookie_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $DedicatedServer } from "@package/net/minecraft/server/dedicated";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerStatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/server/players" {
    export class $ServerOpListEntry extends $StoredUserEntry<$GameProfile> {
        /**
         * Gets the permission level of the user, as defined in the "level" attribute of the ops.json file
         */
        getLevel(): number;
        getBypassesPlayerLimit(): boolean;
        constructor(user: $GameProfile, level: number, bypassesPlayerLimit: boolean);
        constructor(entryData: $JsonObject_);
        get level(): number;
        get bypassesPlayerLimit(): boolean;
    }
    export class $OldUsersConverter {
        static serverReadyAfterUserconversion(server: $MinecraftServer): boolean;
        static convertOpsList(server: $MinecraftServer): boolean;
        static convertPlayers(server: $DedicatedServer): boolean;
        static convertUserBanlist(server: $MinecraftServer): boolean;
        static convertWhiteList(server: $MinecraftServer): boolean;
        static convertIpBanlist(server: $MinecraftServer): boolean;
        static convertMobOwnerIfNecessary(server: $MinecraftServer, username: string): $UUID;
        static OLD_OPLIST: $File;
        static OLD_USERBANLIST: $File;
        static OLD_IPBANLIST: $File;
        static OLD_WHITELIST: $File;
        constructor();
    }
    export class $GameProfileCache {
        get(profileName: string): ($GameProfile) | undefined;
        get(uuid: $UUID_): ($GameProfile) | undefined;
        load(): $List<$GameProfileCache$GameProfileInfo>;
        /**
         * Add an entry to this cache
         */
        add(gameProfile: $GameProfile): void;
        /**
         * Save the cached profiles to disk
         */
        save(): void;
        getAsync(name: string): $CompletableFuture<($GameProfile) | undefined>;
        static setUsesAuthentication(onlineMode: boolean): void;
        setExecutor(exectutor: $Executor_): void;
        /**
         * Save the cached profiles to disk
         */
        clearExecutor(): void;
        getNextOperation(): number;
        profilesByName: $Map<string, $GameProfileCache$GameProfileInfo>;
        constructor(profileRepository: $GameProfileRepository_, file: $File_);
        static set usesAuthentication(value: boolean);
        set executor(value: $Executor_);
        get nextOperation(): number;
    }
    export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(entryData: $JsonObject_);
        constructor(profile: $GameProfile | null, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        constructor(user: $GameProfile | null);
    }
    export class $BanListEntry<T> extends $StoredUserEntry<T> {
        getSource(): string;
        getDisplayName(): $Component;
        getReason(): string;
        getCreated(): $Date;
        getExpires(): $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(user: T | null, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        get source(): string;
        get displayName(): $Component;
        get reason(): string;
        get created(): $Date;
        get expires(): $Date;
    }
    export class $IpBanList extends $StoredUserList<string, $IpBanListEntry> {
        get(address: $SocketAddress): $IpBanListEntry;
        isBanned(address: string): boolean;
        isBanned(address: $SocketAddress): boolean;
        constructor(file: $File_);
    }
    export class $UserWhiteListEntry extends $StoredUserEntry<$GameProfile> {
        constructor(user: $GameProfile);
        constructor(entryData: $JsonObject_);
    }
    export class $SleepStatus {
        update(players: $List_<$ServerPlayer>): boolean;
        areEnoughDeepSleeping(requiredSleepPercentage: number, sleepingPlayers: $List_<$ServerPlayer>): boolean;
        removeAllSleepers(): void;
        areEnoughSleeping(requiredSleepPercentage: number): boolean;
        amountSleeping(): number;
        sleepersNeeded(requiredSleepPercentage: number): number;
        constructor();
    }
    export class $ServerOpList extends $StoredUserList<$GameProfile, $ServerOpListEntry> {
        canBypassPlayerLimit(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $GameProfileCache$GameProfileInfo {
        /**
         * Get the player's GameProfile
         */
        getProfile(): $GameProfile;
        setLastAccess(lastAccess: number): void;
        /**
         * Get the date that this entry will expire
         */
        getExpirationDate(): $Date;
        getLastAccess(): number;
        get profile(): $GameProfile;
        get expirationDate(): $Date;
    }
    export class $UserBanList extends $StoredUserList<$GameProfile, $UserBanListEntry> {
        isBanned(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $UserWhiteList extends $StoredUserList<$GameProfile, $UserWhiteListEntry> {
        /**
         * Returns `true` if the profile is in the whitelist.
         */
        isWhiteListed(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $PlayerList implements $PlayerListAccessor {
        disconnectAllPlayersWithProfile(profile: $GameProfile): boolean;
        handler$cdh000$xaerolib$onSendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$blg000$rechiseled$placeNewPlayer(connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_, ci: $CallbackInfo): void;
        handler$blg000$rechiseled$reloadResources(ci: $CallbackInfo): void;
        placeNewPlayer(connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        remove(player: $ServerPlayer): void;
        load(player: $ServerPlayer): ($CompoundTag) | undefined;
        op(profile: $GameProfile): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        removeAll(): void;
        broadcast(except: $Player | null, x: number, arg2: number, y: number, arg4: number, z: $ResourceKey_<$Level>, arg6: $Packet<never>): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        tick(): void;
        getOps(): $ServerOpList;
        deop(profile: $GameProfile): void;
        setSimulationDistance(simulationDistance: number): void;
        broadcastAll(packet: $Packet<never>, dimension: $ResourceKey_<$Level>): void;
        broadcastAll(packet: $Packet<never>): void;
        sendActiveEffects(entity: $LivingEntity, connection: $ServerGamePacketListenerImpl): void;
        respawn(player: $ServerPlayer, keepInventory: boolean, reason: $Entity$RemovalReason_): $ServerPlayer;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getSimulationDistance(): number;
        /**
         * Gets the ServerPlayer object representing the player with the UUID.
         */
        getPlayer(playerUUID: $UUID_): $ServerPlayer;
        /**
         * Updates the time and weather for the given player to those of the given world
         */
        sendLevelInfo(player: $ServerPlayer, level: $ServerLevel): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendAllPlayerInfo(player: $ServerPlayer): void;
        getPlayerStats(player: $Player): $ServerStatsCounter;
        getBans(): $UserBanList;
        getServer(): $MinecraftServer;
        broadcastSystemToAllExceptTeam(player: $Player, message: $Component_): void;
        broadcastSystemMessage(message: $Component_, bypassHiddenChat: boolean): void;
        broadcastSystemMessage(serverMessage: $Component_, playerMessageFactory: $Function_<$ServerPlayer, $Component>, bypassHiddenChat: boolean): void;
        getPlayerAdvancements(player: $ServerPlayer): $PlayerAdvancements;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendActivePlayerEffects(player: $ServerPlayer): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendPlayerPermissionLevel(player: $ServerPlayer): void;
        broadcastSystemToTeam(player: $Player, message: $Component_): void;
        isOp(profile: $GameProfile): boolean;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getViewDistance(): number;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        saveAll(): void;
        getPlayers(): $List<$ServerPlayer>;
        broadcastChatMessage(message: $PlayerChatMessage_, sender: $ServerPlayer, boundChatType: $ChatType$Bound_): void;
        broadcastChatMessage(message: $PlayerChatMessage_, sender: $CommandSourceStack, boundChatType: $ChatType$Bound_): void;
        getPlayerByName(username: string): $ServerPlayer;
        isAllowCommandsForAllPlayers(): boolean;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getPlayerCount(): number;
        getWhiteList(): $UserWhiteList;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getMaxPlayers(): number;
        isWhiteListed(profile: $GameProfile): boolean;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        reloadResources(): void;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNamesArray(): string[];
        /**
         * On integrated servers, returns the host's player data to be written to level.dat.
         */
        getSingleplayerData(): $CompoundTag;
        addWorldborderListener(level: $ServerLevel): void;
        setAllowCommandsForAllPlayers(allowCommandsForAllPlayers: boolean): void;
        setViewDistance(simulationDistance: number): void;
        getIpBans(): $IpBanList;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getOpNames(): string[];
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        reloadWhiteList(): void;
        setUsingWhiteList(allowCommandsForAllPlayers: boolean): void;
        canPlayerLogin(socketAddress: $SocketAddress, gameProfile: $GameProfile): $Component;
        getPlayerForLogin(gameProfile: $GameProfile, clientInformation: $ClientInformation_): $ServerPlayer;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getWhiteListNames(): string[];
        isUsingWhitelist(): boolean;
        canBypassPlayerLimit(profile: $GameProfile): boolean;
        getPlayersWithAddress(address: string): $List<$ServerPlayer>;
        handler$doe000$xaerominimap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        setMaxPlayers(simulationDistance: number): void;
        static WHITELIST_FILE: $File;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $MinecraftServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage, maxPlayers: number);
        get ops(): $ServerOpList;
        get bans(): $UserBanList;
        get server(): $MinecraftServer;
        get players(): $List<$ServerPlayer>;
        get playerCount(): number;
        get whiteList(): $UserWhiteList;
        get playerNamesArray(): string[];
        get singleplayerData(): $CompoundTag;
        get ipBans(): $IpBanList;
        get opNames(): string[];
        set usingWhiteList(value: boolean);
        get whiteListNames(): string[];
        get usingWhitelist(): boolean;
    }
    export class $StoredUserList<K, V extends $StoredUserEntry<K>> {
        remove(user: K): void;
        /**
         * Adds an entry to the list
         */
        remove(entry: $StoredUserEntry<K>): void;
        get(obj: K): V;
        /**
         * Removes expired bans from the list. See `BanEntry#hasBanExpired`
         */
        load(): void;
        isEmpty(): boolean;
        /**
         * Adds an entry to the list
         */
        add(entry: V): void;
        /**
         * Removes expired bans from the list. See `BanEntry#hasBanExpired`
         */
        save(): void;
        getFile(): $File;
        getEntries(): $Collection<V>;
        getUserList(): string[];
        constructor(file: $File_);
        get empty(): boolean;
        get file(): $File;
        get entries(): $Collection<V>;
        get userList(): string[];
    }
    export class $StoredUserEntry<T> {
        constructor(user: T | null);
    }
    export class $OldUsersConverter$ConversionError extends $RuntimeException {
    }
    export class $IpBanListEntry extends $BanListEntry<string> {
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(entryData: $JsonObject_);
        constructor(ip: string, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        constructor(ip: string);
    }
}
