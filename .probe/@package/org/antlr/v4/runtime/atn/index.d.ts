import { $IntervalSet } from "@package/org/antlr/v4/runtime/misc";
import { $DFAState, $DFA } from "@package/org/antlr/v4/runtime/dfa";
import { $List, $Map } from "@package/java/util";
import { $RuleContext, $Parser, $TokenStream, $ParserRuleContext, $NoViableAltException } from "@package/org/antlr/v4/runtime";

declare module "@package/org/antlr/v4/runtime/atn" {
    export class $ATN {
        getNumberOfDecisions(): number;
        defineDecisionState(arg0: $DecisionState): number;
        getDecisionState(arg0: number): $DecisionState;
        getExpectedTokens(arg0: number, arg1: $RuleContext): $IntervalSet;
        addState(arg0: $ATNState): void;
        nextTokens(arg0: $ATNState, arg1: $RuleContext): $IntervalSet;
        nextTokens(arg0: $ATNState): $IntervalSet;
        removeState(arg0: $ATNState): void;
        ruleToStartState: $RuleStartState[];
        grammarType: $ATNType;
        maxTokenType: number;
        lexerActions: $LexerAction[];
        modeToStartState: $List<$TokensStartState>;
        ruleToStopState: $RuleStopState[];
        static INVALID_ALT_NUMBER: number;
        decisionToState: $List<$DecisionState>;
        modeNameToStartState: $Map<string, $TokensStartState>;
        states: $List<$ATNState>;
        ruleToTokenType: number[];
        constructor(arg0: $ATNType, arg1: number);
        get numberOfDecisions(): number;
    }
    export class $ParserATNSimulator extends $ATNSimulator {
        getTokenName(arg0: number): string;
        adaptivePredict(arg0: $TokenStream, arg1: number, arg2: $ParserRuleContext): number;
        getPredictionMode(): $PredictionMode;
        setPredictionMode(arg0: $PredictionMode): void;
        getLookaheadName(arg0: $TokenStream): string;
        dumpDeadEndConfigs(arg0: $NoViableAltException): void;
        getRuleName(arg0: number): string;
        precedenceTransition(arg0: $ATNConfig, arg1: $PrecedencePredicateTransition, arg2: boolean, arg3: boolean, arg4: boolean): $ATNConfig;
        getParser(): $Parser;
        static getSafeEnv(arg0: string): string;
        decisionToDFA: $DFA[];
        static debug: boolean;
        static retry_debug: boolean;
        static TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT: boolean;
        static ERROR: $DFAState;
        atn: $ATN;
        static trace_atn_sim: boolean;
        static dfa_debug: boolean;
        constructor(arg0: $ATN, arg1: $DFA[], arg2: $PredictionContextCache);
        constructor(arg0: $Parser, arg1: $ATN, arg2: $DFA[], arg3: $PredictionContextCache);
        get parser(): $Parser;
    }
}
