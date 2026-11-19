import { $Object } from "@package/java/lang";

declare module "@package/com/alessandro/astages/api/time" {
    export class $ATime {
        getTimeString(): string;
        static of(object: $Object): $ATime;
        getTicks(): number;
        constructor(timeString: string);
        get timeString(): string;
        get ticks(): number;
    }
    export class $AMutableTime extends $ATime {
        static fromTicks(ticks: number): $AMutableTime;
        subtractTicks(ticks: number): boolean;
        getCurrentTicks(): number;
        getCurrentSeconds(): number;
        static fromFixed(time: $ATime): $AMutableTime;
        static fromFixed(timeString: string): $AMutableTime;
        get currentTicks(): number;
        get currentSeconds(): number;
    }
}
