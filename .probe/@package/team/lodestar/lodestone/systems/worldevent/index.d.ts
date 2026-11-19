import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $UUID } from "@package/java/util";

declare module "@package/team/lodestar/lodestone/systems/worldevent" {
    export class $WorldEventType$EventInstanceSupplier<T extends $WorldEventInstance> {
    }
    export interface $WorldEventType$EventInstanceSupplier<T extends $WorldEventInstance> {
        getInstance(): T;
        get instance(): T;
    }
    /**
     * Values that may be interpreted as {@link $WorldEventType$EventInstanceSupplier}.
     */
    export type $WorldEventType$EventInstanceSupplier_<T> = (() => T);
    export class $WorldEventRenderer<T extends $WorldEventInstance> {
        canRender(arg0: T): boolean;
        render(arg0: T, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number): void;
        constructor();
    }
    export interface $WorldEventType extends RegistryMarked<RegistryTypes.LodestoneWorldEventTypeTag, RegistryTypes.LodestoneWorldEventType> {}
    export class $WorldEventType {
        createInstance(arg0: $CompoundTag_): $WorldEventInstance;
        isClientSynced(): boolean;
        clientSynced: boolean;
        supplier: $WorldEventType$EventInstanceSupplier<never>;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $WorldEventType$EventInstanceSupplier_<never>, arg2: boolean);
        constructor(arg0: $ResourceLocation_, arg1: $WorldEventType$EventInstanceSupplier_<never>);
    }
    /**
     * Values that may be interpreted as {@link $WorldEventType}.
     */
    export type $WorldEventType_ = RegistryTypes.LodestoneWorldEventType;
    export class $WorldEventInstance {
        setDirty(): void;
        deserializeNBT(arg0: $CompoundTag_): $WorldEventInstance;
        serializeNBT(): $CompoundTag;
        end(arg0: $Level_): void;
        start(arg0: $Level_): void;
        isFrozen(): boolean;
        static sync<T extends $WorldEventInstance>(arg0: T): void;
        static sync<T extends $WorldEventInstance>(arg0: T, arg1: $ServerPlayer): void;
        sync(arg0: $Level_): void;
        tick(arg0: $Level_): void;
        getLevel(): $Level;
        synchronizeNBT(): $CompoundTag;
        dirty: boolean;
        discarded: boolean;
        level: $Level;
        frozen: boolean;
        type: $WorldEventType;
        uuid: $UUID;
        constructor(arg0: $WorldEventType_);
    }
}
