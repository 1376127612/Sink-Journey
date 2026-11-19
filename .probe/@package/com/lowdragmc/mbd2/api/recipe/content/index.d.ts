import { $Function } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IGuiRenderable } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $RecipeCapability } from "@package/com/lowdragmc/mbd2/api/capability/recipe";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List_ } from "@package/java/util";
import { $Object, $Number } from "@package/java/lang";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/lowdragmc/mbd2/api/recipe/content" {
    export class $Content implements $IConfigurable {
        static codec<T>(arg0: $RecipeCapability<T>): $Codec<$Content>;
        appendTooltip(arg0: $List_<$Component_>): void;
        createOverlay(): $IGuiRenderable;
        drawSmallString(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string, arg7: number): void;
        copy(arg0: $RecipeCapability<never>, arg1: $ContentModifier | null): $Content;
        getContent(): $Object;
        deepCopy(arg0: $RecipeCapability<never>, arg1: $ContentModifier | null): $Content;
        static streamCodec(arg0: $RecipeCapability<never>): $StreamCodec<$RegistryFriendlyByteBuf, $Content>;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        slotName: string;
        static CODEC: $Function<$RecipeCapability<never>, $Codec<$Content>>;
        chance: number;
        tierChanceBoost: number;
        perTick: boolean;
        uiName: string;
        content: $Object;
        constructor(arg0: $Object, arg1: boolean, arg2: number, arg3: number);
        constructor(arg0: $Object, arg1: boolean, arg2: number, arg3: number, arg4: string | null, arg5: string | null);
        get configurableName(): string;
    }
    export class $ContentModifier implements $IConfigurable {
        getAddition(): number;
        apply(arg0: $Number): $Number;
        static of(arg0: number, arg1: number): $ContentModifier;
        merge(arg0: $ContentModifier): $ContentModifier;
        static identity(): $ContentModifier;
        isIdentity(): boolean;
        static multiplier(arg0: number): $ContentModifier;
        getMultiplier(): number;
        setMultiplier(arg0: number): void;
        static addition(arg0: number): $ContentModifier;
        setAddition(arg0: number): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        static IDENTITY: $ContentModifier;
        constructor(arg0: number, arg1: number);
        get configurableName(): string;
    }
    export class $IContentSerializer<T> {
    }
    export interface $IContentSerializer<T> {
        codec(): $Codec<T>;
        copyWithModifier(arg0: T, arg1: $ContentModifier): T;
        copyInner(arg0: T): T;
        deepCopyInner(arg0: T): T;
        of(arg0: $Object): T;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
}
