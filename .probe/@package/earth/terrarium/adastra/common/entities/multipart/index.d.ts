import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/earth/terrarium/adastra/common/entities/multipart" {
    export class $MultipartPartsHolder {
    }
    export interface $MultipartPartsHolder {
        adastra$getParts(): $Int2ObjectMap<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $MultipartPartsHolder}.
     */
    export type $MultipartPartsHolder_ = (() => $Int2ObjectMap<$Entity>);
}
