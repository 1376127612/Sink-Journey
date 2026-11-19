import { $IValueType, $IValue, $IVariable } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List_ } from "@package/java/util";
import { $IConfigRenderPattern } from "@package/org/cyclops/integrateddynamics/api/logicprogrammer";

declare module "@package/org/cyclops/integrateddynamics/api/evaluate/operator" {
    export class $IOperator {
    }
    export interface $IOperator {
        getGlobalInteractNamePrefix(): string;
        getUniqueName(): $ResourceLocation;
        getTranslationKey(): string;
        loadTooltip(arg0: $List_<$Component_>, arg1: boolean): void;
        shouldAlsoPrefixLocalScope(): boolean;
        getGlobalInteractName(): string;
        getScopedInteractName(): string;
        getUnlocalizedCategoryName(): string;
        getLocalizedNameFull(): $MutableComponent;
        getRequiredInputLength(): number;
        getConditionalOutputType(arg0: $IVariable<any>[]): $IValueType<any>;
        getInteractName(): string;
        getInputTypes(): $IValueType<any>[];
        getOutputType(): $IValueType<any>;
        getRenderPattern(): $IConfigRenderPattern;
        validateTypes(arg0: $IValueType<any>[]): $MutableComponent;
        evaluate(...arg0: $IVariable<any>[]): $IValue;
        materialize(): $IOperator;
        getSymbol(): string;
        get globalInteractNamePrefix(): string;
        get uniqueName(): $ResourceLocation;
        get translationKey(): string;
        get globalInteractName(): string;
        get scopedInteractName(): string;
        get unlocalizedCategoryName(): string;
        get localizedNameFull(): $MutableComponent;
        get requiredInputLength(): number;
        get interactName(): string;
        get inputTypes(): $IValueType<any>[];
        get outputType(): $IValueType<any>;
        get renderPattern(): $IConfigRenderPattern;
        get symbol(): string;
    }
}
