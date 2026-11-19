import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IRadialMode, $INestedRadialMode } from "@package/mekanism/api/radial/mode";
import { $List_, $List } from "@package/java/util";
export * as mode from "@package/mekanism/api/radial/mode";

declare module "@package/mekanism/api/radial" {
    export class $RadialData<MODE extends $IRadialMode> {
        getModes(): $List<MODE>;
        indexNullable(arg0: $List_<MODE>, arg1: MODE): number;
        fromIdentifier(arg0: $ResourceLocation_): $INestedRadialMode;
        tryGetNetworkRepresentation(arg0: $IRadialMode): number;
        getDefaultMode(arg0: $List_<MODE>): MODE;
        index(arg0: $List_<MODE>, arg1: MODE): number;
        getIdentifier(): $ResourceLocation;
        fromNetworkRepresentation(arg0: number): MODE;
        getNetworkRepresentation(arg0: MODE): number;
        get modes(): $List<MODE>;
        get identifier(): $ResourceLocation;
    }
}
