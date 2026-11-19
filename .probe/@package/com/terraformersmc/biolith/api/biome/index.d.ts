import { $Climate$RTree$Leaf } from "@package/net/minecraft/world/level/biome";
import { $Record } from "@package/java/lang";

declare module "@package/com/terraformersmc/biolith/api/biome" {
    export class $BiolithFittestNodes<T> extends $Record {
        ultimate(): $Climate$RTree$Leaf<T>;
        penultimateDistance(): number;
        of(ultimate: $Climate$RTree$Leaf<T>, ultimateDistance: number, penultimate: $Climate$RTree$Leaf<T>, penultimateDistance: number): $BiolithFittestNodes<T>;
        ultimateDistance(): number;
        penultimate(): $Climate$RTree$Leaf<T>;
        withPenultimate(penultimate: $Climate$RTree$Leaf<T>, penultimateDistance: number): $BiolithFittestNodes<T>;
        constructor(ultimate: $Climate$RTree$Leaf<T>, ultimateDistance: number);
        constructor(ultimate: $Climate$RTree$Leaf<T>, ultimateDistance: number, penultimate: $Climate$RTree$Leaf<T>, penultimateDistance: number);
    }
    /**
     * Values that may be interpreted as {@link $BiolithFittestNodes}.
     */
    export type $BiolithFittestNodes_<T> = { penultimate?: $Climate$RTree$Leaf<any>, ultimate?: $Climate$RTree$Leaf<any>, penultimateDistance?: number, ultimateDistance?: number,  } | [penultimate?: $Climate$RTree$Leaf<any>, ultimate?: $Climate$RTree$Leaf<any>, penultimateDistance?: number, ultimateDistance?: number, ];
}
