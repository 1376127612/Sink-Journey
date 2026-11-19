import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $HeatComponent } from "@package/com/denfop/componets";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
export * as simple from "@package/com/denfop/blockentity/mechanism/multimechanism/simple";

declare module "@package/com/denfop/blockentity/mechanism/multimechanism" {
    export class $IMultiMachine {
    }
    export interface $IMultiMachine {
        getTank(): $FluidTank;
        getHeat(): $HeatComponent;
        getTypeAudio(): $EnumTypeAudio;
        initiate(arg0: number): void;
        canoperate(arg0: number): boolean;
        getSize(arg0: number): number;
        consume(arg0: number): void;
        get tank(): $FluidTank;
        get heat(): $HeatComponent;
        get typeAudio(): $EnumTypeAudio;
    }
}
