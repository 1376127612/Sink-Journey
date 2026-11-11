import { $Supplier } from "@package/java/util/function";
import { $IConfigurableBlockEntityProperties, $ConfigurableBlockEntityPropertiesType } from "@package/sirttas/elementalcraft/block/entity/properties";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RangeVariants_, $RangeVariants } from "@package/sirttas/elementalcraft/api/range";
import { $ElementType_, $ElementType, $IElementTypeProvider } from "@package/sirttas/elementalcraft/api/element";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/sirttas/elementalcraft/block/shrine" {
    export class $ShrineProperties extends $Record implements $IConfigurableBlockEntityProperties, $IElementTypeProvider {
        elementType(): $ElementType;
        getType(): $ConfigurableBlockEntityPropertiesType<$ShrineProperties>;
        capacity(): number;
        getElementType(): $ElementType;
        strength(): $List<number>;
        period(): number;
        ranges(): $RangeVariants;
        consumption(): number;
        getElementTypeSupplier(): $Supplier<$ElementType>;
        static CODEC: $MapCodec<$ShrineProperties>;
        static DEFAULT: $ShrineProperties;
        constructor(elementType: $ElementType_, period: number, consumption: number, capacity: number, ranges: $RangeVariants_, strength: $List_<number>);
        get type(): $ConfigurableBlockEntityPropertiesType<$ShrineProperties>;
        get elementTypeSupplier(): $Supplier<$ElementType>;
    }
    /**
     * Values that may be interpreted as {@link $ShrineProperties}.
     */
    export type $ShrineProperties_ = { period?: number, elementType?: $ElementType_, consumption?: number, ranges?: $RangeVariants_, capacity?: number, strength?: $List_<number>,  } | [period?: number, elementType?: $ElementType_, consumption?: number, ranges?: $RangeVariants_, capacity?: number, strength?: $List_<number>, ];
}
