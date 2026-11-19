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
        getUsageSyntax(): string;
        getDeprecationMessage(): string;
        getHelp(): string;
        getStability(): $OptionStability;
        isOptionMap(): boolean;
        getName(): string;
        getKey(): $OptionKey<never>;
        isDeprecated(): boolean;
        static newBuilder<T>(key: $OptionKey<T>, name: string): $OptionDescriptor$Builder;
        getCategory(): $OptionCategory;
        isConstant(): boolean;
        get usageSyntax(): string;
        get deprecationMessage(): string;
        get help(): string;
        get stability(): $OptionStability;
        get optionMap(): boolean;
        get name(): string;
        get key(): $OptionKey<never>;
        get deprecated(): boolean;
        get category(): $OptionCategory;
        get constant(): boolean;
    }
}
