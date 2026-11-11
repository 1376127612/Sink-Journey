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
        getChannel(arg0: number): $Channel;
        getPos(): $BlockPos;
        getPlayer(): string;
        getWorld(): $Level;
        getTank(): $Fluids$InternalFluidTank;
        getEnergy(): $Energy;
        getChannels(): $List<$Channel>;
        getSlotItem(): $Inventory;
        get pos(): $BlockPos;
        get player(): string;
        get world(): $Level;
        get tank(): $Fluids$InternalFluidTank;
        get energy(): $Energy;
        get channels(): $List<$Channel>;
        get slotItem(): $Inventory;
    }
    export class $Channel {
        isPrivate(): boolean;
        isActive(): boolean;
        getChannel(): number;
        setActive(arg0: boolean): void;
        setMode(arg0: $TypeMode_): void;
        getMode(): $TypeMode;
        getPos(): $BlockPos;
        setPos(arg0: $BlockPos_): void;
        writeNBT(): $CompoundTag;
        setTesseract(arg0: $ITesseract): void;
        getTypeChannel(): $TypeChannel;
        setTypeChannel(arg0: $TypeChannel_): void;
        setPrivate(arg0: boolean): void;
        getTesseract(): $ITesseract;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: number, arg1: $TypeMode_, arg2: $TypeChannel_, arg3: boolean);
        constructor(arg0: number, arg1: $ITesseract, arg2: $TypeMode_, arg3: $TypeChannel_, arg4: boolean);
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
