import { $FastStream } from "@package/net/covers1624/quack/collection";
import { $MethodNode } from "@package/org/objectweb/asm/tree";
import { $Iterable, $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/codechicken/mixin/util" {
    export class $FieldMixin extends $Record {
        getAccessName(arg0: string): string;
        name(): string;
        access(): number;
        desc(): string;
        constructor(name: string, desc: string, access: number);
    }
    /**
     * Values that may be interpreted as {@link $FieldMixin}.
     */
    export type $FieldMixin_ = { name?: string, desc?: string, access?: number,  } | [name?: string, desc?: string, access?: number, ];
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
        supers(): $List<string>;
        linearize(): $FastStream<$MixinInfo>;
        parentTraits(): $List<$MixinInfo>;
        name(): string;
        parent(): string;
        methods(): $List<$MethodNode>;
        fields(): $List<$FieldMixin>;
        constructor(name: string, parent: string, parentTraits: $List_<$MixinInfo_>, fields: $List_<$FieldMixin_>, methods: $List_<$MethodNode>, supers: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $MixinInfo}.
     */
    export type $MixinInfo_ = { supers?: $List_<string>, name?: string, parentTraits?: $List_<$MixinInfo_>, methods?: $List_<$MethodNode>, parent?: string, fields?: $List_<$FieldMixin_>,  } | [supers?: $List_<string>, name?: string, parentTraits?: $List_<$MixinInfo_>, methods?: $List_<$MethodNode>, parent?: string, fields?: $List_<$FieldMixin_>, ];
    export class $ClassInfo {
        getSuperClass(): $ClassInfo;
        getAllMethods(): $FastStream<$MethodInfo>;
        findPublicParentImpl(arg0: string, arg1: string): $MethodInfo;
        findPublicImpl(arg0: string, arg1: string): $MethodInfo;
        concreteParent(): $ClassInfo;
        getName(): string;
        isInterface(): boolean;
        getInterfaces(): $Iterable<$ClassInfo>;
        getMethods(): $Iterable<$MethodInfo>;
        getModuleName(): string;
        inheritsFrom(arg0: string): boolean;
        getParentMethods(): $FastStream<$MethodInfo>;
        get superClass(): $ClassInfo;
        get allMethods(): $FastStream<$MethodInfo>;
        get name(): string;
        get interface(): boolean;
        get interfaces(): $Iterable<$ClassInfo>;
        get methods(): $Iterable<$MethodInfo>;
        get moduleName(): string;
        get parentMethods(): $FastStream<$MethodInfo>;
    }
}
