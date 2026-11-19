import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $EntityType, $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $Collection_, $Collection } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/lowdragmc/mbd2/api/recipe/ingredient" {
    export class $EntityIngredient implements $Predicate<$Collection<$Entity>> {
        static fromValues(arg0: $Stream<$EntityIngredient$Value>, arg1: number, arg2: $CompoundTag_): $EntityIngredient;
        test(arg0: $Collection_<$Entity>): boolean;
        isEmpty(): boolean;
        static of(arg0: $TagKey_<$EntityType<never>>, arg1: number): $EntityIngredient;
        static of(): $EntityIngredient;
        static of(arg0: $TagKey_<$EntityType<never>>, arg1: number, arg2: $CompoundTag_): $EntityIngredient;
        static of(arg0: number, ...arg1: $EntityType_<never>[]): $EntityIngredient;
        static of(arg0: $Stream<$EntityType_<never>>, arg1: number, arg2: $CompoundTag_): $EntityIngredient;
        getCount(): number;
        copy(): $EntityIngredient;
        copy(arg0: number): $EntityIngredient;
        getTypes(): $EntityType<never>[];
        setCount(arg0: number): void;
        getNbt(): $CompoundTag;
        setNbt(arg0: $CompoundTag_): void;
        or(arg0: $Predicate_<$Collection<$Entity>>): $Predicate<$Collection<$Entity>>;
        negate(): $Predicate<$Collection<$Entity>>;
        and(arg0: $Predicate_<$Collection<$Entity>>): $Predicate<$Collection<$Entity>>;
        types: $EntityType<never>[];
        static CODEC: $Codec<$EntityIngredient>;
        values: $EntityIngredient$Value[];
        static EMPTY: $EntityIngredient;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntityIngredient>;
        constructor(arg0: $Stream<$EntityIngredient$Value>, arg1: number, arg2: $CompoundTag_);
        get empty(): boolean;
    }
    export class $EntityIngredient$Value {
        static CODEC: $Codec<$EntityIngredient$Value>;
        static VALUES_CODEC: $Codec<$EntityIngredient$Value[]>;
        static MAP_CODEC: $MapCodec<$EntityIngredient$Value>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntityIngredient$Value>;
    }
    export interface $EntityIngredient$Value {
        copy(): $EntityIngredient$Value;
        getTypes(): $Collection<$EntityType<never>>;
        get types(): $Collection<$EntityType<never>>;
    }
}
