import { $Function_, $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $Holder_, $Direction_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $JsonMerger } from "@package/sirttas/dpanvil/api/json/merger";
import { $Map_, $Map, $Map$Entry, $Collection, $Set } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/sirttas/elementalcraft/api/range" {
    export class $Range extends $Record {
        static builder(): $Range$Builder;
        box(): $AABB;
        static withParent(arg0: $ResourceKey_<$Range>): $Range$Builder;
        static withParent(arg0: $ResourceLocation_): $Range$Builder;
        stitch(): boolean;
        scaleBox(arg0: number): $AABB;
        growthRatio(): $GrowthRatio;
        static CODEC: $Codec<$Range>;
        static DEFAULT_HOLDER: $Holder<$Range>;
        static HOLDER_CODEC: $Codec<$Holder<$Range>>;
        static MERGER: $JsonMerger;
        static DEFAULT: $Range;
        constructor(box: $AABB_, stitch: boolean, growthRatio: $GrowthRatio_);
    }
    /**
     * Values that may be interpreted as {@link $Range}.
     */
    export type $Range_ = { box?: $AABB_, growthRatio?: $GrowthRatio_, stitch?: boolean,  } | [box?: $AABB_, growthRatio?: $GrowthRatio_, stitch?: boolean, ];
    export class $GrowthRatio extends $Record {
        apply(arg0: $AABB_, arg1: number): $AABB;
        up(): number;
        down(): number;
        north(): number;
        east(): number;
        south(): number;
        west(): number;
        static towards(arg0: $Direction_): $GrowthRatio;
        static ALIGNED_EAST: $GrowthRatio;
        static CODEC: $Codec<$GrowthRatio>;
        static VERTICAL: $GrowthRatio;
        static ALIGNED_DOWN: $GrowthRatio;
        static ALIGNED_WEST: $GrowthRatio;
        static HORIZONTAL: $GrowthRatio;
        static ALIGNED_UP: $GrowthRatio;
        static NONE: $GrowthRatio;
        static ALIGNED_NORTH: $GrowthRatio;
        static DEFAULT: $GrowthRatio;
        static ALIGNED_SOUTH: $GrowthRatio;
        constructor(west: number, down: number, north: number, east: number, up: number, south: number);
    }
    /**
     * Values that may be interpreted as {@link $GrowthRatio}.
     */
    export type $GrowthRatio_ = { north?: number, east?: number, up?: number, west?: number, south?: number, down?: number,  } | [north?: number, east?: number, up?: number, west?: number, south?: number, down?: number, ];
    export class $RangeVariants extends $Record implements $Map<string, $Holder<$Range>> {
        remove(arg0: $Object): $Holder<$Range>;
        size(): number;
        get(arg0: $Object): $Holder<$Range>;
        put(arg0: string, arg1: $Holder_<$Range>): $Holder<$Range>;
        values(): $Collection<$Holder<$Range>>;
        clear(): void;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<string, $Holder<$Range>>>;
        putAll(arg0: $Map_<string, $Holder_<$Range>>): void;
        containsKey(arg0: $Object): boolean;
        keySet(): $Set<string>;
        containsValue(arg0: $Object): boolean;
        delegate(): $Map<string, $Holder<$Range>>;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: string, arg1: $Holder_<$Range>, arg2: $Holder_<$Range>): boolean;
        replace(arg0: string, arg1: $Holder_<$Range>): $Holder<$Range>;
        replaceAll(arg0: $BiFunction_<string, $Holder<$Range>, $Holder<$Range>>): void;
        merge(arg0: string, arg1: $Holder_<$Range>, arg2: $BiFunction_<$Holder<$Range>, $Holder<$Range>, $Holder<$Range>>): $Holder<$Range>;
        putIfAbsent(arg0: string, arg1: $Holder_<$Range>): $Holder<$Range>;
        compute(arg0: string, arg1: $BiFunction_<string, $Holder<$Range>, $Holder<$Range>>): $Holder<$Range>;
        forEach(arg0: $BiConsumer_<string, $Holder<$Range>>): void;
        computeIfAbsent(arg0: string, arg1: $Function_<string, $Holder<$Range>>): $Holder<$Range>;
        getOrDefault(arg0: $Object, arg1: $Holder_<$Range>): $Holder<$Range>;
        computeIfPresent(arg0: string, arg1: $BiFunction_<string, $Holder<$Range>, $Holder<$Range>>): $Holder<$Range>;
        static CODEC: $Codec<$RangeVariants>;
        static DEFAULT_KEY: string;
        static TRANSLOCATION_KEY: string;
        static DEFAULT: $RangeVariants;
        constructor(delegate: $Map_<string, $Holder_<$Range>>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RangeVariants}.
     */
    export type $RangeVariants_ = { delegate?: $Map_<string, $Holder_<$Range>>,  } | [delegate?: $Map_<string, $Holder_<$Range>>, ];
    export class $Range$Builder {
        box(arg0: $AABB_): $Range$Builder;
        box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Range$Builder;
        box(arg0: number, arg1: number, arg2: number): $Range$Builder;
        box(arg0: number, arg1: number): $Range$Builder;
        box(arg0: number): $Range$Builder;
        move(arg0: number, arg1: number, arg2: number): $Range$Builder;
        fixedWidth(): $Range$Builder;
        fixedHeight(): $Range$Builder;
        expendingUp(arg0: number, arg1: number): $Range$Builder;
        expendingDown(arg0: number, arg1: number): $Range$Builder;
        stitch(): $Range$Builder;
        growthRatio(arg0: $GrowthRatio_): $Range$Builder;
        boxTowards(arg0: $Direction_, arg1: number): $Range$Builder;
        static CODEC: $Codec<$Range$Builder>;
    }
}
