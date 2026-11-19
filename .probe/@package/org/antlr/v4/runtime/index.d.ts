import { $PrintStream } from "@package/java/io";
import { $RuleNode, $ParseTreeListener, $ParseTree, $ParseTreeVisitor, $ErrorNode, $TerminalNode } from "@package/org/antlr/v4/runtime/tree";
import { $IntervalSet, $IntegerStack, $Interval } from "@package/org/antlr/v4/runtime/misc";
import { $ATNSimulator, $LexerATNSimulator, $ParseInfo, $ATN, $ParserATNSimulator } from "@package/org/antlr/v4/runtime/atn";
import { $ParseTreePattern } from "@package/org/antlr/v4/runtime/tree/pattern";
import { $RuntimeException, $Class } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
export * as misc from "@package/org/antlr/v4/runtime/misc";
export * as tree from "@package/org/antlr/v4/runtime/tree";
export * as atn from "@package/org/antlr/v4/runtime/atn";

declare module "@package/org/antlr/v4/runtime" {
    export class $Recognizer<Symbol, ATNInterpreter extends $ATNSimulator> {
        action(arg0: $RuleContext, arg1: number, arg2: number): void;
        getState(): number;
        setState(arg0: number): void;
        getInputStream(): $IntStream;
        precpred(arg0: $RuleContext, arg1: number): boolean;
        sempred(arg0: $RuleContext, arg1: number, arg2: number): boolean;
        getATN(): $ATN;
        getTokenFactory(): $TokenFactory<never>;
        addErrorListener(arg0: $ANTLRErrorListener): void;
        setTokenFactory(arg0: $TokenFactory<never>): void;
        getRuleIndexMap(): $Map<string, number>;
        getTokenType(arg0: string): number;
        getErrorHeader(arg0: $RecognitionException): string;
        setInputStream(arg0: $IntStream): void;
        getParseInfo(): $ParseInfo;
        setInterpreter(arg0: ATNInterpreter): void;
        getInterpreter(): ATNInterpreter;
        getErrorListeners(): $List<$ANTLRErrorListener>;
        getTokenTypeMap(): $Map<string, number>;
        getVocabulary(): $Vocabulary;
        getGrammarFileName(): string;
        getSerializedATN(): string;
        /**
         * @deprecated
         */
        getTokenNames(): string[];
        getRuleNames(): string[];
        removeErrorListeners(): void;
        /**
         * @deprecated
         */
        getTokenErrorDisplay(arg0: $Token): string;
        getErrorListenerDispatch(): $ANTLRErrorListener;
        removeErrorListener(arg0: $ANTLRErrorListener): void;
        static EOF: number;
        constructor();
        get ATN(): $ATN;
        get ruleIndexMap(): $Map<string, number>;
        get parseInfo(): $ParseInfo;
        get errorListeners(): $List<$ANTLRErrorListener>;
        get tokenTypeMap(): $Map<string, number>;
        get vocabulary(): $Vocabulary;
        get grammarFileName(): string;
        get serializedATN(): string;
        get tokenNames(): string[];
        get ruleNames(): string[];
        get errorListenerDispatch(): $ANTLRErrorListener;
    }
    export class $TokenStream {
    }
    export interface $TokenStream extends $IntStream {
        get(arg0: number): $Token;
        getText(arg0: $Token, arg1: $Token): string;
        getText(): string;
        getText(arg0: $RuleContext): string;
        getText(arg0: $Interval): string;
        LT(arg0: number): $Token;
        getTokenSource(): $TokenSource;
        get tokenSource(): $TokenSource;
    }
    export class $RuleContext implements $RuleNode {
        toString(arg0: $List_<string>): string;
        toString(arg0: $Recognizer<never, never>, arg1: $RuleContext): string;
        toString(arg0: $Recognizer<never, never>): string;
        toString(arg0: $List_<string>, arg1: $RuleContext): string;
        isEmpty(): boolean;
        getParent(): $RuleContext;
        depth(): number;
        accept<T>(arg0: $ParseTreeVisitor<T>): T;
        getPayload(): $RuleContext;
        getChildCount(): number;
        getChild(arg0: number): $ParseTree;
        getRuleIndex(): number;
        setAltNumber(arg0: number): void;
        toStringTree(arg0: $Parser): string;
        toStringTree(): string;
        toStringTree(arg0: $List_<string>): string;
        getAltNumber(): number;
        getRuleContext(): $RuleContext;
        getText(): string;
        setParent(arg0: $RuleContext): void;
        getSourceInterval(): $Interval;
        parent: $RuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $RuleContext, arg1: number);
        get empty(): boolean;
        get payload(): $RuleContext;
        get childCount(): number;
        get ruleIndex(): number;
        get ruleContext(): $RuleContext;
        get text(): string;
        get sourceInterval(): $Interval;
    }
    export class $IntStream {
        static UNKNOWN_SOURCE_NAME: string;
        static EOF: number;
    }
    export interface $IntStream {
        index(): number;
        size(): number;
        release(arg0: number): void;
        mark(): number;
        seek(arg0: number): void;
        consume(): void;
        getSourceName(): string;
        LA(arg0: number): number;
        get sourceName(): string;
    }
    export class $ParserRuleContext extends $RuleContext {
        getParent(): $ParserRuleContext;
        copyFrom(arg0: $ParserRuleContext): void;
        getChild<T extends $ParseTree>(arg0: $Class<T>, arg1: number): T;
        getToken(arg0: number, arg1: number): $TerminalNode;
        toInfoString(arg0: $Parser): string;
        removeLastChild(): void;
        addAnyChild<T extends $ParseTree>(arg0: T): T;
        addErrorNode(arg0: $ErrorNode): $ErrorNode;
        /**
         * @deprecated
         */
        addErrorNode(arg0: $Token): $ErrorNode;
        getRuleContexts<T extends $ParserRuleContext>(arg0: $Class<T>): $List<T>;
        getRuleContext<T extends $ParserRuleContext>(arg0: $Class<T>, arg1: number): T;
        exitRule(arg0: $ParseTreeListener): void;
        enterRule(arg0: $ParseTreeListener): void;
        getTokens(arg0: number): $List<$TerminalNode>;
        getStart(): $Token;
        getStop(): $Token;
        addChild(arg0: $TerminalNode): $TerminalNode;
        addChild(arg0: $RuleContext): $RuleContext;
        /**
         * @deprecated
         */
        addChild(arg0: $Token): $TerminalNode;
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
    export class $ANTLRErrorStrategy {
    }
    export interface $ANTLRErrorStrategy {
        reset(arg0: $Parser): void;
        sync(arg0: $Parser): void;
        recoverInline(arg0: $Parser): $Token;
        reportMatch(arg0: $Parser): void;
        recover(arg0: $Parser, arg1: $RecognitionException): void;
        inErrorRecoveryMode(arg0: $Parser): boolean;
        reportError(arg0: $Parser, arg1: $RecognitionException): void;
    }
    export class $CharStream {
    }
    export interface $CharStream extends $IntStream {
        getText(arg0: $Interval): string;
    }
    export class $RecognitionException extends $RuntimeException {
        getInputStream(): $IntStream;
        getOffendingToken(): $Token;
        getExpectedTokens(): $IntervalSet;
        getRecognizer(): $Recognizer<never, never>;
        getOffendingState(): number;
        getCtx(): $RuleContext;
        constructor(arg0: $Recognizer<never, never>, arg1: $IntStream, arg2: $ParserRuleContext);
        constructor(arg0: string, arg1: $Recognizer<never, never>, arg2: $IntStream, arg3: $ParserRuleContext);
        get inputStream(): $IntStream;
        get offendingToken(): $Token;
        get expectedTokens(): $IntervalSet;
        get recognizer(): $Recognizer<never, never>;
        get offendingState(): number;
        get ctx(): $RuleContext;
    }
    export class $Lexer extends $Recognizer<number, $LexerATNSimulator> implements $TokenSource {
        mode(arg0: number): void;
        reset(): void;
        nextToken(): $Token;
        getType(): number;
        getInputStream(): $CharStream;
        skip(): void;
        getChannel(): number;
        more(): void;
        getToken(): $Token;
        setType(arg0: number): void;
        setText(arg0: string): void;
        setChannel(arg0: number): void;
        setToken(arg0: $Token): void;
        recover(arg0: $LexerNoViableAltException): void;
        recover(arg0: $RecognitionException): void;
        setLine(arg0: number): void;
        getText(): string;
        emit(): $Token;
        emit(arg0: $Token): void;
        getLine(): number;
        notifyListeners(arg0: $LexerNoViableAltException): void;
        emitEOF(): $Token;
        popMode(): number;
        pushMode(arg0: number): void;
        getCharPositionInLine(): number;
        getSourceName(): string;
        getErrorDisplay(arg0: number): string;
        getErrorDisplay(arg0: string): string;
        getModeNames(): string[];
        getCharIndex(): number;
        getChannelNames(): string[];
        getAllTokens(): $List<$Token>;
        setCharPositionInLine(arg0: number): void;
        getCharErrorDisplay(arg0: number): string;
        static MAX_CHAR_VALUE: number;
        static DEFAULT_TOKEN_CHANNEL: number;
        _type: number;
        _token: $Token;
        static HIDDEN: number;
        _tokenStartCharPositionInLine: number;
        _hitEOF: boolean;
        _mode: number;
        static MORE: number;
        _modeStack: $IntegerStack;
        _tokenStartLine: number;
        static SKIP: number;
        _tokenStartCharIndex: number;
        _input: $CharStream;
        _text: string;
        static DEFAULT_MODE: number;
        static EOF: number;
        static MIN_CHAR_VALUE: number;
        _channel: number;
        constructor();
        constructor(arg0: $CharStream);
        get inputStream(): $CharStream;
        get sourceName(): string;
        get modeNames(): string[];
        get charIndex(): number;
        get channelNames(): string[];
        get allTokens(): $List<$Token>;
    }
    export class $Parser extends $Recognizer<$Token, $ParserATNSimulator> {
        reset(): void;
        match(arg0: number): $Token;
        getContext(): $ParserRuleContext;
        getInputStream(): $TokenStream;
        consume(): $Token;
        getRuleIndex(arg0: string): number;
        getDFAStrings(): $List<string>;
        isMatchedEOF(): boolean;
        getRuleContext(): $ParserRuleContext;
        getExpectedTokensWithinCurrentRule(): $IntervalSet;
        setErrorHandler(arg0: $ANTLRErrorStrategy): void;
        getErrorHandler(): $ANTLRErrorStrategy;
        enterOuterAlt(arg0: $ParserRuleContext, arg1: number): void;
        exitRule(): void;
        enterRule(arg0: $ParserRuleContext, arg1: number, arg2: number): void;
        setContext(arg0: $ParserRuleContext): void;
        setTrace(arg0: boolean): void;
        setProfile(arg0: boolean): void;
        isTrace(): boolean;
        dumpDFA(arg0: $PrintStream): void;
        dumpDFA(): void;
        inContext(arg0: string): boolean;
        getNumberOfSyntaxErrors(): number;
        removeParseListeners(): void;
        getATNWithBypassAlts(): $ATN;
        getRuleInvocationStack(arg0: $RuleContext): $List<string>;
        getRuleInvocationStack(): $List<string>;
        removeParseListener(arg0: $ParseTreeListener): void;
        compileParseTreePattern(arg0: string, arg1: number, arg2: $Lexer): $ParseTreePattern;
        compileParseTreePattern(arg0: string, arg1: number): $ParseTreePattern;
        pushNewRecursionContext(arg0: $ParserRuleContext, arg1: number, arg2: number): void;
        unrollRecursionContexts(arg0: $ParserRuleContext): void;
        notifyErrorListeners(arg0: $Token, arg1: string, arg2: $RecognitionException): void;
        notifyErrorListeners(arg0: string): void;
        getSourceName(): string;
        getExpectedTokens(): $IntervalSet;
        getTrimParseTree(): boolean;
        getBuildParseTree(): boolean;
        getParseListeners(): $List<$ParseTreeListener>;
        setBuildParseTree(arg0: boolean): void;
        addParseListener(arg0: $ParseTreeListener): void;
        matchWildcard(): $Token;
        setTokenStream(arg0: $TokenStream): void;
        createTerminalNode(arg0: $ParserRuleContext, arg1: $Token): $TerminalNode;
        setTrimParseTree(arg0: boolean): void;
        createErrorNode(arg0: $ParserRuleContext, arg1: $Token): $ErrorNode;
        getInvokingContext(arg0: number): $ParserRuleContext;
        getPrecedence(): number;
        getTokenStream(): $TokenStream;
        enterRecursionRule(arg0: $ParserRuleContext, arg1: number, arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        enterRecursionRule(arg0: $ParserRuleContext, arg1: number): void;
        isExpectedToken(arg0: number): boolean;
        getCurrentToken(): $Token;
        static EOF: number;
        constructor(arg0: $TokenStream);
        get inputStream(): $TokenStream;
        get DFAStrings(): $List<string>;
        get matchedEOF(): boolean;
        get ruleContext(): $ParserRuleContext;
        get expectedTokensWithinCurrentRule(): $IntervalSet;
        set profile(value: boolean);
        get numberOfSyntaxErrors(): number;
        get ATNWithBypassAlts(): $ATN;
        get sourceName(): string;
        get expectedTokens(): $IntervalSet;
        get parseListeners(): $List<$ParseTreeListener>;
        get precedence(): number;
        get currentToken(): $Token;
    }
    export class $Token {
        static DEFAULT_CHANNEL: number;
        static HIDDEN_CHANNEL: number;
        static MIN_USER_CHANNEL_VALUE: number;
        static MIN_USER_TOKEN_TYPE: number;
        static INVALID_TYPE: number;
        static EOF: number;
        static EPSILON: number;
    }
    export interface $Token {
        getType(): number;
        getInputStream(): $CharStream;
        getChannel(): number;
        getText(): string;
        getLine(): number;
        getCharPositionInLine(): number;
        getTokenSource(): $TokenSource;
        getStartIndex(): number;
        getTokenIndex(): number;
        getStopIndex(): number;
        get type(): number;
        get inputStream(): $CharStream;
        get channel(): number;
        get text(): string;
        get line(): number;
        get charPositionInLine(): number;
        get tokenSource(): $TokenSource;
        get startIndex(): number;
        get tokenIndex(): number;
        get stopIndex(): number;
    }
    export class $Vocabulary {
    }
    export interface $Vocabulary {
        getDisplayName(arg0: number): string;
        getMaxTokenType(): number;
        getLiteralName(arg0: number): string;
        getSymbolicName(arg0: number): string;
        get maxTokenType(): number;
    }
    export class $TokenSource {
    }
    export interface $TokenSource {
        nextToken(): $Token;
        getInputStream(): $CharStream;
        getLine(): number;
        getCharPositionInLine(): number;
        getSourceName(): string;
        getTokenFactory(): $TokenFactory<never>;
        setTokenFactory(arg0: $TokenFactory<never>): void;
        get inputStream(): $CharStream;
        get line(): number;
        get charPositionInLine(): number;
        get sourceName(): string;
    }
}
