import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $IDroneDebugger } from "@package/me/desht/pneumaticcraft/api/drone/debug";
import { $UUID, $List, $List_ } from "@package/java/util";
import { $Supplier_ } from "@package/java/util/function";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Object } from "@package/java/lang";
import { $PNCUpgrade } from "@package/me/desht/pneumaticcraft/api/upgrade";
import { $Level } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as debug from "@package/me/desht/pneumaticcraft/api/drone/debug";
export * as area from "@package/me/desht/pneumaticcraft/api/drone/area";

declare module "@package/me/desht/pneumaticcraft/api/drone" {
    export class $IDrone {
        static getLabelAsComponent(arg0: string): $Component;
    }
    export interface $IDrone {
        getEnergyStorage(): $IEnergyStorage;
        setEmittingRedstone(arg0: $Direction_, arg1: number): void;
        getTargetAI(): $GoalSelector;
        setCarryingEntity(arg0: $Entity): void;
        isAIOverridden(): boolean;
        onItemPickupEvent(arg0: $ItemEntity, arg1: number): void;
        updateLabel(): void;
        getDronePressure(): number;
        addAirToDrone(arg0: number): void;
        resetAttackCount(): void;
        getDroneName(): $Component;
        getActiveWidget(): $IProgWidget;
        canMoveIntoFluid(arg0: $Fluid_): boolean;
        storeTrackerData(arg0: $ItemStack_): void;
        dropItem(arg0: $ItemStack_): void;
        isBlockValidPathfindBlock(arg0: $BlockPos_): boolean;
        isProgramApplicable(arg0: $ProgWidgetType_<never>): boolean;
        sendWireframeToClient(arg0: $BlockPos_): void;
        getUpgrades(arg0: $PNCUpgrade): number;
        getControllerPos(): $BlockPos;
        getOwnerUUID(): $UUID;
        getInv(): $IItemHandlerModifiable;
        getEmittingRedstone(arg0: $Direction_): number;
        getActiveWidgetIndex(): number;
        getCarryingEntities(): $List<$Entity>;
        getDeployPos(): $BlockPos;
        setActiveProgram(arg0: $IProgWidget): void;
        onVariableChanged(arg0: string, arg1: boolean): void;
        getDebugger(): $IDroneDebugger;
        getDronePos(): $Vec3;
        getDroneLevel(): $Level;
        getProgWidgets(): $List<$IProgWidget>;
        setDugBlock(arg0: $BlockPos_, arg1: $Direction_): void;
        setDugBlock(arg0: $BlockPos_): void;
        getPathNavigator(): $IPathNavigator;
        isDroneStillValid(): boolean;
        setName(arg0: $Component_): void;
        getOwner(): $Player;
        overload(arg0: string, ...arg1: $Object[]): void;
        playSound(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: number, arg3: number): void;
        getFakePlayer(): $FakePlayer;
        getLabel(): string;
        getFluidTank(): $FluidTank;
        get energyStorage(): $IEnergyStorage;
        get targetAI(): $GoalSelector;
        set carryingEntity(value: $Entity);
        get AIOverridden(): boolean;
        get dronePressure(): number;
        get droneName(): $Component;
        get activeWidget(): $IProgWidget;
        get controllerPos(): $BlockPos;
        get ownerUUID(): $UUID;
        get inv(): $IItemHandlerModifiable;
        get activeWidgetIndex(): number;
        get carryingEntities(): $List<$Entity>;
        get deployPos(): $BlockPos;
        set activeProgram(value: $IProgWidget);
        get debugger(): $IDroneDebugger;
        get dronePos(): $Vec3;
        get droneLevel(): $Level;
        get progWidgets(): $List<$IProgWidget>;
        get pathNavigator(): $IPathNavigator;
        get droneStillValid(): boolean;
        set name(value: $Component_);
        get owner(): $Player;
        get fakePlayer(): $FakePlayer;
        get label(): string;
        get fluidTank(): $FluidTank;
    }
    export interface $ProgWidgetType<P> extends RegistryMarked<RegistryTypes.PneumaticcraftProgWidgetsTag, RegistryTypes.PneumaticcraftProgWidgets> {}
    export class $SpecialVariableRetrievalEvent$ItemVariable$Drone extends $SpecialVariableRetrievalEvent$ItemVariable {
        specialVarName: string;
        drone: $IDrone;
        constructor(arg0: $IDrone, arg1: string);
    }
    export class $SpecialVariableRetrievalEvent$CoordinateVariable extends $SpecialVariableRetrievalEvent {
        getCoordinate(): $BlockPos;
        setCoordinate(arg0: $BlockPos_ | null): void;
        specialVarName: string;
    }
    export class $AmadronRetrievalEvent extends $Event {
        drone: $IDrone;
        constructor(arg0: $IDrone);
    }
    export class $ProgWidgetType<P extends $IProgWidget> {
        codec(): $MapCodec<$IProgWidget>;
        static createType<P extends $IProgWidget>(arg0: $Supplier_<P>, arg1: $MapCodec_<P>, arg2: $StreamCodec<$RegistryFriendlyByteBuf, P>): $ProgWidgetType<P>;
        getTranslationKey(): string;
        cast(arg0: $IProgWidget): P;
        create(): P;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IProgWidget>;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ProgWidgetType}.
     */
    export type $ProgWidgetType_<P> = RegistryTypes.PneumaticcraftProgWidgets;
    export class $IPathNavigator {
    }
    export interface $IPathNavigator {
        isGoingToTeleport(): boolean;
        moveToEntity(arg0: $Entity): boolean;
        moveToXYZ(arg0: number, arg1: number, arg2: number): boolean;
        hasNoPath(): boolean;
        get goingToTeleport(): boolean;
    }
    export class $SpecialVariableRetrievalEvent$ItemVariable extends $SpecialVariableRetrievalEvent {
        getItem(): $ItemStack;
        specialVarName: string;
        get item(): $ItemStack;
    }
    export class $DroneSuicideEvent extends $Event {
        drone: $IDrone;
        constructor(arg0: $IDrone);
    }
    export class $SpecialVariableRetrievalEvent extends $Event {
        specialVarName: string;
    }
    export class $DroneConstructingEvent extends $Event {
        drone: $IDrone;
        constructor(arg0: $IDrone);
    }
    export class $SpecialVariableRetrievalEvent$CoordinateVariable$Drone extends $SpecialVariableRetrievalEvent$CoordinateVariable {
        specialVarName: string;
        drone: $IDrone;
        constructor(arg0: $IDrone, arg1: string);
    }
    export class $IProgWidget {
        static create(arg0: $ProgWidgetType_<never>): $IProgWidget;
    }
    export interface $IProgWidget {
        getHeight(): number;
        getTranslationKey(): string;
        getDifficulty(): $IProgWidget$WidgetDifficulty;
        freeToUse(): boolean;
        getTypeID(): $ResourceLocation;
        canBeRunByComputers(arg0: $IDrone, arg1: $IProgWidget): boolean;
        getConnectedParameters(): $IProgWidget[];
        addErrors(arg0: $List_<$Component_>, arg1: $List_<$IProgWidget>): void;
        getMaxUV(): $Pair<number, number>;
        copyWidget(): $IProgWidget;
        getWidgetTargetAI(arg0: $IDrone, arg1: $IProgWidget): $Goal;
        hasStepOutput(): boolean;
        canSetParameter(arg0: number): boolean;
        hasStepInput(): boolean;
        getWidgetAI(arg0: $IDrone, arg1: $IProgWidget): $Goal;
        getExtraStringInfo(): $List<$Component>;
        addWarnings(arg0: $List_<$Component_>, arg1: $List_<$IProgWidget>): void;
        setOutputWidget(arg0: $IProgWidget): void;
        getOutputWidget(): $IProgWidget;
        getOutputWidget(arg0: $IDrone, arg1: $List_<$IProgWidget>): $IProgWidget;
        isDifficultyOK(arg0: $IProgWidget$WidgetDifficulty_): boolean;
        getParameters(): $List<$ProgWidgetType<never>>;
        returnType(): $ProgWidgetType<never>;
        getParent(): $IProgWidget;
        getType(): $ProgWidgetType<never>;
        isAvailable(): boolean;
        setParent(arg0: $IProgWidget): void;
        setPosition(arg0: number, arg1: number): void;
        getColor(): $DyeColor;
        getWidth(): number;
        setParameter(arg0: number, arg1: $IProgWidget): void;
        setY(arg0: number): void;
        getX(): number;
        setX(arg0: number): void;
        getY(): number;
        getTexture(): $ResourceLocation;
        getTooltip(arg0: $List_<$Component_>): void;
        get height(): number;
        get translationKey(): string;
        get difficulty(): $IProgWidget$WidgetDifficulty;
        get typeID(): $ResourceLocation;
        get connectedParameters(): $IProgWidget[];
        get maxUV(): $Pair<number, number>;
        get extraStringInfo(): $List<$Component>;
        get parameters(): $List<$ProgWidgetType<never>>;
        get type(): $ProgWidgetType<never>;
        get available(): boolean;
        get color(): $DyeColor;
        get width(): number;
        get texture(): $ResourceLocation;
    }
    export class $IProgWidget$WidgetDifficulty extends $Enum<$IProgWidget$WidgetDifficulty> {
        getTranslationKey(): string;
        getTooltipTranslationKey(): string;
        isNotMoreDifficult(arg0: $IProgWidget$WidgetDifficulty_): boolean;
        static values(): $IProgWidget$WidgetDifficulty[];
        static valueOf(arg0: string): $IProgWidget$WidgetDifficulty;
        static EASY: $IProgWidget$WidgetDifficulty;
        static MEDIUM: $IProgWidget$WidgetDifficulty;
        static ADVANCED: $IProgWidget$WidgetDifficulty;
        get translationKey(): string;
        get tooltipTranslationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $IProgWidget$WidgetDifficulty}.
     */
    export type $IProgWidget$WidgetDifficulty_ = "easy" | "medium" | "advanced";
}
