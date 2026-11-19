import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
export * as config from "@package/xaero/lib/common/permission/config";

declare module "@package/xaero/lib/common/permission" {
    export class $PermissionNode<T> {
        getActualPath(): string;
        getType(): $Class<T>;
        getComment(): $Component;
        getDisplayName(): $Component;
        getModId(): string;
        getDefaultPath(): string;
        get actualPath(): string;
        get type(): $Class<T>;
        get comment(): $Component;
        get displayName(): $Component;
        get modId(): string;
        get defaultPath(): string;
    }
}
