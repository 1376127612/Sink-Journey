import { $Map_, $Set, $HashMap } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
import { $Attribute, $Attribute_ } from "@package/com/alessandro/astages/api/store";

declare module "@package/com/alessandro/astages/api/store/container" {
    export class $AttributeStore extends $HashMap<$Attribute<never>, $Object> {
        combineWith(other: $AttributeStore): $AttributeStore;
        allAttributes(): $Set<$Attribute<never>>;
        static builder(): $AttributeStore;
        isPresent<T>(attribute: $Attribute_<T>): boolean;
        static compose(): $AttributeStore$Builder;
        setAttribute<T>(attribute: $Attribute_<T>, value: T): $AttributeStore;
        getAttribute<T>(attribute: $Attribute_<T>): T;
        addAttribute<T>(attribute: $Attribute_<T>): $AttributeStore;
        addAttribute<T>(attribute: $Attribute_<T>, isOptional: boolean): $AttributeStore;
        constructor();
    }
    export class $AttributeStore$Builder {
        withSelf(selfAttributes: $AttributeStore): $AttributeStore$Builder;
        withPlugin(map: $Map_<$Class<never>, $AttributeStore>, clazz: $Class<never>): $AttributeStore$Builder;
        withPlugin(pluginAttributes: $AttributeStore): $AttributeStore$Builder;
        build(): $AttributeStore;
        withSuper(superAttributes: $AttributeStore): $AttributeStore$Builder;
        constructor();
    }
    export class $AStore<V> {
    }
    export interface $AStore<V> {
        checkAttribute(attribute: $Attribute_<never>): void;
        isValueNull(attribute: $Attribute_<never>): boolean;
        get<T>(attribute: $Attribute_<T>): T;
        isEnabled(attribute: $Attribute_<boolean>): boolean;
        set<T>(attribute: $Attribute_<T>, value: T): V;
        allowedAttributes(): $AttributeStore;
        isDisabled(attribute: $Attribute_<boolean>): boolean;
    }
}
