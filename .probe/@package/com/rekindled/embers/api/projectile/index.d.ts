import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Color } from "@package/java/awt";
import { $Vec3_, $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/rekindled/embers/api/projectile" {
    export class $IProjectilePreset {
    }
    export interface $IProjectilePreset {
        getVelocity(): $Vec3;
        getPos(): $Vec3;
        shoot(arg0: $Level_): void;
        setVelocity(arg0: $Vec3_): void;
        setEffect(arg0: $IProjectileEffect): void;
        getColorId(): $ResourceLocation;
        getShooter(): $Entity;
        /**
         * @deprecated
         */
        setColor(arg0: $Color): void;
        setColor(arg0: $Vector3f): void;
        setColor(arg0: $ResourceLocation_): void;
        getEntity(): $Entity;
        setPos(arg0: $Vec3_): void;
        getEffect(): $IProjectileEffect;
        getColor(): $Vector3f;
        get colorId(): $ResourceLocation;
        get shooter(): $Entity;
        get entity(): $Entity;
    }
    export class $IProjectileEffect {
    }
    export interface $IProjectileEffect {
        onFizzle(arg0: $Level_, arg1: $Vec3_, arg2: $IProjectilePreset): void;
        onBlockImpact(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $IProjectilePreset): void;
        onEntityImpact(arg0: $Entity, arg1: $IProjectilePreset): void;
        onHit(arg0: $Level_, arg1: $HitResult, arg2: $IProjectilePreset): void;
    }
}
