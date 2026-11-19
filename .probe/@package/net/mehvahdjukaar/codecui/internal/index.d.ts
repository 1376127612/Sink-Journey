import { $Codec } from "@package/com/mojang/serialization";

declare module "@package/net/mehvahdjukaar/codecui/internal" {
    export class $HolderSetElementCodec {
    }
    export interface $HolderSetElementCodec {
        codecui$getElementCodec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $HolderSetElementCodec}.
     */
    export type $HolderSetElementCodec_ = (() => $Codec<never>);
}
