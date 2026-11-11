import { $InputScope, $InputScope_ } from "@package/cn/howxu/mmcr/api/recipe";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/api/capability/facet" {
    export class $CapabilityFacet {
    }
    export interface $CapabilityFacet {
    }
    export class $InputRoutingFacet extends $Record implements $CapabilityFacet {
        allows(scope: $InputScope_, capabilityIndex: number): boolean;
        sources(): $List<$InputRoutingFacet$Source>;
        revision(): number;
        scopes(materialInputs: boolean): $List<$InputScope>;
        inputPorts(): $List<$InputRoutingFacet$Port>;
        ordinaryScope(): $InputScope;
        constructor(revision: number, sources: $List_<$InputRoutingFacet$Source_>, inputPorts: $List_<$InputRoutingFacet$Port_>);
    }
    /**
     * Values that may be interpreted as {@link $InputRoutingFacet}.
     */
    export type $InputRoutingFacet_ = { inputPorts?: $List_<$InputRoutingFacet$Port_>, revision?: number, sources?: $List_<$InputRoutingFacet$Source_>,  } | [inputPorts?: $List_<$InputRoutingFacet$Port_>, revision?: number, sources?: $List_<$InputRoutingFacet$Source_>, ];
}
