import { $MixinFactory, $MixinFactory$TraitKey, $MixinCompiler, $MixinFactory$TraitKey_ } from "@package/codechicken/mixin/api";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $Class } from "@package/java/lang";
export * as api from "@package/codechicken/mixin/api";
export * as util from "@package/codechicken/mixin/util";

declare module "@package/codechicken/mixin" {
    export class $SidedFactory<B, F, T> extends $MixinFactoryImpl<B, F> {
        registerTrait(arg0: $Class<never>, arg1: $Class<never>): void;
        registerTrait(arg0: $Class<never>, arg1: $Class<never>, arg2: $Class<never>): void;
        getTraitsForObject(arg0: T, arg1: boolean): $ImmutableSet<$MixinFactory$TraitKey>;
    }
    export class $MixinFactoryImpl<B, F> implements $MixinFactory<B, F> {
        construct(arg0: $ImmutableSet<$MixinFactory$TraitKey_>): F;
        registerTrait(arg0: $Class<never>): $MixinFactory$TraitKey;
        registerTrait(arg0: $ClassNode): $MixinFactory$TraitKey;
        getMixinCompiler(): $MixinCompiler;
        getTraitsForClass(arg0: $Class<never>): $ImmutableSet<$MixinFactory$TraitKey>;
        constructor(arg0: $MixinCompiler, arg1: $Class<B>, arg2: $Class<F>, arg3: string);
        get mixinCompiler(): $MixinCompiler;
    }
}
