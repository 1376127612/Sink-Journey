import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $List, $List_, $Deque } from "@package/java/util";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $EntityRenderersEvent$RegisterRenderers } from "@package/net/neoforged/neoforge/client/event";
import { $Supplier } from "@package/java/util/function";
import { $IRenderer } from "@package/com/lowdragmc/lowdraglib2/client/renderer";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $BlockEntityRendererProvider } from "@package/net/minecraft/client/renderer/blockentity";
import { $Runnable_ } from "@package/java/lang";
import { $File, $File_ } from "@package/java/io";
import { $RegisterEvent } from "@package/net/neoforged/neoforge/registries";
import { $IMachineBlockEntity } from "@package/com/lowdragmc/mbd2/api/blockentity";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ProjectType } from "@package/com/lowdragmc/lowdraglib2/editor/project";
import { $MachineState, $ConfigBlockProperties, $ConfigMachineSettings, $StateMachine, $ConfigRecipeLogicSettings, $ConfigPartSettings, $ConfigItemProperties } from "@package/com/lowdragmc/mbd2/common/machine/definition/config";
import { $MBDRecipeType } from "@package/com/lowdragmc/mbd2/api/recipe";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as config from "@package/com/lowdragmc/mbd2/common/machine/definition/config";

declare module "@package/com/lowdragmc/mbd2/common/machine/definition" {
    export class $MBDMachineDefinition implements $IConfigurable, $IPersistedSerializable {
        createBlock(): $Block;
        loadProductiveTag(arg0: $File_, arg1: $CompoundTag_, arg2: $Deque<$Runnable_>): $MBDMachineDefinition;
        projectFile(): $File;
        loadFactory(): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        reloadFromProjectFile(): void;
        isCreatedFromProjectFile(): boolean;
        itemProperties(): $ConfigItemProperties;
        blockEntityType(): $BlockEntityType<never>;
        machineSettings(): $ConfigMachineSettings;
        createItem(arg0: $Block_): $Item;
        allowPartSettings(): boolean;
        blockProperties(): $ConfigBlockProperties;
        partSettings(): $ConfigPartSettings;
        stateMachine(): $StateMachine<never>;
        createMachine(arg0: $IMachineBlockEntity): $MBDMachine;
        createItemRenderer(): $IRenderer;
        createBESRR(): $BlockEntityRendererProvider<$BlockEntity>;
        runsRecipeType(arg0: $MBDRecipeType): boolean;
        createBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        static get(): $MBDMachineDefinition;
        static clear(): void;
        static builder(): $MBDMachineDefinition$Builder;
        id(): $ResourceLocation;
        static set(arg0: $MBDMachineDefinition): void;
        getState(arg0: string): $MachineState;
        block(): $Block;
        item(): $Item;
        asStack(): $ItemStack;
        asStack(arg0: number): $ItemStack;
        itemRenderer(): $IRenderer;
        initRenderer(arg0: $EntityRenderersEvent$RegisterRenderers): void;
        blockRenderer(): $IRenderer;
        static createDefault(): $MBDMachineDefinition;
        getDescriptionId(): string;
        appendHoverText(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        onRegistry(arg0: $RegisterEvent): void;
        primaryRecipeLogicName(): string;
        machineSettingsFactory(): $MBDMachineDefinition$ConfigMachineSettingsFactory;
        primaryRecipeLogicThreads(): number;
        recipeLogicSettings(): $ConfigRecipeLogicSettings;
        createBlockRenderer(): $IRenderer;
        createDefaultRootState(): $MachineState;
        partSettingsFactory(): $MBDMachineDefinition$ConfigPartSettingsFactory;
        runnableAdditionalRecipeLogics(arg0: string): $List<$ConfigRecipeLogicSettings>;
        registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
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
        static TYPE: $MachineDefinitionType<$MBDMachineDefinition>;
        get createdFromProjectFile(): boolean;
        get descriptionId(): string;
        get configurableName(): string;
    }
    export class $MBDMachineDefinition$ConfigPartSettingsFactory {
    }
    export interface $MBDMachineDefinition$ConfigPartSettingsFactory extends $Supplier<$ConfigPartSettings> {
    }
    /**
     * Values that may be interpreted as {@link $MBDMachineDefinition$ConfigPartSettingsFactory}.
     */
    export type $MBDMachineDefinition$ConfigPartSettingsFactory_ = (() => void);
    export class $MachineDefinitionType<T extends $MBDMachineDefinition> {
        createDefinition(): T;
        getEditorProjectType(): $ProjectType;
        getFileSuffix(): string;
        getName(): string;
        getFolder(): string;
        folder: string;
        fileSuffix: string;
        name: string;
        get editorProjectType(): $ProjectType;
    }
    export class $MBDMachineDefinition$Builder {
        itemProperties(arg0: $ConfigItemProperties): $MBDMachineDefinition$Builder;
        machineSettings(arg0: $MBDMachineDefinition$ConfigMachineSettingsFactory_): $MBDMachineDefinition$Builder;
        blockProperties(arg0: $ConfigBlockProperties): $MBDMachineDefinition$Builder;
        partSettings(arg0: $MBDMachineDefinition$ConfigPartSettingsFactory_): $MBDMachineDefinition$Builder;
        id(arg0: $ResourceLocation_): $MBDMachineDefinition$Builder;
        build(): $MBDMachineDefinition;
        recipeLogicSettings(arg0: $ConfigRecipeLogicSettings): $MBDMachineDefinition$Builder;
        rootState(arg0: $MachineState): $MBDMachineDefinition$Builder;
    }
    export class $MBDMachineDefinition$ConfigMachineSettingsFactory {
    }
    export interface $MBDMachineDefinition$ConfigMachineSettingsFactory extends $Supplier<$ConfigMachineSettings> {
    }
    /**
     * Values that may be interpreted as {@link $MBDMachineDefinition$ConfigMachineSettingsFactory}.
     */
    export type $MBDMachineDefinition$ConfigMachineSettingsFactory_ = (() => void);
}
