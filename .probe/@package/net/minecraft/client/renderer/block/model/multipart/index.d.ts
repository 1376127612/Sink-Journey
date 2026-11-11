import { $JsonElement_, $JsonDeserializationContext_, $JsonDeserializer } from "@package/com/google/gson";
import { $BlockModelDefinition$Context, $MultiVariant } from "@package/net/minecraft/client/renderer/block/model";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $ICache } from "@package/com/ccr4ft3r/lightspeed/interfaces";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Splitter } from "@package/com/google/common/base";
import { $List, $Set, $List_, $Collection } from "@package/java/util";
import { $Predicate, $Function_ } from "@package/java/util/function";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Type } from "@package/java/lang/reflect";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $CharSequence, $Iterable_ } from "@package/java/lang";

declare module "@package/net/minecraft/client/renderer/block/model/multipart" {
    export class $Selector$Deserializer implements $JsonDeserializer<$Selector> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $Selector;
        constructor();
    }
    export class $MultiPart implements $UnbakedModel {
        getSelectors(): $List<$Selector>;
        getMultiVariants(): $Set<$MultiVariant>;
        getDependencies(): $Collection<$ResourceLocation>;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        handler$bgn000$lightspeed$getDependenciesReturnInjected(arg0: $CallbackInfoReturnable<any>): void;
        handler$bgn000$lightspeed$getDependenciesHeadInjected(arg0: $CallbackInfoReturnable<any>): void;
        definition: $StateDefinition<$Block, $BlockState>;
        constructor(definition: $StateDefinition<$Block_, $BlockState_>, selectors: $List_<$Selector>);
        get selectors(): $List<$Selector>;
        get multiVariants(): $Set<$MultiVariant>;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $MultiPart$Deserializer implements $JsonDeserializer<$MultiPart> {
        deserialize(json: $JsonElement_, type: $Type, jsonContext: $JsonDeserializationContext_): $MultiPart;
        constructor(context: $BlockModelDefinition$Context);
    }
    export class $Condition {
        static TRUE: $Condition;
        static FALSE: $Condition;
    }
    export interface $Condition {
        getPredicate(definition: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $Condition}.
     */
    export type $Condition_ = ((arg0: $StateDefinition<$Block, $BlockState>) => $Predicate<$BlockState>);
    export class $KeyValueCondition implements $Condition {
        redirect$bgj000$lightspeed$getPredicateSplitToListRedirected(arg0: $Splitter, arg1: $CharSequence): $List<any>;
        getPredicate(definition: $StateDefinition<any, any>): $Predicate<any>;
        constructor(key: string, value: string);
    }
    export class $AndCondition implements $Condition {
        getPredicate(definition: $StateDefinition<any, any>): $Predicate<any>;
        static TOKEN: string;
        constructor(conditions: $Iterable_<$Condition>);
    }
    export class $Selector implements $ICache {
        getVariant(): $MultiVariant;
        getPredicate(definition: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
        lightspeed$persistAndClearCache(): void;
        handler$bgl000$lightspeed$initReturnInjected(arg0: $Condition_, arg1: $MultiVariant, arg2: $CallbackInfo): void;
        handler$bgl000$lightspeed$getPredicateHeadInjected(arg0: $StateDefinition<any, any>, arg1: $CallbackInfoReturnable<any>): void;
        handler$bgl000$lightspeed$getPredicateReturnInjected(arg0: $StateDefinition<any, any>, arg1: $CallbackInfoReturnable<any>): void;
        constructor(condition: $Condition_, variant: $MultiVariant);
        get variant(): $MultiVariant;
    }
    export class $OrCondition implements $Condition {
        getPredicate(definition: $StateDefinition<any, any>): $Predicate<any>;
        static TOKEN: string;
        constructor(conditions: $Iterable_<$Condition>);
    }
}
