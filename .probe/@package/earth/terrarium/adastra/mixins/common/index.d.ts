import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $GameProfile } from "@package/com/mojang/authlib";

declare module "@package/earth/terrarium/adastra/mixins/common" {
    export class $SlotAccessor {
    }
    export interface $SlotAccessor {
        setY(arg0: number): void;
        setX(arg0: number): void;
        set y(value: number);
        set x(value: number);
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        isJumping(): boolean;
        get jumping(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => boolean);
    export class $SkullBlockEntityInvoker {
        static invokeFetchGameProfile(arg0: string): $CompletableFuture<($GameProfile) | undefined>;
        static getCheckedMainThreadExecutor(): $Executor;
        static get checkedMainThreadExecutor(): $Executor;
    }
    export interface $SkullBlockEntityInvoker {
    }
}
