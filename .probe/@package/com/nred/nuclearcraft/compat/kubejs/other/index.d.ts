import { $Consumer } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BlockBuilder, $BlockItemBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/nred/nuclearcraft/compat/kubejs/other" {
    export class $BatteryBuilder$BatteryItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $RTGBuilder extends $BlockBuilder {
        /**
         * Sets the RTG power and radiation.
         */
        setRTGData(arg0: number, arg1: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $BatteryBuilder extends $BlockBuilder {
        /**
         * Sets the battery capacity and max_transfer.
         */
        setBatteryData(arg0: number, arg1: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $HXTubeBuilder extends $BlockBuilder {
        /**
         * Sets the HX tube heatTransferCoefficient and heatRetentionMult.
         */
        setHXTubeData(arg0: number, arg1: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $HXTubeBuilder$HXTubeItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $RTGBuilder$RTGItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
}
