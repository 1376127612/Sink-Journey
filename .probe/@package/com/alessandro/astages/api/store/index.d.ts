import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $TypeToken } from "@package/com/google/common/reflect";
import { $Class } from "@package/java/lang";
export * as config from "@package/com/alessandro/astages/api/store/config";
export * as container from "@package/com/alessandro/astages/api/store/container";

declare module "@package/com/alessandro/astages/api/store" {
    export class $Attribute<T> {
        static setCurrentDeferredRegister(deferredRegister: $DeferredRegister<$Attribute_<never>>): $DeferredRegister<$Attribute<never>>;
        getDefaultValue(): T;
        getId(): string;
        getType(): $Class<T>;
        static create<T>(id: string, attributeType: $AttributeType<T>, defaultValue: T): $Attribute<T>;
        static set currentDeferredRegister(value: $DeferredRegister<$Attribute_<never>>);
        get defaultValue(): T;
        get id(): string;
        get type(): $Class<T>;
    }
    /**
     * Values that may be interpreted as {@link $Attribute}.
     */
    export type $Attribute_<T> = RegistryTypes.AstagesAttributes;
    export class $AttributeType<T> {
        getType(): $Class<T>;
        static create<T>(type: $Class<T>): $AttributeType<T>;
        static create<T>(token: $TypeToken<T>): $AttributeType<T>;
        get type(): $Class<T>;
    }
    export class $ARestrictionType {
        static setCurrentDeferredRegister(deferredRegister: $DeferredRegister<$ARestrictionType_>): $DeferredRegister<$ARestrictionType>;
        getType(): string;
        static create(type: string): $ARestrictionType;
        static set currentDeferredRegister(value: $DeferredRegister<$ARestrictionType_>);
        get type(): string;
    }
    /**
     * Values that may be interpreted as {@link $ARestrictionType}.
     */
    export type $ARestrictionType_ = RegistryTypes.AstagesRestrictionTypes;
    export interface $Attribute<T> extends RegistryMarked<RegistryTypes.AstagesAttributesTag, RegistryTypes.AstagesAttributes> {}
    export class $ASimpleRestrictionType {
        static setCurrentDeferredRegister(deferredRegister: $DeferredRegister<$ASimpleRestrictionType_>): $DeferredRegister<$ASimpleRestrictionType>;
        getType(): string;
        static create(type: string): $ASimpleRestrictionType;
        static set currentDeferredRegister(value: $DeferredRegister<$ASimpleRestrictionType_>);
        get type(): string;
    }
    /**
     * Values that may be interpreted as {@link $ASimpleRestrictionType}.
     */
    export type $ASimpleRestrictionType_ = RegistryTypes.AstagesSimpleRestrictionTypes;
    export interface $ARestrictionType extends RegistryMarked<RegistryTypes.AstagesRestrictionTypesTag, RegistryTypes.AstagesRestrictionTypes> {}
    export interface $ASimpleRestrictionType extends RegistryMarked<RegistryTypes.AstagesSimpleRestrictionTypesTag, RegistryTypes.AstagesSimpleRestrictionTypes> {}
}
