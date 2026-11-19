import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ProgressStyle, $MessageType, $IElement } from "@package/snownee/jade/api/ui";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Accessor, $IJadeProvider, $ITooltip } from "@package/snownee/jade/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $JadeFluidObject } from "@package/snownee/jade/api/fluid";
import { $List, $Map$Entry, $List_ } from "@package/java/util";
import { $Container } from "@package/net/minecraft/world";
import { $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/snownee/jade/api/view" {
    export class $IServerExtensionProvider<T> {
    }
    export interface $IServerExtensionProvider<T> extends $IJadeProvider {
        shouldRequestData(arg0: $Accessor<never>): boolean;
        getGroups(arg0: $Accessor<never>): $List<$ViewGroup<T>>;
    }
    export class $ItemView {
        amountText(arg0: string): $ItemView;
        /**
         * @deprecated
         */
        static groupOf(arg0: $Container, arg1: $Accessor<never>): $List<$ViewGroup<$ItemStack>>;
        /**
         * @deprecated
         */
        static groupOf(arg0: $Object, arg1: $Accessor<never>): $List<$ViewGroup<$ItemStack>>;
        description(arg0: $List_<$IElement>): $ItemView;
        item: $ItemStack;
        constructor(arg0: $ItemStack_);
    }
    export class $ViewGroup<T> {
        static listCodec<B extends $ByteBuf, T>(arg0: $StreamCodec<B, T>): $StreamCodec<B, $Map$Entry<$ResourceLocation, $List<$ViewGroup<T>>>>;
        static readList<T>(arg0: $CompoundTag_, arg1: string, arg2: $Function_<$CompoundTag, T>): $List<$ViewGroup<T>>;
        static codec<B extends $ByteBuf, T>(arg0: $StreamCodec<B, T>): $StreamCodec<B, $ViewGroup<T>>;
        setProgress(arg0: number): void;
        static saveList<T>(arg0: $CompoundTag_, arg1: string, arg2: $List_<$ViewGroup<T>>, arg3: $Function_<T, $CompoundTag>): boolean;
        static read<T>(arg0: $CompoundTag_, arg1: $Function_<$CompoundTag, T>): $ViewGroup<T>;
        save(arg0: $CompoundTag_, arg1: $Function_<T, $CompoundTag>): void;
        getExtraData(): $CompoundTag;
        id: string;
        views: $List<T>;
        constructor(arg0: $List_<T>);
        constructor(arg0: $List_<T>, arg1: (string) | undefined, arg2: ($CompoundTag_) | undefined);
        set progress(value: number);
        get extraData(): $CompoundTag;
    }
    export class $ClientViewGroup<T> {
        static map<IN, OUT>(arg0: $List_<$ViewGroup<IN>>, arg1: $Function_<IN, OUT>, arg2: $BiConsumer_<$ViewGroup<IN>, $ClientViewGroup<OUT>>): $List<$ClientViewGroup<OUT>>;
        static tooltip<T>(arg0: $ITooltip, arg1: $List_<$ClientViewGroup<T>>, arg2: boolean, arg3: $BiConsumer_<$ITooltip, $ClientViewGroup<T>>): void;
        shouldRenderGroup(): boolean;
        renderHeader(arg0: $ITooltip): void;
        messageType: $MessageType;
        extraData: $CompoundTag;
        title: $Component;
        views: $List<T>;
        boxProgress: number;
        constructor(arg0: $List_<T>);
    }
    export class $ProgressView {
        static read(arg0: $CompoundTag_): $ProgressView;
        static create(arg0: number): $CompoundTag;
        progress: number;
        style: $ProgressStyle;
        text: $Component;
        constructor(arg0: $ProgressStyle);
    }
    export class $EnergyView {
        static of(arg0: number, arg1: number): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: string): $EnergyView;
        current: string;
        max: string;
        overrideText: $Component;
        ratio: number;
        constructor();
    }
    export class $FluidView {
        static readDefault(arg0: $CompoundTag_, arg1: $DynamicOps<$Tag_>): $FluidView;
        /**
         * @deprecated
         */
        static readDefault(arg0: $CompoundTag_): $FluidView;
        /**
         * @deprecated
         */
        static writeDefault(arg0: $JadeFluidObject, arg1: number): $CompoundTag;
        static writeDefault(arg0: $JadeFluidObject, arg1: number, arg2: $DynamicOps<$Tag_>): $CompoundTag;
        current: string;
        overlay: $IElement;
        max: string;
        fluidName: $Component;
        static EMPTY_FLUID: $Component;
        overrideText: $Component;
        ratio: number;
        constructor(arg0: $IElement);
    }
    export class $IClientExtensionProvider<IN, OUT> {
    }
    export interface $IClientExtensionProvider<IN, OUT> extends $IJadeProvider {
        getClientGroups(arg0: $Accessor<never>, arg1: $List_<$ViewGroup<IN>>): $List<$ClientViewGroup<OUT>>;
    }
}
