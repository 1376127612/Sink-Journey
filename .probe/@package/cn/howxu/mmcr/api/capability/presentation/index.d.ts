import { $DisplayStack, $DisplayStack_ } from "@package/cn/howxu/mmcr/api/machine/definition";
import { $Record } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/api/capability/presentation" {
    export class $CapabilityDisplay extends $Record {
        icon(): ($DisplayStack) | undefined;
        value(): string;
        unit(): string;
        label(): string;
        constructor(label: string, value: string, unit: string, icon: ($DisplayStack_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityDisplay}.
     */
    export type $CapabilityDisplay_ = { unit?: string, value?: string, icon?: ($DisplayStack_) | undefined, label?: string,  } | [unit?: string, value?: string, icon?: ($DisplayStack_) | undefined, label?: string, ];
}
