import { $DeferredRegister, $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $Holder_, $HolderOwner, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Keyable, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $DataPreprocessor_ } from "@package/sirttas/dpanvil/api/data/preprocessor";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $Collection_ } from "@package/java/util";
export * as preprocessor from "@package/sirttas/dpanvil/api/data/preprocessor";

declare module "@package/sirttas/dpanvil/api/data" {
    export class $IDataManager$Builder<T> {
    }
    export interface $IDataManager$Builder<T> {
        build(): $IDataManager<T>;
        folder(arg0: string): $IDataManager$Builder<T>;
        withDefault(arg0: T): $IDataManager$Builder<T>;
        withDefault(arg0: $Function_<$ResourceLocation, T>): $IDataManager$Builder<T>;
        idSetter(arg0: $BiConsumer_<T, $ResourceLocation>): $IDataManager$Builder<T>;
        preprocessor(arg0: $DataPreprocessor_): $IDataManager$Builder<T>;
        defaultPreprocessors(): $IDataManager$Builder<T>;
    }
    export class $IDataManager<T> {
        static builder<T>(arg0: $Class<T>, arg1: $ResourceKey_<$IDataManager<T>>): $IDataManager$Builder<T>;
        static keyCodec<T>(arg0: $ResourceKey_<$IDataManager<T>>): $Codec<$ResourceKey<T>>;
        static createKey<T>(arg0: $ResourceKey_<$IDataManager<T>>, arg1: $ResourceLocation_): $ResourceKey<T>;
        static createManagerKey<T>(arg0: $ResourceLocation_): $ResourceKey<$IDataManager<T>>;
    }
    export interface $IDataManager<T> extends $PreparableReloadListener, $Codec<T>, $Keyable, $HolderOwner<T> {
        get(arg0: $ResourceLocation_): T;
        get(arg0: $ResourceKey_<T>): T;
        decode<U>(arg0: $DynamicOps<U>, arg1: U): $DataResult<$Pair<T, U>>;
        encode<U>(arg0: T, arg1: $DynamicOps<U>, arg2: U): $DataResult<U>;
        getKey(): $ResourceKey<$IDataManager<T>>;
        getId(arg0: T | null): $ResourceLocation;
        getId(arg0: $Holder_<T>): $ResourceLocation;
        keys<U>(arg0: $DynamicOps<U>): $Stream<U>;
        getOrDefault(arg0: $ResourceLocation_, arg1: T | null): T;
        getData(): $Map<$ResourceLocation, T>;
        has(arg0: T): boolean;
        getContentType(): $Class<T>;
        getOptional(arg0: $ResourceLocation_): (T) | undefined;
        getAll(arg0: $Collection_<$ResourceLocation_>): $List<T>;
        setData(arg0: $Map_<$ResourceLocation_, T>): void;
        holders(): $Stream<$Holder<T>>;
        registerComponentType(arg0: $DeferredRegister<$DataComponentType_<never>>): $DeferredHolder<$DataComponentType<never>, $DataComponentType<$Holder<T>>>;
        getFolder(): string;
        hasId(arg0: $ResourceLocation_): boolean;
        getOrCreateHolder(arg0: $ResourceLocation_): $Holder<T>;
        getOrCreateHolder(arg0: $ResourceKey_<T>): $Holder<T>;
        get key(): $ResourceKey<$IDataManager<T>>;
        get contentType(): $Class<T>;
        get folder(): string;
    }
}
