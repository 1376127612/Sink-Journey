import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionResult, $InteractionResult_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Holder, $Holder$Reference } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/de/dafuqs/spectrum/api/pastel_network" {
    export class $PastelUpgradeable {
    }
    export interface $PastelUpgradeable {
        markTriggerTransfer(): void;
        notifySensor(): void;
        markTriggered(): void;
        isTriggerTransfer(): boolean;
        markLamp(): void;
        markLit(): void;
        isSensor(): boolean;
        markSensor(): void;
        apply(arg0: $PastelUpgradeSignature_, arg1: $PastelUpgradeSignature_): void;
        applySignature(arg0: $PastelUpgradeSignature_): void;
        get triggerTransfer(): boolean;
        get sensor(): boolean;
    }
    export class $PastelUpgradeSignature {
        goesToRedstoneRing(): boolean;
        outerRing(): $ResourceLocation;
        innerRing(): $ResourceLocation;
        static of(arg0: $Level_, arg1: $Item_): $Holder$Reference<$PastelUpgradeSignature>;
        redstoneBehavior: $PastelUpgradeSignature$RedstoneBehavior;
        static CODEC: $Codec<$PastelUpgradeSignature>;
        upgradeItem: $Holder<$Item>;
        lamp: boolean;
        static INNER_RING_BASE_PATH: string;
        static REDSTONE_RING_BASE_PATH: string;
        triggerTransfer: boolean;
        static OUTER_RING_BASE_PATH: string;
        transferCountMultiplier: number;
        preProcessor: $PastelUpgradeSignature$RedstoneStateModifier;
        light: boolean;
        name: string;
        additionalFilterRows: number;
        sensor: boolean;
        postProcessor: $PastelUpgradeSignature$RedstoneStateModifier;
        transferDurationMultiplier: number;
        transferCooldownMultiplier: number;
    }
    /**
     * Values that may be interpreted as {@link $PastelUpgradeSignature}.
     */
    export type $PastelUpgradeSignature_ = RegistryTypes.SpectrumPastelUpgrade;
    export class $PastelUpgradeSignature$RedstoneStateModifier {
        static PASS: $PastelUpgradeSignature$RedstoneStateModifier;
    }
    export interface $PastelUpgradeSignature$RedstoneStateModifier {
        apply(arg0: $PastelUpgradeSignature$RedstoneContext_): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $PastelUpgradeSignature$RedstoneStateModifier}.
     */
    export type $PastelUpgradeSignature$RedstoneStateModifier_ = ((arg0: $PastelUpgradeSignature$RedstoneContext) => $InteractionResult_);
    export class $PastelUpgradeSignature$RedstoneContext extends $Record {
        upgradeable(): $PastelUpgradeable;
        pos(): $BlockPos;
        active(): boolean;
        world(): $Level;
        constructor(upgradeable: $PastelUpgradeable, world: $Level_, pos: $BlockPos_, active: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PastelUpgradeSignature$RedstoneContext}.
     */
    export type $PastelUpgradeSignature$RedstoneContext_ = { pos?: $BlockPos_, world?: $Level_, active?: boolean, upgradeable?: $PastelUpgradeable,  } | [pos?: $BlockPos_, world?: $Level_, active?: boolean, upgradeable?: $PastelUpgradeable, ];
    export class $PastelUpgradeSignature$RedstoneBehavior extends $Enum<$PastelUpgradeSignature$RedstoneBehavior> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $PastelUpgradeSignature$RedstoneBehavior[];
        static valueOf(arg0: string): $PastelUpgradeSignature$RedstoneBehavior;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$PastelUpgradeSignature$RedstoneBehavior>;
        static ALWAYS_ACTIVE: $PastelUpgradeSignature$RedstoneBehavior;
        static SENSOR: $PastelUpgradeSignature$RedstoneBehavior;
        static INVERTED: $PastelUpgradeSignature$RedstoneBehavior;
        static LAMP: $PastelUpgradeSignature$RedstoneBehavior;
        static NONE: $PastelUpgradeSignature$RedstoneBehavior;
        static ALWAYS_INACTIVE: $PastelUpgradeSignature$RedstoneBehavior;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PastelUpgradeSignature$RedstoneBehavior}.
     */
    export type $PastelUpgradeSignature$RedstoneBehavior_ = "none" | "always_active" | "always_inactive" | "inverted" | "lamp" | "sensor";
    export interface $PastelUpgradeSignature extends RegistryMarked<RegistryTypes.SpectrumPastelUpgradeTag, RegistryTypes.SpectrumPastelUpgrade> {}
}
