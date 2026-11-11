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
        getErrorListenerDispatch(): $ANTLRErrorListener;
        /**
         * @deprecated
         */
        getTokenErrorDisplay(arg0: $Token): string;
        removeErrorListener(arg0: $ANTLRErrorListener): void;
        removeErrorListeners(): void;
        getRuleNames(): string[];
        /**
         * @deprecated
         */
        getTokenNames(): string[];
        getVocabulary(): $Vocabulary;
        getGrammarFileName(): string;
        getSerializedATN(): string;
        setInterpreter(arg0: ATNInterpreter): void;
        getTokenTypeMap(): $Map<string, number>;
        setInputStream(arg0: $IntStream): void;
        getErrorListeners(): $List<$ANTLRErrorListener>;
        getInterpreter(): ATNInterpreter;
        getParseInfo(): $ParseInfo;
        getRuleIndexMap(): $Map<string, number>;
        getErrorHeader(arg0: $RecognitionException): string;
        getTokenType(arg0: string): number;
        addErrorListener(arg0: $ANTLRErrorListener): void;
        setTokenFactory(arg0: $TokenFactory<never>): void;
        getTokenFactory(): $TokenFactory<never>;
        getATN(): $ATN;
        sempred(arg0: $RuleContext, arg1: number, arg2: number): boolean;
        precpred(arg0: $RuleContext, arg1: number): boolean;
        static EOF: number;
        constructor();
        get errorListenerDispatch(): $ANTLRErrorListener;
        get ruleNames(): string[];
        get tokenNames(): string[];
        get vocabulary(): $Vocabulary;
        get grammarFileName(): string;
        get serializedATN(): string;
        get tokenTypeMap(): $Map<string, number>;
        get errorListeners(): $List<$ANTLRErrorListener>;
        get parseInfo(): $ParseInfo;
        get ruleIndexMap(): $Map<string, number>;
        get ATN(): $ATN;
    }
    export class $TokenStream {
    }
    export interface $TokenStream extends $IntStream {
        get(arg0: number): $Token;
        getText(arg0: $Token, arg1: $Token): string;
        getText(): string;
        getText(arg0: $RuleContext): string;
        getText(arg0: $Interval): string;
        getTokenSource(): $TokenSource;
        LT(arg0: number): $Token;
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
        getText(): string;
        setParent(arg0: $RuleContext): void;
        getSourceInterval(): $Interval;
        getRuleContext(): $RuleContext;
        getRuleIndex(): number;
        setAltNumber(arg0: number): void;
        toStringTree(arg0: $List_<string>): string;
        toStringTree(arg0: $Parser): string;
        toStringTree(): string;
        getAltNumber(): number;
        parent: $RuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $RuleContext, arg1: number);
        get empty(): boolean;
        get payload(): $RuleContext;
        get childCount(): number;
        get text(): string;
        get sourceInterval(): $Interval;
        get ruleContext(): $RuleContext;
        get ruleIndex(): number;
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
        /**
         * @deprecated
         */
        addChild(arg0: $Token): $TerminalNode;
        addChild(arg0: $RuleContext): $RuleContext;
        addChild(arg0: $TerminalNode): $TerminalNode;
        getToken(arg0: number, arg1: number): $TerminalNode;
        getTokens(arg0: number): $List<$TerminalNode>;
        enterRule(arg0: $ParseTreeListener): void;
        exitRule(arg0: $ParseTreeListener): void;
        getStart(): $Token;
        getStop(): $Token;
        addErrorNode(arg0: $ErrorNode): $ErrorNode;
        /**
         * @deprecated
         */
        addErrorNode(arg0: $Token): $ErrorNode;
        getRuleContext<T extends $ParserRuleContext>(arg0: $Class<T>, arg1: number): T;
        getRuleContexts<T extends $ParserRuleContext>(arg0: $Class<T>): $List<T>;
        addAnyChild<T extends $ParseTree>(arg0: T): T;
        removeLastChild(): void;
        toInfoString(arg0: $Parser): string;
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
        reportError(arg0: $Parser, arg1: $RecognitionException): void;
        reportMatch(arg0: $Parser): void;
        recoverInline(arg0: $Parser): $Token;
        recover(arg0: $Parser, arg1: $RecognitionException): void;
        inErrorRecoveryMode(arg0: $Parser): boolean;
    }
    export class $CharStream {
    }
    export interface $CharStream extends $IntStream {
        getText(arg0: $Interval): string;
    }
    export class $RecognitionException extends $RuntimeException {
        getInputStream(): $IntStream;
        getRecognizer(): $Recognizer<never, never>;
        getOffendingState(): number;
        getExpectedTokens(): $IntervalSet;
        getOffendingToken(): $Token;
        getCtx(): $RuleContext;
        constructor(arg0: $Recognizer<never, never>, arg1: $IntStream, arg2: $ParserRuleContext);
        constructor(arg0: string, arg1: $Recognizer<never, never>, arg2: $IntStream, arg3: $ParserRuleContext);
        get inputStream(): $IntStream;
        get recognizer(): $Recognizer<never, never>;
        get offendingState(): number;
        get expectedTokens(): $IntervalSet;
        get offendingToken(): $Token;
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
        setType(arg0: number): void;
        setCharPositionInLine(arg0: number): void;
        getCharErrorDisplay(arg0: number): string;
        setText(arg0: string): void;
        getLine(): number;
        getText(): string;
        notifyListeners(arg0: $LexerNoViableAltException): void;
        getModeNames(): string[];
        getChannelNames(): string[];
        getErrorDisplay(arg0: string): string;
        getErrorDisplay(arg0: number): string;
        getCharIndex(): number;
        getAllTokens(): $List<$Token>;
        getSourceName(): string;
        getToken(): $Token;
        emit(): $Token;
        emit(arg0: $Token): void;
        getCharPositionInLine(): number;
        setToken(arg0: $Token): void;
        setChannel(arg0: number): void;
        emitEOF(): $Token;
        setLine(arg0: number): void;
        pushMode(arg0: number): void;
        popMode(): number;
        recover(arg0: $RecognitionException): void;
        recover(arg0: $LexerNoViableAltException): void;
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
        get modeNames(): string[];
        get channelNames(): string[];
        get charIndex(): number;
        get allTokens(): $List<$Token>;
        get sourceName(): string;
    }
    export class $Parser extends $Recognizer<$Token, $ParserATNSimulator> {
        reset(): void;
        match(arg0: number): $Token;
        getContext(): $ParserRuleContext;
        getInputStream(): $TokenStream;
        consume(): $Token;
        setContext(arg0: $ParserRuleContext): void;
        getExpectedTokens(): $IntervalSet;
        getSourceName(): string;
        setErrorHandler(arg0: $ANTLRErrorStrategy): void;
        getErrorHandler(): $ANTLRErrorStrategy;
        getExpectedTokensWithinCurrentRule(): $IntervalSet;
        dumpDFA(): void;
        dumpDFA(arg0: $PrintStream): void;
        setProfile(arg0: boolean): void;
        enterRule(arg0: $ParserRuleContext, arg1: number, arg2: number): void;
        exitRule(): void;
        inContext(arg0: string): boolean;
        setTrace(arg0: boolean): void;
        isTrace(): boolean;
        getCurrentToken(): $Token;
        getRuleContext(): $ParserRuleContext;
        getDFAStrings(): $List<string>;
        createTerminalNode(arg0: $ParserRuleContext, arg1: $Token): $TerminalNode;
        getTrimParseTree(): boolean;
        enterOuterAlt(arg0: $ParserRuleContext, arg1: number): void;
        matchWildcard(): $Token;
        getBuildParseTree(): boolean;
        setTrimParseTree(arg0: boolean): void;
        setTokenStream(arg0: $TokenStream): void;
        getPrecedence(): number;
        getParseListeners(): $List<$ParseTreeListener>;
        getTokenStream(): $TokenStream;
        isMatchedEOF(): boolean;
        setBuildParseTree(arg0: boolean): void;
        addParseListener(arg0: $ParseTreeListener): void;
        createErrorNode(arg0: $ParserRuleContext, arg1: $Token): $ErrorNode;
        enterRecursionRule(arg0: $ParserRuleContext, arg1: number, arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        enterRecursionRule(arg0: $ParserRuleContext, arg1: number): void;
        getInvokingContext(arg0: number): $ParserRuleContext;
        isExpectedToken(arg0: number): boolean;
        getRuleIndex(arg0: string): number;
        removeParseListeners(): void;
        compileParseTreePattern(arg0: string, arg1: number): $ParseTreePattern;
        compileParseTreePattern(arg0: string, arg1: number, arg2: $Lexer): $ParseTreePattern;
        getATNWithBypassAlts(): $ATN;
        removeParseListener(arg0: $ParseTreeListener): void;
        notifyErrorListeners(arg0: string): void;
        notifyErrorListeners(arg0: $Token, arg1: string, arg2: $RecognitionException): void;
        pushNewRecursionContext(arg0: $ParserRuleContext, arg1: number, arg2: number): void;
        getNumberOfSyntaxErrors(): number;
        unrollRecursionContexts(arg0: $ParserRuleContext): void;
        getRuleInvocationStack(arg0: $RuleContext): $List<string>;
        getRuleInvocationStack(): $List<string>;
        static EOF: number;
        constructor(arg0: $TokenStream);
        get inputStream(): $TokenStream;
        get expectedTokens(): $IntervalSet;
        get sourceName(): string;
        get expectedTokensWithinCurrentRule(): $IntervalSet;
        set profile(value: boolean);
        get currentToken(): $Token;
        get ruleContext(): $ParserRuleContext;
        get DFAStrings(): $List<string>;
        get precedence(): number;
        get parseListeners(): $List<$ParseTreeListener>;
        get matchedEOF(): boolean;
        get ATNWithBypassAlts(): $ATN;
        get numberOfSyntaxErrors(): number;
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
        getLine(): number;
        getText(): string;
        getStartIndex(): number;
        getTokenSource(): $TokenSource;
        getCharPositionInLine(): number;
        getStopIndex(): number;
        getTokenIndex(): number;
        get type(): number;
        get inputStream(): $CharStream;
        get channel(): number;
        get line(): number;
        get text(): string;
        get startIndex(): number;
        get tokenSource(): $TokenSource;
        get charPositionInLine(): number;
        get stopIndex(): number;
        get tokenIndex(): number;
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
        getSourceName(): string;
        setTokenFactory(arg0: $TokenFactory<never>): void;
        getTokenFactory(): $TokenFactory<never>;
        getCharPositionInLine(): number;
        get inputStream(): $CharStream;
        get line(): number;
        get sourceName(): string;
        get charPositionInLine(): number;
    }
}
