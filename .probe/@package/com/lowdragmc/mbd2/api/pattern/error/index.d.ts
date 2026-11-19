import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $MultiblockState } from "@package/com/lowdragmc/mbd2/api/pattern";

declare module "@package/com/lowdragmc/mbd2/api/pattern/error" {
    export class $PatternError {
        getCandidates(): $List<$List<$ItemStack>>;
        getPos(): $BlockPos;
        getWorld(): $Level;
        getErrorInfo(): $Component;
        setWorldState(arg0: $MultiblockState): void;
        constructor();
        get candidates(): $List<$List<$ItemStack>>;
        get pos(): $BlockPos;
        get world(): $Level;
        get errorInfo(): $Component;
        set worldState(value: $MultiblockState);
    }
}
