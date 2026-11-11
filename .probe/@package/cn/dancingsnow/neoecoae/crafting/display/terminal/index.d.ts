import { $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Object } from "@package/java/lang";

declare module "@package/cn/dancingsnow/neoecoae/crafting/display/terminal" {
    export class $KeyCounterSnapshotAccess {
    }
    export interface $KeyCounterSnapshotAccess {
        neoecoae$primaryMaps(): $Reference2ObjectMap<$Object, never>;
        neoecoae$primaryMaps(arg0: $Reference2ObjectMap<$Object, never>): void;
    }
}
