import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Mount, $WritableMount } from "@package/dan200/computercraft/api/filesystem";
import { $Map, $Set } from "@package/java/util";
import { $Runnable_, $Object } from "@package/java/lang";

declare module "@package/dan200/computercraft/api/peripheral" {
    export class $IPeripheral {
    }
    export interface $IPeripheral {
        getAdditionalTypes(): $Set<string>;
        equals(arg0: $IPeripheral): boolean;
        getType(): string;
        getTarget(): $Object;
        attach(arg0: $IComputerAccess): void;
        detach(arg0: $IComputerAccess): void;
        get additionalTypes(): $Set<string>;
        get type(): string;
        get target(): $Object;
    }
    export class $WorkMonitor {
    }
    export interface $WorkMonitor {
        canWork(): boolean;
        shouldWork(): boolean;
        runWork(arg0: $Runnable_): boolean;
        trackWork(arg0: number, arg1: $TimeUnit_): void;
    }
    export class $IComputerAccess {
    }
    export interface $IComputerAccess {
        queueEvent(arg0: string, ...arg1: $Object[]): void;
        getAttachmentName(): string;
        mountWritable(arg0: string, arg1: $WritableMount, arg2: string): string;
        mountWritable(arg0: string, arg1: $WritableMount): string;
        getMainThreadMonitor(): $WorkMonitor;
        getAvailablePeripheral(arg0: string): $IPeripheral;
        getAvailablePeripherals(): $Map<string, $IPeripheral>;
        mount(arg0: string, arg1: $Mount, arg2: string): string;
        mount(arg0: string, arg1: $Mount): string;
        unmount(arg0: string): void;
        getID(): number;
        get attachmentName(): string;
        get mainThreadMonitor(): $WorkMonitor;
        get availablePeripherals(): $Map<string, $IPeripheral>;
        get ID(): number;
    }
}
