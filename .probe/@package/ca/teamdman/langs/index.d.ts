import { $AbstractParseTreeVisitor, $ParseTree, $ParseTreeVisitor, $TerminalNode } from "@package/org/antlr/v4/runtime/tree";
import { $Token, $RuleContext, $RecognitionException, $ParserRuleContext } from "@package/org/antlr/v4/runtime";
import { $List } from "@package/java/util";

declare module "@package/ca/teamdman/langs" {
    export class $SFMLParser$ResourceLimitContext extends $ParserRuleContext {
        limit(): $SFMLParser$LimitContext;
        "with"(): $SFMLParser$WithContext;
        resourceIdDisjunction(): $SFMLParser$ResourceIdDisjunctionContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$WithDisjunctionContext extends $SFMLParser$WithClauseContext {
        withClause(): $List<$SFMLParser$WithClauseContext>;
        withClause(arg0: number): $SFMLParser$WithClauseContext;
        OR(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$WithClauseContext);
    }
    export class $SFMLParser$SlotqualifierContext extends $ParserRuleContext {
        rangeset(): $SFMLParser$RangesetContext;
        SLOT(): $TerminalNode;
        SLOTS(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$TimerTriggerContext extends $SFMLParser$TriggerContext {
        EVERY(): $TerminalNode;
        block(): $SFMLParser$BlockContext;
        interval(): $SFMLParser$IntervalContext;
        END(): $TerminalNode;
        DO(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$TriggerContext);
    }
    export class $SFMLParser$PulseTriggerContext extends $SFMLParser$TriggerContext {
        REDSTONE(): $TerminalNode;
        EVERY(): $TerminalNode;
        block(): $SFMLParser$BlockContext;
        END(): $TerminalNode;
        PULSE(): $TerminalNode;
        DO(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$TriggerContext);
    }
    export class $SFMLParser$BooleanParenContext extends $SFMLParser$BoolexprContext {
        boolexpr(): $SFMLParser$BoolexprContext;
        RPAREN(): $TerminalNode;
        LPAREN(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$BoolexprContext);
    }
    export class $SFMLParser$RetentionLimitContext extends $SFMLParser$LimitContext {
        retention(): $SFMLParser$RetentionContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$LimitContext);
    }
    export class $SFMLParser$EachSideContext extends $SFMLParser$SidequalifierContext {
        EACH(): $TerminalNode;
        SIDE(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$SidequalifierContext);
    }
    export class $SFMLBaseVisitor<T> extends $AbstractParseTreeVisitor<T> implements $SFMLVisitor<T> {
        visitStatement(arg0: $SFMLParser$StatementContext): T;
        visitRange(arg0: $SFMLParser$RangeContext): T;
        visitBlock(arg0: $SFMLParser$BlockContext): T;
        visitString(arg0: $SFMLParser$StringContext): T;
        visitName(arg0: $SFMLParser$NameContext): T;
        visitWith(arg0: $SFMLParser$WithContext): T;
        visitSide(arg0: $SFMLParser$SideContext): T;
        visitSetOp(arg0: $SFMLParser$SetOpContext): T;
        visitQuantityRetentionLimit(arg0: $SFMLParser$QuantityRetentionLimitContext): T;
        visitProgram(arg0: $SFMLParser$ProgramContext): T;
        visitNumber(arg0: $SFMLParser$NumberContext): T;
        visitBooleanDisjunction(arg0: $SFMLParser$BooleanDisjunctionContext): T;
        visitBooleanConjunction(arg0: $SFMLParser$BooleanConjunctionContext): T;
        visitOutputStatement(arg0: $SFMLParser$OutputStatementContext): T;
        visitWithDisjunction(arg0: $SFMLParser$WithDisjunctionContext): T;
        visitInputStatement(arg0: $SFMLParser$InputStatementContext): T;
        visitOutputResourceLimits(arg0: $SFMLParser$OutputResourceLimitsContext): T;
        visitResourceIdDisjunction(arg0: $SFMLParser$ResourceIdDisjunctionContext): T;
        visitWithConjunction(arg0: $SFMLParser$WithConjunctionContext): T;
        visitStringResource(arg0: $SFMLParser$StringResourceContext): T;
        visitBooleanRedstone(arg0: $SFMLParser$BooleanRedstoneContext): T;
        visitIntervalNoSpace(arg0: $SFMLParser$IntervalNoSpaceContext): T;
        visitRetentionLimit(arg0: $SFMLParser$RetentionLimitContext): T;
        visitBooleanNegation(arg0: $SFMLParser$BooleanNegationContext): T;
        visitResourceExclusion(arg0: $SFMLParser$ResourceExclusionContext): T;
        visitResourceIdList(arg0: $SFMLParser$ResourceIdListContext): T;
        visitForgetStatement(arg0: $SFMLParser$ForgetStatementContext): T;
        visitInputResourceLimits(arg0: $SFMLParser$InputResourceLimitsContext): T;
        visitResourceLimitList(arg0: $SFMLParser$ResourceLimitListContext): T;
        visitRawLabel(arg0: $SFMLParser$RawLabelContext): T;
        visitTimerTrigger(arg0: $SFMLParser$TimerTriggerContext): T;
        visitQuantityLimit(arg0: $SFMLParser$QuantityLimitContext): T;
        visitEmptyslots(arg0: $SFMLParser$EmptyslotsContext): T;
        visitResourceLimit(arg0: $SFMLParser$ResourceLimitContext): T;
        visitWithNegation(arg0: $SFMLParser$WithNegationContext): T;
        visitIfStatement(arg0: $SFMLParser$IfStatementContext): T;
        visitBooleanFalse(arg0: $SFMLParser$BooleanFalseContext): T;
        visitWithParen(arg0: $SFMLParser$WithParenContext): T;
        visitRetention(arg0: $SFMLParser$RetentionContext): T;
        visitLabelAccess(arg0: $SFMLParser$LabelAccessContext): T;
        visitComparisonOp(arg0: $SFMLParser$ComparisonOpContext): T;
        visitWithTag(arg0: $SFMLParser$WithTagContext): T;
        visitQuantity(arg0: $SFMLParser$QuantityContext): T;
        visitPulseTrigger(arg0: $SFMLParser$PulseTriggerContext): T;
        visitBooleanParen(arg0: $SFMLParser$BooleanParenContext): T;
        visitBooleanTrue(arg0: $SFMLParser$BooleanTrueContext): T;
        visitEachSide(arg0: $SFMLParser$EachSideContext): T;
        visitIntervalSpace(arg0: $SFMLParser$IntervalSpaceContext): T;
        visitStringLabel(arg0: $SFMLParser$StringLabelContext): T;
        visitSlotqualifier(arg0: $SFMLParser$SlotqualifierContext): T;
        visitResource(arg0: $SFMLParser$ResourceContext): T;
        visitRangeset(arg0: $SFMLParser$RangesetContext): T;
        visitBooleanHas(arg0: $SFMLParser$BooleanHasContext): T;
        visitRoundrobin(arg0: $SFMLParser$RoundrobinContext): T;
        visitListedSides(arg0: $SFMLParser$ListedSidesContext): T;
        visitIdentifier(arg0: $SFMLParser$IdentifierContext): T;
        visitTagMatcher(arg0: $SFMLParser$TagMatcherContext): T;
        constructor();
    }
    export class $SFMLParser$TagMatcherContext extends $ParserRuleContext {
        SLASH(): $List<$TerminalNode>;
        SLASH(arg0: number): $TerminalNode;
        identifier(): $List<$SFMLParser$IdentifierContext>;
        identifier(arg0: number): $SFMLParser$IdentifierContext;
        COLON(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$RawLabelContext extends $SFMLParser$LabelContext {
        identifier(): $SFMLParser$IdentifierContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$LabelContext);
    }
    export class $SFMLParser$ResourceIdListContext extends $ParserRuleContext {
        COMMA(): $List<$TerminalNode>;
        COMMA(arg0: number): $TerminalNode;
        resourceId(): $List<$SFMLParser$ResourceIdContext>;
        resourceId(arg0: number): $SFMLParser$ResourceIdContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$StringResourceContext extends $SFMLParser$ResourceIdContext {
        string(): $SFMLParser$StringContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$ResourceIdContext);
    }
    export class $SFMLParser$BooleanFalseContext extends $SFMLParser$BoolexprContext {
        FALSE(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$BoolexprContext);
    }
    export class $SFMLParser$WithClauseContext extends $ParserRuleContext {
        copyFrom(arg0: $SFMLParser$WithClauseContext): void;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$ResourceExclusionContext extends $ParserRuleContext {
        EXCEPT(): $TerminalNode;
        resourceIdList(): $SFMLParser$ResourceIdListContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$ResourceLimitListContext extends $ParserRuleContext {
        COMMA(): $List<$TerminalNode>;
        COMMA(arg0: number): $TerminalNode;
        resourceLimit(): $List<$SFMLParser$ResourceLimitContext>;
        resourceLimit(arg0: number): $SFMLParser$ResourceLimitContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$QuantityLimitContext extends $SFMLParser$LimitContext {
        quantity(): $SFMLParser$QuantityContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$LimitContext);
    }
    export class $SFMLParser$RetentionContext extends $ParserRuleContext {
        EACH(): $TerminalNode;
        number(): $SFMLParser$NumberContext;
        RETAIN(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$ListedSidesContext extends $SFMLParser$SidequalifierContext {
        COMMA(): $List<$TerminalNode>;
        COMMA(arg0: number): $TerminalNode;
        side(): $List<$SFMLParser$SideContext>;
        side(arg0: number): $SFMLParser$SideContext;
        SIDE(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$SidequalifierContext);
    }
    export class $SFMLParser$StringLabelContext extends $SFMLParser$LabelContext {
        string(): $SFMLParser$StringContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$LabelContext);
    }
    export class $SFMLVisitor<T> {
    }
    export interface $SFMLVisitor<T> extends $ParseTreeVisitor<T> {
        visitStatement(arg0: $SFMLParser$StatementContext): T;
        visitRange(arg0: $SFMLParser$RangeContext): T;
        visitBlock(arg0: $SFMLParser$BlockContext): T;
        visitString(arg0: $SFMLParser$StringContext): T;
        visitName(arg0: $SFMLParser$NameContext): T;
        visitWith(arg0: $SFMLParser$WithContext): T;
        visitSide(arg0: $SFMLParser$SideContext): T;
        visitSetOp(arg0: $SFMLParser$SetOpContext): T;
        visitQuantityRetentionLimit(arg0: $SFMLParser$QuantityRetentionLimitContext): T;
        visitProgram(arg0: $SFMLParser$ProgramContext): T;
        visitNumber(arg0: $SFMLParser$NumberContext): T;
        visitBooleanDisjunction(arg0: $SFMLParser$BooleanDisjunctionContext): T;
        visitBooleanConjunction(arg0: $SFMLParser$BooleanConjunctionContext): T;
        visitOutputStatement(arg0: $SFMLParser$OutputStatementContext): T;
        visitWithDisjunction(arg0: $SFMLParser$WithDisjunctionContext): T;
        visitInputStatement(arg0: $SFMLParser$InputStatementContext): T;
        visitOutputResourceLimits(arg0: $SFMLParser$OutputResourceLimitsContext): T;
        visitResourceIdDisjunction(arg0: $SFMLParser$ResourceIdDisjunctionContext): T;
        visitWithConjunction(arg0: $SFMLParser$WithConjunctionContext): T;
        visitStringResource(arg0: $SFMLParser$StringResourceContext): T;
        visitBooleanRedstone(arg0: $SFMLParser$BooleanRedstoneContext): T;
        visitIntervalNoSpace(arg0: $SFMLParser$IntervalNoSpaceContext): T;
        visitRetentionLimit(arg0: $SFMLParser$RetentionLimitContext): T;
        visitBooleanNegation(arg0: $SFMLParser$BooleanNegationContext): T;
        visitResourceExclusion(arg0: $SFMLParser$ResourceExclusionContext): T;
        visitResourceIdList(arg0: $SFMLParser$ResourceIdListContext): T;
        visitForgetStatement(arg0: $SFMLParser$ForgetStatementContext): T;
        visitInputResourceLimits(arg0: $SFMLParser$InputResourceLimitsContext): T;
        visitResourceLimitList(arg0: $SFMLParser$ResourceLimitListContext): T;
        visitRawLabel(arg0: $SFMLParser$RawLabelContext): T;
        visitTimerTrigger(arg0: $SFMLParser$TimerTriggerContext): T;
        visitQuantityLimit(arg0: $SFMLParser$QuantityLimitContext): T;
        visitEmptyslots(arg0: $SFMLParser$EmptyslotsContext): T;
        visitResourceLimit(arg0: $SFMLParser$ResourceLimitContext): T;
        visitWithNegation(arg0: $SFMLParser$WithNegationContext): T;
        visitIfStatement(arg0: $SFMLParser$IfStatementContext): T;
        visitBooleanFalse(arg0: $SFMLParser$BooleanFalseContext): T;
        visitWithParen(arg0: $SFMLParser$WithParenContext): T;
        visitRetention(arg0: $SFMLParser$RetentionContext): T;
        visitLabelAccess(arg0: $SFMLParser$LabelAccessContext): T;
        visitComparisonOp(arg0: $SFMLParser$ComparisonOpContext): T;
        visitWithTag(arg0: $SFMLParser$WithTagContext): T;
        visitQuantity(arg0: $SFMLParser$QuantityContext): T;
        visitPulseTrigger(arg0: $SFMLParser$PulseTriggerContext): T;
        visitBooleanParen(arg0: $SFMLParser$BooleanParenContext): T;
        visitBooleanTrue(arg0: $SFMLParser$BooleanTrueContext): T;
        visitEachSide(arg0: $SFMLParser$EachSideContext): T;
        visitIntervalSpace(arg0: $SFMLParser$IntervalSpaceContext): T;
        visitStringLabel(arg0: $SFMLParser$StringLabelContext): T;
        visitSlotqualifier(arg0: $SFMLParser$SlotqualifierContext): T;
        visitResource(arg0: $SFMLParser$ResourceContext): T;
        visitRangeset(arg0: $SFMLParser$RangesetContext): T;
        visitBooleanHas(arg0: $SFMLParser$BooleanHasContext): T;
        visitRoundrobin(arg0: $SFMLParser$RoundrobinContext): T;
        visitListedSides(arg0: $SFMLParser$ListedSidesContext): T;
        visitIdentifier(arg0: $SFMLParser$IdentifierContext): T;
        visitTagMatcher(arg0: $SFMLParser$TagMatcherContext): T;
    }
    export class $SFMLParser$ProgramContext extends $ParserRuleContext {
        name(): $SFMLParser$NameContext;
        trigger(arg0: number): $SFMLParser$TriggerContext;
        trigger(): $List<$SFMLParser$TriggerContext>;
        EOF(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$IdentifierContext extends $ParserRuleContext {
        REDSTONE(): $TerminalNode;
        SECONDS(): $TerminalNode;
        TOP(): $TerminalNode;
        SECOND(): $TerminalNode;
        GLOBAL(): $TerminalNode;
        RIGHT(): $TerminalNode;
        IDENTIFIER(): $TerminalNode;
        BOTTOM(): $TerminalNode;
        LEFT(): $TerminalNode;
        FRONT(): $TerminalNode;
        BACK(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$RangeContext extends $ParserRuleContext {
        DASH(): $TerminalNode;
        number(): $List<$SFMLParser$NumberContext>;
        number(arg0: number): $SFMLParser$NumberContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$RangesetContext extends $ParserRuleContext {
        range(): $List<$SFMLParser$RangeContext>;
        range(arg0: number): $SFMLParser$RangeContext;
        COMMA(): $List<$TerminalNode>;
        COMMA(arg0: number): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$BooleanDisjunctionContext extends $SFMLParser$BoolexprContext {
        boolexpr(): $List<$SFMLParser$BoolexprContext>;
        boolexpr(arg0: number): $SFMLParser$BoolexprContext;
        OR(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$BoolexprContext);
    }
    export class $SFMLParser$WithParenContext extends $SFMLParser$WithClauseContext {
        withClause(): $SFMLParser$WithClauseContext;
        RPAREN(): $TerminalNode;
        LPAREN(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$WithClauseContext);
    }
    export class $SFMLParser$StatementContext extends $ParserRuleContext {
        outputStatement(): $SFMLParser$OutputStatementContext;
        ifStatement(): $SFMLParser$IfStatementContext;
        inputStatement(): $SFMLParser$InputStatementContext;
        forgetStatement(): $SFMLParser$ForgetStatementContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$BoolexprContext extends $ParserRuleContext {
        copyFrom(arg0: $SFMLParser$BoolexprContext): void;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$InputResourceLimitsContext extends $ParserRuleContext {
        resourceLimitList(): $SFMLParser$ResourceLimitListContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$LimitContext extends $ParserRuleContext {
        copyFrom(arg0: $SFMLParser$LimitContext): void;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$IfStatementContext extends $ParserRuleContext {
        THEN(arg0: number): $TerminalNode;
        THEN(): $List<$TerminalNode>;
        boolexpr(): $List<$SFMLParser$BoolexprContext>;
        boolexpr(arg0: number): $SFMLParser$BoolexprContext;
        block(arg0: number): $SFMLParser$BlockContext;
        block(): $List<$SFMLParser$BlockContext>;
        END(): $TerminalNode;
        ELSE(): $List<$TerminalNode>;
        ELSE(arg0: number): $TerminalNode;
        IF(arg0: number): $TerminalNode;
        IF(): $List<$TerminalNode>;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$ForgetStatementContext extends $ParserRuleContext {
        FORGET(): $TerminalNode;
        label(arg0: number): $SFMLParser$LabelContext;
        label(): $List<$SFMLParser$LabelContext>;
        COMMA(arg0: number): $TerminalNode;
        COMMA(): $List<$TerminalNode>;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$IntervalNoSpaceContext extends $SFMLParser$IntervalContext {
        TICK(): $TerminalNode;
        TICKS(): $TerminalNode;
        SECONDS(): $TerminalNode;
        PLUS(): $TerminalNode;
        SECOND(): $TerminalNode;
        NUMBER(): $TerminalNode;
        NUMBER_WITH_G_SUFFIX(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$IntervalContext);
    }
    export class $SFMLParser$TriggerContext extends $ParserRuleContext {
        copyFrom(arg0: $SFMLParser$TriggerContext): void;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$ResourceIdContext extends $ParserRuleContext {
        copyFrom(arg0: $SFMLParser$ResourceIdContext): void;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$BooleanTrueContext extends $SFMLParser$BoolexprContext {
        TRUE(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$BoolexprContext);
    }
    export class $SFMLParser$WithConjunctionContext extends $SFMLParser$WithClauseContext {
        withClause(): $List<$SFMLParser$WithClauseContext>;
        withClause(arg0: number): $SFMLParser$WithClauseContext;
        AND(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$WithClauseContext);
    }
    export class $SFMLParser$RoundrobinContext extends $ParserRuleContext {
        BLOCK(): $TerminalNode;
        ROBIN(): $TerminalNode;
        LABEL(): $TerminalNode;
        BY(): $TerminalNode;
        ROUND(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$BlockContext extends $ParserRuleContext {
        statement(): $List<$SFMLParser$StatementContext>;
        statement(arg0: number): $SFMLParser$StatementContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$OutputResourceLimitsContext extends $ParserRuleContext {
        resourceLimitList(): $SFMLParser$ResourceLimitListContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$WithNegationContext extends $SFMLParser$WithClauseContext {
        withClause(): $SFMLParser$WithClauseContext;
        NOT(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$WithClauseContext);
    }
    export class $SFMLParser$BooleanConjunctionContext extends $SFMLParser$BoolexprContext {
        boolexpr(): $List<$SFMLParser$BoolexprContext>;
        boolexpr(arg0: number): $SFMLParser$BoolexprContext;
        AND(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$BoolexprContext);
    }
    export class $SFMLParser$WithTagContext extends $SFMLParser$WithClauseContext {
        TAG(): $TerminalNode;
        tagMatcher(): $SFMLParser$TagMatcherContext;
        HASHTAG(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$WithClauseContext);
    }
    export class $SFMLParser$BooleanRedstoneContext extends $SFMLParser$BoolexprContext {
        REDSTONE(): $TerminalNode;
        number(): $SFMLParser$NumberContext;
        comparisonOp(): $SFMLParser$ComparisonOpContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$BoolexprContext);
    }
    export class $SFMLParser$BooleanNegationContext extends $SFMLParser$BoolexprContext {
        boolexpr(): $SFMLParser$BoolexprContext;
        NOT(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$BoolexprContext);
    }
    export class $SFMLParser$LabelAccessContext extends $ParserRuleContext {
        roundrobin(): $SFMLParser$RoundrobinContext;
        label(): $List<$SFMLParser$LabelContext>;
        label(arg0: number): $SFMLParser$LabelContext;
        COMMA(arg0: number): $TerminalNode;
        COMMA(): $List<$TerminalNode>;
        sidequalifier(): $SFMLParser$SidequalifierContext;
        slotqualifier(): $SFMLParser$SlotqualifierContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$ComparisonOpContext extends $ParserRuleContext {
        EQ(): $TerminalNode;
        LT(): $TerminalNode;
        GT(): $TerminalNode;
        LE(): $TerminalNode;
        GE(): $TerminalNode;
        GT_SYMBOL(): $TerminalNode;
        LT_SYMBOL(): $TerminalNode;
        LE_SYMBOL(): $TerminalNode;
        GE_SYMBOL(): $TerminalNode;
        EQ_SYMBOL(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$IntervalContext extends $ParserRuleContext {
        copyFrom(arg0: $SFMLParser$IntervalContext): void;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$InputStatementContext extends $ParserRuleContext {
        FROM(): $TerminalNode;
        EACH(): $TerminalNode;
        INPUT(): $TerminalNode;
        labelAccess(): $SFMLParser$LabelAccessContext;
        inputResourceLimits(): $SFMLParser$InputResourceLimitsContext;
        resourceExclusion(): $SFMLParser$ResourceExclusionContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$SideContext extends $ParserRuleContext {
        NORTH(): $TerminalNode;
        SOUTH(): $TerminalNode;
        NULL(): $TerminalNode;
        TOP(): $TerminalNode;
        RIGHT(): $TerminalNode;
        EAST(): $TerminalNode;
        WEST(): $TerminalNode;
        BOTTOM(): $TerminalNode;
        LEFT(): $TerminalNode;
        FRONT(): $TerminalNode;
        BACK(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$BooleanHasContext extends $SFMLParser$BoolexprContext {
        HAS(): $TerminalNode;
        EXCEPT(): $TerminalNode;
        setOp(): $SFMLParser$SetOpContext;
        "with"(): $SFMLParser$WithContext;
        number(): $SFMLParser$NumberContext;
        labelAccess(): $SFMLParser$LabelAccessContext;
        resourceIdDisjunction(): $SFMLParser$ResourceIdDisjunctionContext;
        comparisonOp(): $SFMLParser$ComparisonOpContext;
        resourceIdList(): $SFMLParser$ResourceIdListContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$BoolexprContext);
    }
    export class $SFMLParser$IntervalSpaceContext extends $SFMLParser$IntervalContext {
        TICK(): $TerminalNode;
        TICKS(): $TerminalNode;
        SECONDS(): $TerminalNode;
        PLUS(): $TerminalNode;
        SECOND(): $TerminalNode;
        GLOBAL(): $TerminalNode;
        NUMBER(): $List<$TerminalNode>;
        NUMBER(arg0: number): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$IntervalContext);
    }
    export class $SFMLParser$SetOpContext extends $ParserRuleContext {
        EACH(): $TerminalNode;
        SOME(): $TerminalNode;
        EVERY(): $TerminalNode;
        ONE(): $TerminalNode;
        OVERALL(): $TerminalNode;
        LONE(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$EmptyslotsContext extends $ParserRuleContext {
        EMPTY(): $TerminalNode;
        SLOT(): $TerminalNode;
        IN(): $TerminalNode;
        SLOTS(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$SidequalifierContext extends $ParserRuleContext {
        copyFrom(arg0: $SFMLParser$SidequalifierContext): void;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$QuantityRetentionLimitContext extends $SFMLParser$LimitContext {
        retention(): $SFMLParser$RetentionContext;
        quantity(): $SFMLParser$QuantityContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$LimitContext);
    }
    export class $SFMLParser$ResourceContext extends $SFMLParser$ResourceIdContext {
        identifier(): $List<$SFMLParser$IdentifierContext>;
        identifier(arg0: number): $SFMLParser$IdentifierContext;
        COLON(arg0: number): $TerminalNode;
        COLON(): $List<$TerminalNode>;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $SFMLParser$ResourceIdContext);
    }
    export class $SFMLParser$ResourceIdDisjunctionContext extends $ParserRuleContext {
        resourceId(): $List<$SFMLParser$ResourceIdContext>;
        resourceId(arg0: number): $SFMLParser$ResourceIdContext;
        OR(arg0: number): $TerminalNode;
        OR(): $List<$TerminalNode>;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$OutputStatementContext extends $ParserRuleContext {
        OUTPUT(): $TerminalNode;
        TO(): $TerminalNode;
        EACH(): $TerminalNode;
        emptyslots(): $SFMLParser$EmptyslotsContext;
        labelAccess(): $SFMLParser$LabelAccessContext;
        outputResourceLimits(): $SFMLParser$OutputResourceLimitsContext;
        resourceExclusion(): $SFMLParser$ResourceExclusionContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$WithContext extends $ParserRuleContext {
        withClause(): $SFMLParser$WithClauseContext;
        WITHOUT(): $TerminalNode;
        WITH(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$NameContext extends $ParserRuleContext {
        string(): $SFMLParser$StringContext;
        NAME(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$StringContext extends $ParserRuleContext {
        STRING(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$LabelContext extends $ParserRuleContext {
        copyFrom(arg0: $SFMLParser$LabelContext): void;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$NumberContext extends $ParserRuleContext {
        NUMBER(): $TerminalNode;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $SFMLParser$QuantityContext extends $ParserRuleContext {
        EACH(): $TerminalNode;
        number(): $SFMLParser$NumberContext;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
}
