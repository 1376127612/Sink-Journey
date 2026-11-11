import { $PointerBase, $SignedWord, $WordBase } from "@package/org/graalvm/word";

declare module "@package/org/graalvm/nativeimage/c/type" {
    export class $WordPointer {
    }
    export interface $WordPointer extends $PointerBase {
        write(value: $WordBase): void;
        write(index: $SignedWord, value: $WordBase): void;
        write(index: number, value: $WordBase): void;
        read<T extends $WordBase>(): T;
        read<T extends $WordBase>(index: $SignedWord): T;
        read<T extends $WordBase>(index: number): T;
        addressOf(index: $SignedWord): $WordPointer;
        addressOf(index: number): $WordPointer;
    }
}
