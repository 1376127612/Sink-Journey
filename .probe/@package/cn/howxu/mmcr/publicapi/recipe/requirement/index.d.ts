import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IoDirection } from "@package/cn/howxu/mmcr/publicapi/recipe";
import { $List } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/publicapi/recipe/requirement" {
    export class $RequirementSpec {
    }
    export interface $RequirementSpec {
        kindId(): $ResourceLocation;
        copy(): $RequirementSpec;
        io(): $IoDirection;
        tags(): $List<string>;
    }
    export class $SmartInterfaceRequirementSpec {
    }
    export interface $SmartInterfaceRequirementSpec extends $RequirementSpec {
        interfaceType(): string;
        maxValue(): number;
        minValue(): number;
    }
}
