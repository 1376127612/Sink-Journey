import { $Decoder_ } from "@package/com/mojang/serialization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_ } from "@package/net/minecraft/nbt";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ImmutableStringReader, $StringReader } from "@package/com/mojang/brigadier";
import { $Grammar, $ResourceLookupRule } from "@package/net/minecraft/util/parsing/packrat/commands";
import { $List, $List_, $Collection } from "@package/java/util";
import { $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Predicate, $Predicate_, $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $Record } from "@package/java/lang";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/arguments/item" {
    export class $ComponentPredicateParser$PredicateLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, P> {
    }
    export class $ItemParser {
        parse(reader: $StringReader, visitor: $ItemParser$Visitor): void;
        parse(reader: $StringReader): $ItemParser$ItemResult;
        fillSuggestions(builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static SYNTAX_REMOVED_COMPONENT: string;
        static SYNTAX_END_COMPONENTS: string;
        static SYNTAX_COMPONENT_ASSIGNMENT: string;
        static SYNTAX_START_COMPONENTS: string;
        static SYNTAX_COMPONENT_SEPARATOR: string;
        constructor(registries: $HolderLookup$Provider);
    }
    export class $ItemParser$State {
    }
    export class $ItemArgument implements $ArgumentType<$ItemInput> {
        parse(reader: $StringReader): $ItemInput;
        static getItem<S>(context: $CommandContext<S>, name: string): $ItemInput;
        static item(context: $CommandBuildContext): $ItemArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ItemInput;
        constructor(context: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $ComponentPredicateParser$ComponentLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, C> {
    }
    export class $ComponentPredicateParser {
        static createGrammar<T, C, P>(context: $ComponentPredicateParser$Context<T, C, P>): $Grammar<$List<T>>;
        constructor();
    }
    export class $ItemPredicateArgument$Result {
    }
    export interface $ItemPredicateArgument$Result extends $Predicate<$ItemStack> {
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicateArgument$Result}.
     */
    export type $ItemPredicateArgument$Result_ = (() => void);
    export class $ComponentPredicateParser$Context<T, C, P> {
    }
    export interface $ComponentPredicateParser$Context<T, C, P> {
        negate(value: T): T;
        anyOf(values: $List_<T>): T;
        forTagType(reader: $ImmutableStringReader, elementType: $ResourceLocation_): T;
        lookupComponentType(reader: $ImmutableStringReader, elementType: $ResourceLocation_): C;
        createComponentTest(reader: $ImmutableStringReader, context: C, value: $Tag_): T;
        createComponentTest(reader: $ImmutableStringReader, context: C): T;
        lookupPredicateType(reader: $ImmutableStringReader, elementType: $ResourceLocation_): P;
        createPredicateTest(reader: $ImmutableStringReader, context: P, value: $Tag_): T;
        forElementType(reader: $ImmutableStringReader, elementType: $ResourceLocation_): T;
        listTagTypes(): $Stream<$ResourceLocation>;
        listComponentTypes(): $Stream<$ResourceLocation>;
        listPredicateTypes(): $Stream<$ResourceLocation>;
        listElementTypes(): $Stream<$ResourceLocation>;
    }
    export class $ComponentPredicateParser$ElementLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, T> {
    }
    export class $ItemParser$SuggestionsVisitor implements $ItemParser$Visitor {
        visitItem(item: $Holder_<$Item>): void;
        visitComponent<T>(componentType: $DataComponentType_<T>, value: T): void;
        visitSuggestions(suggestions: $Function_<$SuggestionsBuilder, $CompletableFuture<$Suggestions>>): void;
        visitRemovedComponent<T>(componentType: $DataComponentType_<T>): void;
    }
    export class $ItemParser$ItemResult extends $Record {
        item(): $Holder<$Item>;
        components(): $DataComponentPatch;
        constructor(arg0: $Holder_<$Item>, arg1: $DataComponentPatch_);
    }
    /**
     * Values that may be interpreted as {@link $ItemParser$ItemResult}.
     */
    export type $ItemParser$ItemResult_ = { item?: $Holder_<$Item>, components?: $DataComponentPatch_,  } | [item?: $Holder_<$Item>, components?: $DataComponentPatch_, ];
    export class $ItemPredicateArgument implements $ArgumentType<$ItemPredicateArgument$Result> {
        parse(reader: $StringReader): $ItemPredicateArgument$Result;
        getExamples(): $Collection<string>;
        static itemPredicate(context: $CommandBuildContext): $ItemPredicateArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getItemPredicate(context: $CommandContext<$CommandSourceStack>, name: string): $ItemPredicateArgument$Result;
        parse<S>(arg0: $StringReader, arg1: S): $ItemPredicateArgument$Result;
        constructor(context: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $ItemPredicateArgument$Context implements $ComponentPredicateParser$Context<$Predicate<$ItemStack>, $ItemPredicateArgument$ComponentWrapper, $ItemPredicateArgument$PredicateWrapper> {
    }
    export class $FunctionArgument$Result {
    }
    export interface $FunctionArgument$Result {
        create(context: $CommandContext<$CommandSourceStack>): $Collection<$CommandFunction<$CommandSourceStack>>;
        unwrap(context: $CommandContext<$CommandSourceStack>): $Pair<$ResourceLocation, $Either<$CommandFunction<$CommandSourceStack>, $Collection<$CommandFunction<$CommandSourceStack>>>>;
        unwrapToCollection(context: $CommandContext<$CommandSourceStack>): $Pair<$ResourceLocation, $Collection<$CommandFunction<$CommandSourceStack>>>;
    }
    export class $ComponentPredicateParser$TagLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, T> {
    }
    export class $FunctionArgument implements $ArgumentType<$FunctionArgument$Result> {
        parse(reader: $StringReader): $FunctionArgument$Result;
        static functions(): $FunctionArgument;
        getExamples(): $Collection<string>;
        static getFunctions(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$CommandFunction<$CommandSourceStack>>;
        static getFunctionCollection(context: $CommandContext<$CommandSourceStack>, name: string): $Pair<$ResourceLocation, $Collection<$CommandFunction<$CommandSourceStack>>>;
        static getFunctionOrTag(context: $CommandContext<$CommandSourceStack>, name: string): $Pair<$ResourceLocation, $Either<$CommandFunction<$CommandSourceStack>, $Collection<$CommandFunction<$CommandSourceStack>>>>;
        parse<S>(arg0: $StringReader, arg1: S): $FunctionArgument$Result;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ItemPredicateArgument$PredicateWrapper extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicateArgument$PredicateWrapper}.
     */
    export type $ItemPredicateArgument$PredicateWrapper_ = { id?: $ResourceLocation_, type?: $Decoder_<$Predicate<$ItemStack>>,  } | [id?: $ResourceLocation_, type?: $Decoder_<$Predicate<$ItemStack>>, ];
    export class $ItemInput {
        getItem(): $Item;
        serialize(levelRegistry: $HolderLookup$Provider): string;
        createItemStack(count: number, allowOversizedStacks: boolean): $ItemStack;
        constructor(item: $Holder_<$Item>, components: $DataComponentPatch_);
        get item(): $Item;
    }
    export class $ItemPredicateArgument$ComponentWrapper extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicateArgument$ComponentWrapper}.
     */
    export type $ItemPredicateArgument$ComponentWrapper_ = { valueChecker?: $Decoder_<$Predicate<$ItemStack>>, presenceChecker?: $Predicate_<$ItemStack>, id?: $ResourceLocation_,  } | [valueChecker?: $Decoder_<$Predicate<$ItemStack>>, presenceChecker?: $Predicate_<$ItemStack>, id?: $ResourceLocation_, ];
    export class $ItemParser$Visitor {
    }
    export interface $ItemParser$Visitor {
        visitItem(item: $Holder_<$Item>): void;
        visitComponent<T>(componentType: $DataComponentType_<T>, value: T): void;
        visitSuggestions(suggestions: $Function_<$SuggestionsBuilder, $CompletableFuture<$Suggestions>>): void;
        visitRemovedComponent<T>(componentType: $DataComponentType_<T>): void;
    }
}
