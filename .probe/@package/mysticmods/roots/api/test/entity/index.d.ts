import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/test/entity" {
    export class $EntityTestType<P extends $EntityTest> {
    }
    export interface $EntityTestType<P extends $EntityTest> {
        codec(): $MapCodec<P>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, P>;
    }
    /**
     * Values that may be interpreted as {@link $EntityTestType}.
     */
    export type $EntityTestType_<P> = RegistryTypes.RootsEntityTestTypes;
    export interface $EntityTestType<P> extends RegistryMarked<RegistryTypes.RootsEntityTestTypesTag, RegistryTypes.RootsEntityTestTypes> {}
    export class $EntityTest implements $Predicate<$Entity> {
        getEntityTypes(): $List<$EntityType<never>>;
        test(arg0: $Entity): boolean;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        static CODEC: $Codec<$EntityTest>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntityTest>;
        constructor();
        get entityTypes(): $List<$EntityType<never>>;
    }
}
