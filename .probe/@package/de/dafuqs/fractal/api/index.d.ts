import { $CreativeModeTab$DisplayItemsGenerator, $ItemStack, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Collection, $Set, $List } from "@package/java/util";

declare module "@package/de/dafuqs/fractal/api" {
    export class $ICreativeTabConfiguration {
    }
    export interface $ICreativeTabConfiguration {
        fractal$setTextColor(arg0: number, arg1: number, arg2: number): void;
        fractal$setTabOffset(arg0: number): void;
    }
    export class $CreativeSubTabStyle extends $Record {
        tabBottomFirstSelectedTexture(): $ResourceLocation;
        unselectedSubtabTextureLeft(): $ResourceLocation;
        tabTopFirstUnselectedTexture(): $ResourceLocation;
        tabBottomLastUnselectedTexture(): $ResourceLocation;
        unselectedSubtabTextureRight(): $ResourceLocation;
        tabTopLastUnselectedTexture(): $ResourceLocation;
        tabBottomFirstUnselectedTexture(): $ResourceLocation;
        tabBottomLastSelectedTexture(): $ResourceLocation;
        selectedSubtabTextureLeft(): $ResourceLocation;
        selectedSubtabTextureRight(): $ResourceLocation;
        enabledScrollbarTexture(): $ResourceLocation;
        disabledScrollbarTexture(): $ResourceLocation;
        tabTopFirstSelectedTexture(): $ResourceLocation;
        tabTopSelectedTexture(): $ResourceLocation;
        tabTopLastSelectedTexture(): $ResourceLocation;
        tabTopUnselectedTexture(): $ResourceLocation;
        tabBottomSelectedTexture(): $ResourceLocation;
        tabBottomUnselectedTexture(): $ResourceLocation;
        backgroundTexture(): $ResourceLocation;
        static DEFAULT_SUBTAB_UNSELECTED_TEXTURE_LEFT: $ResourceLocation;
        static DEFAULT_SUBTAB_SELECTED_TEXTURE_RIGHT: $ResourceLocation;
        static DEFAULT_SUBTAB_SELECTED_TEXTURE_LEFT: $ResourceLocation;
        static DEFAULT_SUBTAB_UNSELECTED_TEXTURE_RIGHT: $ResourceLocation;
        constructor(backgroundTexture: $ResourceLocation_, selectedSubtabTextureLeft: $ResourceLocation_, unselectedSubtabTextureLeft: $ResourceLocation_, selectedSubtabTextureRight: $ResourceLocation_, unselectedSubtabTextureRight: $ResourceLocation_, enabledScrollbarTexture: $ResourceLocation_, disabledScrollbarTexture: $ResourceLocation_, tabTopFirstSelectedTexture: $ResourceLocation_, tabTopSelectedTexture: $ResourceLocation_, tabTopLastSelectedTexture: $ResourceLocation_, tabTopFirstUnselectedTexture: $ResourceLocation_, tabTopUnselectedTexture: $ResourceLocation_, tabTopLastUnselectedTexture: $ResourceLocation_, tabBottomFirstSelectedTexture: $ResourceLocation_, tabBottomSelectedTexture: $ResourceLocation_, tabBottomLastSelectedTexture: $ResourceLocation_, tabBottomFirstUnselectedTexture: $ResourceLocation_, tabBottomUnselectedTexture: $ResourceLocation_, tabBottomLastUnselectedTexture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CreativeSubTabStyle}.
     */
    export type $CreativeSubTabStyle_ = { tabBottomLastSelectedTexture?: $ResourceLocation_, tabBottomUnselectedTexture?: $ResourceLocation_, tabTopFirstSelectedTexture?: $ResourceLocation_, tabTopLastSelectedTexture?: $ResourceLocation_, disabledScrollbarTexture?: $ResourceLocation_, tabBottomFirstSelectedTexture?: $ResourceLocation_, selectedSubtabTextureLeft?: $ResourceLocation_, tabTopFirstUnselectedTexture?: $ResourceLocation_, unselectedSubtabTextureLeft?: $ResourceLocation_, tabTopSelectedTexture?: $ResourceLocation_, unselectedSubtabTextureRight?: $ResourceLocation_, backgroundTexture?: $ResourceLocation_, tabBottomFirstUnselectedTexture?: $ResourceLocation_, tabTopUnselectedTexture?: $ResourceLocation_, selectedSubtabTextureRight?: $ResourceLocation_, tabBottomLastUnselectedTexture?: $ResourceLocation_, tabBottomSelectedTexture?: $ResourceLocation_, enabledScrollbarTexture?: $ResourceLocation_, tabTopLastUnselectedTexture?: $ResourceLocation_,  } | [tabBottomLastSelectedTexture?: $ResourceLocation_, tabBottomUnselectedTexture?: $ResourceLocation_, tabTopFirstSelectedTexture?: $ResourceLocation_, tabTopLastSelectedTexture?: $ResourceLocation_, disabledScrollbarTexture?: $ResourceLocation_, tabBottomFirstSelectedTexture?: $ResourceLocation_, selectedSubtabTextureLeft?: $ResourceLocation_, tabTopFirstUnselectedTexture?: $ResourceLocation_, unselectedSubtabTextureLeft?: $ResourceLocation_, tabTopSelectedTexture?: $ResourceLocation_, unselectedSubtabTextureRight?: $ResourceLocation_, backgroundTexture?: $ResourceLocation_, tabBottomFirstUnselectedTexture?: $ResourceLocation_, tabTopUnselectedTexture?: $ResourceLocation_, selectedSubtabTextureRight?: $ResourceLocation_, tabBottomLastUnselectedTexture?: $ResourceLocation_, tabBottomSelectedTexture?: $ResourceLocation_, enabledScrollbarTexture?: $ResourceLocation_, tabTopLastUnselectedTexture?: $ResourceLocation_, ];
    export class $CreativeSubTab extends $CreativeModeTab {
        getIndexInParent(): number;
        shouldShowParentTitle(): boolean;
        getParent(): $CreativeModeTab;
        getIdentifier(): $ResourceLocation;
        getStyle(): $CreativeSubTabStyle;
        static DEFAULT_STYLE: $CreativeSubTabStyle;
        static SUBTABS: $List<$CreativeSubTab>;
        tabsAfter: $List<$ResourceLocation>;
        tabsBefore: $List<$ResourceLocation>;
        displayItemsGenerator: $CreativeModeTab$DisplayItemsGenerator;
        displayItemsSearchTab: $Set<$ItemStack>;
        displayItems: $Collection<$ItemStack>;
        get indexInParent(): number;
        get parent(): $CreativeModeTab;
        get identifier(): $ResourceLocation;
        get style(): $CreativeSubTabStyle;
    }
}
