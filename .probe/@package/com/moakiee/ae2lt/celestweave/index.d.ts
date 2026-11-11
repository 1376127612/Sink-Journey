
declare module "@package/com/moakiee/ae2lt/celestweave" {
    export class $PhaseFlightPlayerState$Access {
    }
    export interface $PhaseFlightPlayerState$Access {
        ae2lt$setPhaseJumpHeld(arg0: boolean): void;
        ae2lt$getVanillaFlying(): boolean;
        ae2lt$setPhaseFlightLocked(arg0: boolean): void;
        ae2lt$isPhaseFlightLocked(): boolean;
        ae2lt$isPhaseFlying(): boolean;
        ae2lt$setPhaseFlying(arg0: boolean): void;
        ae2lt$isPhaseJumpHeld(): boolean;
        ae2lt$setVanillaFlying(arg0: boolean): void;
        ae2lt$isPhaseFlightControlled(): boolean;
        ae2lt$setPhaseFlightControlled(arg0: boolean): void;
    }
    export class $PhaseFlightPlayerState$ClientAccess {
    }
    export interface $PhaseFlightPlayerState$ClientAccess {
        ae2lt$isLocalClientPlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PhaseFlightPlayerState$ClientAccess}.
     */
    export type $PhaseFlightPlayerState$ClientAccess_ = (() => boolean);
}
