import { $Supplier_ } from "@package/java/util/function";
import { $Object, $Class } from "@package/java/lang";
export * as ui from "@package/com/lowdragmc/lowdraglib2/editor/ui";
export * as keymap from "@package/com/lowdragmc/lowdraglib2/editor/keymap";
export * as resource from "@package/com/lowdragmc/lowdraglib2/editor/resource";
export * as project from "@package/com/lowdragmc/lowdraglib2/editor/project";
export * as settings from "@package/com/lowdragmc/lowdraglib2/editor/settings";

declare module "@package/com/lowdragmc/lowdraglib2/editor" {
    export class $ClipboardManager {
        clear(): void;
        copy(arg0: $Supplier_<never>, arg1: $Class<never>): void;
        copy(arg0: $Supplier_<never>): void;
        paste<T>(): T;
        getClipboardContent(): $Object;
        copyDirect(arg0: $Object): void;
        getClipboardType(): $Class<never>;
        static INSTANCE: $ClipboardManager;
        get clipboardContent(): $Object;
        get clipboardType(): $Class<never>;
    }
}
