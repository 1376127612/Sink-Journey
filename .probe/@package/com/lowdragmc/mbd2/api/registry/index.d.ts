import { $TraitDefinitionType } from "@package/com/lowdragmc/mbd2/common/trait";
import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $MBDMachineDefinition, $MachineDefinitionType } from "@package/com/lowdragmc/mbd2/common/machine/definition";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeSerializer } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $AutoRegistry$LDLibRegister } from "@package/com/lowdragmc/lowdraglib2/registry";
import { $Spliterator, $Iterator, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $PatternPredicate } from "@package/com/lowdragmc/mbd2/api/pattern/predicates";
import { $RecipeCondition, $MBDRecipeType } from "@package/com/lowdragmc/mbd2/api/recipe";
import { $Consumer_, $Supplier } from "@package/java/util/function";
import { $MBDGadgetsItem } from "@package/com/lowdragmc/mbd2/common/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeCapability } from "@package/com/lowdragmc/mbd2/api/capability/recipe";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Iterable } from "@package/java/lang";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/lowdragmc/mbd2/api/registry" {
    export class $MBDRegistry$RL<V> extends $MBDRegistry<$ResourceLocation, V> {
        static REGISTERED: $Map<$ResourceLocation, $MBDRegistry<never, never>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $MBDRegistry<K, V> implements $Iterable<V> {
        getRegistryName(): $ResourceLocation;
        codec(): $Codec<V>;
        remove(arg0: K): boolean;
        get(arg0: K): V;
        values(): $Set<V>;
        replace(arg0: K, arg1: V): V;
        iterator(): $Iterator<V>;
        getKey(arg0: V): K;
        register(arg0: K, arg1: V): void;
        keys(): $Set<K>;
        getOrDefault(arg0: K, arg1: V): V;
        entries(): $Set<$Map$Entry<K, V>>;
        isFrozen(): boolean;
        freeze(): void;
        registry(): $Map<K, V>;
        writeBuf(arg0: V, arg1: $RegistryFriendlyByteBuf): void;
        readBuf(arg0: $RegistryFriendlyByteBuf): V;
        containKey(arg0: K): boolean;
        saveToNBT(arg0: V): $Tag;
        unfreeze(): void;
        loadFromNBT(arg0: $Tag_): V;
        containValue(arg0: V): boolean;
        registerOrOverride(arg0: K, arg1: V): V;
        getOrDefaultKey(arg0: V, arg1: K): K;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, V>;
        spliterator(): $Spliterator<V>;
        forEach(arg0: $Consumer_<V>): void;
        static REGISTERED: $Map<$ResourceLocation, $MBDRegistry<never, never>>;
        constructor(arg0: $ResourceLocation_);
        [Symbol.iterator](): Iterator<V>
        get registryName(): $ResourceLocation;
        get frozen(): boolean;
    }
    export class $MBDRegistries {
        static FAKE_MACHINE(): $MBDMachineDefinition;
        static GADGETS_ITEM(): $MBDGadgetsItem;
        static init(): void;
        static getFakeMachineDefinition(): $MBDMachineDefinition;
        static MACHINE_DEFINITIONS: $MBDRegistry$RL<$MBDMachineDefinition>;
        static PATTERN_PREDICATES: $AutoRegistry$LDLibRegister<$PatternPredicate, $Supplier<$PatternPredicate>>;
        static RECIPE_TYPES: $MBDRegistry$RL<$MBDRecipeType>;
        static RECIPE_SERIALIZERS: $DeferredRegister<$RecipeSerializer<never>>;
        static MACHINE_DEFINITION_TYPES: $MBDRegistry$String<$MachineDefinitionType<never>>;
        static BLOCKS: $DeferredRegister<$Block>;
        static TRAIT_DEFINITION_TYPES: $MBDRegistry$String<$TraitDefinitionType<never>>;
        static RECIPE_CAPABILITIES: $MBDRegistry$String<$RecipeCapability<never>>;
        static BLOCK_ENTITY_TYPES: $DeferredRegister<$BlockEntityType<never>>;
        static RECIPE_CONDITIONS: $AutoRegistry$LDLibRegister<$RecipeCondition, $Supplier<$RecipeCondition>>;
        constructor();
        static get fakeMachineDefinition(): $MBDMachineDefinition;
    }
    export class $MBDRegistry$String<V> extends $MBDRegistry<string, V> {
        static REGISTERED: $Map<$ResourceLocation, $MBDRegistry<never, never>>;
        constructor(arg0: $ResourceLocation_);
    }
}
