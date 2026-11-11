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
        getPrioritizedPositions(): $Collection<$PrioritizedPartPos>;
        getPrioritizedPositions(arg0: number): $Collection<$PrioritizedPartPos>;
        getPositions(arg0: number): $Collection<$PartPos>;
        getPositions(): $Iterable<$PartPos>;
        getPositionChannel(arg0: $PartPos): number;
        getChannels(): number[];
        removePosition(arg0: $PartPos): void;
        addPosition(arg0: $PartPos, arg1: number, arg2: number): boolean;
        hasPositions(): boolean;
        isPositionDisabled(arg0: $PartPos): boolean;
        disablePosition(arg0: $PartPos): void;
        enablePosition(arg0: $PartPos): void;
        getPartPosIteratorHandler(): $IPartPosIteratorHandler;
        setPartPosIteratorHandler(arg0: $IPartPosIteratorHandler | null): void;
        get channels(): number[];
    }
    export class $AttachCapabilitiesEventNetwork extends $Event implements $IModBusEvent {
        register<T>(arg0: $NetworkCapability<T>, arg1: $ICapabilityProvider_<$INetwork, void, T>): void;
        getProviders(): $Map<$NetworkCapability<never>, $List<$ICapabilityProvider<$INetwork, void, never>>>;
        getNetwork(): $INetwork;
        getFullNetworkListeners(): $List<$IFullNetworkListener>;
        addFullNetworkListener(arg0: $IFullNetworkListener): void;
        constructor(arg0: $INetwork);
        get providers(): $Map<$NetworkCapability<never>, $List<$ICapabilityProvider<$INetwork, void, never>>>;
        get network(): $INetwork;
        get fullNetworkListeners(): $List<$IFullNetworkListener>;
    }
    export class $INetwork {
    }
    export interface $INetwork extends $IFullNetworkListener, $INBTSerializable {
        isValid(arg0: $INetworkElement): boolean;
        getCapability<T>(arg0: $NetworkCapability<T>): (T) | undefined;
        isInitialized(): boolean;
        getElements(): $Set<$INetworkElement>;
        getEventBus(): $INetworkEventBus;
        isKilled(): boolean;
        setCrashed(arg0: boolean): void;
        hasChanged(): boolean;
        resetLastSecondDurations(): void;
        containsSidedPathElement(arg0: $ISidedPathElement): boolean;
        getLastSecondDuration(arg0: $INetworkElement): number;
        setPriorityAndChannel(arg0: $INetworkElement, arg1: number, arg2: number): void;
        revalidateElement(arg0: $INetworkElement): void;
        invalidateElement(arg0: $INetworkElement): void;
        getFullNetworkListeners(): $IFullNetworkListener[];
        isCrashed(): boolean;
        killIfEmpty(): boolean;
        getCablesCount(): number;
        addNetworkElementUpdateable(arg0: $INetworkElement): void;
        removeNetworkElementUpdateable(arg0: $INetworkElement): void;
        get initialized(): boolean;
        get elements(): $Set<$INetworkElement>;
        get eventBus(): $INetworkEventBus;
        get killed(): boolean;
        get fullNetworkListeners(): $IFullNetworkListener[];
        get cablesCount(): number;
    }
    export class $INetworkElement {
        static shouldTick(arg0: $DimPos): boolean;
    }
    export interface $INetworkElement extends $Comparable<$INetworkElement> {
        update(arg0: $INetwork): void;
        getPriority(): number;
        isLoaded(): boolean;
        getChannel(): number;
        invalidate(arg0: $INetwork): void;
        revalidate(arg0: $INetwork): void;
        isUpdate(): boolean;
        getUpdateInterval(): number;
        beforeNetworkKill(arg0: $INetwork, arg1: $BlockState_): void;
        /**
         * @deprecated
         */
        beforeNetworkKill(arg0: $INetwork): void;
        onNetworkAddition(arg0: $INetwork): boolean;
        onPreRemoved(arg0: $INetwork): void;
        onNetworkRemoval(arg0: $INetwork, arg1: $BlockState_): void;
        /**
         * @deprecated
         */
        onNetworkRemoval(arg0: $INetwork): void;
        onPostRemoved(arg0: $INetwork): void;
        afterNetworkAlive(arg0: $INetwork): void;
        /**
         * @deprecated
         */
        setPriorityAndChannel(arg0: $INetwork, arg1: number, arg2: number): void;
        addDrops(arg0: $BlockState_, arg1: $List_<$ItemStack_>, arg2: boolean, arg3: boolean): void;
        /**
         * @deprecated
         */
        addDrops(arg0: $List_<$ItemStack_>, arg1: boolean, arg2: boolean): void;
        afterNetworkReAlive(arg0: $INetwork): void;
        onNeighborBlockChange(arg0: $INetwork | null, arg1: $BlockGetter, arg2: $Block_, arg3: $BlockPos_): void;
        canRevalidate(arg0: $INetwork): boolean;
        get priority(): number;
        get loaded(): boolean;
        get channel(): number;
        get updateInterval(): number;
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
        hasEventSubscriptions(): boolean;
        getSubscribedEvents(): $Set<$Class<$INetworkEvent>>;
        get subscribedEvents(): $Set<$Class<$INetworkEvent>>;
    }
    export class $IPartNetwork {
    }
    export interface $IPartNetwork extends $ILazyExpressionValueCache {
        hasPart(arg0: number): boolean;
        addProxy(arg0: number, arg1: $DimPos): boolean;
        addPart(arg0: number, arg1: $PartPos): boolean;
        getProxy(arg0: number): $DimPos;
        getVariableFacade(arg0: number): $IVariableFacade;
        getPartType(arg0: number): $IPartType<any, any>;
        removePart(arg0: number): void;
        getPartState(arg0: number): $IPartState<any>;
        hasVariableFacade(arg0: number): boolean;
        getPartVariable<V extends $IValue>(arg0: number, arg1: $IAspectRead<V, never>): $IVariable<V>;
        hasPartVariable<V extends $IValue>(arg0: number, arg1: $IAspectRead<V, never>): boolean;
        removeVariableContainer(arg0: $DimPos): void;
        addVariableContainer(arg0: $DimPos): boolean;
        removeProxy(arg0: number): void;
        notifyPartsChanged(): void;
    }
    export class $IFullNetworkListener {
    }
    export interface $IFullNetworkListener {
        update(): void;
        kill(): void;
        canUpdate(arg0: $INetworkElement): boolean;
        revalidateElement(arg0: $INetworkElement): void;
        beforeServerStop(): void;
        removePathElement(arg0: $IPathElement, arg1: $Direction_, arg2: $BlockState_): boolean;
        afterServerLoad(): void;
        updateGuaranteed(): void;
        addNetworkElement(arg0: $INetworkElement, arg1: boolean): boolean;
        onSkipUpdate(arg0: $INetworkElement): void;
        invalidateElement(arg0: $INetworkElement): void;
        postUpdate(arg0: $INetworkElement): void;
        removeNetworkElementPost(arg0: $INetworkElement, arg1: $BlockState_): void;
        removeNetworkElementPre(arg0: $INetworkElement): boolean;
    }
    export class $NetworkCapability<T> extends $BaseCapability<T, void> {
        static create<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $NetworkCapability<T>;
        getCapability(arg0: $Map_<$NetworkCapability<never>, $List_<$ICapabilityProvider_<$INetwork, void, never>>>, arg1: $INetwork): T;
        static getAll(): $List<$NetworkCapability<never>>;
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
        getFilter(): $Predicate<T>;
        testView(arg0: T): boolean;
        testExtraction(arg0: T): boolean;
        testInsertion(arg0: T): boolean;
        isAllowAllIfFilterNotApplied(): boolean;
        isApplyToExtractions(): boolean;
        isApplyToInsertions(): boolean;
        constructor(arg0: $Predicate_<T>, arg1: boolean, arg2: boolean, arg3: boolean);
        get filter(): $Predicate<T>;
        get allowAllIfFilterNotApplied(): boolean;
        get applyToExtractions(): boolean;
        get applyToInsertions(): boolean;
    }
    export class $INetworkIngredientsChannel<T, M> {
    }
    export interface $INetworkIngredientsChannel<T, M> extends $IIngredientComponentStorage<T, M> {
        insert(arg0: T, arg1: T, arg2: boolean): T;
        findNonFullPositions(): $Iterable<$PartPos>;
        findNonEmptyPositions(): $Iterable<$PartPos>;
        findMatchingPositions(arg0: T, arg1: M): $Iterable<$PartPos>;
        findAllPositions(): $Iterable<$PartPos>;
    }
    export class $IPositionedAddonsNetworkIngredients<T, M> {
    }
    export interface $IPositionedAddonsNetworkIngredients<T, M> extends $IPositionedAddonsNetwork, $IIngredientComponentStorageObservable<T, M> {
        getChannel(arg0: number): $INetworkIngredientsChannel<T, M>;
        getComponent(): $IngredientComponent<T, M>;
        resetLastSecondDurationsIndex(): void;
        getChannelSlotted(arg0: number): $IIngredientComponentStorageSlotted<T, M>;
        getRawInstances(arg0: $PartPos): $Iterator<T>;
        getChannelExternal<S, C>(arg0: $BlockCapability<S, C>, arg1: number): S;
        unregisterInsertPreConsumer(arg0: $IIngredientChannelInsertPreConsumer<T>): void;
        getRateLimit(): number;
        getInsertPreConsumers(): $Collection<$IIngredientChannelInsertPreConsumer<T>>;
        getPositionedStorageUnsafe(arg0: $PartPos): $IIngredientComponentStorage<T, M>;
        getPositionedStorageFilter(arg0: $PartPos): $PositionedAddonsNetworkIngredientsFilter<T>;
        getLastSecondDurationIndex(): $Map<$PartPos, number>;
        registerInsertPreConsumer(arg0: $IIngredientChannelInsertPreConsumer<T>): void;
        setPositionedStorageFilter(arg0: $PartPos, arg1: $PositionedAddonsNetworkIngredientsFilter<T> | null): void;
        getPositionedStorage(arg0: $PartPos): $IIngredientComponentStorage<T, M>;
        get component(): $IngredientComponent<T, M>;
        get rateLimit(): number;
        get insertPreConsumers(): $Collection<$IIngredientChannelInsertPreConsumer<T>>;
        get lastSecondDurationIndex(): $Map<$PartPos, number>;
    }
    export class $IPartNetworkElement<P extends $IPartType<P, S>, S extends $IPartState<P>> {
        static GROUP: $ResourceLocation;
    }
    export interface $IPartNetworkElement<P extends $IPartType<P, S>, S extends $IPartState<P>> extends $IEventListenableNetworkElement<P>, $IPositionedNetworkElement, $ISidedNetworkElement, $IIdentifiableNetworkElement {
        getTarget(): $PartTarget;
        isLoaded(): boolean;
        getPart(): P;
        getPartContainer(): $IPartContainer;
        getPartState(): S;
        get target(): $PartTarget;
        get loaded(): boolean;
        get part(): P;
        get partContainer(): $IPartContainer;
        get partState(): S;
    }
    export class $INetworkCarrier {
    }
    export interface $INetworkCarrier {
        getNetwork(): $INetwork;
        setNetwork(arg0: $INetwork | null): void;
    }
    export class $IPartPosIteratorHandler {
    }
    export interface $IPartPosIteratorHandler {
        clone(): $IPartPosIteratorHandler;
        handleIterator(arg0: $Supplier_<$Iterator<$PartPos>>, arg1: number): $Iterator<$PartPos>;
    }
    export class $ISidedNetworkElement {
    }
    export interface $ISidedNetworkElement extends $INetworkElement {
        getSide(): $Direction;
        get side(): $Direction;
    }
}
