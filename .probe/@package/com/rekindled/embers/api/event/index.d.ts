import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IProjectilePreset } from "@package/com/rekindled/embers/api/projectile";
import { $EquipmentSlot, $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/rekindled/embers/api/event" {
    export class $ScaleEvent extends $Event {
        getEntity(): $LivingEntity;
        getDamage(): number;
        getDamageSource(): $DamageSource;
        getScaleDamageRate(): number;
        setScalePassRate(arg0: number): void;
        setScaleDamageRate(arg0: number): void;
        getScalePassRate(): number;
        constructor(arg0: $LivingEntity, arg1: number, arg2: $DamageSource_, arg3: number, arg4: number);
        get entity(): $LivingEntity;
        get damage(): number;
        get damageSource(): $DamageSource;
    }
    export class $ItemVisualEvent extends $Event {
        setNoSound(): void;
        getSlot(): $EquipmentSlot;
        getItem(): $ItemStack;
        setColor(arg0: $Vector3f): void;
        getEntity(): $LivingEntity;
        setSound(arg0: $SoundEvent_): void;
        getColor(): $Vector3f;
        getPitch(): number;
        getVolume(): number;
        getSound(): $SoundEvent;
        setPitch(arg0: number): void;
        hasParticles(): boolean;
        setVolume(arg0: number): void;
        hasSound(): boolean;
        getUseState(): string;
        setNoParticles(): void;
        constructor(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: $Vector3f, arg4: $SoundEvent_, arg5: number, arg6: number, arg7: string);
        get slot(): $EquipmentSlot;
        get item(): $ItemStack;
        get entity(): $LivingEntity;
        get useState(): string;
    }
    export class $EmberRemoveEvent extends $Event {
        getFinal(): number;
        setAmount(arg0: number): void;
        getOriginal(): number;
        getPlayer(): $Player;
        getAmount(): number;
        addReduction(arg0: number): void;
        constructor(arg0: $Player, arg1: number);
        get final(): number;
        get original(): number;
        get player(): $Player;
    }
    export class $InfoGogglesEvent extends $Event {
        getPlayer(): $Player;
        shouldDisplay(): boolean;
        setShouldDisplay(arg0: boolean): void;
        constructor(arg0: $Player, arg1: boolean);
        get player(): $Player;
    }
    export class $EmberProjectileEvent extends $Event implements $ICancellableEvent {
        getStack(): $ItemStack;
        getCharge(): number;
        getProjectiles(): $List<$IProjectilePreset>;
        getShooter(): $LivingEntity;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: $List_<$IProjectilePreset>);
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, ...arg3: $IProjectilePreset[]);
        get stack(): $ItemStack;
        get charge(): number;
        get projectiles(): $List<$IProjectilePreset>;
        get shooter(): $LivingEntity;
    }
}
