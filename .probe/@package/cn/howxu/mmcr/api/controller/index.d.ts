import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/api/controller" {
    export class $ControllerScreenTextScope extends $Enum<$ControllerScreenTextScope> {
        static values(): $ControllerScreenTextScope[];
        static valueOf(name: string): $ControllerScreenTextScope;
        static CONTROLLER: $ControllerScreenTextScope;
        static OPERATION: $ControllerScreenTextScope;
    }
    /**
     * Values that may be interpreted as {@link $ControllerScreenTextScope}.
     */
    export type $ControllerScreenTextScope_ = "controller" | "operation";
    export class $ControllerScreenText {
    }
    export interface $ControllerScreenText {
        remove(scope: $ControllerScreenTextScope_, lineId: string): void;
        remove(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_): void;
        append(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_, text: $Component_): void;
        append(scope: $ControllerScreenTextScope_, lineId: string, text: $Component_): void;
        clear(scope: $ControllerScreenTextScope_): void;
        replace(lineId: $ResourceLocation_, text: $Component_): void;
        replace(lineId: string, text: $Component_): void;
        appendAfter(scope: $ControllerScreenTextScope_, lineId: string, afterLineId: string, text: $Component_): void;
        appendAfter(scope: $ControllerScreenTextScope_, lineId: $ResourceLocation_, afterLineId: $ResourceLocation_, text: $Component_): void;
    }
    export class $JadeText {
        static noop(): $JadeText;
    }
    export interface $JadeText {
        remove(lineId: string): void;
        remove(lineId: $ResourceLocation_): void;
        append(lineId: $ResourceLocation_, text: $Component_): void;
        append(lineId: string, text: $Component_): void;
        clear(): void;
        replace(lineId: string, text: $Component_): void;
        replace(lineId: $ResourceLocation_, text: $Component_): void;
        appendAfter(lineId: string, afterLineId: string, text: $Component_): void;
        appendAfter(lineId: $ResourceLocation_, afterLineId: $ResourceLocation_, text: $Component_): void;
    }
}
