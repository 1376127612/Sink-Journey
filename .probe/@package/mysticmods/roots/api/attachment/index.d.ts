import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Spell, $Spell_ } from "@package/mysticmods/roots/api/spell";
import { $BiMap } from "@package/com/google/common/collect";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $SpellModifier } from "@package/mysticmods/roots/api/modifier";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mysticmods/roots/api/attachment" {
    export class $Unlock<T> {
        static modifier(arg0: $Holder_<$SpellModifier>): $Unlock$SpellModifierUnlock;
        static spell(arg0: $Spell_): $Unlock$SpellUnlock;
        static spell(arg0: $Holder_<$Spell>): $Unlock$SpellUnlock;
        static TYPES: $BiMap<$ResourceLocation, $Unlock$UnlockType>;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Unlock<never>>>;
        static CODEC: $Codec<$Unlock<never>>;
        static LIST_CODEC: $Codec<$List<$Unlock<never>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Unlock<never>>;
    }
    export interface $Unlock<T> {
        getIcon(): $ItemStack;
        getFailed(): $Component;
        unlockType(): $Unlock$UnlockType;
        is(arg0: $Unlock$UnlockType_): boolean;
        get icon(): $ItemStack;
        get failed(): $Component;
    }
    export class $Unlock$SpellModifierUnlock extends $Record implements $Unlock<$SpellModifier> {
        getFailed(): $Component;
        unlockType(): $Unlock$UnlockType;
        value(): $Holder<$SpellModifier>;
        getIcon(): $ItemStack;
        is(arg0: $Unlock$UnlockType_): boolean;
        static CODEC: $MapCodec<$Unlock$SpellModifierUnlock>;
        static TYPE: $Unlock$UnlockType;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Unlock$SpellModifierUnlock>;
        constructor(value: $Holder_<$SpellModifier>);
        get failed(): $Component;
        get icon(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $Unlock$SpellModifierUnlock}.
     */
    export type $Unlock$SpellModifierUnlock_ = { value?: $Holder_<$SpellModifier>,  } | [value?: $Holder_<$SpellModifier>, ];
    export class $Unlock$SpellUnlock extends $Record implements $Unlock<$Spell> {
        getIcon(): $ItemStack;
        getFailed(): $Component;
        unlockType(): $Unlock$UnlockType;
        value(): $Holder<$Spell>;
        is(arg0: $Unlock$UnlockType_): boolean;
        static CODEC: $MapCodec<$Unlock$SpellUnlock>;
        static TYPE: $Unlock$UnlockType;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Unlock$SpellUnlock>;
        constructor(value: $Holder_<$Spell>);
        get icon(): $ItemStack;
        get failed(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Unlock$SpellUnlock}.
     */
    export type $Unlock$SpellUnlock_ = { value?: $Holder_<$Spell>,  } | [value?: $Holder_<$Spell>, ];
    export class $Unlock$UnlockType extends $Record {
        codec(): $MapCodec<$Unlock<never>>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $Unlock<never>>;
        constructor(codec: $MapCodec_<$Unlock<never>>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, $Unlock<never>>);
    }
    /**
     * Values that may be interpreted as {@link $Unlock$UnlockType}.
     */
    export type $Unlock$UnlockType_ = { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $Unlock<never>>, codec?: $MapCodec_<$Unlock<never>>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $Unlock<never>>, codec?: $MapCodec_<$Unlock<never>>, ];
}
