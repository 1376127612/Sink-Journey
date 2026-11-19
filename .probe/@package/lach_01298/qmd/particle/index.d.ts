import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Map_, $HashMap } from "@package/java/util";

declare module "@package/lach_01298/qmd/particle" {
    export class $Particle {
        getCharge(): number;
        setAntiParticle(arg0: $Particle): void;
        getAntiParticle(): $Particle;
        interactsWithEM(): boolean;
        interactsWithWeak(): boolean;
        getMass(): number;
        addComponentParticle(arg0: $Particle): void;
        addComponentParticle(arg0: $Particle, arg1: number): void;
        interactsWithStrong(): boolean;
        setComponentParticles(arg0: $Map_<$Particle, number>): void;
        getComponentParticles(): $HashMap<$Particle, number>;
        hasComponentParticles(): boolean;
        getName(): string;
        getSpin(): number;
        getTexture(): $ResourceLocation;
        getUnlocalizedName(): string;
        constructor(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean);
        constructor(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: boolean);
        constructor(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number);
        get charge(): number;
        get mass(): number;
        get name(): string;
        get spin(): number;
        get texture(): $ResourceLocation;
        get unlocalizedName(): string;
    }
    export class $ParticleStack {
        getAmount(): number;
        setAmount(arg0: number): void;
        addAmount(arg0: number): void;
        getParticle(): $Particle;
        setParticle(arg0: $Particle): void;
        readFromNBT(arg0: $CompoundTag_): void;
        removeAmount(arg0: number): void;
        getFocus(): number;
        matchesType(arg0: $ParticleStack): boolean;
        getMeanEnergy(): number;
        setMeanEnergy(arg0: number): void;
        static getParticleStack(arg0: string, arg1: number, arg2: number, arg3: number): $ParticleStack;
        addMeanEnergy(arg0: number): void;
        addFocus(arg0: number): void;
        setFocus(arg0: number): void;
        static loadParticleStackFromNBT(arg0: $CompoundTag_): $ParticleStack;
        isEmpty(): boolean;
        copy(): $ParticleStack;
        isInRange(arg0: $ParticleStack, arg1: number): boolean;
        writeToNBT(arg0: $CompoundTag_): $CompoundTag;
        constructor(arg0: $Particle, arg1: number, arg2: number);
        constructor(arg0: $Particle, arg1: number);
        constructor(arg0: $Particle, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Particle);
        constructor();
        get empty(): boolean;
    }
}
