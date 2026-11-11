import { $Event } from "@package/net/neoforged/bus/api";
import { $ICraftingNetwork } from "@package/org/cyclops/integratedcrafting/api/network";
import { $CraftingJob } from "@package/org/cyclops/integratedcrafting/api/crafting";

declare module "@package/org/cyclops/integratedcrafting/api/event" {
    export class $CraftingJobFinishedEvent extends $Event {
        static post(arg0: $ICraftingNetwork, arg1: $CraftingJob): void;
        isRootJob(): boolean;
        getCraftingNetwork(): $ICraftingNetwork;
        getCraftingJob(): $CraftingJob;
        constructor(arg0: $ICraftingNetwork, arg1: $CraftingJob);
        get rootJob(): boolean;
        get craftingNetwork(): $ICraftingNetwork;
        get craftingJob(): $CraftingJob;
    }
}
