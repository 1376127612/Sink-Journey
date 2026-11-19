import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $AutoWorldIO, $SimpleCapabilityTraitDefinition$Type, $TraitDefinitionType, $ToggleAutoIO, $IAutoWorldIOTrait, $IAutoIOTrait, $SimpleCapabilityTraitDefinition, $SimpleCapabilityTrait, $IUIProviderTrait, $FancyRendererSettings, $TraitDefinition } from "@package/com/lowdragmc/mbd2/common/trait";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $List, $List_ } from "@package/java/util";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurableHistory, $IToggleConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $RuntimeValue, $RuntimeAutoIO, $RuntimeCapabilityIO, $RuntimeAutoWorldIO } from "@package/com/lowdragmc/mbd2/common/runtime";
import { $Predicate, $Predicate_, $BooleanSupplier_, $IntSupplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStackTransfer } from "@package/com/lowdragmc/lowdraglib2/misc";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IO_, $IO } from "@package/com/lowdragmc/mbd2/api/capability/recipe";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $BlockCapabilityCache } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/lowdragmc/mbd2/common/trait/item" {
    export class $ItemSlotCapabilityTrait extends $SimpleCapabilityTrait<$IItemHandler, $Direction> implements $IAutoIOTrait, $IAutoWorldIOTrait {
        onContentsChanged(): void;
        getCapContent(arg0: $IO_): $IItemHandler;
        shouldSyncStorage(arg0: $LargeItemStackTransfer): boolean;
        handleAutoIO(arg0: $BlockPos_, arg1: $Direction_, arg2: $IO_): void;
        getRuntimeAutoIO(): $RuntimeAutoIO;
        getNearbyCache(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $BlockCapabilityCache<$IItemHandler, $Direction>;
        getRuntimeAutoWorldInput(): $RuntimeAutoWorldIO;
        getRuntimeAutoWorldOutput(): $RuntimeAutoWorldIO;
        isEmpty(): boolean;
        getDefinition(): $ItemSlotCapabilityTraitDefinition;
        setAutoIOSide(arg0: $Direction_, arg1: $IO_): void;
        setAutoIOInterval(arg0: number): void;
        setAutoIOEnabled(arg0: boolean): void;
        clearAutoIO(): void;
        getRuntimeAutoWorldIO(arg0: $IO_): $RuntimeAutoWorldIO;
        recipeLogics: $RuntimeValue<$List<string>>;
        recipeHandlerIO: $RuntimeValue<$IO>;
        distinct: $RuntimeValue<boolean>;
        storage: $LargeItemStackTransfer;
        filterEnabled: $RuntimeValue<boolean>;
        capabilityIO: $RuntimeCapabilityIO;
        autoWorldOutput: $RuntimeAutoWorldIO;
        slotNames: $RuntimeValue<$List<string>>;
        autoIO: $RuntimeAutoIO;
        ignoreItemStackLimit: $RuntimeValue<boolean>;
        allowSameItems: $RuntimeValue<boolean>;
        autoWorldInput: $RuntimeAutoWorldIO;
        slotLimit: $RuntimeValue<number>;
        constructor(arg0: $MBDMachine, arg1: $ItemSlotCapabilityTraitDefinition);
        get runtimeAutoIO(): $RuntimeAutoIO;
        get runtimeAutoWorldInput(): $RuntimeAutoWorldIO;
        get runtimeAutoWorldOutput(): $RuntimeAutoWorldIO;
        get empty(): boolean;
        get definition(): $ItemSlotCapabilityTraitDefinition;
        set autoIOInterval(value: number);
        set autoIOEnabled(value: boolean);
    }
    export class $ItemFancyRendererSettings extends $FancyRendererSettings {
        setRenderStack(arg0: boolean): void;
        isRenderStack(): boolean;
        setSpin(arg0: number): void;
        getSpin(): number;
        constructor(arg0: $ItemSlotCapabilityTraitDefinition);
    }
    export class $ItemFilterSettings implements $IToggleConfigurable, $Predicate<$ItemStack> {
        getFilterItems(): $List<$ItemStack>;
        getFilterTags(): $List<$ResourceLocation>;
        setWhitelist(arg0: boolean): void;
        setMatchComponent(arg0: boolean): void;
        setFilterItems(arg0: $List_<$ItemStack_>): void;
        isWhitelist(): boolean;
        isMatchComponent(): boolean;
        setFilterTags(arg0: $List_<$ResourceLocation_>): void;
        test(arg0: $ItemStack_): boolean;
        matches(arg0: $ItemStack_): boolean;
        isEnable(): boolean;
        setEnable(arg0: boolean): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        skipDisableSerialize(): boolean;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        or(arg0: $Predicate_<$CompoundTag>): $Predicate<$CompoundTag>;
        negate(): $Predicate<$CompoundTag>;
        and(arg0: $Predicate_<$CompoundTag>): $Predicate<$CompoundTag>;
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
    export class $LargeItemStackTransfer extends $ItemStackTransfer {
        getStackLimit(arg0: number, arg1: $ItemStack_): number;
        copy(): $LargeItemStackTransfer;
        static LARGE_COUNT: string;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: $BooleanSupplier_);
    }
    export class $ItemSlotCapabilityTraitDefinition extends $SimpleCapabilityTraitDefinition<$IItemHandler, $Direction> implements $IUIProviderTrait {
        createTrait(arg0: $MBDMachine): $ItemSlotCapabilityTrait;
        getSlotLimit(): number;
        getSlotSize(): number;
        getAutoWorldInput(): $AutoWorldIO;
        setAllowSameItems(arg0: boolean): void;
        setDropItems(arg0: boolean): void;
        getAutoWorldOutput(): $AutoWorldIO;
        setSlotLimit(arg0: number): void;
        isDropItems(): boolean;
        setSlotSize(arg0: number): void;
        isAllowSameItems(): boolean;
        isIgnoreItemStackLimit(): boolean;
        getItemFilterSettings(): $ItemFilterSettings;
        getItemRendererSettings(): $ItemFancyRendererSettings;
        setIgnoreItemStackLimit(arg0: boolean): void;
        getAutoIO(): $ToggleAutoIO;
        static CODEC: $Codec<$TraitDefinition>;
        static EMPTY_TYPE: $TraitDefinitionType<$TraitDefinition>;
        static TYPE: $SimpleCapabilityTraitDefinition$Type<$IItemHandler, $Direction, $ItemSlotCapabilityTraitDefinition>;
        static EMPTY: $TraitDefinition;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TraitDefinition>;
        constructor();
        get autoWorldInput(): $AutoWorldIO;
        get autoWorldOutput(): $AutoWorldIO;
        get itemFilterSettings(): $ItemFilterSettings;
        get itemRendererSettings(): $ItemFancyRendererSettings;
        get autoIO(): $ToggleAutoIO;
    }
}
