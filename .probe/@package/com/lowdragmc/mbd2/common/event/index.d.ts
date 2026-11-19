import { $File_ } from "@package/java/io";
import { $MBDMachineDefinition } from "@package/com/lowdragmc/mbd2/common/machine/definition";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Path_ } from "@package/java/nio/file";
import { $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $MBDRecipeType } from "@package/com/lowdragmc/mbd2/api/recipe";

declare module "@package/com/lowdragmc/mbd2/common/event" {
    export class $MBDRegistryEvent$MBDRecipeType extends $MBDRegistryEvent {
        registerFromFile(arg0: $File_): void;
        register(arg0: $MBDRecipeType): void;
        registerFromResource(arg0: $Class<never>, arg1: string): void;
        constructor();
    }
    export class $MBDRegistryEvent extends $Event implements $IModBusEvent {
        constructor();
    }
    export class $MBDRegistryEvent$Machine extends $MBDRegistryEvent {
        registerFromFile(arg0: string, arg1: $Path_): void;
        register(arg0: $MBDMachineDefinition): void;
        registerFromResource(arg0: $Class<never>, arg1: string, arg2: string): void;
        constructor();
    }
}
