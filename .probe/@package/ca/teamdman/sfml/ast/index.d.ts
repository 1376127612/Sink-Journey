import { $ManagerBlockEntity } from "@package/ca/teamdman/sfm/common/blockentity";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LabelPositionHolder_ } from "@package/ca/teamdman/sfm/common/label";
import { $Set_, $ArrayList, $Set, $List, $Collection_, $List_ } from "@package/java/util";
import { $LimitedInputSlot, $IOutputResourceTracker, $ProgramContext, $LimitedOutputSlot, $IInputResourceTracker } from "@package/ca/teamdman/sfm/common/program";
import { $Consumer_, $Predicate_, $Predicate, $BiPredicate, $BiPredicate_ } from "@package/java/util/function";
import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $LocalizationEntry } from "@package/ca/teamdman/sfm/common/localization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceType, $ResourceType_ } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ParserRuleContext } from "@package/org/antlr/v4/runtime";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $SFMLParser$WithParenContext, $SFMLParser$RoundrobinContext, $SFMLParser$WithNegationContext, $SFMLParser$QuantityLimitContext, $SFMLParser$TimerTriggerContext, $SFMLParser$TagMatcherContext, $SFMLParser$RetentionLimitContext, $SFMLParser$ResourceIdDisjunctionContext, $SFMLParser$ResourceIdListContext, $SFMLParser$QuantityRetentionLimitContext, $SFMLParser$EachSideContext, $SFMLParser$OutputStatementContext, $SFMLParser$RawLabelContext, $SFMLParser$StringLabelContext, $SFMLParser$RangeContext, $SFMLParser$ListedSidesContext, $SFMLParser$IntervalNoSpaceContext, $SFMLParser$WithConjunctionContext, $SFMLParser$StringResourceContext, $SFMLBaseVisitor, $SFMLParser$ResourceLimitContext, $SFMLParser$RangesetContext, $SFMLParser$BooleanTrueContext, $SFMLParser$ProgramContext, $SFMLParser$InputResourceLimitsContext, $SFMLParser$WithContext, $SFMLParser$WithDisjunctionContext, $SFMLParser$NumberContext, $SFMLParser$SlotqualifierContext, $SFMLParser$ResourceContext, $SFMLParser$BooleanRedstoneContext, $SFMLParser$BooleanDisjunctionContext, $SFMLParser$SideContext, $SFMLParser$BlockContext, $SFMLParser$RetentionContext, $SFMLParser$NameContext, $SFMLParser$StringContext, $SFMLParser$ResourceExclusionContext, $SFMLParser$ResourceLimitListContext, $SFMLParser$SetOpContext, $SFMLParser$IntervalSpaceContext, $SFMLParser$QuantityContext, $SFMLParser$OutputResourceLimitsContext, $SFMLParser$BooleanParenContext, $SFMLParser$BooleanFalseContext, $SFMLParser$LabelAccessContext, $SFMLParser$IfStatementContext, $SFMLParser$BooleanNegationContext, $SFMLParser$BooleanConjunctionContext, $SFMLParser$ForgetStatementContext, $SFMLParser$InputStatementContext, $SFMLParser$WithTagContext, $SFMLParser$BooleanHasContext, $SFMLParser$PulseTriggerContext, $SFMLParser$ComparisonOpContext } from "@package/ca/teamdman/langs";

declare module "@package/ca/teamdman/sfml/ast" {
    export class $ASTBuilder extends $SFMLBaseVisitor<$ASTNode> {
        getNodeAtIndex(arg0: number): ($ASTNode) | undefined;
        visitString(arg0: $SFMLParser$StringContext): $StringHolder;
        getLineColumnForNode(arg0: $ASTNode): string;
        visitProgram(arg0: $SFMLParser$ProgramContext): $Program;
        visitStringLabel(arg0: $SFMLParser$StringLabelContext): $Label;
        visitQuantity(arg0: $SFMLParser$QuantityContext): $ResourceQuantity;
        visitSlotqualifier(arg0: $SFMLParser$SlotqualifierContext): $NumberRangeSet;
        visitIntervalSpace(arg0: $SFMLParser$IntervalSpaceContext): $ASTNode;
        visitRangeset(arg0: $SFMLParser$RangesetContext): $NumberRangeSet;
        visitWithParen(arg0: $SFMLParser$WithParenContext): $WithParen;
        visitWithTag(arg0: $SFMLParser$WithTagContext): $WithTag;
        visitBooleanTrue(arg0: $SFMLParser$BooleanTrueContext): $BoolExpr;
        visitRetention(arg0: $SFMLParser$RetentionContext): $ResourceQuantity;
        visitEachSide(arg0: $SFMLParser$EachSideContext): $SideQualifier;
        visitBooleanHas(arg0: $SFMLParser$BooleanHasContext): $BoolExpr;
        visitWithNegation(arg0: $SFMLParser$WithNegationContext): $WithNegation;
        visitResourceLimit(arg0: $SFMLParser$ResourceLimitContext): $ResourceLimit;
        visitBooleanParen(arg0: $SFMLParser$BooleanParenContext): $BoolExpr;
        visitTimerTrigger(arg0: $SFMLParser$TimerTriggerContext): $ASTNode;
        visitTagMatcher(arg0: $SFMLParser$TagMatcherContext): $TagMatcher;
        visitLabelAccess(arg0: $SFMLParser$LabelAccessContext): $LabelAccess;
        visitRoundrobin(arg0: $SFMLParser$RoundrobinContext): $RoundRobin;
        visitResource(arg0: $SFMLParser$ResourceContext): $ASTNode;
        visitIfStatement(arg0: $SFMLParser$IfStatementContext): $IfStatement;
        visitComparisonOp(arg0: $SFMLParser$ComparisonOpContext): $ComparisonOperator;
        visitPulseTrigger(arg0: $SFMLParser$PulseTriggerContext): $ASTNode;
        visitBooleanFalse(arg0: $SFMLParser$BooleanFalseContext): $BoolExpr;
        visitQuantityLimit(arg0: $SFMLParser$QuantityLimitContext): $Limit;
        visitListedSides(arg0: $SFMLParser$ListedSidesContext): $SideQualifier;
        visitRawLabel(arg0: $SFMLParser$RawLabelContext): $Label;
        getIndexForNode(arg0: $ASTNode): number;
        visitSetOp(arg0: $SFMLParser$SetOpContext): $SetOperator;
        visitWith(arg0: $SFMLParser$WithContext): $ASTNode;
        visitName(arg0: $SFMLParser$NameContext): $StringHolder;
        visitRange(arg0: $SFMLParser$RangeContext): $NumberRange;
        visitSide(arg0: $SFMLParser$SideContext): $Side;
        visitBlock(arg0: $SFMLParser$BlockContext): $Block;
        visitNumber(arg0: $SFMLParser$NumberContext): $Number;
        visitQuantityRetentionLimit(arg0: $SFMLParser$QuantityRetentionLimitContext): $Limit;
        setLocationFromOtherNode(arg0: $ASTNode, arg1: $ASTNode): void;
        visitWithDisjunction(arg0: $SFMLParser$WithDisjunctionContext): $WithDisjunction;
        visitWithConjunction(arg0: $SFMLParser$WithConjunctionContext): $WithConjunction;
        visitOutputStatement(arg0: $SFMLParser$OutputStatementContext): $OutputStatement;
        visitRetentionLimit(arg0: $SFMLParser$RetentionLimitContext): $Limit;
        visitBooleanConjunction(arg0: $SFMLParser$BooleanConjunctionContext): $BoolExpr;
        visitResourceExclusion(arg0: $SFMLParser$ResourceExclusionContext): $ResourceIdSet;
        visitBooleanDisjunction(arg0: $SFMLParser$BooleanDisjunctionContext): $BoolExpr;
        visitResourceIdList(arg0: $SFMLParser$ResourceIdListContext): $ResourceIdSet;
        visitStringResource(arg0: $SFMLParser$StringResourceContext): $ResourceIdentifier<never, never, never>;
        visitForgetStatement(arg0: $SFMLParser$ForgetStatementContext): $ForgetStatement;
        visitOutputResourceLimits(arg0: $SFMLParser$OutputResourceLimitsContext): $ResourceLimits;
        visitBooleanRedstone(arg0: $SFMLParser$BooleanRedstoneContext): $ASTNode;
        visitResourceLimitList(arg0: $SFMLParser$ResourceLimitListContext): $ResourceLimits;
        visitBooleanNegation(arg0: $SFMLParser$BooleanNegationContext): $BoolExpr;
        visitInputStatement(arg0: $SFMLParser$InputStatementContext): $InputStatement;
        visitResourceIdDisjunction(arg0: $SFMLParser$ResourceIdDisjunctionContext): $ResourceIdSet;
        visitIntervalNoSpace(arg0: $SFMLParser$IntervalNoSpaceContext): $ASTNode;
        visitInputResourceLimits(arg0: $SFMLParser$InputResourceLimitsContext): $ResourceLimits;
        getNodesUnderCursor(arg0: number): $List<$Pair<$ASTNode, $ParserRuleContext>>;
        getContextForNode(arg0: $ASTNode): ($ParserRuleContext) | undefined;
        constructor();
    }
    export class $Block extends $Record implements $Statement {
        tick(arg0: $ProgramContext): void;
        statements(): $List<$Statement>;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static PROGRAM_TICK_STATEMENT_TIME_MS: $LocalizationEntry;
        constructor(statements: $List_<$Statement_>);
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $Block}.
     */
    export type $Block_ = { statements?: $List_<$Statement_>,  } | [statements?: $List_<$Statement_>, ];
    export class $IOStatement {
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_RANGE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_SLOT_SHOULD_NOT_CREATE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_EACH: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_NOT_EACH: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_FOR_RESOURCE_TYPE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_SLOT_NOT_IN_RANGE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_SLOT_CREATED: $LocalizationEntry;
    }
    export interface $IOStatement extends $Statement, $ToStringPretty {
        each(): boolean;
        labelAccess(): $LabelAccess;
        resourceLimits(): $ResourceLimits;
    }
    export class $WithParen extends $Record implements $ASTNode, $WithClause, $ToStringPretty {
        inner(): $WithClause;
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        toStringPretty(): string;
        constructor(inner: $WithClause_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $WithParen}.
     */
    export type $WithParen_ = { inner?: $WithClause_,  } | [inner?: $WithClause_, ];
    export class $ToStringCondensed {
    }
    export interface $ToStringCondensed {
        toStringCondensed(): string;
    }
    /**
     * Values that may be interpreted as {@link $ToStringCondensed}.
     */
    export type $ToStringCondensed_ = (() => string);
    export class $BoolExpr {
        static from(arg0: string): $BoolExpr;
    }
    export interface $BoolExpr extends $Predicate<$ProgramContext>, $ASTNode, $ToStringPretty {
        collectPositions(arg0: $ProgramContext, arg1: $Consumer_<$BlockPos>): void;
    }
    /**
     * Values that may be interpreted as {@link $BoolExpr}.
     */
    export type $BoolExpr_ = (() => void);
    export class $With$WithMode extends $Enum<$With$WithMode> {
        static values(): $With$WithMode[];
        static valueOf(arg0: string): $With$WithMode;
        static WITHOUT: $With$WithMode;
        static WITH: $With$WithMode;
    }
    /**
     * Values that may be interpreted as {@link $With$WithMode}.
     */
    export type $With$WithMode_ = "with" | "without";
    export class $Limit extends $Record implements $ASTNode {
        toStringCondensed(arg0: $Limit_): string;
        retention(): $ResourceQuantity;
        quantity(): $ResourceQuantity;
        withDefaults(arg0: $Limit_): $Limit;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static MAX_QUANTITY_MAX_RETENTION: $Limit;
        static MAX_QUANTITY_NO_RETENTION: $Limit;
        static UNSET: $Limit;
        constructor(quantity: $ResourceQuantity_, retention: $ResourceQuantity_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $Limit}.
     */
    export type $Limit_ = { quantity?: $ResourceQuantity_, retention?: $ResourceQuantity_,  } | [quantity?: $ResourceQuantity_, retention?: $ResourceQuantity_, ];
    export class $RoundRobin$Behaviour extends $Enum<$RoundRobin$Behaviour> {
        static values(): $RoundRobin$Behaviour[];
        static valueOf(arg0: string): $RoundRobin$Behaviour;
        static UNMODIFIED: $RoundRobin$Behaviour;
        static BY_LABEL: $RoundRobin$Behaviour;
        static BY_BLOCK: $RoundRobin$Behaviour;
    }
    /**
     * Values that may be interpreted as {@link $RoundRobin$Behaviour}.
     */
    export type $RoundRobin$Behaviour_ = "unmodified" | "by_block" | "by_label";
    export class $Program extends $Record implements $Statement {
        replaceOutputStatement(arg0: $OutputStatement, arg1: $OutputStatement): void;
        name(): string;
        tick(arg0: $ManagerBlockEntity): boolean;
        tick(arg0: $ProgramContext): void;
        getStatements(): $List<$Statement>;
        referencedLabels(): $Set<string>;
        astBuilder(): $ASTBuilder;
        referencedResources(): $Set<$ResourceIdentifier<never, never, never>>;
        triggers(): $List<$Trigger>;
        getConditionIndex(arg0: $IfStatement_): number;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static MAX_LABEL_LENGTH: number;
        static PROGRAM_WARNING_TOO_MANY_CONDITIONS: $LocalizationEntry;
        static LOG_LABEL_POSITION_HOLDER_DETAILS_BODY: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_HEADER_3: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_HEADER_2: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_HEADER_1: $LocalizationEntry;
        static LOG_LABEL_POSITION_HOLDER_DETAILS_FOOTER: $LocalizationEntry;
        static LOG_PROGRAM_CONTEXT: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_BODY: $LocalizationEntry;
        static LOG_PROGRAM_TICK_TRIGGER_STATEMENT: $LocalizationEntry;
        static MAX_PROGRAM_LENGTH: number;
        static LOG_PROGRAM_TICK_WITH_REDSTONE_COUNT: $LocalizationEntry;
        static PROGRAM_TICK_TRIGGER_TIME_MS: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_FOOTER: $LocalizationEntry;
        static LOG_PROGRAM_TICK: $LocalizationEntry;
        static LOG_LABEL_POSITION_HOLDER_DETAILS_HEADER: $LocalizationEntry;
        constructor(astBuilder: $ASTBuilder, name: string, triggers: $List_<$Trigger>, referencedLabels: $Set_<string>, referencedResources: $Set_<$ResourceIdentifier<never, never, never>>);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $Program}.
     */
    export type $Program_ = { triggers?: $List_<$Trigger>, astBuilder?: $ASTBuilder, name?: string, referencedLabels?: $Set_<string>, referencedResources?: $Set_<$ResourceIdentifier<never, never, never>>,  } | [triggers?: $List_<$Trigger>, astBuilder?: $ASTBuilder, name?: string, referencedLabels?: $Set_<string>, referencedResources?: $Set_<$ResourceIdentifier<never, never, never>>, ];
    export class $Side extends $Enum<$Side> implements $ASTNode {
        static values(): $Side[];
        static valueOf(arg0: string): $Side;
        resolve(arg0: $BlockState_): $Direction;
        static fromDirection(arg0: $Direction_): $Side;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static NULL: $Side;
        static TOP: $Side;
        static LEFT: $Side;
        static NORTH: $Side;
        static WEST: $Side;
        static RIGHT: $Side;
        static FRONT: $Side;
        static BACK: $Side;
        static BOTTOM: $Side;
        static SOUTH: $Side;
        static EAST: $Side;
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $Side}.
     */
    export type $Side_ = "top" | "bottom" | "north" | "south" | "east" | "west" | "left" | "right" | "front" | "back" | "null";
    export class $ResourceLimits implements $ASTNode, $ToStringPretty {
        toStringCondensed(arg0: $Limit_): string;
        resourceLimitList(): $List<$ResourceLimit>;
        exclusions(): $ResourceIdSet;
        getReferencedResourceTypes(): $ResourceType<never, never, never>[];
        createOutputTrackers(): $List<$IOutputResourceTracker>;
        createInputTrackers(): $List<$IInputResourceTracker>;
        withDefaultLimit(arg0: $Limit_): $ResourceLimits;
        withExclusions(arg0: $ResourceIdSet): $ResourceLimits;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        toStringPretty(): string;
        constructor(arg0: $List_<$ResourceLimit_>, arg1: $ResourceIdSet);
        get referencedResourceTypes(): $ResourceType<never, never, never>[];
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    export class $ResourceQuantity extends $Record implements $ASTNode {
        add(arg0: $ResourceQuantity_): $ResourceQuantity;
        number(): $Number;
        idExpansionBehaviour(): $ResourceQuantity$IdExpansionBehaviour;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static MAX_QUANTITY: $ResourceQuantity;
        static UNSET: $ResourceQuantity;
        constructor(number: $Number_, idExpansionBehaviour: $ResourceQuantity$IdExpansionBehaviour_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceQuantity}.
     */
    export type $ResourceQuantity_ = { idExpansionBehaviour?: $ResourceQuantity$IdExpansionBehaviour_, number?: $Number_,  } | [idExpansionBehaviour?: $ResourceQuantity$IdExpansionBehaviour_, number?: $Number_, ];
    export class $RoundRobin implements $ASTNode {
        next(arg0: number): number;
        isEnabled(): boolean;
        getBehaviour(): $RoundRobin$Behaviour;
        static disabled(): $RoundRobin;
        getPositionsForLabels(arg0: $List_<$Label_>, arg1: $LabelPositionHolder_): $ArrayList<$Pair<$Label, $BlockPos>>;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        constructor(arg0: $RoundRobin$Behaviour_);
        get enabled(): boolean;
        get behaviour(): $RoundRobin$Behaviour;
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    export class $WithDisjunction extends $Record implements $ASTNode, $WithClause, $ToStringPretty {
        left(): $WithClause;
        right(): $WithClause;
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        toStringPretty(): string;
        constructor(left: $WithClause_, right: $WithClause_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $WithDisjunction}.
     */
    export type $WithDisjunction_ = { left?: $WithClause_, right?: $WithClause_,  } | [left?: $WithClause_, right?: $WithClause_, ];
    export class $InputStatement implements $IOStatement {
        gatherSlots(arg0: $ProgramContext, arg1: $Consumer_<$LimitedInputSlot<never, never, never>>): void;
        each(): boolean;
        freeSlots(): void;
        tick(arg0: $ProgramContext): void;
        labelAccess(): $LabelAccess;
        toStringPretty(): string;
        resourceLimits(): $ResourceLimits;
        freeSlotsIf(arg0: $Predicate_<$LimitedInputSlot<never, never, never>>): void;
        transferSlotsTo(arg0: $InputStatement): void;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_CACHE_MISS: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_CACHE_HIT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_INPUT_STATEMENT: $LocalizationEntry;
        constructor(arg0: $LabelAccess_, arg1: $ResourceLimits, arg2: boolean);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    export class $Number extends $Record implements $ASTNode {
        value(): number;
        add(arg0: $Number_): $Number;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        constructor(value: number);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $Number}.
     */
    export type $Number_ = { value?: number,  } | [value?: number, ];
    export class $ToStringPretty {
    }
    export interface $ToStringPretty {
        toStringPretty(): string;
    }
    export class $WithConjunction extends $Record implements $ASTNode, $WithClause, $ToStringPretty {
        left(): $WithClause;
        right(): $WithClause;
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        toStringPretty(): string;
        constructor(left: $WithClause_, right: $WithClause_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $WithConjunction}.
     */
    export type $WithConjunction_ = { left?: $WithClause_, right?: $WithClause_,  } | [left?: $WithClause_, right?: $WithClause_, ];
    export class $ResourceQuantity$IdExpansionBehaviour extends $Enum<$ResourceQuantity$IdExpansionBehaviour> {
        static values(): $ResourceQuantity$IdExpansionBehaviour[];
        static valueOf(arg0: string): $ResourceQuantity$IdExpansionBehaviour;
        static EXPAND: $ResourceQuantity$IdExpansionBehaviour;
        static NO_EXPAND: $ResourceQuantity$IdExpansionBehaviour;
    }
    /**
     * Values that may be interpreted as {@link $ResourceQuantity$IdExpansionBehaviour}.
     */
    export type $ResourceQuantity$IdExpansionBehaviour_ = "expand" | "no_expand";
    export class $With extends $Record implements $WithClause, $ToStringPretty {
        mode(): $With$WithMode;
        condition(): $WithClause;
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        toStringPretty(): string;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static ALWAYS_TRUE: $With;
        constructor(condition: $WithClause_, mode: $With$WithMode_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $With}.
     */
    export type $With_ = { mode?: $With$WithMode_, condition?: $WithClause_,  } | [mode?: $With$WithMode_, condition?: $WithClause_, ];
    export class $Statement {
    }
    export interface $Statement extends $ASTNode {
        tick(arg0: $ProgramContext): void;
    }
    /**
     * Values that may be interpreted as {@link $Statement}.
     */
    export type $Statement_ = ((arg0: $ProgramContext) => void);
    export class $Trigger {
    }
    export interface $Trigger extends $Statement {
        shouldTick(arg0: $ProgramContext): boolean;
        getBlock(): $Block;
        getStatements(): $List<$Statement>;
        getConditionCount(): number;
        getConditionIndex(arg0: $IfStatement_): number;
        get block(): $Block;
        get statements(): $List<$Statement>;
        get conditionCount(): number;
    }
    export class $NumberRangeSet extends $Record implements $ASTNode {
        contains(arg0: number): boolean;
        ranges(): $NumberRange[];
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static MAX_RANGE: $NumberRangeSet;
        constructor(ranges: $NumberRange_[]);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $NumberRangeSet}.
     */
    export type $NumberRangeSet_ = { ranges?: $NumberRange_[],  } | [ranges?: $NumberRange_[], ];
    export class $ASTNode {
    }
    export interface $ASTNode {
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    export class $SetOperator extends $Enum<$SetOperator> implements $ASTNode, $BiPredicate<boolean, $List<boolean>>, $ToStringPretty {
        static values(): $SetOperator[];
        test(arg0: boolean, arg1: $List_<boolean>): boolean;
        static valueOf(arg0: string): $SetOperator;
        static from(arg0: string): $SetOperator;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        or(arg0: $BiPredicate_<boolean, $List<boolean>>): $BiPredicate<boolean, $List<boolean>>;
        negate(): $BiPredicate<boolean, $List<boolean>>;
        and(arg0: $BiPredicate_<boolean, $List<boolean>>): $BiPredicate<boolean, $List<boolean>>;
        toStringPretty(): string;
        static OVERALL: $SetOperator;
        static SOME: $SetOperator;
        static ONE: $SetOperator;
        static LONE: $SetOperator;
        static EVERY: $SetOperator;
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SetOperator}.
     */
    export type $SetOperator_ = "overall" | "some" | "every" | "one" | "lone";
    export class $OutputStatement implements $IOStatement {
        gatherSlots(arg0: $ProgramContext, arg1: $Consumer_<$LimitedOutputSlot<never, never, never>>): void;
        emptySlotsOnly(): boolean;
        each(): boolean;
        tick(arg0: $ProgramContext): void;
        labelAccess(): $LabelAccess;
        toStringPretty(): string;
        resourceLimits(): $ResourceLimits;
        static moveTo<STACK, ITEM, CAP>(arg0: $ProgramContext, arg1: $LimitedInputSlot<STACK, ITEM, CAP>, arg2: $LimitedOutputSlot<STACK, ITEM, CAP>): void;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT_DISCOVERED_INPUT_SLOT_COUNT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_STACK_LIMIT_NEW_TO_MOVE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT_SHORT_CIRCUIT_NO_OUTPUT_SLOTS: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_RETENTION_OBLIGATION: $LocalizationEntry;
        static LOG_PROGRAM_VOIDED_RESOURCES: $LocalizationEntry;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT_DISCOVERED_OUTPUT_SLOT_COUNT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_DESTINATION_TRACKER_REJECT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_EXTRACTED_NOTHING: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_BEGIN: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_END: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_ZERO_TO_MOVE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_TYPE_MISMATCH: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_RETENTION_OBLIGATION_NO_MOVE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_EXTRACTED: $LocalizationEntry;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT_SHORT_CIRCUIT_NO_INPUT_SLOTS: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_ZERO_SIMULATED_MOVEMENT: $LocalizationEntry;
        constructor(arg0: $LabelAccess_, arg1: $ResourceLimits, arg2: boolean, arg3: boolean);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    export class $ComparisonOperator extends $Enum<$ComparisonOperator> implements $ASTNode, $BiPredicate<number, number>, $ToStringPretty {
        static values(): $ComparisonOperator[];
        test(arg0: number, arg1: number): boolean;
        static valueOf(arg0: string): $ComparisonOperator;
        static from(arg0: string): $ComparisonOperator;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        or(arg0: $BiPredicate_<number, number>): $BiPredicate<number, number>;
        negate(): $BiPredicate<number, number>;
        and(arg0: $BiPredicate_<number, number>): $BiPredicate<number, number>;
        toStringPretty(): string;
        static GREATER_OR_EQUAL: $ComparisonOperator;
        static EQUALS: $ComparisonOperator;
        static LESSER: $ComparisonOperator;
        static GREATER: $ComparisonOperator;
        static LESSER_OR_EQUAL: $ComparisonOperator;
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $ComparisonOperator}.
     */
    export type $ComparisonOperator_ = "greater" | "lesser" | "equals" | "lesser_or_equal" | "greater_or_equal";
    export class $ResourceIdentifier<STACK, ITEM, CAP> implements $ASTNode, $ToStringCondensed {
        toStringCondensed(): string;
        expand(): $List<$ResourceIdentifier<STACK, ITEM, CAP>>;
        getLocation(): ($ResourceLocation) | undefined;
        static fromString<STACK, ITEM, CAP>(arg0: string): $ResourceIdentifier<STACK, ITEM, CAP>;
        getResourceType(): $ResourceType<STACK, ITEM, CAP>;
        assertValid(): void;
        matchesStack(arg0: $Object): boolean;
        matchesResourceLocation(arg0: $ResourceLocation_): boolean;
        setResourceTypeCache(arg0: $ResourceType_<STACK, ITEM, CAP>): void;
        usesRegex(): boolean;
        getResourceTypeId(): $ResourceLocation;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static MATCH_ALL: $ResourceIdentifier<never, never, never>;
        resourceTypeNamespace: string;
        resourceNamespace: string;
        resourceName: string;
        resourceTypeName: string;
        constructor(arg0: string);
        constructor(arg0: string, arg1: string);
        constructor(arg0: string, arg1: string, arg2: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
        constructor(arg0: $ResourceKey_<$ResourceType<STACK, ITEM, CAP>>, arg1: $ResourceLocation_);
        constructor(arg0: $ResourceKey_<$ResourceType<STACK, ITEM, CAP>>, arg1: $ResourceKey_<never>);
        get location(): ($ResourceLocation) | undefined;
        get resourceType(): $ResourceType<STACK, ITEM, CAP>;
        set resourceTypeCache(value: $ResourceType_<STACK, ITEM, CAP>);
        get resourceTypeId(): $ResourceLocation;
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    export class $IfStatement extends $Record implements $ASTNode, $Statement, $ToStringCondensed {
        toStringCondensed(): string;
        condition(): $BoolExpr;
        tick(arg0: $ProgramContext): void;
        getStatements(): $List<$Statement>;
        falseBlock(): $Block;
        trueBlock(): $Block;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static LOG_PROGRAM_TICK_IF_STATEMENT_WAS_FALSE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IF_STATEMENT_WAS_TRUE: $LocalizationEntry;
        constructor(condition: $BoolExpr_, trueBlock: $Block_, falseBlock: $Block_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $IfStatement}.
     */
    export type $IfStatement_ = { trueBlock?: $Block_, condition?: $BoolExpr_, falseBlock?: $Block_,  } | [trueBlock?: $Block_, condition?: $BoolExpr_, falseBlock?: $Block_, ];
    export class $ForgetStatement extends $Record implements $Statement {
        tick(arg0: $ProgramContext): void;
        labelToForget(): $Set<$Label>;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static LOG_PROGRAM_TICK_FORGET_STATEMENT: $LocalizationEntry;
        constructor(labelToForget: $Set_<$Label_>);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $ForgetStatement}.
     */
    export type $ForgetStatement_ = { labelToForget?: $Set_<$Label_>,  } | [labelToForget?: $Set_<$Label_>, ];
    export class $NumberRange extends $Record implements $ASTNode {
        end(): number;
        contains(arg0: number): boolean;
        start(): number;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static MAX_RANGE: $NumberRange;
        constructor(start: number, end: number);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $NumberRange}.
     */
    export type $NumberRange_ = { end?: number, start?: number,  } | [end?: number, start?: number, ];
    export class $WithNegation extends $Record implements $ASTNode, $WithClause, $ToStringPretty {
        inner(): $WithClause;
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        toStringPretty(): string;
        constructor(inner: $WithClause_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $WithNegation}.
     */
    export type $WithNegation_ = { inner?: $WithClause_,  } | [inner?: $WithClause_, ];
    export class $TagMatcher implements $Predicate<$Object>, $ASTNode {
        test(arg0: $Object): boolean;
        static fromPath(arg0: $Collection_<string>): $TagMatcher;
        testString(arg0: string): boolean;
        static fromNamespaceAndPath(arg0: string, arg1: $Collection_<string>): $TagMatcher;
        testResourceLocation(arg0: $ResourceLocation_): boolean;
        or(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        negate(): $Predicate<$Object>;
        and(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        namespacePattern: string;
        pathElementPatterns: $List<string>;
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    export class $ResourceLimit extends $Record implements $ASTNode {
        toStringCondensed(arg0: $Limit_): string;
        limit(): $Limit;
        "with"(): $With;
        resourceIds(): $ResourceIdSet;
        withLimit(arg0: $Limit_): $ResourceLimit;
        matchesStack(arg0: $Object): boolean;
        createOutputTracker(arg0: $ResourceIdSet): $IOutputResourceTracker;
        withDefaultLimit(arg0: $Limit_): $ResourceLimit;
        createInputTracker(arg0: $ResourceIdSet): $IInputResourceTracker;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static TAKE_ALL_LEAVE_NONE: $ResourceLimit;
        static ACCEPT_ALL_WITHOUT_RESTRAINT: $ResourceLimit;
        constructor(resourceIds: $ResourceIdSet, limit: $Limit_, arg2: $With_);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLimit}.
     */
    export type $ResourceLimit_ = { limit?: $Limit_, resourceIds?: $ResourceIdSet, with?: $With_,  } | [limit?: $Limit_, resourceIds?: $ResourceIdSet, with?: $With_, ];
    export class $WithClause {
    }
    export interface $WithClause extends $ASTNode, $ToStringPretty {
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WithClause}.
     */
    export type $WithClause_ = ((arg0: $ResourceType<any, never, never>, arg1: any) => boolean);
    export class $LabelAccess extends $Record implements $ASTNode {
        slots(): $NumberRangeSet;
        labels(): $List<$Label>;
        sides(): $SideQualifier;
        roundRobin(): $RoundRobin;
        getLabelledPositions(arg0: $LabelPositionHolder_): $ArrayList<$Pair<$Label, $BlockPos>>;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        constructor(labels: $List_<$Label_>, sides: $SideQualifier_, slots: $NumberRangeSet_, roundRobin: $RoundRobin);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $LabelAccess}.
     */
    export type $LabelAccess_ = { labels?: $List_<$Label_>, roundRobin?: $RoundRobin, slots?: $NumberRangeSet_, sides?: $SideQualifier_,  } | [labels?: $List_<$Label_>, roundRobin?: $RoundRobin, slots?: $NumberRangeSet_, sides?: $SideQualifier_, ];
    export class $WithTag extends $Record implements $ASTNode, $WithClause, $ToStringPretty {
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        tagMatcher(): $TagMatcher;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        toStringPretty(): string;
        constructor(tagMatcher: $TagMatcher);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $WithTag}.
     */
    export type $WithTag_ = { tagMatcher?: $TagMatcher,  } | [tagMatcher?: $TagMatcher, ];
    export class $ResourceIdSet implements $ASTNode {
        toStringCondensed(): string;
        size(): number;
        isEmpty(): boolean;
        stream(): $Stream<$ResourceIdentifier<never, never, never>>;
        couldMatchMoreThanOne(): boolean;
        getReferencedResourceTypes(): $ResourceType<never, never, never>[];
        noneMatchStack(arg0: $Object): boolean;
        anyMatchResourceLocation(arg0: $ResourceLocation_): boolean;
        getMatchingFromStack(arg0: $Object): $ResourceIdentifier<never, never, never>;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static MATCH_ALL: $ResourceIdSet;
        static EMPTY: $ResourceIdSet;
        constructor(arg0: $ResourceIdentifier<never, never, never>[]);
        constructor(arg0: $Collection_<$ResourceIdentifier<never, never, never>>);
        get empty(): boolean;
        get referencedResourceTypes(): $ResourceType<never, never, never>[];
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    export class $StringHolder extends $Record implements $ASTNode {
        value(): string;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        constructor(value: string);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $StringHolder}.
     */
    export type $StringHolder_ = { value?: string,  } | [value?: string, ];
    export class $Label extends $Record implements $ASTNode {
        name(): string;
        static needsQuotes(arg0: string): boolean;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        constructor(name: string);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $Label}.
     */
    export type $Label_ = { name?: string,  } | [name?: string, ];
    export class $SideQualifier extends $Record implements $ASTNode {
        resolve(arg0: $BlockState_): $ArrayList<$Direction>;
        sides(): $List<$Side>;
        getNonNullDirection(arg0: $BlockState_): $Direction;
        getStatements(): $List<$Statement>;
        getDescendantStatements(): $Stream<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        static ALL: $SideQualifier;
        static NULL: $SideQualifier;
        static DEFAULT: $SideQualifier;
        constructor(sides: $List_<$Side_>);
        get statements(): $List<$Statement>;
        get descendantStatements(): $Stream<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SideQualifier}.
     */
    export type $SideQualifier_ = { sides?: $List_<$Side_>,  } | [sides?: $List_<$Side_>, ];
}
