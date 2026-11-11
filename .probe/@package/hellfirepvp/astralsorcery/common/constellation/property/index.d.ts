import { $BaseConstellation } from "@package/hellfirepvp/astralsorcery/common/constellation";

declare module "@package/hellfirepvp/astralsorcery/common/constellation/property" {
    export class $ConstellationProperty$Key<T extends $ConstellationProperty<T>> {
        constructor();
    }
    export class $ConstellationProperty<T extends $ConstellationProperty<T>> {
        getKey(): $ConstellationProperty$Key<T>;
        getConstellation(): $BaseConstellation;
        get key(): $ConstellationProperty$Key<T>;
        get constellation(): $BaseConstellation;
    }
}
