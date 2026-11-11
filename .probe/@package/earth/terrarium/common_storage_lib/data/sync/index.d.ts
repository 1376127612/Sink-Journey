import { $Supplier_ } from "@package/java/util/function";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $AttachmentType, $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/earth/terrarium/common_storage_lib/data/sync" {
    export class $AttachmentData<T> extends $Record {
        static getAllSyncData(target: $AttachmentHolder): $List<$AttachmentData<never>>;
        encode(buf: $RegistryFriendlyByteBuf): void;
        static of<T>(target: $AttachmentHolder, serializer: $DataSyncSerializer_<T>): $AttachmentData<T>;
        static of<T>(serializer: $DataSyncSerializer_<T>, data: T): $AttachmentData<T>;
        data(): T;
        serializer(): $DataSyncSerializer<T>;
        updateTarget(target: $AttachmentHolder): void;
        constructor(serializer: $DataSyncSerializer_<T>, data: T);
    }
    /**
     * Values that may be interpreted as {@link $AttachmentData}.
     */
    export type $AttachmentData_<T> = { serializer?: $DataSyncSerializer_<any>, data?: any,  } | [serializer?: $DataSyncSerializer_<any>, data?: any, ];
    export class $DataSyncSerializer<T> {
        static create<T>(attachmentType: $Supplier_<$AttachmentType<T>>, codec: $StreamCodec<$RegistryFriendlyByteBuf, T>): $DataSyncSerializer<T>;
    }
    export interface $DataSyncSerializer<T> {
        decode(arg0: $RegistryFriendlyByteBuf): $AttachmentData<T>;
        getCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        getAttachmentType(): $AttachmentType<T>;
        get codec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        get attachmentType(): $AttachmentType<T>;
    }
    /**
     * Values that may be interpreted as {@link $DataSyncSerializer}.
     */
    export type $DataSyncSerializer_<T> = RegistryTypes.CommonStorageLibDataSyncSerializers;
    export interface $DataSyncSerializer<T> extends RegistryMarked<RegistryTypes.CommonStorageLibDataSyncSerializersTag, RegistryTypes.CommonStorageLibDataSyncSerializers> {}
}
