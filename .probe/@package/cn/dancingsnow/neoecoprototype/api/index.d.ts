import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/cn/dancingsnow/neoecoprototype/api" {
    export class $MatrixMaterials$Kind extends $Enum<$MatrixMaterials$Kind> {
        static values(): $MatrixMaterials$Kind[];
        static valueOf(arg0: string): $MatrixMaterials$Kind;
        inventoryModel(): $ResourceLocation;
        driveModel(): $ResourceLocation;
        static OTHER: $MatrixMaterials$Kind;
        static ITEM: $MatrixMaterials$Kind;
        static FLUID: $MatrixMaterials$Kind;
        static UNIVERSAL: $MatrixMaterials$Kind;
        static PIGMEE: $MatrixMaterials$Kind;
        static QUANTUM: $MatrixMaterials$Kind;
        static COMPLEX_UNIVERSAL: $MatrixMaterials$Kind;
        static INFINITE: $MatrixMaterials$Kind;
        static CHEMICAL: $MatrixMaterials$Kind;
        static SMALL_BULK: $MatrixMaterials$Kind;
    }
    /**
     * Values that may be interpreted as {@link $MatrixMaterials$Kind}.
     */
    export type $MatrixMaterials$Kind_ = "item" | "fluid" | "chemical" | "infinite" | "other" | "small_bulk" | "pigmee" | "universal" | "quantum" | "complex_universal";
}
