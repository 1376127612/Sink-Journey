import { $Registry } from "@package/net/minecraft/core";
import { $FlowingFluid } from "@package/net/minecraft/world/level/material";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $KubeColor } from "@package/dev/latvian/mods/kubejs/color";
import { $FluidTypeBuilder, $FluidBlockBuilder, $FluidBucketItemBuilder, $FlowingFluidBuilder, $FluidBuilder } from "@package/dev/latvian/mods/kubejs/fluid";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/nred/nuclearcraft/compat/kubejs/fluid" {
    export class $FluidNakBuilder extends $FluidBuilder {
        static WATER_COLOR: $KubeColor;
        bucketItem: $FluidBucketItemBuilder;
        registryKey: $ResourceKey<$Registry<$FlowingFluid>>;
        flowingFluid: $FlowingFluidBuilder;
        sourceLine: $SourceLine;
        fluidType: $FluidTypeBuilder;
        block: $FluidBlockBuilder;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FluidHotGasBuilder extends $FluidNakBuilder {
        static WATER_COLOR: $KubeColor;
        bucketItem: $FluidBucketItemBuilder;
        registryKey: $ResourceKey<$Registry<$FlowingFluid>>;
        flowingFluid: $FlowingFluidBuilder;
        sourceLine: $SourceLine;
        fluidType: $FluidTypeBuilder;
        block: $FluidBlockBuilder;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FluidHotNakBuilder extends $FluidNakBuilder {
        static WATER_COLOR: $KubeColor;
        bucketItem: $FluidBucketItemBuilder;
        registryKey: $ResourceKey<$Registry<$FlowingFluid>>;
        flowingFluid: $FlowingFluidBuilder;
        sourceLine: $SourceLine;
        fluidType: $FluidTypeBuilder;
        block: $FluidBlockBuilder;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FluidGasBuilder extends $FluidBuilder {
        static WATER_COLOR: $KubeColor;
        bucketItem: $FluidBucketItemBuilder;
        registryKey: $ResourceKey<$Registry<$FlowingFluid>>;
        flowingFluid: $FlowingFluidBuilder;
        sourceLine: $SourceLine;
        fluidType: $FluidTypeBuilder;
        block: $FluidBlockBuilder;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
}
