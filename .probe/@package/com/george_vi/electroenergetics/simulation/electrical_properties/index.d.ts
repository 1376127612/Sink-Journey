
declare module "@package/com/george_vi/electroenergetics/simulation/electrical_properties" {
    export class $MicroTickingElectricalProperties extends $ElectricalProperties {
        tick(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
        afterTick(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
        static MILlI: $ElectricalProperties;
        static INFINITE_CONDUCTANCE: $ElectricalProperties;
        static ZERO_CONDUCTANCE: $ElectricalProperties;
        static HUNDRED_MILlI: $ElectricalProperties;
        static TEN_MILlI: $ElectricalProperties;
        isForcedVoltageSource: boolean;
        constructor();
    }
    export class $ElectricalProperties {
        invert(): $ElectricalProperties;
        resistance(): number;
        currentSource(): number;
        static resistor(arg0: number): $ElectricalProperties;
        isSimpleResistor(): boolean;
        isVoltageSource(): boolean;
        voltageSource(): number;
        conductance(): number;
        static fromThevenin(arg0: number, arg1: number): $ElectricalProperties;
        isCurrentSource(): boolean;
        static MILlI: $ElectricalProperties;
        static INFINITE_CONDUCTANCE: $ElectricalProperties;
        static ZERO_CONDUCTANCE: $ElectricalProperties;
        static HUNDRED_MILlI: $ElectricalProperties;
        static TEN_MILlI: $ElectricalProperties;
        isForcedVoltageSource: boolean;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
        get simpleResistor(): boolean;
    }
}
