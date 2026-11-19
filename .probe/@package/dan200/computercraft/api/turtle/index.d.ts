import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $UpgradeHandle, $UpgradeType, $UpgradeBase, $UpgradeData } from "@package/dan200/computercraft/api/upgrades";
import { $BlockPos, $BlockPos_, $Direction_, $Registry, $Direction } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Enum, $Object } from "@package/java/lang";
import { $MethodResult } from "@package/dan200/computercraft/api/lua";
import { $IPeripheral } from "@package/dan200/computercraft/api/peripheral";

declare module "@package/dan200/computercraft/api/turtle" {
    export class $TurtleCommand {
    }
    export interface $TurtleCommand {
        execute(arg0: $ITurtleAccess): $TurtleCommandResult;
    }
    /**
     * Values that may be interpreted as {@link $TurtleCommand}.
     */
    export type $TurtleCommand_ = ((arg0: $ITurtleAccess) => $TurtleCommandResult);
    export class $TurtleVerb extends $Enum<$TurtleVerb> {
        static values(): $TurtleVerb[];
        static valueOf(arg0: string): $TurtleVerb;
        static DIG: $TurtleVerb;
        static ATTACK: $TurtleVerb;
    }
    /**
     * Values that may be interpreted as {@link $TurtleVerb}.
     */
    export type $TurtleVerb_ = "dig" | "attack";
    export class $ITurtleAccess {
    }
    export interface $ITurtleAccess {
        playAnimation(arg0: $TurtleAnimation_): void;
        consumeFuel(arg0: number): boolean;
        getColour(): number;
        setColour(arg0: number): void;
        /**
         * @deprecated
         */
        getUpgradeData(arg0: $TurtleSide_): $DataComponentPatch;
        executeCommand(arg0: $TurtleCommand_): $MethodResult;
        getUpgradeWithData(arg0: $TurtleSide_): $UpgradeData<$ITurtleUpgrade>;
        getPeripheral(arg0: $TurtleSide_): $IPeripheral;
        setUpgrade(arg0: $TurtleSide_, arg1: $UpgradeData<$ITurtleUpgrade_>): void;
        getUpgrade(arg0: $TurtleSide_): $ITurtleUpgrade;
        getFuelLevel(): number;
        getFuelLimit(): number;
        setFuelLevel(arg0: number): void;
        addFuel(arg0: number): void;
        getSelectedSlot(): number;
        getUpgradeHandle(arg0: $TurtleSide_): $UpgradeHandle<$ITurtleUpgrade>;
        /**
         * @deprecated
         */
        setUpgradeData(arg0: $TurtleSide_, arg1: $DataComponentPatch_): void;
        setSelectedSlot(arg0: number): void;
        getOwningPlayer(): $GameProfile;
        isFuelNeeded(): boolean;
        getPosition(): $BlockPos;
        getLevel(): $Level;
        getDirection(): $Direction;
        getInventory(): $Container;
        setDirection(arg0: $Direction_): void;
        isRemoved(): boolean;
        teleportTo(arg0: $Level_, arg1: $BlockPos_): boolean;
        get fuelLimit(): number;
        get owningPlayer(): $GameProfile;
        get fuelNeeded(): boolean;
        get position(): $BlockPos;
        get level(): $Level;
        get inventory(): $Container;
        get removed(): boolean;
    }
    export interface $ITurtleUpgrade extends RegistryMarked<RegistryTypes.ComputercraftTurtleUpgradeTag, RegistryTypes.ComputercraftTurtleUpgrade> {}
    export class $TurtleSide extends $Enum<$TurtleSide> {
        static values(): $TurtleSide[];
        static valueOf(arg0: string): $TurtleSide;
        static LEFT: $TurtleSide;
        static RIGHT: $TurtleSide;
    }
    /**
     * Values that may be interpreted as {@link $TurtleSide}.
     */
    export type $TurtleSide_ = "left" | "right";
    export class $ITurtleUpgrade {
        static createKey(arg0: $ResourceLocation_): $ResourceKey<$ITurtleUpgrade>;
        static typeRegistry(): $ResourceKey<$Registry<$UpgradeType<$ITurtleUpgrade>>>;
        static REGISTRY: $ResourceKey<$Registry<$ITurtleUpgrade>>;
    }
    export interface $ITurtleUpgrade extends $UpgradeBase {
        getUpgradeType(): $TurtleUpgradeType;
        createPeripheral(arg0: $ITurtleAccess, arg1: $TurtleSide_): $IPeripheral;
        useTool(arg0: $ITurtleAccess, arg1: $TurtleSide_, arg2: $TurtleVerb_, arg3: $Direction_): $TurtleCommandResult;
        getPersistedData(arg0: $DataComponentPatch_): $DataComponentPatch;
        update(arg0: $ITurtleAccess, arg1: $TurtleSide_): void;
        getType(): $UpgradeType<$ITurtleUpgrade>;
        get upgradeType(): $TurtleUpgradeType;
        get type(): $UpgradeType<$ITurtleUpgrade>;
    }
    /**
     * Values that may be interpreted as {@link $ITurtleUpgrade}.
     */
    export type $ITurtleUpgrade_ = RegistryTypes.ComputercraftTurtleUpgrade;
    export class $TurtleCommandResult {
        isSuccess(): boolean;
        static failure(arg0: string): $TurtleCommandResult;
        static failure(): $TurtleCommandResult;
        getErrorMessage(): string;
        static success(arg0: $Object[]): $TurtleCommandResult;
        static success(): $TurtleCommandResult;
        getResults(): $Object[];
        get errorMessage(): string;
        get results(): $Object[];
    }
    export class $TurtleUpgradeType extends $Enum<$TurtleUpgradeType> {
        isPeripheral(): boolean;
        isTool(): boolean;
        static values(): $TurtleUpgradeType[];
        static valueOf(arg0: string): $TurtleUpgradeType;
        static PERIPHERAL: $TurtleUpgradeType;
        static BOTH: $TurtleUpgradeType;
        static TOOL: $TurtleUpgradeType;
        get peripheral(): boolean;
        get tool(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TurtleUpgradeType}.
     */
    export type $TurtleUpgradeType_ = "tool" | "peripheral" | "both";
    export class $TurtleAnimation extends $Enum<$TurtleAnimation> {
        static values(): $TurtleAnimation[];
        static valueOf(arg0: string): $TurtleAnimation;
        static TURN_RIGHT: $TurtleAnimation;
        static SWING_LEFT_TOOL: $TurtleAnimation;
        static MOVE_UP: $TurtleAnimation;
        static MOVE_DOWN: $TurtleAnimation;
        static TURN_LEFT: $TurtleAnimation;
        static MOVE_BACK: $TurtleAnimation;
        static MOVE_FORWARD: $TurtleAnimation;
        static NONE: $TurtleAnimation;
        static SWING_RIGHT_TOOL: $TurtleAnimation;
        static WAIT: $TurtleAnimation;
        static SHORT_WAIT: $TurtleAnimation;
    }
    /**
     * Values that may be interpreted as {@link $TurtleAnimation}.
     */
    export type $TurtleAnimation_ = "none" | "move_forward" | "move_back" | "move_up" | "move_down" | "turn_left" | "turn_right" | "swing_left_tool" | "swing_right_tool" | "wait" | "short_wait";
}
