import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $List, $List_, $Collection } from "@package/java/util";
import { $StationMapData, $StationBlockEntity, $StationMarker } from "@package/com/simibubi/create/content/trains/station";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/level/saveddata/maps" {
    export class $MapBanner extends $Record {
        name(): ($Component) | undefined;
        getId(): string;
        color(): $DyeColor;
        pos(): $BlockPos;
        getDecoration(): $Holder<$MapDecorationType>;
        static fromWorld(level: $BlockGetter, pos: $BlockPos_): $MapBanner;
        static CODEC: $Codec<$MapBanner>;
        static LIST_CODEC: $Codec<$List<$MapBanner>>;
        constructor(arg0: $BlockPos_, arg1: $DyeColor_, arg2: ($Component_) | undefined);
        get id(): string;
        get decoration(): $Holder<$MapDecorationType>;
    }
    /**
     * Values that may be interpreted as {@link $MapBanner}.
     */
    export type $MapBanner_ = { name?: ($Component_) | undefined, color?: $DyeColor_, pos?: $BlockPos_,  } | [name?: ($Component_) | undefined, color?: $DyeColor_, pos?: $BlockPos_, ];
    export class $MapItemSavedData$MapPatch extends $Record {
        width(): number;
        height(): number;
        startX(): number;
        startY(): number;
        applyToMap(savedData: $MapItemSavedData): void;
        mapColors(): number[];
        static STREAM_CODEC: $StreamCodec<$ByteBuf, ($MapItemSavedData$MapPatch) | undefined>;
        constructor(startX: number, startY: number, width: number, height: number, mapColors: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MapItemSavedData$MapPatch}.
     */
    export type $MapItemSavedData$MapPatch_ = { startX?: number, height?: number, mapColors?: number[], width?: number, startY?: number,  } | [startX?: number, height?: number, mapColors?: number[], width?: number, startY?: number, ];
    export class $MapFrame {
        static load(compoundTag: $CompoundTag_): $MapFrame;
        getId(): string;
        save(): $CompoundTag;
        getRotation(): number;
        getPos(): $BlockPos;
        getEntityId(): number;
        static frameId(pos: $BlockPos_): string;
        constructor(pos: $BlockPos_, rotation: number, entityId: number);
        get id(): string;
        get rotation(): number;
        get pos(): $BlockPos;
        get entityId(): number;
    }
    export class $MapIndex extends $SavedData {
        static load(tag: $CompoundTag_, registries: $HolderLookup$Provider): $MapIndex;
        static factory(): $SavedData$Factory<$MapIndex>;
        getFreeAuxValueForMap(): $MapId;
        static FILE_NAME: string;
        constructor();
        get freeAuxValueForMap(): $MapId;
    }
    export class $MapDecorationTypes {
        static bootstrap(registry: $Registry<$MapDecorationType_>): $Holder<$MapDecorationType>;
        static BLUE_MARKER: $Holder<$MapDecorationType>;
        static TARGET_POINT: $Holder<$MapDecorationType>;
        static BLUE_BANNER: $Holder<$MapDecorationType>;
        static LIGHT_BLUE_BANNER: $Holder<$MapDecorationType>;
        static SWAMP_HUT: $Holder<$MapDecorationType>;
        static FRAME: $Holder<$MapDecorationType>;
        static BLACK_BANNER: $Holder<$MapDecorationType>;
        static MAGENTA_BANNER: $Holder<$MapDecorationType>;
        static PLAINS_VILLAGE: $Holder<$MapDecorationType>;
        static PINK_BANNER: $Holder<$MapDecorationType>;
        static WOODLAND_MANSION: $Holder<$MapDecorationType>;
        static YELLOW_BANNER: $Holder<$MapDecorationType>;
        static RED_MARKER: $Holder<$MapDecorationType>;
        static DESERT_VILLAGE: $Holder<$MapDecorationType>;
        static TRIAL_CHAMBERS: $Holder<$MapDecorationType>;
        static PLAYER_OFF_LIMITS: $Holder<$MapDecorationType>;
        static ORANGE_BANNER: $Holder<$MapDecorationType>;
        static PURPLE_BANNER: $Holder<$MapDecorationType>;
        static TARGET_X: $Holder<$MapDecorationType>;
        static BROWN_BANNER: $Holder<$MapDecorationType>;
        static RED_X: $Holder<$MapDecorationType>;
        static RED_BANNER: $Holder<$MapDecorationType>;
        static GRAY_BANNER: $Holder<$MapDecorationType>;
        static JUNGLE_TEMPLE: $Holder<$MapDecorationType>;
        static OCEAN_MONUMENT: $Holder<$MapDecorationType>;
        static LIGHT_GRAY_BANNER: $Holder<$MapDecorationType>;
        static CYAN_BANNER: $Holder<$MapDecorationType>;
        static GREEN_BANNER: $Holder<$MapDecorationType>;
        static PLAYER: $Holder<$MapDecorationType>;
        static PLAYER_OFF_MAP: $Holder<$MapDecorationType>;
        static WHITE_BANNER: $Holder<$MapDecorationType>;
        static LIME_BANNER: $Holder<$MapDecorationType>;
        static SAVANNA_VILLAGE: $Holder<$MapDecorationType>;
        static SNOWY_VILLAGE: $Holder<$MapDecorationType>;
        static TAIGA_VILLAGE: $Holder<$MapDecorationType>;
        constructor();
    }
    export class $MapId extends $Record {
        id(): number;
        key(): string;
        static CODEC: $Codec<$MapId>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapId>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $MapId}.
     */
    export type $MapId_ = { id?: number,  } | [id?: number, ];
    export class $MapItemSavedData extends $SavedData implements $StationMapData {
        handler$dkb000$create$onCheckBanners(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        addClientSideDecorations(decorations: $List_<$MapDecoration_>): void;
        addStationMarker(arg0: $StationMarker): void;
        addDecoration(decorationType: $Holder_<$MapDecorationType>, level: $LevelAccessor | null, id: string, x: number, arg4: number, z: number, arg6: $Component_ | null): void;
        removeDecoration(identifier: string): void;
        static load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): $MapItemSavedData;
        static factory(): $SavedData$Factory<$MapItemSavedData>;
        setColor(x: number, z: number, color: number): void;
        getDecorations(): $Iterable<$MapDecoration>;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        scaled(): $MapItemSavedData;
        getUpdatePacket(mapId: $MapId_, player: $Player): $Packet<never>;
        locked(): $MapItemSavedData;
        static createFresh(x: number, arg1: number, z: number, arg3: boolean, scale: boolean, trackingPosition: $ResourceKey_<$Level>): $MapItemSavedData;
        getHoldingPlayer(player: $Player): $MapItemSavedData$HoldingPlayer;
        checkBanners(reader: $BlockGetter, x: number, z: number): void;
        updateColor(x: number, z: number, color: number): boolean;
        /**
         * Adds the player passed to the list of visible players and checks to see which players are visible
         */
        tickCarriedBy(player: $Player, mapStack: $ItemStack_): void;
        toggleBanner(accessor: $LevelAccessor, pos: $BlockPos_): boolean;
        isTrackedCountOverLimit(trackedCount: number): boolean;
        static addTargetDecoration(stack: $ItemStack_, pos: $BlockPos_, type: string, mapDecorationType: $Holder_<$MapDecorationType>): void;
        removedFromFrame(pos: $BlockPos_, entityId: number): void;
        /**
         * Whether this `SavedData` needs saving to disk.
         */
        isExplorationMap(): boolean;
        static createForClient(scale: number, locked: boolean, dimension: $ResourceKey_<$Level>): $MapItemSavedData;
        getBanners(): $Collection<$MapBanner>;
        centerZ: number;
        static TRACKED_DECORATION_LIMIT: number;
        centerX: number;
        scale: number;
        static MAX_SCALE: number;
        dimension: $ResourceKey<$Level>;
        colors: number[];
        get decorations(): $Iterable<$MapDecoration>;
        get explorationMap(): boolean;
        get banners(): $Collection<$MapBanner>;
    }
    export class $MapDecorationType extends $Record {
        assetId(): $ResourceLocation;
        mapColor(): number;
        explorationMapElement(): boolean;
        trackCount(): boolean;
        hasMapColor(): boolean;
        showOnItemFrame(): boolean;
        static CODEC: $Codec<$Holder<$MapDecorationType>>;
        static NO_MAP_COLOR: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MapDecorationType>>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MapDecorationType}.
     */
    export type $MapDecorationType_ = RegistryTypes.MapDecorationType | { trackCount?: boolean, showOnItemFrame?: boolean, mapColor?: number, assetId?: $ResourceLocation_, explorationMapElement?: boolean,  } | [trackCount?: boolean, showOnItemFrame?: boolean, mapColor?: number, assetId?: $ResourceLocation_, explorationMapElement?: boolean, ];
    export class $MapDecoration extends $Record {
        renderOnFrame(): boolean;
        name(): ($Component) | undefined;
        type(): $Holder<$MapDecorationType>;
        x(): number;
        y(): number;
        rot(): number;
        getSpriteLocation(): $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MapDecoration>;
        constructor(type: $Holder_<$MapDecorationType>, x: number, y: number, rot: number, name: ($Component_) | undefined);
        get spriteLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MapDecoration}.
     */
    export type $MapDecoration_ = { x?: number, name?: ($Component_) | undefined, type?: $Holder_<$MapDecorationType>, y?: number, rot?: number,  } | [x?: number, name?: ($Component_) | undefined, type?: $Holder_<$MapDecorationType>, y?: number, rot?: number, ];
    export class $MapItemSavedData$HoldingPlayer {
        step: number;
        player: $Player;
    }
    export interface $MapDecorationType extends RegistryMarked<RegistryTypes.MapDecorationTypeTag, RegistryTypes.MapDecorationType> {}
}
