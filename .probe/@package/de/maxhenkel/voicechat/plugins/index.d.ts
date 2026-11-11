import { $VolumeCategoryImpl } from "@package/de/maxhenkel/voicechat/plugins/impl";
import { $Collection } from "@package/java/util";

declare module "@package/de/maxhenkel/voicechat/plugins" {
    export class $CategoryManager {
        removeCategory(arg0: string): $VolumeCategoryImpl;
        addCategory(arg0: $VolumeCategoryImpl): void;
        getCategories(): $Collection<$VolumeCategoryImpl>;
        constructor();
        get categories(): $Collection<$VolumeCategoryImpl>;
    }
}
