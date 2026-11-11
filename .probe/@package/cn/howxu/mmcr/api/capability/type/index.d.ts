import { $IOType, $IOType_ } from "@package/cn/howxu/mmcr/util";
import { $CapabilityDirections, $MachineCapability, $CapabilityHost, $CapabilityHost_, $CapabilityDirections_, $CapabilityType, $CapabilityType_ } from "@package/cn/howxu/mmcr/api/capability";
import { $PortTierPolicy_, $PortTierPolicy } from "@package/cn/howxu/mmcr/api/port";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Runnable, $Class } from "@package/java/lang";

declare module "@package/cn/howxu/mmcr/api/capability/type" {
    export class $CapabilityBinding extends $Record {
        type(): $CapabilityType;
        factory(): $CapabilityFactory;
        supports(tier: number): boolean;
        /**
         * @deprecated
         */
        ioType(): $IOType;
        directions(): $CapabilityDirections;
        tierPolicy(): $PortTierPolicy;
        static internalOnly(type: $CapabilityType_, directions: $CapabilityDirections_, factory: $CapabilityFactory_, tierPolicy: $PortTierPolicy_): $CapabilityBinding;
        nativeTransferExposure(): boolean;
        externalExposure(): ($CapabilityBinding$ExternalExposure<never>) | undefined;
        constructor(type: $CapabilityType_, directions: $CapabilityDirections_, factory: $CapabilityFactory_, tierPolicy: $PortTierPolicy_, externalExposure: $CapabilityBinding$ExternalExposure_<never>);
        constructor(type: $CapabilityType_, directions: $CapabilityDirections_, factory: $CapabilityFactory_, tierPolicy: $PortTierPolicy_, nativeTransferExposure: boolean);
        /**
         * @deprecated
         */
        constructor(type: $CapabilityType_, ioType: $IOType_, factory: $CapabilityFactory_, tierPolicy: $PortTierPolicy_, externalExposure: $CapabilityBinding$ExternalExposure_<never>);
        constructor(type: $CapabilityType_, directions: $CapabilityDirections_, factory: $CapabilityFactory_, tierPolicy: $PortTierPolicy_, externalExposure: ($CapabilityBinding$ExternalExposure_<never>) | undefined, nativeTransferExposure: boolean);
        constructor(type: $CapabilityType_, directions: $CapabilityDirections_, factory: $CapabilityFactory_, tierPolicy: $PortTierPolicy_);
        constructor(type: $CapabilityType_, directions: $CapabilityDirections_, factory: $CapabilityFactory_, tierPolicy: $PortTierPolicy_, externalExposure: ($CapabilityBinding$ExternalExposure_<never>) | undefined);
        /**
         * @deprecated
         */
        constructor(type: $CapabilityType_, ioType: $IOType_, factory: $CapabilityFactory_, tierPolicy: $PortTierPolicy_);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityBinding}.
     */
    export type $CapabilityBinding_ = { tierPolicy?: $PortTierPolicy_, type?: $CapabilityType_, factory?: $CapabilityFactory_, nativeTransferExposure?: boolean, directions?: $CapabilityDirections_, externalExposure?: ($CapabilityBinding$ExternalExposure_<never>) | undefined,  } | [tierPolicy?: $PortTierPolicy_, type?: $CapabilityType_, factory?: $CapabilityFactory_, nativeTransferExposure?: boolean, directions?: $CapabilityDirections_, externalExposure?: ($CapabilityBinding$ExternalExposure_<never>) | undefined, ];
    export class $CapabilityCreationContext {
    }
    export interface $CapabilityCreationContext {
        host(): $CapabilityHost;
        service<T>(serviceType: $Class<T>): (T) | undefined;
        ioType(): $IOType;
        onChanged(): $Runnable;
        directions(): $CapabilityDirections;
    }
    export class $CapabilityBinding$ExternalExposure<T> extends $Record {
        id(): $ResourceLocation;
        valueType(): $Class<T>;
        resolver(): $CapabilityBinding$Resolver<T>;
        constructor(id: $ResourceLocation_, valueType: $Class<T>, resolver: $CapabilityBinding$Resolver_<T>);
    }
    /**
     * Values that may be interpreted as {@link $CapabilityBinding$ExternalExposure}.
     */
    export type $CapabilityBinding$ExternalExposure_<T> = { resolver?: $CapabilityBinding$Resolver_<any>, valueType?: $Class<any>, id?: $ResourceLocation_,  } | [resolver?: $CapabilityBinding$Resolver_<any>, valueType?: $Class<any>, id?: $ResourceLocation_, ];
    export class $CapabilityBinding$Resolver<T> {
    }
    export interface $CapabilityBinding$Resolver<T> {
        resolve(host: $CapabilityHost_, ioType: $IOType_, side: $Direction_): T;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityBinding$Resolver}.
     */
    export type $CapabilityBinding$Resolver_<T> = ((host: $CapabilityHost, ioType: $IOType, side: $Direction) => T);
    export class $CapabilityFactory {
    }
    export interface $CapabilityFactory {
        create(context: $CapabilityCreationContext): $MachineCapability;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityFactory}.
     */
    export type $CapabilityFactory_ = ((context: $CapabilityCreationContext) => $MachineCapability);
}
