import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $InclusiveRange_ } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/api/predicate" {
    export class $LoadPredicate {
        static modLoaded(arg0: string): $LoadPredicate;
        static isFabric(): $LoadPredicate;
        static packFormat(arg0: $InclusiveRange_<number>): $LoadPredicate;
        static isNeoforge(): $LoadPredicate;
        static alwaysFalse(): $LoadPredicate;
        static alwaysTrue(): $LoadPredicate;
        static not(arg0: $LoadPredicate): $LoadPredicate;
        static allOf(...arg0: $LoadPredicate[]): $LoadPredicate;
        static anyOf(...arg0: $LoadPredicate[]): $LoadPredicate;
        static CODEC: $Codec<$LoadPredicate>;
        static FIELD_CODEC: $MapCodec<($LoadPredicate) | undefined>;
        static get fabric(): $LoadPredicate;
        static get neoforge(): $LoadPredicate;
    }
    export interface $LoadPredicate {
        codec(): $MapCodec<$LoadPredicate>;
        test(): boolean;
    }
}
