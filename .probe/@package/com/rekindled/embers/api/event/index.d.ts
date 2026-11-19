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
        getDamage(): number;
        getDamageSource(): $DamageSource;
        getScalePassRate(): number;
        setScaleDamageRate(arg0: number): void;
        setScalePassRate(arg0: number): void;
        getScaleDamageRate(): number;
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: number, arg2: $DamageSource_, arg3: number, arg4: number);
        get damage(): number;
        get damageSource(): $DamageSource;
        get entity(): $LivingEntity;
    }
    export class $ItemVisualEvent extends $Event {
        setPitch(arg0: number): void;
        setSound(arg0: $SoundEvent_): void;
        hasParticles(): boolean;
        setNoSound(): void;
        setNoParticles(): void;
        getUseState(): string;
        getSlot(): $EquipmentSlot;
        getItem(): $ItemStack;
        setColor(arg0: $Vector3f): void;
        getEntity(): $LivingEntity;
        getColor(): $Vector3f;
        hasSound(): boolean;
        setVolume(arg0: number): void;
        getPitch(): number;
        getVolume(): number;
        getSound(): $SoundEvent;
        constructor(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: $Vector3f, arg4: $SoundEvent_, arg5: number, arg6: number, arg7: string);
        get useState(): string;
        get slot(): $EquipmentSlot;
        get item(): $ItemStack;
        get entity(): $LivingEntity;
    }
    export class $EmberRemoveEvent extends $Event {
        getAmount(): number;
        setAmount(arg0: number): void;
        addReduction(arg0: number): void;
        getFinal(): number;
        getPlayer(): $Player;
        getOriginal(): number;
        constructor(arg0: $Player, arg1: number);
        get final(): number;
        get player(): $Player;
        get original(): number;
    }
    export class $InfoGogglesEvent extends $Event {
        setShouldDisplay(arg0: boolean): void;
        getPlayer(): $Player;
        shouldDisplay(): boolean;
        constructor(arg0: $Player, arg1: boolean);
        get player(): $Player;
    }
    export class $EmberProjectileEvent extends $Event implements $ICancellableEvent {
        getCharge(): number;
        getShooter(): $LivingEntity;
        getProjectiles(): $List<$IProjectilePreset>;
        getStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: $List_<$IProjectilePreset>);
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, ...arg3: $IProjectilePreset[]);
        get charge(): number;
        get shooter(): $LivingEntity;
        get projectiles(): $List<$IProjectilePreset>;
        get stack(): $ItemStack;
    }
}
