import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $Field, $Method, $Type } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/field" {
    export class $ManagedKey {
        getName(): string;
        getFieldAccessor(): $IAccessor<never>;
        getFieldAccessor(arg0: $Object): $IAccessor<never>;
        getContentType(): $Type;
        isLazy(): boolean;
        isPersist(): boolean;
        isDestSync(): boolean;
        createRef(arg0: $Object): $IRef<never>;
        isReadOnlyManaged(): boolean;
        isDrop(): boolean;
        getPersistentKey(): string;
        getRawField(): $Field;
        getSerializeMethod(): $Method;
        setRedOnlyManaged(arg0: $Method, arg1: $Method, arg2: $Method): void;
        getClazzType(): $Class<never>;
        static getClazzType(arg0: $Type): $Class<never>;
        getOnDirtyMethod(): $Method;
        setPersistentKey(arg0: string): void;
        getDeserializeMethod(): $Method;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $Type, arg6: $Field);
        get name(): string;
        get contentType(): $Type;
        get lazy(): boolean;
        get persist(): boolean;
        get destSync(): boolean;
        get readOnlyManaged(): boolean;
        get drop(): boolean;
        get rawField(): $Field;
        get serializeMethod(): $Method;
        get onDirtyMethod(): $Method;
        get deserializeMethod(): $Method;
    }
}
