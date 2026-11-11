import { $IntFunction_ } from "@package/java/util/function";

declare module "@package/codechicken/lib/render/pipeline/attribute" {
    export class $AttributeKey<T> {
        copy(arg0: T, arg1: number): T;
        static create<T>(arg0: string, arg1: $IntFunction_<T>): $AttributeKey<T>;
        createDefault(arg0: number): T;
        copyRange(arg0: T, arg1: number, arg2: T, arg3: number, arg4: number): T;
        operationIndex: number;
        attributeKeyIndex: number;
        constructor(arg0: string);
    }
}
