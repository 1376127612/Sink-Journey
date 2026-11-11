import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $MultipartPlaceContext, $MultipartGenerator } from "@package/codechicken/multipart/util";
import { $MCDataInput } from "@package/codechicken/lib/data";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Collection } from "@package/java/util";
import { $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Class } from "@package/java/lang";
import { $MultiPart } from "@package/codechicken/multipart/api/part";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $TileMultipart } from "@package/codechicken/multipart/block";
export * as part from "@package/codechicken/multipart/api/part";

declare module "@package/codechicken/multipart/api" {
    export class $PartConverter {
        convert(arg0: $MultipartPlaceContext): $PartConverter$ConversionResult<$MultiPart>;
        convert(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): $PartConverter$ConversionResult<$Collection<$MultiPart>>;
        static emptyResultList(): $PartConverter$ConversionResult<$Collection<$MultiPart>>;
        static emptyResult(): $PartConverter$ConversionResult<$MultiPart>;
        static PART_CONVERTERS: $ResourceKey<$Registry<$PartConverter>>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $PartConverter}.
     */
    export type $PartConverter_ = RegistryTypes.CbMultipartPartConverters;
    export class $MultipartType<T extends $MultiPart> {
        createPartClient(arg0: $MCDataInput): T;
        createPartServer(arg0: $CompoundTag_): T;
        getRegistryName(): $ResourceLocation;
        static MULTIPART_TYPES: $ResourceKey<$Registry<$MultipartType<never>>>;
        constructor();
        get registryName(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MultipartType}.
     */
    export type $MultipartType_<T> = RegistryTypes.CbMultipartMultipartTypes;
    export interface $MultipartType<T> extends RegistryMarked<RegistryTypes.CbMultipartMultipartTypesTag, RegistryTypes.CbMultipartMultipartTypes> {}
    export class $RegisterMultipartTraitsEvent extends $Event implements $IModBusEvent {
        registerClientPassthroughInterface(arg0: $Class<never>): void;
        registerServerPassthroughInterface(arg0: $Class<never>): void;
        registerPassthroughInterface(arg0: $Class<never>): void;
        registerTrait(arg0: $Class<never>, arg1: $Class<$TileMultipart>): void;
        registerClientTrait(arg0: $Class<never>, arg1: $Class<$TileMultipart>): void;
        registerServerTrait(arg0: $Class<never>, arg1: $Class<$TileMultipart>): void;
        constructor(arg0: $MultipartGenerator);
    }
    export interface $PartConverter extends RegistryMarked<RegistryTypes.CbMultipartPartConvertersTag, RegistryTypes.CbMultipartPartConverters> {}
    export class $PartConverter$ConversionResult<T> extends $Record {
        result(): T;
        static success<T>(arg0: T): $PartConverter$ConversionResult<T>;
        success(): boolean;
        constructor(result: T, success: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PartConverter$ConversionResult}.
     */
    export type $PartConverter$ConversionResult_<T> = { success?: boolean, result?: any,  } | [success?: boolean, result?: any, ];
}
