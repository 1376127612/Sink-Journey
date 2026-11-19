import { $Consumer_ } from "@package/java/util/function";
import { $GraphElementModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model";
import { $Codec, $DataResult } from "@package/com/mojang/serialization";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $TypeHandle } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
import { $Type } from "@package/java/lang/reflect";
import { $Object } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/constant" {
    export class $Constant {
        getTypeHandle(): $TypeHandle;
        clearListeners(): void;
        setDefaultValue(arg0: $Object): void;
        isDeserializeFailed(): boolean;
        tryGetValue<T>(arg0: $Type): $DataResult<T>;
        setDeserializeFailed(arg0: boolean): void;
        getDefaultValue(): $Object;
        isAssignableFrom(arg0: $Type): boolean;
        getValue(): $Object;
        init(arg0: $TypeHandle): void;
        setValue(arg0: $Object): void;
        getType(): $Type;
        copy(): $Constant;
        getOwner(): $GraphElementModel;
        setOwner(arg0: $GraphElementModel): void;
        notifyListeners(): void;
        addListener(arg0: $Consumer_<$Object>): $ISubscription;
        trySetValue<T>(arg0: T): boolean;
        setSerializationEnabled(arg0: boolean): void;
        isSerializationEnabled(): boolean;
        getCustomCodec(): $Codec<never>;
        setCustomCodec(arg0: $Codec<never>): void;
        constructor();
        get typeHandle(): $TypeHandle;
        get type(): $Type;
    }
}
