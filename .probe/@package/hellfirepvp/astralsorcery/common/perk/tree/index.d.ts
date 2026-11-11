import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $PlayerProgress } from "@package/hellfirepvp/astralsorcery/common/research";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ModifierSource, $AttributeModifierProvider, $ModifierSourceProvider, $AttributeConverterProvider } from "@package/hellfirepvp/astralsorcery/common/perk/source";
import { $PerkAttributeConverter_, $PerkAttributeConverter } from "@package/hellfirepvp/astralsorcery/common/perk/convert";
import { $List, $Collection } from "@package/java/util";
import { $LogicalSide_ } from "@package/net/neoforged/fml";
import { $PerkAttributeModifier, $PerkAttributeModifier_ } from "@package/hellfirepvp/astralsorcery/common/perk/modifier";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $PerkAllocationStatus, $PerkAllocation, $PerkAllocationType_ } from "@package/hellfirepvp/astralsorcery/common/research/perk";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FloatPoint, $FloatPoint_, $ColorWrapper } from "@package/hellfirepvp/astralsorcery/common/util/data";
import { $Record } from "@package/java/lang";
import { $PerkRenderer, $PerkRenderType } from "@package/hellfirepvp/astralsorcery/client/screen/tome/perk/render";
import { $TriFunction_ } from "@package/hellfirepvp/astralsorcery/common/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as requirement from "@package/hellfirepvp/astralsorcery/common/perk/tree/requirement";
export * as perk from "@package/hellfirepvp/astralsorcery/common/perk/tree/perk";

declare module "@package/hellfirepvp/astralsorcery/common/perk/tree" {
    export interface $PerkType<T> extends RegistryMarked<RegistryTypes.AstralsorceryPerkTypesTag, RegistryTypes.AstralsorceryPerkTypes> {}
    export class $PerkCategory {
        getDisplayName(): $MutableComponent;
        getColor(): $ColorWrapper;
        static MAJOR: $PerkCategory;
        static CODEC: $Codec<$PerkCategory>;
        static ROOT: $PerkCategory;
        static EPIPHANY: $PerkCategory;
        static DEFAULT: $PerkCategory;
        constructor(arg0: $ResourceLocation_, arg1: $ColorWrapper);
        constructor(arg0: string, arg1: $ChatFormatting_);
        constructor(arg0: string, arg1: $ColorWrapper);
        get displayName(): $MutableComponent;
        get color(): $ColorWrapper;
    }
    export class $PerkDataType<D extends $AbstractPerk$Data> extends $Record {
        codec(): $MapCodec<D>;
        syncCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        emptyDataFn(): $Supplier<D>;
        static DATA_CODEC: $Codec<$AbstractPerk$Data>;
        static DATA_SYNC_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractPerk$Data>;
        constructor(codec: $MapCodec_<D>, syncCodec: $StreamCodec<$RegistryFriendlyByteBuf, D>, emptyDataFn: $Supplier_<D>);
    }
    /**
     * Values that may be interpreted as {@link $PerkDataType}.
     */
    export type $PerkDataType_<D> = RegistryTypes.AstralsorceryPerkDataTypes | { emptyDataFn?: $Supplier_<$AbstractPerk$Data>, syncCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractPerk$Data>, codec?: $MapCodec_<$AbstractPerk$Data>,  } | [emptyDataFn?: $Supplier_<$AbstractPerk$Data>, syncCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractPerk$Data>, codec?: $MapCodec_<$AbstractPerk$Data>, ];
    export interface $PerkDataType<D> extends RegistryMarked<RegistryTypes.AstralsorceryPerkDataTypesTag, RegistryTypes.AstralsorceryPerkDataTypes> {}
    export class $AttributeConverterPerk<D extends $AbstractPerk$Data> extends $ProgressPerk<D> implements $AttributeConverterProvider {
        addConverter<P extends $AttributeConverterPerk<never>>(arg0: $PerkAttributeConverter_): P;
        getConverters(arg0: $Player, arg1: $LogicalSide_, arg2: boolean): $Collection<$PerkAttributeConverter>;
        static TO_CLIENT_PERKTREE_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractPerk<never>>;
        static DATAPACK_CODEC: $Codec<$AbstractPerk<never>>;
    }
    export class $AbstractPerk<T extends $AbstractPerk$Data> implements $ModifierSource {
        getName(arg0: $PlayerProgress, arg1: $Player): $MutableComponent;
        validate(arg0: $LogicalSide_): void;
        getKey(): $ResourceLocation;
        getType(): $PerkType<never>;
        getOffset(): $FloatPoint;
        getDescription(arg0: $PlayerProgress, arg1: $Player | null): $List<$MutableComponent>;
        invalidate(arg0: $LogicalSide_): void;
        setNameKey<P extends $AbstractPerk<never>>(arg0: string): P;
        clearCaches(arg0: $LogicalSide_): void;
        onApply(arg0: $Player, arg1: $LogicalSide_): void;
        getY(): number;
        getNameKey(): string;
        getCategory(): $PerkCategory;
        setCategory<P extends $AbstractPerk<never>>(arg0: $PerkCategory): P;
        getX(): number;
        getTooltip(arg0: $PlayerProgress, arg1: $Player | null, arg2: $LogicalSide_): $Collection<$MutableComponent>;
        onRemove(arg0: $Player, arg1: $LogicalSide_): void;
        getSourceProvider(): $ModifierSourceProvider<never>;
        canApplySource(arg0: $Player, arg1: $LogicalSide_): boolean;
        getPerkData(arg0: $Player, arg1: $LogicalSide_): (T) | undefined;
        clearTooltipCache(): void;
        getPerkTreePoint(): $PerkTreePoint<never>;
        onRemovePerkServer(arg0: $ServerPlayer, arg1: $PerkAllocationType_, arg2: $PlayerProgress, arg3: T): void;
        getPerkSource(): $List<$MutableComponent>;
        mayUnlockPerk(arg0: $PlayerProgress, arg1: $Player): boolean;
        getDescriptionIds(): $List<string>;
        providesAllocation(arg0: $PlayerProgress, arg1: $Player, arg2: $AbstractPerk<never>): ($PerkAllocation) | undefined;
        static getInfoText(arg0: string): $MutableComponent;
        onUnlockPerkServer(arg0: $Player | null, arg1: $PerkAllocationType_, arg2: $PlayerProgress, arg3: T): void;
        getPerkStatus(arg0: $Player | null, arg1: $LogicalSide_): $PerkAllocationStatus;
        getAlwaysDependentPerks(arg0: $PlayerProgress, arg1: $LogicalSide_): $Collection<$AbstractPerk<never>>;
        getConnectedPerks(arg0: $PlayerProgress, arg1: $LogicalSide_, arg2: boolean): $Collection<$AbstractPerk<never>>;
        hasPlayerPerkAllowingUnlock(arg0: $PlayerProgress, arg1: $Player): boolean;
        mayRemovePerk(arg0: $PlayerProgress, arg1: $Player): boolean;
        isEqual(arg0: $ModifierSource): boolean;
        static TO_CLIENT_PERKTREE_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractPerk<never>>;
        static DATAPACK_CODEC: $Codec<$AbstractPerk<never>>;
        get key(): $ResourceLocation;
        get type(): $PerkType<never>;
        get offset(): $FloatPoint;
        get y(): number;
        get x(): number;
        get sourceProvider(): $ModifierSourceProvider<never>;
        get perkTreePoint(): $PerkTreePoint<never>;
        get perkSource(): $List<$MutableComponent>;
        get descriptionIds(): $List<string>;
    }
    export class $PerkType<T extends $AbstractPerk<never>> {
        static of<T extends $AbstractPerk<never>>(arg0: $MapCodec_<T>, arg1: $Supplier_<$PerkDataType<never>>, arg2: $TriFunction_<$ResourceLocation, number, number, T>): $PerkType<T>;
        perkCodec(): $MapCodec<T>;
        dataType(): $PerkDataType<never>;
        newBlankPerk(arg0: $ResourceLocation_, arg1: number, arg2: number): T;
        constructor(arg0: $MapCodec_<T>, arg1: $Supplier_<$PerkDataType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $PerkType}.
     */
    export type $PerkType_<T> = RegistryTypes.AstralsorceryPerkTypes;
    export class $PerkTreePoint<T extends $AbstractPerk<never>> {
        getOffset(): $FloatPoint;
        getPerk(): T;
        getRenderer(): $Supplier<$PerkRenderer<never, T>>;
        getRenderSize(): number;
        getFixedRenderTypes(): $Supplier<$List<$PerkRenderType>>;
        static PERK_RENDER_SIZE: number;
        constructor(arg0: $FloatPoint_, arg1: T);
        get offset(): $FloatPoint;
        get perk(): T;
        get renderer(): $Supplier<$PerkRenderer<never, T>>;
        get renderSize(): number;
        get fixedRenderTypes(): $Supplier<$List<$PerkRenderType>>;
    }
    export class $AbstractPerk$Data {
        isSealed(): boolean;
        getType(): $PerkDataType<never>;
        copy<T extends $AbstractPerk$Data>(): T;
        static create(): $AbstractPerk$Data;
        setSealed(arg0: boolean): void;
        static CODEC: $MapCodec<$AbstractPerk$Data>;
        static SYNC_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractPerk$Data>;
        get type(): $PerkDataType<never>;
    }
    export class $AttributeModifierPerk<D extends $AbstractPerk$Data> extends $AttributeConverterPerk<D> implements $AttributeModifierProvider {
        getModifiers(arg0: $Player, arg1: $LogicalSide_, arg2: boolean): $Collection<$PerkAttributeModifier>;
        addModifier<P extends $AttributeModifierPerk<never>>(arg0: $PerkAttributeModifier_): P;
        static CODEC: $MapCodec<$AttributeModifierPerk<never>>;
        static TO_CLIENT_PERKTREE_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractPerk<never>>;
        static DATAPACK_CODEC: $Codec<$AbstractPerk<never>>;
        static TYPE: $PerkType<$AttributeModifierPerk<never>>;
    }
}
