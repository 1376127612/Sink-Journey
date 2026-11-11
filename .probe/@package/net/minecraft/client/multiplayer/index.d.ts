import { $ServerLinks_, $ServerLinks } from "@package/net/minecraft/server";
import { $LevelRenderer, $DimensionSpecialEffects, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $DebugQueryHandler, $Minecraft, $ClientRecipeBook, $User } from "@package/net/minecraft/client";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementTree$Listener, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $InteractionResult, $InteractionHand_, $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $URL } from "@package/java/net";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $FriendlyByteBuf, $Connection, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageValidator, $SignedMessageChain$Encoder, $LocalChatSession, $Component_, $PlayerChatMessage, $Component } from "@package/net/minecraft/network/chat";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider, $SharedSuggestionProvider$TextCoordinates } from "@package/net/minecraft/commands";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $AccessorClientAdvancements } from "@package/vazkii/patchouli/mixin/client";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $EntityHitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $ServerDataExtension } from "@package/com/aizistral/nochatreports/common/core";
import { $UUID_, $ArrayList, $Map, $List, $Map_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Exception, $Throwable, $Enum, $Iterable, $Thread, $Record, $Runnable_ } from "@package/java/lang";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $GameRules, $ChunkPos, $ColorResolver_, $GameType, $GameType_, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable, $DebugScreenOverlay, $ChatComponent$State } from "@package/net/minecraft/client/gui/components";
import { $ClientboundGameProfilePacket_, $ClientboundHelloPacket, $ClientboundLoginCompressionPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ClientChunkManagerAccessor, $ClientChunkMapAccessor } from "@package/com/euphony/neo_language_reload/mixin";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetTitleTextPacket_, $ClientboundSetActionBarTextPacket_, $ClientboundTickingStatePacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundPlayerLookAtPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundLightUpdatePacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundPlayerCombatEndPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundBlockChangedAckPacket_, $ClientboundStopSoundPacket, $ClientboundRemoveEntitiesPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundSetCameraPacket, $ClientboundLoginPacket_, $ClientboundSetEquipmentPacket, $ClientboundSetEntityLinkPacket, $ClientboundPlayerPositionPacket, $ClientboundRespawnPacket_, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundRecipePacket, $ClientboundAwardStatsPacket_, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundContainerClosePacket, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetObjectivePacket, $ClientboundSetEntityDataPacket_, $ClientboundPlaceGhostRecipePacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundHorseScreenOpenPacket, $ClientboundCommandsPacket, $ClientboundLevelEventPacket, $ClientboundLevelParticlesPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundTabListPacket_, $ClientboundMerchantOffersPacket, $ClientboundSetScorePacket_, $ClientboundTeleportEntityPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetEntityMotionPacket, $ClientboundSetHealthPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundMoveVehiclePacket, $ClientboundPlayerAbilitiesPacket, $ClientboundBlockEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $ClientboundResetChatPacket, $ClientboundUpdateEnabledFeaturesPacket_, $ClientConfigurationPacketListener, $ClientboundFinishConfigurationPacket, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $AccessorClientPacketListener } from "@package/com/aizistral/nochatreports/common/mixins/client";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ClientWorldAccessor } from "@package/net/caffeinemc/mods/lithium/common/client";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(registryKey: $ResourceKey_<$Registry<never>>, networkPayload: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(registryAccess: $RegistryAccess, isMemoryConnection: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(userApiService: $UserApiService, uuid: $UUID_, gameDirectory: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener {
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        tick(): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $ClientPacketListenerKJS, $AccessorClientPacketListener, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler {
        getId(): $UUID;
        close(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        tick(): void;
        getDebugQueryHandler(): $DebugQueryHandler;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        sendChat(message: string): void;
        clearLevel(): void;
        sendCommand(message: string): void;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        scoreboard(): $Scoreboard;
        potionBrewing(): $PotionBrewing;
        getRecipeManager(): $RecipeManager;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        getOnlinePlayerIds(): $Collection<$UUID>;
        serverLinks(): $ServerLinks;
        searchTrees(): $SessionSearchTrees;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        sendUnsignedCommand(command: string): boolean;
        getLocalGameProfile(): $GameProfile;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        kjs$sessionData(): $KubeSessionData;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        handler$cdi000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$bca000$chat_heads$chatheads$captureSenderInfo(packet: $ClientboundPlayerChatPacket_, ci: $CallbackInfo, senderInfo: $LocalRef<any>): void;
        handler$dok000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        modify$bca000$chat_heads$chatheads$rememberSenderInfo(playerChatMessage: $PlayerChatMessage_, senderInfo: $LocalRef<any>): $PlayerChatMessage;
        handler$dfi000$ftbchunks$handleChunkBlocksUpdateFTBC(packet: $ClientboundSectionBlocksUpdatePacket, ci: $CallbackInfo): void;
        handler$dok000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        handler$dok000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$dok000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$dok000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$dok001$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$dok000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$dok000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handler$dfi000$ftbchunks$handleBlockUpdateFTBC(packet: $ClientboundBlockUpdatePacket, ci: $CallbackInfo): void;
        handler$dfi000$ftbchunks$handleLevelChunkFTBC(packet: $ClientboundLevelChunkWithLightPacket, ci: $CallbackInfo): void;
        handler$dok000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$dok000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$dok000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        catnip$getServerChunkRadius(): number;
        invokeParseCommand(command: string): $ParseResults<$SharedSuggestionProvider>;
        serverChunkRadius: number;
        signedMessageEncoder: $SignedMessageChain$Encoder;
        chatSession: $LocalChatSession;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get id(): $UUID;
        get level(): $ClientLevel;
        get debugQueryHandler(): $DebugQueryHandler;
        get advancements(): $ClientAdvancements;
        get serverData(): $ServerData;
        set keyPair(value: $ProfileKeyPair_);
        get recipeManager(): $RecipeManager;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get onlinePlayerIds(): $Collection<$UUID>;
        get localGameProfile(): $GameProfile;
        get suggestionsProvider(): $ClientSuggestionProvider;
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExtension {
        type(): $ServerData$Type;
        /**
         * Returns an NBTTagCompound with the server's name, IP and maybe acceptTextures.
         */
        write(): $CompoundTag;
        /**
         * Takes an NBTTagCompound with 'name' and 'ip' keys, returns a ServerData instance.
         */
        static read(nbtCompound: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(state: $ServerData$State_): void;
        copyFrom(serverData: $ServerData): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        preventsChatReports(): boolean;
        setPreventsChatReports(arg0: boolean): void;
        copyNameIconFrom(serverData: $ServerData): void;
        setIconBytes(iconBytes: number[] | null): void;
        static validateIcon(icon: number[] | null): number[];
        getIconBytes(): number[];
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(name: string, ip: string, type: $ServerData$Type_);
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList {
        remove(serverData: $ServerData): void;
        /**
         * Counts the number of ServerData instances in the list.
         */
        size(): number;
        /**
         * Gets the ServerData instance stored for the given index in the list.
         */
        get(index: number): $ServerData;
        get(ip: string): $ServerData;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        load(): void;
        replace(index: number, server: $ServerData): void;
        add(server: $ServerData, hidden: boolean): void;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        save(): void;
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
        unhide(ip: string): $ServerData;
        static saveSingleServer(serverData: $ServerData): void;
        constructor(minecraft: $Minecraft);
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage implements $ClientChunkMapAccessor {
        languagereload_getChunks(): $AtomicReferenceArray<$LevelChunk>;
        chunks: $AtomicReferenceArray<$LevelChunk>;
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        getLatency(): number;
        hasVerifiableChat(): boolean;
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        getSkin(): $PlayerSkin;
        getChatSession(): $RemoteChatSession;
        getGameMode(): $GameType;
        getTeam(): $PlayerTeam;
        getTabListDisplayName(): $Component;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(displayName: $Component_ | null): void;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get latency(): number;
        get profile(): $GameProfile;
        get skin(): $PlayerSkin;
        get chatSession(): $RemoteChatSession;
        get gameMode(): $GameType;
        get team(): $PlayerTeam;
        get messageValidator(): $SignedMessageValidator;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(packet: $ClientboundPongResponsePacket_): void;
        constructor(connection: $ClientPacketListener, delayTimer: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(userApiService: $UserApiService, user: $User, gameDirectory: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        register(key: $SessionSearchTrees$Key, reloader: $Runnable_): void;
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        recipes(): $SearchTree<$RecipeCollection>;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        rebuildAfterLanguageChange(): void;
        updateCreativeTooltips(registries: $HolderLookup$Provider, items: $List_<$ItemStack_>): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { url?: $URL, id?: $UUID_, hash?: string,  } | [url?: $URL, id?: $UUID_, hash?: string, ];
    export class $ClientAdvancements implements $AccessorClientAdvancements {
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setListener(listener: $ClientAdvancements$Listener | null): void;
        setSelectedTab(advancement: $AdvancementHolder_ | null, tellServer: boolean): void;
        handler$bhp000$patchouli$onSync(arg0: $ClientboundUpdateAdvancementsPacket, arg1: $CallbackInfo): void;
        getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        constructor(minecraft: $Minecraft, telemetryManager: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener | null);
        get progress(): $Map<$AdvancementHolder, $AdvancementProgress>;
    }
    export class $MultiPlayerGameMode {
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        /**
         * Syncs the current player item with the server
         */
        tick(): void;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
         */
        handleCreativeModeItemAdd(stack: $ItemStack_, slotId: number): void;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        handler$bjc000$inventoryprofilesnext$clickCreativeStack(arg0: $ItemStack_, arg1: number, arg2: $CallbackInfo): void;
        getPreviousPlayerMode(): $GameType;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        handlePickItem(index: number): void;
        getPlayerMode(): $GameType;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        destroyBlock(pos: $BlockPos_): boolean;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        handler$bje000$inventoryprofilesnext$postInternalOnSlotClickBegin(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$bje000$inventoryprofilesnext$internalOnSlotClickBegin(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        handler$bjb000$inventoryprofilesnext$clickSlot(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$bjb000$inventoryprofilesnext$clickSlotPre(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$bjc000$inventoryprofilesnext$pickItem(arg0: number, arg1: $CallbackInfo): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        getDestroyStage(): number;
        destroyDelay: number;
        connection: $ClientPacketListener;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get serverControlledInventory(): boolean;
        get previousPlayerMode(): $GameType;
        get destroying(): boolean;
        get playerMode(): $GameType;
        get alwaysFlying(): boolean;
        get destroyStage(): number;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(version: number, motd: string, players: string, capacity: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener {
        onDisconnect(details: $DisconnectionDetails_): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        isAcceptingMessages(): boolean;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        setMinigameName(minigameName: string | null): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(connection: $Connection, minecraft: $Minecraft, serverData: $ServerData | null, parent: $Screen | null, newWorld: boolean, worldLoadDuration: $Duration_ | null, updateStatus: $Consumer_<$Component>, cookies: $TransferState_ | null);
        get acceptingMessages(): boolean;
        set minigameName(value: string | null);
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(connection: $ClientPacketListener, debugScreenOverlay: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendTags(tags: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        appendContents(registryKey: $ResourceKey_<$Registry<never>>, registryEntries: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        collectGameRegistries(resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, isMemoryConnection: boolean): $RegistryAccess$Frozen;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ClientLevelKJS, $IClientLevel, $ClientWorldAccessor, $BiomeSeedProvider, $ChunkTrackerHolder, $IXaeroMinimapClientWorld {
        unload(chunk: $LevelChunk): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $ClientLevel$ClientLevelData;
        animateTick(posX: number, posY: number, posZ: number): void;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ClientChunkCache;
        handler$efj000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        addEntity(entity: $Entity): void;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        getSkyDarken(partialTick: number): number;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        tickNonPassenger(entity: $Entity): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        queueLightUpdate(task: $Runnable_): void;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block_ | null, blockPos: $BlockPos$MutableBlockPos): void;
        getEntityCount(): number;
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        getSkyFlashTime(): number;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        getStarBrightness(partialTick: number): number;
        getCloudColor(partialTick: number): $Vec3;
        sodium$getTracker(): $ChunkTracker;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        xaerolib_setData(arg0: $ClientLevelData): void;
        xaerolib_getData(): $ClientLevelData;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        effects(): $DimensionSpecialEffects;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        setServerSimulationDistance(sequence: number): void;
        getServerSimulationDistance(): number;
        getXaero_minimapData(): $MinimapClientWorldData;
        /**
         * Returns `true` if the current rain strength is greater than 0.2
         */
        isLightUpdateQueueEmpty(): boolean;
        entitiesForRendering(): $Iterable<$Entity>;
        lithium$getEntityManager(): $TransientEntitySectionManager<any>;
        sodium$getBiomeZoomSeed(): number;
        handleBlockChangedAck(sequence: number): void;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        self(): $ClientLevel;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        tickingBlockEntities: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(connection: $ClientPacketListener, clientLevelData: $ClientLevel$ClientLevelData, dimension: $ResourceKey_<$Level>, dimensionType: $Holder_<$DimensionType>, viewDistance: number, serverSimulationDistance: number, profiler: $Supplier_<$ProfilerFiller>, levelRenderer: $LevelRenderer, isDebug: boolean, biomeZoomSeed: number);
        get levelData(): $ClientLevel$ClientLevelData;
        get chunkSource(): $ClientChunkCache;
        set gameTime(value: number);
        get entityCount(): number;
        get skyFlashTime(): number;
        get lightUpdateQueueEmpty(): boolean;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        getClearColorScale(): number;
        /**
         * Get current world time
         */
        getGameTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        setDayTime(dayTime: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        setGameTime(dayTime: number): void;
        /**
         * Get current world time
         */
        getDayTime(): number;
        setDifficultyLocked(difficultyLocked: boolean): void;
        setRaining(difficultyLocked: boolean): void;
        getHorizonHeight(level: $LevelHeightAccessor): number;
        setDifficulty(difficulty: $Difficulty_): void;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get clearColorScale(): number;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get thundering(): boolean;
        get spawnPos(): $BlockPos;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        pingServer(serverData: $ServerData, serverListUpdater: $Runnable_, stateUpdater: $Runnable_): void;
        static formatPlayerCount(players: number, capacity: number): $Component;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $ClientChunkManagerAccessor {
        drop(chunkPos: $ChunkPos): void;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $LevelChunk;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        updateViewCenter(x: number, z: number): void;
        updateViewRadius(viewDistance: number): void;
        languagereload_getChunks(): $ClientChunkCache$Storage;
        lightEngine: $LevelLightEngine;
        storage: $ClientChunkCache$Storage;
        constructor(level: $ClientLevel, viewDistance: number);
    }
    export class $KnownPacksManager {
        trySelectingPacks(packs: $List_<$KnownPack_>): $List<$KnownPack>;
        createResourceManager(): $CloseableResourceManager;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { sendCondition?: $BooleanSupplier_, expirationTime?: number, packet?: $Packet<$ServerboundPacketListener>,  } | [sendCondition?: $BooleanSupplier_, expirationTime?: number, packet?: $Packet<$ServerboundPacketListener>, ];
    export class $CommonListenerCookie extends $Record {
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        chatState(): $ChatComponent$State;
        serverBrand(): string;
        serverLinks(): $ServerLinks;
        connectionType(): $ConnectionType;
        serverData(): $ServerData;
        customReportDetails(): $Map<string, string>;
        postDisconnectScreen(): $Screen;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        receivedRegistries(): $RegistryAccess$Frozen;
        localGameProfile(): $GameProfile;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, serverBrand?: string, connectionType?: $ConnectionType_,  } | [postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, serverBrand?: string, connectionType?: $ConnectionType_, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        getConnection(): $Connection;
        send(packet: $Packet<never>): void;
        handlePing(packet: $ClientboundPingPacket): void;
        serverBrand(): string;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        flow(): $PacketFlow;
        send(payload: $CustomPacketPayload_): void;
        disconnect(arg0: $Component_): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(crashReport: $CrashReport): void;
        hasChannel(arg0: $ResourceLocation_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        get connection(): $Connection;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getCustomTabSugggestions(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        getSelectedEntities(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        hasPermission(level: number): boolean;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get customTabSugggestions(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get allTeams(): $Collection<string>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
    }
    export class $ChunkBatchSizeCalculator {
        onBatchStart(): void;
        onBatchFinished(batchSize: number): void;
        getDesiredChunksPerTick(): number;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
