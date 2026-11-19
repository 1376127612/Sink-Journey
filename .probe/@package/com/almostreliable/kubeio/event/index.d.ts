import { $GrindingBallData } from "@package/com/enderio/enderio/api/components";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/com/almostreliable/kubeio/event" {
    export class $SimpleDataMapEvent<T> implements $KubeEvent {
        remove(arg0: $ItemPredicate_): void;
        clear(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
    }
    export class $GrindingBallModificationEvent extends $SimpleDataMapEvent<$GrindingBallData> {
        add(arg0: $ItemPredicate_, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    export class $VatReagentModificationEvent extends $SimpleDataMapEvent<$Map<$TagKey<$Item>, number>> {
        add(arg0: $ItemPredicate_, arg1: $TagKey_<$Item>, arg2: number): void;
    }
    export class $ConduitRegistrationEvent implements $KubeEvent {
        registerMeConduit(arg1: string, arg2: $Component_, arg3: string, arg4: boolean): void;
        registerItemConduit(arg1: string, arg2: $Component_, arg3: number, arg4: number): void;
        registerEnergyConduit(arg1: string, arg2: $Component_, arg3: number): void;
        registerFluidConduit(arg1: string, arg2: $Component_, arg3: number): void;
        registerChemicalConduit(arg1: string, arg2: $Component_, arg3: number): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
}
