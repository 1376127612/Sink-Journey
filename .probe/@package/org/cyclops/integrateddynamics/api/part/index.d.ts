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
        hasParts(): boolean;
        setPart<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: $Direction_, arg1: $IPartType<P, S>, arg2: $IPartState<P>): void;
        update(): void;
        hasPart(arg0: $Direction_): boolean;
        setPartState(arg0: $Direction_, arg1: $IPartState<any>): void;
        getWatchingSide(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): $Direction;
        getCapability<T>(arg0: $PartCapability<T>, arg1: $INetwork, arg2: $IPartNetwork, arg3: $PartTarget): (T) | undefined;
        getPosition(): $DimPos;
        getParts(): $Map<$Direction, $IPartType<never, never>>;
        getPart(arg0: $Direction_): $IPartType<any, any>;
        canAddPart<P extends $IPartType<P, S>, S extends $IPartState<P>>(arg0: $Direction_, arg1: $IPartType<P, S>): boolean;
        removePart(arg0: $Direction_, arg1: $Player | null, arg2: boolean, arg3: boolean): $IPartType<any, any>;
        getPartState(arg0: $Direction_): $IPartState<any>;
        get position(): $DimPos;
        get parts(): $Map<$Direction, $IPartType<never, never>>;
    }
    export class $AttachCapabilitiesEventPart extends $Event {
        isRegistered(arg0: $PartCapability<never>, arg1: $IPartType<never, never>): boolean;
        register<T>(arg0: $PartCapability<T>, arg1: $IPartType<never, never>, arg2: $ICapabilityProvider_<$IPartType<never, never>, $PartTarget, T>): void;
        getPartType(): $IPartType<any, any>;
        getPartState(): $IPartState<any>;
        constructor(arg0: $IPartType<any, any>, arg1: $IPartState<any>);
        get partType(): $IPartType<any, any>;
        get partState(): $IPartState<any>;
    }
    export class $PartTarget {
        static of(arg0: $PartPos, arg1: $PartPos): $PartTarget;
        getTarget(): $PartPos;
        isDefaultTarget(): boolean;
        forOffset(arg0: $Vec3i): $PartTarget;
        getCenter(): $PartPos;
        static fromCenter(arg0: $DimPos, arg1: $Direction_ | null): $PartTarget;
        static fromCenter(arg0: $PartPos): $PartTarget;
        static fromCenter(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $PartTarget;
        forTargetSide(arg0: $Direction_): $PartTarget;
        get target(): $PartPos;
        get defaultTarget(): boolean;
        get center(): $PartPos;
    }
    export class $PartCapability<T> extends $BaseCapability<T, $PartTarget> {
        static create<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $PartCapability<T>;
        getCapability(arg0: $IPartType<never, never>, arg1: $PartTarget): T;
        static getAll(): $List<$PartCapability<never>>;
        static get all(): $List<$PartCapability<never>>;
    }
    export class $PrioritizedPartPos implements $Comparable<$PrioritizedPartPos> {
        compareTo(arg0: $PrioritizedPartPos): number;
        static of(arg0: $PartPos, arg1: number): $PrioritizedPartPos;
        getPriority(): number;
        getPartPos(): $PartPos;
        get priority(): number;
        get partPos(): $PartPos;
    }
    export class $PartRenderPosition {
        getSidedCableBoundingBox(arg0: $Direction_): $VoxelShape;
        getHeightFactorSide(): number;
        /**
         * @deprecated
         */
        getBoundingBox(arg0: $Direction_): $VoxelShape;
        getBoundingBox(arg0: $Direction_, arg1: $CollisionContext): $VoxelShape;
        getDepthFactor(): number;
        getWidthFactor(): number;
        getWidthFactorSide(): number;
        getHeightFactor(): number;
        toCompactString(): string;
        static NONE: $PartRenderPosition;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get heightFactorSide(): number;
        get depthFactor(): number;
        get widthFactor(): number;
        get widthFactorSide(): number;
        get heightFactor(): number;
    }
    export class $IPartType<P extends $IPartType<P, S>, S extends $IPartState<P>> {
    }
    export interface $IPartType<P extends $IPartType<P, S>, S extends $IPartState<P>> extends $INetworkEventListener<$IPartNetworkElement<P, S>> {
        update(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        isEnabled(arg0: S): boolean;
        getPriority(arg0: S): number;
        getState(arg0: $ValueDeseralizationContext_, arg1: $ItemStack_): S;
        getTarget(arg0: $PartPos, arg1: S): $PartTarget;
        getTargetOffset(arg0: S): $Vec3i;
        getChannel(arg0: S): number;
        getItem(): $Item;
        getItemStack(arg0: $ValueDeseralizationContext_, arg1: S, arg2: boolean): $ItemStack;
        isUpdate(arg0: S): boolean;
        getTranslationKey(): string;
        getBlockModelPath(): $ResourceLocation;
        setTargetOffset(arg0: S, arg1: $PartPos, arg2: $Vec3i): boolean;
        applyConfig(arg0: $ValueDeseralizationContext_, arg1: $INetwork | null, arg2: $IPartNetwork | null, arg3: $PartTarget, arg4: S, arg5: $PartConfigSnapshot_, arg6: $Set_<$PartConfigSection_>, arg7: $Player): $PartConfigApplyResult;
        getUpdateInterval(arg0: S): number;
        supportsOffsets(): boolean;
        snapshotConfig(arg0: $ValueDeseralizationContext_, arg1: S, arg2: $Set_<$PartConfigSection_>): $PartConfigSnapshot;
        applyConfigExtra(arg0: $ValueDeseralizationContext_, arg1: $PartTarget, arg2: S, arg3: $PartConfigSection_, arg4: $PartConfigSnapshot_, arg5: $Player, arg6: $PartConfigApplyResult): void;
        beforeNetworkKill(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        onNetworkAddition(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        onPartActivated(arg0: S, arg1: $BlockPos_, arg2: $Level_, arg3: $Player, arg4: $InteractionHand_, arg5: $ItemStack_, arg6: $BlockHitResult): $InteractionResult;
        onPreRemoved(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        getConsumptionRate(arg0: S): number;
        onNetworkRemoval(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        getBaseBlockState(): $BlockState;
        loadTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        loadTooltip(arg0: S, arg1: $List_<$Component_>): void;
        onPostRemoved(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        afterNetworkAlive(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        getUniqueName(): $ResourceLocation;
        fromNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_): S;
        getBlockState(arg0: $IPartContainer, arg1: $Direction_): $BlockState;
        getCloneItemStack(arg0: $Level_, arg1: $BlockPos_, arg2: S): $ItemStack;
        getContainerProviderSettings(arg0: $PartPos): ($MenuProvider) | undefined;
        getContainerProviderOffsets(arg0: $PartPos): ($MenuProvider) | undefined;
        shouldTriggerBlockRenderUpdate(arg0: S | null, arg1: S | null): boolean;
        defaultBlockState(): S;
        updateTick(arg0: $Level_, arg1: $BlockPos_, arg2: S, arg3: $RandomSource): void;
        toNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_, arg2: S): void;
        setEnabled(arg0: S, arg1: boolean): void;
        isSolid(arg0: S): boolean;
        setUpdateInterval(arg0: S, arg1: number): void;
        getPartRenderPosition(): $PartRenderPosition;
        snapshotConfigExtra(arg0: $ValueDeseralizationContext_, arg1: S, arg2: $PartConfigSection_): $CompoundTag;
        getMinimumUpdateInterval(arg0: S): number;
        onOffsetVariablesChanged(arg0: $PartTarget, arg1: S): void;
        createNetworkElement(arg0: $IPartContainer, arg1: $DimPos, arg2: $Direction_): $INetworkElement;
        writeExtraGuiDataSettings(arg0: $RegistryFriendlyByteBuf, arg1: $PartPos, arg2: $ServerPlayer): void;
        setTargetSideOverride(arg0: S, arg1: $Direction_ | null): void;
        getConfigExtraRequirements(arg0: $PartConfigSnapshot_, arg1: $PartConfigSection_): $List<$Component>;
        onAspectVariablesChanged(arg0: $PartTarget, arg1: S): void;
        onBlockNeighborChange(arg0: $INetwork | null, arg1: $IPartNetwork | null, arg2: $PartTarget, arg3: S, arg4: $BlockGetter, arg5: $Block_, arg6: $BlockPos_): void;
        forceLightTransparency(arg0: S): boolean;
        getConfigExtraEntries(arg0: $ValueDeseralizationContext_, arg1: $PartConfigSnapshot_, arg2: $PartConfigSection_): $List<$PartConfigEntry>;
        getTargetSideOverride(arg0: S): $Direction;
        getContainerProvider(arg0: $PartPos): ($MenuProvider) | undefined;
        /**
         * @deprecated
         */
        setPriorityAndChannel(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S, arg4: number, arg5: number): void;
        writeExtraGuiDataOffsets(arg0: $RegistryFriendlyByteBuf, arg1: $PartPos, arg2: $ServerPlayer): void;
        addDrops(arg0: $PartTarget, arg1: S, arg2: $List_<$ItemStack_>, arg3: boolean, arg4: boolean): void;
        postUpdate(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S, arg4: boolean): void;
        writeExtraGuiData(arg0: $RegistryFriendlyByteBuf, arg1: $PartPos, arg2: $ServerPlayer): void;
        afterNetworkReAlive(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): void;
        get item(): $Item;
        get translationKey(): string;
        get blockModelPath(): $ResourceLocation;
        get baseBlockState(): $BlockState;
        get uniqueName(): $ResourceLocation;
        get partRenderPosition(): $PartRenderPosition;
    }
    export class $PartPos implements $Comparable<$PartPos> {
        compareTo(arg0: $PartPos): number;
        static of(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_ | null): $PartPos;
        static of(arg0: $DimPos, arg1: $Direction_ | null): $PartPos;
        getSide(): $Direction;
        getPos(): $DimPos;
        static getPartData(arg0: $PartPos): $Pair<$IPartType<any, any>, $IPartState<any>>;
        get side(): $Direction;
        get pos(): $DimPos;
    }
    export class $IPartTypeActiveVariable<P extends $IPartTypeActiveVariable<P, S>, S extends $IPartState<P>> {
    }
    export interface $IPartTypeActiveVariable<P extends $IPartTypeActiveVariable<P, S>, S extends $IPartState<P>> extends $IPartType<P, S> {
        getActiveVariable<V extends $IValue>(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: S): $IVariable<V>;
        hasActiveVariable(arg0: $IPartNetwork, arg1: $PartTarget, arg2: S): boolean;
    }
    export class $IPartState<P extends $IPartType<any, any>> {
        static GLOBALCOUNTER_KEY: string;
    }
    export interface $IPartState<P extends $IPartType<any, any>> {
        isEnabled(): boolean;
        /**
         * @deprecated
         */
        setPriority(arg0: number): void;
        getPriority(): number;
        getId(): number;
        getTargetOffset(): $Vec3i;
        getChannel(): number;
        writeToNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_): void;
        getCapability<T>(arg0: P, arg1: $PartCapability<T>, arg2: $INetwork, arg3: $IPartNetwork, arg4: $PartTarget): (T) | undefined;
        generateId(): void;
        removeVolatileCapability(arg0: $PartCapability<never>): void;
        setAspectProperties(arg0: $IAspect<any, any>, arg1: $IAspectProperties): void;
        forceBlockRenderUpdate(): void;
        getAspectVariableError(arg0: $IAspect<any, any>, arg1: number): $MutableComponent;
        getAspectVariableValue(arg0: $IAspect<any, any>, arg1: number): $IValue;
        getOffsetVariableError(arg0: number): $MutableComponent;
        requiresOffsetUpdates(): boolean;
        getAspectProperties(arg0: $IAspect<any, any>): $IAspectProperties;
        addVolatileCapability<T>(arg0: $PartCapability<T>, arg1: (T) | undefined): void;
        /**
         * @deprecated
         */
        setChannel(arg0: number): void;
        getAspectPropertiesVariableDriven(arg0: $IAspect<any, any>, arg1: $IAspectProperties): $IAspectProperties;
        markAspectPropertiesChanged(arg0: $IAspect<any, any>): void;
        getDefaultUpdateIntervalPublic(): number;
        setTargetOffset(arg0: $Vec3i): void;
        getUpdateInterval(): number;
        markDirty(): void;
        setEnabled(arg0: boolean): void;
        sendUpdate(): void;
        saveInventoryNamed(arg0: string, arg1: $Container): void;
        isDirtyAndReset(): boolean;
        setInventoryNamed(arg0: string, arg1: $NonNullList<$ItemStack_>): void;
        loadInventoryNamed(arg0: string, arg1: $Container): void;
        isUpdateAndReset(): boolean;
        setUpdateInterval(arg0: number): void;
        markAspectVariablesChanged(): void;
        setTargetSideOverride(arg0: $Direction_ | null): void;
        getTargetSideOverride(): $Direction;
        gatherCapabilities(arg0: P): void;
        readFromNBT(arg0: $ValueDeseralizationContext_, arg1: $CompoundTag_): void;
        initializeOffsets(arg0: $PartTarget): void;
        getInventoryNamed(arg0: string): $NonNullList<$ItemStack>;
        isForceBlockRenderUpdateAndReset(): boolean;
        updateAspectVariables(arg0: P, arg1: $INetwork, arg2: $IPartNetwork, arg3: $PartTarget): void;
        getInventoriesNamed(): $Map<string, $NonNullList<$ItemStack>>;
        updateOffsetVariables(arg0: P, arg1: $INetwork, arg2: $IPartNetwork, arg3: $PartTarget): void;
        clearInventoriesNamed(): void;
        markOffsetVariablesChanged(): void;
        getMaxOffset(): number;
        setMaxOffset(arg0: number): void;
        get id(): number;
        get defaultUpdateIntervalPublic(): number;
        get dirtyAndReset(): boolean;
        get updateAndReset(): boolean;
        get forceBlockRenderUpdateAndReset(): boolean;
        get inventoriesNamed(): $Map<string, $NonNullList<$ItemStack>>;
    }
}
