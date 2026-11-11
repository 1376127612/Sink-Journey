import { $Consumer } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $RegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BasicKubeBlock$Builder } from "@package/dev/latvian/mods/kubejs/block/custom";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/minecart/yunxian/integration/kubejs" {
    export class $CustomBudding$Family extends $Record {
        cluster(): $ResourceLocation;
        largeBud(): $ResourceLocation;
        smallBud(): $ResourceLocation;
        mediumBud(): $ResourceLocation;
        budding(): $ResourceLocation;
        constructor(budding: $ResourceLocation_, smallBud: $ResourceLocation_, mediumBud: $ResourceLocation_, largeBud: $ResourceLocation_, cluster: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CustomBudding$Family}.
     */
    export type $CustomBudding$Family_ = { smallBud?: $ResourceLocation_, largeBud?: $ResourceLocation_, budding?: $ResourceLocation_, cluster?: $ResourceLocation_, mediumBud?: $ResourceLocation_,  } | [smallBud?: $ResourceLocation_, largeBud?: $ResourceLocation_, budding?: $ResourceLocation_, cluster?: $ResourceLocation_, mediumBud?: $ResourceLocation_, ];
    export class $CustomBudding$Options {
        group(arg0: string): $CustomBudding$Options;
        transform(arg0: string, arg1: string, arg2: number): $CustomBudding$Options;
        transform(arg0: string, arg1: string, arg2: number, arg3: number): $CustomBudding$Options;
        transform(arg0: string, arg1: string): $CustomBudding$Options;
        displayName(arg0: string): $CustomBudding$Options;
        dropCount(arg0: number): $CustomBudding$Options;
        needfluid(arg0: string): $CustomBudding$Options;
        needfluid(arg0: string, arg1: number, arg2: number): $CustomBudding$Options;
        buddingLevel(arg0: string): $CustomBudding$Options;
        stageTextures(...arg0: string[]): $CustomBudding$Options;
        buddingSound(arg0: $SoundType_): $CustomBudding$Options;
        buddingTexture(arg0: string): $CustomBudding$Options;
        buddingTool(arg0: string): $CustomBudding$Options;
        requiresWater(arg0: boolean): $CustomBudding$Options;
        requiresWater(): $CustomBudding$Options;
        growthDimensions(...arg0: string[]): $CustomBudding$Options;
        growthBiomes(...arg0: string[]): $CustomBudding$Options;
        stageDisplayNames(...arg0: string[]): $CustomBudding$Options;
        outsideGrowthChance(arg0: number): $CustomBudding$Options;
        dropItem(arg0: string): $CustomBudding$Options;
        dropItem(arg0: string, arg1: number): $CustomBudding$Options;
        tool(arg0: string): $CustomBudding$Options;
        chance(arg0: number): $CustomBudding$Options;
        minLight(arg0: number): $CustomBudding$Options;
        stageTool(arg0: string): $CustomBudding$Options;
        stageLevel(arg0: string): $CustomBudding$Options;
        stageSound(arg0: $SoundType_): $CustomBudding$Options;
        maxLight(arg0: number): $CustomBudding$Options;
        fluidCostPerGrowth: number;
        transforms: $List<$CustomBudding$Options$Transform>;
        fluid: string;
        static DEFAULT_CHANCE: number;
        static DEFAULT_DROP_COUNT: number;
        static DEFAULT_FLUID_CAPACITY: number;
        static DEFAULT_GROUP: string;
        static DEFAULT_FLUID_COST: number;
        static DEFAULT_OUTSIDE_GROWTH_CHANCE: number;
        static DEFAULT_LIGHT: number;
        fluidCapacity: number;
        constructor();
    }
    export class $CustomBudding$MotherBuilder extends $BasicKubeBlock$Builder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
    }
    export class $CustomBudding {
        static create(arg0: $RegistryKubeEvent<$Block_>, arg1: string, arg2: $CustomBudding$Options): $CustomBudding$Family;
        static create(arg0: $RegistryKubeEvent<$Block_>, arg1: string, arg2: number): $CustomBudding$Family;
        static clearTransformRequests(): void;
        static modify(arg0: string, arg1: $CustomBudding$Options): void;
        static transformRequests(): $List<$CustomBudding$TransformRequest>;
    }
    export class $CustomBudding$StageBuilder extends $BasicKubeBlock$Builder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
    }
    export class $CustomBudding$TransformRequest extends $Record {
        input(): string;
        output(): string;
        radius(): number;
        chance(): number;
        budding(): $ResourceLocation;
        constructor(budding: $ResourceLocation_, input: string, output: string, chance: number, radius: number);
    }
    /**
     * Values that may be interpreted as {@link $CustomBudding$TransformRequest}.
     */
    export type $CustomBudding$TransformRequest_ = { input?: string, budding?: $ResourceLocation_, chance?: number, output?: string, radius?: number,  } | [input?: string, budding?: $ResourceLocation_, chance?: number, output?: string, radius?: number, ];
    export class $CustomBudding$Options$Transform extends $Record {
        input(): string;
        output(): string;
        radius(): number;
        chance(): number;
        constructor(input: string, output: string, chance: number, radius: number);
    }
    /**
     * Values that may be interpreted as {@link $CustomBudding$Options$Transform}.
     */
    export type $CustomBudding$Options$Transform_ = { chance?: number, radius?: number, input?: string, output?: string,  } | [chance?: number, radius?: number, input?: string, output?: string, ];
}
