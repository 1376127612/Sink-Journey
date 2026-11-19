import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag, $IntTag } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $List_ } from "@package/java/util";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Vector3f } from "@package/org/joml";
import { $IConfigurable, $IToggleConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";

declare module "@package/com/lowdragmc/mbd2/common/machine/definition/config/fx" {
    export class $MachineFXConfig implements $IConfigurable, $IPersistedSerializable {
        getScale(): $Vector3f;
        static sizeTag(arg0: $List_<$MachineFXConfig>): $IntTag;
        static listOfSize(arg0: $IntTag): $List<$MachineFXConfig>;
        getMaxDistance(): number;
        setForcedDeath(arg0: boolean): void;
        setReplaceExisting(arg0: boolean): void;
        setFxLocation(arg0: $ResourceLocation_): void;
        setFollowFacing(arg0: boolean): void;
        getFxLocation(): $ResourceLocation;
        isForcedDeath(): boolean;
        setMaxDistance(arg0: number): void;
        isReplaceExisting(): boolean;
        isFollowFacing(): boolean;
        getName(): string;
        setName(arg0: string): void;
        getOffset(): $Vector3f;
        setOffset(arg0: $Vector3f): void;
        setDelay(arg0: number): void;
        setScale(arg0: $Vector3f): void;
        getRotation(): $Vector3f;
        setRotation(arg0: $Vector3f): void;
        getDelay(): number;
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
        constructor(arg0: string, arg1: $ResourceLocation_);
        constructor();
        get configurableName(): string;
    }
    export class $ToggleMachineFXs implements $IToggleConfigurable {
        getFxs(): $List<$MachineFXConfig>;
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
        get fxs(): $List<$MachineFXConfig>;
        get configurableName(): string;
    }
}
