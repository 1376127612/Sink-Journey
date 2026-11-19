import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $HeldItemUIMenuType$HeldItemUI, $HeldItemUIMenuType$HeldItemUIHolder } from "@package/com/lowdragmc/lowdraglib2/gui/factory";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $IntFunction } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/lowdragmc/mbd2/common/item" {
    export class $MBDGadgetsItem$Mode extends $Enum<$MBDGadgetsItem$Mode> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $MBDGadgetsItem$Mode[];
        static valueOf(arg0: string): $MBDGadgetsItem$Mode;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$MBDGadgetsItem$Mode>;
        static RECIPE_DEBUGGER: $MBDGadgetsItem$Mode;
        static BY_ID: $IntFunction<$MBDGadgetsItem$Mode>;
        id: number;
        static MULTIBLOCK_DEBUGGER: $MBDGadgetsItem$Mode;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MBDGadgetsItem$Mode>;
        static MULTIBLOCK_BUILDER: $MBDGadgetsItem$Mode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MBDGadgetsItem$Mode}.
     */
    export type $MBDGadgetsItem$Mode_ = "recipe_debugger" | "multiblock_builder" | "multiblock_debugger";
    export class $MBDGadgetsItem extends $Item implements $HeldItemUIMenuType$HeldItemUI {
        getRecipe(arg0: $ItemStack_): $ResourceLocation;
        isRecipeDebugger(arg0: $ItemStack_): boolean;
        static setMode(arg0: $ItemStack_, arg1: $MBDGadgetsItem$Mode_): void;
        static getMode(arg0: $ItemStack_): $MBDGadgetsItem$Mode;
        setRecipe(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        isMultiblockDebugger(arg0: $ItemStack_): boolean;
        isMultiblockBuilder(arg0: $ItemStack_): boolean;
        createUI(arg0: $HeldItemUIMenuType$HeldItemUIHolder): $ModularUI;
        stillValid(arg0: $HeldItemUIMenuType$HeldItemUIHolder): boolean;
        createUIHolder(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_): $HeldItemUIMenuType$HeldItemUIHolder;
        getUIDisplayName(arg0: $HeldItemUIMenuType$HeldItemUIHolder): $Component;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static EMPTY_RECIPE: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
}
