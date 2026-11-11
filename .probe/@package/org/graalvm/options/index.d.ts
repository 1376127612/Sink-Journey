import { $Iterable } from "@package/java/lang";
import { $List_, $Iterator } from "@package/java/util";

declare module "@package/org/graalvm/options" {
    export class $OptionDescriptors {
        static create(descriptors: $List_<$OptionDescriptor>): $OptionDescriptors;
        static createUnion(...descriptors: $OptionDescriptors[]): $OptionDescriptors;
        static EMPTY: $OptionDescriptors;
        [Symbol.iterator](): Iterator<$OptionDescriptor>
    }
    export interface $OptionDescriptors extends $Iterable<$OptionDescriptor> {
        get(optionName: string): $OptionDescriptor;
        iterator(): $Iterator<$OptionDescriptor>;
        [Symbol.iterator](): Iterator<$OptionDescriptor>
    }
    export class $OptionDescriptor {
        getName(): string;
        getKey(): $OptionKey<never>;
        static newBuilder<T>(key: $OptionKey<T>, name: string): $OptionDescriptor$Builder;
        isDeprecated(): boolean;
        getCategory(): $OptionCategory;
        isConstant(): boolean;
        getHelp(): string;
        isOptionMap(): boolean;
        getStability(): $OptionStability;
        getUsageSyntax(): string;
        getDeprecationMessage(): string;
        get name(): string;
        get key(): $OptionKey<never>;
        get deprecated(): boolean;
        get category(): $OptionCategory;
        get constant(): boolean;
        get help(): string;
        get optionMap(): boolean;
        get stability(): $OptionStability;
        get usageSyntax(): string;
        get deprecationMessage(): string;
    }
}
