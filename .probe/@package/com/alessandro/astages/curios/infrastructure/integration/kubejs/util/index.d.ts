import { $Function_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/com/alessandro/astages/curios/infrastructure/integration/kubejs/util" {
    export class $KubeJSServerUtils {
        static setCurioMessage(arg0: $Function_<$ItemStack, $Component>, ...arg1: string[]): void;
        static setCanBeEquippedInCurioSlots(arg0: boolean, ...arg1: string[]): void;
        constructor();
    }
}
