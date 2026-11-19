import { $DataResult } from "@package/com/mojang/serialization";
import { $SectionModel, $GroupModelBase, $IGroupItemModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/group";
import { $VariableKind, $IVariable } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/variable";
import { $Map_ } from "@package/java/util";
import { $Tooltips_, $Tooltips } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $GraphElementModel, $DeclarationModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model";
import { $Stream } from "@package/java/util/stream";
import { $IFieldConstantConfigurable } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api";
import { $ITypeConfigurable, $TypeHandle } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type";
import { $Type, $Field } from "@package/java/lang/reflect";
import { $Enum, $Object } from "@package/java/lang";
import { $GraphModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/graph";
import { $Constant } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/constant";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/variable" {
    export class $ModifierFlags extends $Enum<$ModifierFlags> {
        hasFlag(arg0: $ModifierFlags_): boolean;
        static values(): $ModifierFlags[];
        static valueOf(arg0: string): $ModifierFlags;
        static READ: $ModifierFlags;
        static NONE: $ModifierFlags;
        static WRITE: $ModifierFlags;
        static READ_WRITE: $ModifierFlags;
        mask: number;
    }
    /**
     * Values that may be interpreted as {@link $ModifierFlags}.
     */
    export type $ModifierFlags_ = "none" | "read" | "write" | "read_write";
    export class $VariableFlags extends $Enum<$VariableFlags> {
        static values(): $VariableFlags[];
        static valueOf(arg0: string): $VariableFlags;
        static HIDDEN: $VariableFlags;
        static NONE: $VariableFlags;
        static GENERATED: $VariableFlags;
    }
    /**
     * Values that may be interpreted as {@link $VariableFlags}.
     */
    export type $VariableFlags_ = "none" | "generated" | "hidden";
    export class $VariableScope extends $Enum<$VariableScope> {
        static values(): $VariableScope[];
        static valueOf(arg0: string): $VariableScope;
        static EXPOSED: $VariableScope;
        static LOCAL: $VariableScope;
        static UNKNOWN: $VariableScope;
    }
    /**
     * Values that may be interpreted as {@link $VariableScope}.
     */
    export type $VariableScope_ = "unknown" | "local" | "exposed";
    export class $VariableDeclarationModelBase extends $DeclarationModel implements $IVariable, $IGroupItemModel, $IFieldConstantConfigurable {
        setModifiers(arg0: $ModifierFlags_): void;
        isInput(): boolean;
        getDataType(): $Type;
        getTooltips(): $Tooltips;
        isOutput(): boolean;
        setScope(arg0: $VariableScope_): void;
        getDataTypeHandle(): $TypeHandle;
        getParentGroup(): $GroupModelBase;
        isInputOrOutput(): boolean;
        setDataTypeHandle(arg0: $TypeHandle): void;
        setVariableFlags(arg0: $VariableFlags_): void;
        requiresInitialization(): boolean;
        setInitializationModel(arg0: $Constant): void;
        getInitializationModel(): $Constant;
        setTooltips(arg0: $Tooltips_): void;
        getVariableKind(): $VariableKind;
        getScope(): $VariableScope;
        getModifiers(): $ModifierFlags;
        getSubName(): string;
        isUsed(): boolean;
        onValueChanged(): void;
        uniqueId(): string;
        isShowOnInspectorOnly(): boolean;
        createInitializationValue(): void;
        setShowOnInspectorOnly(arg0: boolean): void;
        getGroupItemInTargetGraph(arg0: $GraphModel, arg1: $Map_<$VariableDeclarationModelBase, $VariableDeclarationModelBase>): $IGroupItemModel;
        getConfigurableConstant(): $Constant;
        tryGetDefaultValue<T>(arg0: $Type): $DataResult<T>;
        getContainedModels(): $Stream<$GraphElementModel>;
        setParentGroup(arg0: $GroupModelBase): void;
        getVariableFlags(): $VariableFlags;
        isInGroup(arg0: $GroupModelBase): boolean;
        getSection(): $SectionModel;
        notifyValueChanged(): void;
        getDefaultValue<T>(): T;
        getValue<T>(): T;
        setValue(arg0: $Object): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getCustomTypeConfigurable(): $ITypeConfigurable;
        isConfiguratorEnabled(): boolean;
        getValueField(): $Field;
        isShowInInspectorOnly(): boolean;
        forceUpdate(): boolean;
        getCustomTooltips(): $Tooltips;
        getValueOwer(): $Object;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        name: string;
        constructor();
        get input(): boolean;
        get dataType(): $Type;
        get output(): boolean;
        get inputOrOutput(): boolean;
        get variableKind(): $VariableKind;
        get subName(): string;
        get used(): boolean;
        get configurableConstant(): $Constant;
        get containedModels(): $Stream<$GraphElementModel>;
        get section(): $SectionModel;
        get defaultValue(): T;
        get customTypeConfigurable(): $ITypeConfigurable;
        get configuratorEnabled(): boolean;
        get valueField(): $Field;
        get showInInspectorOnly(): boolean;
        get customTooltips(): $Tooltips;
        get valueOwer(): $Object;
        get configurableName(): string;
    }
    export class $VariableDeclarationModel extends $VariableDeclarationModelBase {
        name: string;
        constructor();
    }
}
