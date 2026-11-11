import { $IOType_, $IOType } from "@package/cn/howxu/mmcr/util";
import { $CapabilityFacet } from "@package/cn/howxu/mmcr/api/capability/facet";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Class } from "@package/java/lang";
import { $Set_, $List, $List_, $Set } from "@package/java/util";
import { $CapabilityOperation } from "@package/cn/howxu/mmcr/api/capability/plan";
export * as status from "@package/cn/howxu/mmcr/api/capability/status";
export * as plan from "@package/cn/howxu/mmcr/api/capability/plan";
export * as facet from "@package/cn/howxu/mmcr/api/capability/facet";
export * as type from "@package/cn/howxu/mmcr/api/capability/type";
export * as presentation from "@package/cn/howxu/mmcr/api/capability/presentation";
export * as tick from "@package/cn/howxu/mmcr/api/capability/tick";

declare module "@package/cn/howxu/mmcr/api/capability" {
    export class $CapabilityType extends $Record {
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityType}.
     */
    export type $CapabilityType_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $CapabilityRequest {
    }
    export interface $CapabilityRequest {
        type(): $CapabilityType;
        parallelism(): number;
        ioType(): $IOType;
    }
    export class $CapabilityDirections extends $Record {
        values(): $Set<$IOType>;
        static of(...values: $IOType_[]): $CapabilityDirections;
        static input(): $CapabilityDirections;
        static output(): $CapabilityDirections;
        supports(direction: $IOType_): boolean;
        static bidirectional(): $CapabilityDirections;
        constructor(values: $Set_<$IOType_>);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityDirections}.
     */
    export type $CapabilityDirections_ = { values?: $Set_<$IOType_>,  } | [values?: $Set_<$IOType_>, ];
    export class $CapabilityView {
    }
    export interface $CapabilityView {
        type(): $CapabilityType;
        tags(): $List<string>;
        matchesTag(requirementTag: string): boolean;
        facets(): $Set<$Class<$CapabilityFacet>>;
        /**
         * @deprecated
         */
        ioType(): $IOType;
        directions(): $CapabilityDirections;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityView}.
     */
    export type $CapabilityView_ = (() => $CapabilityType_);
    export class $CapabilitySnapshot extends $Record {
        capabilities(): $List<$MachineCapability>;
        facets<F extends $CapabilityFacet>(facetType: $Class<F>): $List<F>;
        additionalFacets(): $List<$CapabilityFacet>;
        constructor(capabilities: $List_<$MachineCapability>);
        constructor(capabilities: $List_<$MachineCapability>, additionalFacets: $List_<$CapabilityFacet>);
    }
    /**
     * Values that may be interpreted as {@link $CapabilitySnapshot}.
     */
    export type $CapabilitySnapshot_ = { additionalFacets?: $List_<$CapabilityFacet>, capabilities?: $List_<$MachineCapability>,  } | [additionalFacets?: $List_<$CapabilityFacet>, capabilities?: $List_<$MachineCapability>, ];
    export class $MachineCapability {
    }
    export interface $MachineCapability {
        type(): $CapabilityType;
        prepare(request: $CapabilityRequest): $CapabilityOperation;
        view(): $CapabilityView;
        outputPriority(): number;
        facet<F extends $CapabilityFacet>(facetType: $Class<F>): (F) | undefined;
        /**
         * @deprecated
         */
        ioType(): $IOType;
        directions(): $CapabilityDirections;
    }
    export class $CapabilityHost {
    }
    export interface $CapabilityHost {
        capabilities(): $List<$MachineCapability>;
        capabilitySnapshot(): $CapabilitySnapshot;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityHost}.
     */
    export type $CapabilityHost_ = (() => $CapabilitySnapshot_);
}
