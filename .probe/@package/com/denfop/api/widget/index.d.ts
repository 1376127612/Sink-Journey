import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractWidget, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List_ } from "@package/java/util";
import { $Supplier, $Supplier_ } from "@package/com/google/common/base";
import { $ScreenIndustrialUpgrade } from "@package/com/denfop/screen";

declare module "@package/com/denfop/api/widget" {
    export class $ScreenWidget extends $AbstractWidget {
        contains(arg0: number, arg1: number): boolean;
        getType(): $EnumTypeComponent;
        getIndex(): number;
        visible(): boolean;
        drawBackground(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        setIndex(arg0: number): void;
        getComponent(): $WidgetDefault<never>;
        addY(arg0: number): void;
        onMouseClick(arg0: number, arg1: number, arg2: $MouseButton): boolean;
        drawForeground(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        withTooltip(arg0: $Supplier_<string>): $ScreenWidget;
        withTooltip(arg0: string): $ScreenWidget;
        buttonClicked(arg0: number, arg1: number): void;
        getTooltipProvider(): $Supplier<string>;
        getGui(): $ScreenIndustrialUpgrade<never>;
        renderBar(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setGui(arg0: $ScreenIndustrialUpgrade<never>): void;
        static bindBlockTexture(): void;
        static addLines(arg0: $List_<string>, arg1: string): void;
        static bindCommonTexture2(): void;
        static bindCommonTexture1(): void;
        static bindCommonTexture3(): void;
        static bindCommonTexture(): void;
        static bindCommonTexture4(): void;
        static getBlockTextureMap(): $TextureAtlas;
        static bindCommonTexture5(): void;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static MIN_SCROLL_PERIOD: number;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        focused: boolean;
        gui: $ScreenIndustrialUpgrade<never>;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $WidgetDefault<never>);
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $EnumTypeComponent, arg4: $WidgetDefault<never>);
        get type(): $EnumTypeComponent;
        get component(): $WidgetDefault<never>;
        get tooltipProvider(): $Supplier<string>;
        static get blockTextureMap(): $TextureAtlas;
    }
    export class $ITypeSlot {
    }
    export interface $ITypeSlot {
        getTypeSlot(): $EnumTypeSlot;
        getTypeSlot(arg0: number): $EnumTypeSlot;
    }
    export class $EnumTypeSlot extends $Enum<$EnumTypeSlot> {
        static values(): $EnumTypeSlot[];
        static valueOf(arg0: string): $EnumTypeSlot;
        getY(): number;
        getX(): number;
        getWeight(): number;
        getHeight(): number;
        static FISHING_ROD: $EnumTypeSlot;
        static BUCKET: $EnumTypeSlot;
        static WATER_ROD_PART: $EnumTypeSlot;
        static QUARRY1: $EnumTypeSlot;
        static CROP: $EnumTypeSlot;
        static CATHODE: $EnumTypeSlot;
        static EXP_MODULE: $EnumTypeSlot;
        static WIRELESS: $EnumTypeSlot;
        static PLASM: $EnumTypeSlot;
        static COLOR: $EnumTypeSlot;
        static FERTILIZER: $EnumTypeSlot;
        static SOLARIUM: $EnumTypeSlot;
        static QUARRY: $EnumTypeSlot;
        static WATER_ROTOR: $EnumTypeSlot;
        static EXCHANGE: $EnumTypeSlot;
        static ROD_PART: $EnumTypeSlot;
        static STORAGE_CELL: $EnumTypeSlot;
        static RECIPE_SCHEDULE: $EnumTypeSlot;
        static BATTERY: $EnumTypeSlot;
        static MATTER: $EnumTypeSlot;
        static TUBE: $EnumTypeSlot;
        static CAPACITOR: $EnumTypeSlot;
        static ROTOR_UPGRADE: $EnumTypeSlot;
        static BIT: $EnumTypeSlot;
        static PRIVATE: $EnumTypeSlot;
        static ROTOR: $EnumTypeSlot;
        static ROD_PART1: $EnumTypeSlot;
        static BLOCKS: $EnumTypeSlot;
        static UPGRADE: $EnumTypeSlot;
        static ANODE: $EnumTypeSlot;
        static LIST: $EnumTypeSlot;
        get y(): number;
        get x(): number;
        get weight(): number;
        get height(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeSlot}.
     */
    export type $EnumTypeSlot_ = "bucket" | "list" | "color" | "rotor" | "rotor_upgrade" | "blocks" | "rod_part" | "rod_part1" | "quarry" | "quarry1" | "water_rod_part" | "water_rotor" | "upgrade" | "wireless" | "private" | "cathode" | "anode" | "matter" | "solarium" | "exp_module" | "fishing_rod" | "plasm" | "recipe_schedule" | "fertilizer" | "battery" | "crop" | "tube" | "bit" | "exchange" | "capacitor" | "storage_cell";
}
