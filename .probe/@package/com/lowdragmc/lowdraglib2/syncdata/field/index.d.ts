import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $IManaged } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Field, $Method, $Type } from "@package/java/lang/reflect";
import { $RPCMethodMeta } from "@package/com/lowdragmc/lowdraglib2/syncdata/rpc";
import { $Map } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/field" {
    export class $ManagedFieldHolder {
        getSyncedFieldIndex(arg0: string): $ManagedKey;
        getRpcMethodMap(): $Map<string, $RPCMethodMeta>;
        merge(arg0: $ManagedFieldHolder): void;
        getFields(): $ManagedKey[];
        static clearCache(): void;
        static ofCache(arg0: $Class<$IManaged>): $ManagedFieldHolder;
        static EMPTY: $ManagedFieldHolder;
        constructor(arg0: $Class<$IManaged>, arg1: $ManagedFieldHolder);
        constructor(arg0: $Class<$IManaged>);
        get rpcMethodMap(): $Map<string, $RPCMethodMeta>;
        get fields(): $ManagedKey[];
    }
    export class $ManagedKey {
        getPersistentKey(): string;
        isLazy(): boolean;
        isPersist(): boolean;
        isDestSync(): boolean;
        getRawField(): $Field;
        createRef(arg0: $Object): $IRef<never>;
        isDrop(): boolean;
        isReadOnlyManaged(): boolean;
        getSerializeMethod(): $Method;
        static getClazzType(arg0: $Type): $Class<never>;
        getClazzType(): $Class<never>;
        getOnDirtyMethod(): $Method;
        setPersistentKey(arg0: string): void;
        setRedOnlyManaged(arg0: $Method, arg1: $Method, arg2: $Method): void;
        getDeserializeMethod(): $Method;
        getName(): string;
        getFieldAccessor(arg0: $Object): $IAccessor<never>;
        getFieldAccessor(): $IAccessor<never>;
        getContentType(): $Type;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $Type, arg6: $Field);
        get lazy(): boolean;
        get persist(): boolean;
        get destSync(): boolean;
        get rawField(): $Field;
        get drop(): boolean;
        get readOnlyManaged(): boolean;
        get serializeMethod(): $Method;
        get onDirtyMethod(): $Method;
        get deserializeMethod(): $Method;
        get name(): string;
        get contentType(): $Type;
    }
}
