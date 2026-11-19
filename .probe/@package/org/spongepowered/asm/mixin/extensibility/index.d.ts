import { $MixinEnvironment, $MixinEnvironment$Phase } from "@package/org/spongepowered/asm/mixin";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $Set_, $Set, $List } from "@package/java/util";

declare module "@package/org/spongepowered/asm/mixin/extensibility" {
    export class $IEnvironmentTokenProvider {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IEnvironmentTokenProvider {
        getPriority(): number;
        getToken(arg0: string, arg1: $MixinEnvironment): number;
        get priority(): number;
    }
    export class $IMixinConfigPlugin {
    }
    export interface $IMixinConfigPlugin {
        getMixins(): $List<string>;
        postApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        preApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        getRefMapperConfig(): string;
        shouldApplyMixin(arg0: string, arg1: string): boolean;
        acceptTargets(arg0: $Set_<string>, arg1: $Set_<string>): void;
        onLoad(arg0: string): void;
        get mixins(): $List<string>;
        get refMapperConfig(): string;
    }
    export class $IMixinInfo {
    }
    export interface $IMixinInfo {
        getClassRef(): string;
        isDetachedSuper(): boolean;
        getTargetClasses(): $List<string>;
        getName(): string;
        getPriority(): number;
        getClassName(): string;
        getClassBytes(): number[];
        getClassNode(arg0: number): $ClassNode;
        getConfig(): $IMixinConfig;
        getPhase(): $MixinEnvironment$Phase;
        get classRef(): string;
        get detachedSuper(): boolean;
        get targetClasses(): $List<string>;
        get name(): string;
        get priority(): number;
        get className(): string;
        get classBytes(): number[];
        get config(): $IMixinConfig;
        get phase(): $MixinEnvironment$Phase;
    }
    export class $IRemapper {
    }
    export interface $IRemapper {
        map(arg0: string): string;
        unmap(arg0: string): string;
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
        mapDesc(arg0: string): string;
        unmapDesc(arg0: string): string;
    }
    export class $IMixinConfigSource {
    }
    export interface $IMixinConfigSource {
        getId(): string;
        getDescription(): string;
        get id(): string;
        get description(): string;
    }
    export class $IMixinConfig {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IMixinConfig {
        getPlugin(): $IMixinConfigPlugin;
        getCleanSourceId(): string;
        getMixinPackage(): string;
        getDecoration<V>(arg0: string): V;
        hasDecoration(arg0: string): boolean;
        getName(): string;
        getPriority(): number;
        getSource(): $IMixinConfigSource;
        decorate<V>(arg0: string, arg1: V): void;
        getTargets(): $Set<string>;
        getEnvironment(): $MixinEnvironment;
        isRequired(): boolean;
        get plugin(): $IMixinConfigPlugin;
        get cleanSourceId(): string;
        get mixinPackage(): string;
        get name(): string;
        get priority(): number;
        get source(): $IMixinConfigSource;
        get targets(): $Set<string>;
        get environment(): $MixinEnvironment;
        get required(): boolean;
    }
}
