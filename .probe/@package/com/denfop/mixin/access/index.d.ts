import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeType_, $RecipeHolder_, $RecipeHolder, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $RenderBuffers } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Multimap } from "@package/com/google/common/collect";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChannelAccess$ChannelHandle, $SoundEngine, $SoundEventListener, $SoundEventListener_ } from "@package/net/minecraft/client/sounds";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Slot } from "@package/net/minecraft/world/inventory";

declare module "@package/com/denfop/mixin/access" {
    export class $RecipeManagerAccessor {
    }
    export interface $RecipeManagerAccessor {
        getByType(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        get byType(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeManagerAccessor}.
     */
    export type $RecipeManagerAccessor_ = (() => $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>);
    export class $RenderChunkRegionAccessor {
    }
    export interface $RenderChunkRegionAccessor {
        getLevel(): $Level;
        get level(): $Level;
    }
    /**
     * Values that may be interpreted as {@link $RenderChunkRegionAccessor}.
     */
    export type $RenderChunkRegionAccessor_ = (() => $Level_);
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        get templates(): $ObjectArrayList<$StructurePoolElement>;
    }
    export class $DeferredRegisterAccessor<T> {
    }
    export interface $DeferredRegisterAccessor<T> {
        getEntries(): $Map<$DeferredHolder<T, T>, $Supplier<T>>;
        get entries(): $Map<$DeferredHolder<T, T>, $Supplier<T>>;
    }
    /**
     * Values that may be interpreted as {@link $DeferredRegisterAccessor}.
     */
    export type $DeferredRegisterAccessor_<T> = (() => $Map_<$DeferredHolder<T, T>, $Supplier_<T>>);
    export class $SoundEngineAccessor {
    }
    export interface $SoundEngineAccessor {
        getListeners(): $List<$SoundEventListener>;
        get listeners(): $List<$SoundEventListener>;
    }
    /**
     * Values that may be interpreted as {@link $SoundEngineAccessor}.
     */
    export type $SoundEngineAccessor_ = (() => $List_<$SoundEventListener_>);
    export class $SoundManagerAccess {
    }
    export interface $SoundManagerAccess {
        getSoundEngine(): $SoundEngine;
        get soundEngine(): $SoundEngine;
    }
    /**
     * Values that may be interpreted as {@link $SoundManagerAccess}.
     */
    export type $SoundManagerAccess_ = (() => $SoundEngine);
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        getSnapbackEnd(): $Slot;
        getClickedSlot(): $Slot;
        getSnapbackTime(): number;
        setSnapbackItem(arg0: $ItemStack_): void;
        getSnapbackStartX(): number;
        getHoveredSlot(): $Slot;
        getDraggingItem(): $ItemStack;
        getQuickdropSlot(): $Slot;
        getSnapbackItem(): $ItemStack;
        getSnapbackStartY(): number;
        getIsSplittingStack(): boolean;
        getQuickCraftingType(): number;
        getQuickCraftingRemainder(): number;
        setQuickCraftingRemainder(arg0: number): void;
        get snapbackEnd(): $Slot;
        get clickedSlot(): $Slot;
        get snapbackTime(): number;
        get snapbackStartX(): number;
        get hoveredSlot(): $Slot;
        get draggingItem(): $ItemStack;
        get quickdropSlot(): $Slot;
        get snapbackStartY(): number;
        get isSplittingStack(): boolean;
        get quickCraftingType(): number;
    }
    export class $SoundEngineAccess {
    }
    export interface $SoundEngineAccess {
        getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        getLoaded(): boolean;
        get instanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        get loaded(): boolean;
    }
    export class $AbstractContainerMenuAccessor {
    }
    export interface $AbstractContainerMenuAccessor {
        invokeSynchronizeCarriedToRemote(): void;
        invokeSynchronizeSlotToRemote(arg0: number, arg1: $ItemStack_, arg2: $Supplier_<$ItemStack>): void;
        invokeTriggerSlotListeners(arg0: number, arg1: $ItemStack_, arg2: $Supplier_<$ItemStack>): void;
    }
    export class $ExplosionAccessor {
    }
    export interface $ExplosionAccessor {
        getLevel(): $Level;
        get level(): $Level;
    }
    /**
     * Values that may be interpreted as {@link $ExplosionAccessor}.
     */
    export type $ExplosionAccessor_ = (() => $Level_);
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        getRenderBuffers(): $RenderBuffers;
        get renderBuffers(): $RenderBuffers;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = (() => $RenderBuffers);
    export class $BeeAccessor {
    }
    export interface $BeeAccessor {
        invokeSetFlag(arg0: number, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BeeAccessor}.
     */
    export type $BeeAccessor_ = ((arg0: number, arg1: boolean) => void);
}
