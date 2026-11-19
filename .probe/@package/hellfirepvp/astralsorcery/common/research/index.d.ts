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
        canSee(arg0: $PlayerProgress): boolean;
        getSerializedName(): string;
        isThisLaterOrEqual(arg0: $ResearchTier_): boolean;
        hasNextTier(): boolean;
        isThisLater(arg0: $ResearchTier_): boolean;
        getDiscoveryMessage(): $Component;
        getCloudTexture(): $TextureQuery;
        getCloudArea(): $IntRectangle;
        getName(): $Component;
        static values(): $ResearchTier[];
        static valueOf(arg0: string): $ResearchTier;
        next(): $ResearchTier;
        static last(): $ResearchTier;
        static first(): $ResearchTier;
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
        getPerkData(): D;
        getApplicationTypes(): $Set<$PerkAllocationType>;
        grantsConnectivity(): boolean;
        isAllocated(arg0: $PerkAllocationType_): boolean;
        copy(): $PlayerPerkData$AppliedPerkData<D>;
        static CODEC: $Codec<$PlayerPerkData$AppliedPerkData<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PlayerPerkData$AppliedPerkData<never>>;
        get perkData(): D;
        get applicationTypes(): $Set<$PerkAllocationType>;
    }
    export class $ResearchNode {
        getPages(): $List<$TomePage>;
        getTier(): $ResearchTier;
        addConnection(arg0: $ResourceLocation_): $ResearchNode;
        addConnection(arg0: $ResearchNode): $ResearchNode;
        getRenderItemStacks(): $List<$ItemStack>;
        getLookupIndexItems(): $List<$Item>;
        getRenderItemStack(arg0: number): $ItemStack;
        getName(): $Component;
        getKey(): $ResourceLocation;
        getConditions(): $List<$ResearchNodeCondition>;
        getVisibility(arg0: $PlayerProgress): $ResearchNodeVisibility;
        getConnections(): $List<$ResourceLocation>;
        getPosX(): number;
        getPosY(): number;
        getBackgroundTexture(): $TextureQuery;
        static CODEC: $Codec<$ResearchNode>;
        static SYNC_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ResearchNode>;
        constructor(arg0: $ResourceLocation_, arg1: $ResearchTier_, arg2: number, arg3: number, arg4: $TextureQuery, arg5: $List_<$ItemStack_>, arg6: $List_<$TomePage>, arg7: $List_<$ResourceLocation_>, arg8: $List_<$ResearchNodeCondition>, arg9: $List_<$Item_>);
        get pages(): $List<$TomePage>;
        get tier(): $ResearchTier;
        get renderItemStacks(): $List<$ItemStack>;
        get lookupIndexItems(): $List<$Item>;
        get name(): $Component;
        get key(): $ResourceLocation;
        get conditions(): $List<$ResearchNodeCondition>;
        get connections(): $List<$ResourceLocation>;
        get posX(): number;
        get posY(): number;
        get backgroundTexture(): $TextureQuery;
    }
    export class $PlayerProgress {
        hasDiscoveredConstellation(arg0: $BaseConstellation_): boolean;
        getSeenFocalPoints(): $Set<$BaseConstellation>;
        hasSeenFocalPoint(arg0: $BaseConstellation_): boolean;
        hasDiscoveredLumen(arg0: $Lumen_): boolean;
        hasReceivedTome(): boolean;
        getKnownFlags(): $Set<$ResearchFlag>;
        static blankProgress(): $PlayerProgress;
        getDependentPerks(arg0: $AbstractPerk<never>, arg1: $LogicalSide_): $Collection<$AbstractPerk<never>>;
        getTierReached(): $ResearchTier;
        wasOnceAttuned(): boolean;
        getDiscoveredLumen(): $Set<$Lumen>;
        getPerkData(): $PlayerPerkData;
        hasLearnedToNavigateTome(): boolean;
        hasResearchRelevantChanges(arg0: $PlayerProgress): boolean;
        isAttuned(): boolean;
        getSeenConstellations(): $Set<$BaseConstellation>;
        mergeKnowledgeShare(arg0: $PlayerProgress): void;
        hasSeenConstellation(arg0: $BaseConstellation_): boolean;
        isValid(): boolean;
        isFlagSet(arg0: $ResearchFlag_): boolean;
        getKnownConstellations(): $Set<$BaseConstellation>;
        getAttunedConstellation(): ($BaseConstellation) | undefined;
        static SAVE_CODEC: $Codec<$PlayerProgress>;
        static SHARE_CODEC: $Codec<$PlayerProgress>;
        get seenFocalPoints(): $Set<$BaseConstellation>;
        get knownFlags(): $Set<$ResearchFlag>;
        get tierReached(): $ResearchTier;
        get discoveredLumen(): $Set<$Lumen>;
        get perkData(): $PlayerPerkData;
        get attuned(): boolean;
        get seenConstellations(): $Set<$BaseConstellation>;
        get valid(): boolean;
        get knownConstellations(): $Set<$BaseConstellation>;
        get attunedConstellation(): ($BaseConstellation) | undefined;
    }
    export class $PlayerPerkData {
        hasPerkAllocationGrantingConnections(arg0: $AbstractPerk<never>): boolean;
        getDependentPerks(arg0: $PlayerProgress, arg1: $AbstractPerk<never>, arg2: $RootPerk<never>, arg3: $LogicalSide_): $Collection<$AbstractPerk<never>>;
        getPerks(): $Map<$AbstractPerk<never>, $PlayerPerkData$AppliedPerkData<never>>;
        hasPerkAllocation(arg0: $AbstractPerk<never>): boolean;
        hasPerkAllocation(arg0: $Predicate_<$AbstractPerk<never>>): boolean;
        hasPerkAllocation(arg0: $AbstractPerk<never>, arg1: $PerkAllocationType_): boolean;
        getPerkData<D extends $AbstractPerk$Data>(arg0: $AbstractPerk<D>): (D) | undefined;
        getPerkLevel(arg0: $Player | null, arg1: $LogicalSide_): number;
        hasFreeAllocationPoint(arg0: $Player, arg1: $LogicalSide_): boolean;
        getAvailablePerkPoints(arg0: $Player, arg1: $LogicalSide_): number;
        getEffectGrantingPerks(): $Collection<$AbstractPerk<never>>;
        updateAllocatedPerkData<D extends $AbstractPerk$Data>(arg0: $AbstractPerk<D>, arg1: D): boolean;
        hasPerkEffect(arg0: $AbstractPerk<never>): boolean;
        hasPerkEffect(arg0: $Predicate_<$AbstractPerk<never>>): boolean;
        isPerkSealed(arg0: $AbstractPerk<never>): boolean;
        isPerkSealed(arg0: $Predicate_<$AbstractPerk<never>>): boolean;
        getSealedPerks(): $Collection<$AbstractPerk<never>>;
        static blankData(): $PlayerPerkData;
        getPerkExp(): number;
        getAllocationTypes(arg0: $AbstractPerk<never>): $Collection<$PerkAllocationType>;
        getPercentToNextLevel(arg0: $Player | null, arg1: $LogicalSide_): number;
        removePerkAllocation(arg0: $AbstractPerk<never>, arg1: $PerkAllocation, arg2: boolean): $PerkRemovalResult;
        applyPerkAllocation(arg0: $AbstractPerk<never>, arg1: $PerkAllocation, arg2: boolean): boolean;
        getPointTokens(): $Set<$ResourceLocation>;
        getAllocatedPerks(arg0: $PerkAllocationType_): $Collection<$AbstractPerk<never>>;
        static CODEC: $Codec<$PlayerPerkData>;
        static PERKTREE_HASH_CODEC: $Codec<$PlayerPerkData>;
        get perks(): $Map<$AbstractPerk<never>, $PlayerPerkData$AppliedPerkData<never>>;
        get effectGrantingPerks(): $Collection<$AbstractPerk<never>>;
        get sealedPerks(): $Collection<$AbstractPerk<never>>;
        get perkExp(): number;
        get pointTokens(): $Set<$ResourceLocation>;
    }
    export class $ResearchFlag extends $Enum<$ResearchFlag> implements $StringRepresentable, $IExtensibleEnum {
        getSerializedName(): string;
        setIfAbsent(arg0: $ServerPlayer): void;
        static values(): $ResearchFlag[];
        static valueOf(arg0: string): $ResearchFlag;
        isShareable(): boolean;
        static getExtensionInfo(): $ExtensionInfo;
        getRemappedEnumConstantName(): string;
        static HAS_OBTAINED_ARTIFACT: $ResearchFlag;
        get serializedName(): string;
        set ifAbsent(value: $ServerPlayer);
        get shareable(): boolean;
        static get extensionInfo(): $ExtensionInfo;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResearchFlag}.
     */
    export type $ResearchFlag_ = "has_obtained_artifact";
}
