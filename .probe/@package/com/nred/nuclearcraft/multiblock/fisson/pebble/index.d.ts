import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IMultiblockVariant } from "@package/it/zerono/mods/zerocore/lib/multiblock/variant";
import { $Set, $List } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/nred/nuclearcraft/multiblock/fisson/pebble" {
    export class $FissionCoolerPortType implements $StringRepresentable, $IMultiblockVariant {
        getName(): string;
        getId(): number;
        getSerializedName(): string;
        getTranslationKey(): string;
        validFluids(): $Set<$ResourceLocation>;
        static default_values(): $List<$FissionCoolerPortType>;
        getBlockProperties(): $BlockBehaviour$Properties;
        getRemappedEnumConstantName(): string;
        getDefaultBlockProperties(): $BlockBehaviour$Properties;
        static AMMONIA: $FissionCoolerPortType;
        static SULFUR_TRIOXIDE: $FissionCoolerPortType;
        static DIBORANE: $FissionCoolerPortType;
        static OXYGEN: $FissionCoolerPortType;
        static HYDROGEN: $FissionCoolerPortType;
        static METHANE: $FissionCoolerPortType;
        static CARBON_DIOXIDE: $FissionCoolerPortType;
        static ETHYNE: $FissionCoolerPortType;
        static SULFUR_HEXAFLUORIDE: $FissionCoolerPortType;
        static NITROGEN: $FissionCoolerPortType;
        static FLUORINE: $FissionCoolerPortType;
        static CARBON_MONOXIDE: $FissionCoolerPortType;
        static ETHENE: $FissionCoolerPortType;
        static FLUOROMETHANE: $FissionCoolerPortType;
        static HELIUM: $FissionCoolerPortType;
        static SULFUR_DIOXIDE: $FissionCoolerPortType;
        constructor(arg0: string, arg1: $ResourceLocation_);
        get name(): string;
        get id(): number;
        get serializedName(): string;
        get translationKey(): string;
        get blockProperties(): $BlockBehaviour$Properties;
        get remappedEnumConstantName(): string;
        get defaultBlockProperties(): $BlockBehaviour$Properties;
    }
}
