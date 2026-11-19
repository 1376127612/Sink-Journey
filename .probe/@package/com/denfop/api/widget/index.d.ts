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
        buttonClicked(arg0: number, arg1: number): void;
        addY(arg0: number): void;
        onMouseClick(arg0: number, arg1: number, arg2: $MouseButton_): boolean;
        drawForeground(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        withTooltip(arg0: string): $ScreenWidget;
        withTooltip(arg0: $Supplier_<string>): $ScreenWidget;
        setGui(arg0: $ScreenIndustrialUpgrade<never>): void;
        getGui(): $ScreenIndustrialUpgrade<never>;
        static addLines(arg0: $List_<string>, arg1: string): void;
        getTooltipProvider(): $Supplier<string>;
        static bindBlockTexture(): void;
        contains(arg0: number, arg1: number): boolean;
        getType(): $EnumTypeComponent;
        getIndex(): number;
        visible(): boolean;
        drawBackground(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getComponent(): $WidgetDefault<never>;
        setIndex(arg0: number): void;
        renderBar(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static bindCommonTexture1(): void;
        static getBlockTextureMap(): $TextureAtlas;
        static bindCommonTexture2(): void;
        static bindCommonTexture(): void;
        static bindCommonTexture5(): void;
        static bindCommonTexture3(): void;
        static bindCommonTexture4(): void;
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
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $EnumTypeComponent_, arg4: $WidgetDefault<never>);
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $WidgetDefault<never>);
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
        get tooltipProvider(): $Supplier<string>;
        get type(): $EnumTypeComponent;
        get component(): $WidgetDefault<never>;
        static get blockTextureMap(): $TextureAtlas;
    }
    export class $ITypeSlot {
    }
    export interface $ITypeSlot {
        getTypeSlot(): $EnumTypeSlot;
        getTypeSlot(arg0: number): $EnumTypeSlot;
    }
    export class $EnumTypeRender extends $Enum<$EnumTypeRender> {
        static values(): $EnumTypeRender[];
        static valueOf(arg0: string): $EnumTypeRender;
        static UNIQUE: $EnumTypeRender;
        static WIDTH: $EnumTypeRender;
        static HEIGHT: $EnumTypeRender;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeRender}.
     */
    export type $EnumTypeRender_ = "height" | "width" | "unique";
    export class $WidgetDefault<T> {
        visible(): boolean;
        getText(arg0: $ScreenWidget): string;
        drawBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $ScreenWidget): void;
        getComponent(): T;
        constructor(arg0: T);
        get component(): T;
    }
    export class $EnumTypeSlot extends $Enum<$EnumTypeSlot> {
        getHeight(): number;
        static values(): $EnumTypeSlot[];
        static valueOf(arg0: string): $EnumTypeSlot;
        getWeight(): number;
        getX(): number;
        getY(): number;
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
        get height(): number;
        get weight(): number;
        get x(): number;
        get y(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeSlot}.
     */
    export type $EnumTypeSlot_ = "bucket" | "list" | "color" | "rotor" | "rotor_upgrade" | "blocks" | "rod_part" | "rod_part1" | "quarry" | "quarry1" | "water_rod_part" | "water_rotor" | "upgrade" | "wireless" | "private" | "cathode" | "anode" | "matter" | "solarium" | "exp_module" | "fishing_rod" | "plasm" | "recipe_schedule" | "fertilizer" | "battery" | "crop" | "tube" | "bit" | "exchange" | "capacitor" | "storage_cell";
    export class $MouseButton extends $Enum<$MouseButton> {
        static get(arg0: number): $MouseButton;
        static values(): $MouseButton[];
        static valueOf(arg0: string): $MouseButton;
        static left: $MouseButton;
        static right: $MouseButton;
        id: number;
    }
    /**
     * Values that may be interpreted as {@link $MouseButton}.
     */
    export type $MouseButton_ = "left" | "right";
    export class $EnumTypeComponent extends $Enum<$EnumTypeComponent> {
        getHeight(): number;
        getEndX(): number;
        static values(): $EnumTypeComponent[];
        static valueOf(arg0: string): $EnumTypeComponent;
        isSpace(): boolean;
        getX1(): number;
        getY1(): number;
        getWeight(): number;
        getX(): number;
        getY(): number;
        getRender(): $EnumTypeRender;
        getEndY(): number;
        isHasDescription(): boolean;
        isNextBar(): boolean;
        isSteam(): boolean;
        isBio(): boolean;
        static CHECK_MARK: $EnumTypeComponent;
        static STEAM_DEFAULT: $EnumTypeComponent;
        static SOLARIUM_ENERGY_WEIGHT: $EnumTypeComponent;
        static QUANTUM_HEIGHT1: $EnumTypeComponent;
        static WORK_BUTTON: $EnumTypeComponent;
        static NIGHT_PROCESS: $EnumTypeComponent;
        static QUANTUM_ENERGY_HEIGHT: $EnumTypeComponent;
        static BUTTON1: $EnumTypeComponent;
        static PREV: $EnumTypeComponent;
        static FIRE: $EnumTypeComponent;
        static PROCESS: $EnumTypeComponent;
        static BLACK: $EnumTypeComponent;
        static NONE: $EnumTypeComponent;
        static WATER: $EnumTypeComponent;
        static WIND: $EnumTypeComponent;
        static EXP_BUTTON: $EnumTypeComponent;
        static PHOTONIC: $EnumTypeComponent;
        static BIO_MULTI_PROCESS: $EnumTypeComponent;
        static LEFT: $EnumTypeComponent;
        static SOLARIUM_MAKER: $EnumTypeComponent;
        static TOP: $EnumTypeComponent;
        static EXP_HEIGHT: $EnumTypeComponent;
        static HEAT_REACTOR: $EnumTypeComponent;
        static BUTTON: $EnumTypeComponent;
        static FACTORY_PROCESS: $EnumTypeComponent;
        static FRAME: $EnumTypeComponent;
        static IMPROVED: $EnumTypeComponent;
        static FLUID_PART: $EnumTypeComponent;
        static STEAM_MULTI_PROCESS: $EnumTypeComponent;
        static COOL_ENERGY_WEIGHT: $EnumTypeComponent;
        static AMPERE: $EnumTypeComponent;
        static RIGHT: $EnumTypeComponent;
        static RADIATION_PROCESS: $EnumTypeComponent;
        static CANCEL: $EnumTypeComponent;
        static ENERGY_WEIGHT_2: $EnumTypeComponent;
        static ANTIUPGRADE: $EnumTypeComponent;
        static ENERGY_WEIGHT_1: $EnumTypeComponent;
        static LASER_PROCESS: $EnumTypeComponent;
        static POSITRONS: $EnumTypeComponent;
        static PROCESS1: $EnumTypeComponent;
        static PROCESS2: $EnumTypeComponent;
        static SPACE_FLUID: $EnumTypeComponent;
        static DOWN: $EnumTypeComponent;
        static REDSTONE: $EnumTypeComponent;
        static ADV_REACTOR: $EnumTypeComponent;
        static STAMP_PROCESS: $EnumTypeComponent;
        static INFO: $EnumTypeComponent;
        static ENCHANT_PROCESS: $EnumTypeComponent;
        static BIO_FLUID: $EnumTypeComponent;
        static PLUS_BUTTON: $EnumTypeComponent;
        static DEFAULT_REACTOR: $EnumTypeComponent;
        static SPACE_PROGRESS: $EnumTypeComponent;
        static IMP_REACTOR: $EnumTypeComponent;
        static SOUND_BUTTON: $EnumTypeComponent;
        static ENERGY: $EnumTypeComponent;
        static NULL: $EnumTypeComponent;
        static MINUS_BUTTON: $EnumTypeComponent;
        static ENERGY_HEIGHT: $EnumTypeComponent;
        static STORAGE_DEFAULT: $EnumTypeComponent;
        static NIGHT_ENERGY_WEIGHT: $EnumTypeComponent;
        static PER_REACTOR: $EnumTypeComponent;
        static CHANGEMODE: $EnumTypeComponent;
        static ACCEPT: $EnumTypeComponent;
        static SCROLL_UP: $EnumTypeComponent;
        static FLUID_REACTOR: $EnumTypeComponent;
        static OIL: $EnumTypeComponent;
        static GRAPHITE_REACTOR: $EnumTypeComponent;
        static PERFECT: $EnumTypeComponent;
        static ENERGY_HEIGHT_1: $EnumTypeComponent;
        static GAS: $EnumTypeComponent;
        static STEAM_ENERGY_HEIGHT: $EnumTypeComponent;
        static ENERGY_WEIGHT: $EnumTypeComponent;
        static BIO_DEFAULT: $EnumTypeComponent;
        static FLUID_PART7: $EnumTypeComponent;
        static FLUID_PART6: $EnumTypeComponent;
        static NO: $EnumTypeComponent;
        static CIRCLE_BAR: $EnumTypeComponent;
        static FLUID_PART5: $EnumTypeComponent;
        static FLUID_PART4: $EnumTypeComponent;
        static FLUID_PART3: $EnumTypeComponent;
        static FLUID_PART2: $EnumTypeComponent;
        static RAD_1: $EnumTypeComponent;
        static FLUID_PART1: $EnumTypeComponent;
        static QUANTUM_ENERGY_WEIGHT: $EnumTypeComponent;
        static STEAM_PROCESS: $EnumTypeComponent;
        static HEAT: $EnumTypeComponent;
        static NEXT: $EnumTypeComponent;
        static EMPTY: $EnumTypeComponent;
        static FLUID_PART9: $EnumTypeComponent;
        static FLUID_PART8: $EnumTypeComponent;
        static STEAM_PROCESS2: $EnumTypeComponent;
        static SPACE_DEFAULT: $EnumTypeComponent;
        static WHITE: $EnumTypeComponent;
        static FLUIDS_SLOT: $EnumTypeComponent;
        static MULTI_PROCESS: $EnumTypeComponent;
        static STEAM_FLUID: $EnumTypeComponent;
        static ADVANCED: $EnumTypeComponent;
        static HYDRO: $EnumTypeComponent;
        static SPACE_MULTI_PROCESS: $EnumTypeComponent;
        static RAD: $EnumTypeComponent;
        static UPGRADE: $EnumTypeComponent;
        static BIGGEST_FRAME: $EnumTypeComponent;
        static COLD: $EnumTypeComponent;
        static PROGRESS4: $EnumTypeComponent;
        static EXP: $EnumTypeComponent;
        static PROGRESS3: $EnumTypeComponent;
        static DEFAULT: $EnumTypeComponent;
        static SCROLL_DOWN: $EnumTypeComponent;
        static BIG_FRAME: $EnumTypeComponent;
        static GAS_REACTOR: $EnumTypeComponent;
        get height(): number;
        get endX(): number;
        get space(): boolean;
        get x1(): number;
        get y1(): number;
        get weight(): number;
        get x(): number;
        get y(): number;
        get render(): $EnumTypeRender;
        get endY(): number;
        get hasDescription(): boolean;
        get nextBar(): boolean;
        get steam(): boolean;
        get bio(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeComponent}.
     */
    export type $EnumTypeComponent_ = "energy" | "ampere" | "energy_weight_2" | "space_progress" | "energy_weight" | "advanced" | "improved" | "perfect" | "photonic" | "next" | "prev" | "default" | "steam_default" | "steam_fluid" | "bio_default" | "bio_fluid" | "space_default" | "space_fluid" | "space_multi_process" | "multi_process" | "steam_multi_process" | "bio_multi_process" | "cold" | "heat" | "progress3" | "progress4" | "circle_bar" | "exp" | "fluid_part" | "fluid_part1" | "fluid_part2" | "fluid_part3" | "fluid_part4" | "fluid_part5" | "fluid_part6" | "fluid_part7" | "fluid_part9" | "fluid_part8" | "empty" | "hydro" | "wind" | "changemode" | "water" | "solarium_energy_weight" | "night_energy_weight" | "quantum_energy_weight" | "cool_energy_weight" | "sound_button" | "work_button" | "plus_button" | "minus_button" | "process" | "steam_process" | "steam_process2" | "process1" | "process2" | "oil" | "upgrade" | "antiupgrade" | "no" | "left" | "right" | "top" | "down" | "accept" | "cancel" | "scroll_up" | "scroll_down" | "black" | "white" | "redstone" | "rad" | "rad_1" | "energy_weight_1" | "energy_height" | "energy_height_1" | "steam_energy_height" | "quantum_energy_height" | "button" | "fire" | "gas" | "button1" | "frame" | "exp_button" | "big_frame" | "exp_height" | "quantum_height1" | "solarium_maker" | "biggest_frame" | "info" | "laser_process" | "factory_process" | "stamp_process" | "night_process" | "radiation_process" | "enchant_process" | "positrons" | "fluids_slot" | "null" | "default_reactor" | "adv_reactor" | "imp_reactor" | "per_reactor" | "fluid_reactor" | "gas_reactor" | "graphite_reactor" | "heat_reactor" | "check_mark" | "none" | "storage_default";
}
