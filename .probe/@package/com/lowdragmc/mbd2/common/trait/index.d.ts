import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $MBDMachineDefinition } from "@package/com/lowdragmc/mbd2/common/machine/definition";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $List, $Collection_, $List_, $Set } from "@package/java/util";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Consumer } from "@package/java/util/function";
import { $IRenderer } from "@package/com/lowdragmc/lowdraglib2/client/renderer";
import { $HolderLookup$Provider, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ManagedFieldHolder, $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $IPersistedSerializable, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UI, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Enum, $Runnable_, $Object } from "@package/java/lang";
import { $IBlockEntityManaged } from "@package/com/lowdragmc/lowdraglib2/syncdata/holder/blockentity";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $IMachine } from "@package/com/lowdragmc/mbd2/api/machine";
import { $ConfigPartSettings$ProxyCapability } from "@package/com/lowdragmc/mbd2/common/machine/definition/config";
import { $IConfigurable, $IConfigurableHistory, $IToggleConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $RuntimeValue, $RuntimeAutoIO, $RuntimeCapabilityIO, $RuntimeAutoWorldIO, $RuntimeValueStorage, $IRuntimeValueHolder } from "@package/com/lowdragmc/mbd2/common/runtime";
import { $IRecipeHandlerTrait, $IO_, $IO } from "@package/com/lowdragmc/mbd2/api/capability/recipe";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $FieldManagedStorage, $IFieldUpdateListener_ } from "@package/com/lowdragmc/lowdraglib2/syncdata/storage";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $Vector3f } from "@package/org/joml";
export * as item from "@package/com/lowdragmc/mbd2/common/trait/item";

declare module "@package/com/lowdragmc/mbd2/common/trait" {
    export class $BulkIOState extends $Enum<$BulkIOState> {
        static fromIO(arg0: $IO_): $BulkIOState;
        static combineIO(arg0: $Collection_<$IO_>): $BulkIOState;
        static combineStates(arg0: $Collection_<$BulkIOState_>): $BulkIOState;
        static values(): $BulkIOState[];
        static valueOf(arg0: string): $BulkIOState;
        io(): $IO;
        translationKey(): string;
        static MIXED: $BulkIOState;
        static IN: $BulkIOState;
        static NONE: $BulkIOState;
        static BOTH: $BulkIOState;
        static OUT: $BulkIOState;
    }
    /**
     * Values that may be interpreted as {@link $BulkIOState}.
     */
    export type $BulkIOState_ = "mixed" | "in" | "out" | "both" | "none";
    export class $FancyRendererSettings implements $IToggleConfigurable {
        getScale(): $Vector3f;
        getFancyRenderer(arg0: $IMachine): $IRenderer;
        createFancyRenderer(): $IRenderer;
        isRotateOrientation(): boolean;
        setRotateOrientation(arg0: boolean): void;
        getPosition(): $Vector3f;
        setScale(arg0: $Vector3f): void;
        setPosition(arg0: $Vector3f): void;
        getRotation(): $Vector3f;
        setRotation(arg0: $Vector3f): void;
        clearCache(): void;
        isEnable(): boolean;
        setEnable(arg0: boolean): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        skipDisableSerialize(): boolean;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        constructor();
        get configurableName(): string;
    }
    export class $IUIProviderTrait$TraitUILayoutType extends $Enum<$IUIProviderTrait$TraitUILayoutType> {
        static values(): $IUIProviderTrait$TraitUILayoutType[];
        static valueOf(arg0: string): $IUIProviderTrait$TraitUILayoutType;
        static BAR: $IUIProviderTrait$TraitUILayoutType;
        static SLOT: $IUIProviderTrait$TraitUILayoutType;
    }
    /**
     * Values that may be interpreted as {@link $IUIProviderTrait$TraitUILayoutType}.
     */
    export type $IUIProviderTrait$TraitUILayoutType_ = "slot" | "bar";
    export class $IAutoWorldIOTrait {
    }
    export interface $IAutoWorldIOTrait extends $ITrait {
        getRuntimeAutoWorldIO(arg0: $IO_): $RuntimeAutoWorldIO;
        getRuntimeAutoWorldInput(): $RuntimeAutoWorldIO;
        getRuntimeAutoWorldOutput(): $RuntimeAutoWorldIO;
        get runtimeAutoWorldInput(): $RuntimeAutoWorldIO;
        get runtimeAutoWorldOutput(): $RuntimeAutoWorldIO;
    }
    export class $IUIProviderTrait {
    }
    export interface $IUIProviderTrait {
        initTraitUI(arg0: $ITrait, arg1: $UI): void;
        getTraitUILayoutType(): $IUIProviderTrait$TraitUILayoutType;
        createTraitUITemplate(arg0: $UIElement): void;
        uiId(): string;
        getDefinition(): $TraitDefinition;
        get traitUILayoutType(): $IUIProviderTrait$TraitUILayoutType;
        get definition(): $TraitDefinition;
    }
    export class $RecipeCapabilityTrait extends $Trait {
        notifiesAllChanges(): boolean;
        getHandlerIO(): $IO;
        getSlotNames(): $Set<string>;
        getRecipeLogicScope(): $Set<string>;
        isDistinct(): boolean;
        getDefinition(): $RecipeCapabilityTraitDefinition;
        slotNames: $RuntimeValue<$List<string>>;
        recipeLogics: $RuntimeValue<$List<string>>;
        recipeHandlerIO: $RuntimeValue<$IO>;
        distinct: $RuntimeValue<boolean>;
        constructor(arg0: $MBDMachine, arg1: $RecipeCapabilityTraitDefinition);
        get handlerIO(): $IO;
        get recipeLogicScope(): $Set<string>;
        get definition(): $RecipeCapabilityTraitDefinition;
    }
    export class $ToggleAutoIO extends $AutoIO implements $IToggleConfigurable {
        isEnable(): boolean;
        setEnable(arg0: boolean): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        skipDisableSerialize(): boolean;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        constructor();
    }
    export class $SimpleCapabilityTraitDefinition<T, C> extends $RecipeCapabilityTraitDefinition implements $IUIProviderTrait {
        createTrait(arg0: $MBDMachine): $SimpleCapabilityTrait<$CompoundTag, C>;
        getCapabilityIO(): $CapabilityIO;
        getGuiIO(): $IO;
        setGuiIO(arg0: $IO_): void;
        getTraitUILayoutType(): $IUIProviderTrait$TraitUILayoutType;
        uiId(): string;
        getDefinition(): $TraitDefinition;
        static CODEC: $Codec<$TraitDefinition>;
        static EMPTY_TYPE: $TraitDefinitionType<$TraitDefinition>;
        static EMPTY: $TraitDefinition;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TraitDefinition>;
        constructor();
        get capabilityIO(): $CapabilityIO;
        get traitUILayoutType(): $IUIProviderTrait$TraitUILayoutType;
        get definition(): $TraitDefinition;
    }
    export class $AutoIO implements $IConfigurable {
        setInterval(arg0: number): void;
        setFrontIO(arg0: $IO_): void;
        setTopIO(arg0: $IO_): void;
        getLeftIO(): $IO;
        getFrontIO(): $IO;
        getRightIO(): $IO;
        setAllIO(arg0: $IO_): void;
        setRightIO(arg0: $IO_): void;
        setLeftIO(arg0: $IO_): void;
        getTopIO(): $IO;
        getBackIO(): $IO;
        setBackIO(arg0: $IO_): void;
        getAllIOState(): $BulkIOState;
        getBottomIO(): $IO;
        setBottomIO(arg0: $IO_): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getInterval(): number;
        getIO(arg0: $Direction_, arg1: $Direction_ | null): $IO;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        constructor();
        set allIO(value: $IO_);
        get allIOState(): $BulkIOState;
        get configurableName(): string;
    }
    export class $SimpleCapabilityTraitDefinition$Type<T, C, D extends $SimpleCapabilityTraitDefinition<T, C>> extends $TraitDefinitionType<D> {
        name: string;
        group: string;
    }
    export class $AutoWorldIO implements $IToggleConfigurable {
        setInterval(arg0: number): $AutoWorldIO;
        setSpeed(arg0: number): $AutoWorldIO;
        getInterval(): number;
        getRange(): $AABB;
        setRange(arg0: $AABB_): $AutoWorldIO;
        isEnable(): boolean;
        setEnable(arg0: boolean): void;
        getSpeed(): number;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        skipDisableSerialize(): boolean;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        enable: boolean;
        range: $AABB;
        interval: number;
        speed: number;
        constructor();
        get configurableName(): string;
    }
    export class $Trait implements $ITrait, $IBlockEntityManaged, $IRuntimeValueHolder {
        asBlockEntity(): $BlockEntity;
        getRuntimeValues(): $RuntimeValueStorage;
        addChangedListener(arg0: $Runnable_): $ISubscription;
        onDataRestored(): void;
        runtimeValueMachine(): $MBDMachine;
        getDefinition(): $TraitDefinition;
        notifyListeners(): void;
        getMachine(): $MBDMachine;
        getSyncStorage(): $FieldManagedStorage;
        serverTick(): void;
        onChunkUnloaded(): void;
        onNeighborChanged(arg0: $Block_, arg1: $BlockPos_, arg2: boolean): void;
        onMachineUnLoad(): void;
        onMachineRemoved(): void;
        onMachineDrop(arg0: $Entity, arg1: $List_<$ItemStack_>): void;
        onMachineLoad(): void;
        onLoadingTraitInPreview(): void;
        getRecipeHandlerTraits(): $List<$IRecipeHandlerTrait<never>>;
        clientTick(): void;
        scheduleRenderUpdate(): void;
        onRerenderTriggered(arg0: $ManagedKey, arg1: $Object): $Consumer<$Object>;
        notifyPersistence(): void;
        markRuntimeValuesDirty(): void;
        addSyncUpdateListener<T>(arg0: string, arg1: $IFieldUpdateListener_<T>): $ISubscription;
        onPersistedMarkChanged(arg0: $IRef<never>, arg1: boolean): void;
        markDirty(arg0: string): void;
        getFieldHolder(): $ManagedFieldHolder;
        onSyncMarkChanged(arg0: $IRef<never>, arg1: boolean): void;
        constructor(arg0: $MBDMachine, arg1: $TraitDefinition);
        get runtimeValues(): $RuntimeValueStorage;
        get definition(): $TraitDefinition;
        get machine(): $MBDMachine;
        get syncStorage(): $FieldManagedStorage;
        get recipeHandlerTraits(): $List<$IRecipeHandlerTrait<never>>;
        get fieldHolder(): $ManagedFieldHolder;
    }
    export class $CapabilityIO implements $IConfigurable {
        setInternal(arg0: $IO_): void;
        setFrontIO(arg0: $IO_): void;
        setTopIO(arg0: $IO_): void;
        getLeftIO(): $IO;
        getFrontIO(): $IO;
        getRightIO(): $IO;
        setAllIO(arg0: $IO_): void;
        setRightIO(arg0: $IO_): void;
        setLeftIO(arg0: $IO_): void;
        getTopIO(): $IO;
        getBackIO(): $IO;
        setBackIO(arg0: $IO_): void;
        getAllIOState(): $BulkIOState;
        getBottomIO(): $IO;
        setBottomIO(arg0: $IO_): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getInternal(): $IO;
        getIO(arg0: $Direction_, arg1: $Direction_ | null): $IO;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        constructor();
        set allIO(value: $IO_);
        get allIOState(): $BulkIOState;
        get configurableName(): string;
    }
    export class $ITrait {
    }
    export interface $ITrait {
        serverTick(): void;
        onChunkUnloaded(): void;
        onNeighborChanged(arg0: $Block_, arg1: $BlockPos_, arg2: boolean): void;
        onMachineUnLoad(): void;
        onMachineRemoved(): void;
        onMachineDrop(arg0: $Entity, arg1: $List_<$ItemStack_>): void;
        onMachineLoad(): void;
        onLoadingTraitInPreview(): void;
        getRecipeHandlerTraits(): $List<$IRecipeHandlerTrait<never>>;
        getDefinition(): $TraitDefinition;
        clientTick(): void;
        getMachine(): $MBDMachine;
        get recipeHandlerTraits(): $List<$IRecipeHandlerTrait<never>>;
        get definition(): $TraitDefinition;
        get machine(): $MBDMachine;
    }
    export class $IProxyAutoIOTrait {
        static isAutoIOSuppressed(arg0: $ITrait): boolean;
        static handleProxyAutoIO(arg0: $MBDMachine, arg1: $List_<$ConfigPartSettings$ProxyCapability>, arg2: $BlockPos_, arg3: $Direction_, arg4: number): void;
    }
    export interface $IProxyAutoIOTrait extends $ITrait {
        handleAutoIO(arg0: $BlockPos_, arg1: $Direction_, arg2: $IO_): void;
    }
    export class $IAutoIOTrait {
    }
    export interface $IAutoIOTrait extends $IProxyAutoIOTrait {
        serverTick(): void;
        setAutoIOSide(arg0: $Direction_, arg1: $IO_): void;
        setAutoIOInterval(arg0: number): void;
        setAutoIOEnabled(arg0: boolean): void;
        clearAutoIO(): void;
        getRuntimeAutoIO(): $RuntimeAutoIO;
        set autoIOInterval(value: number);
        set autoIOEnabled(value: boolean);
        get runtimeAutoIO(): $RuntimeAutoIO;
    }
    export class $SimpleCapabilityTrait<T, C> extends $RecipeCapabilityTrait {
        setCapabilityIOSide(arg0: $Direction_, arg1: $IO_): void;
        getCapContent(arg0: $IO_): T;
        getCapabilityIO(arg0: C): $IO;
        clearCapabilityIO(): void;
        /**
         * @deprecated
         */
        setCapabilityIOOverride(arg0: $CapabilityIO): void;
        getDefinition(): $SimpleCapabilityTraitDefinition<T, C>;
        slotNames: $RuntimeValue<$List<string>>;
        recipeLogics: $RuntimeValue<$List<string>>;
        recipeHandlerIO: $RuntimeValue<$IO>;
        distinct: $RuntimeValue<boolean>;
        capabilityIO: $RuntimeCapabilityIO;
        constructor(arg0: $MBDMachine, arg1: $SimpleCapabilityTraitDefinition<T, C>);
        set capabilityIOOverride(value: $CapabilityIO);
        get definition(): $SimpleCapabilityTraitDefinition<T, C>;
    }
    export class $TraitDefinitionType<T extends $TraitDefinition> {
        createDefinition(): T;
        getName(): string;
        getGroup(): string;
        registerGlobalCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        registerCapabilities(arg0: $MBDMachineDefinition, arg1: $RegisterCapabilitiesEvent): void;
        name: string;
        group: string;
    }
    export class $RecipeCapabilityTraitDefinition extends $TraitDefinition {
        getRecipeLogics(): $List<string>;
        setRecipeHandlerIO(arg0: $IO_): void;
        setRecipeLogics(arg0: $List_<string>): void;
        setDistinct(arg0: boolean): void;
        setSlotNames(arg0: $List_<string>): void;
        getRecipeHandlerIO(): $IO;
        getSlotNames(): $List<string>;
        isDistinct(): boolean;
        static CODEC: $Codec<$TraitDefinition>;
        static EMPTY_TYPE: $TraitDefinitionType<$TraitDefinition>;
        static EMPTY: $TraitDefinition;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TraitDefinition>;
        constructor();
    }
    export class $TraitDefinition implements $IConfigurable, $IPersistedSerializable {
        setKeepDataOnDrop(arg0: boolean): void;
        renderInEditor(arg0: $MultiBufferSource_, arg1: number): void;
        createTrait(arg0: $MBDMachine): $ITrait;
        canBeAddedTo(arg0: $Collection_<$TraitDefinition>): boolean;
        getBESRenderer(arg0: $IMachine): $IRenderer;
        isKeepDataOnDrop(): boolean;
        getIcon(): $IGuiTexture;
        getName(): string;
        type(): $TraitDefinitionType<never>;
        setPriority(arg0: number): void;
        getPriority(): number;
        setName(arg0: string): void;
        getTranslateKey(): string;
        isCompatibleWith(arg0: $TraitDefinition): boolean;
        allowMultiple(): boolean;
        isMandatory(): boolean;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        static CODEC: $Codec<$TraitDefinition>;
        static EMPTY_TYPE: $TraitDefinitionType<$TraitDefinition>;
        static EMPTY: $TraitDefinition;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TraitDefinition>;
        constructor();
        get icon(): $IGuiTexture;
        get translateKey(): string;
        get mandatory(): boolean;
        get configurableName(): string;
    }
}
