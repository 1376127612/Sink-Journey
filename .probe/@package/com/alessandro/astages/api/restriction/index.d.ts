import { $AConfigurablePreset, $AConfigPreset } from "@package/com/alessandro/astages/api/store/config";
import { $Function_ } from "@package/java/util/function";
import { $AttributeStore, $AStore } from "@package/com/alessandro/astages/api/store/container";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Comparable } from "@package/java/lang";
import { $Attribute_ } from "@package/com/alessandro/astages/api/store";

declare module "@package/com/alessandro/astages/api/restriction" {
    export class $ARestriction<R extends $ARestriction<R, U, V>, U, V> implements $AStore<R>, $AConfigurablePreset<R>, $Comparable<R> {
        isRestricted(object: R): boolean;
        getStage(): string;
        get<T>(attribute: $Attribute_<T>): T;
        compareTo(that: R): number;
        getMessage<T>(attribute: $Attribute_<$Function_<T, $Component>>, value: T): $Component;
        set<T>(attribute: $Attribute_<T>, value: T): R;
        setPriority(priority: number): R;
        getPriority(): number;
        getId(): string;
        allowedAttributes(): $AttributeStore;
        displayMessage<T>(attribute: $Attribute_<$Function_<T, $Component>>, value: T, player: $Player): void;
        restrict(object: U): R;
        checkAttribute(attribute: $Attribute_<never>): void;
        isValueNull(attribute: $Attribute_<never>): boolean;
        isEnabled(attribute: $Attribute_<boolean>): boolean;
        isDisabled(attribute: $Attribute_<boolean>): boolean;
        withPreset(...presets: $AConfigPreset<R>[]): R;
        constructor(id: string, stage: string);
        get stage(): string;
        get id(): string;
    }
}
