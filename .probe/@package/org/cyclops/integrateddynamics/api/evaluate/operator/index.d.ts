import { $IValueType, $IValue, $IVariable } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List_ } from "@package/java/util";
import { $IConfigRenderPattern } from "@package/org/cyclops/integrateddynamics/api/logicprogrammer";

declare module "@package/org/cyclops/integrateddynamics/api/evaluate/operator" {
    export class $IOperator {
    }
    export interface $IOperator {
        evaluate(...arg0: $IVariable<any>[]): $IValue;
        materialize(): $IOperator;
        getSymbol(): string;
        getScopedInteractName(): string;
        getGlobalInteractName(): string;
        getUnlocalizedCategoryName(): string;
        getRequiredInputLength(): number;
        getLocalizedNameFull(): $MutableComponent;
        shouldAlsoPrefixLocalScope(): boolean;
        getConditionalOutputType(arg0: $IVariable<any>[]): $IValueType<any>;
        getTranslationKey(): string;
        loadTooltip(arg0: $List_<$Component_>, arg1: boolean): void;
        getGlobalInteractNamePrefix(): string;
        getUniqueName(): $ResourceLocation;
        getInteractName(): string;
        getRenderPattern(): $IConfigRenderPattern;
        getOutputType(): $IValueType<any>;
        validateTypes(arg0: $IValueType<any>[]): $MutableComponent;
        getInputTypes(): $IValueType<any>[];
        get symbol(): string;
        get scopedInteractName(): string;
        get globalInteractName(): string;
        get unlocalizedCategoryName(): string;
        get requiredInputLength(): number;
        get localizedNameFull(): $MutableComponent;
        get translationKey(): string;
        get globalInteractNamePrefix(): string;
        get uniqueName(): $ResourceLocation;
        get interactName(): string;
        get renderPattern(): $IConfigRenderPattern;
        get outputType(): $IValueType<any>;
        get inputTypes(): $IValueType<any>[];
    }
}
