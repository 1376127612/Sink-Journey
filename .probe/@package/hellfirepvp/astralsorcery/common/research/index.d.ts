import { $BaseConstellation, $BaseConstellation_ } from "@package/hellfirepvp/astralsorcery/common/constellation";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TomePage } from "@package/hellfirepvp/astralsorcery/common/research/tome";
import { $List, $Map, $Set, $List_, $Collection } from "@package/java/util";
import { $LogicalSide_ } from "@package/net/neoforged/fml";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $RootPerk } from "@package/hellfirepvp/astralsorcery/common/perk/tree/perk";
import { $Predicate_ } from "@package/java/util/function";
import { $PerkRemovalResult, $PerkAllocationType, $PerkAllocation, $PerkAllocationType_ } from "@package/hellfirepvp/astralsorcery/common/research/perk";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $TextureQuery } from "@package/hellfirepvp/astralsorcery/client/resource/query";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResearchNodeVisibility, $ResearchNodeCondition } from "@package/hellfirepvp/astralsorcery/common/research/condition";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IntRectangle } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Lumen, $Lumen_ } from "@package/hellfirepvp/astralsorcery/common/lumen";
import { $AbstractPerk, $AbstractPerk$Data } from "@package/hellfirepvp/astralsorcery/common/perk/tree";
import { $Enum } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as perk from "@package/hellfirepvp/astralsorcery/common/research/perk";
export * as condition from "@package/hellfirepvp/astralsorcery/common/research/condition";
export * as tome from "@package/hellfirepvp/astralsorcery/common/research/tome";

declare module "@package/hellfirepvp/astralsorcery/common/research" {
    export class $ResearchTier extends $Enum<$ResearchTier> implements $StringRepresentable {
        getName(): $Component;
        static values(): $ResearchTier[];
        static valueOf(arg0: string): $ResearchTier;
        next(): $ResearchTier;
        static last(): $ResearchTier;
        static first(): $ResearchTier;
        getSerializedName(): string;
        canSee(arg0: $PlayerProgress): boolean;
        getDiscoveryMessage(): $Component;
        isThisLater(arg0: $ResearchTier_): boolean;
        hasNextTier(): boolean;
        getCloudTexture(): $TextureQuery;
        getCloudArea(): $IntRectangle;
        isThisLaterOrEqual(arg0: $ResearchTier_): boolean;
        getRemappedEnumConstantName(): string;
        static RADIANCE: $ResearchTier;
        static CODEC: $Codec<$ResearchTier>;
        static RESONANCE: $ResearchTier;
        static ILLUMINATION: $ResearchTier;
        static LUMINANCE: $ResearchTier;
        static SHIMMER: $ResearchTier;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ResearchTier>;
        get serializedName(): string;
        get discoveryMessage(): $Component;
        get cloudTexture(): $TextureQuery;
        get cloudArea(): $IntRectangle;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResearchTier}.
     */
    export type $ResearchTier_ = "shimmer" | "illumination" | "resonance" | "luminance" | "radiance";
    export class $PlayerPerkData$AppliedPerkData<D extends $AbstractPerk$Data> {
        copy(): $PlayerPerkData$AppliedPerkData<D>;
        isAllocated(arg0: $PerkAllocationType_): boolean;
        grantsConnectivity(): boolean;
        getPerkData(): D;
        getApplicationTypes(): $Set<$PerkAllocationType>;
        static CODEC: $Codec<$PlayerPerkData$AppliedPerkData<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PlayerPerkData$AppliedPerkData<never>>;
        get perkData(): D;
        get applicationTypes(): $Set<$PerkAllocationType>;
    }
    export class $ResearchNode {
        getName(): $Component;
        getKey(): $ResourceLocation;
        getVisibility(arg0: $PlayerProgress): $ResearchNodeVisibility;
        getConditions(): $List<$ResearchNodeCondition>;
        getConnections(): $List<$ResourceLocation>;
        getBackgroundTexture(): $TextureQuery;
        getTier(): $ResearchTier;
        getPages(): $List<$TomePage>;
        getPosY(): number;
        getPosX(): number;
        getLookupIndexItems(): $List<$Item>;
        getRenderItemStacks(): $List<$ItemStack>;
        addConnection(arg0: $ResourceLocation_): $ResearchNode;
        addConnection(arg0: $ResearchNode): $ResearchNode;
        getRenderItemStack(arg0: number): $ItemStack;
        static CODEC: $Codec<$ResearchNode>;
        static SYNC_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ResearchNode>;
        constructor(arg0: $ResourceLocation_, arg1: $ResearchTier_, arg2: number, arg3: number, arg4: $TextureQuery, arg5: $List_<$ItemStack_>, arg6: $List_<$TomePage>, arg7: $List_<$ResourceLocation_>, arg8: $List_<$ResearchNodeCondition>, arg9: $List_<$Item_>);
        get name(): $Component;
        get key(): $ResourceLocation;
        get conditions(): $List<$ResearchNodeCondition>;
        get connections(): $List<$ResourceLocation>;
        get backgroundTexture(): $TextureQuery;
        get tier(): $ResearchTier;
        get pages(): $List<$TomePage>;
        get posY(): number;
        get posX(): number;
        get lookupIndexItems(): $List<$Item>;
        get renderItemStacks(): $List<$ItemStack>;
    }
    export class $PlayerProgress {
        isValid(): boolean;
        hasLearnedToNavigateTome(): boolean;
        getPerkData(): $PlayerPerkData;
        hasSeenConstellation(arg0: $BaseConstellation_): boolean;
        getAttunedConstellation(): ($BaseConstellation) | undefined;
        getSeenConstellations(): $Set<$BaseConstellation>;
        hasDiscoveredConstellation(arg0: $BaseConstellation_): boolean;
        getKnownConstellations(): $Set<$BaseConstellation>;
        mergeKnowledgeShare(arg0: $PlayerProgress): void;
        hasResearchRelevantChanges(arg0: $PlayerProgress): boolean;
        getSeenFocalPoints(): $Set<$BaseConstellation>;
        getDiscoveredLumen(): $Set<$Lumen>;
        getKnownFlags(): $Set<$ResearchFlag>;
        getTierReached(): $ResearchTier;
        wasOnceAttuned(): boolean;
        hasSeenFocalPoint(arg0: $BaseConstellation_): boolean;
        static blankProgress(): $PlayerProgress;
        hasReceivedTome(): boolean;
        hasDiscoveredLumen(arg0: $Lumen_): boolean;
        getDependentPerks(arg0: $AbstractPerk<never>, arg1: $LogicalSide_): $Collection<$AbstractPerk<never>>;
        isFlagSet(arg0: $ResearchFlag_): boolean;
        isAttuned(): boolean;
        static SAVE_CODEC: $Codec<$PlayerProgress>;
        static SHARE_CODEC: $Codec<$PlayerProgress>;
        get valid(): boolean;
        get perkData(): $PlayerPerkData;
        get attunedConstellation(): ($BaseConstellation) | undefined;
        get seenConstellations(): $Set<$BaseConstellation>;
        get knownConstellations(): $Set<$BaseConstellation>;
        get seenFocalPoints(): $Set<$BaseConstellation>;
        get discoveredLumen(): $Set<$Lumen>;
        get knownFlags(): $Set<$ResearchFlag>;
        get tierReached(): $ResearchTier;
        get attuned(): boolean;
    }
    export class $PlayerPerkData {
        getPerks(): $Map<$AbstractPerk<never>, $PlayerPerkData$AppliedPerkData<never>>;
        getPointTokens(): $Set<$ResourceLocation>;
        getAllocatedPerks(arg0: $PerkAllocationType_): $Collection<$AbstractPerk<never>>;
        hasPerkAllocation(arg0: $AbstractPerk<never>): boolean;
        hasPerkAllocation(arg0: $Predicate_<$AbstractPerk<never>>): boolean;
        hasPerkAllocation(arg0: $AbstractPerk<never>, arg1: $PerkAllocationType_): boolean;
        getPerkData<D extends $AbstractPerk$Data>(arg0: $AbstractPerk<D>): (D) | undefined;
        getAvailablePerkPoints(arg0: $Player, arg1: $LogicalSide_): number;
        getPerkLevel(arg0: $Player | null, arg1: $LogicalSide_): number;
        getSealedPerks(): $Collection<$AbstractPerk<never>>;
        hasFreeAllocationPoint(arg0: $Player, arg1: $LogicalSide_): boolean;
        getDependentPerks(arg0: $PlayerProgress, arg1: $AbstractPerk<never>, arg2: $RootPerk<never>, arg3: $LogicalSide_): $Collection<$AbstractPerk<never>>;
        updateAllocatedPerkData<D extends $AbstractPerk$Data>(arg0: $AbstractPerk<D>, arg1: D): boolean;
        getEffectGrantingPerks(): $Collection<$AbstractPerk<never>>;
        static blankData(): $PlayerPerkData;
        hasPerkAllocationGrantingConnections(arg0: $AbstractPerk<never>): boolean;
        getPerkExp(): number;
        hasPerkEffect(arg0: $AbstractPerk<never>): boolean;
        hasPerkEffect(arg0: $Predicate_<$AbstractPerk<never>>): boolean;
        isPerkSealed(arg0: $Predicate_<$AbstractPerk<never>>): boolean;
        isPerkSealed(arg0: $AbstractPerk<never>): boolean;
        getAllocationTypes(arg0: $AbstractPerk<never>): $Collection<$PerkAllocationType>;
        applyPerkAllocation(arg0: $AbstractPerk<never>, arg1: $PerkAllocation, arg2: boolean): boolean;
        getPercentToNextLevel(arg0: $Player | null, arg1: $LogicalSide_): number;
        removePerkAllocation(arg0: $AbstractPerk<never>, arg1: $PerkAllocation, arg2: boolean): $PerkRemovalResult;
        static CODEC: $Codec<$PlayerPerkData>;
        static PERKTREE_HASH_CODEC: $Codec<$PlayerPerkData>;
        get perks(): $Map<$AbstractPerk<never>, $PlayerPerkData$AppliedPerkData<never>>;
        get pointTokens(): $Set<$ResourceLocation>;
        get sealedPerks(): $Collection<$AbstractPerk<never>>;
        get effectGrantingPerks(): $Collection<$AbstractPerk<never>>;
        get perkExp(): number;
    }
    export class $ResearchFlag extends $Enum<$ResearchFlag> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $ResearchFlag[];
        static valueOf(arg0: string): $ResearchFlag;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        isShareable(): boolean;
        setIfAbsent(arg0: $ServerPlayer): void;
        getRemappedEnumConstantName(): string;
        static HAS_OBTAINED_ARTIFACT: $ResearchFlag;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get shareable(): boolean;
        set ifAbsent(value: $ServerPlayer);
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResearchFlag}.
     */
    export type $ResearchFlag_ = "has_obtained_artifact";
}
