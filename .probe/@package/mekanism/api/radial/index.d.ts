import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IRadialMode, $INestedRadialMode } from "@package/mekanism/api/radial/mode";
import { $List_, $List } from "@package/java/util";
export * as mode from "@package/mekanism/api/radial/mode";

declare module "@package/mekanism/api/radial" {
    export class $RadialData<MODE extends $IRadialMode> {
        index(arg0: $List_<MODE>, arg1: MODE): number;
        getIdentifier(): $ResourceLocation;
        getModes(): $List<MODE>;
        fromNetworkRepresentation(arg0: number): MODE;
        getNetworkRepresentation(arg0: MODE): number;
        getDefaultMode(arg0: $List_<MODE>): MODE;
        tryGetNetworkRepresentation(arg0: $IRadialMode): number;
        fromIdentifier(arg0: $ResourceLocation_): $INestedRadialMode;
        indexNullable(arg0: $List_<MODE>, arg1: MODE): number;
        get identifier(): $ResourceLocation;
        get modes(): $List<MODE>;
    }
}
