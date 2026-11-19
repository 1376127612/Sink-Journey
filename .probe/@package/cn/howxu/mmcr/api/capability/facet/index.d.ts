import { $InputScope, $InputScope_ } from "@package/cn/howxu/mmcr/api/recipe";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/api/capability/facet" {
    export class $CapabilityFacet {
    }
    export interface $CapabilityFacet {
    }
    export class $InputRoutingFacet extends $Record implements $CapabilityFacet {
        inputPorts(): $List<$InputRoutingFacet$Port>;
        allows(scope: $InputScope_, capabilityIndex: number): boolean;
        sources(): $List<$InputRoutingFacet$Source>;
        scopes(materialInputs: boolean): $List<$InputScope>;
        revision(): number;
        ordinaryScope(): $InputScope;
        constructor(revision: number, sources: $List_<$InputRoutingFacet$Source_>, inputPorts: $List_<$InputRoutingFacet$Port_>);
    }
    /**
     * Values that may be interpreted as {@link $InputRoutingFacet}.
     */
    export type $InputRoutingFacet_ = { revision?: number, sources?: $List_<$InputRoutingFacet$Source_>, inputPorts?: $List_<$InputRoutingFacet$Port_>,  } | [revision?: number, sources?: $List_<$InputRoutingFacet$Source_>, inputPorts?: $List_<$InputRoutingFacet$Port_>, ];
}
