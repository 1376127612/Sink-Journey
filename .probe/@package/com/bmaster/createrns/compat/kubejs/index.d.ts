import { $Supplier_, $Consumer } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map_, $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $KubeStartupEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/bmaster/createrns/compat/kubejs" {
    export class $SourcedStartupKubeBuilder {
    }
    export class $EnableDepositsKubeEvent$AvailableStructure extends $Record {
        id(): $ResourceLocation;
        valid(): boolean;
        weight(): number;
        builtIn(): boolean;
        constructor(arg0: $ResourceLocation_, arg1: number | null, arg2: boolean);
        constructor(id: $ResourceLocation_, weight: number | null, builtIn: boolean, valid: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EnableDepositsKubeEvent$AvailableStructure}.
     */
    export type $EnableDepositsKubeEvent$AvailableStructure_ = { id?: $ResourceLocation_, valid?: boolean, builtIn?: boolean, weight?: number,  } | [id?: $ResourceLocation_, valid?: boolean, builtIn?: boolean, weight?: number, ];
    export class $CatalystKubeBuilder extends $SourcedStartupKubeBuilder {
        /**
         * Adds an attachment requirement.
         * When a list is used, any matching attachment block can contribute towards the required count.
         * Can be called multiple times to add more independent requirements.
         */
        attachment(arg1: $Object): $CatalystKubeBuilder;
        /**
         * Adds an attachment requirement.
         * When a list is used, any matching attachment block can contribute towards the required count.
         * Can be called multiple times to add more independent requirements.
         */
        attachment(arg1: $Object, arg2: number): $CatalystKubeBuilder;
        /**
         * Generates the catalyst name lang entry used in JEI/EMI and miner tooltips.
         * If omitted, make sure to supply the matching `<namespace>.catalyst.<path>.name` lang entry yourself.
         */
        displayName(arg0: string): $CatalystKubeBuilder;
        /**
         * Marks the catalyst as optional. Optional catalysts influence the chance of a yield without being strictly required for it.
         */
        optional(): $CatalystKubeBuilder;
        /**
         * Generates the lang entry displayed on the catalyst info page.
         * If omitted, make sure to supply the matching `<namespace>.catalyst.<path>.description` lang entry yourself.
         */
        description(arg0: string): $CatalystKubeBuilder;
        /**
         * Hides this catalyst from the miner bearing tooltip while the specified catalyst is active.
         * Useful when having multiple tiers of catalysts. Can be called multiple times to add more catalysts.
         */
        hideIfPresent(arg1: string): $CatalystKubeBuilder;
        /**
         * Adds a fluid consumption requirement. Can be called multiple times to require multiple fluids.
         */
        fluid(arg1: string, arg2: number): $CatalystKubeBuilder;
        /**
         * Attaches a JEI/EMI info page to the specified item with the catalyst description.
         * Call multiple times to attach the same description to more than one item.
         */
        representativeItem(arg1: string): $CatalystKubeBuilder;
        /**
         * The specified sound event will be continuously played while the catalyst is active.
         */
        playWhenActive(arg1: string): $CatalystKubeBuilder;
        /**
         * Sets the chance multiplier applied while this catalyst is active.
         */
        chanceMultiplier(arg1: number): $CatalystKubeBuilder;
        /**
         * Defines the order in which the catalysts are shown in the miner bearing tooltip and JEI/EMI.
         * Highest priority catalysts are shown at the bottom. The order will not be stable unless each catalyst has a unique priority.
         */
        displayPriority(arg0: number): $CatalystKubeBuilder;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CatalystsKubeEvent implements $KubeStartupEvent {
        /**
         * Creates a Create: Rock & Stone catalyst definition.
         * The id becomes the datapack registry id referenced by mining recipes and hide-if-present rules.
         */
        create(arg1: string): $CatalystKubeBuilder;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $EnableDepositsKubeEvent implements $KubeStartupEvent {
        /**
         * Returns the overworld deposit structure set builder.
         */
        overworld(): $EnableDepositsKubeBuilder;
        /**
         * Returns the nether deposit structure set builder.
         */
        nether(): $EnableDepositsKubeBuilder;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $Map_<$ResourceLocation_, $EnableDepositsKubeEvent$AvailableStructure_>);
    }
    export class $DepositBlockKubeBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $DepositStructuresKubeEvent implements $KubeStartupEvent {
        /**
         * Creates a Create: Rock & Stone deposit structure definition.
         * The id is the final structure id used in generated structure, deposit spec, and structure-set files.
         */
        create(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Tweaks an existing built-in Create: Rock & Stone deposit structure.
         * Single-value methods replace the built-in value. The first scannerIcon, mapIcon, or nbt call clears the
         * corresponding built-in list, and subsequent calls append replacement fallback entries in order.
         */
        tweak(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $EnableDepositsKubeBuilder extends $SourcedStartupKubeBuilder {
        /**
         * Sets a seed for the random spread of deposits across the world
         */
        salt(arg0: number): $EnableDepositsKubeBuilder;
        /**
         * Sets the average distance between deposits in chunks.
         */
        spacing(arg1: number): $EnableDepositsKubeBuilder;
        /**
         * Sets the minimum distance between deposits in chunks.
         */
        separation(arg1: number): $EnableDepositsKubeBuilder;
        /**
         * Makes a deposit scannable and enables worldgen.
         */
        deposit(arg1: string): $EnableDepositsKubeBuilder;
        /**
         * Makes a deposit scannable and enables worldgen.
         */
        deposit(arg1: string, arg2: number): $EnableDepositsKubeBuilder;
        /**
         * Makes a deposit scannable and optionally enables worldgen.
         */
        deposit(arg1: string, arg2: boolean): $EnableDepositsKubeBuilder;
        /**
         * Makes a deposit scannable and optionally enables worldgen.
         */
        deposit(arg1: string, arg2: number | null, arg3: boolean): $EnableDepositsKubeBuilder;
        constructor(arg0: $ResourceLocation_, arg1: $Supplier_<$Map<$ResourceLocation, $EnableDepositsKubeEvent$AvailableStructure>>);
        constructor(arg0: $ResourceLocation_, arg1: $Map_<$ResourceLocation_, $EnableDepositsKubeEvent$AvailableStructure_>);
    }
    export class $DepositStructureKubeBuilder extends $SourcedStartupKubeBuilder {
        /**
         * Sets the deposit block used by this deposit structure.
         */
        block(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Sets the structure name shown by the deposit scanner.
         */
        displayName(arg0: string): $DepositStructureKubeBuilder;
        /**
         * Sets the weight used when this deposit structure is selected in StartupEvents.rnsEnableDeposits.
         * Preset structures already assign a default.
         */
        weight(arg1: number): $DepositStructureKubeBuilder;
        /**
         * Applies a preset that covers height, weighted nbts, and the default structure set weight.
         * These presets are used by the default deposits (iron - common, nickel - uncommon, redstone - precious).
         * Supported values: overworld_common, overworld_uncommon, overworld_rare, nether_common, nether_uncommon, nether_rare.
         */
        preset(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Adds a structure nbt template to the generated deposit.
         * Can be called multiple times to specify more templates.
         * When multiple templates are specified, the chance of picking one is determined by the weight.
         */
        nbt(arg1: string, arg2: number): $DepositStructureKubeBuilder;
        /**
         * Sets the biome or biome tag in which this deposit structure may generate.
         */
        biome(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Sets the Y detectionOffset from the world surface for the deposit.
         */
        height(arg0: number): $DepositStructureKubeBuilder;
        /**
         * Uses the specified item or item tag as a map icon for a found deposit.
         * Can be called multiple times to add more items as fallbacks in case the original item does not exist.
         */
        mapIcon(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Adds all dust-related tags as scanner icon candidates.
         * The first item of a first non-empty tag is selected.
         */
        scannerIconDust(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Adds all metal-related tags as scanner icon candidates.
         * The first item of a first non-empty tag is selected.
         */
        scannerIconMetal(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Uses the specified item or item tag as an icon in deposit scanner for the respective deposit.
         * If tag is specified, the first item with that tag is picked.
         * Can be called multiple times to add more items as fallbacks in case the original item does not exist.
         */
        scannerIcon(arg1: string): $DepositStructureKubeBuilder;
        /**
         * Adds all gem-related tags as scanner icon candidates.
         * The first item of a first non-empty tag is selected.
         */
        scannerIconGem(arg1: string): $DepositStructureKubeBuilder;
        constructor(arg0: $ResourceLocation_);
    }
}
