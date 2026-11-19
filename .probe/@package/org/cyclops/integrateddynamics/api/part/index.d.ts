import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Set_, $List_, $Map } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_, $NonNullList, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $IAspect } from "@package/org/cyclops/integrateddynamics/api/part/aspect";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PartConfigSection_, $PartConfigApplyResult, $PartConfigSnapshot_, $PartConfigEntry, $PartConfigSnapshot } from "@package/org/cyclops/integrateddynamics/core/part";
import { $Class, $Comparable } from "@package/java/lang";
import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IValue, $IVariable, $ValueDeseralizationContext_ } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $IAspectProperties } from "@package/org/cyclops/integrateddynamics/api/part/aspect/property";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DimPos } from "@package/org/cyclops/cyclopscore/datastructure";
import { $INetworkEventListener, $IPartNetwork, $IPartNetworkElement, $INetworkElement, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ICapabilityProvider_, $BaseCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as aspect from "@package/org/cyclops/integrateddynamics/api/part/aspect";
export * as read from "@package/org/cyclops/integrateddynamics/api/part/read";
export * as write from "@package/org/cyclops/integrateddynamics/api/part/write";

declare module "@package/org/cyclops/integrateddynamics/api/part" {
    export class $IPartContainer {
    }
    export interface $IPartContainer extends $INBTSerializable<$CompoundTag> {
        getPartState(arg0: $Direction_): $IPartState<any>;
        hasPart(arg0: $Direction_): boolean;
        removePart(arg0: $Direction_, arg1: $Player | null, arg2: boolean, arg3: boolean): $IPartType<any, any>;
        setPart<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: $Direction_, arg1: $IPartType<P, S>, arg2: $IPartState<P>): void;
        hasParts(): boolean;
        setPartState(arg0: $Direction_, arg1: $IPartState<any>): void;
        getWatchingSide(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): $Direction;
        update(): void;
        getPosition(): $DimPos;
        getPart(arg0: $Direction_): $IPartType<any, any>;
        canAddPart<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: $Direction_, arg1: $IPartType<P, S>): boolean;
        getCapability<T>(arg0: $PartCapability<T>, arg1: $INetwork, arg2: $IPartNetwork, arg3: $PartTarget): (T) | undefined;
        getParts(): $Map<$Direction, $IPartType<never, never>>;
        get position(): $DimPos;
        get parts(): $Map<$Direction, $IPartType<never, never>>;
    }
    export class $AttachCapabilitiesEventPart extends $Event {
        getPartType(): $IPartType<any, any>;
        getPartState(): $IPartState<any>;
        isRegistered(arg0: $PartCapability<never>, arg1: $IPartType<never, never>): boolean;
        register<T>(arg0: $PartCapability<T>, arg1: $IPartType<never, never>, arg2: $ICapabilityProvider_<$IPartType<never, never>, $PartTarget, T>): void;
        constructor(arg0: $IPartType<any, any>, arg1: $IPartState<any>);
        get partType(): $IPartType<any, any>;
        get partState(): $IPartState<any>;
    }
    export class $PartTarget {
        forTargetSide(arg0: $Direction_): $PartTarget;
        static fromCenter(arg0: $DimPos, arg1: $Direction_ | null): $PartTarget;
        static fromCenter(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $PartTarget;
        static fromCenter(arg0: $PartPos): $PartTarget;
        forOffset(arg0: $Vec3i): $PartTarget;
        isDefaultTarget(): boolean;
        static of(arg0: $PartPos, arg1: $PartPos): $PartTarget;
        getTarget(): $PartPos;
        getCenter(): $PartPos;
        get defaultTarget(): boolean;
        get target(): $PartPos;
        get center(): $PartPos;
    }
    export class $PartCapability<T> extends $BaseCapability<T, $PartTarget> {
        static create<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $PartCapability<T>;
        static getAll(): $List<$PartCapability<never>>;
        getCapability(arg0: $IPartType<never, never>, arg1: $PartTarget): T;
        static get all(): $List<$PartCapability<never>>;
    }
    export class $PrioritizedPartPos implements $Comparable<$PrioritizedPartPos> {
        getPartPos(): $PartPos;
        compareTo(arg0: $PrioritizedPartPos): number;
        static of(arg0: $PartPos, arg1: number): $PrioritizedPartPos;
        getPriority(): number;
        get partPos(): $PartPos;
        get priority(): number;
    }
    export class $PartRenderPosition {
        toCompactString(): string;
        getWidthFactor(): number;
        getHeightFactor(): number;
        getWidthFactorSide(): number;
        getDepthFactor(): number;
        getHeightFactorSide(): number;
        getSidedCableBoundingBox(arg0: $Direction_): $VoxelShape;
        getBoundingBox(arg0: $Direction_, arg1: $CollisionContext): $VoxelShape;
        /**
         * @deprecated
         */
        getBoundingBox(arg0: $Direction_): $VoxelShape;
        static NONE: $PartRenderPosition;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get widthFactor(): number;
        get heightFactor(): number;
        get widthFactorSide(): number;
        get depthFactor(): number;
        get heightFactorSide(): number;
    }
    export class $IPartType<P extends $IPartType<P, S>, S extends $IPartState<P>> {
    }
    export interface $IPartType<P extends $IPartType<P, S>, S extends $IPartState<P>> extends $INetworkEventListener<$IPartNetworkElement<P, S>> {
        getContainerProvider(arg0: $PartPos): ($MenuProvider) | undefined;
        setEnabled(arg0: S, arg1: boolean): void;
        getUniqueName(): $ResourceLocation;
        writeExtraGuiData(arg0: $RegistryFriendlyByteBuf, arg1: $PartPos, arg2: $ServerPlayer): void;
        postUpdate(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S, arg4: boolean): void;
        updateTick(arg0: $Level_, arg1: $BlockPos_, arg2: S, arg3: $RandomSource): void;
        toNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_, arg2: S): void;
        getTranslationKey(): string;
        afterNetworkReAlive(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        defaultBlockState(): S;
        snapshotConfig(arg0: $ValueDeseralizationContext_, arg1: S, arg2: $Set_<$PartConfigSection_>): $PartConfigSnapshot;
        applyConfig(arg0: $ValueDeseralizationContext_, arg1: $INetwork | null, arg2: $IPartNetwork | null, arg3: $PartTarget, arg4: S, arg5: $PartConfigSnapshot_, arg6: $Set_<$PartConfigSection_>, arg7: $Player): $PartConfigApplyResult;
        onNetworkRemoval(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        onPartActivated(arg0: S, arg1: $BlockPos_, arg2: $Level_, arg3: $Player, arg4: $InteractionHand_, arg5: $ItemStack_, arg6: $BlockHitResult): $InteractionResult;
        getUpdateInterval(arg0: S): number;
        beforeNetworkKill(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        setTargetOffset(arg0: S, arg1: $PartPos, arg2: $Vec3i): boolean;
        onPreRemoved(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        getConsumptionRate(arg0: S): number;
        loadTooltip(arg0: S, arg1: $List_<$Component_>): void;
        loadTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        onPostRemoved(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        getBlockModelPath(): $ResourceLocation;
        supportsOffsets(): boolean;
        applyConfigExtra(arg0: $ValueDeseralizationContext_, arg1: $PartTarget, arg2: S, arg3: $PartConfigSection_, arg4: $PartConfigSnapshot_, arg5: $Player, arg6: $PartConfigApplyResult): void;
        afterNetworkAlive(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        getBaseBlockState(): $BlockState;
        onNetworkAddition(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        onOffsetVariablesChanged(arg0: $PartTarget, arg1: S): void;
        getConfigExtraRequirements(arg0: $PartConfigSnapshot_, arg1: $PartConfigSection_): $List<$Component>;
        forceLightTransparency(arg0: S): boolean;
        /**
         * @deprecated
         */
        setPriorityAndChannel(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S, arg4: number, arg5: number): void;
        setTargetSideOverride(arg0: S, arg1: $Direction_ | null): void;
        snapshotConfigExtra(arg0: $ValueDeseralizationContext_, arg1: S, arg2: $PartConfigSection_): $CompoundTag;
        writeExtraGuiDataSettings(arg0: $RegistryFriendlyByteBuf, arg1: $PartPos, arg2: $ServerPlayer): void;
        onBlockNeighborChange(arg0: $INetwork | null, arg1: $IPartNetwork | null, arg2: $PartTarget, arg3: S, arg4: $BlockGetter, arg5: $Block_, arg6: $BlockPos_): void;
        createNetworkElement(arg0: $IPartContainer, arg1: $DimPos, arg2: $Direction_): $INetworkElement;
        getTargetSideOverride(arg0: S): $Direction;
        onAspectVariablesChanged(arg0: $PartTarget, arg1: S): void;
        getMinimumUpdateInterval(arg0: S): number;
        writeExtraGuiDataOffsets(arg0: $RegistryFriendlyByteBuf, arg1: $PartPos, arg2: $ServerPlayer): void;
        getPartRenderPosition(): $PartRenderPosition;
        getConfigExtraEntries(arg0: $ValueDeseralizationContext_, arg1: $PartConfigSnapshot_, arg2: $PartConfigSection_): $List<$PartConfigEntry>;
        fromNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_): S;
        setUpdateInterval(arg0: S, arg1: number): void;
        update(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        isEnabled(arg0: S): boolean;
        getPriority(arg0: S): number;
        getState(arg0: $ValueDeseralizationContext_, arg1: $ItemStack_): S;
        getTargetOffset(arg0: S): $Vec3i;
        getTarget(arg0: $PartPos, arg1: S): $PartTarget;
        getChannel(arg0: S): number;
        getItem(): $Item;
        isUpdate(arg0: S): boolean;
        getItemStack(arg0: $ValueDeseralizationContext_, arg1: S, arg2: boolean): $ItemStack;
        getBlockState(arg0: $IPartContainer, arg1: $Direction_): $BlockState;
        getCloneItemStack(arg0: $Level_, arg1: $BlockPos_, arg2: S): $ItemStack;
        getContainerProviderOffsets(arg0: $PartPos): ($MenuProvider) | undefined;
        getContainerProviderSettings(arg0: $PartPos): ($MenuProvider) | undefined;
        shouldTriggerBlockRenderUpdate(arg0: S | null, arg1: S | null): boolean;
        isSolid(arg0: S): boolean;
        addDrops(arg0: $PartTarget, arg1: S, arg2: $List_<$ItemStack_>, arg3: boolean, arg4: boolean): void;
        get uniqueName(): $ResourceLocation;
        get translationKey(): string;
        get blockModelPath(): $ResourceLocation;
        get baseBlockState(): $BlockState;
        get partRenderPosition(): $PartRenderPosition;
        get item(): $Item;
    }
    export class $PartPos implements $Comparable<$PartPos> {
        getPos(): $DimPos;
        static getPartData(arg0: $PartPos): $Pair<$IPartType<any, any>, $IPartState<any>>;
        compareTo(arg0: $PartPos): number;
        static of(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_ | null): $PartPos;
        static of(arg0: $DimPos, arg1: $Direction_ | null): $PartPos;
        getSide(): $Direction;
        get pos(): $DimPos;
        get side(): $Direction;
    }
    export class $IPartTypeActiveVariable<P extends $IPartTypeActiveVariable<P, S>, S extends $IPartState<P>> {
    }
    export interface $IPartTypeActiveVariable<P extends $IPartTypeActiveVariable<P, S>, S extends $IPartState<P>> extends $IPartType<P, S> {
        hasActiveVariable(arg0: $IPartNetwork, arg1: $PartTarget, arg2: S): boolean;
        getActiveVariable<V extends $IValue>(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): $IVariable<V>;
    }
    export class $IPartState<P extends $IPartType<any, any>> {
        static GLOBALCOUNTER_KEY: string;
    }
    export interface $IPartState<P extends $IPartType<any, any>> {
        setEnabled(arg0: boolean): void;
        markDirty(): void;
        generateId(): void;
        gatherCapabilities(arg0: P): void;
        getUpdateInterval(): number;
        setTargetOffset(arg0: $Vec3i): void;
        setTargetSideOverride(arg0: $Direction_ | null): void;
        getTargetSideOverride(): $Direction;
        markAspectVariablesChanged(): void;
        readFromNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_): void;
        markAspectPropertiesChanged(arg0: $IAspect<any, any>): void;
        getAspectPropertiesVariableDriven(arg0: $IAspect<any, any>, arg1: $IAspectProperties): $IAspectProperties;
        isForceBlockRenderUpdateAndReset(): boolean;
        getDefaultUpdateIntervalPublic(): number;
        setUpdateInterval(arg0: number): void;
        isDirtyAndReset(): boolean;
        isUpdateAndReset(): boolean;
        saveInventoryNamed(arg0: string, arg1: $Container): void;
        setInventoryNamed(arg0: string, arg1: $NonNullList<$ItemStack_>): void;
        getInventoryNamed(arg0: string): $NonNullList<$ItemStack>;
        loadInventoryNamed(arg0: string, arg1: $Container): void;
        initializeOffsets(arg0: $PartTarget): void;
        setMaxOffset(arg0: number): void;
        getMaxOffset(): number;
        setAspectProperties(arg0: $IAspect<any, any>, arg1: $IAspectProperties): void;
        addVolatileCapability<T>(arg0: $PartCapability<T>, arg1: (T) | undefined): void;
        updateOffsetVariables(arg0: P, arg1: $INetwork, arg2: $IPartNetwork, arg3: $PartTarget): void;
        updateAspectVariables(arg0: P, arg1: $INetwork, arg2: $IPartNetwork, arg3: $PartTarget): void;
        markOffsetVariablesChanged(): void;
        clearInventoriesNamed(): void;
        forceBlockRenderUpdate(): void;
        getAspectProperties(arg0: $IAspect<any, any>): $IAspectProperties;
        getInventoriesNamed(): $Map<string, $NonNullList<$ItemStack>>;
        getOffsetVariableError(arg0: number): $MutableComponent;
        requiresOffsetUpdates(): boolean;
        getAspectVariableError(arg0: $IAspect<any, any>, arg1: number): $MutableComponent;
        removeVolatileCapability(arg0: $PartCapability<never>): void;
        getAspectVariableValue(arg0: $IAspect<any, any>, arg1: number): $IValue;
        isEnabled(): boolean;
        /**
         * @deprecated
         */
        setPriority(arg0: number): void;
        getPriority(): number;
        getId(): number;
        getTargetOffset(): $Vec3i;
        getChannel(): number;
        /**
         * @deprecated
         */
        setChannel(arg0: number): void;
        sendUpdate(): void;
        writeToNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_): void;
        getCapability<T>(arg0: P, arg1: $PartCapability<T>, arg2: $INetwork, arg3: $IPartNetwork, arg4: $PartTarget): (T) | undefined;
        get forceBlockRenderUpdateAndReset(): boolean;
        get defaultUpdateIntervalPublic(): number;
        get dirtyAndReset(): boolean;
        get updateAndReset(): boolean;
        get inventoriesNamed(): $Map<string, $NonNullList<$ItemStack>>;
        get id(): number;
    }
}
