import { $ConfigOptionUIType } from "@package/xaero/lib/client/config/option/ui/type";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
export * as type from "@package/xaero/lib/client/config/option/ui/type";
export * as factory from "@package/xaero/lib/client/config/option/ui/factory";

declare module "@package/xaero/lib/client/config/option/ui" {
    export class $ConfigOptionUITypeManager {
        getUIType<CT extends $ConfigOption<never>>(arg0: CT): $ConfigOptionUIType<CT>;
        registerUIType<CT extends $ConfigOption<never>>(arg0: CT, arg1: $ConfigOptionUIType<CT>): void;
    }
}
