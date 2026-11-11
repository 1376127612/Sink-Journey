import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/extendedae_plus/mixin/minecraft/accessor" {
    export class $BlockEntityAccessor {
    }
    export interface $BlockEntityAccessor {
        extendedae_plus$setType(arg0: $BlockEntityType_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAccessor}.
     */
    export type $BlockEntityAccessor_ = ((arg0: $BlockEntityType<never>) => void);
}
