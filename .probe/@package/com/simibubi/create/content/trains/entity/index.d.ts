import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $ElectricTrainData } from "@package/com/george_vi/electroenergetics/content/railway_electrification";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ScheduleRuntime } from "@package/com/simibubi/create/content/trains/schedule";
import { $UUID_, $ArrayList, $Map, $Map$Entry, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $WeakReference } from "@package/java/lang/ref";
import { $Consumer_, $BiFunction, $Predicate, $BiConsumer, $BiConsumer_, $BiPredicate } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $AbstractContraptionEntity, $Contraption, $OrientedContraptionEntity, $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";
import { $DimensionPalette, $TrackNode, $TrackNodeLocation, $TrackEdge, $TrackGraph, $DiscoveredPath, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $TrainPantographEntry } from "@package/com/george_vi/electroenergetics/content/railway_electrification/pantograph";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $ICEETrainExtension, $IPantographList } from "@package/com/george_vi/electroenergetics/mixin_interfaces";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $TrainCargoManager } from "@package/com/simibubi/create/content/contraptions/minecart";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BogeySizes$BogeySize, $BogeyStyle, $AbstractBogeyBlock } from "@package/com/simibubi/create/content/trains/bogey";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ElectricTrainSoundType_, $ElectricTrainSoundType } from "@package/com/george_vi/electroenergetics/content/railway_electrification/sound_effects/sound_types";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/entity" {
    export class $CarriageContraptionEntity extends $OrientedContraptionEntity {
        static create(arg0: $Level_, arg1: $CarriageContraption): $CarriageContraptionEntity;
        getCarriageData(): $CarriageSyncData;
        checkConductors(): $Couple<boolean>;
        setCarriage(arg0: $Carriage): void;
        syncCarriage(): void;
        isLocalCoordWithin(arg0: $BlockPos_, arg1: number, arg2: number): boolean;
        setServerSidePrevPosition(): void;
        updateRenderedPortalCutoff(): void;
        hasSchedule(): boolean;
        getCarriage(): $Carriage;
        carriageIndex: number;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        pitch: number;
        particles: $CarriageParticles;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        trainId: $UUID;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        prevYaw: number;
        zo: number;
        walkDist: number;
        movingBackwards: boolean;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        leftTickingChunks: boolean;
        staleTicks: number;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        prevPitch: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        sounds: $CarriageSounds;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yaw: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        firstPositionUpdate: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        validForRender: boolean;
        nonDamageTicks: number;
        targetYaw: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get carriageData(): $CarriageSyncData;
    }
    export class $Navigation$StationTest {
    }
    export interface $Navigation$StationTest {
        test(arg0: number, arg1: number, arg2: $Map_<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Navigation$StationTest}.
     */
    export type $Navigation$StationTest_ = ((arg0: number, arg1: number, arg2: $Map<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation) => boolean);
    export class $Carriage$DimensionalCarriageEntity {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        alignEntity(arg0: $CarriageContraptionEntity): void;
        findPivot(arg0: $ResourceKey_<$Level>, arg1: boolean): $TrackNodeLocation;
        updateRenderedCutoff(): void;
        maxAllowedLocalCoord(): number;
        minAllowedLocalCoord(): number;
        updatePassengerLoadout(): void;
        leadingAnchor(): $Vec3;
        trailingAnchor(): $Vec3;
        updateCutoff(arg0: boolean): void;
        discardPivot(): void;
        pointsInitialised: boolean;
        pivot: $TrackNodeLocation;
        rotationAnchors: $Couple<$Vec3>;
        cutoff: number;
        positionAnchor: $Vec3;
        entity: $WeakReference<$CarriageContraptionEntity>;
        constructor(arg0: $Carriage);
    }
    export class $TrainIconType {
        static getDefault(): $TrainIconType;
        static register(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number): void;
        getId(): $ResourceLocation;
        getIconWidth(arg0: number): number;
        render(arg0: number, arg1: $GuiGraphics, arg2: number, arg3: number): number;
        static byId(arg0: $ResourceLocation_): $TrainIconType;
        getIconOffset(arg0: number): number;
        static FLIPPED_ENGINE: number;
        static ENGINE: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainIconType>;
        static REGISTRY: $Map<$ResourceLocation, $TrainIconType>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number);
        static get default(): $TrainIconType;
        get id(): $ResourceLocation;
    }
    export class $TrainStatus {
        crash(): void;
        manualControls(): void;
        tick(arg0: $Level_): void;
        addMessage(arg0: $TrainStatus$StatusMessage_): void;
        endOfTrack(): void;
        trackOK(): void;
        highStress(): void;
        missingConductor(): void;
        failedNavigation(): void;
        failedNavigationNoTarget(arg0: string): void;
        failedPackageNoTarget(arg0: string): void;
        successfulMigration(): void;
        failedMigration(): void;
        doublePortal(): void;
        displayInformation(arg0: string, arg1: boolean, ...arg2: $Object[]): void;
        foundConductor(): void;
        newSchedule(): void;
        successfulNavigation(): void;
        missingCorrectConductor(): void;
        navigation: boolean;
        track: boolean;
        conductor: boolean;
        constructor(arg0: $Train);
    }
    export class $Carriage implements $IPantographList {
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $TrackGraph, arg3: $DimensionPalette): $Carriage;
        getDimensional(arg0: $Level_): $Carriage$DimensionalCarriageEntity;
        getDimensional(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        alignEntity(arg0: $Level_): void;
        isOnTwoBogeys(): boolean;
        updateConductors(): void;
        presentInMultipleDimensions(): boolean;
        anyAvailableDimensionalCarriage(): $Pair<$ResourceKey<$Level>, $Carriage$DimensionalCarriageEntity>;
        setContraption(arg0: $Level_, arg1: $CarriageContraption): void;
        electroEnergetics$setPantographList(arg0: $List_<any>): void;
        electroEnergetics$getSoundModifyingBlocks(): $Set<any>;
        electroEnergetics$getPantographList(): $List<any>;
        travel(arg0: $Level_, arg1: $TrackGraph, arg2: number, arg3: $TravellingPoint, arg4: $TravellingPoint, arg5: number): number;
        setTrain(arg0: $Train): void;
        electroEnergetics$setAccumulators(arg0: number): void;
        electroEnergetics$hasElectricMotor(): boolean;
        electroEnergetics$getAccumulators(): number;
        electroEnergetics$setElectricMotor(arg0: boolean): void;
        updateContraptionAnchors(): void;
        forEachPresentEntity(arg0: $Consumer_<$CarriageContraptionEntity>): void;
        electroEnergetics$hasCreativeElectricalSource(): boolean;
        isOnIncompatibleTrack(): boolean;
        anyAvailableEntity(): $CarriageContraptionEntity;
        getTrailingPoint(): $TravellingPoint;
        leadingBogey(): $CarriageBogey;
        trailingBogey(): $CarriageBogey;
        getLeadingPoint(): $TravellingPoint;
        getDimensionalIfPresent(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        getAnchorDiff(): number;
        manageEntities(arg0: $Level_): void;
        handler$fmb000$electroenergetics$setElectroEnergetics$setTrain(arg0: $Train, arg1: $CallbackInfo): void;
        handler$fmb000$electroenergetics$electroEnergetics$setContraption(arg0: $Level_, arg1: $CarriageContraption, arg2: $CallbackInfo): void;
        handler$fmb000$electroenergetics$electroEnergetics$write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        getPantographState(arg0: $BlockPos_): $TrainPantographEntry;
        changePantographState(arg0: $BlockPos_, arg1: boolean): void;
        presentConductors: $Couple<boolean>;
        bogeys: $Couple<$CarriageBogey>;
        electroEnergetics$hasMotor: boolean;
        electroEnergetics$soundModifyingBlocks: $Set<any>;
        static netIdGenerator: $AtomicInteger;
        storage: $TrainCargoManager;
        electroEnergetics$pantographs: $List<any>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Carriage>;
        blocked: boolean;
        stalled: boolean;
        id: number;
        bogeySpacing: number;
        train: $Train;
        constructor(arg0: $CarriageBogey, arg1: $CarriageBogey, arg2: number);
        get onTwoBogeys(): boolean;
        get onIncompatibleTrack(): boolean;
        get trailingPoint(): $TravellingPoint;
        get leadingPoint(): $TravellingPoint;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
        get anchorDiff(): number;
    }
    export class $CarriageParticles {
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $ArrivalSoundQueue {
        add(arg0: number, arg1: $BlockPos_): void;
        static isPlayable(arg0: $BlockState_): boolean;
        deserialize(arg0: $CompoundTag_): void;
        serialize(arg0: $CompoundTag_): void;
        tick(arg0: $CarriageContraptionEntity, arg1: number, arg2: boolean): boolean;
        static play(arg0: $CarriageContraptionEntity, arg1: $StructureTemplate$StructureBlockInfo_): void;
        firstTick(): number;
        lastTick(): number;
        getFirstWhistle(arg0: $CarriageContraptionEntity): $Pair<boolean, number>;
        offset: number;
        constructor();
    }
    export class $Navigation {
        write(arg0: $DimensionPalette): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): void;
        isActive(): boolean;
        search(arg0: number, arg1: number, arg2: boolean, arg3: $ArrayList<$GlobalStation>, arg4: $Navigation$StationTest_): void;
        search(arg0: number, arg1: boolean, arg2: $ArrayList<$GlobalStation>, arg3: $Navigation$StationTest_): void;
        control(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        cancelNavigation(): void;
        startNavigation(arg0: $DiscoveredPath): number;
        tick(arg0: $Level_): void;
        findNearestApproachable(arg0: boolean): $GlobalStation;
        findPathTo(arg0: $ArrayList<$GlobalStation>, arg1: number): $DiscoveredPath;
        findPathTo(arg0: $GlobalStation, arg1: number): $DiscoveredPath;
        controlSignalScout(): $TravellingPoint$ITrackSelector;
        distanceToDestination: number;
        destination: $GlobalStation;
        announceArrival: boolean;
        ticksWaitingForSignal: number;
        waitingForSignal: $Pair<$UUID, boolean>;
        distanceStartedAt: number;
        destinationBehindTrain: boolean;
        distanceToSignal: number;
        train: $Train;
        constructor(arg0: $Train);
        get active(): boolean;
    }
    export class $TravellingPoint$ITrackSelector {
    }
    export interface $TravellingPoint$ITrackSelector extends $BiFunction<$TrackGraph, $Pair<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, $Map$Entry<$TrackNode, $TrackEdge>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITrackSelector}.
     */
    export type $TravellingPoint$ITrackSelector_ = (() => void);
    export class $TravellingPoint$SteerDirection extends $Enum<$TravellingPoint$SteerDirection> {
        static values(): $TravellingPoint$SteerDirection[];
        static valueOf(arg0: string): $TravellingPoint$SteerDirection;
        static LEFT: $TravellingPoint$SteerDirection;
        static RIGHT: $TravellingPoint$SteerDirection;
        static NONE: $TravellingPoint$SteerDirection;
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$SteerDirection}.
     */
    export type $TravellingPoint$SteerDirection_ = "none" | "left" | "right";
    export class $TrainStatus$StatusMessage extends $Record {
        messages(): $Component[];
        displayToPlayer(arg0: $Player): void;
        constructor(...messages: $Component_[]);
    }
    /**
     * Values that may be interpreted as {@link $TrainStatus$StatusMessage}.
     */
    export type $TrainStatus$StatusMessage_ = { messages?: $Component_[],  } | [messages?: $Component_[], ];
    export class $TravellingPoint$IEdgePointListener {
    }
    export interface $TravellingPoint$IEdgePointListener extends $BiPredicate<number, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IEdgePointListener}.
     */
    export type $TravellingPoint$IEdgePointListener_ = (() => void);
    export class $CarriageContraption extends $Contraption implements $IPantographList {
        setSoundQueueOffset(arg0: number): void;
        hasBackwardControls(): boolean;
        notInPortal(): boolean;
        electroEnergetics$setPantographList(arg0: $List_<any>): void;
        electroEnergetics$getSoundModifyingBlocks(): $Set<any>;
        electroEnergetics$getPantographList(): $List<any>;
        inControl(arg0: $BlockPos_, arg1: $Direction_): boolean;
        electroEnergetics$setAccumulators(arg0: number): void;
        electroEnergetics$hasElectricMotor(): boolean;
        returnStorageForDisassembly(arg0: $MountedStorageManager): void;
        electroEnergetics$getAccumulators(): number;
        electroEnergetics$setElectricMotor(arg0: boolean): void;
        handler$fma000$electroenergetics$electroEnergetics$capture(arg0: $Level_, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        swapStorageAfterAssembly(arg0: $CarriageContraptionEntity): void;
        electroEnergetics$hasCreativeElectricalSource(): boolean;
        getAssemblyDirection(): $Direction;
        hasForwardControls(): boolean;
        withinVisible(arg0: number): boolean;
        withinVisible(arg0: $BlockPos_): boolean;
        getSecondBogeyPos(): $BlockPos;
        isHiddenInPortal(arg0: number): boolean;
        atSeam(arg0: $BlockPos_): boolean;
        atSeam(arg0: number): boolean;
        getPantographState(arg0: $BlockPos_): $TrainPantographEntry;
        changePantographState(arg0: $BlockPos_, arg1: boolean): void;
        electroEnergetics$hasMotor: boolean;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        electroEnergetics$soundModifyingBlocks: $Set<any>;
        electroEnergetics$sidewaysPantograph: boolean;
        conductorSeats: $Map<$BlockPos, $Couple<boolean>>;
        portalCutoffMax: number;
        electroEnergetics$pantographs: $List<any>;
        simplifiedEntityColliders: $CollisionList;
        soundQueue: $ArrivalSoundQueue;
        electroEnergetics$hasCreativeSource: boolean;
        blockConductors: $Couple<boolean>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        portalCutoffMin: number;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor(arg0: $Direction_);
        constructor();
        set soundQueueOffset(value: number);
        get assemblyDirection(): $Direction;
        get secondBogeyPos(): $BlockPos;
    }
    export class $CarriageBogey {
        getSize(): $BogeySizes$BogeySize;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $CarriageBogey;
        trailing(): $TravellingPoint;
        getDimension(): $ResourceKey<$Level>;
        updateAngles(arg0: $CarriageContraptionEntity, arg1: number): void;
        leading(): $TravellingPoint;
        getStyle(): $BogeyStyle;
        getStress(): number;
        isUpsideDown(): boolean;
        updateCouplingAnchor(arg0: $Vec3_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        getAnchorPosition(arg0: boolean): $Vec3;
        getAnchorPosition(): $Vec3;
        bogeyData: $CompoundTag;
        carriage: $Carriage;
        static UPSIDE_DOWN_KEY: string;
        couplingAnchors: $Couple<$Vec3>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CarriageBogey>;
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_);
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_, arg3: $TravellingPoint, arg4: $TravellingPoint);
        get size(): $BogeySizes$BogeySize;
        get dimension(): $ResourceKey<$Level>;
        get style(): $BogeyStyle;
        get stress(): number;
        get upsideDown(): boolean;
    }
    export class $TravellingPoint$IPortalListener {
    }
    export interface $TravellingPoint$IPortalListener extends $Predicate<$Couple<$TrackNodeLocation>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IPortalListener}.
     */
    export type $TravellingPoint$IPortalListener_ = (() => void);
    export class $CarriageSyncData {
        update(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        apply(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $CarriageSyncData;
        isDirty(): boolean;
        approach(arg0: $CarriageContraptionEntity, arg1: $Carriage, arg2: number): void;
        setDirty(arg0: boolean): void;
        getDistanceTo(arg0: $TrackGraph, arg1: $TravellingPoint, arg2: $TravellingPoint, arg3: number, arg4: boolean): number;
        distanceToDestination: number;
        leadingCarriage: boolean;
        wheelLocations: $List<$Pair<$Couple<number>, number>>;
        fallbackLocations: $Pair<$Vec3, $Couple<$Vec3>>;
        constructor();
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $Train implements $ICEETrainExtension {
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Map_<$UUID_, $TrackGraph>, arg3: $DimensionPalette): $Train;
        getOwner(arg0: $Level_): $LivingEntity;
        crash(): void;
        getCurrentStation(): $GlobalStation;
        maxTurnSpeed(): number;
        tick(arg0: $Level_): void;
        forEachTravellingPointBackwards(arg0: $BiConsumer_<$TravellingPoint, number>): void;
        setSoundType(arg0: $ElectricTrainSoundType_): void;
        disassemble(arg0: $Direction_, arg1: $BlockPos_): boolean;
        getTotalLength(): number;
        countPlayerPassengers(): number;
        getSoundType(): $ElectricTrainSoundType;
        earlyTick(arg0: $Level_): void;
        arriveAt(arg0: $GlobalStation): void;
        canDisassemble(): boolean;
        shouldCarriageSyncThisTick(arg0: number, arg1: number): boolean;
        approachTargetSpeed(arg0: number): void;
        getElectricTrainData(): $ElectricTrainData;
        setCurrentStation(arg0: $GlobalStation): void;
        cancelStall(): void;
        hasBackwardConductor(): boolean;
        hasForwardConductor(): boolean;
        getNavigationPenalty(): number;
        forEachTravellingPoint(arg0: $Consumer_<$TravellingPoint>): void;
        getSoundModifyingBlocks(): $Set<any>;
        frontSignalListener(): $TravellingPoint$IEdgePointListener;
        distanceToLocationSqr(arg0: $Level_, arg1: $Vec3_): number;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        collectInitiallyOccupiedSignalBlocks(): void;
        backSignalListener(): $TravellingPoint$IEdgePointListener;
        reattachToTracks(arg0: $Level_): void;
        findCollidingTrain(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: $ResourceKey_<$Level>): $Pair<$Train, $Vec3>;
        getEndpointEdges(): $Couple<$Couple<$TrackNode>>;
        detachFromTracks(): void;
        isTravellingOn(arg0: $TrackNode): boolean;
        leaveStation(): void;
        determineHonk(arg0: $Level_): void;
        maxSpeed(): number;
        burnFuel(): void;
        acceleration(): number;
        wrapMethod$fmi000$electroenergetics$electroEnergetics$write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider, arg2: $Operation_<any>): $CompoundTag;
        throttle: number;
        lowHonk: boolean;
        speedBeforeStall: number;
        icon: $TrainIconType;
        electroEnergetics$soundModifyingBlocks: $Set<any>;
        doubleEnded: boolean;
        backwardsDriver: $Player;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Train>;
        speed: number;
        manualTick: boolean;
        currentlyBackwards: boolean;
        honkPitch: number;
        navigation: $Navigation;
        carriages: $List<$Carriage>;
        currentStation: $UUID;
        honkTicks: number;
        id: $UUID;
        owner: $UUID;
        targetSpeed: number;
        occupiedSignalBlocks: $Map<$UUID, $UUID>;
        carriageWaitingForChunks: number;
        accumulatedSteamRelease: number;
        reservedSignalBlocks: $Set<$UUID>;
        updateSignalBlocks: boolean;
        migrationCooldown: number;
        runtime: $ScheduleRuntime;
        occupiedObservers: $Set<$UUID>;
        derailed: boolean;
        carriageSpacing: $List<number>;
        graph: $TrackGraph;
        cachedObserverFiltering: $Map<$UUID, $Pair<number, boolean>>;
        honk: boolean;
        mapColorIndex: number;
        name: $Component;
        invalid: boolean;
        status: $TrainStatus;
        manualSteer: $TravellingPoint$SteerDirection;
        fuelTicks: number;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: $Component_, arg7: $TrainIconType, arg8: number);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: number);
        get totalLength(): number;
        get electricTrainData(): $ElectricTrainData;
        get navigationPenalty(): number;
        get soundModifyingBlocks(): $Set<any>;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
        get endpointEdges(): $Couple<$Couple<$TrackNode>>;
    }
    export class $CarriageSounds {
        stop(): void;
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        finalizeSharedVolume(arg0: number): void;
        submitSharedSoundVolume(arg0: $Vec3_, arg1: number): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $TravellingPoint$ITurnListener {
    }
    export interface $TravellingPoint$ITurnListener extends $BiConsumer<number, $TrackEdge> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITurnListener}.
     */
    export type $TravellingPoint$ITurnListener_ = (() => void);
    export class $TravellingPoint {
        reverse(arg0: $TrackGraph): void;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $TravellingPoint;
        random(): $TravellingPoint$ITrackSelector;
        getPosition(arg0: $TrackGraph, arg1: boolean): $Vec3;
        getPosition(arg0: $TrackGraph): $Vec3;
        follow(arg0: $TravellingPoint, arg1: $Consumer_<boolean>): $TravellingPoint$ITrackSelector;
        follow(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        ignoreEdgePoints(): $TravellingPoint$IEdgePointListener;
        ignorePortals(): $TravellingPoint$IPortalListener;
        ignoreTurns(): $TravellingPoint$ITurnListener;
        getPositionWithOffset(arg0: $TrackGraph, arg1: number, arg2: boolean): $Vec3;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_, arg5: $TravellingPoint$IPortalListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_): number;
        migrateTo(arg0: $List_<$TrackGraphLocation>): void;
        steer(arg0: $TravellingPoint$SteerDirection_, arg1: $Vec3_): $TravellingPoint$ITrackSelector;
        node2: $TrackNode;
        edge: $TrackEdge;
        blocked: boolean;
        position: number;
        node1: $TrackNode;
        upsideDown: boolean;
        constructor();
        constructor(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge, arg3: number, arg4: boolean);
    }
}
