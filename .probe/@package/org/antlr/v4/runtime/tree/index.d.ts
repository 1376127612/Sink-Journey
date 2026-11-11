import { $Interval } from "@package/org/antlr/v4/runtime/misc";
import { $RuleContext, $Parser, $Token, $ParserRuleContext } from "@package/org/antlr/v4/runtime";
export * as pattern from "@package/org/antlr/v4/runtime/tree/pattern";

declare module "@package/org/antlr/v4/runtime/tree" {
    export class $RuleNode {
    }
    export interface $RuleNode extends $ParseTree {
        getRuleContext(): $RuleContext;
        get ruleContext(): $RuleContext;
    }
    export class $SyntaxTree {
    }
    export interface $SyntaxTree extends $Tree {
        getSourceInterval(): $Interval;
        get sourceInterval(): $Interval;
    }
    export class $ParseTree {
    }
    export interface $ParseTree extends $SyntaxTree {
        getParent(): $ParseTree;
        accept<T>(arg0: $ParseTreeVisitor<T>): T;
        getChild(arg0: number): $ParseTree;
        getText(): string;
        setParent(arg0: $RuleContext): void;
        toStringTree(arg0: $Parser): string;
        get text(): string;
    }
    export class $ParseTreeVisitor<T> {
    }
    export interface $ParseTreeVisitor<T> {
        visit(arg0: $ParseTree): T;
        visitTerminal(arg0: $TerminalNode): T;
        visitChildren(arg0: $RuleNode): T;
        visitErrorNode(arg0: $ErrorNode): T;
    }
    export class $AbstractParseTreeVisitor<T> implements $ParseTreeVisitor<T> {
        visit(arg0: $ParseTree): T;
        visitTerminal(arg0: $TerminalNode): T;
        visitChildren(arg0: $RuleNode): T;
        visitErrorNode(arg0: $ErrorNode): T;
        constructor();
    }
    export class $ParseTreeListener {
    }
    export interface $ParseTreeListener {
        visitTerminal(arg0: $TerminalNode): void;
        visitErrorNode(arg0: $ErrorNode): void;
        enterEveryRule(arg0: $ParserRuleContext): void;
        exitEveryRule(arg0: $ParserRuleContext): void;
    }
    export class $TerminalNode {
    }
    export interface $TerminalNode extends $ParseTree {
        getSymbol(): $Token;
        get symbol(): $Token;
    }
    export class $ErrorNode {
    }
    export interface $ErrorNode extends $TerminalNode {
    }
}
