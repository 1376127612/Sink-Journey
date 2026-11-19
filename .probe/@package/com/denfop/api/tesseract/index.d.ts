import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Inventory } from "@package/com/denfop/inventory";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Energy, $Fluids$InternalFluidTank } from "@package/com/denfop/componets";
export * as event from "@package/com/denfop/api/tesseract/event";

declare module "@package/com/denfop/api/tesseract" {
    export class $ITesseract {
    }
    export interface $ITesseract {
        getTank(): $Fluids$InternalFluidTank;
        getPos(): $BlockPos;
        getSlotItem(): $Inventory;
        getChannel(arg0: number): $Channel;
        getChannels(): $List<$Channel>;
        getPlayer(): string;
        getWorld(): $Level;
        getEnergy(): $Energy;
        get tank(): $Fluids$InternalFluidTank;
        get pos(): $BlockPos;
        get slotItem(): $Inventory;
        get channels(): $List<$Channel>;
        get player(): string;
        get world(): $Level;
        get energy(): $Energy;
    }
    export class $Channel {
        getPos(): $BlockPos;
        writeNBT(): $CompoundTag;
        setPrivate(arg0: boolean): void;
        getTypeChannel(): $TypeChannel;
        setTypeChannel(arg0: $TypeChannel_): void;
        setTesseract(arg0: $ITesseract): void;
        getTesseract(): $ITesseract;
        isPrivate(): boolean;
        isActive(): boolean;
        getChannel(): number;
        setPos(arg0: $BlockPos_): void;
        setMode(arg0: $TypeMode_): void;
        getMode(): $TypeMode;
        setActive(arg0: boolean): void;
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: number, arg1: $ITesseract, arg2: $TypeMode_, arg3: $TypeChannel_, arg4: boolean);
        constructor(arg0: number, arg1: $TypeMode_, arg2: $TypeChannel_, arg3: boolean);
        constructor(arg0: $CompoundTag_);
        get channel(): number;
    }
    export class $TypeChannel extends $Enum<$TypeChannel> {
        static values(): $TypeChannel[];
        static valueOf(arg0: string): $TypeChannel;
        static ITEM: $TypeChannel;
        static ENERGY: $TypeChannel;
        static FLUID: $TypeChannel;
        static NONE: $TypeChannel;
    }
    /**
     * Values that may be interpreted as {@link $TypeChannel}.
     */
    export type $TypeChannel_ = "item" | "fluid" | "energy" | "none";
    export class $TypeMode extends $Enum<$TypeMode> {
        static values(): $TypeMode[];
        static valueOf(arg0: string): $TypeMode;
        static INOUT: $TypeMode;
        static INPUT: $TypeMode;
        static OUTPUT: $TypeMode;
        static NONE: $TypeMode;
    }
    /**
     * Values that may be interpreted as {@link $TypeMode}.
     */
    export type $TypeMode_ = "input" | "output" | "inout" | "none";
}
