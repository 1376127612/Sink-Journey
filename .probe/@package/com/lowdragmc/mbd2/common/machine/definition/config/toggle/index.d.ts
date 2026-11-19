import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $MachineSound } from "@package/com/lowdragmc/mbd2/client";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurableHistory, $IToggleConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $IRenderer } from "@package/com/lowdragmc/lowdraglib2/client/renderer";
import { $SoundSource_, $SoundEvent_, $SoundEvent, $SoundSource } from "@package/net/minecraft/sounds";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/com/lowdragmc/mbd2/common/machine/definition/config/toggle" {
    export class $ToggleCreativeTab extends $ToggleObject<$ResourceLocation> {
        getValue(): $ResourceLocation;
        setValue(arg0: $ResourceLocation_): void;
        static DEFAULT: $ResourceLocation;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: boolean);
    }
    export class $ToggleObject<T> implements $IToggleConfigurable {
        static ofDisabled<T>(arg0: T): $ToggleObject<T>;
        static ofDisabled<T>(): $ToggleObject<T>;
        getValue(): $CompoundTag;
        static of<T>(arg0: boolean, arg1: T): $ToggleObject<T>;
        setValue(arg0: $CompoundTag_): void;
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
    export class $ToggleLightValue extends $ToggleObject<number> {
        getValue(): number;
        setValue(arg0: number): void;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: number);
        constructor(arg0: number, arg1: boolean);
    }
    export class $ToggleAABB extends $ToggleObject<$AABB> {
        getValue(): $AABB;
        setValue(arg0: $AABB_): void;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: $AABB_);
        constructor(arg0: $AABB_, arg1: boolean);
    }
    export class $ToggleRenderer extends $ToggleObject<$IRenderer> {
        getValue(): $IRenderer;
        setValue(arg0: $IRenderer): void;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: $IRenderer);
        constructor(arg0: $IRenderer, arg1: boolean);
    }
    export class $ToggleDirection extends $ToggleObject<$Direction> {
        getValue(): $Direction;
        setValue(arg0: $Direction_): void;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: $Direction_);
        constructor(arg0: $Direction_, arg1: boolean);
    }
    export class $ToggleShape extends $ToggleObject<$VoxelShape> implements $INBTSerializable<$CompoundTag> {
        getValue(): $VoxelShape;
        setValue(arg0: $VoxelShape): void;
        static BLOCK: $AABB;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: $VoxelShape);
        constructor(arg0: $VoxelShape, arg1: boolean);
    }
    export class $ToggleMachineSound implements $IToggleConfigurable {
        setPitch(arg0: number): void;
        getSoundEvent(): $SoundEvent;
        setSoundEvent(arg0: $SoundEvent_): void;
        setSound(arg0: $ResourceLocation_): void;
        setLoop(arg0: boolean): void;
        setLoopWithShuffle(arg0: boolean): void;
        isLoopWithShuffle(): boolean;
        setSoundSource(arg0: $SoundSource_): void;
        createMachineSound(arg0: $BlockPos_, arg1: $BooleanSupplier_): $MachineSound;
        isLoop(): boolean;
        setDelay(arg0: number): void;
        getDelay(): number;
        isEnable(): boolean;
        getSoundSource(): $SoundSource;
        setVolume(arg0: number): void;
        setEnable(arg0: boolean): void;
        getPitch(): number;
        getVolume(): number;
        getSound(): $ResourceLocation;
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
}
