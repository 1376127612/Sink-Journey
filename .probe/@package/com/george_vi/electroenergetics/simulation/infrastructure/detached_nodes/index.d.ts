import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/george_vi/electroenergetics/simulation/infrastructure/detached_nodes" {
    export class $DetachedNodeType extends $Enum<$DetachedNodeType> implements $StringRepresentable {
        static values(): $DetachedNodeType[];
        static valueOf(arg0: string): $DetachedNodeType;
        static byName(arg0: string): $DetachedNodeType;
        getSerializedName(): string;
        isPhysics(): boolean;
        getRemappedEnumConstantName(): string;
        static FIXED: $DetachedNodeType;
        static PHYSICS_UNINITIALIZED: $DetachedNodeType;
        static PHYSICS: $DetachedNodeType;
        get serializedName(): string;
        get physics(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DetachedNodeType}.
     */
    export type $DetachedNodeType_ = "fixed" | "physics" | "physics_uninitialized";
}
