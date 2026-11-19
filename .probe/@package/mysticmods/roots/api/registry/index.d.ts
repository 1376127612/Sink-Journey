import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Component, $MutableComponent, $TextColor, $Style } from "@package/net/minecraft/network/chat";
import { $CostInstance } from "@package/mysticmods/roots/api/herb";
import { $ParentChargeType } from "@package/mysticmods/roots/api/spell";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $ChildChargeType } from "@package/mysticmods/roots/api/modifier";

declare module "@package/mysticmods/roots/api/registry" {
    export class $IStyledInstance<T> {
    }
    export interface $IStyledInstance<T> extends $IStyled {
        isBold(arg0: T): boolean;
        getTextColor(arg0: T): $TextColor;
        getStyledName(arg0: T, arg1: boolean): $MutableComponent;
        getStyledName(arg0: T): $MutableComponent;
        getOrCreateStyle(arg0: T): $Style;
        getName(arg0: T): $MutableComponent;
        getName(arg0: T, arg1: $Style): $MutableComponent;
        getDescriptionId(arg0: T): string;
        getStyle(arg0: T): $Style;
        getOrCreateDescriptionId(arg0: T): string;
    }
    export class $ICostedChild {
    }
    export interface $ICostedChild extends $ICosted {
        getChargeType(): $ChildChargeType;
        get chargeType(): $ChildChargeType;
    }
    export class $IGroupDescribed {
    }
    export interface $IGroupDescribed {
        getGroupDescriptionId(): string;
        getOrCreateGroupDescriptionId(): string;
        getGroupKey(): $GroupId;
        canGroup(): boolean;
        getGroupName(arg0: number): $MutableComponent;
        getGroupName(arg0: number, arg1: $Style): $MutableComponent;
        get groupDescriptionId(): string;
        get orCreateGroupDescriptionId(): string;
        get groupKey(): $GroupId;
    }
    /**
     * Values that may be interpreted as {@link $IGroupDescribed}.
     */
    export type $IGroupDescribed_ = (() => boolean);
    export class $IDescribed {
    }
    export interface $IDescribed {
        getName(arg0: $Style): $MutableComponent;
        getName(): $MutableComponent;
        getDescriptionId(): string;
        getOrCreateDescriptionId(): string;
        get descriptionId(): string;
        get orCreateDescriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $IDescribed}.
     */
    export type $IDescribed_ = (() => string);
    export class $ITooltipDescribed {
    }
    export interface $ITooltipDescribed extends $IDescribed {
        getTooltipDescriptionId(): string;
        getTooltipDescription(): $MutableComponent;
        getOrCreateTooltipDescriptionId(): string;
        get tooltipDescriptionId(): string;
        get tooltipDescription(): $MutableComponent;
        get orCreateTooltipDescriptionId(): string;
    }
    export class $IExtendedDescribedInstance<T> {
    }
    export interface $IExtendedDescribedInstance<T> extends $IExtendedDescribed {
        getTooltipDescriptionId(arg0: T): string;
        getTooltipDescription(arg0: T): $MutableComponent;
        getOrCreateTooltipExtendedDescriptionId(arg0: T): string;
        getTooltipExtendedDescription(arg0: T): $MutableComponent;
        getOrCreateTooltipDescriptionId(arg0: T): string;
        getTooltipExtendedDescriptionId(arg0: T): string;
        getOrCreateDescriptionComponents(arg0: T): $Component[];
    }
    export class $IStyled {
    }
    export interface $IStyled extends $IDescribed {
        isBold(): boolean;
        getTextColor(): $TextColor;
        getStyledName(arg0: boolean): $MutableComponent;
        getStyledName(): $MutableComponent;
        getOrCreateStyle(): $Style;
        getStyle(): $Style;
        get bold(): boolean;
        get textColor(): $TextColor;
        get orCreateStyle(): $Style;
        get style(): $Style;
    }
    export class $ICostedParent {
    }
    export interface $ICostedParent extends $ICosted {
        hasChild(arg0: $ICostedChild): boolean;
        getChargeType(): $ParentChargeType;
        getChildren(): $Set<$ICostedChild>;
        get chargeType(): $ParentChargeType;
        get children(): $Set<$ICostedChild>;
    }
    export class $GroupId extends $Record {
        groupKey(): string;
        useGroupDescription(): boolean;
        createDescriptionId(arg0: string, arg1: $ResourceKey_<never>): string;
        createDescriptionId(arg0: string, arg1: string): string;
        isEmpty(): boolean;
        static NONE: $GroupId;
        constructor(groupKey: string, useGroupDescription: boolean);
        constructor(arg0: string);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GroupId}.
     */
    export type $GroupId_ = { groupKey?: string, useGroupDescription?: boolean,  } | [groupKey?: string, useGroupDescription?: boolean, ];
    export class $ICosted {
    }
    export interface $ICosted {
        getBaseMaximumOperations(): number;
        getMaximumOperations(arg0: $Object2BooleanMap<$ICosted>): number;
        getDefaultCosts(): $CostInstance;
        getCosts(): $CostInstance;
        get baseMaximumOperations(): number;
        get defaultCosts(): $CostInstance;
        get costs(): $CostInstance;
    }
    export class $IDataMapInitialize<T extends $IDataMapInitialize<T>> {
    }
    export interface $IDataMapInitialize<T extends $IDataMapInitialize<T>> {
        performInit(arg0: $Holder_<never>): void;
        init(arg0: $Holder_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $IDataMapInitialize}.
     */
    export type $IDataMapInitialize_<T> = ((arg0: $Holder<T>) => void);
    export class $IExtendedDescribed {
    }
    export interface $IExtendedDescribed extends $ITooltipDescribed {
        getOrCreateTooltipExtendedDescriptionId(): string;
        getTooltipExtendedDescription(): $MutableComponent;
        getTooltipExtendedDescriptionId(): string;
        getOrCreateDescriptionComponents(): $Component[];
        get orCreateTooltipExtendedDescriptionId(): string;
        get tooltipExtendedDescription(): $MutableComponent;
        get tooltipExtendedDescriptionId(): string;
        get orCreateDescriptionComponents(): $Component[];
    }
}
