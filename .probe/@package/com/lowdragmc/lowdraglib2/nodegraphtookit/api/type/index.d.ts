import { $IFieldValueConfigurable } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api";
import { $Type } from "@package/java/lang/reflect";
import { $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Comparable, $Object } from "@package/java/lang";
import { $IConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/api/type" {
    export class $TypeHandle implements $Comparable<$TypeHandle> {
        getIcon(): $IGuiTexture;
        getIdentification(): string;
        getFriendlyName(): string;
        isCustomTypeHandle(): boolean;
        getTypeColor(): number;
        resolveConfigurable(): $ITypeConfigurable;
        getDefaultValue(): $Object;
        getName(): string;
        isAssignableFrom(arg0: $TypeHandle): boolean;
        compareTo(arg0: $TypeHandle): number;
        resolve(): $Type;
        static create(arg0: string): $TypeHandle;
        isValid(): boolean;
        get icon(): $IGuiTexture;
        get identification(): string;
        get friendlyName(): string;
        get customTypeHandle(): boolean;
        get typeColor(): number;
        get defaultValue(): $Object;
        get name(): string;
        get valid(): boolean;
    }
    export class $ITypeConfigurable {
        static NOP: $ITypeConfigurable;
        static DEFAULT: $ITypeConfigurable;
    }
    export interface $ITypeConfigurable {
        createConfigurable(arg0: $IFieldValueConfigurable, arg1: $TypeHandle): $IConfigurable;
    }
    /**
     * Values that may be interpreted as {@link $ITypeConfigurable}.
     */
    export type $ITypeConfigurable_ = ((arg0: $IFieldValueConfigurable, arg1: $TypeHandle) => $IConfigurable);
}
