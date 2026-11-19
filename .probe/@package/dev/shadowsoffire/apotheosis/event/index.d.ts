import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";

declare module "@package/dev/shadowsoffire/apotheosis/event" {
    export class $GetItemSocketsEvent extends $Event {
        setSockets(arg0: number): void;
        getSockets(): number;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: number);
        get stack(): $ItemStack;
    }
    export class $ItemSocketingEvent extends $Event {
        setOutput(arg0: $ItemStack_): void;
        getInputGem(): $ItemStack;
        getInputStack(): $ItemStack;
        getOutput(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_);
        get inputGem(): $ItemStack;
        get inputStack(): $ItemStack;
    }
    export class $CanSocketGemEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        getInputGem(): $ItemStack;
        getInputStack(): $ItemStack;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_);
        get inputGem(): $ItemStack;
        get inputStack(): $ItemStack;
    }
}
