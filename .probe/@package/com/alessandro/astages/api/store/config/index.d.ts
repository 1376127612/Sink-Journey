import { $Consumer_ } from "@package/java/util/function";
import { $Class } from "@package/java/lang";

declare module "@package/com/alessandro/astages/api/store/config" {
    export class $AConfigPreset<T> {
        applyTo(object: T): void;
        isCorrectType(object: T): boolean;
        apply(consumer: $Consumer_<T>): $AConfigPreset<T>;
        constructor(targetClass: $Class<T>);
    }
    export class $AConfigurablePreset<C extends $AConfigurablePreset<C>> {
    }
    export interface $AConfigurablePreset<C extends $AConfigurablePreset<C>> {
        withPreset(...presets: $AConfigPreset<C>[]): C;
    }
}
