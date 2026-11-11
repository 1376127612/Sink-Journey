import { $ParseTree } from "@package/org/antlr/v4/runtime/tree";
import { $List } from "@package/java/util";

declare module "@package/org/antlr/v4/runtime/tree/pattern" {
    export class $ParseTreePattern {
        matches(arg0: $ParseTree): boolean;
        match(arg0: $ParseTree): $ParseTreeMatch;
        findAll(arg0: $ParseTree, arg1: string): $List<$ParseTreeMatch>;
        getPattern(): string;
        getMatcher(): $ParseTreePatternMatcher;
        getPatternRuleIndex(): number;
        getPatternTree(): $ParseTree;
        constructor(arg0: $ParseTreePatternMatcher, arg1: string, arg2: number, arg3: $ParseTree);
        get pattern(): string;
        get matcher(): $ParseTreePatternMatcher;
        get patternRuleIndex(): number;
        get patternTree(): $ParseTree;
    }
}
