import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot, $LivingEntity, $Mob, $RelativeMovement_, $RelativeMovement, $Entity, $EquipmentSlot_, $EntityType, $ExperienceOrb } from "@package/net/minecraft/world/entity";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $NumberFormat } from "@package/net/minecraft/network/chat/numbers";
import { $RootCommandNode } from "@package/com/mojang/brigadier/tree";
import { $Bee } from "@package/net/minecraft/world/entity/animal";
import { $AdvancementHolder_, $AdvancementHolder, $AdvancementProgress } from "@package/net/minecraft/advancements";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $InteractionHand_, $Difficulty_, $BossEvent, $BossEvent$BossBarColor_, $TickRateManager, $BossEvent$BossBarOverlay_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $SoundEvent, $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $ChatFormatting } from "@package/net/minecraft";
import { $IServerGamePacketListenerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $ServerboundPacketListener, $ProtocolInfo$Unbound, $FriendlyByteBuf, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ClickType_, $RecipeBookType, $RecipeBookType_, $ClickType, $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $StructureStart } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ShortSet } from "@package/it/unimi/dsi/fastutil/shorts";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $ItemStack_, $ItemStack, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $SignedMessageBody$Packed_, $RemoteChatSession$Data, $MessageSignature$Packed_, $ChatType$Bound_, $MessageSignature_, $RemoteChatSession$Data_, $FilterMask, $LastSeenMessages$Update_, $Component_, $ChatType$Bound, $SignedMessageBody$Packed, $MessageSignature, $MessageSignature$Packed, $Component, $LastSeenMessages$Update } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $LevelChunkSection, $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Abilities } from "@package/net/minecraft/world/entity/player";
import { $CommandBuildContext, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Instant } from "@package/java/time";
import { $RemoteDebugSampleType_, $RemoteDebugSampleType } from "@package/net/minecraft/util/debugchart";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $Mirror_, $Block, $Rotation_, $Mirror, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $BlockHitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $Stat, $RecipeBookSettings, $Stat_ } from "@package/net/minecraft/stats";
import { $IWorldMapSMultiBlockChangePacket } from "@package/xaero/map/core";
import { $ObjectiveCriteria$RenderType } from "@package/net/minecraft/world/scores/criteria";
import { $GameEventListener, $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $Attribute, $AttributeModifier_, $AttributeModifier, $AttributeInstance } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $BitSet, $Optional, $Map, $EnumSet, $Map_, $Collection, $Set } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientCommonPacketListener, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $BiFunction_, $BiConsumer_, $Consumer } from "@package/java/util/function";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $GlobalPos, $Direction_, $NonNullList, $Direction, $Holder_, $BlockPos, $BlockPos_, $Vec3i, $Holder, $GlobalPos_, $RegistryAccess, $SectionPos } from "@package/net/minecraft/core";
import { $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $PacketType, $BundlePacket, $BundleDelimiterPacket, $Packet } from "@package/net/minecraft/network/protocol";
import { $MapId_, $MapDecoration_, $MapItemSavedData$MapPatch_, $MapItemSavedData$MapPatch, $MapDecoration, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Iterable_, $Exception, $Record } from "@package/java/lang";
import { $ChunkPos, $Level_, $GameType, $WorldGenLevel, $Level, $BlockGetter, $BaseCommandBlock, $Explosion$BlockInteraction_, $GameType_, $Explosion$BlockInteraction } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap, $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $Logger } from "@package/org/slf4j";
import { $ArgumentSignatures, $ArgumentSignatures_, $EntityAnchorArgument$Anchor_, $EntityAnchorArgument$Anchor } from "@package/net/minecraft/commands/arguments";
import { $Raid } from "@package/net/minecraft/world/entity/raid";
import { $ClientPongPacketListener, $ServerPingPacketListener } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapSMultiBlockChangePacket } from "@package/xaero/common/core";
import { $SynchedEntityData$DataValue_, $SynchedEntityData$DataValue } from "@package/net/minecraft/network/syncher";
import { $IMapDataPacketExtension } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DisplaySlot_, $PlayerTeam, $Objective, $DisplaySlot } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityType_, $CommandBlockEntity$Mode_, $BeehiveBlockEntity, $BlockEntityType, $StructureBlockEntity$UpdateType_, $BlockEntity, $JigsawBlockEntity$JointType_, $StructureBlockEntity$UpdateType, $JigsawBlockEntity$JointType, $CommandBlockEntity$Mode } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource, $DamageSource_, $DamageType, $CombatTracker } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/network/protocol/game" {
    export class $ClientboundSetBorderSizePacket implements $Packet<$ClientGamePacketListener> {
        getSize(): number;
        type(): $PacketType<$ClientboundSetBorderSizePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderSizePacket>;
        constructor(worldBorder: $WorldBorder);
        get size(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerPositionPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        /**
         * Returns a set of which fields are relative. Items in this set indicate that the value is a relative change applied to the player's position, rather than an exact value.
         */
        getRelativeArguments(): $Set<$RelativeMovement>;
        type(): $PacketType<$ClientboundPlayerPositionPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getYRot(): number;
        getXRot(): number;
        getX(): number;
        getY(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerPositionPacket>;
        constructor(x: number, arg1: number, y: number, arg3: number, z: number, arg5: $Set_<$RelativeMovement_>, yRot: number);
        get z(): number;
        get relativeArguments(): $Set<$RelativeMovement>;
        get id(): number;
        get YRot(): number;
        get XRot(): number;
        get x(): number;
        get y(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundCommandSuggestionPacket implements $Packet<$ServerGamePacketListener> {
        getCommand(): string;
        type(): $PacketType<$ServerboundCommandSuggestionPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCommandSuggestionPacket>;
        constructor(id: number, command: string);
        get command(): string;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSignUpdatePacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isFrontText(): boolean;
        type(): $PacketType<$ServerboundSignUpdatePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getLines(): string[];
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSignUpdatePacket>;
        constructor(pos: $BlockPos_, isFrontText: boolean, line1: string, line2: string, line3: string, line4: string);
        get pos(): $BlockPos;
        get frontText(): boolean;
        get lines(): string[];
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket implements $Packet<$ClientGamePacketListener> {
        static createRemovePacket(id: $UUID_): $ClientboundBossEventPacket;
        static createUpdatePropertiesPacket(event: $BossEvent): $ClientboundBossEventPacket;
        type(): $PacketType<$ClientboundBossEventPacket>;
        dispatch(handler: $ClientboundBossEventPacket$Handler): void;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        static createUpdateNamePacket(event: $BossEvent): $ClientboundBossEventPacket;
        static createUpdateStylePacket(event: $BossEvent): $ClientboundBossEventPacket;
        static createUpdateProgressPacket(event: $BossEvent): $ClientboundBossEventPacket;
        static createAddPacket(event: $BossEvent): $ClientboundBossEventPacket;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBossEventPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRotateHeadPacket implements $Packet<$ClientGamePacketListener> {
        getYHeadRot(): number;
        type(): $PacketType<$ClientboundRotateHeadPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRotateHeadPacket>;
        constructor(entity: $Entity, yHeadRot: number);
        get YHeadRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundInitializeBorderPacket implements $Packet<$ClientGamePacketListener> {
        getNewAbsoluteMaxSize(): number;
        getNewCenterZ(): number;
        getLerpTime(): number;
        getNewCenterX(): number;
        getWarningTime(): number;
        getWarningBlocks(): number;
        type(): $PacketType<$ClientboundInitializeBorderPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getOldSize(): number;
        getNewSize(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundInitializeBorderPacket>;
        constructor(worldBorder: $WorldBorder);
        get newAbsoluteMaxSize(): number;
        get newCenterZ(): number;
        get lerpTime(): number;
        get newCenterX(): number;
        get warningTime(): number;
        get warningBlocks(): number;
        get oldSize(): number;
        get newSize(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunkBatchFinishedPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChunkBatchFinishedPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        batchSize(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChunkBatchFinishedPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundChunkBatchFinishedPacket}.
     */
    export type $ClientboundChunkBatchFinishedPacket_ = { batchSize?: number,  } | [batchSize?: number, ];
    export class $ServerboundSetStructureBlockPacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        getUpdateType(): $StructureBlockEntity$UpdateType;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isShowBoundingBox(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isShowAir(): boolean;
        getSize(): $Vec3i;
        getName(): string;
        type(): $PacketType<$ServerboundSetStructureBlockPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getOffset(): $BlockPos;
        getData(): string;
        getSeed(): number;
        getRotation(): $Rotation;
        getMirror(): $Mirror;
        getMode(): $StructureMode;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isIgnoreEntities(): boolean;
        getIntegrity(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetStructureBlockPacket>;
        constructor(pos: $BlockPos_, updateType: $StructureBlockEntity$UpdateType_, mode: $StructureMode_, name: string, offset: $BlockPos_, size: $Vec3i, mirror: $Mirror_, rotation: $Rotation_, data: string, ignoreEntities: boolean, showAir: boolean, showBoundingBox: boolean, integrity: number, seed: number);
        get pos(): $BlockPos;
        get updateType(): $StructureBlockEntity$UpdateType;
        get showBoundingBox(): boolean;
        get showAir(): boolean;
        get size(): $Vec3i;
        get name(): string;
        get offset(): $BlockPos;
        get data(): string;
        get seed(): number;
        get rotation(): $Rotation;
        get mirror(): $Mirror;
        get mode(): $StructureMode;
        get ignoreEntities(): boolean;
        get integrity(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBlockUpdatePacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        type(): $PacketType<$ClientboundBlockUpdatePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getBlockState(): $BlockState;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockUpdatePacket>;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(blockGetter: $BlockGetter, pos: $BlockPos_);
        get pos(): $BlockPos;
        get blockState(): $BlockState;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetObjectivePacket implements $Packet<$ClientGamePacketListener> {
        getRenderType(): $ObjectiveCriteria$RenderType;
        getObjectiveName(): string;
        type(): $PacketType<$ClientboundSetObjectivePacket>;
        getMethod(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getDisplayName(): $Component;
        getNumberFormat(): ($NumberFormat) | undefined;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static METHOD_ADD: number;
        static METHOD_REMOVE: number;
        static METHOD_CHANGE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetObjectivePacket>;
        constructor(objective: $Objective, method: number);
        get renderType(): $ObjectiveCriteria$RenderType;
        get objectiveName(): string;
        get method(): number;
        get displayName(): $Component;
        get numberFormat(): ($NumberFormat) | undefined;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundJigsawGeneratePacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        keepJigsaws(): boolean;
        type(): $PacketType<$ServerboundJigsawGeneratePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        levels(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundJigsawGeneratePacket>;
        constructor(pos: $BlockPos_, levels: number, keepJigsaws: boolean);
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundMovePlayerPacket implements $Packet<$ServerGamePacketListener> {
        getZ(defaultValue: number): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        hasRotation(): boolean;
        type(): $PacketType<$ServerboundMovePlayerPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        hasPosition(): boolean;
        getYRot(defaultValue: number): number;
        getXRot(defaultValue: number): number;
        getX(defaultValue: number): number;
        getY(defaultValue: number): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isOnGround(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        get onGround(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Action$Writer {
    }
    export interface $ClientboundPlayerInfoUpdatePacket$Action$Writer {
        write(buffer: $RegistryFriendlyByteBuf, entry: $ClientboundPlayerInfoUpdatePacket$Entry_): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action$Writer}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action$Writer_ = ((arg0: $RegistryFriendlyByteBuf, arg1: $ClientboundPlayerInfoUpdatePacket$Entry) => void);
    export class $ClientboundLightUpdatePacketData {
        getSkyYMask(): $BitSet;
        getBlockUpdates(): $List<number[]>;
        getBlockYMask(): $BitSet;
        getEmptySkyYMask(): $BitSet;
        getSkyUpdates(): $List<number[]>;
        getEmptyBlockYMask(): $BitSet;
        write(buffer: $FriendlyByteBuf): void;
        constructor(buffer: $FriendlyByteBuf, x: number, z: number);
        constructor(chunkPos: $ChunkPos, lightEngine: $LevelLightEngine, skyLight: $BitSet | null, blockLight: $BitSet | null);
        get skyYMask(): $BitSet;
        get blockUpdates(): $List<number[]>;
        get blockYMask(): $BitSet;
        get emptySkyYMask(): $BitSet;
        get skyUpdates(): $List<number[]>;
        get emptyBlockYMask(): $BitSet;
    }
    export class $ClientboundSetDisplayObjectivePacket implements $Packet<$ClientGamePacketListener> {
        getObjectiveName(): string;
        getSlot(): $DisplaySlot;
        type(): $PacketType<$ClientboundSetDisplayObjectivePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetDisplayObjectivePacket>;
        constructor(slot: $DisplaySlot_, objective: $Objective | null);
        get objectiveName(): string;
        get slot(): $DisplaySlot;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundClientCommandPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundClientCommandPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getAction(): $ServerboundClientCommandPacket$Action;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundClientCommandPacket>;
        constructor(action: $ServerboundClientCommandPacket$Action_);
        get action(): $ServerboundClientCommandPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTitleTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetTitleTextPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        text(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetTitleTextPacket>;
        constructor(text: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetTitleTextPacket}.
     */
    export type $ClientboundSetTitleTextPacket_ = { text?: $Component_,  } | [text?: $Component_, ];
    export class $ServerboundChatAckPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatAckPacket>;
        offset(): number;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatAckPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatAckPacket}.
     */
    export type $ServerboundChatAckPacket_ = { offset?: number,  } | [offset?: number, ];
    export class $ClientboundOpenBookPacket implements $Packet<$ClientGamePacketListener> {
        getHand(): $InteractionHand;
        type(): $PacketType<$ClientboundOpenBookPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundOpenBookPacket>;
        constructor(hand: $InteractionHand_);
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundGameEventPacket implements $Packet<$ClientGamePacketListener> {
        getParam(): number;
        type(): $PacketType<$ClientboundGameEventPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEvent(): $ClientboundGameEventPacket$Type;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static DEMO_PARAM_HINT_4: number;
        static DEMO_PARAM_HINT_3: number;
        static STOP_RAINING: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_HINT_2: number;
        static START_RAINING: $ClientboundGameEventPacket$Type;
        static LIMITED_CRAFTING: $ClientboundGameEventPacket$Type;
        static PUFFER_FISH_STING: $ClientboundGameEventPacket$Type;
        static CHANGE_GAME_MODE: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_HINT_1: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundGameEventPacket>;
        static THUNDER_LEVEL_CHANGE: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_INTRO: number;
        static LEVEL_CHUNKS_LOAD_START: $ClientboundGameEventPacket$Type;
        static NO_RESPAWN_BLOCK_AVAILABLE: $ClientboundGameEventPacket$Type;
        static DEMO_EVENT: $ClientboundGameEventPacket$Type;
        static WIN_GAME: $ClientboundGameEventPacket$Type;
        static IMMEDIATE_RESPAWN: $ClientboundGameEventPacket$Type;
        static ARROW_HIT_PLAYER: $ClientboundGameEventPacket$Type;
        static GUARDIAN_ELDER_EFFECT: $ClientboundGameEventPacket$Type;
        static RAIN_LEVEL_CHANGE: $ClientboundGameEventPacket$Type;
        constructor(event: $ClientboundGameEventPacket$Type, param: number);
        get param(): number;
        get event(): $ClientboundGameEventPacket$Type;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundUseItemOnPacket implements $Packet<$ServerGamePacketListener> {
        getHand(): $InteractionHand;
        getHitResult(): $BlockHitResult;
        type(): $PacketType<$ServerboundUseItemOnPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getSequence(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundUseItemOnPacket>;
        constructor(hand: $InteractionHand_, blockHit: $BlockHitResult, sequence: number);
        get hand(): $InteractionHand;
        get hitResult(): $BlockHitResult;
        get sequence(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetCameraPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetCameraPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetCameraPacket>;
        constructor(cameraEntity: $Entity);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$AddOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSetChunkCacheCenterPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        type(): $PacketType<$ClientboundSetChunkCacheCenterPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getX(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetChunkCacheCenterPacket>;
        constructor(x: number, z: number);
        get z(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$Action {
    }
    export interface $ServerboundInteractPacket$Action {
    }
    export class $ServerboundChatCommandSignedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        salt(): number;
        lastSeenMessages(): $LastSeenMessages$Update;
        argumentSignatures(): $ArgumentSignatures;
        type(): $PacketType<$ServerboundChatCommandSignedPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        command(): string;
        timeStamp(): $Instant;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatCommandSignedPacket>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $ArgumentSignatures_, arg4: $LastSeenMessages$Update_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatCommandSignedPacket}.
     */
    export type $ServerboundChatCommandSignedPacket_ = { argumentSignatures?: $ArgumentSignatures_, lastSeenMessages?: $LastSeenMessages$Update_, timeStamp?: $Instant, command?: string, salt?: number,  } | [argumentSignatures?: $ArgumentSignatures_, lastSeenMessages?: $LastSeenMessages$Update_, timeStamp?: $Instant, command?: string, salt?: number, ];
    export class $ClientboundCommandsPacket$NodeStub {
    }
    export interface $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundUpdateAttributesPacket$AttributeSnapshot extends $Record {
        modifiers(): $Collection<$AttributeModifier>;
        base(): number;
        attribute(): $Holder<$Attribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        static MODIFIER_STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier>;
        constructor(arg0: $Holder_<$Attribute>, arg1: number, arg2: $Collection_<$AttributeModifier_>);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundUpdateAttributesPacket$AttributeSnapshot}.
     */
    export type $ClientboundUpdateAttributesPacket$AttributeSnapshot_ = { base?: number, attribute?: $Holder_<$Attribute>, modifiers?: $Collection_<$AttributeModifier_>,  } | [base?: number, attribute?: $Holder_<$Attribute>, modifiers?: $Collection_<$AttributeModifier_>, ];
    export class $ClientboundProjectilePowerPacket implements $Packet<$ClientGamePacketListener> {
        getAccelerationPower(): number;
        type(): $PacketType<$ClientboundProjectilePowerPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundProjectilePowerPacket>;
        constructor(id: number, accelerationPower: number);
        get accelerationPower(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSwingPacket implements $Packet<$ServerGamePacketListener> {
        getHand(): $InteractionHand;
        type(): $PacketType<$ServerboundSwingPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSwingPacket>;
        constructor(hand: $InteractionHand_);
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenScreenPacket implements $Packet<$ClientGamePacketListener> {
        getContainerId(): number;
        type(): $PacketType<$ClientboundOpenScreenPacket>;
        getType(): $MenuType<never>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getTitle(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundOpenScreenPacket>;
        constructor(containerId: number, menuType: $MenuType_<never>, title: $Component_);
        get containerId(): number;
        get title(): $Component;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSelectAdvancementsTabPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSelectAdvancementsTabPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getTab(): $ResourceLocation;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSelectAdvancementsTabPacket>;
        constructor(tab: $ResourceLocation_ | null);
        get tab(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundResetScorePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        objectiveName(): string;
        type(): $PacketType<$ClientboundResetScorePacket>;
        owner(): string;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundResetScorePacket>;
        constructor(arg0: string, arg1: string | null);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundResetScorePacket}.
     */
    export type $ClientboundResetScorePacket_ = { objectiveName?: string, owner?: string,  } | [objectiveName?: string, owner?: string, ];
    export class $ClientboundMapItemDataPacket extends $Record implements $Packet<$ClientGamePacketListener>, $IMapDataPacketExtension {
        moonlight$getDirtyCustomData(): $Optional<any>;
        locked(): boolean;
        decorations(): ($List<$MapDecoration>) | undefined;
        mapId(): $MapId;
        moonlight$getCustomDecorations(): $Optional<any>;
        moonlight$setDirtyCustomData(arg0: $Optional<any>): void;
        moonlight$setCustomDecorations(arg0: $Optional<any>): void;
        moonlight$getMapCenterZ(): number;
        moonlight$setDimension(arg0: $ResourceLocation_): void;
        moonlight$setMapCenter(arg0: number, arg1: number): void;
        moonlight$getDimension(): $ResourceLocation;
        moonlight$getMapCenterX(): number;
        type(): $PacketType<$ClientboundMapItemDataPacket>;
        scale(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Sets new MapData from the packet to given MapData param
         */
        applyToMap(mapData: $MapItemSavedData): void;
        colorPatch(): ($MapItemSavedData$MapPatch) | undefined;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundMapItemDataPacket>;
        constructor(arg0: $MapId_, arg1: number, arg2: boolean, arg3: ($List_<$MapDecoration_>) | undefined, arg4: ($MapItemSavedData$MapPatch_) | undefined);
        constructor(mapId: $MapId_, scale: number, locked: boolean, decorations: $Collection_<$MapDecoration_> | null, colorPatch: $MapItemSavedData$MapPatch_ | null);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundMapItemDataPacket}.
     */
    export type $ClientboundMapItemDataPacket_ = { decorations?: ($List_<$MapDecoration_>) | undefined, locked?: boolean, mapId?: $MapId_, scale?: number, colorPatch?: ($MapItemSavedData$MapPatch_) | undefined,  } | [decorations?: ($List_<$MapDecoration_>) | undefined, locked?: boolean, mapId?: $MapId_, scale?: number, colorPatch?: ($MapItemSavedData$MapPatch_) | undefined, ];
    export class $VecDeltaCodec {
        encodeX(value: $Vec3_): number;
        encodeY(value: $Vec3_): number;
        encodeZ(value: $Vec3_): number;
        decode(x: number, arg1: number, y: number): $Vec3;
        delta(value: $Vec3_): $Vec3;
        getBase(): $Vec3;
        setBase(base: $Vec3_): void;
        constructor();
    }
    export class $ServerboundPlayerCommandPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerCommandPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getData(): number;
        getAction(): $ServerboundPlayerCommandPacket$Action;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerCommandPacket>;
        constructor(entity: $Entity, action: $ServerboundPlayerCommandPacket$Action_, data: number);
        constructor(entity: $Entity, action: $ServerboundPlayerCommandPacket$Action_);
        get id(): number;
        get data(): number;
        get action(): $ServerboundPlayerCommandPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundStartConfigurationPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundStartConfigurationPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ClientboundStartConfigurationPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundStartConfigurationPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundForgetLevelChunkPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundForgetLevelChunkPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        pos(): $ChunkPos;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundForgetLevelChunkPacket>;
        constructor(arg0: $ChunkPos);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundForgetLevelChunkPacket}.
     */
    export type $ClientboundForgetLevelChunkPacket_ = { pos?: $ChunkPos,  } | [pos?: $ChunkPos, ];
    export class $ClientboundSetBorderWarningDistancePacket implements $Packet<$ClientGamePacketListener> {
        getWarningBlocks(): number;
        type(): $PacketType<$ClientboundSetBorderWarningDistancePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderWarningDistancePacket>;
        constructor(worldBorder: $WorldBorder);
        get warningBlocks(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTickingStatePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        tickRate(): number;
        type(): $PacketType<$ClientboundTickingStatePacket>;
        static from(tickRateManager: $TickRateManager): $ClientboundTickingStatePacket;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isFrozen(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTickingStatePacket>;
        constructor(arg0: number, arg1: boolean);
        get frozen(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundTickingStatePacket}.
     */
    export type $ClientboundTickingStatePacket_ = { tickRate?: number, isFrozen?: boolean,  } | [tickRate?: number, isFrozen?: boolean, ];
    export class $ClientboundSetCarriedItemPacket implements $Packet<$ClientGamePacketListener> {
        getSlot(): number;
        type(): $PacketType<$ClientboundSetCarriedItemPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetCarriedItemPacket>;
        constructor(slot: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunksBiomesPacket$ChunkBiomeData extends $Record {
        getReadBuffer(): $FriendlyByteBuf;
        static extractChunkData(buffer: $FriendlyByteBuf, chunk: $LevelChunk): void;
        buffer(): number[];
        write(buffer: $FriendlyByteBuf): void;
        pos(): $ChunkPos;
        constructor(chunk: $LevelChunk);
        constructor(arg0: $ChunkPos, arg1: number[]);
        constructor(buffer: $FriendlyByteBuf);
        get readBuffer(): $FriendlyByteBuf;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundChunksBiomesPacket$ChunkBiomeData}.
     */
    export type $ClientboundChunksBiomesPacket$ChunkBiomeData_ = { buffer?: number[], pos?: $ChunkPos,  } | [buffer?: number[], pos?: $ChunkPos, ];
    export class $ClientboundPlayerInfoRemovePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerInfoRemovePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        profileIds(): $List<$UUID>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerInfoRemovePacket>;
        constructor(arg0: $List_<$UUID_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoRemovePacket}.
     */
    export type $ClientboundPlayerInfoRemovePacket_ = { profileIds?: $List_<$UUID_>,  } | [profileIds?: $List_<$UUID_>, ];
    export class $ClientboundSetActionBarTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetActionBarTextPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        text(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetActionBarTextPacket>;
        constructor(text: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetActionBarTextPacket}.
     */
    export type $ClientboundSetActionBarTextPacket_ = { text?: $Component_,  } | [text?: $Component_, ];
    export class $GameProtocols {
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientGamePacketListener, $RegistryFriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerGamePacketListener, $RegistryFriendlyByteBuf>;
        constructor();
    }
    export class $ServerboundRenameItemPacket implements $Packet<$ServerGamePacketListener> {
        getName(): string;
        type(): $PacketType<$ServerboundRenameItemPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRenameItemPacket>;
        constructor(name: string);
        get name(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
    }
    export interface $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
        accept(pos: $BlockPos_, type: $BlockEntityType_<never>, nbt: $CompoundTag_ | null): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundLevelChunkPacketData$BlockEntityTagOutput}.
     */
    export type $ClientboundLevelChunkPacketData$BlockEntityTagOutput_ = ((arg0: $BlockPos, arg1: $BlockEntityType<never>, arg2: $CompoundTag) => void);
    export class $ClientboundSetHealthPacket implements $Packet<$ClientGamePacketListener> {
        getFood(): number;
        getSaturation(): number;
        type(): $PacketType<$ClientboundSetHealthPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getHealth(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetHealthPacket>;
        constructor(health: number, food: number, saturation: number);
        get food(): number;
        get saturation(): number;
        get health(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMerchantOffersPacket implements $Packet<$ClientGamePacketListener> {
        getOffers(): $MerchantOffers;
        canRestock(): boolean;
        showProgress(): boolean;
        getVillagerLevel(): number;
        getContainerId(): number;
        type(): $PacketType<$ClientboundMerchantOffersPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getVillagerXp(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundMerchantOffersPacket>;
        constructor(containerId: number, offers: $MerchantOffers, villagerLevel: number, villagerXp: number, showProgress: boolean, canRestock: boolean);
        get offers(): $MerchantOffers;
        get villagerLevel(): number;
        get containerId(): number;
        get villagerXp(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkPacketData {
        getBlockEntitiesTagsConsumer(chunkX: number, chunkZ: number): $Consumer<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>;
        getReadBuffer(): $FriendlyByteBuf;
        getHeightmaps(): $CompoundTag;
        static extractChunkData(buffer: $FriendlyByteBuf, chunk: $LevelChunk): void;
        write(buffer: $RegistryFriendlyByteBuf): void;
        constructor(buffer: $RegistryFriendlyByteBuf, x: number, z: number);
        constructor(levelChunk: $LevelChunk);
        get readBuffer(): $FriendlyByteBuf;
        get heightmaps(): $CompoundTag;
    }
    export class $ClientboundSetPlayerTeamPacket$Parameters {
        getNametagVisibility(): string;
        getPlayerSuffix(): $Component;
        getPlayerPrefix(): $Component;
        getCollisionRule(): string;
        write(buffer: $RegistryFriendlyByteBuf): void;
        getDisplayName(): $Component;
        getOptions(): number;
        getColor(): $ChatFormatting;
        constructor(team: $PlayerTeam);
        constructor(buffer: $RegistryFriendlyByteBuf);
        get nametagVisibility(): string;
        get playerSuffix(): $Component;
        get playerPrefix(): $Component;
        get collisionRule(): string;
        get displayName(): $Component;
        get options(): number;
        get color(): $ChatFormatting;
    }
    /**
     * PacketListener for the server side of the PLAY protocol.
     */
    export class $ServerGamePacketListener {
    }
    export interface $ServerGamePacketListener extends $ServerPingPacketListener, $ServerCommonPacketListener, $IServerGamePacketListenerExtension {
        /**
         * Processes the client status updates: respawn attempt from player, opening statistics or achievements, or acquiring 'open inventory' achievement
         */
        handleClientCommand(packet: $ServerboundClientCommandPacket): void;
        /**
         * Updates which quickbar slot is selected
         */
        handleSetCarriedItem(packet: $ServerboundSetCarriedItemPacket): void;
        handleChangeDifficulty(packet: $ServerboundChangeDifficultyPacket): void;
        /**
         * Processes the client closing windows (container)
         */
        handleContainerClose(packet: $ServerboundContainerClosePacket): void;
        /**
         * Processes a player starting/stopping flying
         */
        handlePlayerAbilities(packet: $ServerboundPlayerAbilitiesPacket): void;
        /**
         * Processes clients perspective on player positioning and/or orientation
         */
        handleMovePlayer(packet: $ServerboundMovePlayerPacket): void;
        handleAnimate(packet: $ServerboundSwingPacket): void;
        handleMoveVehicle(packet: $ServerboundMoveVehiclePacket): void;
        handleConfigurationAcknowledged(packet: $ServerboundConfigurationAcknowledgedPacket): void;
        handleDebugSampleSubscription(packet: $ServerboundDebugSampleSubscriptionPacket_): void;
        handleRecipeBookChangeSettingsPacket(packet: $ServerboundRecipeBookChangeSettingsPacket): void;
        handleBlockEntityTagQuery(packet: $ServerboundBlockEntityTagQueryPacket): void;
        handleSeenAdvancements(packet: $ServerboundSeenAdvancementsPacket): void;
        handleSetCommandBlock(packet: $ServerboundSetCommandBlockPacket): void;
        handleEntityTagQuery(packet: $ServerboundEntityTagQueryPacket): void;
        handleSetCommandMinecart(packet: $ServerboundSetCommandMinecartPacket): void;
        handleSetBeaconPacket(packet: $ServerboundSetBeaconPacket_): void;
        handleSetJigsawBlock(packet: $ServerboundSetJigsawBlockPacket): void;
        handleAcceptTeleportPacket(packet: $ServerboundAcceptTeleportationPacket): void;
        handleSignedChatCommand(packet: $ServerboundChatCommandSignedPacket_): void;
        handleJigsawGenerate(packet: $ServerboundJigsawGeneratePacket): void;
        handleSetStructureBlock(packet: $ServerboundSetStructureBlockPacket): void;
        handleRenameItem(packet: $ServerboundRenameItemPacket): void;
        handleEditBook(packet: $ServerboundEditBookPacket_): void;
        /**
         * Processes the player initiating/stopping digging on a particular spot, as well as a player dropping items
         */
        handlePlayerAction(packet: $ServerboundPlayerActionPacket): void;
        handleUseItemOn(packet: $ServerboundUseItemOnPacket): void;
        handleChatCommand(packet: $ServerboundChatCommandPacket_): void;
        handlePaddleBoat(packet: $ServerboundPaddleBoatPacket): void;
        handleSelectTrade(packet: $ServerboundSelectTradePacket): void;
        /**
         * Processes player movement input. Includes walking, strafing, jumping, and sneaking. Excludes riding and toggling flying/sprinting.
         */
        handlePlayerInput(packet: $ServerboundPlayerInputPacket): void;
        /**
         * Called when a client is using an item while not pointing at a block, but simply using an item
         */
        handleUseItem(packet: $ServerboundUseItemPacket): void;
        /**
         * Process chat messages (broadcast back to clients) and commands (executes)
         */
        handleChat(packet: $ServerboundChatPacket_): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCustomCommandSuggestions(packet: $ServerboundCommandSuggestionPacket): void;
        handleRecipeBookSeenRecipePacket(packet: $ServerboundRecipeBookSeenRecipePacket): void;
        handleTeleportToEntityPacket(packet: $ServerboundTeleportToEntityPacket): void;
        handleContainerSlotStateChanged(packet: $ServerboundContainerSlotStateChangedPacket_): void;
        handleChatAck(packet: $ServerboundChatAckPacket_): void;
        /**
         * Processes left and right clicks on entities
         */
        handleInteract(packet: $ServerboundInteractPacket): void;
        handleSignUpdate(packet: $ServerboundSignUpdatePacket): void;
        /**
         * Enchants the item identified by the packet given some convoluted conditions (matching window, which should/shouldn't be in use?)
         */
        handleContainerButtonClick(packet: $ServerboundContainerButtonClickPacket_): void;
        /**
         * Processes a range of action-types: sneaking, sprinting, waking from sleep, opening the inventory or setting jump height of the horse the player is riding
         */
        handlePlayerCommand(packet: $ServerboundPlayerCommandPacket): void;
        /**
         * Update the server with an ItemStack in a slot.
         */
        handleSetCreativeModeSlot(packet: $ServerboundSetCreativeModeSlotPacket_): void;
        handleChunkBatchReceived(packet: $ServerboundChunkBatchReceivedPacket_): void;
        /**
         * Executes a container/inventory slot manipulation as indicated by the packet. Sends the serverside result if they didn't match the indicated result and prevents further manipulation by the player until he confirms that it has the same open container/inventory
         */
        handleContainerClick(packet: $ServerboundContainerClickPacket): void;
        handleChatSessionUpdate(packet: $ServerboundChatSessionUpdatePacket_): void;
        handleLockDifficulty(packet: $ServerboundLockDifficultyPacket): void;
        protocol(): $ConnectionProtocol;
        handlePlaceRecipe(packet: $ServerboundPlaceRecipePacket): void;
        handlePickItem(packet: $ServerboundPickItemPacket): void;
    }
    export class $ServerboundInteractPacket$Handler {
    }
    export interface $ServerboundInteractPacket$Handler {
        onAttack(): void;
        onInteraction(hand: $InteractionHand_, interactionLocation: $Vec3_): void;
        onInteraction(hand: $InteractionHand_): void;
    }
    export class $ServerboundMovePlayerPacket$StatusOnly extends $ServerboundMovePlayerPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$StatusOnly>;
        constructor(onGround: boolean);
    }
    export class $ServerboundMovePlayerPacket$PosRot extends $ServerboundMovePlayerPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$PosRot>;
        constructor(x: number, arg1: number, y: number, arg3: number, z: number, arg5: boolean);
    }
    export class $ServerboundClientCommandPacket$Action extends $Enum<$ServerboundClientCommandPacket$Action> {
        static values(): $ServerboundClientCommandPacket$Action[];
        static valueOf(arg0: string): $ServerboundClientCommandPacket$Action;
        static REQUEST_STATS: $ServerboundClientCommandPacket$Action;
        static PERFORM_RESPAWN: $ServerboundClientCommandPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundClientCommandPacket$Action}.
     */
    export type $ServerboundClientCommandPacket$Action_ = "perform_respawn" | "request_stats";
    export class $ServerboundSetCommandBlockPacket implements $Packet<$ServerGamePacketListener> {
        getCommand(): string;
        getPos(): $BlockPos;
        isTrackOutput(): boolean;
        type(): $PacketType<$ServerboundSetCommandBlockPacket>;
        isAutomatic(): boolean;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getMode(): $CommandBlockEntity$Mode;
        isConditional(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCommandBlockPacket>;
        constructor(pos: $BlockPos_, command: string, mode: $CommandBlockEntity$Mode_, trackOutput: boolean, conditional: boolean, automatic: boolean);
        get command(): string;
        get pos(): $BlockPos;
        get trackOutput(): boolean;
        get automatic(): boolean;
        get mode(): $CommandBlockEntity$Mode;
        get conditional(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlaceRecipePacket implements $Packet<$ServerGamePacketListener> {
        isShiftDown(): boolean;
        getRecipe(): $ResourceLocation;
        getContainerId(): number;
        type(): $PacketType<$ServerboundPlaceRecipePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlaceRecipePacket>;
        constructor(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean);
        get shiftDown(): boolean;
        get recipe(): $ResourceLocation;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundHurtAnimationPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundHurtAnimationPacket>;
        id(): number;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        yaw(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHurtAnimationPacket>;
        constructor(arg0: number, arg1: number);
        constructor(entity: $LivingEntity);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundHurtAnimationPacket}.
     */
    export type $ClientboundHurtAnimationPacket_ = { yaw?: number, id?: number,  } | [yaw?: number, id?: number, ];
    export class $ServerboundSetCreativeModeSlotPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        slotNum(): number;
        type(): $PacketType<$ServerboundSetCreativeModeSlotPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        itemStack(): $ItemStack;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundSetCreativeModeSlotPacket>;
        constructor(slotNum: number, itemStack: $ItemStack_);
        constructor(arg0: number, arg1: $ItemStack_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSetCreativeModeSlotPacket}.
     */
    export type $ServerboundSetCreativeModeSlotPacket_ = { itemStack?: $ItemStack_, slotNum?: number,  } | [itemStack?: $ItemStack_, slotNum?: number, ];
    export class $ClientboundUpdateMobEffectPacket implements $Packet<$ClientGamePacketListener> {
        getEffectDurationTicks(): number;
        effectShowsIcon(): boolean;
        shouldBlend(): boolean;
        isEffectAmbient(): boolean;
        isEffectVisible(): boolean;
        getEffectAmplifier(): number;
        getEntityId(): number;
        type(): $PacketType<$ClientboundUpdateMobEffectPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEffect(): $Holder<$MobEffect>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateMobEffectPacket>;
        constructor(entityId: number, effect: $MobEffectInstance, blend: boolean);
        get effectDurationTicks(): number;
        get effectAmbient(): boolean;
        get effectVisible(): boolean;
        get effectAmplifier(): number;
        get entityId(): number;
        get effect(): $Holder<$MobEffect>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$ActionType extends $Enum<$ServerboundInteractPacket$ActionType> {
    }
    /**
     * Values that may be interpreted as {@link $ServerboundInteractPacket$ActionType}.
     */
    export type $ServerboundInteractPacket$ActionType_ = "interact" | "attack" | "interact_at";
    export class $ClientboundBossEventPacket$OperationType extends $Enum<$ClientboundBossEventPacket$OperationType> {
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBossEventPacket$OperationType}.
     */
    export type $ClientboundBossEventPacket$OperationType_ = "add" | "remove" | "update_progress" | "update_name" | "update_style" | "update_properties";
    export class $ClientboundHorseScreenOpenPacket implements $Packet<$ClientGamePacketListener> {
        getContainerId(): number;
        getEntityId(): number;
        type(): $PacketType<$ClientboundHorseScreenOpenPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getInventoryColumns(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHorseScreenOpenPacket>;
        constructor(containerId: number, size: number, entityId: number);
        get containerId(): number;
        get entityId(): number;
        get inventoryColumns(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetCommandMinecartPacket implements $Packet<$ServerGamePacketListener> {
        getCommand(): string;
        isTrackOutput(): boolean;
        type(): $PacketType<$ServerboundSetCommandMinecartPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getCommandBlock(level: $Level_): $BaseCommandBlock;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCommandMinecartPacket>;
        constructor(entity: number, command: string, trackOutput: boolean);
        get command(): string;
        get trackOutput(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerAbilitiesPacket implements $Packet<$ClientGamePacketListener> {
        getWalkingSpeed(): number;
        isInvulnerable(): boolean;
        getFlyingSpeed(): number;
        canInstabuild(): boolean;
        type(): $PacketType<$ClientboundPlayerAbilitiesPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        canFly(): boolean;
        isFlying(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        flyingSpeed: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerAbilitiesPacket>;
        constructor(abilities: $Abilities);
        get walkingSpeed(): number;
        get invulnerable(): boolean;
        get flying(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateRecipesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundUpdateRecipesPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getRecipes(): $List<$RecipeHolder<never>>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateRecipesPacket>;
        constructor(recipes: $Collection_<$RecipeHolder_<never>>);
        get recipes(): $List<$RecipeHolder<never>>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPaddleBoatPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPaddleBoatPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getLeft(): boolean;
        getRight(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPaddleBoatPacket>;
        constructor(left: boolean, right: boolean);
        get left(): boolean;
        get right(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$UpdateProgressOperation extends $Record implements $ClientboundBossEventPacket$Operation {
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBossEventPacket$UpdateProgressOperation}.
     */
    export type $ClientboundBossEventPacket$UpdateProgressOperation_ = { progress?: number,  } | [progress?: number, ];
    export class $ClientboundEntityEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundEntityEventPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        getEventId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundEntityEventPacket>;
        constructor(entity: $Entity, eventId: number);
        get eventId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateAttributesPacket implements $Packet<$ClientGamePacketListener> {
        getEntityId(): number;
        type(): $PacketType<$ClientboundUpdateAttributesPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getValues(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAttributesPacket>;
        constructor(entityId: number, attributes: $Collection_<$AttributeInstance>);
        get entityId(): number;
        get values(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCommandsPacket>;
        getRoot(context: $CommandBuildContext): $RootCommandNode<$SharedSuggestionProvider>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCommandsPacket>;
        constructor(root: $RootCommandNode<$SharedSuggestionProvider>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$LiteralNodeStub implements $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundStopSoundPacket implements $Packet<$ClientGamePacketListener> {
        getName(): $ResourceLocation;
        type(): $PacketType<$ClientboundStopSoundPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSource(): $SoundSource;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundStopSoundPacket>;
        constructor(name: $ResourceLocation_ | null, source: $SoundSource_ | null);
        get name(): $ResourceLocation;
        get source(): $SoundSource;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundRecipeBookChangeSettingsPacket implements $Packet<$ServerGamePacketListener> {
        isFiltering(): boolean;
        getBookType(): $RecipeBookType;
        type(): $PacketType<$ServerboundRecipeBookChangeSettingsPacket>;
        isOpen(): boolean;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRecipeBookChangeSettingsPacket>;
        constructor(bookType: $RecipeBookType_, isOpen: boolean, isFiltering: boolean);
        get filtering(): boolean;
        get bookType(): $RecipeBookType;
        get open(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$Entry {
    }
    export class $ServerboundConfigurationAcknowledgedPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundConfigurationAcknowledgedPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundConfigurationAcknowledgedPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundConfigurationAcknowledgedPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundSetSubtitleTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetSubtitleTextPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        text(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetSubtitleTextPacket>;
        constructor(text: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetSubtitleTextPacket}.
     */
    export type $ClientboundSetSubtitleTextPacket_ = { text?: $Component_,  } | [text?: $Component_, ];
    export class $ClientboundRemoveMobEffectPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        entityId(): number;
        type(): $PacketType<$ClientboundRemoveMobEffectPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        effect(): $Holder<$MobEffect>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundRemoveMobEffectPacket>;
        constructor(arg0: number, arg1: $Holder_<$MobEffect>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundRemoveMobEffectPacket}.
     */
    export type $ClientboundRemoveMobEffectPacket_ = { effect?: $Holder_<$MobEffect>, entityId?: number,  } | [effect?: $Holder_<$MobEffect>, entityId?: number, ];
    export class $ClientboundMoveEntityPacket$Pos extends $ClientboundMoveEntityPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$Pos>;
        constructor(entityId: number, xa: number, ya: number, za: number, onGround: boolean);
    }
    export class $ClientboundChangeDifficultyPacket implements $Packet<$ClientGamePacketListener> {
        getDifficulty(): $Difficulty;
        type(): $PacketType<$ClientboundChangeDifficultyPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isLocked(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChangeDifficultyPacket>;
        constructor(difficulty: $Difficulty_, locked: boolean);
        get difficulty(): $Difficulty;
        get locked(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityMotionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEntityMotionPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getXa(): number;
        getYa(): number;
        getZa(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetEntityMotionPacket>;
        constructor(id: number, deltaMovement: $Vec3_);
        constructor(entity: $Entity);
        get id(): number;
        get xa(): number;
        get ya(): number;
        get za(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerActionPacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        type(): $PacketType<$ServerboundPlayerActionPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getAction(): $ServerboundPlayerActionPacket$Action;
        getDirection(): $Direction;
        getSequence(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerActionPacket>;
        constructor(action: $ServerboundPlayerActionPacket$Action_, pos: $BlockPos_, direction: $Direction_, sequence: number);
        constructor(action: $ServerboundPlayerActionPacket$Action_, pos: $BlockPos_, direction: $Direction_);
        get pos(): $BlockPos;
        get action(): $ServerboundPlayerActionPacket$Action;
        get direction(): $Direction;
        get sequence(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEquipmentPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEquipmentPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(): number;
        getSlots(): $List<$Pair<$EquipmentSlot, $ItemStack>>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetEquipmentPacket>;
        constructor(entity: number, slots: $List_<$Pair<$EquipmentSlot_, $ItemStack_>>);
        get entity(): number;
        get slots(): $List<$Pair<$EquipmentSlot, $ItemStack>>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAddEntityPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getYHeadRot(): number;
        type(): $PacketType<$ClientboundAddEntityPacket>;
        getId(): number;
        getType(): $EntityType<never>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getData(): number;
        getUUID(): $UUID;
        getYRot(): number;
        getXRot(): number;
        getX(): number;
        getY(): number;
        getXa(): number;
        getYa(): number;
        getZa(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundAddEntityPacket>;
        constructor(id: number, uuid: $UUID_, x: number, arg3: number, y: number, arg5: number, z: number, arg7: $EntityType_<never>, xRot: number, yRot: $Vec3_, type: number);
        constructor(entity: $Entity, serverEntity: $ServerEntity);
        constructor(entity: $Entity, serverEntity: $ServerEntity, data: number);
        constructor(entity: $Entity, data: number, pos: $BlockPos_);
        get z(): number;
        get YHeadRot(): number;
        get id(): number;
        get data(): number;
        get UUID(): $UUID;
        get YRot(): number;
        get XRot(): number;
        get x(): number;
        get y(): number;
        get xa(): number;
        get ya(): number;
        get za(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerCommandPacket$Action extends $Enum<$ServerboundPlayerCommandPacket$Action> {
        static values(): $ServerboundPlayerCommandPacket$Action[];
        static valueOf(arg0: string): $ServerboundPlayerCommandPacket$Action;
        static PRESS_SHIFT_KEY: $ServerboundPlayerCommandPacket$Action;
        static STOP_RIDING_JUMP: $ServerboundPlayerCommandPacket$Action;
        static STOP_SLEEPING: $ServerboundPlayerCommandPacket$Action;
        static START_RIDING_JUMP: $ServerboundPlayerCommandPacket$Action;
        static START_SPRINTING: $ServerboundPlayerCommandPacket$Action;
        static STOP_SPRINTING: $ServerboundPlayerCommandPacket$Action;
        static START_FALL_FLYING: $ServerboundPlayerCommandPacket$Action;
        static RELEASE_SHIFT_KEY: $ServerboundPlayerCommandPacket$Action;
        static OPEN_INVENTORY: $ServerboundPlayerCommandPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundPlayerCommandPacket$Action}.
     */
    export type $ServerboundPlayerCommandPacket$Action_ = "press_shift_key" | "release_shift_key" | "stop_sleeping" | "start_sprinting" | "stop_sprinting" | "start_riding_jump" | "stop_riding_jump" | "open_inventory" | "start_fall_flying";
    export class $ServerboundLockDifficultyPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundLockDifficultyPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isLocked(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundLockDifficultyPacket>;
        constructor(locked: boolean);
        get locked(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatKillPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        type(): $PacketType<$ClientboundPlayerCombatKillPacket>;
        message(): $Component;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        playerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerCombatKillPacket>;
        constructor(playerId: number, message: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerCombatKillPacket}.
     */
    export type $ClientboundPlayerCombatKillPacket_ = { playerId?: number, message?: $Component_,  } | [playerId?: number, message?: $Component_, ];
    export class $ServerboundMovePlayerPacket$Pos extends $ServerboundMovePlayerPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$Pos>;
        constructor(x: number, arg1: number, y: number, arg3: boolean);
    }
    export class $ClientboundBossEventPacket$UpdatePropertiesOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundCommandSuggestionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        suggestions(): $List<$ClientboundCommandSuggestionsPacket$Entry>;
        toSuggestions(): $Suggestions;
        type(): $PacketType<$ClientboundCommandSuggestionsPacket>;
        length(): number;
        id(): number;
        start(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCommandSuggestionsPacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $List_<$ClientboundCommandSuggestionsPacket$Entry_>);
        constructor(id: number, suggestions: $Suggestions);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCommandSuggestionsPacket}.
     */
    export type $ClientboundCommandSuggestionsPacket_ = { id?: number, start?: number, suggestions?: $List_<$ClientboundCommandSuggestionsPacket$Entry_>, length?: number,  } | [id?: number, start?: number, suggestions?: $List_<$ClientboundCommandSuggestionsPacket$Entry_>, length?: number, ];
    export class $ClientboundChunkBatchStartPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChunkBatchStartPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static INSTANCE: $ClientboundChunkBatchStartPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundChunkBatchStartPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$Operation {
    }
    export interface $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSetScorePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        objectiveName(): string;
        type(): $PacketType<$ClientboundSetScorePacket>;
        owner(): string;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        display(): ($Component) | undefined;
        numberFormat(): ($NumberFormat) | undefined;
        score(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetScorePacket>;
        constructor(arg0: string, arg1: string, arg2: number, arg3: ($Component_) | undefined, arg4: ($NumberFormat) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetScorePacket}.
     */
    export type $ClientboundSetScorePacket_ = { owner?: string, objectiveName?: string, display?: ($Component_) | undefined, score?: number, numberFormat?: ($NumberFormat) | undefined,  } | [owner?: string, objectiveName?: string, display?: ($Component_) | undefined, score?: number, numberFormat?: ($NumberFormat) | undefined, ];
    export class $ServerboundEntityTagQueryPacket implements $Packet<$ServerGamePacketListener> {
        getTransactionId(): number;
        getEntityId(): number;
        type(): $PacketType<$ServerboundEntityTagQueryPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundEntityTagQueryPacket>;
        constructor(transactionId: number, entityId: number);
        get transactionId(): number;
        get entityId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandSuggestionsPacket$Entry extends $Record {
        text(): string;
        tooltip(): ($Component) | undefined;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCommandSuggestionsPacket$Entry>;
        constructor(arg0: string, arg1: ($Component_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCommandSuggestionsPacket$Entry}.
     */
    export type $ClientboundCommandSuggestionsPacket$Entry_ = { text?: string, tooltip?: ($Component_) | undefined,  } | [text?: string, tooltip?: ($Component_) | undefined, ];
    export class $ServerboundBlockEntityTagQueryPacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        getTransactionId(): number;
        type(): $PacketType<$ServerboundBlockEntityTagQueryPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundBlockEntityTagQueryPacket>;
        constructor(transactionId: number, pos: $BlockPos_);
        get pos(): $BlockPos;
        get transactionId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $GamePacketTypes {
        static CLIENTBOUND_SET_EXPERIENCE: $PacketType<$ClientboundSetExperiencePacket>;
        static CLIENTBOUND_SET_PLAYER_TEAM: $PacketType<$ClientboundSetPlayerTeamPacket>;
        static SERVERBOUND_BLOCK_ENTITY_TAG_QUERY: $PacketType<$ServerboundBlockEntityTagQueryPacket>;
        static SERVERBOUND_SET_CREATIVE_MODE_SLOT: $PacketType<$ServerboundSetCreativeModeSlotPacket>;
        static SERVERBOUND_CHAT_COMMAND: $PacketType<$ServerboundChatCommandPacket>;
        static SERVERBOUND_PICK_ITEM: $PacketType<$ServerboundPickItemPacket>;
        static CLIENTBOUND_GAME_EVENT: $PacketType<$ClientboundGameEventPacket>;
        static CLIENTBOUND_SET_SIMULATION_DISTANCE: $PacketType<$ClientboundSetSimulationDistancePacket>;
        static CLIENTBOUND_SELECT_ADVANCEMENTS_TAB: $PacketType<$ClientboundSelectAdvancementsTabPacket>;
        static CLIENTBOUND_SET_SCORE: $PacketType<$ClientboundSetScorePacket>;
        static SERVERBOUND_SET_JIGSAW_BLOCK: $PacketType<$ServerboundSetJigsawBlockPacket>;
        static SERVERBOUND_MOVE_PLAYER_POS: $PacketType<$ServerboundMovePlayerPacket$Pos>;
        static CLIENTBOUND_OPEN_SCREEN: $PacketType<$ClientboundOpenScreenPacket>;
        static CLIENTBOUND_SET_ENTITY_MOTION: $PacketType<$ClientboundSetEntityMotionPacket>;
        static CLIENTBOUND_SOUND_ENTITY: $PacketType<$ClientboundSoundEntityPacket>;
        static CLIENTBOUND_UPDATE_MOB_EFFECT: $PacketType<$ClientboundUpdateMobEffectPacket>;
        static SERVERBOUND_CLIENT_COMMAND: $PacketType<$ServerboundClientCommandPacket>;
        static SERVERBOUND_CONTAINER_SLOT_STATE_CHANGED: $PacketType<$ServerboundContainerSlotStateChangedPacket>;
        static SERVERBOUND_PADDLE_BOAT: $PacketType<$ServerboundPaddleBoatPacket>;
        static CLIENTBOUND_PLAYER_COMBAT_KILL: $PacketType<$ClientboundPlayerCombatKillPacket>;
        static CLIENTBOUND_UPDATE_ATTRIBUTES: $PacketType<$ClientboundUpdateAttributesPacket>;
        static CLIENTBOUND_TELEPORT_ENTITY: $PacketType<$ClientboundTeleportEntityPacket>;
        static CLIENTBOUND_CHUNK_BATCH_FINISHED: $PacketType<$ClientboundChunkBatchFinishedPacket>;
        static CLIENTBOUND_PLAYER_ABILITIES: $PacketType<$ClientboundPlayerAbilitiesPacket>;
        static CLIENTBOUND_AWARD_STATS: $PacketType<$ClientboundAwardStatsPacket>;
        static CLIENTBOUND_RESPAWN: $PacketType<$ClientboundRespawnPacket>;
        static SERVERBOUND_PLAYER_INPUT: $PacketType<$ServerboundPlayerInputPacket>;
        static SERVERBOUND_SET_COMMAND_BLOCK: $PacketType<$ServerboundSetCommandBlockPacket>;
        static CLIENTBOUND_CHUNK_BATCH_START: $PacketType<$ClientboundChunkBatchStartPacket>;
        static SERVERBOUND_CONFIGURATION_ACKNOWLEDGED: $PacketType<$ServerboundConfigurationAcknowledgedPacket>;
        static CLIENTBOUND_TICKING_STEP: $PacketType<$ClientboundTickingStepPacket>;
        static CLIENTBOUND_BOSS_EVENT: $PacketType<$ClientboundBossEventPacket>;
        static SERVERBOUND_CONTAINER_BUTTON_CLICK: $PacketType<$ServerboundContainerButtonClickPacket>;
        static CLIENTBOUND_BLOCK_DESTRUCTION: $PacketType<$ClientboundBlockDestructionPacket>;
        static CLIENTBOUND_DAMAGE_EVENT: $PacketType<$ClientboundDamageEventPacket>;
        static SERVERBOUND_RECIPE_BOOK_SEEN_RECIPE: $PacketType<$ServerboundRecipeBookSeenRecipePacket>;
        static SERVERBOUND_ACCEPT_TELEPORTATION: $PacketType<$ServerboundAcceptTeleportationPacket>;
        static SERVERBOUND_EDIT_BOOK: $PacketType<$ServerboundEditBookPacket>;
        static CLIENTBOUND_PLAYER_POSITION: $PacketType<$ClientboundPlayerPositionPacket>;
        static CLIENTBOUND_SET_DEFAULT_SPAWN_POSITION: $PacketType<$ClientboundSetDefaultSpawnPositionPacket>;
        static CLIENTBOUND_TAB_LIST: $PacketType<$ClientboundTabListPacket>;
        static SERVERBOUND_CONTAINER_CLOSE: $PacketType<$ServerboundContainerClosePacket>;
        static CLIENTBOUND_SET_CAMERA: $PacketType<$ClientboundSetCameraPacket>;
        static SERVERBOUND_RECIPE_BOOK_CHANGE_SETTINGS: $PacketType<$ServerboundRecipeBookChangeSettingsPacket>;
        static CLIENTBOUND_CUSTOM_CHAT_COMPLETIONS: $PacketType<$ClientboundCustomChatCompletionsPacket>;
        static CLIENTBOUND_BLOCK_CHANGED_ACK: $PacketType<$ClientboundBlockChangedAckPacket>;
        static CLIENTBOUND_DISGUISED_CHAT: $PacketType<$ClientboundDisguisedChatPacket>;
        static CLIENTBOUND_FORGET_LEVEL_CHUNK: $PacketType<$ClientboundForgetLevelChunkPacket>;
        static CLIENTBOUND_SET_BORDER_LERP_SIZE: $PacketType<$ClientboundSetBorderLerpSizePacket>;
        static SERVERBOUND_CHUNK_BATCH_RECEIVED: $PacketType<$ServerboundChunkBatchReceivedPacket>;
        static CLIENTBOUND_SET_ACTION_BAR_TEXT: $PacketType<$ClientboundSetActionBarTextPacket>;
        static CLIENTBOUND_PLAYER_INFO_UPDATE: $PacketType<$ClientboundPlayerInfoUpdatePacket>;
        static CLIENTBOUND_RECIPE: $PacketType<$ClientboundRecipePacket>;
        static CLIENTBOUND_EXPLODE: $PacketType<$ClientboundExplodePacket>;
        static CLIENTBOUND_CONTAINER_CLOSE: $PacketType<$ClientboundContainerClosePacket>;
        static CLIENTBOUND_SET_TIME: $PacketType<$ClientboundSetTimePacket>;
        static CLIENTBOUND_SECTION_BLOCKS_UPDATE: $PacketType<$ClientboundSectionBlocksUpdatePacket>;
        static SERVERBOUND_CHAT_COMMAND_SIGNED: $PacketType<$ServerboundChatCommandSignedPacket>;
        static CLIENTBOUND_ANIMATE: $PacketType<$ClientboundAnimatePacket>;
        static CLIENTBOUND_SET_ENTITY_LINK: $PacketType<$ClientboundSetEntityLinkPacket>;
        static CLIENTBOUND_SET_DISPLAY_OBJECTIVE: $PacketType<$ClientboundSetDisplayObjectivePacket>;
        static CLIENTBOUND_PLAYER_INFO_REMOVE: $PacketType<$ClientboundPlayerInfoRemovePacket>;
        static CLIENTBOUND_REMOVE_MOB_EFFECT: $PacketType<$ClientboundRemoveMobEffectPacket>;
        static SERVERBOUND_MOVE_PLAYER_STATUS_ONLY: $PacketType<$ServerboundMovePlayerPacket$StatusOnly>;
        static CLIENTBOUND_LEVEL_EVENT: $PacketType<$ClientboundLevelEventPacket>;
        static SERVERBOUND_MOVE_VEHICLE: $PacketType<$ServerboundMoveVehiclePacket>;
        static CLIENTBOUND_SOUND: $PacketType<$ClientboundSoundPacket>;
        static CLIENTBOUND_MOVE_ENTITY_POS: $PacketType<$ClientboundMoveEntityPacket$Pos>;
        static SERVERBOUND_INTERACT: $PacketType<$ServerboundInteractPacket>;
        static CLIENTBOUND_RESET_SCORE: $PacketType<$ClientboundResetScorePacket>;
        static SERVERBOUND_SET_STRUCTURE_BLOCK: $PacketType<$ServerboundSetStructureBlockPacket>;
        static SERVERBOUND_SET_CARRIED_ITEM: $PacketType<$ServerboundSetCarriedItemPacket>;
        static CLIENTBOUND_REMOVE_ENTITIES: $PacketType<$ClientboundRemoveEntitiesPacket>;
        static CLIENTBOUND_MOVE_ENTITY_POS_ROT: $PacketType<$ClientboundMoveEntityPacket$PosRot>;
        static CLIENTBOUND_SET_SUBTITLE_TEXT: $PacketType<$ClientboundSetSubtitleTextPacket>;
        static SERVERBOUND_MOVE_PLAYER_POS_ROT: $PacketType<$ServerboundMovePlayerPacket$PosRot>;
        static SERVERBOUND_SEEN_ADVANCEMENTS: $PacketType<$ServerboundSeenAdvancementsPacket>;
        static CLIENTBOUND_ADD_ENTITY: $PacketType<$ClientboundAddEntityPacket>;
        static SERVERBOUND_PLAYER_ACTION: $PacketType<$ServerboundPlayerActionPacket>;
        static SERVERBOUND_PLAYER_COMMAND: $PacketType<$ServerboundPlayerCommandPacket>;
        static CLIENTBOUND_CONTAINER_SET_DATA: $PacketType<$ClientboundContainerSetDataPacket>;
        static SERVERBOUND_LOCK_DIFFICULTY: $PacketType<$ServerboundLockDifficultyPacket>;
        static CLIENTBOUND_COMMANDS: $PacketType<$ClientboundCommandsPacket>;
        static CLIENTBOUND_LIGHT_UPDATE: $PacketType<$ClientboundLightUpdatePacket>;
        static CLIENTBOUND_DELETE_CHAT: $PacketType<$ClientboundDeleteChatPacket>;
        static SERVERBOUND_ENTITY_TAG_QUERY: $PacketType<$ServerboundEntityTagQueryPacket>;
        static CLIENTBOUND_SET_BORDER_CENTER: $PacketType<$ClientboundSetBorderCenterPacket>;
        static SERVERBOUND_CHANGE_DIFFICULTY: $PacketType<$ServerboundChangeDifficultyPacket>;
        static CLIENTBOUND_MOVE_VEHICLE: $PacketType<$ClientboundMoveVehiclePacket>;
        static SERVERBOUND_JIGSAW_GENERATE: $PacketType<$ServerboundJigsawGeneratePacket>;
        static CLIENTBOUND_CLEAR_TITLES: $PacketType<$ClientboundClearTitlesPacket>;
        static SERVERBOUND_SIGN_UPDATE: $PacketType<$ServerboundSignUpdatePacket>;
        static SERVERBOUND_MOVE_PLAYER_ROT: $PacketType<$ServerboundMovePlayerPacket$Rot>;
        static CLIENTBOUND_PLAYER_COMBAT_ENTER: $PacketType<$ClientboundPlayerCombatEnterPacket>;
        static CLIENTBOUND_SET_CHUNK_CACHE_CENTER: $PacketType<$ClientboundSetChunkCacheCenterPacket>;
        static CLIENTBOUND_MAP_ITEM_DATA: $PacketType<$ClientboundMapItemDataPacket>;
        static CLIENTBOUND_OPEN_SIGN_EDITOR: $PacketType<$ClientboundOpenSignEditorPacket>;
        static CLIENTBOUND_START_CONFIGURATION: $PacketType<$ClientboundStartConfigurationPacket>;
        static SERVERBOUND_CHAT_ACK: $PacketType<$ServerboundChatAckPacket>;
        static CLIENTBOUND_MERCHANT_OFFERS: $PacketType<$ClientboundMerchantOffersPacket>;
        static CLIENTBOUND_PLAYER_COMBAT_END: $PacketType<$ClientboundPlayerCombatEndPacket>;
        static CLIENTBOUND_PLAYER_LOOK_AT: $PacketType<$ClientboundPlayerLookAtPacket>;
        static CLIENTBOUND_STOP_SOUND: $PacketType<$ClientboundStopSoundPacket>;
        static SERVERBOUND_TELEPORT_TO_ENTITY: $PacketType<$ServerboundTeleportToEntityPacket>;
        static CLIENTBOUND_BLOCK_EVENT: $PacketType<$ClientboundBlockEventPacket>;
        static CLIENTBOUND_LOGIN: $PacketType<$ClientboundLoginPacket>;
        static CLIENTBOUND_ROTATE_HEAD: $PacketType<$ClientboundRotateHeadPacket>;
        static CLIENTBOUND_SYSTEM_CHAT: $PacketType<$ClientboundSystemChatPacket>;
        static CLIENTBOUND_TAG_QUERY: $PacketType<$ClientboundTagQueryPacket>;
        static CLIENTBOUND_TAKE_ITEM_ENTITY: $PacketType<$ClientboundTakeItemEntityPacket>;
        static SERVERBOUND_USE_ITEM_ON: $PacketType<$ServerboundUseItemOnPacket>;
        static CLIENTBOUND_INITIALIZE_BORDER: $PacketType<$ClientboundInitializeBorderPacket>;
        static CLIENTBOUND_SET_PASSENGERS: $PacketType<$ClientboundSetPassengersPacket>;
        static CLIENTBOUND_SET_EQUIPMENT: $PacketType<$ClientboundSetEquipmentPacket>;
        static CLIENTBOUND_SET_CARRIED_ITEM: $PacketType<$ClientboundSetCarriedItemPacket>;
        static CLIENTBOUND_SET_HEALTH: $PacketType<$ClientboundSetHealthPacket>;
        static CLIENTBOUND_UPDATE_RECIPES: $PacketType<$ClientboundUpdateRecipesPacket>;
        static SERVERBOUND_RENAME_ITEM: $PacketType<$ServerboundRenameItemPacket>;
        static CLIENTBOUND_COOLDOWN: $PacketType<$ClientboundCooldownPacket>;
        static SERVERBOUND_SET_COMMAND_MINECART: $PacketType<$ServerboundSetCommandMinecartPacket>;
        static SERVERBOUND_PLACE_RECIPE: $PacketType<$ServerboundPlaceRecipePacket>;
        static CLIENTBOUND_UPDATE_ADVANCEMENTS: $PacketType<$ClientboundUpdateAdvancementsPacket>;
        static CLIENTBOUND_SET_TITLE_TEXT: $PacketType<$ClientboundSetTitleTextPacket>;
        static SERVERBOUND_PLAYER_ABILITIES: $PacketType<$ServerboundPlayerAbilitiesPacket>;
        static SERVERBOUND_SWING: $PacketType<$ServerboundSwingPacket>;
        static SERVERBOUND_CONTAINER_CLICK: $PacketType<$ServerboundContainerClickPacket>;
        static CLIENTBOUND_HORSE_SCREEN_OPEN: $PacketType<$ClientboundHorseScreenOpenPacket>;
        static CLIENTBOUND_PLAYER_CHAT: $PacketType<$ClientboundPlayerChatPacket>;
        static CLIENTBOUND_SET_OBJECTIVE: $PacketType<$ClientboundSetObjectivePacket>;
        static CLIENTBOUND_SET_BORDER_WARNING_DISTANCE: $PacketType<$ClientboundSetBorderWarningDistancePacket>;
        static CLIENTBOUND_COMMAND_SUGGESTIONS: $PacketType<$ClientboundCommandSuggestionsPacket>;
        static CLIENTBOUND_DEBUG_SAMPLE: $PacketType<$ClientboundDebugSamplePacket>;
        static CLIENTBOUND_CONTAINER_SET_SLOT: $PacketType<$ClientboundContainerSetSlotPacket>;
        static CLIENTBOUND_OPEN_BOOK: $PacketType<$ClientboundOpenBookPacket>;
        static CLIENTBOUND_ENTITY_EVENT: $PacketType<$ClientboundEntityEventPacket>;
        static CLIENTBOUND_CONTAINER_SET_CONTENT: $PacketType<$ClientboundContainerSetContentPacket>;
        static CLIENTBOUND_SET_BORDER_WARNING_DELAY: $PacketType<$ClientboundSetBorderWarningDelayPacket>;
        static SERVERBOUND_USE_ITEM: $PacketType<$ServerboundUseItemPacket>;
        static SERVERBOUND_SET_BEACON: $PacketType<$ServerboundSetBeaconPacket>;
        static CLIENTBOUND_PLACE_GHOST_RECIPE: $PacketType<$ClientboundPlaceGhostRecipePacket>;
        static CLIENTBOUND_SERVER_DATA: $PacketType<$ClientboundServerDataPacket>;
        static CLIENTBOUND_TICKING_STATE: $PacketType<$ClientboundTickingStatePacket>;
        static CLIENTBOUND_CHANGE_DIFFICULTY: $PacketType<$ClientboundChangeDifficultyPacket>;
        static SERVERBOUND_COMMAND_SUGGESTION: $PacketType<$ServerboundCommandSuggestionPacket>;
        static CLIENTBOUND_MOVE_ENTITY_ROT: $PacketType<$ClientboundMoveEntityPacket$Rot>;
        static CLIENTBOUND_PROJECTILE_POWER: $PacketType<$ClientboundProjectilePowerPacket>;
        static CLIENTBOUND_BLOCK_ENTITY_DATA: $PacketType<$ClientboundBlockEntityDataPacket>;
        static CLIENTBOUND_SET_ENTITY_DATA: $PacketType<$ClientboundSetEntityDataPacket>;
        static SERVERBOUND_CHAT: $PacketType<$ServerboundChatPacket>;
        static CLIENTBOUND_BLOCK_UPDATE: $PacketType<$ClientboundBlockUpdatePacket>;
        static CLIENTBOUND_ADD_EXPERIENCE_ORB: $PacketType<$ClientboundAddExperienceOrbPacket>;
        static CLIENTBOUND_BUNDLE_DELIMITER: $PacketType<$ClientboundBundleDelimiterPacket>;
        static CLIENTBOUND_SET_BORDER_SIZE: $PacketType<$ClientboundSetBorderSizePacket>;
        static CLIENTBOUND_LEVEL_CHUNK_WITH_LIGHT: $PacketType<$ClientboundLevelChunkWithLightPacket>;
        static CLIENTBOUND_LEVEL_PARTICLES: $PacketType<$ClientboundLevelParticlesPacket>;
        static CLIENTBOUND_CHUNKS_BIOMES: $PacketType<$ClientboundChunksBiomesPacket>;
        static CLIENTBOUND_BUNDLE: $PacketType<$ClientboundBundlePacket>;
        static CLIENTBOUND_HURT_ANIMATION: $PacketType<$ClientboundHurtAnimationPacket>;
        static SERVERBOUND_SELECT_TRADE: $PacketType<$ServerboundSelectTradePacket>;
        static SERVERBOUND_CHAT_SESSION_UPDATE: $PacketType<$ServerboundChatSessionUpdatePacket>;
        static SERVERBOUND_DEBUG_SAMPLE_SUBSCRIPTION: $PacketType<$ServerboundDebugSampleSubscriptionPacket>;
        static CLIENTBOUND_SET_CHUNK_CACHE_RADIUS: $PacketType<$ClientboundSetChunkCacheRadiusPacket>;
        static CLIENTBOUND_SET_TITLES_ANIMATION: $PacketType<$ClientboundSetTitlesAnimationPacket>;
        constructor();
    }
    export class $ClientboundClearTitlesPacket implements $Packet<$ClientGamePacketListener> {
        shouldResetTimes(): boolean;
        type(): $PacketType<$ClientboundClearTitlesPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundClearTitlesPacket>;
        constructor(resetTimes: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerButtonClickPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        containerId(): number;
        type(): $PacketType<$ServerboundContainerButtonClickPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        buttonId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerButtonClickPacket>;
        constructor(containerId: number, buttonId: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundContainerButtonClickPacket}.
     */
    export type $ServerboundContainerButtonClickPacket_ = { buttonId?: number, containerId?: number,  } | [buttonId?: number, containerId?: number, ];
    export class $ClientboundSetBorderWarningDelayPacket implements $Packet<$ClientGamePacketListener> {
        getWarningDelay(): number;
        type(): $PacketType<$ClientboundSetBorderWarningDelayPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderWarningDelayPacket>;
        constructor(worldBorder: $WorldBorder);
        get warningDelay(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$Rot extends $ClientboundMoveEntityPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$Rot>;
        constructor(entityId: number, yRot: number, xRot: number, onGround: boolean);
    }
    export class $ClientboundSetBorderLerpSizePacket implements $Packet<$ClientGamePacketListener> {
        getLerpTime(): number;
        type(): $PacketType<$ClientboundSetBorderLerpSizePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getOldSize(): number;
        getNewSize(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderLerpSizePacket>;
        constructor(worldBorder: $WorldBorder);
        get lerpTime(): number;
        get oldSize(): number;
        get newSize(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundMovePlayerPacket$Rot extends $ServerboundMovePlayerPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$Rot>;
        constructor(yRot: number, xRot: number, onGround: boolean);
    }
    export class $ServerboundContainerClosePacket implements $Packet<$ServerGamePacketListener> {
        getContainerId(): number;
        type(): $PacketType<$ServerboundContainerClosePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerClosePacket>;
        constructor(containerId: number);
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatCommandPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatCommandPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        command(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatCommandPacket>;
        constructor(arg0: string);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatCommandPacket}.
     */
    export type $ServerboundChatCommandPacket_ = { command?: string,  } | [command?: string, ];
    export class $ServerboundDebugSampleSubscriptionPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        sampleType(): $RemoteDebugSampleType;
        type(): $PacketType<$ServerboundDebugSampleSubscriptionPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundDebugSampleSubscriptionPacket>;
        constructor(arg0: $RemoteDebugSampleType_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundDebugSampleSubscriptionPacket}.
     */
    export type $ServerboundDebugSampleSubscriptionPacket_ = { sampleType?: $RemoteDebugSampleType_,  } | [sampleType?: $RemoteDebugSampleType_, ];
    export class $ClientboundBossEventPacket$Handler {
    }
    export interface $ClientboundBossEventPacket$Handler {
        updateStyle(id: $UUID_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_): void;
        updateName(id: $UUID_, name: $Component_): void;
        remove(id: $UUID_): void;
        add(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean): void;
        updateProgress(id: $UUID_, progress: number): void;
        updateProperties(id: $UUID_, darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean): void;
    }
    export class $ClientboundBossEventPacket$UpdateStyleOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSoundPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        type(): $PacketType<$ClientboundSoundPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSource(): $SoundSource;
        getSeed(): number;
        getX(): number;
        getY(): number;
        getPitch(): number;
        getVolume(): number;
        getSound(): $Holder<$SoundEvent>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static LOCATION_ACCURACY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSoundPacket>;
        constructor(sound: $Holder_<$SoundEvent>, source: $SoundSource_, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number);
        get z(): number;
        get source(): $SoundSource;
        get seed(): number;
        get x(): number;
        get y(): number;
        get pitch(): number;
        get volume(): number;
        get sound(): $Holder<$SoundEvent>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundRecipeBookSeenRecipePacket implements $Packet<$ServerGamePacketListener> {
        getRecipe(): $ResourceLocation;
        type(): $PacketType<$ServerboundRecipeBookSeenRecipePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRecipeBookSeenRecipePacket>;
        constructor(recipe: $RecipeHolder_<never>);
        get recipe(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveVehiclePacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        type(): $PacketType<$ClientboundMoveVehiclePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getYRot(): number;
        getXRot(): number;
        getX(): number;
        getY(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveVehiclePacket>;
        constructor(vehicle: $Entity);
        get z(): number;
        get YRot(): number;
        get XRot(): number;
        get x(): number;
        get y(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerSlotStateChangedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        containerId(): number;
        type(): $PacketType<$ServerboundContainerSlotStateChangedPacket>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        newState(): boolean;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        slotId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerSlotStateChangedPacket>;
        constructor(arg0: number, arg1: number, arg2: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundContainerSlotStateChangedPacket}.
     */
    export type $ServerboundContainerSlotStateChangedPacket_ = { newState?: boolean, slotId?: number, containerId?: number,  } | [newState?: boolean, slotId?: number, containerId?: number, ];
    export class $ClientboundAddExperienceOrbPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        type(): $PacketType<$ClientboundAddExperienceOrbPacket>;
        getValue(): number;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getX(): number;
        getY(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundAddExperienceOrbPacket>;
        constructor(orb: $ExperienceOrb, entity: $ServerEntity);
        get z(): number;
        get value(): number;
        get id(): number;
        get x(): number;
        get y(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTimePacket implements $Packet<$ClientGamePacketListener> {
        getDayTime(): number;
        type(): $PacketType<$ClientboundSetTimePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getGameTime(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetTimePacket>;
        constructor(gameTime: number, arg1: number, dayTime: boolean);
        get dayTime(): number;
        get gameTime(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAwardStatsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        stats(): $Object2IntMap<$Stat<never>>;
        type(): $PacketType<$ClientboundAwardStatsPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundAwardStatsPacket>;
        constructor(stats: $Object2IntMap<$Stat_<never>>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundAwardStatsPacket}.
     */
    export type $ClientboundAwardStatsPacket_ = { stats?: $Object2IntMap<$Stat_<never>>,  } | [stats?: $Object2IntMap<$Stat_<never>>, ];
    export class $ClientboundBundlePacket extends $BundlePacket<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        constructor(arg0: $Iterable_<$Packet<$ClientGamePacketListener>>);
    }
    export class $ClientboundBlockChangedAckPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockChangedAckPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        sequence(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundBlockChangedAckPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBlockChangedAckPacket}.
     */
    export type $ClientboundBlockChangedAckPacket_ = { sequence?: number,  } | [sequence?: number, ];
    export class $ClientboundPlayerInfoUpdatePacket implements $Packet<$ClientGamePacketListener> {
        static createPlayerInitializing(players: $Collection_<$ServerPlayer>): $ClientboundPlayerInfoUpdatePacket;
        type(): $PacketType<$ClientboundPlayerInfoUpdatePacket>;
        entries(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        newEntries(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>;
        actions(): $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerInfoUpdatePacket>;
        constructor(actions: $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action_>, players: $Collection_<$ServerPlayer>);
        constructor(action: $ClientboundPlayerInfoUpdatePacket$Action_, player: $ServerPlayer);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDamageEventPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        entityId(): number;
        sourcePosition(): ($Vec3) | undefined;
        type(): $PacketType<$ClientboundDamageEventPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSource(level: $Level_): $DamageSource;
        sourceType(): $Holder<$DamageType>;
        sourceCauseId(): number;
        sourceDirectId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundDamageEventPacket>;
        constructor(entity: $Entity, damageSource: $DamageSource_);
        constructor(arg0: number, arg1: $Holder_<$DamageType>, arg2: number, arg3: number, arg4: ($Vec3_) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDamageEventPacket}.
     */
    export type $ClientboundDamageEventPacket_ = { sourceType?: $Holder_<$DamageType>, sourceCauseId?: number, sourceDirectId?: number, entityId?: number, sourcePosition?: ($Vec3_) | undefined,  } | [sourceType?: $Holder_<$DamageType>, sourceCauseId?: number, sourceDirectId?: number, entityId?: number, sourcePosition?: ($Vec3_) | undefined, ];
    export class $ClientboundContainerSetContentPacket implements $Packet<$ClientGamePacketListener> {
        getItems(): $List<$ItemStack>;
        getStateId(): number;
        getContainerId(): number;
        getCarriedItem(): $ItemStack;
        type(): $PacketType<$ClientboundContainerSetContentPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundContainerSetContentPacket>;
        constructor(containerId: number, stateId: number, items: $NonNullList<$ItemStack_>, carriedItem: $ItemStack_);
        get items(): $List<$ItemStack>;
        get stateId(): number;
        get containerId(): number;
        get carriedItem(): $ItemStack;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundGameEventPacket$Type {
        constructor(id: number);
    }
    /**
     * Triggers a block event on the client.
     * 
     * @see Block#triggerEvent
     * @see Level#blockEvent
     */
    export class $ClientboundBlockEventPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        type(): $PacketType<$ClientboundBlockEventPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getBlock(): $Block;
        /**
         * First parameter of the block event. The meaning of this value depends on the block.
         */
        getB0(): number;
        /**
         * First parameter of the block event. The meaning of this value depends on the block.
         */
        getB1(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockEventPacket>;
        constructor(pos: $BlockPos_, block: $Block_, b0: number, b1: number);
        get pos(): $BlockPos;
        get block(): $Block;
        get b0(): number;
        get b1(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetSimulationDistancePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetSimulationDistancePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        simulationDistance(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetSimulationDistancePacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetSimulationDistancePacket}.
     */
    export type $ClientboundSetSimulationDistancePacket_ = { simulationDistance?: number,  } | [simulationDistance?: number, ];
    export class $ClientboundSetPlayerTeamPacket implements $Packet<$ClientGamePacketListener> {
        getPlayers(): $Collection<string>;
        static createAddOrModifyPacket(team: $PlayerTeam, useAdd: boolean): $ClientboundSetPlayerTeamPacket;
        static createPlayerPacket(team: $PlayerTeam, playerName: string, action: $ClientboundSetPlayerTeamPacket$Action_): $ClientboundSetPlayerTeamPacket;
        static createRemovePacket(team: $PlayerTeam): $ClientboundSetPlayerTeamPacket;
        getPlayerAction(): $ClientboundSetPlayerTeamPacket$Action;
        getTeamAction(): $ClientboundSetPlayerTeamPacket$Action;
        getParameters(): ($ClientboundSetPlayerTeamPacket$Parameters) | undefined;
        getName(): string;
        type(): $PacketType<$ClientboundSetPlayerTeamPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetPlayerTeamPacket>;
        get players(): $Collection<string>;
        get playerAction(): $ClientboundSetPlayerTeamPacket$Action;
        get teamAction(): $ClientboundSetPlayerTeamPacket$Action;
        get parameters(): ($ClientboundSetPlayerTeamPacket$Parameters) | undefined;
        get name(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $DebugPackets {
        static sendPoiRemovedPacket(level: $ServerLevel, pos: $BlockPos_): void;
        static sendStructurePacket(level: $WorldGenLevel, structureStart: $StructureStart): void;
        static sendGoalSelector(level: $Level_, mob: $Mob, goalSelector: $GoalSelector): void;
        static sendPoiAddedPacket(level: $ServerLevel, pos: $BlockPos_): void;
        static sendPoiTicketCountPacket(level: $ServerLevel, pos: $BlockPos_): void;
        static sendPathFindingPacket(level: $Level_, mob: $Mob, path: $Path | null, maxDistanceToWaypoint: number): void;
        static sendBeeInfo(bee: $Bee): void;
        static sendBreezeInfo(breeze: $Breeze): void;
        static sendPoiPacketsForChunk(level: $ServerLevel, chunkPos: $ChunkPos): void;
        static sendGameEventInfo(level: $Level_, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        static sendGameTestAddMarker(level: $ServerLevel, pos: $BlockPos_, text: string, color: number, lifetimeMillis: number): void;
        static sendGameEventListenerInfo(level: $Level_, gameEventListener: $GameEventListener): void;
        static sendGameTestClearPacket(level: $ServerLevel): void;
        static sendHiveInfo(level: $Level_, pos: $BlockPos_, blockState: $BlockState_, hiveBlockEntity: $BeehiveBlockEntity): void;
        static sendNeighborsUpdatePacket(level: $Level_, pos: $BlockPos_): void;
        static sendEntityBrain(livingEntity: $LivingEntity): void;
        static sendRaids(level: $ServerLevel, raids: $Collection_<$Raid>): void;
        constructor();
    }
    export class $ClientboundCommandsPacket$ArgumentNodeStub implements $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundRecipePacket implements $Packet<$ClientGamePacketListener> {
        getBookSettings(): $RecipeBookSettings;
        getHighlights(): $List<$ResourceLocation>;
        type(): $PacketType<$ClientboundRecipePacket>;
        getState(): $ClientboundRecipePacket$State;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getRecipes(): $List<$ResourceLocation>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRecipePacket>;
        constructor(state: $ClientboundRecipePacket$State_, recipes: $Collection_<$ResourceLocation_>, toHighlight: $Collection_<$ResourceLocation_>, bookSettings: $RecipeBookSettings);
        get bookSettings(): $RecipeBookSettings;
        get highlights(): $List<$ResourceLocation>;
        get state(): $ClientboundRecipePacket$State;
        get recipes(): $List<$ResourceLocation>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDeleteChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        messageSignature(): $MessageSignature$Packed;
        type(): $PacketType<$ClientboundDeleteChatPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundDeleteChatPacket>;
        constructor(arg0: $MessageSignature$Packed_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDeleteChatPacket}.
     */
    export type $ClientboundDeleteChatPacket_ = { messageSignature?: $MessageSignature$Packed_,  } | [messageSignature?: $MessageSignature$Packed_, ];
    export class $ClientboundTakeItemEntityPacket implements $Packet<$ClientGamePacketListener> {
        getAmount(): number;
        getPlayerId(): number;
        type(): $PacketType<$ClientboundTakeItemEntityPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getItemId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTakeItemEntityPacket>;
        constructor(itemId: number, playerId: number, amount: number);
        get amount(): number;
        get playerId(): number;
        get itemId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetSlotPacket implements $Packet<$ClientGamePacketListener> {
        getStateId(): number;
        getContainerId(): number;
        getSlot(): number;
        type(): $PacketType<$ClientboundContainerSetSlotPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getItem(): $ItemStack;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static CARRIED_ITEM: number;
        static PLAYER_INVENTORY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundContainerSetSlotPacket>;
        constructor(containerId: number, stateId: number, slot: number, itemStack: $ItemStack_);
        get stateId(): number;
        get containerId(): number;
        get slot(): number;
        get item(): $ItemStack;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetBeaconPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        secondary(): ($Holder<$MobEffect>) | undefined;
        type(): $PacketType<$ServerboundSetBeaconPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        primary(): ($Holder<$MobEffect>) | undefined;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundSetBeaconPacket>;
        constructor(primary: ($Holder_<$MobEffect>) | undefined, secondary: ($Holder_<$MobEffect>) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSetBeaconPacket}.
     */
    export type $ServerboundSetBeaconPacket_ = { secondary?: ($Holder_<$MobEffect>) | undefined, primary?: ($Holder_<$MobEffect>) | undefined,  } | [secondary?: ($Holder_<$MobEffect>) | undefined, primary?: ($Holder_<$MobEffect>) | undefined, ];
    export class $ClientboundBlockEntityDataPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        type(): $PacketType<$ClientboundBlockEntityDataPacket>;
        getType(): $BlockEntityType<never>;
        static create(blockEntity: $BlockEntity, dataGetter: $BiFunction_<$BlockEntity, $RegistryAccess, $CompoundTag>): $ClientboundBlockEntityDataPacket;
        static create(blockEntity: $BlockEntity): $ClientboundBlockEntityDataPacket;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getTag(): $CompoundTag;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockEntityDataPacket>;
        get pos(): $BlockPos;
        get tag(): $CompoundTag;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSectionBlocksUpdatePacket implements $Packet<$ClientGamePacketListener>, $IXaeroMinimapSMultiBlockChangePacket, $IWorldMapSMultiBlockChangePacket {
        xaero_wm_getSectionPos(): $SectionPos;
        xaero_mm_getSectionPos(): $SectionPos;
        type(): $PacketType<$ClientboundSectionBlocksUpdatePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        runUpdates(consumer: $BiConsumer_<$BlockPos, $BlockState>): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        positions: number[];
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSectionBlocksUpdatePacket>;
        sectionPos: $SectionPos;
        constructor(sectionPos: $SectionPos, positions: $ShortSet, section: $LevelChunkSection);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityLinkPacket implements $Packet<$ClientGamePacketListener> {
        getSourceId(): number;
        type(): $PacketType<$ClientboundSetEntityLinkPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getDestId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetEntityLinkPacket>;
        constructor(source: $Entity, destination: $Entity | null);
        get sourceId(): number;
        get destId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatSessionUpdatePacket extends $Record implements $Packet<$ServerGamePacketListener> {
        chatSession(): $RemoteChatSession$Data;
        type(): $PacketType<$ServerboundChatSessionUpdatePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatSessionUpdatePacket>;
        constructor(arg0: $RemoteChatSession$Data_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatSessionUpdatePacket}.
     */
    export type $ServerboundChatSessionUpdatePacket_ = { chatSession?: $RemoteChatSession$Data_,  } | [chatSession?: $RemoteChatSession$Data_, ];
    export class $ClientboundPlayerChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        sender(): $UUID;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        unsignedContent(): $Component;
        signature(): $MessageSignature;
        index(): number;
        type(): $PacketType<$ClientboundPlayerChatPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        body(): $SignedMessageBody$Packed;
        chatType(): $ChatType$Bound;
        filterMask(): $FilterMask;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerChatPacket>;
        constructor(arg0: $UUID_, arg1: number, arg2: $MessageSignature_ | null, arg3: $SignedMessageBody$Packed_, arg4: $Component_ | null, arg5: $FilterMask, arg6: $ChatType$Bound_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerChatPacket}.
     */
    export type $ClientboundPlayerChatPacket_ = { body?: $SignedMessageBody$Packed_, sender?: $UUID_, filterMask?: $FilterMask, index?: number, unsignedContent?: $Component_, chatType?: $ChatType$Bound_, signature?: $MessageSignature_,  } | [body?: $SignedMessageBody$Packed_, sender?: $UUID_, filterMask?: $FilterMask, index?: number, unsignedContent?: $Component_, chatType?: $ChatType$Bound_, signature?: $MessageSignature_, ];
    export class $ClientboundCooldownPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCooldownPacket>;
        duration(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        item(): $Item;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCooldownPacket>;
        constructor(item: $Item_, duration: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCooldownPacket}.
     */
    export type $ClientboundCooldownPacket_ = { duration?: number, item?: $Item_,  } | [duration?: number, item?: $Item_, ];
    export class $ClientboundBundleDelimiterPacket extends $BundleDelimiterPacket<$ClientGamePacketListener> {
        constructor();
    }
    export class $ServerboundMoveVehiclePacket implements $Packet<$ServerGamePacketListener> {
        getZ(): number;
        type(): $PacketType<$ServerboundMoveVehiclePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getYRot(): number;
        getXRot(): number;
        getX(): number;
        getY(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMoveVehiclePacket>;
        constructor(vehicle: $Entity);
        get z(): number;
        get YRot(): number;
        get XRot(): number;
        get x(): number;
        get y(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTickingStepPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTickingStepPacket>;
        static from(tickRateManager: $TickRateManager): $ClientboundTickingStepPacket;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        tickSteps(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTickingStepPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundTickingStepPacket}.
     */
    export type $ClientboundTickingStepPacket_ = { tickSteps?: number,  } | [tickSteps?: number, ];
    export class $ClientboundDisguisedChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        isSkippable(): boolean;
        type(): $PacketType<$ClientboundDisguisedChatPacket>;
        message(): $Component;
        handle(arg0: $ClientGamePacketListener): void;
        chatType(): $ChatType$Bound;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundDisguisedChatPacket>;
        constructor(arg0: $Component_, arg1: $ChatType$Bound_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDisguisedChatPacket}.
     */
    export type $ClientboundDisguisedChatPacket_ = { message?: $Component_, chatType?: $ChatType$Bound_,  } | [message?: $Component_, chatType?: $ChatType$Bound_, ];
    export class $ServerboundSetCarriedItemPacket implements $Packet<$ServerGamePacketListener> {
        getSlot(): number;
        type(): $PacketType<$ServerboundSetCarriedItemPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCarriedItemPacket>;
        constructor(slot: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelParticlesPacket implements $Packet<$ClientGamePacketListener> {
        /**
         * Gets the x coordinate to spawn the particle.
         */
        getZ(): number;
        getParticle(): $ParticleOptions;
        isOverrideLimiter(): boolean;
        /**
         * Gets the speed of the particle animation (used in client side rendering).
         */
        getMaxSpeed(): number;
        type(): $PacketType<$ClientboundLevelParticlesPacket>;
        /**
         * Gets the amount of particles to spawn
         */
        getCount(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Gets the x coordinate to spawn the particle.
         */
        getX(): number;
        /**
         * Gets the x coordinate to spawn the particle.
         */
        getY(): number;
        /**
         * Gets the speed of the particle animation (used in client side rendering).
         */
        getZDist(): number;
        /**
         * Gets the speed of the particle animation (used in client side rendering).
         */
        getXDist(): number;
        /**
         * Gets the speed of the particle animation (used in client side rendering).
         */
        getYDist(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelParticlesPacket>;
        constructor<T extends $ParticleOptions>(particle: T, overrideLimiter: boolean, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number, xDist: number, yDist: number);
        get z(): number;
        get particle(): $ParticleOptions;
        get overrideLimiter(): boolean;
        get maxSpeed(): number;
        get count(): number;
        get x(): number;
        get y(): number;
        get ZDist(): number;
        get XDist(): number;
        get YDist(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerLookAtPacket implements $Packet<$ClientGamePacketListener> {
        getFromAnchor(): $EntityAnchorArgument$Anchor;
        type(): $PacketType<$ClientboundPlayerLookAtPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getPosition(level: $Level_): $Vec3;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerLookAtPacket>;
        constructor(fromAnchor: $EntityAnchorArgument$Anchor_, entity: $Entity, toAnchor: $EntityAnchorArgument$Anchor_);
        constructor(fromAnchor: $EntityAnchorArgument$Anchor_, x: number, arg2: number, y: number);
        get fromAnchor(): $EntityAnchorArgument$Anchor;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCustomChatCompletionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCustomChatCompletionsPacket>;
        action(): $ClientboundCustomChatCompletionsPacket$Action;
        entries(): $List<string>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomChatCompletionsPacket>;
        constructor(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomChatCompletionsPacket}.
     */
    export type $ClientboundCustomChatCompletionsPacket_ = { entries?: $List_<string>, action?: $ClientboundCustomChatCompletionsPacket$Action_,  } | [entries?: $List_<string>, action?: $ClientboundCustomChatCompletionsPacket$Action_, ];
    export class $ServerboundChangeDifficultyPacket implements $Packet<$ServerGamePacketListener> {
        getDifficulty(): $Difficulty;
        type(): $PacketType<$ServerboundChangeDifficultyPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChangeDifficultyPacket>;
        constructor(difficulty: $Difficulty_);
        get difficulty(): $Difficulty;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTitlesAnimationPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetTitlesAnimationPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getFadeOut(): number;
        getStay(): number;
        getFadeIn(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetTitlesAnimationPacket>;
        constructor(fadeIn: number, stay: number, fadeOut: number);
        get fadeOut(): number;
        get stay(): number;
        get fadeIn(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSeenAdvancementsPacket implements $Packet<$ServerGamePacketListener> {
        static closedScreen(): $ServerboundSeenAdvancementsPacket;
        type(): $PacketType<$ServerboundSeenAdvancementsPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getTab(): $ResourceLocation;
        getAction(): $ServerboundSeenAdvancementsPacket$Action;
        static openedTab(advancement: $AdvancementHolder_): $ServerboundSeenAdvancementsPacket;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSeenAdvancementsPacket>;
        constructor(action: $ServerboundSeenAdvancementsPacket$Action_, tab: $ResourceLocation_ | null);
        get tab(): $ResourceLocation;
        get action(): $ServerboundSeenAdvancementsPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket implements $Packet<$ServerGamePacketListener> {
        isUsingSecondaryAction(): boolean;
        static createAttackPacket(entity: $Entity, usingSecondaryAction: boolean): $ServerboundInteractPacket;
        static createInteractionPacket(entity: $Entity, usingSecondaryAction: boolean, hand: $InteractionHand_, interactionLocation: $Vec3_): $ServerboundInteractPacket;
        static createInteractionPacket(entity: $Entity, usingSecondaryAction: boolean, hand: $InteractionHand_): $ServerboundInteractPacket;
        type(): $PacketType<$ServerboundInteractPacket>;
        dispatch(handler: $ServerboundInteractPacket$Handler): void;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getTarget(level: $ServerLevel): $Entity;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundInteractPacket>;
        get usingSecondaryAction(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerAbilitiesPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerAbilitiesPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isFlying(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerAbilitiesPacket>;
        constructor(abilities: $Abilities);
        get flying(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundTeleportToEntityPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundTeleportToEntityPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getEntity(level: $ServerLevel): $Entity;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundTeleportToEntityPacket>;
        constructor(uuid: $UUID_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatEnterPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerCombatEnterPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static INSTANCE: $ClientboundPlayerCombatEnterPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundPlayerCombatEnterPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Action extends $Enum<$ClientboundPlayerInfoUpdatePacket$Action> {
        static values(): $ClientboundPlayerInfoUpdatePacket$Action[];
        static valueOf(arg0: string): $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_DISPLAY_NAME: $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_LISTED: $ClientboundPlayerInfoUpdatePacket$Action;
        static ADD_PLAYER: $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_GAME_MODE: $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_LATENCY: $ClientboundPlayerInfoUpdatePacket$Action;
        static INITIALIZE_CHAT: $ClientboundPlayerInfoUpdatePacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action_ = "add_player" | "initialize_chat" | "update_game_mode" | "update_listed" | "update_latency" | "update_display_name";
    export class $ClientboundPlayerInfoUpdatePacket$Action$Reader {
    }
    export interface $ClientboundPlayerInfoUpdatePacket$Action$Reader {
        read(entryBuilder: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, buffer: $RegistryFriendlyByteBuf): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action$Reader}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action$Reader_ = ((arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, arg1: $RegistryFriendlyByteBuf) => void);
    export class $ClientboundRespawnPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        commonPlayerSpawnInfo(): $CommonPlayerSpawnInfo;
        type(): $PacketType<$ClientboundRespawnPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        shouldKeep(data: number): boolean;
        dataToKeep(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static KEEP_ALL_DATA: number;
        static KEEP_ENTITY_DATA: number;
        static KEEP_ATTRIBUTE_MODIFIERS: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundRespawnPacket>;
        constructor(arg0: $CommonPlayerSpawnInfo_, arg1: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundRespawnPacket}.
     */
    export type $ClientboundRespawnPacket_ = { commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo_, dataToKeep?: number,  } | [commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo_, dataToKeep?: number, ];
    export class $ClientboundSetPassengersPacket implements $Packet<$ClientGamePacketListener> {
        getPassengers(): number[];
        type(): $PacketType<$ClientboundSetPassengersPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getVehicle(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetPassengersPacket>;
        constructor(vehicle: $Entity);
        get passengers(): number[];
        get vehicle(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlaceGhostRecipePacket implements $Packet<$ClientGamePacketListener> {
        getRecipe(): $ResourceLocation;
        getContainerId(): number;
        type(): $PacketType<$ClientboundPlaceGhostRecipePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlaceGhostRecipePacket>;
        constructor(containerId: number, recipe: $RecipeHolder_<never>);
        get recipe(): $ResourceLocation;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $DebugEntityNameGenerator {
        static getEntityName(uuid: $UUID_): string;
        static getEntityName(entity: $Entity): string;
        constructor();
    }
    export class $ClientboundSystemChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        isSkippable(): boolean;
        type(): $PacketType<$ClientboundSystemChatPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        content(): $Component;
        overlay(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSystemChatPacket>;
        constructor(arg0: $Component_, arg1: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSystemChatPacket}.
     */
    export type $ClientboundSystemChatPacket_ = { content?: $Component_, overlay?: boolean,  } | [content?: $Component_, overlay?: boolean, ];
    export class $ClientboundUpdateAdvancementsPacket implements $Packet<$ClientGamePacketListener> {
        getProgress(): $Map<$ResourceLocation, $AdvancementProgress>;
        getRemoved(): $Set<$ResourceLocation>;
        shouldReset(): boolean;
        type(): $PacketType<$ClientboundUpdateAdvancementsPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getAdded(): $List<$AdvancementHolder>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAdvancementsPacket>;
        constructor(reset: boolean, added: $Collection_<$AdvancementHolder_>, removed: $Set_<$ResourceLocation_>, progress: $Map_<$ResourceLocation_, $AdvancementProgress>);
        get progress(): $Map<$ResourceLocation, $AdvancementProgress>;
        get removed(): $Set<$ResourceLocation>;
        get added(): $List<$AdvancementHolder>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundAcceptTeleportationPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundAcceptTeleportationPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundAcceptTeleportationPacket>;
        constructor(id: number);
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerInputPacket implements $Packet<$ServerGamePacketListener> {
        isShiftKeyDown(): boolean;
        getZza(): number;
        getXxa(): number;
        type(): $PacketType<$ServerboundPlayerInputPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isJumping(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerInputPacket>;
        constructor(xxa: number, zza: number, isJumping: boolean, isShiftKeyDown: boolean);
        get shiftKeyDown(): boolean;
        get zza(): number;
        get xxa(): number;
        get jumping(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$PosRot extends $ClientboundMoveEntityPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$PosRot>;
        constructor(entityId: number, xa: number, ya: number, za: number, yRot: number, xRot: number, onGround: boolean);
    }
    export class $ClientboundSetExperiencePacket implements $Packet<$ClientGamePacketListener> {
        getExperienceProgress(): number;
        getTotalExperience(): number;
        getExperienceLevel(): number;
        type(): $PacketType<$ClientboundSetExperiencePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetExperiencePacket>;
        constructor(experienceProgress: number, totalExperience: number, experienceLevel: number);
        get experienceProgress(): number;
        get totalExperience(): number;
        get experienceLevel(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatEndPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerCombatEndPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerCombatEndPacket>;
        constructor(duration: number);
        constructor(combatTracker: $CombatTracker);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Entry extends $Record {
        chatSession(): $RemoteChatSession$Data;
        profile(): $GameProfile;
        displayName(): $Component;
        gameMode(): $GameType;
        profileId(): $UUID;
        latency(): number;
        listed(): boolean;
        constructor(arg0: $UUID_, arg1: $GameProfile | null, arg2: boolean, arg3: number, arg4: $GameType_, arg5: $Component_ | null, arg6: $RemoteChatSession$Data_ | null);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Entry}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Entry_ = { latency?: number, displayName?: $Component_, profileId?: $UUID_, gameMode?: $GameType_, listed?: boolean, chatSession?: $RemoteChatSession$Data_, profile?: $GameProfile,  } | [latency?: number, displayName?: $Component_, profileId?: $UUID_, gameMode?: $GameType_, listed?: boolean, chatSession?: $RemoteChatSession$Data_, profile?: $GameProfile, ];
    export class $ClientboundBlockDestructionPacket implements $Packet<$ClientGamePacketListener> {
        getProgress(): number;
        getPos(): $BlockPos;
        type(): $PacketType<$ClientboundBlockDestructionPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundBlockDestructionPacket>;
        constructor(id: number, pos: $BlockPos_, progress: number);
        get progress(): number;
        get pos(): $BlockPos;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetPlayerTeamPacket$Action extends $Enum<$ClientboundSetPlayerTeamPacket$Action> {
        static values(): $ClientboundSetPlayerTeamPacket$Action[];
        static valueOf(arg0: string): $ClientboundSetPlayerTeamPacket$Action;
        static ADD: $ClientboundSetPlayerTeamPacket$Action;
        static REMOVE: $ClientboundSetPlayerTeamPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetPlayerTeamPacket$Action}.
     */
    export type $ClientboundSetPlayerTeamPacket$Action_ = "add" | "remove";
    /**
     * @param showDeathScreen Set to false when the doImmediateRespawn gamerule is true
     */
    export class $ClientboundLoginPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        hardcore(): boolean;
        maxPlayers(): number;
        showDeathScreen(): boolean;
        doLimitedCrafting(): boolean;
        commonPlayerSpawnInfo(): $CommonPlayerSpawnInfo;
        enforcesSecureChat(): boolean;
        type(): $PacketType<$ClientboundLoginPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        levels(): $Set<$ResourceKey<$Level>>;
        reducedDebugInfo(): boolean;
        chunkRadius(): number;
        simulationDistance(): number;
        playerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLoginPacket>;
        constructor(playerId: number, hardcore: boolean, levels: $Set_<$ResourceKey_<$Level>>, maxPlayers: number, chunkRadius: number, simulationDistance: number, reducedDebugInfo: boolean, showDeathScreen: boolean, doLimitedCrafting: boolean, commonPlayerSpawnInfo: $CommonPlayerSpawnInfo_, enforcesSecureChat: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundLoginPacket}.
     */
    export type $ClientboundLoginPacket_ = { reducedDebugInfo?: boolean, chunkRadius?: number, doLimitedCrafting?: boolean, enforcesSecureChat?: boolean, levels?: $Set_<$ResourceKey_<$Level>>, simulationDistance?: number, commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo_, hardcore?: boolean, playerId?: number, showDeathScreen?: boolean, maxPlayers?: number,  } | [reducedDebugInfo?: boolean, chunkRadius?: number, doLimitedCrafting?: boolean, enforcesSecureChat?: boolean, levels?: $Set_<$ResourceKey_<$Level>>, simulationDistance?: number, commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo_, hardcore?: boolean, playerId?: number, showDeathScreen?: boolean, maxPlayers?: number, ];
    export class $ServerboundChatPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        salt(): number;
        lastSeenMessages(): $LastSeenMessages$Update;
        signature(): $MessageSignature;
        type(): $PacketType<$ServerboundChatPacket>;
        message(): string;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        timeStamp(): $Instant;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatPacket>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $MessageSignature_ | null, arg4: $LastSeenMessages$Update_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatPacket}.
     */
    export type $ServerboundChatPacket_ = { lastSeenMessages?: $LastSeenMessages$Update_, message?: string, signature?: $MessageSignature_, timeStamp?: $Instant, salt?: number,  } | [lastSeenMessages?: $LastSeenMessages$Update_, message?: string, signature?: $MessageSignature_, timeStamp?: $Instant, salt?: number, ];
    export class $ClientboundSetDefaultSpawnPositionPacket implements $Packet<$ClientGamePacketListener> {
        getAngle(): number;
        getPos(): $BlockPos;
        type(): $PacketType<$ClientboundSetDefaultSpawnPositionPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetDefaultSpawnPositionPacket>;
        constructor(pos: $BlockPos_, angle: number);
        get angle(): number;
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        packedItems(): $List<$SynchedEntityData$DataValue<never>>;
        type(): $PacketType<$ClientboundSetEntityDataPacket>;
        id(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static EOF_MARKER: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetEntityDataPacket>;
        constructor(arg0: number, arg1: $List_<$SynchedEntityData$DataValue_<never>>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetEntityDataPacket}.
     */
    export type $ClientboundSetEntityDataPacket_ = { packedItems?: $List_<$SynchedEntityData$DataValue_<never>>, id?: number,  } | [packedItems?: $List_<$SynchedEntityData$DataValue_<never>>, id?: number, ];
    export class $ClientboundPlayerInfoUpdatePacket$EntryBuilder {
    }
    export class $ClientboundTabListPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTabListPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        header(): $Component;
        footer(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundTabListPacket>;
        constructor(header: $Component_, footer: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundTabListPacket}.
     */
    export type $ClientboundTabListPacket_ = { header?: $Component_, footer?: $Component_,  } | [header?: $Component_, footer?: $Component_, ];
    export class $ClientboundSoundEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSoundEntityPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSource(): $SoundSource;
        getSeed(): number;
        getPitch(): number;
        getVolume(): number;
        getSound(): $Holder<$SoundEvent>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSoundEntityPacket>;
        constructor(sound: $Holder_<$SoundEvent>, source: $SoundSource_, entity: $Entity, volume: number, pitch: number, seed: number);
        get id(): number;
        get source(): $SoundSource;
        get seed(): number;
        get pitch(): number;
        get volume(): number;
        get sound(): $Holder<$SoundEvent>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenSignEditorPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        isFrontText(): boolean;
        type(): $PacketType<$ClientboundOpenSignEditorPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundOpenSignEditorPacket>;
        constructor(pos: $BlockPos_, isFrontText: boolean);
        get pos(): $BlockPos;
        get frontText(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRecipePacket$State extends $Enum<$ClientboundRecipePacket$State> {
        static values(): $ClientboundRecipePacket$State[];
        static valueOf(arg0: string): $ClientboundRecipePacket$State;
        static ADD: $ClientboundRecipePacket$State;
        static INIT: $ClientboundRecipePacket$State;
        static REMOVE: $ClientboundRecipePacket$State;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundRecipePacket$State}.
     */
    export type $ClientboundRecipePacket$State_ = "init" | "add" | "remove";
    export class $ClientboundExplodePacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getLargeExplosionParticles(): $ParticleOptions;
        getSmallExplosionParticles(): $ParticleOptions;
        getToBlow(): $List<$BlockPos>;
        getPower(): number;
        getExplosionSound(): $Holder<$SoundEvent>;
        getKnockbackZ(): number;
        getKnockbackX(): number;
        getKnockbackY(): number;
        type(): $PacketType<$ClientboundExplodePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getBlockInteraction(): $Explosion$BlockInteraction;
        getX(): number;
        getY(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundExplodePacket>;
        constructor(x: number, arg1: number, y: number, arg3: number, z: $List_<$BlockPos_>, arg5: $Vec3_ | null, power: $Explosion$BlockInteraction_, toBlow: $ParticleOptions_, knockback: $ParticleOptions_, blockInteraction: $Holder_<$SoundEvent>);
        get z(): number;
        get largeExplosionParticles(): $ParticleOptions;
        get smallExplosionParticles(): $ParticleOptions;
        get toBlow(): $List<$BlockPos>;
        get power(): number;
        get explosionSound(): $Holder<$SoundEvent>;
        get knockbackZ(): number;
        get knockbackX(): number;
        get knockbackY(): number;
        get blockInteraction(): $Explosion$BlockInteraction;
        get x(): number;
        get y(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $CommonPlayerSpawnInfo extends $Record {
        gameType(): $GameType;
        lastDeathLocation(): ($GlobalPos) | undefined;
        portalCooldown(): number;
        previousGameType(): $GameType;
        write(buffer: $RegistryFriendlyByteBuf): void;
        seed(): number;
        isDebug(): boolean;
        dimension(): $ResourceKey<$Level>;
        isFlat(): boolean;
        dimensionType(): $Holder<$DimensionType>;
        constructor(buffer: $RegistryFriendlyByteBuf);
        constructor(arg0: $Holder_<$DimensionType>, arg1: $ResourceKey_<$Level>, arg2: number, arg3: $GameType_, arg4: $GameType_ | null, arg5: boolean, arg6: boolean, arg7: ($GlobalPos_) | undefined, arg8: number);
        get debug(): boolean;
        get flat(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CommonPlayerSpawnInfo}.
     */
    export type $CommonPlayerSpawnInfo_ = { lastDeathLocation?: ($GlobalPos_) | undefined, dimension?: $ResourceKey_<$Level>, previousGameType?: $GameType_, portalCooldown?: number, seed?: number, dimensionType?: $Holder_<$DimensionType>, isFlat?: boolean, gameType?: $GameType_, isDebug?: boolean,  } | [lastDeathLocation?: ($GlobalPos_) | undefined, dimension?: $ResourceKey_<$Level>, previousGameType?: $GameType_, portalCooldown?: number, seed?: number, dimensionType?: $Holder_<$DimensionType>, isFlat?: boolean, gameType?: $GameType_, isDebug?: boolean, ];
    export class $ClientboundLevelChunkPacketData$BlockEntityInfo {
    }
    export class $ClientboundCustomChatCompletionsPacket$Action extends $Enum<$ClientboundCustomChatCompletionsPacket$Action> {
        static values(): $ClientboundCustomChatCompletionsPacket$Action[];
        static valueOf(arg0: string): $ClientboundCustomChatCompletionsPacket$Action;
        static ADD: $ClientboundCustomChatCompletionsPacket$Action;
        static SET: $ClientboundCustomChatCompletionsPacket$Action;
        static REMOVE: $ClientboundCustomChatCompletionsPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomChatCompletionsPacket$Action}.
     */
    export type $ClientboundCustomChatCompletionsPacket$Action_ = "add" | "remove" | "set";
    export class $ServerboundInteractPacket$InteractionAtLocationAction implements $ServerboundInteractPacket$Action {
    }
    export class $ServerboundPlayerActionPacket$Action extends $Enum<$ServerboundPlayerActionPacket$Action> {
        static values(): $ServerboundPlayerActionPacket$Action[];
        static valueOf(arg0: string): $ServerboundPlayerActionPacket$Action;
        static STOP_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
        static DROP_ALL_ITEMS: $ServerboundPlayerActionPacket$Action;
        static DROP_ITEM: $ServerboundPlayerActionPacket$Action;
        static RELEASE_USE_ITEM: $ServerboundPlayerActionPacket$Action;
        static ABORT_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
        static SWAP_ITEM_WITH_OFFHAND: $ServerboundPlayerActionPacket$Action;
        static START_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundPlayerActionPacket$Action}.
     */
    export type $ServerboundPlayerActionPacket$Action_ = "start_destroy_block" | "abort_destroy_block" | "stop_destroy_block" | "drop_all_items" | "drop_item" | "release_use_item" | "swap_item_with_offhand";
    export class $ServerboundSetJigsawBlockPacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        getName(): $ResourceLocation;
        type(): $PacketType<$ServerboundSetJigsawBlockPacket>;
        getPool(): $ResourceLocation;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getTarget(): $ResourceLocation;
        getJoint(): $JigsawBlockEntity$JointType;
        getSelectionPriority(): number;
        getFinalState(): string;
        getPlacementPriority(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetJigsawBlockPacket>;
        constructor(pos: $BlockPos_, name: $ResourceLocation_, target: $ResourceLocation_, pool: $ResourceLocation_, finalState: string, joint: $JigsawBlockEntity$JointType_, selectionPriority: number, placementPriority: number);
        get pos(): $BlockPos;
        get name(): $ResourceLocation;
        get pool(): $ResourceLocation;
        get target(): $ResourceLocation;
        get joint(): $JigsawBlockEntity$JointType;
        get selectionPriority(): number;
        get finalState(): string;
        get placementPriority(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$UpdateNameOperation extends $Record implements $ClientboundBossEventPacket$Operation {
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBossEventPacket$UpdateNameOperation}.
     */
    export type $ClientboundBossEventPacket$UpdateNameOperation_ = { name?: $Component_,  } | [name?: $Component_, ];
    export class $ServerboundSelectTradePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSelectTradePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getItem(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSelectTradePacket>;
        constructor(item: number);
        get item(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTeleportEntityPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        type(): $PacketType<$ClientboundTeleportEntityPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getX(): number;
        getY(): number;
        getxRot(): number;
        getyRot(): number;
        isOnGround(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTeleportEntityPacket>;
        constructor(entity: $Entity);
        get z(): number;
        get id(): number;
        get x(): number;
        get y(): number;
        get xRot(): number;
        get yRot(): number;
        get onGround(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket implements $Packet<$ClientGamePacketListener> {
        hasRotation(): boolean;
        type(): $PacketType<$ClientboundMoveEntityPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        hasPosition(): boolean;
        getEntity(level: $Level_): $Entity;
        getxRot(): number;
        getyRot(): number;
        isOnGround(): boolean;
        getXa(): number;
        getYa(): number;
        getZa(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        get xRot(): number;
        get yRot(): number;
        get onGround(): boolean;
        get xa(): number;
        get ya(): number;
        get za(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetDataPacket implements $Packet<$ClientGamePacketListener> {
        getContainerId(): number;
        type(): $PacketType<$ClientboundContainerSetDataPacket>;
        getValue(): number;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundContainerSetDataPacket>;
        constructor(containerId: number, id: number, value: number);
        get containerId(): number;
        get value(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDebugSamplePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        sample(): number[];
        debugSampleType(): $RemoteDebugSampleType;
        type(): $PacketType<$ClientboundDebugSamplePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundDebugSamplePacket>;
        constructor(arg0: number[], arg1: $RemoteDebugSampleType_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDebugSamplePacket}.
     */
    export type $ClientboundDebugSamplePacket_ = { debugSampleType?: $RemoteDebugSampleType_, sample?: number[],  } | [debugSampleType?: $RemoteDebugSampleType_, sample?: number[], ];
    export class $ClientboundContainerClosePacket implements $Packet<$ClientGamePacketListener> {
        getContainerId(): number;
        type(): $PacketType<$ClientboundContainerClosePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundContainerClosePacket>;
        constructor(containerId: number);
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$InteractionAction implements $ServerboundInteractPacket$Action {
    }
    export class $ClientboundLevelEventPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        isGlobalEvent(): boolean;
        type(): $PacketType<$ClientboundLevelEventPacket>;
        getType(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getData(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLevelEventPacket>;
        constructor(type: number, pos: $BlockPos_, data: number, globalEvent: boolean);
        get pos(): $BlockPos;
        get globalEvent(): boolean;
        get data(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLightUpdatePacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getLightData(): $ClientboundLightUpdatePacketData;
        type(): $PacketType<$ClientboundLightUpdatePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getX(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLightUpdatePacket>;
        constructor(chunkPos: $ChunkPos, lightEngine: $LevelLightEngine, skyLight: $BitSet | null, blockLight: $BitSet | null);
        get z(): number;
        get lightData(): $ClientboundLightUpdatePacketData;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundEditBookPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        pages(): $List<string>;
        slot(): number;
        type(): $PacketType<$ServerboundEditBookPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        title(): (string) | undefined;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static MAX_BYTES_PER_CHAR: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundEditBookPacket>;
        constructor(slot: number, pages: $List_<string>, title: (string) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundEditBookPacket}.
     */
    export type $ServerboundEditBookPacket_ = { title?: (string) | undefined, slot?: number, pages?: $List_<string>,  } | [title?: (string) | undefined, slot?: number, pages?: $List_<string>, ];
    export class $ClientboundSetChunkCacheRadiusPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetChunkCacheRadiusPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getRadius(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetChunkCacheRadiusPacket>;
        constructor(radius: number);
        get radius(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTagQueryPacket implements $Packet<$ClientGamePacketListener> {
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        getTransactionId(): number;
        type(): $PacketType<$ClientboundTagQueryPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getTag(): $CompoundTag;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTagQueryPacket>;
        constructor(transactionId: number, tag: $CompoundTag_ | null);
        get skippable(): boolean;
        get transactionId(): number;
        get tag(): $CompoundTag;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkWithLightPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getChunkData(): $ClientboundLevelChunkPacketData;
        getLightData(): $ClientboundLightUpdatePacketData;
        type(): $PacketType<$ClientboundLevelChunkWithLightPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getX(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelChunkWithLightPacket>;
        constructor(chunk: $LevelChunk, lightEngine: $LevelLightEngine, skyLight: $BitSet | null, blockLight: $BitSet | null);
        get z(): number;
        get chunkData(): $ClientboundLevelChunkPacketData;
        get lightData(): $ClientboundLightUpdatePacketData;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChunkBatchReceivedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        desiredChunksPerTick(): number;
        type(): $PacketType<$ServerboundChunkBatchReceivedPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChunkBatchReceivedPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChunkBatchReceivedPacket}.
     */
    export type $ServerboundChunkBatchReceivedPacket_ = { desiredChunksPerTick?: number,  } | [desiredChunksPerTick?: number, ];
    export class $ClientboundCommandsPacket$NodeResolver {
    }
    export class $ServerboundPickItemPacket implements $Packet<$ServerGamePacketListener> {
        getSlot(): number;
        type(): $PacketType<$ServerboundPickItemPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPickItemPacket>;
        constructor(slot: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundServerDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        iconBytes(): (number[]) | undefined;
        type(): $PacketType<$ClientboundServerDataPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        motd(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundServerDataPacket>;
        constructor(motd: $Component_, iconBytes: (number[]) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundServerDataPacket}.
     */
    export type $ClientboundServerDataPacket_ = { iconBytes?: (number[]) | undefined, motd?: $Component_,  } | [iconBytes?: (number[]) | undefined, motd?: $Component_, ];
    export class $ClientboundChunksBiomesPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        chunkBiomeData(): $List<$ClientboundChunksBiomesPacket$ChunkBiomeData>;
        static forChunks(chunks: $List_<$LevelChunk>): $ClientboundChunksBiomesPacket;
        type(): $PacketType<$ClientboundChunksBiomesPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChunksBiomesPacket>;
        constructor(arg0: $List_<$ClientboundChunksBiomesPacket$ChunkBiomeData_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundChunksBiomesPacket}.
     */
    export type $ClientboundChunksBiomesPacket_ = { chunkBiomeData?: $List_<$ClientboundChunksBiomesPacket$ChunkBiomeData_>,  } | [chunkBiomeData?: $List_<$ClientboundChunksBiomesPacket$ChunkBiomeData_>, ];
    export class $ClientboundRemoveEntitiesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRemoveEntitiesPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntityIds(): $IntList;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRemoveEntitiesPacket>;
        constructor(...entityIds: number[]);
        constructor(entityIds: $IntList);
        get entityIds(): $IntList;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundUseItemPacket implements $Packet<$ServerGamePacketListener> {
        getHand(): $InteractionHand;
        type(): $PacketType<$ServerboundUseItemPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getSequence(): number;
        getYRot(): number;
        getXRot(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundUseItemPacket>;
        constructor(hand: $InteractionHand_, sequence: number, yRot: number, xRot: number);
        get hand(): $InteractionHand;
        get sequence(): number;
        get YRot(): number;
        get XRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * PacketListener for the client side of the PLAY protocol.
     */
    export class $ClientGamePacketListener {
    }
    export interface $ClientGamePacketListener extends $ClientPongPacketListener, $ClientCommonPacketListener {
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing,...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        /**
         * Registers some server properties (gametype,hardcore-mode,terraintype,difficulty,player limit), creates a new WorldClient and sets the player initial dimension
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        /**
         * Updates the specified entity's position by the specified relative moment and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        protocol(): $ConnectionProtocol;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
    }
    export class $ClientboundSetBorderCenterPacket implements $Packet<$ClientGamePacketListener> {
        getNewCenterZ(): number;
        getNewCenterX(): number;
        type(): $PacketType<$ClientboundSetBorderCenterPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderCenterPacket>;
        constructor(worldBorder: $WorldBorder);
        get newCenterZ(): number;
        get newCenterX(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerClickPacket implements $Packet<$ServerGamePacketListener> {
        getStateId(): number;
        getContainerId(): number;
        getCarriedItem(): $ItemStack;
        getSlotNum(): number;
        getClickType(): $ClickType;
        getChangedSlots(): $Int2ObjectMap<$ItemStack>;
        getButtonNum(): number;
        type(): $PacketType<$ServerboundContainerClickPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundContainerClickPacket>;
        constructor(containerId: number, stateId: number, slotNum: number, buttonNum: number, clickType: $ClickType_, carriedItem: $ItemStack_, changedSlots: $Int2ObjectMap<$ItemStack_>);
        get stateId(): number;
        get containerId(): number;
        get carriedItem(): $ItemStack;
        get slotNum(): number;
        get clickType(): $ClickType;
        get changedSlots(): $Int2ObjectMap<$ItemStack>;
        get buttonNum(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAnimatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundAnimatePacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getAction(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static CRITICAL_HIT: number;
        static MAGIC_CRITICAL_HIT: number;
        static SWING_MAIN_HAND: number;
        static SWING_OFF_HAND: number;
        static WAKE_UP: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundAnimatePacket>;
        constructor(entity: $Entity, action: number);
        get id(): number;
        get action(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerPacketListener {
        static LOGGER: $Logger;
    }
    export interface $ServerPacketListener extends $ServerboundPacketListener {
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
    }
    export class $ServerboundSeenAdvancementsPacket$Action extends $Enum<$ServerboundSeenAdvancementsPacket$Action> {
        static values(): $ServerboundSeenAdvancementsPacket$Action[];
        static valueOf(arg0: string): $ServerboundSeenAdvancementsPacket$Action;
        static OPENED_TAB: $ServerboundSeenAdvancementsPacket$Action;
        static CLOSED_SCREEN: $ServerboundSeenAdvancementsPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSeenAdvancementsPacket$Action}.
     */
    export type $ServerboundSeenAdvancementsPacket$Action_ = "opened_tab" | "closed_screen";
}
