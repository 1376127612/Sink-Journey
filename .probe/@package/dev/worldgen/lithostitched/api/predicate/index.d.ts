import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $InclusiveRange_ } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/api/predicate" {
    export class $LoadPredicate {
        static not(arg0: $LoadPredicate): $LoadPredicate;
        static allOf(...arg0: $LoadPredicate[]): $LoadPredicate;
        static alwaysTrue(): $LoadPredicate;
        static packFormat(arg0: $InclusiveRange_<number>): $LoadPredicate;
        static anyOf(...arg0: $LoadPredicate[]): $LoadPredicate;
        static modLoaded(arg0: string): $LoadPredicate;
        static alwaysFalse(): $LoadPredicate;
        static isFabric(): $LoadPredicate;
        static isNeoforge(): $LoadPredicate;
        static CODEC: $Codec<$LoadPredicate>;
        static FIELD_CODEC: $MapCodec<($LoadPredicate) | undefined>;
        static get fabric(): $LoadPredicate;
        static get neoforge(): $LoadPredicate;
    }
    export interface $LoadPredicate {
        test(): boolean;
        codec(): $MapCodec<$LoadPredicate>;
    }
}
