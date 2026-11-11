import { $BiConsumer_ } from "@package/java/util/function";
import { $BufferBlockEntityContents } from "@package/ca/teamdman/sfm/common/blockentity";
import { $SFMBlockCapabilityKind, $SFMBlockCapabilityKind_ } from "@package/ca/teamdman/sfm/common/capability";
import { $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $ResourceIdentifier, $SideQualifier_, $LabelAccess_, $NumberRangeSet_ } from "@package/ca/teamdman/sfml/ast";
import { $Stream } from "@package/java/util/stream";
import { $LocalizationEntry } from "@package/ca/teamdman/sfm/common/localization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $CapabilityConsumer_, $ProgramContext } from "@package/ca/teamdman/sfm/common/program";
import { $Object, $Iterable } from "@package/java/lang";

declare module "@package/ca/teamdman/sfm/common/resourcetype" {
    export class $ResourceType<STACK, ITEM, CAP> {
        extract(arg0: CAP, arg1: number, arg2: number, arg3: boolean): STACK;
        insert(arg0: CAP, arg1: number, arg2: STACK, arg3: boolean): STACK;
        isEmpty(arg0: STACK): boolean;
        copy(arg0: STACK): STACK;
        getItem(arg0: STACK): ITEM;
        canExtract(arg0: CAP, arg1: number): boolean;
        getMaxStackSize(arg0: STACK): number;
        getStackInSlot(arg0: CAP, arg1: number): STACK;
        getSlots(arg0: CAP): number;
        registryKeyExists(arg0: $ResourceLocation_): boolean;
        getItems(): $Iterable<ITEM>;
        withCount(arg0: STACK, arg1: number): STACK;
        getAmount(arg0: STACK): number;
        canInsert(arg0: CAP, arg1: number): boolean;
        createHandlerForBufferBlock(arg0: $BufferBlockEntityContents): CAP;
        matchesStackType(arg0: $Object): boolean;
        capabilityKind(): $SFMBlockCapabilityKind<CAP>;
        getTagsForStack(arg0: STACK): $Stream<$ResourceLocation>;
        getRegistryKeys(): $Set<$ResourceLocation>;
        getStacksInSlots(arg0: CAP, arg1: $NumberRangeSet_): $Stream<STACK>;
        isHandlerEmpty(arg0: CAP): boolean;
        getEmptyStack(): STACK;
        matchesStack(arg0: $ResourceIdentifier<STACK, ITEM, CAP>, arg1: $Object): boolean;
        getAmountDifference(arg0: STACK, arg1: STACK): number;
        displayAsCapabilityClass(): string;
        getMaxStackSizeForSlot(arg0: CAP, arg1: number): number;
        matchesCapabilityHandler(arg0: $Object): boolean;
        getRegistryKeyForItem(arg0: ITEM): $ResourceLocation;
        getRegistryKeyForStack(arg0: STACK): $ResourceLocation;
        getItemFromRegistryKey(arg0: $ResourceLocation_): ITEM;
        forEachCapability(arg0: $ProgramContext, arg1: $LabelAccess_, arg2: $CapabilityConsumer_<CAP>): void;
        displayAsCode(): string;
        forEachDirectionalCapability(arg0: $ProgramContext, arg1: $SideQualifier_, arg2: $BlockPos_, arg3: $BiConsumer_<$Direction, CAP>): void;
        static LOG_RESOURCE_TYPE_GET_CAPABILITIES_CAP_NOT_PRESENT: $LocalizationEntry;
        static LOG_RESOURCE_TYPE_GET_CAPABILITIES_CAP_PRESENT: $LocalizationEntry;
        static LOG_RESOURCE_TYPE_GET_CAPABILITIES_BEGIN: $LocalizationEntry;
        CAPABILITY_KIND: $SFMBlockCapabilityKind<CAP>;
        constructor(arg0: $SFMBlockCapabilityKind_<CAP>);
        get items(): $Iterable<ITEM>;
        get registryKeys(): $Set<$ResourceLocation>;
        get emptyStack(): STACK;
    }
    /**
     * Values that may be interpreted as {@link $ResourceType}.
     */
    export type $ResourceType_<STACK, ITEM, CAP> = RegistryTypes.SfmResourceType;
    export interface $ResourceType<STACK, ITEM, CAP> extends RegistryMarked<RegistryTypes.SfmResourceTypeTag, RegistryTypes.SfmResourceType> {}
}
