import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ExcludeListMode } from "@package/xaero/hud/category/rule";
import { $ListFactory, $MapFactory } from "@package/xaero/common/misc";
import { $Iterator, $Map$Entry } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/hud/category/serialization/data" {
    export class $ObjectCategoryDataSerializer<D extends $ObjectCategoryData<D>, S> {
        deserialize(arg0: S): D;
        serialize(arg0: D): S;
    }
    export class $ObjectCategoryDataNbtSerializer<D extends $ObjectCategoryData<D>, DB extends $ObjectCategoryData$Builder<D, DB>> extends $ObjectCategoryDataSerializer<D, $CompoundTag> {
        deserialize(arg0: $CompoundTag_): D;
        serialize(arg0: D): $CompoundTag;
    }
    export class $FilterObjectCategoryData<D extends $FilterObjectCategoryData<D>> extends $ObjectCategoryData<D> {
        getIncludeListIterator(): $Iterator<string>;
        getExcludeListIterator(): $Iterator<string>;
        getExcludeMode(): $ExcludeListMode;
        getHardInclude(): string;
        getIncludeListInSuperCategory(): boolean;
        get includeListIterator(): $Iterator<string>;
        get excludeListIterator(): $Iterator<string>;
        get excludeMode(): $ExcludeListMode;
        get hardInclude(): string;
        get includeListInSuperCategory(): boolean;
    }
    export class $FilterObjectCategoryData$Builder<D extends $FilterObjectCategoryData<D>, B extends $FilterObjectCategoryData$Builder<D, B>> extends $ObjectCategoryData$Builder<D, B> {
        addToExcludeList(arg0: string): B;
        setHardInclude(arg0: string): void;
        setExcludeMode(arg0: $ExcludeListMode): void;
        addToIncludeList(arg0: string): B;
        build(): D;
        setDefault(): B;
        setIncludeListInSuperCategory(arg0: boolean): B;
        constructor(arg0: $ListFactory, arg1: $MapFactory);
        set hardInclude(value: string);
        set excludeMode(value: $ExcludeListMode);
        set includeListInSuperCategory(value: boolean);
    }
    export class $ObjectCategoryData<D extends $ObjectCategoryData<D>> {
        getSubCategoryIterator(): $Iterator<D>;
        getSettingOverrideIterator(): $Iterator<$Map$Entry<string, $Object>>;
        getProtection(): boolean;
        getName(): string;
        get subCategoryIterator(): $Iterator<D>;
        get settingOverrideIterator(): $Iterator<$Map$Entry<string, $Object>>;
        get protection(): boolean;
        get name(): string;
    }
    export class $ObjectCategoryDataGsonSerializer<D extends $ObjectCategoryData<D>> extends $ObjectCategoryDataSerializer<D, string> {
        deserialize(arg0: string): D;
        serialize(arg0: D): string;
    }
}
