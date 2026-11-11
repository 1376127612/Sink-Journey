import { $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ItemDisplayContext_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $List_ } from "@package/java/util";
import { $IValueTypeLogicProgrammerElement } from "@package/org/cyclops/integrateddynamics/api/logicprogrammer";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ChatFormatting } from "@package/net/minecraft";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";

declare module "@package/org/cyclops/integrateddynamics/api/evaluate/variable" {
    export class $ValueDeseralizationContext extends $Record {
        static of(arg0: $HolderLookup$Provider): $ValueDeseralizationContext;
        static of(arg0: $Level_): $ValueDeseralizationContext;
        static ofClient(): $ValueDeseralizationContext;
        holderLookupProvider(): $HolderLookup$Provider;
        static ofAllEnabled(): $ValueDeseralizationContext;
        constructor(holderLookupProvider: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $ValueDeseralizationContext}.
     */
    export type $ValueDeseralizationContext_ = { holderLookupProvider?: $HolderLookup$Provider,  } | [holderLookupProvider?: $HolderLookup$Provider, ];
    export class $IValueType<V extends $IValue> {
    }
    export interface $IValueType<V extends $IValue> {
        toString(arg0: V): string;
        cast(arg0: $IValue): V;
        getDefault(): V;
        getTypeName(): string;
        materialize(arg0: V): V;
        deserialize(arg0: $ValueDeseralizationContext_, arg1: $Tag_): V;
        parseString(arg0: string): V;
        isObject(): boolean;
        serialize(arg0: $ValueDeseralizationContext_, arg1: V): $Tag;
        canDeserialize(arg0: $ValueDeseralizationContext_, arg1: $Tag_): $Component;
        getDisplayColorFormat(): $ChatFormatting;
        getTranslationKey(): string;
        loadTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: V | null): void;
        createLogicProgrammerElement(): $IValueTypeLogicProgrammerElement<any, any, any>;
        getVariableItemOverrideModel(arg0: V, arg1: $BakedModel, arg2: $ItemStack_, arg3: $ClientLevel | null, arg4: $LivingEntity | null): $BakedModel;
        getUniqueName(): $ResourceLocation;
        toCompactString(arg0: V): $MutableComponent;
        getDisplayColor(): number;
        getExpressionName(): string;
        correspondsTo(arg0: $IValueType<never>): boolean;
        renderISTER(arg0: V, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number): void;
        isCategory(): boolean;
        get default(): V;
        get typeName(): string;
        get object(): boolean;
        get displayColorFormat(): $ChatFormatting;
        get translationKey(): string;
        get uniqueName(): $ResourceLocation;
        get displayColor(): number;
        get expressionName(): string;
        get category(): boolean;
    }
    export class $IVariable<V extends $IValue> {
    }
    export interface $IVariable<V extends $IValue> extends $IVariableInvalidateListener {
        getValue(): V;
        getType(): $IValueType<V>;
        addInvalidationListener(arg0: $IVariableInvalidateListener_): void;
        removeInvalidationListener(arg0: $IVariableInvalidateListener_): void;
        get value(): V;
        get type(): $IValueType<V>;
    }
    export class $IValue {
    }
    export interface $IValue {
        cast<V extends $IValue>(arg0: $IValueType<V>): V;
        getType(): $IValueType<any>;
        canCast<V extends $IValue>(arg0: $IValueType<V>): boolean;
        get type(): $IValueType<any>;
    }
    export class $IVariableInvalidateListener {
    }
    export interface $IVariableInvalidateListener {
        invalidate(): void;
    }
    /**
     * Values that may be interpreted as {@link $IVariableInvalidateListener}.
     */
    export type $IVariableInvalidateListener_ = (() => void);
}
