import { $Serializable } from "@package/java/io";
import { $Cloneable } from "@package/java/lang";

declare module "@package/org/jgrapht/graph" {
    export class $IntrusiveEdge implements $Cloneable, $Serializable {
    }
    export class $DefaultEdge extends $IntrusiveEdge {
        constructor();
    }
}
