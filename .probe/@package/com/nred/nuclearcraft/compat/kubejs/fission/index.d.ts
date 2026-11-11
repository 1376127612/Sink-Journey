import { $Consumer } from "@package/java/util/function";
import { $FissionCoolerPortType } from "@package/com/nred/nuclearcraft/multiblock/fisson/pebble";
import { $Registry } from "@package/net/minecraft/core";
import { $BlockBuilder, $BlockItemBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $FissionCoolantHeaterPortType } from "@package/com/nred/nuclearcraft/multiblock/fisson/molten_salt";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/nred/nuclearcraft/compat/kubejs/fission" {
    export class $FissionCoolerAndPortBuilder extends $BlockBuilder {
        /**
         * Sets the gas cooler coolingRate, fluid id, placement rule, singular and plural strings.
         */
        setCoolerData(arg0: number, arg1: $ResourceLocation_, arg2: string, arg3: string, arg4: string): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FissionCoolerPortBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        coolerPortType: $FissionCoolerPortType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FissionCoolantHeaterPortBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        heaterPortType: $FissionCoolantHeaterPortType;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FissionSourceBuilder extends $BlockBuilder {
        /**
         * Sets the source efficiency.
         */
        setSourceData(arg0: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
        set sourceData(value: number);
    }
    export class $FissionHeatSinkBuilder extends $BlockBuilder {
        /**
         * Sets the heat sink coolingRate, placement rule, singular and plural strings.
         */
        setHeatSinkData(arg0: number, arg1: string, arg2: string, arg3: string): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FissionCoolantHeaterAndPortBuilder extends $BlockBuilder {
        /**
         * Sets the coolant heater coolingRate, fluid id, placement rule, singular and plural strings.
         */
        setCoolantHeaterData(arg0: number, arg1: $ResourceLocation_, arg2: string, arg3: string, arg4: string): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FissionShieldBuilder$FissionShieldItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $FissionSourceBuilder$FissionSourceItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $FissionCoolerAndPortBuilder$FissionCoolerItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $FissionCoolantHeaterAndPortBuilder$FissionCoolantHeaterItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $FissionShieldBuilder extends $BlockBuilder {
        /**
         * Sets the shield heatPerFlux and efficiency.
         */
        setShieldData(arg0: number, arg1: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FissionHeatSinkBuilder$FissionHeatSinkItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
}
