import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleType_ } from "@package/net/minecraft/core/particles";

declare module "@package/mysticmods/roots/client/particle" {
    export class $IMixinParticleHolder {
    }
    export interface $IMixinParticleHolder extends $IParticleHolder {
        getParticle(arg0: $ParticleType_<never>, arg1: $IParticleTester_): $Particle;
        getParticle(arg0: $ParticleType_<never>): $Particle;
        setParticle(arg0: $ParticleType_<never>, arg1: $Particle): void;
        setParticle(arg0: $ParticleType_<never>, arg1: $Particle, arg2: $IParticleTester_): void;
        roots_1_21$getParticle(arg0: $ParticleType_<never>): $Particle;
        roots_1_21$getParticle(arg0: $ParticleType_<never>, arg1: $IParticleTester_): $Particle;
        roots_1_21$setParticle(arg0: $ParticleType_<never>, arg1: $Particle): void;
        roots_1_21$setParticle(arg0: $ParticleType_<never>, arg1: $Particle, arg2: $IParticleTester_): void;
    }
    export class $IParticleTester {
    }
    export interface $IParticleTester {
        test(arg0: $Particle): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IParticleTester}.
     */
    export type $IParticleTester_ = ((arg0: $Particle) => boolean);
    export class $IParticleHolder {
        static getHolder(arg0: $Level_, arg1: $BlockPos_): $IParticleHolder;
        static getHolder(arg0: $Entity): $IParticleHolder;
        static getHolder(arg0: number): $IParticleHolder;
    }
    export interface $IParticleHolder {
        getParticle(arg0: $ParticleType_<never>): $Particle;
        getParticle(arg0: $ParticleType_<never>, arg1: $IParticleTester_): $Particle;
        setParticle(arg0: $ParticleType_<never>, arg1: $Particle): void;
        setParticle(arg0: $ParticleType_<never>, arg1: $Particle, arg2: $IParticleTester_): void;
    }
}
