import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Particle, $ParticleStack } from "@package/lach_01298/qmd/particle";
import { $KubeStartupEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/lach_01298/qmd/compat/kubejs" {
    export class $QMDParticles {
        static stack(arg0: string, arg1: number): $ParticleStack;
        static stack(arg0: string, arg1: number, arg2: number): $ParticleStack;
        static stack(arg0: string, arg1: number, arg2: number, arg3: number): $ParticleStack;
        static stack(arg0: string, arg1: number, arg2: string, arg3: number): $ParticleStack;
        static stack(arg0: string): $ParticleStack;
        static get(arg0: string): $Particle;
        static names(): $List<string>;
        static catalog(): $List<$Particle>;
    }
    export class $QMDStartupRegistrationEvent implements $KubeStartupEvent {
        particle(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): void;
        particle(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): void;
        itemSource(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): void;
        itemSource(arg0: string, arg1: number, arg2: number): void;
        antiparticles(arg0: string, arg1: string): void;
        componentParticle(arg0: string, arg1: string): void;
        componentParticle(arg0: string, arg1: string, arg2: number): void;
        emptyItemSource(arg0: string, arg1: string): void;
        acceleratorCooler(arg0: string, arg1: number, arg2: string): void;
        acceleratorRfCavity(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        particleChamberDetector(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        vacuumChamberHeater(arg0: string, arg1: number, arg2: string): void;
        liquefierCompressor(arg0: string, arg1: number, arg2: number): void;
        ionSource(arg0: string, arg1: number, arg2: number, arg3: number): void;
        acceleratorMagnet(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
}
