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
        setName(arg0: $Component_): void;
        getOwner(): $Player;
        getLabel(): string;
        getEnergyStorage(): $IEnergyStorage;
        getUpgrades(arg0: $PNCUpgrade): number;
        dropItem(arg0: $ItemStack_): void;
        playSound(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: number, arg3: number): void;
        getOwnerUUID(): $UUID;
        getInv(): $IItemHandlerModifiable;
        overload(arg0: string, ...arg1: $Object[]): void;
        getFakePlayer(): $FakePlayer;
        setEmittingRedstone(arg0: $Direction_, arg1: number): void;
        getControllerPos(): $BlockPos;
        getFluidTank(): $FluidTank;
        getEmittingRedstone(arg0: $Direction_): number;
        isProgramApplicable(arg0: $ProgWidgetType_<never>): boolean;
        getActiveWidgetIndex(): number;
        sendWireframeToClient(arg0: $BlockPos_): void;
        isBlockValidPathfindBlock(arg0: $BlockPos_): boolean;
        getCarryingEntities(): $List<$Entity>;
        isDroneStillValid(): boolean;
        getDebugger(): $IDroneDebugger;
        onVariableChanged(arg0: string, arg1: boolean): void;
        getDeployPos(): $BlockPos;
        addAirToDrone(arg0: number): void;
        getActiveWidget(): $IProgWidget;
        getDroneName(): $Component;
        setCarryingEntity(arg0: $Entity): void;
        updateLabel(): void;
        getDronePressure(): number;
        resetAttackCount(): void;
        isAIOverridden(): boolean;
        canMoveIntoFluid(arg0: $Fluid_): boolean;
        getTargetAI(): $GoalSelector;
        setActiveProgram(arg0: $IProgWidget): void;
        getDronePos(): $Vec3;
        storeTrackerData(arg0: $ItemStack_): void;
        getDroneLevel(): $Level;
        getProgWidgets(): $List<$IProgWidget>;
        getPathNavigator(): $IPathNavigator;
        onItemPickupEvent(arg0: $ItemEntity, arg1: number): void;
        setDugBlock(arg0: $BlockPos_): void;
        setDugBlock(arg0: $BlockPos_, arg1: $Direction_): void;
        set name(value: $Component_);
        get owner(): $Player;
        get label(): string;
        get energyStorage(): $IEnergyStorage;
        get ownerUUID(): $UUID;
        get inv(): $IItemHandlerModifiable;
        get fakePlayer(): $FakePlayer;
        get controllerPos(): $BlockPos;
        get fluidTank(): $FluidTank;
        get activeWidgetIndex(): number;
        get carryingEntities(): $List<$Entity>;
        get droneStillValid(): boolean;
        get debugger(): $IDroneDebugger;
        get deployPos(): $BlockPos;
        get activeWidget(): $IProgWidget;
        get droneName(): $Component;
        set carryingEntity(value: $Entity);
        get dronePressure(): number;
        get AIOverridden(): boolean;
        get targetAI(): $GoalSelector;
        set activeProgram(value: $IProgWidget);
        get dronePos(): $Vec3;
        get droneLevel(): $Level;
        get progWidgets(): $List<$IProgWidget>;
        get pathNavigator(): $IPathNavigator;
    }
    export interface $ProgWidgetType<P> extends RegistryMarked<RegistryTypes.PneumaticcraftProgWidgetsTag, RegistryTypes.PneumaticcraftProgWidgets> {}
    export class $SpecialVariableRetrievalEvent$ItemVariable$Drone extends $SpecialVariableRetrievalEvent$ItemVariable {
        specialVarName: string;
        drone: $IDrone;
        constructor(arg0: $IDrone, arg1: string);
    }
    export class $SpecialVariableRetrievalEvent$CoordinateVariable extends $SpecialVariableRetrievalEvent {
        setCoordinate(arg0: $BlockPos_ | null): void;
        getCoordinate(): $BlockPos;
        specialVarName: string;
    }
    export class $AmadronRetrievalEvent extends $Event {
        drone: $IDrone;
        constructor(arg0: $IDrone);
    }
    export class $ProgWidgetType<P extends $IProgWidget> {
        cast(arg0: $IProgWidget): P;
        create(): P;
        getTranslationKey(): string;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IProgWidget>;
        codec(): $MapCodec<$IProgWidget>;
        static createType<P extends $IProgWidget>(arg0: $Supplier_<P>, arg1: $MapCodec_<P>, arg2: $StreamCodec<$RegistryFriendlyByteBuf, P>): $ProgWidgetType<P>;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ProgWidgetType}.
     */
    export type $ProgWidgetType_<P> = RegistryTypes.PneumaticcraftProgWidgets;
    export class $IPathNavigator {
    }
    export interface $IPathNavigator {
        hasNoPath(): boolean;
        moveToXYZ(arg0: number, arg1: number, arg2: number): boolean;
        moveToEntity(arg0: $Entity): boolean;
        isGoingToTeleport(): boolean;
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
        getParameters(): $List<$ProgWidgetType<never>>;
        returnType(): $ProgWidgetType<never>;
        getParent(): $IProgWidget;
        getType(): $ProgWidgetType<never>;
        setParameter(arg0: number, arg1: $IProgWidget): void;
        setPosition(arg0: number, arg1: number): void;
        getY(): number;
        isAvailable(): boolean;
        setParent(arg0: $IProgWidget): void;
        getTexture(): $ResourceLocation;
        getWidth(): number;
        hasStepInput(): boolean;
        hasStepOutput(): boolean;
        isDifficultyOK(arg0: $IProgWidget$WidgetDifficulty_): boolean;
        getWidgetAI(arg0: $IDrone, arg1: $IProgWidget): $Goal;
        getWidgetTargetAI(arg0: $IDrone, arg1: $IProgWidget): $Goal;
        getExtraStringInfo(): $List<$Component>;
        canSetParameter(arg0: number): boolean;
        setOutputWidget(arg0: $IProgWidget): void;
        addWarnings(arg0: $List_<$Component_>, arg1: $List_<$IProgWidget>): void;
        getOutputWidget(arg0: $IDrone, arg1: $List_<$IProgWidget>): $IProgWidget;
        getOutputWidget(): $IProgWidget;
        getX(): number;
        getTranslationKey(): string;
        getConnectedParameters(): $IProgWidget[];
        canBeRunByComputers(arg0: $IDrone, arg1: $IProgWidget): boolean;
        getTooltip(arg0: $List_<$Component_>): void;
        setY(arg0: number): void;
        setX(arg0: number): void;
        getColor(): $DyeColor;
        getTypeID(): $ResourceLocation;
        getDifficulty(): $IProgWidget$WidgetDifficulty;
        getHeight(): number;
        copyWidget(): $IProgWidget;
        getMaxUV(): $Pair<number, number>;
        freeToUse(): boolean;
        addErrors(arg0: $List_<$Component_>, arg1: $List_<$IProgWidget>): void;
        get parameters(): $List<$ProgWidgetType<never>>;
        get type(): $ProgWidgetType<never>;
        get available(): boolean;
        get texture(): $ResourceLocation;
        get width(): number;
        get extraStringInfo(): $List<$Component>;
        get translationKey(): string;
        get connectedParameters(): $IProgWidget[];
        get color(): $DyeColor;
        get typeID(): $ResourceLocation;
        get difficulty(): $IProgWidget$WidgetDifficulty;
        get height(): number;
        get maxUV(): $Pair<number, number>;
    }
    export class $IProgWidget$WidgetDifficulty extends $Enum<$IProgWidget$WidgetDifficulty> {
        static values(): $IProgWidget$WidgetDifficulty[];
        static valueOf(arg0: string): $IProgWidget$WidgetDifficulty;
        getTranslationKey(): string;
        getTooltipTranslationKey(): string;
        isNotMoreDifficult(arg0: $IProgWidget$WidgetDifficulty_): boolean;
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
