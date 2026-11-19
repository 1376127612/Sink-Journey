import { $ColorWrapper } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/hellfirepvp/astralsorcery/common/research/perk" {
    export class $PerkAllocation {
        static grantedConnections(arg0: $UUID_): $PerkAllocation;
        static granted(arg0: $UUID_): $PerkAllocation;
        getLockUUID(): $UUID;
        static unlock(): $PerkAllocation;
        getType(): $PerkAllocationType;
        static unlockNoConnections(): $PerkAllocation;
        get lockUUID(): $UUID;
        get type(): $PerkAllocationType;
    }
    export class $PerkAllocationStatus extends $Enum<$PerkAllocationStatus> {
        getPerkTreeConnectionColor(): $ColorWrapper;
        isAllocated(): boolean;
        static values(): $PerkAllocationStatus[];
        static valueOf(arg0: string): $PerkAllocationStatus;
        static ALLOCATED: $PerkAllocationStatus;
        static UNLOCKABLE: $PerkAllocationStatus;
        static GRANTED: $PerkAllocationStatus;
        static UNALLOCATED: $PerkAllocationStatus;
        get perkTreeConnectionColor(): $ColorWrapper;
        get allocated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PerkAllocationStatus}.
     */
    export type $PerkAllocationStatus_ = "unallocated" | "allocated" | "granted" | "unlockable";
    export class $PerkRemovalResult extends $Enum<$PerkRemovalResult> {
        isFailure(): boolean;
        static values(): $PerkRemovalResult[];
        static valueOf(arg0: string): $PerkRemovalResult;
        removesPerk(): boolean;
        removesAllocationType(): boolean;
        static REMOVE_ALLOCATION: $PerkRemovalResult;
        static REMOVE_ALLOCATION_TYPE: $PerkRemovalResult;
        static REMOVE_PERK: $PerkRemovalResult;
        static FAILURE: $PerkRemovalResult;
        get failure(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PerkRemovalResult}.
     */
    export type $PerkRemovalResult_ = "failure" | "remove_allocation" | "remove_allocation_type" | "remove_perk";
    export class $PerkAllocationType extends $Enum<$PerkAllocationType> implements $StringRepresentable {
        getSerializedName(): string;
        isUnlock(): boolean;
        hasConnectivity(): boolean;
        static values(): $PerkAllocationType[];
        static valueOf(arg0: string): $PerkAllocationType;
        getRemappedEnumConstantName(): string;
        static UNLOCKED: $PerkAllocationType;
        static UNLOCKED_NON_CONNECT: $PerkAllocationType;
        static GRANTED: $PerkAllocationType;
        static GRANTED_CONNECT: $PerkAllocationType;
        get serializedName(): string;
        get unlock(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PerkAllocationType}.
     */
    export type $PerkAllocationType_ = "unlocked" | "unlocked_non_connect" | "granted" | "granted_connect";
}
