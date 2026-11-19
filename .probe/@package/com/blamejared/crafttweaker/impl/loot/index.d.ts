import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/blamejared/crafttweaker/impl/loot" {
    export class $ILootTableIdHolder$Mutable {
    }
    export interface $ILootTableIdHolder$Mutable extends $ILootTableIdHolder {
        crafttweaker$tableId(arg0: $ResourceLocation_): void;
    }
    export class $ILootTableIdHolder {
        static CRAFTTWEAKER$UNKNOWN_TABLE_ID: $ResourceLocation;
    }
    export interface $ILootTableIdHolder {
        crafttweaker$tableId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ILootTableIdHolder}.
     */
    export type $ILootTableIdHolder_ = (() => $ResourceLocation_);
}
