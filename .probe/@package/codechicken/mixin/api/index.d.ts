import { $ImmutableSet } from "@package/com/google/common/collect";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $ClassInfo, $MixinInfo } from "@package/codechicken/mixin/util";
import { $ClassLoader, $Record, $Class } from "@package/java/lang";
import { $Set_, $Collection_ } from "@package/java/util";

declare module "@package/codechicken/mixin/api" {
    export class $MixinBackend {
    }
    export interface $MixinBackend {
        filterMethodAnnotations(arg0: string, arg1: string): boolean;
        getBytes(arg0: string): number[];
        getContextClassLoader(): $ClassLoader;
        get contextClassLoader(): $ClassLoader;
    }
    export class $MixinLanguageSupport {
    }
    export interface $MixinLanguageSupport {
        obtainInfo(arg0: $ClassNode): $ClassInfo;
        buildMixinTrait(arg0: $ClassNode): $MixinInfo;
    }
    export class $MixinCompiler {
        static create(): $MixinCompiler;
        static create(arg0: $MixinBackend): $MixinCompiler;
        static create(arg0: $MixinBackend, arg1: $MixinDebugger_): $MixinCompiler;
        static create(arg0: $MixinBackend, arg1: $MixinDebugger_, arg2: $Collection_<$Class<$MixinLanguageSupport>>): $MixinCompiler;
    }
    export interface $MixinCompiler {
        getClassInfo(arg0: string): $ClassInfo;
        getClassInfo(arg0: $ClassNode): $ClassInfo;
        getClassInfo(arg0: $Class<never>): $ClassInfo;
        getDefinedClass<T>(arg0: string): $Class<T>;
        getLanguageSupport<T extends $MixinLanguageSupport>(arg0: string): T;
        compileMixinClass<T>(arg0: string, arg1: string, arg2: $Set_<string>): $Class<T>;
        defineClass<T>(arg0: string, arg1: number[]): $Class<T>;
        registerTrait(arg0: $ClassNode): $MixinInfo;
        getClassNode(arg0: string): $ClassNode;
        getMixinBackend(): $MixinBackend;
        getMixinInfo(arg0: string): $MixinInfo;
        get mixinBackend(): $MixinBackend;
    }
    export class $MixinDebugger {
    }
    export interface $MixinDebugger {
        defineClass(arg0: string, arg1: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $MixinDebugger}.
     */
    export type $MixinDebugger_ = ((arg0: string, arg1: number[]) => void);
    export class $MixinFactory<B, F> {
    }
    export interface $MixinFactory<B, F> {
        getTraitsForClass(arg0: $Class<never>): $ImmutableSet<$MixinFactory$TraitKey>;
        getMixinCompiler(): $MixinCompiler;
        construct(arg0: $ImmutableSet<$MixinFactory$TraitKey_>): F;
        registerTrait(arg0: $Class<never>): $MixinFactory$TraitKey;
        registerTrait(arg0: $ClassNode): $MixinFactory$TraitKey;
        get mixinCompiler(): $MixinCompiler;
    }
    export class $MixinFactory$TraitKey extends $Record {
        tName(): string;
        constructor(tName: string);
    }
    /**
     * Values that may be interpreted as {@link $MixinFactory$TraitKey}.
     */
    export type $MixinFactory$TraitKey_ = { tName?: string,  } | [tName?: string, ];
}
