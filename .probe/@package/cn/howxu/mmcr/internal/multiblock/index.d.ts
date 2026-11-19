import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Set_, $Set } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/internal/multiblock" {
    export class $ComponentClaimPolicy extends $Enum<$ComponentClaimPolicy> {
        static values(): $ComponentClaimPolicy[];
        static valueOf(name: string): $ComponentClaimPolicy;
        static SHARED_SERIALIZED: $ComponentClaimPolicy;
        static EXCLUSIVE: $ComponentClaimPolicy;
        static SHARED_CAPACITY: $ComponentClaimPolicy;
    }
    /**
     * Values that may be interpreted as {@link $ComponentClaimPolicy}.
     */
    export type $ComponentClaimPolicy_ = "exclusive" | "shared_serialized" | "shared_capacity";
    export class $ModuleConnectionStatus extends $Record {
        static disconnected(): $ModuleConnectionStatus;
        canRunRecipe(requiredHostIds: $Set_<$ResourceLocation_>): boolean;
        static notRequired(): $ModuleConnectionStatus;
        connectedHostId(): $ResourceLocation;
        static connected(hostId: $ResourceLocation_): $ModuleConnectionStatus;
        connected(): boolean;
        required(): boolean;
        constructor(required: boolean, connectedHostId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ModuleConnectionStatus}.
     */
    export type $ModuleConnectionStatus_ = { connectedHostId?: $ResourceLocation_, required?: boolean,  } | [connectedHostId?: $ResourceLocation_, required?: boolean, ];
    export class $StructureClaimRegistry$ResourceDomain extends $Record {
        generation(): number;
        controllers(): $Set<$BlockPos>;
        id(): number;
        constructor(id: number, generation: number, controllers: $Set_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $StructureClaimRegistry$ResourceDomain}.
     */
    export type $StructureClaimRegistry$ResourceDomain_ = { id?: number, generation?: number, controllers?: $Set_<$BlockPos_>,  } | [id?: number, generation?: number, controllers?: $Set_<$BlockPos_>, ];
}
