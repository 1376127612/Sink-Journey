import { $FastStream } from "@package/net/covers1624/quack/collection";
import { $MethodNode } from "@package/org/objectweb/asm/tree";
import { $Iterable, $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/codechicken/mixin/util" {
    export class $FieldMixin extends $Record {
        name(): string;
        access(): number;
        desc(): string;
        getAccessName(arg0: string): string;
        constructor(name: string, desc: string, access: number);
    }
    /**
     * Values that may be interpreted as {@link $FieldMixin}.
     */
    export type $FieldMixin_ = { access?: number, name?: string, desc?: string,  } | [access?: number, name?: string, desc?: string, ];
    export class $MethodInfo {
    }
    export interface $MethodInfo {
        getName(): string;
        isAbstract(): boolean;
        isPrivate(): boolean;
        getOwner(): $ClassInfo;
        getDesc(): string;
        getExceptions(): string[];
        get name(): string;
        get abstract(): boolean;
        get private(): boolean;
        get owner(): $ClassInfo;
        get desc(): string;
        get exceptions(): string[];
    }
    export class $MixinInfo extends $Record {
        name(): string;
        parent(): string;
        methods(): $List<$MethodNode>;
        fields(): $List<$FieldMixin>;
        supers(): $List<string>;
        linearize(): $FastStream<$MixinInfo>;
        parentTraits(): $List<$MixinInfo>;
        constructor(name: string, parent: string, parentTraits: $List_<$MixinInfo_>, fields: $List_<$FieldMixin_>, methods: $List_<$MethodNode>, supers: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $MixinInfo}.
     */
    export type $MixinInfo_ = { parentTraits?: $List_<$MixinInfo_>, methods?: $List_<$MethodNode>, parent?: string, fields?: $List_<$FieldMixin_>, supers?: $List_<string>, name?: string,  } | [parentTraits?: $List_<$MixinInfo_>, methods?: $List_<$MethodNode>, parent?: string, fields?: $List_<$FieldMixin_>, supers?: $List_<string>, name?: string, ];
    export class $ClassInfo {
        getName(): string;
        isInterface(): boolean;
        getInterfaces(): $Iterable<$ClassInfo>;
        getMethods(): $Iterable<$MethodInfo>;
        getModuleName(): string;
        getSuperClass(): $ClassInfo;
        concreteParent(): $ClassInfo;
        findPublicImpl(arg0: string, arg1: string): $MethodInfo;
        getParentMethods(): $FastStream<$MethodInfo>;
        inheritsFrom(arg0: string): boolean;
        getAllMethods(): $FastStream<$MethodInfo>;
        findPublicParentImpl(arg0: string, arg1: string): $MethodInfo;
        get name(): string;
        get interface(): boolean;
        get interfaces(): $Iterable<$ClassInfo>;
        get methods(): $Iterable<$MethodInfo>;
        get moduleName(): string;
        get superClass(): $ClassInfo;
        get parentMethods(): $FastStream<$MethodInfo>;
        get allMethods(): $FastStream<$MethodInfo>;
    }
}
