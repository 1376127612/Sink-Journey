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
        OR(): $TerminalNode;
        withClause(arg0: number): $SFMLParser$WithClauseContext;
        withClause(): $List<$SFMLParser$WithClauseContext>;
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
        SLOT(): $TerminalNode;
        SLOTS(): $TerminalNode;
        rangeset(): $SFMLParser$RangesetContext;
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
        block(): $SFMLParser$BlockContext;
        interval(): $SFMLParser$IntervalContext;
        END(): $TerminalNode;
        DO(): $TerminalNode;
        EVERY(): $TerminalNode;
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
        block(): $SFMLParser$BlockContext;
        END(): $TerminalNode;
        DO(): $TerminalNode;
        PULSE(): $TerminalNode;
        REDSTONE(): $TerminalNode;
        EVERY(): $TerminalNode;
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
        LPAREN(): $TerminalNode;
        RPAREN(): $TerminalNode;
        boolexpr(): $SFMLParser$BoolexprContext;
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
        SIDE(): $TerminalNode;
        EACH(): $TerminalNode;
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
        visitString(arg0: $SFMLParser$StringContext): T;
        visitStatement(arg0: $SFMLParser$StatementContext): T;
        visitProgram(arg0: $SFMLParser$ProgramContext): T;
        visitStringLabel(arg0: $SFMLParser$StringLabelContext): T;
        visitQuantity(arg0: $SFMLParser$QuantityContext): T;
        visitSlotqualifier(arg0: $SFMLParser$SlotqualifierContext): T;
        visitIntervalSpace(arg0: $SFMLParser$IntervalSpaceContext): T;
        visitRangeset(arg0: $SFMLParser$RangesetContext): T;
        visitWithParen(arg0: $SFMLParser$WithParenContext): T;
        visitWithTag(arg0: $SFMLParser$WithTagContext): T;
        visitBooleanTrue(arg0: $SFMLParser$BooleanTrueContext): T;
        visitRetention(arg0: $SFMLParser$RetentionContext): T;
        visitEachSide(arg0: $SFMLParser$EachSideContext): T;
        visitBooleanHas(arg0: $SFMLParser$BooleanHasContext): T;
        visitWithNegation(arg0: $SFMLParser$WithNegationContext): T;
        visitResourceLimit(arg0: $SFMLParser$ResourceLimitContext): T;
        visitBooleanParen(arg0: $SFMLParser$BooleanParenContext): T;
        visitTimerTrigger(arg0: $SFMLParser$TimerTriggerContext): T;
        visitTagMatcher(arg0: $SFMLParser$TagMatcherContext): T;
        visitIdentifier(arg0: $SFMLParser$IdentifierContext): T;
        visitLabelAccess(arg0: $SFMLParser$LabelAccessContext): T;
        visitRoundrobin(arg0: $SFMLParser$RoundrobinContext): T;
        visitResource(arg0: $SFMLParser$ResourceContext): T;
        visitEmptyslots(arg0: $SFMLParser$EmptyslotsContext): T;
        visitIfStatement(arg0: $SFMLParser$IfStatementContext): T;
        visitComparisonOp(arg0: $SFMLParser$ComparisonOpContext): T;
        visitPulseTrigger(arg0: $SFMLParser$PulseTriggerContext): T;
        visitBooleanFalse(arg0: $SFMLParser$BooleanFalseContext): T;
        visitQuantityLimit(arg0: $SFMLParser$QuantityLimitContext): T;
        visitListedSides(arg0: $SFMLParser$ListedSidesContext): T;
        visitRawLabel(arg0: $SFMLParser$RawLabelContext): T;
        visitSetOp(arg0: $SFMLParser$SetOpContext): T;
        visitWith(arg0: $SFMLParser$WithContext): T;
        visitName(arg0: $SFMLParser$NameContext): T;
        visitRange(arg0: $SFMLParser$RangeContext): T;
        visitSide(arg0: $SFMLParser$SideContext): T;
        visitBlock(arg0: $SFMLParser$BlockContext): T;
        visitNumber(arg0: $SFMLParser$NumberContext): T;
        visitQuantityRetentionLimit(arg0: $SFMLParser$QuantityRetentionLimitContext): T;
        visitWithDisjunction(arg0: $SFMLParser$WithDisjunctionContext): T;
        visitWithConjunction(arg0: $SFMLParser$WithConjunctionContext): T;
        visitOutputStatement(arg0: $SFMLParser$OutputStatementContext): T;
        visitRetentionLimit(arg0: $SFMLParser$RetentionLimitContext): T;
        visitBooleanConjunction(arg0: $SFMLParser$BooleanConjunctionContext): T;
        visitResourceExclusion(arg0: $SFMLParser$ResourceExclusionContext): T;
        visitBooleanDisjunction(arg0: $SFMLParser$BooleanDisjunctionContext): T;
        visitResourceIdList(arg0: $SFMLParser$ResourceIdListContext): T;
        visitStringResource(arg0: $SFMLParser$StringResourceContext): T;
        visitForgetStatement(arg0: $SFMLParser$ForgetStatementContext): T;
        visitOutputResourceLimits(arg0: $SFMLParser$OutputResourceLimitsContext): T;
        visitBooleanRedstone(arg0: $SFMLParser$BooleanRedstoneContext): T;
        visitResourceLimitList(arg0: $SFMLParser$ResourceLimitListContext): T;
        visitBooleanNegation(arg0: $SFMLParser$BooleanNegationContext): T;
        visitInputStatement(arg0: $SFMLParser$InputStatementContext): T;
        visitResourceIdDisjunction(arg0: $SFMLParser$ResourceIdDisjunctionContext): T;
        visitIntervalNoSpace(arg0: $SFMLParser$IntervalNoSpaceContext): T;
        visitInputResourceLimits(arg0: $SFMLParser$InputResourceLimitsContext): T;
        constructor();
    }
    export class $SFMLParser$TagMatcherContext extends $ParserRuleContext {
        identifier(): $List<$SFMLParser$IdentifierContext>;
        identifier(arg0: number): $SFMLParser$IdentifierContext;
        COLON(): $TerminalNode;
        SLASH(): $List<$TerminalNode>;
        SLASH(arg0: number): $TerminalNode;
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
        resourceId(arg0: number): $SFMLParser$ResourceIdContext;
        resourceId(): $List<$SFMLParser$ResourceIdContext>;
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
        resourceIdList(): $SFMLParser$ResourceIdListContext;
        EXCEPT(): $TerminalNode;
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
        resourceLimit(arg0: number): $SFMLParser$ResourceLimitContext;
        resourceLimit(): $List<$SFMLParser$ResourceLimitContext>;
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
        number(): $SFMLParser$NumberContext;
        RETAIN(): $TerminalNode;
        EACH(): $TerminalNode;
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
        side(): $List<$SFMLParser$SideContext>;
        side(arg0: number): $SFMLParser$SideContext;
        SIDE(): $TerminalNode;
        COMMA(arg0: number): $TerminalNode;
        COMMA(): $List<$TerminalNode>;
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
        visitString(arg0: $SFMLParser$StringContext): T;
        visitStatement(arg0: $SFMLParser$StatementContext): T;
        visitProgram(arg0: $SFMLParser$ProgramContext): T;
        visitStringLabel(arg0: $SFMLParser$StringLabelContext): T;
        visitQuantity(arg0: $SFMLParser$QuantityContext): T;
        visitSlotqualifier(arg0: $SFMLParser$SlotqualifierContext): T;
        visitIntervalSpace(arg0: $SFMLParser$IntervalSpaceContext): T;
        visitRangeset(arg0: $SFMLParser$RangesetContext): T;
        visitWithParen(arg0: $SFMLParser$WithParenContext): T;
        visitWithTag(arg0: $SFMLParser$WithTagContext): T;
        visitBooleanTrue(arg0: $SFMLParser$BooleanTrueContext): T;
        visitRetention(arg0: $SFMLParser$RetentionContext): T;
        visitEachSide(arg0: $SFMLParser$EachSideContext): T;
        visitBooleanHas(arg0: $SFMLParser$BooleanHasContext): T;
        visitWithNegation(arg0: $SFMLParser$WithNegationContext): T;
        visitResourceLimit(arg0: $SFMLParser$ResourceLimitContext): T;
        visitBooleanParen(arg0: $SFMLParser$BooleanParenContext): T;
        visitTimerTrigger(arg0: $SFMLParser$TimerTriggerContext): T;
        visitTagMatcher(arg0: $SFMLParser$TagMatcherContext): T;
        visitIdentifier(arg0: $SFMLParser$IdentifierContext): T;
        visitLabelAccess(arg0: $SFMLParser$LabelAccessContext): T;
        visitRoundrobin(arg0: $SFMLParser$RoundrobinContext): T;
        visitResource(arg0: $SFMLParser$ResourceContext): T;
        visitEmptyslots(arg0: $SFMLParser$EmptyslotsContext): T;
        visitIfStatement(arg0: $SFMLParser$IfStatementContext): T;
        visitComparisonOp(arg0: $SFMLParser$ComparisonOpContext): T;
        visitPulseTrigger(arg0: $SFMLParser$PulseTriggerContext): T;
        visitBooleanFalse(arg0: $SFMLParser$BooleanFalseContext): T;
        visitQuantityLimit(arg0: $SFMLParser$QuantityLimitContext): T;
        visitListedSides(arg0: $SFMLParser$ListedSidesContext): T;
        visitRawLabel(arg0: $SFMLParser$RawLabelContext): T;
        visitSetOp(arg0: $SFMLParser$SetOpContext): T;
        visitWith(arg0: $SFMLParser$WithContext): T;
        visitName(arg0: $SFMLParser$NameContext): T;
        visitRange(arg0: $SFMLParser$RangeContext): T;
        visitSide(arg0: $SFMLParser$SideContext): T;
        visitBlock(arg0: $SFMLParser$BlockContext): T;
        visitNumber(arg0: $SFMLParser$NumberContext): T;
        visitQuantityRetentionLimit(arg0: $SFMLParser$QuantityRetentionLimitContext): T;
        visitWithDisjunction(arg0: $SFMLParser$WithDisjunctionContext): T;
        visitWithConjunction(arg0: $SFMLParser$WithConjunctionContext): T;
        visitOutputStatement(arg0: $SFMLParser$OutputStatementContext): T;
        visitRetentionLimit(arg0: $SFMLParser$RetentionLimitContext): T;
        visitBooleanConjunction(arg0: $SFMLParser$BooleanConjunctionContext): T;
        visitResourceExclusion(arg0: $SFMLParser$ResourceExclusionContext): T;
        visitBooleanDisjunction(arg0: $SFMLParser$BooleanDisjunctionContext): T;
        visitResourceIdList(arg0: $SFMLParser$ResourceIdListContext): T;
        visitStringResource(arg0: $SFMLParser$StringResourceContext): T;
        visitForgetStatement(arg0: $SFMLParser$ForgetStatementContext): T;
        visitOutputResourceLimits(arg0: $SFMLParser$OutputResourceLimitsContext): T;
        visitBooleanRedstone(arg0: $SFMLParser$BooleanRedstoneContext): T;
        visitResourceLimitList(arg0: $SFMLParser$ResourceLimitListContext): T;
        visitBooleanNegation(arg0: $SFMLParser$BooleanNegationContext): T;
        visitInputStatement(arg0: $SFMLParser$InputStatementContext): T;
        visitResourceIdDisjunction(arg0: $SFMLParser$ResourceIdDisjunctionContext): T;
        visitIntervalNoSpace(arg0: $SFMLParser$IntervalNoSpaceContext): T;
        visitInputResourceLimits(arg0: $SFMLParser$InputResourceLimitsContext): T;
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
        SECONDS(): $TerminalNode;
        TOP(): $TerminalNode;
        GLOBAL(): $TerminalNode;
        LEFT(): $TerminalNode;
        SECOND(): $TerminalNode;
        RIGHT(): $TerminalNode;
        BACK(): $TerminalNode;
        IDENTIFIER(): $TerminalNode;
        BOTTOM(): $TerminalNode;
        REDSTONE(): $TerminalNode;
        FRONT(): $TerminalNode;
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
        number(): $List<$SFMLParser$NumberContext>;
        number(arg0: number): $SFMLParser$NumberContext;
        DASH(): $TerminalNode;
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
        range(arg0: number): $SFMLParser$RangeContext;
        range(): $List<$SFMLParser$RangeContext>;
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
    export class $SFMLParser$BooleanDisjunctionContext extends $SFMLParser$BoolexprContext {
        OR(): $TerminalNode;
        boolexpr(arg0: number): $SFMLParser$BoolexprContext;
        boolexpr(): $List<$SFMLParser$BoolexprContext>;
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
        LPAREN(): $TerminalNode;
        RPAREN(): $TerminalNode;
        withClause(): $SFMLParser$WithClauseContext;
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
        ifStatement(): $SFMLParser$IfStatementContext;
        outputStatement(): $SFMLParser$OutputStatementContext;
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
        block(arg0: number): $SFMLParser$BlockContext;
        block(): $List<$SFMLParser$BlockContext>;
        END(): $TerminalNode;
        IF(arg0: number): $TerminalNode;
        IF(): $List<$TerminalNode>;
        ELSE(arg0: number): $TerminalNode;
        ELSE(): $List<$TerminalNode>;
        THEN(): $List<$TerminalNode>;
        THEN(arg0: number): $TerminalNode;
        boolexpr(): $List<$SFMLParser$BoolexprContext>;
        boolexpr(arg0: number): $SFMLParser$BoolexprContext;
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
        label(arg0: number): $SFMLParser$LabelContext;
        label(): $List<$SFMLParser$LabelContext>;
        COMMA(arg0: number): $TerminalNode;
        COMMA(): $List<$TerminalNode>;
        FORGET(): $TerminalNode;
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
        SECONDS(): $TerminalNode;
        PLUS(): $TerminalNode;
        NUMBER(): $TerminalNode;
        SECOND(): $TerminalNode;
        TICKS(): $TerminalNode;
        TICK(): $TerminalNode;
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
        AND(): $TerminalNode;
        withClause(arg0: number): $SFMLParser$WithClauseContext;
        withClause(): $List<$SFMLParser$WithClauseContext>;
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
        LABEL(): $TerminalNode;
        BY(): $TerminalNode;
        BLOCK(): $TerminalNode;
        ROUND(): $TerminalNode;
        ROBIN(): $TerminalNode;
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
        NOT(): $TerminalNode;
        withClause(): $SFMLParser$WithClauseContext;
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
        AND(): $TerminalNode;
        boolexpr(arg0: number): $SFMLParser$BoolexprContext;
        boolexpr(): $List<$SFMLParser$BoolexprContext>;
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
        number(): $SFMLParser$NumberContext;
        REDSTONE(): $TerminalNode;
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
        NOT(): $TerminalNode;
        boolexpr(): $SFMLParser$BoolexprContext;
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
        label(): $List<$SFMLParser$LabelContext>;
        label(arg0: number): $SFMLParser$LabelContext;
        COMMA(arg0: number): $TerminalNode;
        COMMA(): $List<$TerminalNode>;
        sidequalifier(): $SFMLParser$SidequalifierContext;
        slotqualifier(): $SFMLParser$SlotqualifierContext;
        roundrobin(): $SFMLParser$RoundrobinContext;
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
        LE(): $TerminalNode;
        GE(): $TerminalNode;
        EQ(): $TerminalNode;
        LT(): $TerminalNode;
        GT(): $TerminalNode;
        GE_SYMBOL(): $TerminalNode;
        LE_SYMBOL(): $TerminalNode;
        GT_SYMBOL(): $TerminalNode;
        EQ_SYMBOL(): $TerminalNode;
        LT_SYMBOL(): $TerminalNode;
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
        labelAccess(): $SFMLParser$LabelAccessContext;
        INPUT(): $TerminalNode;
        FROM(): $TerminalNode;
        resourceExclusion(): $SFMLParser$ResourceExclusionContext;
        EACH(): $TerminalNode;
        inputResourceLimits(): $SFMLParser$InputResourceLimitsContext;
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
        NULL(): $TerminalNode;
        TOP(): $TerminalNode;
        WEST(): $TerminalNode;
        LEFT(): $TerminalNode;
        RIGHT(): $TerminalNode;
        EAST(): $TerminalNode;
        BACK(): $TerminalNode;
        BOTTOM(): $TerminalNode;
        SOUTH(): $TerminalNode;
        NORTH(): $TerminalNode;
        FRONT(): $TerminalNode;
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
        "with"(): $SFMLParser$WithContext;
        number(): $SFMLParser$NumberContext;
        labelAccess(): $SFMLParser$LabelAccessContext;
        setOp(): $SFMLParser$SetOpContext;
        HAS(): $TerminalNode;
        comparisonOp(): $SFMLParser$ComparisonOpContext;
        resourceIdList(): $SFMLParser$ResourceIdListContext;
        EXCEPT(): $TerminalNode;
        resourceIdDisjunction(): $SFMLParser$ResourceIdDisjunctionContext;
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
        SECONDS(): $TerminalNode;
        PLUS(): $TerminalNode;
        GLOBAL(): $TerminalNode;
        NUMBER(arg0: number): $TerminalNode;
        NUMBER(): $List<$TerminalNode>;
        SECOND(): $TerminalNode;
        TICKS(): $TerminalNode;
        TICK(): $TerminalNode;
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
        ONE(): $TerminalNode;
        EVERY(): $TerminalNode;
        SOME(): $TerminalNode;
        LONE(): $TerminalNode;
        OVERALL(): $TerminalNode;
        EACH(): $TerminalNode;
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
        IN(): $TerminalNode;
        SLOT(): $TerminalNode;
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
        OR(): $List<$TerminalNode>;
        OR(arg0: number): $TerminalNode;
        resourceId(arg0: number): $SFMLParser$ResourceIdContext;
        resourceId(): $List<$SFMLParser$ResourceIdContext>;
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
        labelAccess(): $SFMLParser$LabelAccessContext;
        OUTPUT(): $TerminalNode;
        TO(): $TerminalNode;
        resourceExclusion(): $SFMLParser$ResourceExclusionContext;
        emptyslots(): $SFMLParser$EmptyslotsContext;
        EACH(): $TerminalNode;
        outputResourceLimits(): $SFMLParser$OutputResourceLimitsContext;
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
        WITH(): $TerminalNode;
        withClause(): $SFMLParser$WithClauseContext;
        WITHOUT(): $TerminalNode;
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
        number(): $SFMLParser$NumberContext;
        EACH(): $TerminalNode;
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
