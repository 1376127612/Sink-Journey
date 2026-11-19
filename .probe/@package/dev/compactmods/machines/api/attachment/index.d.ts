import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $AttachmentType_, $IAttachmentHolder } from "@package/net/neoforged/neoforge/attachment";

declare module "@package/dev/compactmods/machines/api/attachment" {
    export class $IForwardingAttachmentHolder {
    }
    export interface $IForwardingAttachmentHolder extends $IAttachmentHolder {
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        hasAttachments(): boolean;
        attachmentHolder(): $Supplier<$IAttachmentHolder>;
        getData<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        hasData(arg0: $AttachmentType_<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IForwardingAttachmentHolder}.
     */
    export type $IForwardingAttachmentHolder_ = (() => $Supplier_<$IAttachmentHolder>);
}
