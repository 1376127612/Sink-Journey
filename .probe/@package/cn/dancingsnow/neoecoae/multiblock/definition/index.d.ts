import { $Level } from "@package/net/minecraft/world/level";
import { $Consumer_, $BiConsumer, $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder_, $Direction_, $Holder } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PlannedBlock, $RequiredItem } from "@package/cn/dancingsnow/neoecoae/multiblock/placement";
import { $TrackedDummyWorld } from "@package/com/lowdragmc/lowdraglib2/utils/virtuallevel";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ECOMultiblockRequirement_ } from "@package/cn/dancingsnow/neoecoae/api/multiblock";
import { $List, $List_ } from "@package/java/util";

declare module "@package/cn/dancingsnow/neoecoae/multiblock/definition" {
    export class $MultiBlockDefinition$Builder {
        create(arg0: $Consumer_<$MultiBlockDefinition>): $MultiBlockDefinition;
        create(): $MultiBlockDefinition;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_): $MultiBlockDefinition$Builder;
        expandMax(arg0: number): $MultiBlockDefinition$Builder;
        onFormed(arg0: $BiConsumer_<$BlockPos, $Level>): $MultiBlockDefinition$Builder;
        expandMin(arg0: number): $MultiBlockDefinition$Builder;
        setRequirement(arg0: $BlockPos_, arg1: $ECOMultiblockRequirement_): $MultiBlockDefinition$Builder;
        setBlockRepeatable(arg0: $BlockPos_, arg1: $Direction_, arg2: $BlockState_): $MultiBlockDefinition$Builder;
        setRequirementRepeatable(arg0: $BlockPos_, arg1: $Direction_, arg2: $ECOMultiblockRequirement_): $MultiBlockDefinition$Builder;
        setBlockWithRepeatShifted(arg0: $BlockPos_, arg1: $Direction_, arg2: number, arg3: $BlockState_): $MultiBlockDefinition$Builder;
        constructor(arg0: $Holder_<$Block>);
    }
    export class $MultiBlockContext$DummyDelegated extends $MultiBlockContext {
        getYMax(): number;
        getRequiredItems(): $List<$RequiredItem>;
        addRequiredItem(arg0: $ItemStack_): void;
        setFormed(arg0: boolean): void;
        constructor(arg0: number, arg1: $TrackedDummyWorld);
        get YMax(): number;
        get requiredItems(): $List<$RequiredItem>;
        set formed(value: boolean);
    }
    export class $BlockInstruction {
    }
    export interface $BlockInstruction {
        accept(arg0: $MultiBlockContext): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockInstruction}.
     */
    export type $BlockInstruction_ = ((arg0: $MultiBlockContext) => void);
    export class $MultiBlockContext {
        getLevel(): $Level;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_): void;
        allBlocks(): $List<$BlockPos>;
        isFormed(): boolean;
        static dummyDelegated(arg0: number, arg1: $TrackedDummyWorld): $MultiBlockContext$DummyDelegated;
        getRepeats(): number;
        static formedPreviewState(arg0: $BlockState_): $BlockState;
        setRequirement(arg0: $BlockPos_, arg1: $ECOMultiblockRequirement_): void;
        constructor();
        get level(): $Level;
        get formed(): boolean;
        get repeats(): number;
    }
    export class $MultiBlockDefinition {
        getOnFormed(): $BiConsumer<$BlockPos, $Level>;
        getName(): $Component;
        static builder(arg0: $Holder_<$Block>): $MultiBlockDefinition$Builder;
        getOwner(): $Holder<$Block>;
        createLevel(arg0: $MultiBlockContext): $Level;
        requirements(arg0: number): $List<$PlannedBlock>;
        getExpandMin(): number;
        getExpandMax(): number;
        constructor(arg0: $List_<$BlockInstruction_>, arg1: $Holder_<$Block>, arg2: $Component_, arg3: number, arg4: number, arg5: $BiConsumer_<$BlockPos, $Level>);
        get onFormed(): $BiConsumer<$BlockPos, $Level>;
        get name(): $Component;
        get owner(): $Holder<$Block>;
        get expandMin(): number;
        get expandMax(): number;
    }
}
