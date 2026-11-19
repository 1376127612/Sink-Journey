import { $Reader } from "@package/java/io";
import { $RegExp } from "@package/dev/latvian/mods/rhino/regexp";
import { $BiConsumer_, $IntFunction_, $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo, $VariableTypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Stream } from "@package/java/util/stream";
import { $TypeWrappers } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $Method, $AccessibleObject, $Field, $Executable, $Member, $Constructor } from "@package/java/lang/reflect";
import { $MethodHandles$Lookup, $MethodHandle } from "@package/java/lang/invoke";
import { $ClassVisibilityContext_, $DataObject, $DefaultValueTypeHint_, $ArrayValueProvider } from "@package/dev/latvian/mods/rhino/util";
import { $ClassLoader, $Throwable, $Enum, $Record, $RuntimeException, $Class, $Runnable_, $StringBuilder, $Object } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $Map_, $Collection_, $List_, $Comparator, $Map, $Set, $ListIterator } from "@package/java/util";
export * as util from "@package/dev/latvian/mods/rhino/util";
export * as type from "@package/dev/latvian/mods/rhino/type";
export * as regexp from "@package/dev/latvian/mods/rhino/regexp";

declare module "@package/dev/latvian/mods/rhino" {
    export class $CustomProperty {
    }
    export interface $CustomProperty {
        get(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $CustomProperty}.
     */
    export type $CustomProperty_ = (() => $Object);
    export class $Script {
    }
    export interface $Script {
        exec(arg1: $Scriptable): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Script}.
     */
    export type $Script_ = ((arg1: $Scriptable) => $Object);
    export class $CachedClassStorage {
        getDebugClassName(arg0: $Class<never>): string;
        get(arg0: $Class<never>): $CachedClassInfo;
        include(arg0: $Class<never>, arg1: $Member): boolean;
        isVisible(arg0: number): boolean;
        static GLOBAL_PUBLIC: $CachedClassStorage;
        includeProtected: boolean;
        static GLOBAL_PROTECTED: $CachedClassStorage;
        objectClass: $CachedClassInfo;
        constructor(arg0: boolean);
    }
    export class $UnhandledRejectionTracker {
        enumerate(): $List<$Object>;
        process(arg0: $Consumer_<$Object>): void;
        constructor();
    }
    export class $CachedMethodInfo$Accessible {
        getSignature(): $MethodSignature;
        getName(): string;
        getInfo(): $CachedMethodInfo;
        constructor();
        get signature(): $MethodSignature;
        get name(): string;
        get info(): $CachedMethodInfo;
    }
    export class $EvaluatorException extends $RhinoException {
        constructor(arg1: string);
        constructor(arg1: string, arg2: string, arg3: number);
        constructor(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number);
    }
    export class $MemberType extends $Enum<$MemberType> {
        static get(arg0: $Object, arg1: $Context): $MemberType;
        static values(): $MemberType[];
        static valueOf(arg0: string): $MemberType;
        static NUMBER: $MemberType;
        static SYMBOL: $MemberType;
        static UNDEFINED: $MemberType;
        static STRING: $MemberType;
        static OBJECT: $MemberType;
        static FUNCTION: $MemberType;
        static BOOLEAN: $MemberType;
    }
    /**
     * Values that may be interpreted as {@link $MemberType}.
     */
    export type $MemberType_ = "undefined" | "object" | "function" | "symbol" | "string" | "number" | "boolean";
    export class $CachedParameters extends $Record {
        firstArgContext(): boolean;
        typeInfos(): $List<$TypeInfo>;
        count(): number;
        types(): $List<$Class<never>>;
        typesMatch(arg0: $Class<never>[]): boolean;
        varArgType(): $TypeInfo;
        isVarArg(): boolean;
        static EMPTY: $CachedParameters;
        static EMPTY_FIRST_CX: $CachedParameters;
        constructor(count: number, types: $List_<$Class<never>>, typeInfos: $List_<$TypeInfo_>, firstArgContext: boolean, varArgType: $TypeInfo_);
        get varArg(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CachedParameters}.
     */
    export type $CachedParameters_ = { types?: $List_<$Class<never>>, count?: number, firstArgContext?: boolean, typeInfos?: $List_<$TypeInfo_>, varArgType?: $TypeInfo_,  } | [types?: $List_<$Class<never>>, count?: number, firstArgContext?: boolean, typeInfos?: $List_<$TypeInfo_>, varArgType?: $TypeInfo_, ];
    export class $ErrorReporter {
    }
    export interface $ErrorReporter {
        error(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        warning(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): void;
        runtimeError(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): $EvaluatorException;
    }
    export class $Wrapper {
        static unwrapped(arg0: $Object): $Object;
    }
    export interface $Wrapper {
        unwrap(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Wrapper}.
     */
    export type $Wrapper_ = (() => $Object);
    export class $ConstProperties {
    }
    export interface $ConstProperties {
        putConst(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        defineConst(arg1: string, arg2: $Scriptable): void;
        isConst(arg0: string): boolean;
    }
    export class $RhinoException extends $RuntimeException {
        lineSource(): string;
        getScriptStack(): $ScriptStackElement[];
        getScriptStack(arg0: number, arg1: string): $ScriptStackElement[];
        initSourceName(arg0: string): void;
        initLineSource(arg0: string): void;
        initLineNumber(arg0: number): void;
        initColumnNumber(arg0: number): void;
        getScriptStackTrace(arg0: number, arg1: string): string;
        getScriptStackTrace(): string;
        lineNumber(): number;
        sourceName(): string;
        columnNumber(): number;
        details(): string;
    }
    export class $CustomMember extends $Record {
        name(): string;
        type(): $TypeInfo;
        value(): $Object;
        constructor(name: string, type: $TypeInfo_, value: $Object);
    }
    /**
     * Values that may be interpreted as {@link $CustomMember}.
     */
    export type $CustomMember_ = { name?: string, value?: $Object, type?: $TypeInfo_,  } | [name?: string, value?: $Object, type?: $TypeInfo_, ];
    export class $MethodSignature extends $Record {
        name(): string;
        args(): $Class<never>[];
        constructor(arg0: $Executable);
        constructor(name: string, args: $Class<never>[]);
    }
    /**
     * Values that may be interpreted as {@link $MethodSignature}.
     */
    export type $MethodSignature_ = { args?: $Class<never>[], name?: string,  } | [args?: $Class<never>[], name?: string, ];
    export class $SymbolScriptable {
    }
    export interface $SymbolScriptable {
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: $Symbol): void;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
    }
    export class $CachedConstructorInfo extends $CachedExecutableInfo {
        getCached(): $Constructor<never>;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Constructor<never>);
        get cached(): $Constructor<never>;
    }
    export class $BuiltInSlot$AttributeSetter<U extends $ScriptableObject> {
    }
    export interface $BuiltInSlot$AttributeSetter<U extends $ScriptableObject> {
        apply(arg0: U, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BuiltInSlot$AttributeSetter}.
     */
    export type $BuiltInSlot$AttributeSetter_<U> = ((arg0: U, arg1: number) => void);
    export class $Slot {
    }
    export class $BuiltInSlot$PropDescriptionSetter<U extends $ScriptableObject> {
    }
    export interface $BuiltInSlot$PropDescriptionSetter<U extends $ScriptableObject> {
        apply(arg0: U, arg1: $BuiltInSlot<U>, arg2: $Object, arg3: $ScriptableObject, arg4: boolean, arg5: $Object, arg6: number, arg7: $Context): void;
    }
    /**
     * Values that may be interpreted as {@link $BuiltInSlot$PropDescriptionSetter}.
     */
    export type $BuiltInSlot$PropDescriptionSetter_<U> = ((arg0: U, arg1: $BuiltInSlot<U>, arg2: $Object, arg3: $ScriptableObject, arg4: boolean, arg5: $Object, arg6: number, arg7: $Context) => void);
    export class $CachedFieldInfo$Accessible {
        getName(): string;
        getInfo(): $CachedFieldInfo;
        constructor();
        get name(): string;
        get info(): $CachedFieldInfo;
    }
    export class $IdScriptableObject extends $ScriptableObject implements $IdFunctionCall {
        activatePrototypeMap(arg0: number): void;
        initPrototypeConstructor(arg0: $IdFunctionObject, arg1: $Context): void;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: string, arg3: string, arg4: number, arg5: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: string, arg3: number, arg4: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: $Symbol, arg3: string, arg4: number, arg5: $Context): $IdFunctionObject;
        execIdCall(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]): $Object;
        initPrototypeValue(arg0: number, arg1: $Symbol, arg2: $Object, arg3: number): void;
        initPrototypeValue(arg0: number, arg1: string, arg2: $Object, arg3: number): void;
        exportAsJSClass(arg0: number, arg1: $Scriptable, arg2: boolean, arg3: $Context): $IdFunctionObject;
        hasPrototypeMap(): boolean;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        constructor();
    }
    export class $NativeJavaObject implements $Scriptable, $SymbolScriptable, $Wrapper {
        getIds(): $Object[];
        getTypeMapping(): $Map<$VariableTypeInfo, $TypeInfo>;
        addCustomProperty(arg0: string, arg1: $TypeInfo_, arg2: $CustomProperty_): void;
        addCustomMember(arg0: $CustomMember_): void;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: string): void;
        "delete"(arg1: number): void;
        "delete"(arg1: $Symbol): void;
        unwrap(): $Object;
        getClassName(): string;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        has(arg1: string, arg2: $Scriptable): boolean;
        setPrototype(arg0: $Scriptable): void;
        getParentScope(): $Scriptable;
        setParentScope(arg0: $Scriptable): void;
        hasInstance(arg1: $Scriptable): boolean;
        getPrototype(): $Scriptable;
        getAllIds(): $Object[];
        getTypeOf(): $MemberType;
        constructor(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_, arg3: $Context);
        constructor(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_, arg3: boolean, arg4: $Context);
        get ids(): $Object[];
        get typeMapping(): $Map<$VariableTypeInfo, $TypeInfo>;
        get className(): string;
        get allIds(): $Object[];
        get typeOf(): $MemberType;
    }
    export class $CachedMemberInfo {
        getName(): string;
        getDeclaringClass(): $CachedClassInfo;
        getCached(): $AccessibleObject;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $AccessibleObject, arg2: string, arg3: number);
        get name(): string;
        get declaringClass(): $CachedClassInfo;
        get cached(): $AccessibleObject;
    }
    export class $NativeJavaClass extends $NativeJavaObject implements $Function {
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        getClassObject(): $Class<never>;
        constructor(arg1: $Scriptable, arg2: $Class<never>, arg3: boolean);
        constructor(arg1: $Scriptable, arg2: $Class<never>);
        get classObject(): $Class<never>;
    }
    export class $Function {
    }
    export interface $Function extends $Scriptable, $Callable, $Constructable {
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
    }
    export class $ScriptStackElement {
        renderJavaStyle(arg0: $StringBuilder): void;
        renderMozillaStyle(arg0: $StringBuilder): void;
        fileName: string;
        functionName: string;
        lineNumber: number;
        constructor(arg0: string, arg1: string, arg2: number);
    }
    export class $NativeJavaMap extends $NativeJavaObject {
        mapValueType: $TypeInfo;
        mapKeyType: $TypeInfo;
        map: $Map<any, any>;
        constructor(arg1: $Scriptable, arg2: $Object, arg3: $Map_<any, any>, arg4: $TypeInfo_);
    }
    export class $CachedFieldInfo extends $CachedMemberInfo {
        get(arg1: $Object): $Object;
        set(arg1: $Object, arg2: $Object): void;
        getType(): $TypeInfo;
        getCached(): $Field;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Field);
        get type(): $TypeInfo;
        get cached(): $Field;
    }
    export class $ScriptableObject implements $Scriptable, $SymbolScriptable, $ConstProperties {
        getIds(): $Object[];
        getAllIds(): $Object[];
        getTypeOf(): $MemberType;
        defineOwnProperties(arg1: $ScriptableObject): void;
        defineFunctionProperties(arg1: string[], arg2: $Class<never>, arg3: number): void;
        getExternalArrayLength(): $Object;
        getExternalArrayData(): $ExternalArrayData;
        setExternalArrayData(arg1: $ExternalArrayData): void;
        static defineBuiltInProperty<T extends $ScriptableObject>(arg0: T, arg1: string, arg2: number, arg3: $BuiltInSlot$Getter_<T>, arg4: $BuiltInSlot$Setter_<T>, arg5: $BuiltInSlot$AttributeSetter_<T>): void;
        static defineBuiltInProperty<T extends $ScriptableObject>(arg0: T, arg1: string, arg2: number, arg3: $BuiltInSlot$Getter_<T>, arg4: $BuiltInSlot$Setter_<T>, arg5: $BuiltInSlot$AttributeSetter_<T>, arg6: $BuiltInSlot$PropDescriptionSetter_<T>): void;
        static defineConstProperty(arg0: $Scriptable, arg1: string, arg2: $Context): void;
        avoidObjectDetection(): boolean;
        putConst(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        sealObject(): void;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        static getDefaultValue(arg0: $Scriptable, arg1: $DefaultValueTypeHint_, arg2: $Context): $Object;
        size(): number;
        get(arg1: $Object): $Object;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        static getProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Context): $Object;
        static getProperty(arg0: $Scriptable, arg1: string, arg2: $Context): $Object;
        static getProperty(arg0: $Scriptable, arg1: number, arg2: $Context): $Object;
        isEmpty(): boolean;
        isSealed(): boolean;
        "delete"(arg1: string): void;
        "delete"(arg1: $Symbol): void;
        "delete"(arg1: number): void;
        getClassName(): string;
        getAttributes(arg1: number): number;
        getAttributes(arg1: string): number;
        getAttributes(arg1: $Symbol): number;
        has(arg1: number, arg2: $Scriptable): boolean;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        static deleteProperty(arg0: $Scriptable, arg1: number, arg2: $Context): boolean;
        static deleteProperty(arg0: $Scriptable, arg1: string, arg2: $Context): boolean;
        static getFunctionPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        static hasProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Context): boolean;
        static hasProperty(arg0: $Scriptable, arg1: number, arg2: $Context): boolean;
        static hasProperty(arg0: $Scriptable, arg1: string, arg2: $Context): boolean;
        setAttributes(arg1: string, arg2: number): void;
        setAttributes(arg1: $Symbol, arg2: number): void;
        setAttributes(arg1: number, arg2: number): void;
        setPrototype(arg0: $Scriptable): void;
        isExtensible(): boolean;
        static putProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Object, arg3: $Context): void;
        static putProperty(arg0: $Scriptable, arg1: number, arg2: $Object, arg3: $Context): void;
        static putProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: $Context): void;
        static getTopLevelScope(arg0: $Scriptable): $Scriptable;
        associateValue(arg0: $Object, arg1: $Object): $Object;
        getAssociatedValue(arg0: $Object): $Object;
        getParentScope(): $Scriptable;
        setParentScope(arg0: $Scriptable): void;
        defineConst(arg1: string, arg2: $Scriptable): void;
        static getTopScopeValue(arg0: $Scriptable, arg1: $Object, arg2: $Context): $Object;
        static getClassPrototype(arg0: $Scriptable, arg1: string, arg2: $Context): $Scriptable;
        getGetterOrSetter(arg1: string, arg2: number, arg3: $Scriptable, arg4: boolean): $Function;
        static getPropertyIds(arg1: $Scriptable): $Object[];
        static putConstProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: $Context): void;
        setGetterOrSetter(arg1: $Object, arg2: number, arg3: $Callable_, arg4: boolean): void;
        static redefineProperty(arg0: $Scriptable, arg1: string, arg2: boolean, arg3: $Context): void;
        preventExtensions(): void;
        isConst(arg0: string): boolean;
        defineProperty(arg1: string, arg2: $Object, arg3: $WrappedExecutable_, arg4: $WrappedExecutable_, arg5: number): void;
        static defineProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: number, arg4: $Context): void;
        defineProperty(arg0: string, arg1: $Supplier_<$Object>, arg2: $Consumer_<$Object>, arg3: number): void;
        defineProperty(arg1: string, arg2: $Class<never>, arg3: number): void;
        defineProperty(arg1: $Symbol, arg2: $Object, arg3: number): void;
        defineProperty(arg1: string, arg2: $Object, arg3: number): void;
        defineProperty(arg1: $Scriptable, arg2: string, arg3: number, arg4: $Callable_, arg5: number, arg6: number): void;
        defineProperty(arg1: string, arg2: $Function_<$Scriptable, $Object>, arg3: $BiConsumer_<$Scriptable, $Object>, arg4: number): void;
        static getGeneratorFunctionPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        hasInstance(arg1: $Scriptable): boolean;
        static getObjectPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        getPrototype(): $Scriptable;
        static getArrayPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        defineOwnProperty(arg1: $Object, arg2: $ScriptableObject): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        get ids(): $Object[];
        get allIds(): $Object[];
        get typeOf(): $MemberType;
        get externalArrayLength(): $Object;
        get empty(): boolean;
        get sealed(): boolean;
        get className(): string;
        get extensible(): boolean;
    }
    export class $ExternalArrayData {
    }
    export interface $ExternalArrayData {
        getArrayLength(): number;
        getArrayElement(arg0: number): $Object;
        setArrayElement(arg0: number, arg1: $Object): void;
        get arrayLength(): number;
    }
    export class $BuiltInSlot$Getter<U extends $ScriptableObject> {
    }
    export interface $BuiltInSlot$Getter<U extends $ScriptableObject> {
        apply(arg0: U, arg1: $Scriptable, arg2: $Context): $Object;
    }
    /**
     * Values that may be interpreted as {@link $BuiltInSlot$Getter}.
     */
    export type $BuiltInSlot$Getter_<U> = ((arg0: U, arg1: $Scriptable, arg2: $Context) => $Object);
    export class $CachedMethodInfo extends $CachedExecutableInfo {
        getCached(): $Method;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Method);
        get cached(): $Method;
    }
    export class $BuiltInSlot$Setter<U extends $ScriptableObject> {
    }
    export interface $BuiltInSlot$Setter<U extends $ScriptableObject> {
        apply(arg0: U, arg1: $Object, arg2: $Scriptable, arg3: $Scriptable, arg4: boolean, arg5: $Context): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BuiltInSlot$Setter}.
     */
    export type $BuiltInSlot$Setter_<U> = ((arg0: U, arg1: $Object, arg2: $Scriptable, arg3: $Scriptable, arg4: boolean, arg5: $Context) => boolean);
    export class $Scriptable {
        static NOT_FOUND: $Object;
    }
    export interface $Scriptable {
        getIds(): $Object[];
        getAllIds(): $Object[];
        getTypeOf(): $MemberType;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: string): void;
        "delete"(arg1: number): void;
        getClassName(): string;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        setPrototype(arg0: $Scriptable): void;
        getParentScope(): $Scriptable;
        setParentScope(arg0: $Scriptable): void;
        hasInstance(arg1: $Scriptable): boolean;
        getPrototype(): $Scriptable;
        get ids(): $Object[];
        get allIds(): $Object[];
        get typeOf(): $MemberType;
        get className(): string;
    }
    export class $Symbol {
    }
    export interface $Symbol {
    }
    export class $IdFunctionCall {
    }
    export interface $IdFunctionCall {
        execIdCall(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $IdFunctionCall}.
     */
    export type $IdFunctionCall_ = ((arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]) => $Object);
    export class $Constructable {
    }
    export interface $Constructable {
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
    }
    /**
     * Values that may be interpreted as {@link $Constructable}.
     */
    export type $Constructable_ = ((arg1: $Scriptable, arg2: $Object[]) => $Scriptable);
    export class $WrappedExecutable {
    }
    export interface $WrappedExecutable {
        invoke(arg1: $Scriptable, arg2: $Object, arg3: $Object[]): $Object;
        getReturnType(): $TypeInfo;
        isStatic(): boolean;
        unwrap(): $CachedExecutableInfo;
        construct(arg1: $Scriptable, arg2: $Object[]): $Object;
        get returnType(): $TypeInfo;
        get static(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedExecutable}.
     */
    export type $WrappedExecutable_ = ((arg1: $Scriptable, arg2: $Object, arg3: $Object[]) => $Object);
    export class $BaseFunction extends $IdScriptableObject implements $Function {
        setPrototypePropertyAttributes(arg0: number): void;
        setImmunePrototypeProperty(arg0: $Object): void;
        setStandardPropertyAttributes(arg0: number): void;
        getLength(): number;
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        createObject(arg1: $Scriptable): $Scriptable;
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        getFunctionName(): string;
        getArity(): number;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        constructor(arg0: boolean);
        set prototypePropertyAttributes(value: number);
        set immunePrototypeProperty(value: $Object);
        set standardPropertyAttributes(value: number);
        get length(): number;
        get functionName(): string;
        get arity(): number;
    }
    export class $IdFunctionObject extends $BaseFunction {
        exportAsScopeProperty(): void;
        initFunction(arg0: string, arg1: $Scriptable): void;
        markAsConstructor(arg0: $Scriptable): void;
        getTag(): $Object;
        unknown(): $RuntimeException;
        addAsProperty(arg0: $Scriptable, arg1: $Context): void;
        methodId(): number;
        hasTag(arg0: $Object): boolean;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg0: $IdFunctionCall_, arg1: $Object, arg2: number, arg3: number);
        constructor(arg0: $IdFunctionCall_, arg1: $Object, arg2: number, arg3: string, arg4: number, arg5: $Scriptable);
        get tag(): $Object;
    }
    export class $CachedClassInfo {
        getDebugInfo(): $List<string>;
        appendDebugType(arg0: $StringBuilder): void;
        getRemapPrefixes(): $Set<string>;
        getAccessibleFields(arg0: boolean): $List<$CachedFieldInfo$Accessible>;
        getAccessibleMethods(arg0: boolean): $List<$CachedMethodInfo$Accessible>;
        getSuperclass(): $CachedClassInfo;
        getInterfaces(): $List<$CachedClassInfo>;
        getMethod(arg0: string, arg1: $Class<never>[]): $CachedMethodInfo;
        getConstructors(): $List<$CachedConstructorInfo>;
        getDeclaredFields(): $List<$CachedFieldInfo>;
        getDeclaredMethods(): $List<$CachedMethodInfo>;
        getTypeInfo(): $TypeInfo;
        storage: $CachedClassStorage;
        type: $Class<never>;
        modifiers: number;
        isInterface: boolean;
        constructor(arg0: $CachedClassStorage, arg1: $Class<never>);
        get debugInfo(): $List<string>;
        get remapPrefixes(): $Set<string>;
        get superclass(): $CachedClassInfo;
        get interfaces(): $List<$CachedClassInfo>;
        get constructors(): $List<$CachedConstructorInfo>;
        get declaredFields(): $List<$CachedFieldInfo>;
        get declaredMethods(): $List<$CachedMethodInfo>;
        get typeInfo(): $TypeInfo;
    }
    export class $Callable {
    }
    export interface $Callable {
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Callable}.
     */
    export type $Callable_ = ((arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]) => $Object);
    export class $CachedExecutableInfo extends $CachedMemberInfo {
        transformArgs(arg1: $Object, arg2: $CachedParameters_, arg3: $Object[]): $Object[];
        appendDebugParams(arg0: $StringBuilder): void;
        getParameters(): $CachedParameters;
        getSignature(): $MethodSignature;
        invoke(arg1: $Scriptable, arg2: $Object, arg3: $Object[]): $Object;
        getReturnType(): $TypeInfo;
        getCached(): $Executable;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Executable);
        get parameters(): $CachedParameters;
        get signature(): $MethodSignature;
        get returnType(): $TypeInfo;
        get cached(): $Executable;
    }
    export class $BuiltInSlot<T extends $ScriptableObject> extends $Slot {
    }
    export class $Context {
        isMapLike(arg0: $Object): boolean;
        mapOf(arg0: $Object, arg1: $TypeInfo_, arg2: $TypeInfo_): $Object;
        wrapAny(arg0: $Scriptable, arg1: $Object): $Object;
        doTopCall(arg0: $Scriptable, arg1: $Callable_, arg2: $Scriptable, arg3: $Object[], arg4: boolean): $Object;
        callSync(arg0: $Callable_, arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        setOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        classOf(arg0: $Object): $Object;
        jsToJava(arg0: $Object, arg1: $TypeInfo_): $Object;
        javaToJS(arg0: $Object, arg1: $Scriptable, arg2: $TypeInfo_): $Object;
        javaToJS(arg0: $Object, arg1: $Scriptable): $Object;
        setTopCall(arg0: $Scriptable): void;
        isListLike(arg0: $Object): boolean;
        addToScope(arg0: $Scriptable, arg1: string, arg2: $Object): void;
        initJSON(arg0: $ScriptableObject, arg1: boolean): void;
        getUnhandledPromiseTracker(): $UnhandledRejectionTracker;
        newClassSerialNumber(): number;
        defaultObjectToSource(arg0: $Scriptable, arg1: $Scriptable, arg2: $Object[]): string;
        lastStoredScriptable(): $Scriptable;
        reportConversionError(arg0: $Object, arg1: $TypeInfo_): $Object;
        initStandardObjects(arg0: $ScriptableObject, arg1: boolean): $ScriptableObject;
        initStandardObjects(): $ScriptableObject;
        initStandardObjects(arg0: $ScriptableObject): $Scriptable;
        static reportRuntimeError1(arg0: string, arg1: $Object, arg2: $Context): $EvaluatorException;
        setGenerateObserverCount(arg0: boolean): void;
        static reportRuntimeError4(arg0: string, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Object, arg5: $Context): $EvaluatorException;
        initSafeStandardObjects(arg0: $ScriptableObject, arg1: boolean): $ScriptableObject;
        initSafeStandardObjects(arg0: $ScriptableObject): $Scriptable;
        initSafeStandardObjects(): $ScriptableObject;
        static reportRuntimeError2(arg0: string, arg1: $Object, arg2: $Object, arg3: $Context): $EvaluatorException;
        getCachedClassStorage(arg0: boolean): $CachedClassStorage;
        static getSourcePositionFromStack(arg1: number[]): string;
        static throwAsScriptRuntimeEx(arg0: $Throwable, arg1: $Context): $RuntimeException;
        internalConversionWeight(arg0: $Object, arg1: $TypeInfo_): number;
        static reportRuntimeError3(arg0: string, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Context): $EvaluatorException;
        arrayValueProviderOf(arg0: $Object): $ArrayValueProvider;
        getApplicationClassLoader(): $ClassLoader;
        getConversionWeight(arg0: $Object, arg1: $TypeInfo_): number;
        createInterfaceAdapter(arg0: $TypeInfo_, arg1: $ScriptableObject): $Object;
        setApplicationClassLoader(arg0: $ClassLoader): void;
        static reportRuntimeError0(arg0: string, arg1: $Context): $EvaluatorException;
        toString(arg0: $Object): string;
        newArray(arg0: $Scriptable, arg1: $Object[]): $Scriptable;
        newArray(arg0: $Scriptable, arg1: number): $Scriptable;
        wrap(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Object;
        wrap(arg0: $Scriptable, arg1: $Object): $Object;
        canConvert(arg0: $Object, arg1: $TypeInfo_): boolean;
        toBoolean(arg0: $Object): boolean;
        newObject(arg0: $Scriptable): $Scriptable;
        newObject(arg0: $Scriptable, arg1: string, arg2: $Object[]): $Scriptable;
        newObject(arg0: $Scriptable, arg1: string): $Scriptable;
        toNumber(arg0: $Object): number;
        getRegExp(): $RegExp;
        toObject(arg0: $Object, arg1: $Scriptable): $Scriptable;
        getImplementationVersion(): string;
        static reportError(arg1: string): void;
        static reportError(arg1: string, arg2: number, arg3: string, arg4: number, arg5: string): void;
        createClassLoader(arg0: $ClassLoader): $GeneratedClassLoader;
        removeThreadLocal(arg0: $Object): void;
        getTopCallOrThrow(): $Scriptable;
        storeScriptable(arg0: $Scriptable): void;
        wrapJavaClass(arg0: $Scriptable, arg1: $Class<never>): $Scriptable;
        getTopCallScope(): $Scriptable;
        wrapNewObject(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Scriptable;
        getThreadLocal(arg0: $Object): $Object;
        evaluateReader(arg0: $Scriptable, arg1: $Reader, arg2: string, arg3: number, arg4: $Object): $Object;
        evaluateString(arg0: $Scriptable, arg1: string, arg2: string, arg3: number, arg4: $Object): $Object;
        putThreadLocal(arg0: $Object, arg1: $Object): void;
        enqueueMicrotask(arg0: $Runnable_): void;
        processMicrotasks(): void;
        static getUndefinedValue(): $Object;
        hasTopCallScope(): boolean;
        visibleToScripts(arg0: string, arg1: $ClassVisibilityContext_): boolean;
        wrapAsJavaObject(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Scriptable;
        optionalMapOf<K, V>(arg0: $Object, arg1: $TypeInfo_, arg2: $TypeInfo_): $Map<K, V>;
        optionalMapOf(arg0: $Object): $Map<string, $Object>;
        static getSizeRank(arg0: $TypeInfo_): number;
        compileReader(arg0: $Reader, arg1: string, arg2: number, arg3: $Object): $Script;
        static reportRuntimeError(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): $EvaluatorException;
        static reportRuntimeError(arg0: string, arg1: $Context): $EvaluatorException;
        compileString(arg0: string, arg1: string, arg2: number, arg3: $Object): $Script;
        optionalListOf<K>(arg0: $Object, arg1: $TypeInfo_): $List<K>;
        optionalListOf(arg0: $Object): $List<$Object>;
        internalConversionWeightLast(arg0: $Object, arg1: $TypeInfo_): number;
        getInstructionObserverThreshold(): number;
        setInstructionObserverThreshold(arg0: number): void;
        setTrackUnhandledPromiseRejections(arg0: boolean): void;
        getMaximumInterpreterStackDepth(): number;
        getErrorReporter(): $ErrorReporter;
        static reportWarning(arg0: string, arg1: $Context): void;
        static reportWarning(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        listOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        arrayOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        isStrictMode(): boolean;
        static JSTYPE_JAVA_CLASS: number;
        factory: $ContextFactory;
        static JSTYPE_JAVA_ARRAY: number;
        static CONVERSION_TRIVIAL: number;
        static CONVERSION_NONE: number;
        generateObserverCount: boolean;
        static CONVERSION_EXACT: number;
        static JSTYPE_BOOLEAN: number;
        static JSTYPE_UNDEFINED: number;
        static JSTYPE_OBJECT: number;
        lock: $Object;
        static JSTYPE_STRING: number;
        static JSTYPE_NULL: number;
        static JSTYPE_JAVA_OBJECT: number;
        static JSTYPE_NUMBER: number;
        constructor(arg0: $ContextFactory);
        set topCall(value: $Scriptable);
        get unhandledPromiseTracker(): $UnhandledRejectionTracker;
        get regExp(): $RegExp;
        get implementationVersion(): string;
        get topCallOrThrow(): $Scriptable;
        get topCallScope(): $Scriptable;
        static get undefinedValue(): $Object;
        set trackUnhandledPromiseRejections(value: boolean);
        get maximumInterpreterStackDepth(): number;
        get errorReporter(): $ErrorReporter;
        get strictMode(): boolean;
    }
    export class $NativeArray extends $ScriptableObject implements $List<any>, $DataObject {
        getIds(arg1: boolean, arg2: boolean): $Object[];
        createDataObject<T>(arg0: $Supplier_<T>, arg1: $Context): T;
        isDataObjectList(): boolean;
        createDataObjectList<T>(arg0: $Supplier_<T>, arg1: $Context): $List<T>;
        getIndexIds(): $List<number>;
        /**
         * @deprecated
         */
        jsGet_length(): number;
        remove(arg0: $Object): boolean;
        remove(arg0: number): $Object;
        get(arg0: number): $Object;
        get(arg0: number): $Object;
        getLength(): number;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        add(arg0: $Object): boolean;
        add(arg0: number, arg1: $Object): void;
        subList(arg0: number, arg1: number): $List<any>;
        toArray(arg0: $Object[]): $Object[];
        toArray(): $Object[];
        iterator(): $Iterator<any>;
        contains(arg0: $Object): boolean;
        addAll(arg0: $Collection_<any>): boolean;
        addAll(arg0: number, arg1: $Collection_<any>): boolean;
        set(arg0: number, arg1: $Object): $Object;
        removeAll(arg0: $Collection_<any>): boolean;
        retainAll(arg0: $Collection_<any>): boolean;
        listIterator(): $ListIterator<any>;
        listIterator(arg0: number): $ListIterator<any>;
        containsAll(arg0: $Collection_<any>): boolean;
        replaceAll(arg0: $UnaryOperator_<$Object>): void;
        spliterator(): $Spliterator<$Object>;
        sort(arg0: $Comparator<$Object>): void;
        reversed(): $List<$Object>;
        getFirst(): $Object;
        getLast(): $Object;
        addFirst(arg0: $Object): void;
        addLast(arg0: $Object): void;
        removeFirst(): $Object;
        removeLast(): $Object;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$Object>;
        parallelStream(): $Stream<$Object>;
        removeIf(arg0: $Predicate_<$Object>): boolean;
        forEach(arg0: $Consumer_<$Object>): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg1: $Object[]);
        constructor(arg1: number);
        [Symbol.iterator](): Iterator<any>
        get dataObjectList(): boolean;
        get indexIds(): $List<number>;
        get length(): number;
        get first(): $Object;
        get last(): $Object;
    }
    export class $ContextFactory {
        getCachedClassStorage(): $CachedClassStorage;
        getRecordConstructor(arg0: $Class<never>): $MethodHandle;
        getDefaultRecordProperties(arg0: $Class<never>): $Object[];
        setInstanceStaticFallback(arg0: boolean): void;
        getInstanceStaticFallback(): boolean;
        getMethodHandlesLookup(): $MethodHandles$Lookup;
        enter(): $Context;
        getTypeWrappers(): $TypeWrappers;
        registerDefaultRecordProperties(arg0: $Record): void;
        constructor();
        get cachedClassStorage(): $CachedClassStorage;
        get methodHandlesLookup(): $MethodHandles$Lookup;
        get typeWrappers(): $TypeWrappers;
    }
    export class $GeneratedClassLoader {
    }
    export interface $GeneratedClassLoader {
        linkClass(arg0: $Class<never>): void;
        defineClass(arg0: string, arg1: number[]): $Class<never>;
    }
}
