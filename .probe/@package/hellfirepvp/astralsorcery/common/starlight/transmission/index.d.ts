import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $Record } from "@package/java/lang";

declare module "@package/hellfirepvp/astralsorcery/common/starlight/transmission" {
    export class $StarlightTransmissionPacket extends $Record {
        amount(): number;
        constellation(): $BaseConstellation;
        withMultiplier(arg0: number): $StarlightTransmissionPacket;
        constructor(constellation: $BaseConstellation_, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $StarlightTransmissionPacket}.
     */
    export type $StarlightTransmissionPacket_ = { constellation?: $BaseConstellation_, amount?: number,  } | [constellation?: $BaseConstellation_, amount?: number, ];
}
