import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";
import { $CapabilityBinding_, $CapabilityBinding } from "@package/cn/howxu/mmcr/api/capability/type";

declare module "@package/cn/howxu/mmcr/api/port" {
    export class $PortTierPolicy {
        static atLeast(minimumTier: number): $PortTierPolicy;
        static always(): $PortTierPolicy;
    }
    export interface $PortTierPolicy {
        supports(binding: $CapabilityBinding_, tier: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PortTierPolicy}.
     */
    export type $PortTierPolicy_ = ((binding: $CapabilityBinding, tier: number) => boolean);
    export class $PortDefinition {
        static of(id: $ResourceLocation_, ...bindings: $CapabilityBinding_[]): $PortDefinition;
        static of(id: $ResourceLocation_, bindings: $List_<$CapabilityBinding_>): $PortDefinition;
    }
    export interface $PortDefinition {
        id(): $ResourceLocation;
        bindings(): $List<$CapabilityBinding>;
    }
}
