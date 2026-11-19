import { $Level } from "@package/net/minecraft/world/level";
import { $ManagerBlockEntity } from "@package/ca/teamdman/sfm/common/blockentity";
import { $Trigger, $OutputStatement, $Program_, $IfStatement, $Program, $ResourceIdSet, $Label, $ResourceLimit, $Label_, $ASTNode, $IfStatement_, $InputStatement } from "@package/ca/teamdman/sfml/ast";
import { $CableNetwork } from "@package/ca/teamdman/sfm/common/block_network";
import { $LabelPositionHolder_, $LabelPositionHolder } from "@package/ca/teamdman/sfm/common/label";
import { $List, $List_ } from "@package/java/util";
import { $Duration_ } from "@package/java/time";
import { $BigInteger } from "@package/java/math";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ResourceType, $ResourceType_ } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $TranslatableLogger } from "@package/ca/teamdman/sfm/common/logging";
import { $Record, $Object } from "@package/java/lang";
export * as linting from "@package/ca/teamdman/sfm/common/program/linting";

declare module "@package/ca/teamdman/sfm/common/program" {
    export class $LimitedInputSlot<STACK, ITEM, CAP> implements $LimitedSlot<STACK, ITEM, CAP> {
        peekStackInSlot(): STACK;
        getPos(): $BlockPos;
        getSlot(): number;
        extract(arg0: number): STACK;
        init(arg0: CAP, arg1: $Label_, arg2: $BlockPos_, arg3: $Direction_, arg4: number, arg5: $IInputResourceTracker, arg6: STACK, arg7: $ResourceType_<STACK, ITEM, CAP>): void;
        isDone(): boolean;
        getType(): $ResourceType<STACK, ITEM, CAP>;
        getHandler(): CAP;
        setDone(): void;
        getDirection(): $Direction;
        getLabel(): $Label;
        handler: CAP;
        pos: $BlockPos;
        tracker: $IInputResourceTracker;
        freed: boolean;
        label: $Label;
        slot: number;
        type: $ResourceType<STACK, ITEM, CAP>;
        direction: $Direction;
        constructor(arg0: $Label_, arg1: $BlockPos_, arg2: $Direction_, arg3: number, arg4: CAP, arg5: $IInputResourceTracker, arg6: STACK, arg7: $ResourceType_<STACK, ITEM, CAP>);
    }
    export class $IOutputResourceTracker {
    }
    export interface $IOutputResourceTracker {
        trackTransfer<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK, arg2: number): void;
        getExclusions(): $ResourceIdSet;
        getResourceLimit(): $ResourceLimit;
        getMaxTransferable<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): number;
        isDone<STACK, CAP, ITEM>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): boolean;
        updateRetentionObservation<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): void;
        matchesCapabilityType(arg0: $Object): boolean;
        matchesStack(arg0: $Object): boolean;
        get exclusions(): $ResourceIdSet;
        get resourceLimit(): $ResourceLimit;
    }
    export class $SimulateExploreAllPathsProgramBehaviour implements $ProgramBehaviour {
        fork(): $ProgramBehaviour;
        onInputStatementDropped(arg0: $ProgramContext, arg1: $InputStatement): void;
        getPathElementForNode(arg0: $ASTNode): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement;
        getLatestPathElement(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement;
        getTriggerPathCount(): $BigInteger;
        onInputStatementExecution(arg0: $ProgramContext, arg1: $InputStatement): void;
        terminatePathAndBeginAnew(): void;
        onOutputStatementExecution(arg0: $ProgramContext, arg1: $OutputStatement): void;
        prepareNextTrigger(): void;
        getCurrentPath(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath;
        onTriggerDropped(arg0: $ProgramContext, arg1: $Trigger): void;
        onProgramFinished(arg0: $ProgramContext, arg1: $Program_): void;
        getSeenPaths(): $List<$SimulateExploreAllPathsProgramBehaviour$ExecutionPath>;
        pushPathElement(arg0: $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement): void;
        onInputStatementForgetTransform(arg0: $ProgramContext, arg1: $InputStatement, arg2: $InputStatement): void;
        getSeenIOStatementCountForEachPath(): number[];
        constructor();
        constructor(arg0: $List_<$SimulateExploreAllPathsProgramBehaviour$ExecutionPath_>, arg1: $SimulateExploreAllPathsProgramBehaviour$ExecutionPath_, arg2: $AtomicReference<$BigInteger>);
        get latestPathElement(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement;
        get triggerPathCount(): $BigInteger;
        get currentPath(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath;
        get seenPaths(): $List<$SimulateExploreAllPathsProgramBehaviour$ExecutionPath>;
        get seenIOStatementCountForEachPath(): number[];
    }
    export class $IInputResourceTracker {
    }
    export interface $IInputResourceTracker {
        getRetentionObligationForSlot<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK, arg2: $BlockPos_, arg3: number): number;
        getRemainingRetentionObligation<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): number;
        trackTransfer<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK, arg2: number): void;
        getExclusions(): $ResourceIdSet;
        getResourceLimit(): $ResourceLimit;
        getMaxTransferable<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): number;
        isDone<STACK, CAP, ITEM>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): boolean;
        trackRetentionObligation<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK, arg2: number, arg3: $BlockPos_, arg4: number): void;
        matchesCapabilityType(arg0: $Object): boolean;
        matchesStack(arg0: $Object): boolean;
        get exclusions(): $ResourceIdSet;
        get resourceLimit(): $ResourceLimit;
    }
    export class $SimulateExploreAllPathsProgramBehaviour$ExecutionPath extends $Record {
        stream(): $Stream<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>;
        fork(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath;
        history(): $List<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>;
        streamBranches(): $Stream<$SimulateExploreAllPathsProgramBehaviour$Branch>;
        constructor();
        constructor(history: $List_<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>);
    }
    /**
     * Values that may be interpreted as {@link $SimulateExploreAllPathsProgramBehaviour$ExecutionPath}.
     */
    export type $SimulateExploreAllPathsProgramBehaviour$ExecutionPath_ = { history?: $List_<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>,  } | [history?: $List_<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>, ];
    export class $CapabilityConsumer<T> {
    }
    export interface $CapabilityConsumer<T> {
        accept(arg0: $Label_, arg1: $BlockPos_, arg2: $Direction_, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityConsumer}.
     */
    export type $CapabilityConsumer_<T> = ((arg0: $Label, arg1: $BlockPos, arg2: $Direction, arg3: T) => void);
    export class $LimitedOutputSlot<STACK, ITEM, CAP> implements $LimitedSlot<STACK, ITEM, CAP> {
        getStackInSlot(): STACK;
        getPos(): $BlockPos;
        getSlot(): number;
        insert(arg0: STACK, arg1: boolean): STACK;
        init(arg0: CAP, arg1: $Label_, arg2: $BlockPos_, arg3: $Direction_, arg4: number, arg5: $IOutputResourceTracker, arg6: STACK, arg7: $ResourceType_<STACK, ITEM, CAP>): void;
        isDone(): boolean;
        getType(): $ResourceType<STACK, ITEM, CAP>;
        getHandler(): CAP;
        getDirection(): $Direction;
        getLabel(): $Label;
        handler: CAP;
        pos: $BlockPos;
        tracker: $IOutputResourceTracker;
        freed: boolean;
        label: $Label;
        slot: number;
        type: $ResourceType<STACK, ITEM, CAP>;
        direction: $Direction;
        constructor(arg0: $Label_, arg1: $BlockPos_, arg2: $Direction_, arg3: number, arg4: CAP, arg5: $IOutputResourceTracker, arg6: STACK, arg7: $ResourceType_<STACK, ITEM, CAP>);
        get stackInSlot(): STACK;
        get done(): boolean;
    }
    export class $SimulateExploreAllPathsProgramBehaviour$Branch extends $Record implements $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {
        ifStatement(): $IfStatement;
        wasTrue(): boolean;
        constructor(ifStatement: $IfStatement_, wasTrue: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SimulateExploreAllPathsProgramBehaviour$Branch}.
     */
    export type $SimulateExploreAllPathsProgramBehaviour$Branch_ = { wasTrue?: boolean, ifStatement?: $IfStatement_,  } | [wasTrue?: boolean, ifStatement?: $IfStatement_, ];
    export class $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {
    }
    export interface $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {
    }
    export class $ProgramContext {
        addInput(arg0: $InputStatement): void;
        getLogger(): $TranslatableLogger;
        free(): void;
        fork(): $ProgramContext;
        getLevel(): $Level;
        getManager(): $ManagerBlockEntity;
        getInputs(): $List<$InputStatement>;
        static createSimulationContext(arg0: $Program_, arg1: $LabelPositionHolder_, arg2: number, arg3: $SimulateExploreAllPathsProgramBehaviour): $ProgramContext;
        static createSimulationContext(arg0: $Program_, arg1: $ManagerBlockEntity, arg2: $CableNetwork, arg3: $LabelPositionHolder_, arg4: number, arg5: $SimulateExploreAllPathsProgramBehaviour): $ProgramContext;
        getLabelPositionHolder(): $LabelPositionHolder;
        getProgram(): $Program;
        didSomething(): boolean;
        getBehaviour(): $ProgramBehaviour;
        getRedstonePulses(): number;
        getNetwork(): $CableNetwork;
        setDidSomething(arg0: boolean): void;
        constructor(arg0: $Program_, arg1: $ManagerBlockEntity, arg2: $ProgramBehaviour_);
        get logger(): $TranslatableLogger;
        get level(): $Level;
        get manager(): $ManagerBlockEntity;
        get inputs(): $List<$InputStatement>;
        get labelPositionHolder(): $LabelPositionHolder;
        get program(): $Program;
        get behaviour(): $ProgramBehaviour;
        get redstonePulses(): number;
        get network(): $CableNetwork;
    }
    export class $LimitedSlot<STACK, ITEM, CAP> {
    }
    export interface $LimitedSlot<STACK, ITEM, CAP> {
        getPos(): $BlockPos;
        getSlot(): number;
        getType(): $ResourceType<STACK, ITEM, CAP>;
        getHandler(): CAP;
        getDirection(): $Direction;
        getLabel(): $Label;
        get pos(): $BlockPos;
        get slot(): number;
        get type(): $ResourceType<STACK, ITEM, CAP>;
        get handler(): CAP;
        get direction(): $Direction;
        get label(): $Label;
    }
    export class $ProgramBehaviour {
    }
    export interface $ProgramBehaviour {
        fork(): $ProgramBehaviour;
    }
    /**
     * Values that may be interpreted as {@link $ProgramBehaviour}.
     */
    export type $ProgramBehaviour_ = (() => $ProgramBehaviour);
    export class $IProgramHooks {
    }
    export interface $IProgramHooks {
        onProgramDidSomething(arg0: $Duration_): void;
    }
}
