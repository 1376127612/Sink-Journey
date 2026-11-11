import { $IWithData, $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $IHasTranslationKey, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Item, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";
import { $ToDoubleFunction_, $Function_, $ToIntBiFunction_, $Consumer_, $Predicate_, $BiFunction_, $ToLongBiFunction_, $ToDoubleBiFunction_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Holder_, $HolderSet_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Class } from "@package/java/lang";
import { $IChemicalProvider } from "@package/mekanism/api/providers";
import { $ChemicalAttribute, $ChemicalAttributeValidator, $IChemicalAttributeContainer } from "@package/mekanism/api/chemical/attribute";
import { $IChemicalAttribute } from "@package/mekanism/api/datamaps/chemical/attribute";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as attribute from "@package/mekanism/api/chemical/attribute";

declare module "@package/mekanism/api/chemical" {
    export class $ChemicalBuilder {
        static builder(arg0: $ResourceLocation_): $ChemicalBuilder;
        static builder(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        "with"(arg0: $ChemicalAttribute): $ChemicalBuilder;
        tint(arg0: number): $ChemicalBuilder;
        getTexture(): $ResourceLocation;
        /**
         * @deprecated
         */
        ore(arg0: $TagKey_<$Item>): $ChemicalBuilder;
        /**
         * @deprecated
         */
        ore(arg0: $ResourceLocation_): $ChemicalBuilder;
        /**
         * @deprecated
         */
        gaseous(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        isGaseous(): boolean;
        static pigment(): $ChemicalBuilder;
        getTint(): number;
        static cleanSlurry(): $ChemicalBuilder;
        static dirtySlurry(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        getOreTag(): $TagKey<$Item>;
        /**
         * @deprecated
         */
        getAttributeMap(): $Map<$Class<$ChemicalAttribute>, $ChemicalAttribute>;
        static infuseType(): $ChemicalBuilder;
        get texture(): $ResourceLocation;
        get oreTag(): $TagKey<$Item>;
        get attributeMap(): $Map<$Class<$ChemicalAttribute>, $ChemicalAttribute>;
    }
    export class $ChemicalStack implements $IHasTextComponent, $IHasTranslationKey, $IChemicalAttributeContainer<$ChemicalStack>, $IWithData<$Chemical> {
        /**
         * @deprecated
         */
        get<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        isEmpty(): boolean;
        split(arg0: number): $ChemicalStack;
        save(arg0: $HolderLookup$Provider): $Tag;
        save(arg0: $HolderLookup$Provider, arg1: $Tag_): $Tag;
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($ChemicalStack) | undefined;
        copy(): $ChemicalStack;
        is(arg0: $HolderSet_<$Chemical>): boolean;
        is(arg0: $TagKey_<$Chemical>): boolean;
        is(arg0: $Chemical_): boolean;
        is(arg0: $Predicate_<$Holder<$Chemical>>): boolean;
        is(arg0: $Holder_<$Chemical>): boolean;
        /**
         * @deprecated
         */
        getAttributes(): $Collection<$ChemicalAttribute>;
        grow(arg0: number): void;
        getData<T>(arg0: $DataMapType<$Chemical_, T>): T;
        /**
         * @deprecated
         */
        has(arg0: $Class<$ChemicalAttribute>): boolean;
        limitSize(arg0: number): void;
        setAmount(arg0: number): void;
        shrink(arg0: number): void;
        getTranslationKey(): string;
        copyAndClear(): $ChemicalStack;
        appendHoverText(arg0: $Item$TooltipContext, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
        static parseOptional(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ChemicalStack;
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        getTags(): $Stream<$TagKey<$Chemical>>;
        getAmount(): number;
        static fixedAmountCodec(arg0: number): $Codec<$ChemicalStack>;
        copyWithAmount(arg0: number): $ChemicalStack;
        getChemical(): $Chemical;
        getTextComponent(): $Component;
        getChemicalColorRepresentation(): number;
        /**
         * @deprecated
         */
        getTypeRegistryName(): $ResourceLocation;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        getChemicalTint(): number;
        getRadioactivity(): number;
        isRadioactive(): boolean;
        static isSameChemical(arg0: $ChemicalStack, arg1: $ChemicalStack): boolean;
        getChemicalHolder(): $Holder<$Chemical>;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<$ChemicalStack, ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        static LENIENT_OPTIONAL_CODEC: $Codec<$ChemicalStack>;
        static CODEC: $Codec<$ChemicalStack>;
        /**
         * @deprecated
         */
        static CHEMICAL_NON_EMPTY_CODEC: $Codec<$Chemical>;
        static MAP_CODEC: $MapCodec<$ChemicalStack>;
        static OPTIONAL_CODEC: $Codec<$ChemicalStack>;
        static CHEMICAL_NON_EMPTY_HOLDER_CODEC: $Codec<$Holder<$Chemical>>;
        static EMPTY: $ChemicalStack;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChemicalStack>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChemicalStack>;
        /**
         * @deprecated
         */
        constructor(arg0: $Chemical_, arg1: number);
        constructor(arg0: $Holder_<$Chemical>, arg1: number);
        get empty(): boolean;
        get attributes(): $Collection<$ChemicalAttribute>;
        get translationKey(): string;
        get tags(): $Stream<$TagKey<$Chemical>>;
        get chemical(): $Chemical;
        get textComponent(): $Component;
        get chemicalColorRepresentation(): number;
        get typeRegistryName(): $ResourceLocation;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        get chemicalTint(): number;
        get radioactivity(): number;
        get radioactive(): boolean;
        get chemicalHolder(): $Holder<$Chemical>;
    }
    export class $Chemical implements $IChemicalProvider, $IChemicalAttributeContainer<$Chemical> {
        /**
         * @deprecated
         */
        get<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        save(arg0: $HolderLookup$Provider): $Tag;
        /**
         * @deprecated
         */
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($Chemical) | undefined;
        /**
         * @deprecated
         */
        is(arg0: $TagKey_<$Chemical>): boolean;
        /**
         * @deprecated
         */
        getAttributes(): $Collection<$ChemicalAttribute>;
        /**
         * @deprecated
         */
        has(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        addAttribute(arg0: $ChemicalAttribute): void;
        getIcon(): $ResourceLocation;
        getTranslationKey(): string;
        /**
         * @deprecated
         */
        static parseOptional(arg0: $HolderLookup$Provider, arg1: string): $Chemical;
        /**
         * @deprecated
         */
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        /**
         * @deprecated
         */
        getTags(): $Stream<$TagKey<$Chemical>>;
        updateFromDataMap(arg0: $Holder_<$Chemical>): void;
        /**
         * @deprecated
         */
        isGaseous(): boolean;
        getChemical(): $Chemical;
        getTextComponent(): $Component;
        getColorRepresentation(): number;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        getRadioactivity(): number;
        isRadioactive(): boolean;
        /**
         * @deprecated
         */
        getAsHolder(): $Holder<$Chemical>;
        getTint(): number;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        static parseOptionalHolder(arg0: $HolderLookup$Provider, arg1: string): $Holder<$Chemical>;
        getModernAttributes(): $List<$IChemicalAttribute>;
        /**
         * @deprecated
         */
        getLegacyAttributes(): $Collection<$ChemicalAttribute>;
        hasAttributesWithValidation(): boolean;
        /**
         * @deprecated
         */
        getOreTag(): $TagKey<$Item>;
        /**
         * @deprecated
         */
        isGaseousLegacy(): boolean;
        static parseHolder(arg0: $HolderLookup$Provider, arg1: $Tag_): ($Holder<$Chemical>) | undefined;
        /**
         * @deprecated
         */
        isEmptyType(): boolean;
        getStack(arg0: number): $ChemicalStack;
        getRegistryName(): $ResourceLocation;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<$Chemical, ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        getName(): string;
        /**
         * @deprecated
         */
        static CODEC: $Codec<$Chemical>;
        static HOLDER_CODEC: $Codec<$Holder<$Chemical>>;
        static HOLDER_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Chemical>>;
        /**
         * @deprecated
         */
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Chemical>;
        constructor(arg0: $ChemicalBuilder);
        get attributes(): $Collection<$ChemicalAttribute>;
        get icon(): $ResourceLocation;
        get translationKey(): string;
        get tags(): $Stream<$TagKey<$Chemical>>;
        get gaseous(): boolean;
        get chemical(): $Chemical;
        get textComponent(): $Component;
        get colorRepresentation(): number;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        get radioactivity(): number;
        get radioactive(): boolean;
        get asHolder(): $Holder<$Chemical>;
        get tint(): number;
        get modernAttributes(): $List<$IChemicalAttribute>;
        get legacyAttributes(): $Collection<$ChemicalAttribute>;
        get oreTag(): $TagKey<$Item>;
        get gaseousLegacy(): boolean;
        get emptyType(): boolean;
        get registryName(): $ResourceLocation;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $Chemical}.
     */
    export type $Chemical_ = RegistryTypes.MekanismChemical;
    export interface $Chemical extends RegistryMarked<RegistryTypes.MekanismChemicalTag, RegistryTypes.MekanismChemical> {}
    export class $IChemicalHandler {
    }
    export interface $IChemicalHandler {
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        getChemicalInTank(arg0: number): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        getChemicalTankCapacity(arg0: number): number;
        get chemicalTanks(): number;
    }
    export class $IMekanismChemicalHandler {
    }
    export interface $IMekanismChemicalHandler extends $ISidedChemicalHandler, $IContentsListener {
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        canHandleChemicals(): boolean;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
        getCountChemicalTanks(arg0: $Direction_): number;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getChemicalTanks(arg0: $Direction_): $List<$IChemicalTank>;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
    }
    export class $ISidedChemicalHandler {
    }
    export interface $ISidedChemicalHandler extends $IChemicalHandler {
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getSideFor(): $Direction;
        getCountChemicalTanks(arg0: $Direction_): number;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        getChemicalInTank(arg0: number): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        getChemicalTankCapacity(arg0: number): number;
        get sideFor(): $Direction;
        get chemicalTanks(): number;
    }
    export class $IChemicalTank {
    }
    export interface $IChemicalTank extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): $ChemicalStack;
        insert(arg0: $ChemicalStack, arg1: $Action_, arg2: $AutomationType_): $ChemicalStack;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        getType(): $Chemical;
        getStack(): $ChemicalStack;
        isValid(arg0: $ChemicalStack): boolean;
        getCapacity(): number;
        setStack(arg0: $ChemicalStack): void;
        setEmpty(): void;
        getAttributeValidator(): $ChemicalAttributeValidator;
        /**
         * @deprecated
         */
        isTypeEqual(arg0: $Chemical_): boolean;
        isTypeEqual(arg0: $ChemicalStack): boolean;
        isTypeEqual(arg0: $Holder_<$Chemical>): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getStored(): number;
        getNeeded(): number;
        setStackSize(arg0: number, arg1: $Action_): number;
        shrinkStack(arg0: number, arg1: $Action_): number;
        setStackUnchecked(arg0: $ChemicalStack): void;
        growStack(arg0: number, arg1: $Action_): number;
        getTypeHolder(): $Holder<$Chemical>;
        get type(): $Chemical;
        get capacity(): number;
        get attributeValidator(): $ChemicalAttributeValidator;
        get stored(): number;
        get needed(): number;
        set stackUnchecked(value: $ChemicalStack);
        get typeHolder(): $Holder<$Chemical>;
    }
}
