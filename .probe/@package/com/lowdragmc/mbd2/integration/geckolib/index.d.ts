import { $MBDMachine } from "@package/com/lowdragmc/mbd2/common/machine";
import { $MachineEvent } from "@package/com/lowdragmc/mbd2/common/machine/definition/config/event";

declare module "@package/com/lowdragmc/mbd2/integration/geckolib" {
    export class $MachineCustomKeyframeEvent extends $MachineEvent {
        getControllerName(): string;
        setInstruction(arg0: string): void;
        getAnimationTick(): number;
        setControllerName(arg0: string): void;
        setAnimationTick(arg0: number): void;
        getInstruction(): string;
        animationTick: number;
        instruction: string;
        machine: $MBDMachine;
        controllerName: string;
        constructor(arg0: $MBDMachine, arg1: string, arg2: string, arg3: number);
    }
}
