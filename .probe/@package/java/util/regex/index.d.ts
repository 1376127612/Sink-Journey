import { $Serializable } from "@package/java/io";
import { $Predicate, $Function_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Map } from "@package/java/util";
import { $CharSequence, $StringBuilder, $StringBuffer } from "@package/java/lang";

declare module "@package/java/util/regex" {
    export class $Matcher implements $MatchResult {
        group(arg0: number): string;
        group(): string;
        group(arg0: string): string;
        reset(arg0: $CharSequence): $Matcher;
        reset(): $Matcher;
        end(): number;
        end(arg0: number): number;
        end(arg0: string): number;
        matches(): boolean;
        replaceFirst(arg0: string): string;
        replaceFirst(arg0: $Function_<$MatchResult, string>): string;
        replaceAll(arg0: string): string;
        replaceAll(arg0: $Function_<$MatchResult, string>): string;
        pattern(): $Pattern;
        find(arg0: number): boolean;
        find(): boolean;
        start(): number;
        start(arg0: number): number;
        start(arg0: string): number;
        requireEnd(): boolean;
        hasMatch(): boolean;
        regionStart(): number;
        regionEnd(): number;
        toMatchResult(): $MatchResult;
        usePattern(arg0: $Pattern): $Matcher;
        lookingAt(): boolean;
        static quoteReplacement(arg0: string): string;
        results(): $Stream<$MatchResult>;
        hasTransparentBounds(): boolean;
        useTransparentBounds(arg0: boolean): $Matcher;
        hasAnchoringBounds(): boolean;
        useAnchoringBounds(arg0: boolean): $Matcher;
        appendReplacement(arg0: $StringBuffer, arg1: string): $Matcher;
        appendReplacement(arg0: $StringBuilder, arg1: string): $Matcher;
        appendTail(arg0: $StringBuffer): $StringBuffer;
        appendTail(arg0: $StringBuilder): $StringBuilder;
        hitEnd(): boolean;
        groupCount(): number;
        region(arg0: number, arg1: number): $Matcher;
        namedGroups(): $Map<string, number>;
    }
    export class $MatchResult {
    }
    export interface $MatchResult {
        group(arg0: number): string;
        group(arg0: string): string;
        group(): string;
        end(arg0: string): number;
        end(arg0: number): number;
        end(): number;
        start(): number;
        start(arg0: string): number;
        start(arg0: number): number;
        hasMatch(): boolean;
        groupCount(): number;
        namedGroups(): $Map<string, number>;
    }
    export class $Pattern implements $Serializable {
        flags(): number;
        static matches(arg0: string, arg1: $CharSequence): boolean;
        static compile(arg0: string): $Pattern;
        static compile(arg0: string, arg1: number): $Pattern;
        matcher(arg0: $CharSequence): $Matcher;
        split(arg0: $CharSequence, arg1: number): string[];
        split(arg0: $CharSequence): string[];
        splitWithDelimiters(arg0: $CharSequence, arg1: number): string[];
        pattern(): string;
        static quote(arg0: string): string;
        asPredicate(): $Predicate<string>;
        asMatchPredicate(): $Predicate<string>;
        splitAsStream(arg0: $CharSequence): $Stream<string>;
        namedGroups(): $Map<string, number>;
        static DOTALL: number;
        static UNICODE_CASE: number;
        static LITERAL: number;
        static UNICODE_CHARACTER_CLASS: number;
        static CASE_INSENSITIVE: number;
        static CANON_EQ: number;
        static COMMENTS: number;
        static UNIX_LINES: number;
        static MULTILINE: number;
    }
}
