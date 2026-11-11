import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IoDirection } from "@package/cn/howxu/mmcr/publicapi/recipe";
import { $List } from "@package/java/util";

declare module "@package/cn/howxu/mmcr/publicapi/recipe/requirement" {
    export class $RequirementSpec {
    }
    export interface $RequirementSpec {
        copy(): $RequirementSpec;
        io(): $IoDirection;
        tags(): $List<string>;
        kindId(): $ResourceLocation;
    }
    export class $SmartInterfaceRequirementSpec {
    }
    export interface $SmartInterfaceRequirementSpec extends $RequirementSpec {
        maxValue(): number;
        minValue(): number;
        interfaceType(): string;
    }
}
