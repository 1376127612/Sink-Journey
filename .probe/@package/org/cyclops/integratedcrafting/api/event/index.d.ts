import { $Event } from "@package/net/neoforged/bus/api";
import { $ICraftingNetwork } from "@package/org/cyclops/integratedcrafting/api/network";
import { $CraftingJob } from "@package/org/cyclops/integratedcrafting/api/crafting";

declare module "@package/org/cyclops/integratedcrafting/api/event" {
    export class $CraftingJobFinishedEvent extends $Event {
        getCraftingNetwork(): $ICraftingNetwork;
        getCraftingJob(): $CraftingJob;
        static post(arg0: $ICraftingNetwork, arg1: $CraftingJob): void;
        isRootJob(): boolean;
        constructor(arg0: $ICraftingNetwork, arg1: $CraftingJob);
        get craftingNetwork(): $ICraftingNetwork;
        get craftingJob(): $CraftingJob;
        get rootJob(): boolean;
    }
}
