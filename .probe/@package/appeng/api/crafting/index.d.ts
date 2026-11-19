import { $Level_ } from "@package/net/minecraft/world/level";
import { $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $GenericStack, $KeyCounter, $AEItemKey, $GenericStack_, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/crafting" {
    export class $PatternDetailsTooltip$Property extends $Record {
        name(): $Component;
        value(): $Component;
        constructor(name: $Component_, value: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $PatternDetailsTooltip$Property}.
     */
    export type $PatternDetailsTooltip$Property_ = { value?: $Component_, name?: $Component_,  } | [value?: $Component_, name?: $Component_, ];
    export class $IPatternDetails {
    }
    export interface $IPatternDetails {
        getPrimaryOutput(): $GenericStack;
        supportsPushInputsToExternalInventory(): boolean;
        pushInputsToExternalInventory(arg0: $KeyCounter[], arg1: $IPatternDetails$PatternInputSink_): void;
        getDefinition(): $AEItemKey;
        getInputs(): $IPatternDetails$IInput[];
        getOutputs(): $List<$GenericStack>;
        getTooltip(arg0: $Level_, arg1: $TooltipFlag): $PatternDetailsTooltip;
        get primaryOutput(): $GenericStack;
        get definition(): $AEItemKey;
        get inputs(): $IPatternDetails$IInput[];
        get outputs(): $List<$GenericStack>;
    }
    export class $PatternDetailsTooltip {
        addOutput(arg0: $GenericStack_): void;
        addOutput(arg0: $AEKey, arg1: number): void;
        addInput(arg0: $GenericStack_): void;
        addInput(arg0: $AEKey, arg1: number): void;
        addInputsAndOutputs(arg0: $IPatternDetails): void;
        getOutputMethod(): $Component;
        setOutputMethod(arg0: $Component_): void;
        getProperties(): $List<$PatternDetailsTooltip$Property>;
        getInputs(): $List<$GenericStack>;
        addProperty(arg0: $Component_): void;
        addProperty(arg0: $Component_, arg1: $Component_): void;
        getOutputs(): $List<$GenericStack>;
        static OUTPUT_TEXT_PRODUCES: $Component;
        static OUTPUT_TEXT_CRAFTS: $Component;
        constructor(arg0: $Component_);
        get properties(): $List<$PatternDetailsTooltip$Property>;
        get inputs(): $List<$GenericStack>;
        get outputs(): $List<$GenericStack>;
    }
    export class $IPatternDetails$PatternInputSink {
    }
    export interface $IPatternDetails$PatternInputSink {
        pushInput(arg0: $AEKey, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IPatternDetails$PatternInputSink}.
     */
    export type $IPatternDetails$PatternInputSink_ = ((arg0: $AEKey, arg1: number) => void);
    export class $IPatternDetails$IInput {
    }
    export interface $IPatternDetails$IInput {
        getPossibleInputs(): $GenericStack[];
        getRemainingKey(arg0: $AEKey): $AEKey;
        isValid(arg0: $AEKey, arg1: $Level_): boolean;
        getMultiplier(): number;
        get possibleInputs(): $GenericStack[];
        get multiplier(): number;
    }
}
