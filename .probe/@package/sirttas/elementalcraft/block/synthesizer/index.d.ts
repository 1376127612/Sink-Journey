import { $IConfigurableBlockEntityProperties, $ConfigurableBlockEntityPropertiesType } from "@package/sirttas/elementalcraft/block/entity/properties";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Range } from "@package/sirttas/elementalcraft/api/range";
import { $ElementType_, $ElementType } from "@package/sirttas/elementalcraft/api/element";
import { $Record } from "@package/java/lang";

declare module "@package/sirttas/elementalcraft/block/synthesizer" {
    export class $SynthesizerProperties extends $Record implements $IConfigurableBlockEntityProperties {
        elementType(): $ElementType;
        getType(): $ConfigurableBlockEntityPropertiesType<never>;
        range(): $Holder<$Range>;
        bufferCapacity(): number;
        transferSpeed(): number;
        synthesisMultiplier(): number;
        maxRunes(): number;
        static CODEC: $MapCodec<$SynthesizerProperties>;
        static DEFAULT: $SynthesizerProperties;
        constructor(elementType: $ElementType_, transferSpeed: number, bufferCapacity: number, maxRunes: number, synthesisMultiplier: number, range: $Holder_<$Range>);
        get type(): $ConfigurableBlockEntityPropertiesType<never>;
    }
    /**
     * Values that may be interpreted as {@link $SynthesizerProperties}.
     */
    export type $SynthesizerProperties_ = { range?: $Holder_<$Range>, maxRunes?: number, transferSpeed?: number, elementType?: $ElementType_, bufferCapacity?: number, synthesisMultiplier?: number,  } | [range?: $Holder_<$Range>, maxRunes?: number, transferSpeed?: number, elementType?: $ElementType_, bufferCapacity?: number, synthesisMultiplier?: number, ];
}
