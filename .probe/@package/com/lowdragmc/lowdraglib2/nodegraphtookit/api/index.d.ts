import { $ITypeConfigurable } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
import { $Field } from "@package/java/lang/reflect";
import { $Object } from "@package/java/lang";
import { $Constant } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/constant";
import { $Tooltips } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";
export * as node from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/node";
export * as variable from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/variable";
export * as port from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/port";
export * as utils from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/utils";
export * as type from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
export * as graph from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/graph";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api" {
    export class $IFieldConstantConfigurable {
    }
    export interface $IFieldConstantConfigurable extends $IFieldValueConfigurable {
        notifyValueChanged(): void;
        getDefaultValue<T>(): T;
        getValue<T>(): T;
        setValue(arg0: $Object): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        onValueChanged(): void;
        getConfigurableConstant(): $Constant;
        getCustomTypeConfigurable(): $ITypeConfigurable;
        isConfiguratorEnabled(): boolean;
        get defaultValue(): T;
        get configurableConstant(): $Constant;
        get customTypeConfigurable(): $ITypeConfigurable;
        get configuratorEnabled(): boolean;
    }
    export class $IFieldValueConfigurable {
    }
    export interface $IFieldValueConfigurable extends $IConfigurable {
        getValueField(): $Field;
        getTooltips(): $Tooltips;
        isShowInInspectorOnly(): boolean;
        forceUpdate(): boolean;
        getCustomTooltips(): $Tooltips;
        getValueOwer(): $Object;
        notifyValueChanged(): void;
        getDefaultValue<T>(): T;
        getValue<T>(): T;
        setValue(arg0: $Object): void;
        get valueField(): $Field;
        get tooltips(): $Tooltips;
        get showInInspectorOnly(): boolean;
        get customTooltips(): $Tooltips;
        get valueOwer(): $Object;
        get defaultValue(): T;
    }
}
