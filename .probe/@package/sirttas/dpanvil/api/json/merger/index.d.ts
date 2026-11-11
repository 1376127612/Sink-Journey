import { $JsonElement_, $JsonElement } from "@package/com/google/gson";

declare module "@package/sirttas/dpanvil/api/json/merger" {
    export class $JsonMerger {
        static SECOND: $JsonMerger;
        static FIRST: $JsonMerger;
    }
    export interface $JsonMerger {
        merge(arg0: $JsonElement_, arg1: $JsonElement_): $JsonElement;
    }
    /**
     * Values that may be interpreted as {@link $JsonMerger}.
     */
    export type $JsonMerger_ = ((arg0: $JsonElement, arg1: $JsonElement) => $JsonElement_);
}
