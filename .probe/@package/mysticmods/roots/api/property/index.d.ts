import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/property" {
    export class $Property$IntegerProperty extends $Record implements $Property<number> {
        getSerializer(): $PropertySerializer<never>;
        getDefaultValue(): number;
        value(): number;
        getValue(): number;
        comment(): string;
        defaultValue(): number;
        getType(): $PropertyType<never>;
        getComment(): string;
        get(): number;
        static SERIALIZER: $ResourceKey<$PropertySerializer<never>>;
        static TYPE: $ResourceKey<$PropertyType<never>>;
        constructor(arg0: number, arg1: string, arg2: (number) | undefined);
        constructor(arg0: number, arg1: string);
        constructor(defaultValue: number, comment: string, value: number);
        get serializer(): $PropertySerializer<never>;
        get type(): $PropertyType<never>;
    }
    /**
     * Values that may be interpreted as {@link $Property$IntegerProperty}.
     */
    export type $Property$IntegerProperty_ = { value?: number, comment?: string, defaultValue?: number,  } | [value?: number, comment?: string, defaultValue?: number, ];
    export class $Property$DoubleProperty extends $Record implements $Property<number> {
        getSerializer(): $PropertySerializer<never>;
        getDefaultValue(): number;
        value(): number;
        getValue(): number;
        comment(): string;
        defaultValue(): number;
        getType(): $PropertyType<never>;
        getComment(): string;
        get(): number;
        static SERIALIZER: $ResourceKey<$PropertySerializer<never>>;
        static TYPE: $ResourceKey<$PropertyType<never>>;
        constructor(arg0: number, arg1: string, arg2: (number) | undefined);
        constructor(arg0: number, arg1: string);
        constructor(defaultValue: number, comment: string, value: number);
        get serializer(): $PropertySerializer<never>;
        get type(): $PropertyType<never>;
    }
    /**
     * Values that may be interpreted as {@link $Property$DoubleProperty}.
     */
    export type $Property$DoubleProperty_ = { value?: number, comment?: string, defaultValue?: number,  } | [value?: number, comment?: string, defaultValue?: number, ];
    export interface $PropertySerializer<T> extends RegistryMarked<RegistryTypes.RootsPropertySerializersTag, RegistryTypes.RootsPropertySerializers> {}
    export class $Property$StringProperty extends $Record implements $Property<string> {
        getSerializer(): $PropertySerializer<never>;
        getDefaultValue(): string;
        value(): string;
        getValue(): string;
        comment(): string;
        defaultValue(): string;
        getType(): $PropertyType<never>;
        getComment(): string;
        get(): string;
        static SERIALIZER: $ResourceKey<$PropertySerializer<never>>;
        static TYPE: $ResourceKey<$PropertyType<never>>;
        constructor(arg0: string, arg1: string, arg2: (string) | undefined);
        constructor(arg0: string, arg1: string);
        constructor(defaultValue: string, comment: string, value: string);
        get serializer(): $PropertySerializer<never>;
        get type(): $PropertyType<never>;
    }
    /**
     * Values that may be interpreted as {@link $Property$StringProperty}.
     */
    export type $Property$StringProperty_ = { value?: string, comment?: string, defaultValue?: string,  } | [value?: string, comment?: string, defaultValue?: string, ];
    export class $PropertyHolder<T extends $Property<never>> extends $Record {
        value(): T;
        id(): $ResourceLocation;
        static FULL_LIST_CODEC: $Codec<$List<$PropertyHolder<$Property<never>>>>;
        static CODEC: $Codec<$PropertyHolder<$Property<never>>>;
        static FULL_CODEC: $Codec<$PropertyHolder<$Property<never>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PropertyHolder<$Property<never>>>;
        constructor(id: $ResourceLocation_, value: T);
    }
    /**
     * Values that may be interpreted as {@link $PropertyHolder}.
     */
    export type $PropertyHolder_<T> = { value?: $Property<never>, id?: $ResourceLocation_,  } | [value?: $Property<never>, id?: $ResourceLocation_, ];
    export interface $PropertyType<T> extends RegistryMarked<RegistryTypes.RootsPropertyTypesTag, RegistryTypes.RootsPropertyTypes> {}
    export class $Property$BooleanProperty extends $Record implements $Property<boolean> {
        getSerializer(): $PropertySerializer<never>;
        getDefaultValue(): boolean;
        value(): boolean;
        getValue(): boolean;
        comment(): string;
        defaultValue(): boolean;
        getType(): $PropertyType<never>;
        getComment(): string;
        get(): boolean;
        static SERIALIZER: $ResourceKey<$PropertySerializer<never>>;
        static TYPE: $ResourceKey<$PropertyType<never>>;
        constructor(arg0: boolean, arg1: string, arg2: (boolean) | undefined);
        constructor(arg0: boolean, arg1: string);
        constructor(defaultValue: boolean, comment: string, value: boolean);
        get serializer(): $PropertySerializer<never>;
        get type(): $PropertyType<never>;
    }
    /**
     * Values that may be interpreted as {@link $Property$BooleanProperty}.
     */
    export type $Property$BooleanProperty_ = { value?: boolean, comment?: string, defaultValue?: boolean,  } | [value?: boolean, comment?: string, defaultValue?: boolean, ];
    export class $Property<T> {
        static ofString(arg0: string, arg1: string): $Property$StringProperty;
        static ofFloat(arg0: number, arg1: string): $Property$FloatProperty;
        static ofInt(arg0: number, arg1: string): $Property$IntegerProperty;
        static ofBool(arg0: boolean, arg1: string): $Property$BooleanProperty;
        static ofDouble(arg0: number, arg1: string): $Property$DoubleProperty;
        static CODEC: $Codec<$Property<never>>;
        static FULL_CODEC: $Codec<$Property<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Property<never>>;
    }
    export interface $Property<T> {
        getSerializer(): $PropertySerializer<never>;
        getDefaultValue(): T;
        get(): T;
        getValue(): T;
        getType(): $PropertyType<never>;
        getComment(): string;
        get serializer(): $PropertySerializer<never>;
        get defaultValue(): T;
        get value(): T;
        get type(): $PropertyType<never>;
        get comment(): string;
    }
    export class $PropertyType<T extends $Property<never>> {
        static get(arg0: $ResourceKey_<$PropertyType<never>>): $PropertyType<never>;
    }
    export interface $PropertyType<T extends $Property<never>> {
    }
    /**
     * Values that may be interpreted as {@link $PropertyType}.
     */
    export type $PropertyType_<T> = RegistryTypes.RootsPropertyTypes;
    export class $PropertySerializer<T extends $Property<never>> {
        static get(arg0: $ResourceKey_<$PropertySerializer<never>>): $PropertySerializer<never>;
    }
    export interface $PropertySerializer<T extends $Property<never>> {
        codec(): $MapCodec<T>;
        fullCodec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$ByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $PropertySerializer}.
     */
    export type $PropertySerializer_<T> = RegistryTypes.RootsPropertySerializers;
    export class $Property$FloatProperty extends $Record implements $Property<number> {
        getSerializer(): $PropertySerializer<never>;
        getDefaultValue(): number;
        value(): number;
        getValue(): number;
        comment(): string;
        defaultValue(): number;
        getType(): $PropertyType<never>;
        getComment(): string;
        get(): number;
        static SERIALIZER: $ResourceKey<$PropertySerializer<never>>;
        static TYPE: $ResourceKey<$PropertyType<never>>;
        constructor(arg0: number, arg1: string, arg2: (number) | undefined);
        constructor(arg0: number, arg1: string);
        constructor(defaultValue: number, comment: string, value: number);
        get serializer(): $PropertySerializer<never>;
        get type(): $PropertyType<never>;
    }
    /**
     * Values that may be interpreted as {@link $Property$FloatProperty}.
     */
    export type $Property$FloatProperty_ = { value?: number, comment?: string, defaultValue?: number,  } | [value?: number, comment?: string, defaultValue?: number, ];
}
