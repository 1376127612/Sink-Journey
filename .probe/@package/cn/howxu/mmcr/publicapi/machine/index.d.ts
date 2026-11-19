import { $SmartModifierSpec } from "@package/cn/howxu/mmcr/publicapi/recipe/modifier";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeFailureMode_, $RecipeFailureMode } from "@package/cn/howxu/mmcr/publicapi/runtime";
import { $Enum } from "@package/java/lang";
import { $List, $Map, $Set } from "@package/java/util";
import { $FailureHandler, $RequestHandler_, $RequestHandler, $NetworkSettings, $FailureHandler_ } from "@package/cn/howxu/mmcr/publicapi/network";
import { $MachineContext, $TickHooks, $RecipeHooks } from "@package/cn/howxu/mmcr/publicapi/behavior";

declare module "@package/cn/howxu/mmcr/publicapi/machine" {
    export class $MachineSpec {
    }
    export interface $MachineSpec {
        recipePoolId(): $ResourceLocation;
        networkInterface(): $NetworkSettings;
        recipeHooks(): ($MachineSpec$RecipeHooksView) | undefined;
        requestFailureIds(): $Set<$ResourceLocation>;
        smartInterfaceModifiers(): $List<$SmartModifierSpec>;
        allowMultithreading(): boolean;
        shareSmartInterfaces(): boolean;
        smartInterfaceTypes(): $Map<string, $SmartInterfaceSpec>;
        tickHooks(): ($MachineSpec$TickHooksView) | undefined;
        allowModifiers(): boolean;
        acceptedModuleIds(): $Set<$ResourceLocation>;
        finishSoundId(): $ResourceLocation;
        requestFailures(): $Map<$ResourceLocation, $FailureHandler>;
        failureAction(): $RecipeFailureMode;
        maxParallelism(): number;
        runningSoundId(): $ResourceLocation;
        requestProcessors(): $Map<$ResourceLocation, $RequestHandler>;
        parallelizable(): boolean;
        recipePoolIds(): $List<$ResourceLocation>;
        maxParallelAmount(): number;
        requestProcessorIds(): $Set<$ResourceLocation>;
        factory(): $FactoryOptions$View;
        id(): $ResourceLocation;
        controller(): $ControllerOptions$View;
        displayNameKey(): string;
        role(): $MachineKind;
        appearance(): $AppearanceOptions$View;
    }
    export class $SmartInterfaces$ValueType extends $Enum<$SmartInterfaces$ValueType> {
        static values(): $SmartInterfaces$ValueType[];
        static valueOf(name: string): $SmartInterfaces$ValueType;
        static byName(name: string): $SmartInterfaces$ValueType;
        static FLOAT: $SmartInterfaces$ValueType;
        static INTEGER: $SmartInterfaces$ValueType;
    }
    /**
     * Values that may be interpreted as {@link $SmartInterfaces$ValueType}.
     */
    export type $SmartInterfaces$ValueType_ = "float" | "integer";
    export class $AppearanceOptions {
    }
    export interface $AppearanceOptions {
        controllerIdleOverlayTexture(id: $ResourceLocation_): $AppearanceOptions;
        controllerActiveOverlayTexture(id: $ResourceLocation_): $AppearanceOptions;
        controllerBaseTexture(id: $ResourceLocation_): $AppearanceOptions;
        formedPortBaseTexture(id: $ResourceLocation_): $AppearanceOptions;
        machineBasicBlock(id: $ResourceLocation_): $AppearanceOptions;
        build(): $AppearanceOptions$View;
        appearance(id: $ResourceLocation_): $AppearanceOptions;
    }
    export class $AppearanceOptions$View {
    }
    export interface $AppearanceOptions$View {
        controllerIdleOverlayTexture(): $ResourceLocation;
        controllerActiveOverlayTexture(): $ResourceLocation;
        controllerBaseTexture(): $ResourceLocation;
        formedPortBaseTexture(): $ResourceLocation;
        machineBasicBlock(): $ResourceLocation;
    }
    export class $FactoryOptions$ThreadView {
    }
    export interface $FactoryOptions$ThreadView {
        recipeIds(): $List<$ResourceLocation>;
        name(): string;
    }
    export class $ControllerOptions {
    }
    export interface $ControllerOptions {
        topTexture(id: $ResourceLocation_): $ControllerOptions;
        sideTexture(id: $ResourceLocation_): $ControllerOptions;
        allowVerticalFacing(enabled: boolean): $ControllerOptions;
        allowVerticalFacing(): $ControllerOptions;
        fullyRotationallySymmetric(): $ControllerOptions;
        fullyRotationallySymmetric(enabled: boolean): $ControllerOptions;
        requireVerticalFacing(enabled: boolean): $ControllerOptions;
        requireVerticalFacing(): $ControllerOptions;
        frontTexture(id: $ResourceLocation_): $ControllerOptions;
        bottomTexture(id: $ResourceLocation_): $ControllerOptions;
        id(id: $ResourceLocation_): $ControllerOptions;
        build(): $ControllerOptions$View;
        textures(front: $ResourceLocation_, side: $ResourceLocation_, top: $ResourceLocation_, bottom: $ResourceLocation_): $ControllerOptions;
        textures(front: $ResourceLocation_, otherFaces: $ResourceLocation_): $ControllerOptions;
        tooltip(...translationKeys: string[]): $ControllerOptions;
    }
    export class $MachineKind extends $Enum<$MachineKind> {
        static values(): $MachineKind[];
        static valueOf(name: string): $MachineKind;
        static MODULE: $MachineKind;
        static HOST: $MachineKind;
        static NORMAL: $MachineKind;
    }
    /**
     * Values that may be interpreted as {@link $MachineKind}.
     */
    export type $MachineKind_ = "normal" | "host" | "module";
    export class $SmartInterfaceSpec {
    }
    export interface $SmartInterfaceSpec {
        descriptionKey(): string;
        validatedValue(value: number): number;
        priority(): number;
        type(): string;
        defaultValue(): number;
        valueType(): $SmartInterfaces$ValueType;
        maxValue(): number;
        accepts(value: number): boolean;
        translationKey(): string;
        minValue(): number;
    }
    export class $MachineSpec$RecipeHooksView {
    }
    export interface $MachineSpec$RecipeHooksView {
        hasIdleEnd(): boolean;
        hasIdleStart(): boolean;
        hasPreServerTick(): boolean;
        hasPostServerTick(): boolean;
        hasRecipeTick(): boolean;
        hasBeforeFinish(): boolean;
        hasBeforeStart(): boolean;
    }
    export class $FactoryOptions {
    }
    export interface $FactoryOptions {
        hasFactory(enabled: boolean): $FactoryOptions;
        threadLimit(limit: number): $FactoryOptions;
        thread(name: string, ...recipeIds: $ResourceLocation_[]): $FactoryOptions;
        build(): $FactoryOptions$View;
    }
    export class $FactoryOptions$View {
    }
    export interface $FactoryOptions$View {
        hasFactory(): boolean;
        threadLimit(): number;
        threads(): $List<$FactoryOptions$ThreadView>;
    }
    export class $ControllerOptions$View {
    }
    export interface $ControllerOptions$View {
        topTexture(): $ResourceLocation;
        sideTexture(): $ResourceLocation;
        allowVerticalFacing(): boolean;
        fullyRotationallySymmetric(): boolean;
        requireVerticalFacing(): boolean;
        frontTexture(): $ResourceLocation;
        bottomTexture(): $ResourceLocation;
        id(): $ResourceLocation;
        tooltip(): $List<string>;
    }
    export class $MachineSpec$TickHooksView {
    }
    export interface $MachineSpec$TickHooksView {
        hasServerTick(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MachineSpec$TickHooksView}.
     */
    export type $MachineSpec$TickHooksView_ = (() => boolean);
    export class $MachineDraft {
    }
    export interface $MachineDraft {
        postServerTick(callback: $Consumer_<$MachineContext>): $MachineDraft;
        preServerTick(callback: $Consumer_<$MachineContext>): $MachineDraft;
        smartInterface(type: $SmartInterfaceSpec): $MachineDraft;
        networkInterface(maxCount: number, maxConnections: number): $MachineDraft;
        recipePool(...ids: $ResourceLocation_[]): $MachineDraft;
        smartInterfaceModifier(modifier: $SmartModifierSpec): $MachineDraft;
        allowMultithreading(enabled: boolean): $MachineDraft;
        allowMultithreading(): $MachineDraft;
        allowNetworkMachine(id: $ResourceLocation_): $MachineDraft;
        shareSmartInterfaces(enabled: boolean): $MachineDraft;
        shareSmartInterfaces(): $MachineDraft;
        allowModifiers(): $MachineDraft;
        allowModifiers(enabled: boolean): $MachineDraft;
        runningSound(id: $ResourceLocation_): $MachineDraft;
        failureAction(mode: $RecipeFailureMode_): $MachineDraft;
        requestFailed(id: $ResourceLocation_, handler: $FailureHandler_): $MachineDraft;
        maxParallelism(amount: number): $MachineDraft;
        tickBehavior(configure: $Consumer_<$TickHooks>): $MachineDraft;
        parallelizable(enabled: boolean): $MachineDraft;
        finishSound(id: $ResourceLocation_): $MachineDraft;
        requestProcess(id: $ResourceLocation_, handler: $RequestHandler_): $MachineDraft;
        maxParallelAmount(amount: number): $MachineDraft;
        recipeBehavior(configure: $Consumer_<$RecipeHooks>): $MachineDraft;
        acceptedModule(id: $ResourceLocation_): $MachineDraft;
        factory(configure: $Consumer_<$FactoryOptions>): $MachineDraft;
        build(): $MachineSpec;
        controller(configure: $Consumer_<$ControllerOptions>): $MachineDraft;
        displayNameKey(key: string): $MachineDraft;
        role(kind: $MachineKind_): $MachineDraft;
        appearance(configure: $Consumer_<$AppearanceOptions>): $MachineDraft;
    }
}
