import { $RoomUpgradeComponentEvent } from "@package/dev/compactmods/machines/api/room/upgrade/event";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $IForwardingAttachmentHolder } from "@package/dev/compactmods/machines/api/attachment";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $UUID, $List, $UUID_ } from "@package/java/util";
import { $AttachmentType, $IAttachmentHolder, $AttachmentType_ } from "@package/net/neoforged/neoforge/attachment";
import { $Predicate, $Predicate_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $RoomInstance, $RoomInstance_ } from "@package/dev/compactmods/machines/api/room";
export * as event from "@package/dev/compactmods/machines/api/room/upgrade/event";

declare module "@package/dev/compactmods/machines/api/room/upgrade" {
    export class $RoomUpgradeInstance extends $Record implements $IForwardingAttachmentHolder {
        upgradeItem(): $ItemStack;
        upgradeID(): $UUID;
        roomInstance(): $RoomInstance;
        attachmentHolder(): $Supplier<$IAttachmentHolder>;
        upgradeComponents(): $List<$RoomUpgradeComponent>;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        hasAttachments(): boolean;
        getData<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        hasData(arg0: $AttachmentType_<never>): boolean;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        syncData(arg0: $AttachmentType_<never>): void;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        constructor(roomInstance: $RoomInstance_, upgradeID: $UUID_, upgradeItem: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $RoomUpgradeInstance}.
     */
    export type $RoomUpgradeInstance_ = { upgradeID?: $UUID_, upgradeItem?: $ItemStack_, roomInstance?: $RoomInstance_,  } | [upgradeID?: $UUID_, upgradeItem?: $ItemStack_, roomInstance?: $RoomInstance_, ];
    export class $RoomUpgradeComponentType$Builder<T extends $RoomUpgradeComponent> {
        requiredFeatures(arg0: $FeatureFlagSet): $RoomUpgradeComponentType$Builder<T>;
        itemPredicate(arg0: $Predicate_<$ItemStack>): $RoomUpgradeComponentType$Builder<T>;
        build(): $RoomUpgradeComponentType<T>;
        constructor(arg0: $Supplier_<T>, arg1: $MapCodec_<T>);
    }
    export class $RoomUpgradeComponent {
    }
    export interface $RoomUpgradeComponent extends $TooltipProvider {
        gatherEvents(): $Stream<$RoomUpgradeComponentEvent>;
        getType(): $RoomUpgradeComponentType<never>;
        get type(): $RoomUpgradeComponentType<never>;
    }
    export interface $RoomUpgradeComponentType<T> extends RegistryMarked<RegistryTypes.CompactmachinesRoomUpgradesTag, RegistryTypes.CompactmachinesRoomUpgrades> {}
    export class $RoomUpgradeComponentType<T extends $RoomUpgradeComponent> extends $Record implements $FeatureElement {
        codec(): $MapCodec<T>;
        requiredFeatures(): $FeatureFlagSet;
        canApplyTo(arg0: $ItemStack_): boolean;
        itemstackFilter(): $Predicate<$ItemStack>;
        static builder<T extends $RoomUpgradeComponent>(arg0: $Supplier_<T>, arg1: $MapCodec_<T>): $RoomUpgradeComponentType$Builder<T>;
        "constructor"(): $Supplier<T>;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        static REGISTRY_KEY: $ResourceKey<$Registry<$RoomUpgradeComponentType<never>>>;
        constructor(arg0: $Supplier_<T>, codec: $MapCodec_<T>, requiredFeatures: $FeatureFlagSet, itemstackFilter: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $RoomUpgradeComponentType}.
     */
    export type $RoomUpgradeComponentType_<T> = RegistryTypes.CompactmachinesRoomUpgrades | { requiredFeatures?: $FeatureFlagSet, constructor?: $Supplier_<$RoomUpgradeComponent>, codec?: $MapCodec_<$RoomUpgradeComponent>, itemstackFilter?: $Predicate_<$ItemStack>,  } | [requiredFeatures?: $FeatureFlagSet, constructor?: $Supplier_<$RoomUpgradeComponent>, codec?: $MapCodec_<$RoomUpgradeComponent>, itemstackFilter?: $Predicate_<$ItemStack>, ];
}
