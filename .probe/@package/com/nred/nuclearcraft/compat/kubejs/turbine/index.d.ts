import { $Consumer } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BlockBuilder, $BlockItemBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/nred/nuclearcraft/compat/kubejs/turbine" {
    export class $RotorStatorBuilder extends $BlockBuilder {
        /**
         * Sets the stator expansion_coefficient.
         */
        setStatorData(arg0: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
        set statorData(value: number);
    }
    export class $RotorStatorBuilder$RotorStatorItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $DynamoCoilBuilder extends $BlockBuilder {
        /**
         * Sets the dynamo coil conductivity, placement rule, singular and plural strings.
         */
        setDynamoCoilData(arg0: number, arg1: string, arg2: string, arg3: string): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $RotorBladeBuilder$RotorBladeItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $DynamoCoilBuilder$DynamoCoilItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $RotorBladeBuilder extends $BlockBuilder {
        /**
         * Sets the blade efficiency and expansion_coefficient.
         */
        setBladeData(arg0: number, arg1: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
}
