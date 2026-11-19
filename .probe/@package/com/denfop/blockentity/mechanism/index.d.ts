import { $DataBlockEntity } from "@package/com/denfop/dataregistry";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Enum } from "@package/java/lang";
export * as multimechanism from "@package/com/denfop/blockentity/mechanism/multimechanism";

declare module "@package/com/denfop/blockentity/mechanism" {
    export class $EnumTypeMachines extends $Enum<$EnumTypeMachines> {
        static writeSound(): void;
        setSound(arg0: $SoundEvent_): void;
        static values(): $EnumTypeMachines[];
        static valueOf(arg0: string): $EnumTypeMachines;
        getSound(): $SoundEvent;
        static Centrifuge: $EnumTypeMachines;
        static EXTRACTOR: $EnumTypeMachines;
        static COMPRESSOR: $EnumTypeMachines;
        static OreWashing: $EnumTypeMachines;
        static CUTTING: $EnumTypeMachines;
        static ROLLING: $EnumTypeMachines;
        static COMBMACERATOR: $EnumTypeMachines;
        recipe: string;
        static ELECTRICFURNACE: $EnumTypeMachines;
        static FARMER: $EnumTypeMachines;
        static ASSAMPLERSCRAP: $EnumTypeMachines;
        static Gearing: $EnumTypeMachines;
        static COMBRECYCLER: $EnumTypeMachines;
        static MACERATOR: $EnumTypeMachines;
        meta: number;
        static RECYCLER: $EnumTypeMachines;
        static METALFOMER: $EnumTypeMachines;
        block: $DataBlockEntity<any>;
        static EXTRUDING: $EnumTypeMachines;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeMachines}.
     */
    export type $EnumTypeMachines_ = "macerator" | "extractor" | "compressor" | "electricfurnace" | "metalfomer" | "recycler" | "combrecycler" | "combmacerator" | "rolling" | "extruding" | "cutting" | "farmer" | "assamplerscrap" | "orewashing" | "centrifuge" | "gearing";
}
