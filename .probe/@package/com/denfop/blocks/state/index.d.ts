import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/blocks/state" {
    export class $DefaultDrop extends $Enum<$DefaultDrop> {
        static values(): $DefaultDrop[];
        static valueOf(arg0: string): $DefaultDrop;
        static AdvMachine: $DefaultDrop;
        static Self: $DefaultDrop;
        static None: $DefaultDrop;
        static Machine: $DefaultDrop;
        static Generator: $DefaultDrop;
    }
    /**
     * Values that may be interpreted as {@link $DefaultDrop}.
     */
    export type $DefaultDrop_ = "self" | "none" | "generator" | "machine" | "advmachine";
    export class $TypeProperty extends $Property<$State> {
        getName(arg0: $State): string;
        getState(arg0: $MultiBlockEntity, arg1: string): $State;
        getState(arg0: $MultiBlockEntity): $State;
        getAllStates(): $List<$TypeProperty$StatesBlocks>;
        allowedValues: $List<$State>;
        resourceLocationName: string;
        constructor(arg0: $ResourceLocation_, arg1: $MultiBlockEntity);
        get allStates(): $List<$TypeProperty$StatesBlocks>;
    }
    export class $HarvestTool extends $Enum<$HarvestTool> {
        static values(): $HarvestTool[];
        static valueOf(arg0: string): $HarvestTool;
        static Wrench: $HarvestTool;
        static Shovel: $HarvestTool;
        level: number;
        toolClass: string;
        static Pickaxe: $HarvestTool;
        static None: $HarvestTool;
        static Axe: $HarvestTool;
    }
    /**
     * Values that may be interpreted as {@link $HarvestTool}.
     */
    export type $HarvestTool_ = "none" | "pickaxe" | "shovel" | "axe" | "wrench";
}
