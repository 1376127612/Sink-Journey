import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/publicapi/presentation" {
    export class $TextScope extends $Enum<$TextScope> {
        static values(): $TextScope[];
        static valueOf(name: string): $TextScope;
        static CONTROLLER: $TextScope;
        static OPERATION: $TextScope;
    }
    /**
     * Values that may be interpreted as {@link $TextScope}.
     */
    export type $TextScope_ = "controller" | "operation";
    export class $JadeText {
    }
    export interface $JadeText {
        remove(lineId: $ResourceLocation_): void;
        append(lineId: $ResourceLocation_, text: $Component_): void;
        clear(): void;
        replace(lineId: $ResourceLocation_, text: $Component_): void;
        appendAfter(lineId: $ResourceLocation_, afterLineId: $ResourceLocation_, text: $Component_): void;
    }
    export class $DisplayStackView {
    }
    export interface $DisplayStackView {
        stack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $DisplayStackView}.
     */
    export type $DisplayStackView_ = (() => $ItemStack_);
    export class $IoDisplay {
    }
    export interface $IoDisplay {
        value(): string;
        unit(): string;
        label(): string;
        icon(): ($DisplayStackView) | undefined;
    }
    export class $ControllerText {
    }
    export interface $ControllerText {
        remove(scope: $TextScope_, lineId: $ResourceLocation_): void;
        append(scope: $TextScope_, lineId: $ResourceLocation_, text: $Component_): void;
        clear(scope: $TextScope_): void;
        replace(lineId: $ResourceLocation_, text: $Component_): void;
        appendAfter(scope: $TextScope_, lineId: $ResourceLocation_, afterLineId: $ResourceLocation_, text: $Component_): void;
    }
}
