import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $VariableDeclarationModelBase } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/variable";
import { $MachineBlueprintGraph } from "@package/com/lowdragmc/mbd2/common/blueprint";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Constant } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/constant";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";

declare module "@package/com/lowdragmc/mbd2/common/machine/definition/config/blueprint" {
    export class $MachineBlueprintBinding implements $IConfigurable, $IPersistedSerializable {
        setEnabled(arg0: boolean): void;
        withVariable(arg0: string, arg1: $Constant): $MachineBlueprintBinding;
        hasBlueprint(): boolean;
        static inputVariables(arg0: $MachineBlueprintGraph): $List<$VariableDeclarationModelBase>;
        loadGraphTag(): $CompoundTag;
        pruneOverrides(arg0: $MachineBlueprintGraph): void;
        setBlueprintPath(arg0: string): void;
        getBlueprintPath(): string;
        resolveVariableValues(arg0: $MachineBlueprintGraph, arg1: $HolderLookup$Provider): $Map<string, $Object>;
        loadGraph(): $MachineBlueprintGraph;
        static ofInline(arg0: $CompoundTag_): $MachineBlueprintBinding;
        setInlined(arg0: boolean): void;
        isInlined(): boolean;
        isEnabled(): boolean;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        describe(): string;
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
        static NO_BLUEPRINT: string;
        constructor();
        get configurableName(): string;
    }
}
