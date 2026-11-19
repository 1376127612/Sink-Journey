import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ECOFeature_ } from "@package/cn/dancingsnow/neoecoae/api/capability";
import { $Record } from "@package/java/lang";
import { $ECOMachineKind_ } from "@package/cn/dancingsnow/neoecoae/api/multiblock";
import { $MultiBlockDefinition } from "@package/cn/dancingsnow/neoecoae/multiblock/definition";
export * as storage from "@package/cn/dancingsnow/neoecoae/api/storage";
export * as multiblock from "@package/cn/dancingsnow/neoecoae/api/multiblock";
export * as capability from "@package/cn/dancingsnow/neoecoae/api/capability";

declare module "@package/cn/dancingsnow/neoecoae/api" {
    export interface $IECOTier extends RegistryMarked<RegistryTypes.NeoecoaeEcoTierTag, RegistryTypes.NeoecoaeEcoTier> {}
    export class $ECOCpuTierGlyph extends $Record {
        v(): number;
        u(): number;
        textureHeight(): number;
        textureWidth(): number;
        texture(): $ResourceLocation;
        static WIDTH: number;
        static HEIGHT: number;
        constructor(arg0: $ResourceLocation_);
        constructor(texture: $ResourceLocation_, u: number, v: number, textureWidth: number, textureHeight: number);
    }
    /**
     * Values that may be interpreted as {@link $ECOCpuTierGlyph}.
     */
    export type $ECOCpuTierGlyph_ = { texture?: $ResourceLocation_, textureHeight?: number, v?: number, u?: number, textureWidth?: number,  } | [texture?: $ResourceLocation_, textureHeight?: number, v?: number, u?: number, textureWidth?: number, ];
    export class $IECOTier {
    }
    export interface $IECOTier {
        getOverclockedCrafterPowerMultiply(): number;
        getOverclockedCrafterParallel(): number;
        getCraftConfirmCpuTierGlyph(): $ECOCpuTierGlyph;
        getOverclockedCrafterQueueMultiply(): number;
        getCPUOverlayTexture(): $ResourceLocation;
        getComponentIdlePower(): number;
        getHostMarkerTexture(): $ResourceLocation;
        supportsComponentTier(arg0: $IECOTier_): boolean;
        getPowerStorageSize(): number;
        getStorageTotalBytes(): number;
        getTier(): number;
        getPanelTierName(): $Component;
        getCrafterParallel(): number;
        getPanelAtlas(arg0: string): $ResourceLocation;
        getCPUAccelerators(): number;
        supportsFeature(arg0: $ECOFeature_): boolean;
        getCPUThreads(): number;
        getBuildDefinition(): $MultiBlockDefinition;
        getBuildDefinition(arg0: $ECOMachineKind_): $MultiBlockDefinition;
        getCPUTotalBytes(): number;
        compareTo(arg0: $IECOTier_): number;
        get overclockedCrafterPowerMultiply(): number;
        get overclockedCrafterParallel(): number;
        get craftConfirmCpuTierGlyph(): $ECOCpuTierGlyph;
        get overclockedCrafterQueueMultiply(): number;
        get CPUOverlayTexture(): $ResourceLocation;
        get componentIdlePower(): number;
        get hostMarkerTexture(): $ResourceLocation;
        get powerStorageSize(): number;
        get storageTotalBytes(): number;
        get tier(): number;
        get panelTierName(): $Component;
        get crafterParallel(): number;
        get CPUAccelerators(): number;
        get CPUThreads(): number;
        get CPUTotalBytes(): number;
    }
    /**
     * Values that may be interpreted as {@link $IECOTier}.
     */
    export type $IECOTier_ = RegistryTypes.NeoecoaeEcoTier;
}
