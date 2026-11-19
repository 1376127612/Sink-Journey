import { $ILazyExpressionValueCache } from "@package/org/cyclops/integrateddynamics/api/evaluate/expression";
import { $IIngredientComponentStorageSlotted, $IIngredientComponentStorage } from "@package/org/cyclops/commoncapabilities/api/ingredient/storage";
import { $INBTSerializable } from "@package/org/cyclops/cyclopscore/persist/nbt";
import { $Iterator, $List, $Map_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $IIngredientChannelInsertPreConsumer } from "@package/org/cyclops/integrateddynamics/core/network";
import { $PartTarget, $IPartContainer, $IPartType, $PrioritizedPartPos, $PartPos, $IPartState } from "@package/org/cyclops/integrateddynamics/api/part";
import { $Predicate, $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IAspectRead } from "@package/org/cyclops/integrateddynamics/api/part/aspect";
import { $Class, $Comparable, $Iterable } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IValue, $IVariable } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $IVariableFacade } from "@package/org/cyclops/integrateddynamics/api/item";
import { $IIngredientComponentStorageObservable } from "@package/org/cyclops/integrateddynamics/api/ingredient";
import { $INetworkEvent_, $INetworkEventBus, $INetworkEvent } from "@package/org/cyclops/integrateddynamics/api/network/event";
import { $DimPos } from "@package/org/cyclops/cyclopscore/datastructure";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IngredientComponent } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $ISidedPathElement, $IPathElement } from "@package/org/cyclops/integrateddynamics/api/path";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ICapabilityProvider_, $BaseCapability, $ICapabilityProvider, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as event from "@package/org/cyclops/integrateddynamics/api/network/event";

declare module "@package/org/cyclops/integrateddynamics/api/network" {
    export class $IPositionedAddonsNetwork {
        static channelsMatch(arg0: number, arg1: number): boolean;
        static DEFAULT_CHANNEL: number;
        static WILDCARD_CHANNEL: number;
    }
    export interface $IPositionedAddonsNetwork {
        getPositions(arg0: number): $Collection<$PartPos>;
        getPositions(): $Iterable<$PartPos>;
        removePosition(arg0: $PartPos): void;
        addPosition(arg0: $PartPos, arg1: number, arg2: number): boolean;
        getPrioritizedPositions(): $Collection<$PrioritizedPartPos>;
        getPrioritizedPositions(arg0: number): $Collection<$PrioritizedPartPos>;
        hasPositions(): boolean;
        getPartPosIteratorHandler(): $IPartPosIteratorHandler;
        setPartPosIteratorHandler(arg0: $IPartPosIteratorHandler | null): void;
        enablePosition(arg0: $PartPos): void;
        getPositionChannel(arg0: $PartPos): number;
        isPositionDisabled(arg0: $PartPos): boolean;
        disablePosition(arg0: $PartPos): void;
        getChannels(): number[];
        get channels(): number[];
    }
    export class $AttachCapabilitiesEventNetwork extends $Event implements $IModBusEvent {
        addFullNetworkListener(arg0: $IFullNetworkListener): void;
        getFullNetworkListeners(): $List<$IFullNetworkListener>;
        register<T>(arg0: $NetworkCapability<T>, arg1: $ICapabilityProvider_<$INetwork, void, T>): void;
        getProviders(): $Map<$NetworkCapability<never>, $List<$ICapabilityProvider<$INetwork, void, never>>>;
        getNetwork(): $INetwork;
        constructor(arg0: $INetwork);
        get fullNetworkListeners(): $List<$IFullNetworkListener>;
        get providers(): $Map<$NetworkCapability<never>, $List<$ICapabilityProvider<$INetwork, void, never>>>;
        get network(): $INetwork;
    }
    export class $INetwork {
    }
    export interface $INetwork extends $IFullNetworkListener, $INBTSerializable {
        removeNetworkElementUpdateable(arg0: $INetworkElement): void;
        addNetworkElementUpdateable(arg0: $INetworkElement): void;
        getCablesCount(): number;
        isCrashed(): boolean;
        setPriorityAndChannel(arg0: $INetworkElement, arg1: number, arg2: number): void;
        getFullNetworkListeners(): $IFullNetworkListener[];
        getLastSecondDuration(arg0: $INetworkElement): number;
        containsSidedPathElement(arg0: $ISidedPathElement): boolean;
        resetLastSecondDurations(): void;
        killIfEmpty(): boolean;
        invalidateElement(arg0: $INetworkElement): void;
        revalidateElement(arg0: $INetworkElement): void;
        setCrashed(arg0: boolean): void;
        isKilled(): boolean;
        isValid(arg0: $INetworkElement): boolean;
        isInitialized(): boolean;
        getEventBus(): $INetworkEventBus;
        getElements(): $Set<$INetworkElement>;
        hasChanged(): boolean;
        getCapability<T>(arg0: $NetworkCapability<T>): (T) | undefined;
        get cablesCount(): number;
        get fullNetworkListeners(): $IFullNetworkListener[];
        get killed(): boolean;
        get initialized(): boolean;
        get eventBus(): $INetworkEventBus;
        get elements(): $Set<$INetworkElement>;
    }
    export class $INetworkElement {
        static shouldTick(arg0: $DimPos): boolean;
    }
    export interface $INetworkElement extends $Comparable<$INetworkElement> {
        afterNetworkReAlive(arg0: $INetwork): void;
        onNetworkRemoval(arg0: $INetwork, arg1: $BlockState_): void;
        /**
         * @deprecated
         */
        onNetworkRemoval(arg0: $INetwork): void;
        getUpdateInterval(): number;
        /**
         * @deprecated
         */
        beforeNetworkKill(arg0: $INetwork): void;
        beforeNetworkKill(arg0: $INetwork, arg1: $BlockState_): void;
        onPreRemoved(arg0: $INetwork): void;
        onPostRemoved(arg0: $INetwork): void;
        afterNetworkAlive(arg0: $INetwork): void;
        onNetworkAddition(arg0: $INetwork): boolean;
        /**
         * @deprecated
         */
        setPriorityAndChannel(arg0: $INetwork, arg1: number, arg2: number): void;
        onNeighborBlockChange(arg0: $INetwork | null, arg1: $BlockGetter, arg2: $Block_, arg3: $BlockPos_): void;
        canRevalidate(arg0: $INetwork): boolean;
        revalidate(arg0: $INetwork): void;
        update(arg0: $INetwork): void;
        getPriority(): number;
        isLoaded(): boolean;
        getChannel(): number;
        invalidate(arg0: $INetwork): void;
        isUpdate(): boolean;
        addDrops(arg0: $BlockState_, arg1: $List_<$ItemStack_>, arg2: boolean, arg3: boolean): void;
        /**
         * @deprecated
         */
        addDrops(arg0: $List_<$ItemStack_>, arg1: boolean, arg2: boolean): void;
        get updateInterval(): number;
        get priority(): number;
        get loaded(): boolean;
        get channel(): number;
    }
    export class $IPositionedNetworkElement {
    }
    export interface $IPositionedNetworkElement extends $INetworkElement {
        getPosition(): $DimPos;
        get position(): $DimPos;
    }
    export class $INetworkEventListener<E> {
    }
    export interface $INetworkEventListener<E> {
        onEvent(arg0: $INetworkEvent_, arg1: E): void;
        getSubscribedEvents(): $Set<$Class<$INetworkEvent>>;
        hasEventSubscriptions(): boolean;
        get subscribedEvents(): $Set<$Class<$INetworkEvent>>;
    }
    export class $IPartNetwork {
    }
    export interface $IPartNetwork extends $ILazyExpressionValueCache {
        addPart(arg0: number, arg1: $PartPos): boolean;
        removeProxy(arg0: number): void;
        notifyPartsChanged(): void;
        getPartType(arg0: number): $IPartType<any, any>;
        getPartState(arg0: number): $IPartState<any>;
        hasPartVariable<V extends $IValue>(arg0: number, arg1: $IAspectRead<V, never>): boolean;
        getPartVariable<V extends $IValue>(arg0: number, arg1: $IAspectRead<V, never>): $IVariable<V>;
        hasVariableFacade(arg0: number): boolean;
        hasPart(arg0: number): boolean;
        removePart(arg0: number): void;
        getVariableFacade(arg0: number): $IVariableFacade;
        getProxy(arg0: number): $DimPos;
        addProxy(arg0: number, arg1: $DimPos): boolean;
        addVariableContainer(arg0: $DimPos): boolean;
        removeVariableContainer(arg0: $DimPos): void;
    }
    export class $IFullNetworkListener {
    }
    export interface $IFullNetworkListener {
        postUpdate(arg0: $INetworkElement): void;
        beforeServerStop(): void;
        afterServerLoad(): void;
        removeNetworkElementPre(arg0: $INetworkElement): boolean;
        removeNetworkElementPost(arg0: $INetworkElement, arg1: $BlockState_): void;
        removePathElement(arg0: $IPathElement, arg1: $Direction_, arg2: $BlockState_): boolean;
        invalidateElement(arg0: $INetworkElement): void;
        revalidateElement(arg0: $INetworkElement): void;
        addNetworkElement(arg0: $INetworkElement, arg1: boolean): boolean;
        onSkipUpdate(arg0: $INetworkElement): void;
        updateGuaranteed(): void;
        canUpdate(arg0: $INetworkElement): boolean;
        update(): void;
        kill(): void;
    }
    export class $NetworkCapability<T> extends $BaseCapability<T, void> {
        static create<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $NetworkCapability<T>;
        static getAll(): $List<$NetworkCapability<never>>;
        getCapability(arg0: $Map_<$NetworkCapability<never>, $List_<$ICapabilityProvider_<$INetwork, void, never>>>, arg1: $INetwork): T;
        static get all(): $List<$NetworkCapability<never>>;
    }
    export class $IEventListenableNetworkElement<D extends $INetworkEventListener<never>> {
    }
    export interface $IEventListenableNetworkElement<D extends $INetworkEventListener<never>> extends $INetworkElement {
        getNetworkEventListener(): (D) | undefined;
        get networkEventListener(): (D) | undefined;
    }
    export class $IIdentifiableNetworkElement {
    }
    export interface $IIdentifiableNetworkElement {
        getId(): number;
        getGroup(): $ResourceLocation;
        get id(): number;
        get group(): $ResourceLocation;
    }
    export class $PositionedAddonsNetworkIngredientsFilter<T> {
        testInsertion(arg0: T): boolean;
        testExtraction(arg0: T): boolean;
        testView(arg0: T): boolean;
        getFilter(): $Predicate<T>;
        isApplyToInsertions(): boolean;
        isApplyToExtractions(): boolean;
        isAllowAllIfFilterNotApplied(): boolean;
        constructor(arg0: $Predicate_<T>, arg1: boolean, arg2: boolean, arg3: boolean);
        get filter(): $Predicate<T>;
        get applyToInsertions(): boolean;
        get applyToExtractions(): boolean;
        get allowAllIfFilterNotApplied(): boolean;
    }
    export class $INetworkIngredientsChannel<T, M> {
    }
    export interface $INetworkIngredientsChannel<T, M> extends $IIngredientComponentStorage<T, M> {
        findAllPositions(): $Iterable<$PartPos>;
        insert(arg0: T, arg1: T, arg2: boolean): T;
        findNonFullPositions(): $Iterable<$PartPos>;
        findNonEmptyPositions(): $Iterable<$PartPos>;
        findMatchingPositions(arg0: T, arg1: M): $Iterable<$PartPos>;
    }
    export class $IPositionedAddonsNetworkIngredients<T, M> {
    }
    export interface $IPositionedAddonsNetworkIngredients<T, M> extends $IPositionedAddonsNetwork, $IIngredientComponentStorageObservable<T, M> {
        resetLastSecondDurationsIndex(): void;
        getChannelExternal<S, C>(arg0: $BlockCapability<S, C>, arg1: number): S;
        unregisterInsertPreConsumer(arg0: $IIngredientChannelInsertPreConsumer<T>): void;
        getRateLimit(): number;
        setPositionedStorageFilter(arg0: $PartPos, arg1: $PositionedAddonsNetworkIngredientsFilter<T> | null): void;
        getPositionedStorage(arg0: $PartPos): $IIngredientComponentStorage<T, M>;
        getLastSecondDurationIndex(): $Map<$PartPos, number>;
        getInsertPreConsumers(): $Collection<$IIngredientChannelInsertPreConsumer<T>>;
        getPositionedStorageUnsafe(arg0: $PartPos): $IIngredientComponentStorage<T, M>;
        registerInsertPreConsumer(arg0: $IIngredientChannelInsertPreConsumer<T>): void;
        getPositionedStorageFilter(arg0: $PartPos): $PositionedAddonsNetworkIngredientsFilter<T>;
        getRawInstances(arg0: $PartPos): $Iterator<T>;
        getChannelSlotted(arg0: number): $IIngredientComponentStorageSlotted<T, M>;
        getChannel(arg0: number): $INetworkIngredientsChannel<T, M>;
        getComponent(): $IngredientComponent<T, M>;
        get rateLimit(): number;
        get lastSecondDurationIndex(): $Map<$PartPos, number>;
        get insertPreConsumers(): $Collection<$IIngredientChannelInsertPreConsumer<T>>;
        get component(): $IngredientComponent<T, M>;
    }
    export class $IPartNetworkElement<P extends $IPartType<P, S>, S extends $IPartState<P>> {
        static GROUP: $ResourceLocation;
    }
    export interface $IPartNetworkElement<P extends $IPartType<P, S>, S extends $IPartState<P>> extends $IEventListenableNetworkElement<P>, $IPositionedNetworkElement, $ISidedNetworkElement, $IIdentifiableNetworkElement {
        getPartState(): S;
        getPartContainer(): $IPartContainer;
        getTarget(): $PartTarget;
        isLoaded(): boolean;
        getPart(): P;
        get partState(): S;
        get partContainer(): $IPartContainer;
        get target(): $PartTarget;
        get loaded(): boolean;
        get part(): P;
    }
    export class $INetworkCarrier {
    }
    export interface $INetworkCarrier {
        setNetwork(arg0: $INetwork | null): void;
        getNetwork(): $INetwork;
    }
    export class $IPartPosIteratorHandler {
    }
    export interface $IPartPosIteratorHandler {
        handleIterator(arg0: $Supplier_<$Iterator<$PartPos>>, arg1: number): $Iterator<$PartPos>;
        clone(): $IPartPosIteratorHandler;
    }
    export class $ISidedNetworkElement {
    }
    export interface $ISidedNetworkElement extends $INetworkElement {
        getSide(): $Direction;
        get side(): $Direction;
    }
}
