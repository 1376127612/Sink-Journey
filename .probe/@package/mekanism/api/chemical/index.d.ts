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
        tint(arg0: number): $ChemicalBuilder;
        static infuseType(): $ChemicalBuilder;
        static pigment(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        getOreTag(): $TagKey<$Item>;
        /**
         * @deprecated
         */
        isGaseous(): boolean;
        static cleanSlurry(): $ChemicalBuilder;
        static dirtySlurry(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        getAttributeMap(): $Map<$Class<$ChemicalAttribute>, $ChemicalAttribute>;
        /**
         * @deprecated
         */
        ore(arg0: $TagKey_<$Item>): $ChemicalBuilder;
        /**
         * @deprecated
         */
        ore(arg0: $ResourceLocation_): $ChemicalBuilder;
        static builder(arg0: $ResourceLocation_): $ChemicalBuilder;
        static builder(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        "with"(arg0: $ChemicalAttribute): $ChemicalBuilder;
        /**
         * @deprecated
         */
        gaseous(): $ChemicalBuilder;
        getTint(): number;
        getTexture(): $ResourceLocation;
        get oreTag(): $TagKey<$Item>;
        get attributeMap(): $Map<$Class<$ChemicalAttribute>, $ChemicalAttribute>;
        get texture(): $ResourceLocation;
    }
    export class $ChemicalStack implements $IHasTextComponent, $IHasTranslationKey, $IChemicalAttributeContainer<$ChemicalStack>, $IWithData<$Chemical> {
        getChemicalHolder(): $Holder<$Chemical>;
        isRadioactive(): boolean;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        getRadioactivity(): number;
        getAmount(): number;
        setAmount(arg0: number): void;
        /**
         * @deprecated
         */
        getTypeRegistryName(): $ResourceLocation;
        getTranslationKey(): string;
        static parseOptional(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ChemicalStack;
        getChemical(): $Chemical;
        static isSameChemical(arg0: $ChemicalStack, arg1: $ChemicalStack): boolean;
        getChemicalTint(): number;
        getTextComponent(): $Component;
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
        is(arg0: $Holder_<$Chemical>): boolean;
        is(arg0: $Predicate_<$Holder<$Chemical>>): boolean;
        is(arg0: $TagKey_<$Chemical>): boolean;
        is(arg0: $Chemical_): boolean;
        is(arg0: $HolderSet_<$Chemical>): boolean;
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
        shrink(arg0: number): void;
        copyWithAmount(arg0: number): $ChemicalStack;
        static fixedAmountCodec(arg0: number): $Codec<$ChemicalStack>;
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        appendHoverText(arg0: $Item$TooltipContext, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        copyAndClear(): $ChemicalStack;
        limitSize(arg0: number): void;
        getChemicalColorRepresentation(): number;
        getTags(): $Stream<$TagKey<$Chemical>>;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<$ChemicalStack, ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
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
        constructor(arg0: $Holder_<$Chemical>, arg1: number);
        /**
         * @deprecated
         */
        constructor(arg0: $Chemical_, arg1: number);
        get chemicalHolder(): $Holder<$Chemical>;
        get radioactive(): boolean;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        get radioactivity(): number;
        get typeRegistryName(): $ResourceLocation;
        get translationKey(): string;
        get chemical(): $Chemical;
        get chemicalTint(): number;
        get textComponent(): $Component;
        get empty(): boolean;
        get attributes(): $Collection<$ChemicalAttribute>;
        get chemicalColorRepresentation(): number;
        get tags(): $Stream<$TagKey<$Chemical>>;
    }
    export class $Chemical implements $IChemicalProvider, $IChemicalAttributeContainer<$Chemical> {
        isRadioactive(): boolean;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        getRadioactivity(): number;
        getIcon(): $ResourceLocation;
        getColorRepresentation(): number;
        getModernAttributes(): $List<$IChemicalAttribute>;
        getTranslationKey(): string;
        /**
         * @deprecated
         */
        static parseOptional(arg0: $HolderLookup$Provider, arg1: string): $Chemical;
        /**
         * @deprecated
         */
        getOreTag(): $TagKey<$Item>;
        /**
         * @deprecated
         */
        isGaseous(): boolean;
        static parseHolder(arg0: $HolderLookup$Provider, arg1: $Tag_): ($Holder<$Chemical>) | undefined;
        /**
         * @deprecated
         */
        getLegacyAttributes(): $Collection<$ChemicalAttribute>;
        getChemical(): $Chemical;
        getTextComponent(): $Component;
        /**
         * @deprecated
         */
        isGaseousLegacy(): boolean;
        /**
         * @deprecated
         */
        isEmptyType(): boolean;
        static parseOptionalHolder(arg0: $HolderLookup$Provider, arg1: string): $Holder<$Chemical>;
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
        addAttribute(arg0: $ChemicalAttribute): void;
        /**
         * @deprecated
         */
        has(arg0: $Class<$ChemicalAttribute>): boolean;
        updateFromDataMap(arg0: $Holder_<$Chemical>): void;
        /**
         * @deprecated
         */
        getAsHolder(): $Holder<$Chemical>;
        /**
         * @deprecated
         */
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        getTint(): number;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        hasAttributesWithValidation(): boolean;
        /**
         * @deprecated
         */
        getTags(): $Stream<$TagKey<$Chemical>>;
        getRegistryName(): $ResourceLocation;
        getStack(arg0: number): $ChemicalStack;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<$Chemical, ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<$Chemical, ATTRIBUTE>): number;
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
        get radioactive(): boolean;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        get radioactivity(): number;
        get icon(): $ResourceLocation;
        get colorRepresentation(): number;
        get modernAttributes(): $List<$IChemicalAttribute>;
        get translationKey(): string;
        get oreTag(): $TagKey<$Item>;
        get gaseous(): boolean;
        get legacyAttributes(): $Collection<$ChemicalAttribute>;
        get chemical(): $Chemical;
        get textComponent(): $Component;
        get gaseousLegacy(): boolean;
        get emptyType(): boolean;
        get attributes(): $Collection<$ChemicalAttribute>;
        get asHolder(): $Holder<$Chemical>;
        get tint(): number;
        get tags(): $Stream<$TagKey<$Chemical>>;
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
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        getChemicalInTank(arg0: number): $ChemicalStack;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getChemicalTankCapacity(arg0: number): number;
        get chemicalTanks(): number;
    }
    export class $IMekanismChemicalHandler {
    }
    export interface $IMekanismChemicalHandler extends $ISidedChemicalHandler, $IContentsListener {
        getCountChemicalTanks(arg0: $Direction_): number;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getChemicalTanks(arg0: $Direction_): $List<$IChemicalTank>;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        canHandleChemicals(): boolean;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
    }
    export class $ISidedChemicalHandler {
    }
    export interface $ISidedChemicalHandler extends $IChemicalHandler {
        getCountChemicalTanks(arg0: $Direction_): number;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getChemicalTanks(): number;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        getChemicalInTank(arg0: number): $ChemicalStack;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        getChemicalTankCapacity(arg0: number): number;
        getSideFor(): $Direction;
        get chemicalTanks(): number;
        get sideFor(): $Direction;
    }
    export class $IChemicalTank {
    }
    export interface $IChemicalTank extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        isTypeEqual(arg0: $Chemical_): boolean;
        isTypeEqual(arg0: $Holder_<$Chemical>): boolean;
        isTypeEqual(arg0: $ChemicalStack): boolean;
        setStackUnchecked(arg0: $ChemicalStack): void;
        setStackSize(arg0: number, arg1: $Action_): number;
        shrinkStack(arg0: number, arg1: $Action_): number;
        getTypeHolder(): $Holder<$Chemical>;
        getAttributeValidator(): $ChemicalAttributeValidator;
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
        setEmpty(): void;
        setStack(arg0: $ChemicalStack): void;
        getStored(): number;
        getNeeded(): number;
        growStack(arg0: number, arg1: $Action_): number;
        set stackUnchecked(value: $ChemicalStack);
        get typeHolder(): $Holder<$Chemical>;
        get attributeValidator(): $ChemicalAttributeValidator;
        get type(): $Chemical;
        get capacity(): number;
        get stored(): number;
        get needed(): number;
    }
}
