import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $List } from "@package/java/util";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Vector3, $ColorWrapper } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Enum } from "@package/java/lang";
import { $EntityCapability, $BlockCapability, $ItemCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as binding from "@package/hellfirepvp/astralsorcery/common/lumen/binding";
export * as capability from "@package/hellfirepvp/astralsorcery/common/lumen/capability";

declare module "@package/hellfirepvp/astralsorcery/common/lumen" {
    export class $Lumen implements $LumenLike {
        getName(): $Component;
        stack(arg0: number): $LumenStack;
        getRegistryKey(): ($ResourceKey<$Lumen>) | undefined;
        getHolder(): ($Holder<$Lumen>) | undefined;
        getColor(arg0: $Level_, arg1: $Vector3): $ColorWrapper;
        getColor(arg0: $Level_, arg1: $BlockPos_): $ColorWrapper;
        getColor(arg0: number): $ColorWrapper;
        getHoverName(): $Component;
        asLumen(): $Lumen;
        maySee(arg0: $Level_, arg1: $PlayerProgress): boolean;
        isElementary(): boolean;
        constructor(arg0: $ColorWrapper);
        constructor(arg0: $ColorWrapper, arg1: boolean);
        get name(): $Component;
        get registryKey(): ($ResourceKey<$Lumen>) | undefined;
        get holder(): ($Holder<$Lumen>) | undefined;
        get hoverName(): $Component;
        get elementary(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Lumen}.
     */
    export type $Lumen_ = RegistryTypes.AstralsorceryLumen;
    export class $LumenStack {
        isEmpty(): boolean;
        static of(arg0: $Lumen_, arg1: number): $LumenStack;
        copy(): $LumenStack;
        is(arg0: $Lumen_): boolean;
        is(arg0: $Supplier_<$Lumen>): boolean;
        grow(arg0: number): void;
        setAmount(arg0: number): void;
        shrink(arg0: number): void;
        getAmount(): number;
        getLumen(): $Lumen;
        copyWithAmount(arg0: number): $LumenStack;
        isSameLumen(arg0: $LumenStack): boolean;
        static CODEC: $Codec<$LumenStack>;
        static FLASK_VALUE: number;
        static EMPTY: $LumenStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LumenStack>;
        get empty(): boolean;
        get lumen(): $Lumen;
    }
    export class $ILumenHandler {
        static voiding(): $ILumenHandler;
        static ITEM: $ItemCapability<$ILumenHandler, void>;
        static ENTITY: $EntityCapability<$ILumenHandler, void>;
        static BLOCK: $BlockCapability<$ILumenHandler, $Direction>;
    }
    export interface $ILumenHandler {
        isEmpty(): boolean;
        fill(arg0: $LumenStack, arg1: $ILumenHandler$Action_): number;
        contains(arg0: $LumenLike_): boolean;
        getCapacity(arg0: $LumenLike_): number;
        drain(arg0: $LumenLike_, arg1: number, arg2: $ILumenHandler$Action_): $LumenStack;
        drain(arg0: $LumenStack, arg1: $ILumenHandler$Action_): $LumenStack;
        getContainedLumen(arg0: $LumenLike_): ($LumenStack) | undefined;
        getContainedLumen(): $List<$LumenStack>;
        get empty(): boolean;
    }
    export class $LumenLike {
    }
    export interface $LumenLike {
        asLumen(): $Lumen;
    }
    /**
     * Values that may be interpreted as {@link $LumenLike}.
     */
    export type $LumenLike_ = (() => $Lumen_);
    export class $ILumenHandler$Action extends $Enum<$ILumenHandler$Action> {
        static values(): $ILumenHandler$Action[];
        static valueOf(arg0: string): $ILumenHandler$Action;
        isSimulate(): boolean;
        static EXECUTE: $ILumenHandler$Action;
        static SIMULATE: $ILumenHandler$Action;
        get simulate(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ILumenHandler$Action}.
     */
    export type $ILumenHandler$Action_ = "simulate" | "execute";
    export interface $Lumen extends RegistryMarked<RegistryTypes.AstralsorceryLumenTag, RegistryTypes.AstralsorceryLumen> {}
}
