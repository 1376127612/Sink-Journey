import { $File_ } from "@package/java/io";
import { $LDLRegisterClient } from "@package/com/lowdragmc/lowdraglib2/registry/annotation";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $AutoRegistry$Holder, $AutoRegistry$LDLibRegisterClient, $ILDLRegisterClient } from "@package/com/lowdragmc/lowdraglib2/registry";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Transform2D } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $Position, $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LDShaderHolder } from "@package/com/lowdragmc/lowdraglib2/client/shader";
import { $Color } from "@package/java/awt";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Vector4f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/texture" {
    export class $UIResourceTexture extends $TransformTexture {
        getInternalTexture(): $IGuiTexture;
        getResourcePath(): $IResourcePath;
        constructor();
        constructor(arg0: $IResourcePath);
        get internalTexture(): $IGuiTexture;
        get resourcePath(): $IResourcePath;
    }
    export class $RectTexture extends $TransformTexture {
        setBorderColor(arg0: number): $RectTexture;
        getCornerSegments(): number;
        setCornerSegments(arg0: number): $RectTexture;
        getBorderColor(): number;
        setRadius(arg0: $Vector4f): $RectTexture;
        static of(arg0: number): $RectTexture;
        copy(): $RectTexture;
        setColor(arg0: number): $RectTexture;
        getColor(): number;
        getRadius(): $Vector4f;
        setStroke(arg0: number): $RectTexture;
        getStroke(): number;
        constructor();
    }
    export class $DynamicTexture implements $IGuiTexture {
        static of(arg0: $Supplier_<$IGuiTexture>): $DynamicTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createPreview(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        name(): string;
        group(): string;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        registryName(): $ResourceLocation;
        textureSupplier: $Supplier<$IGuiTexture>;
        constructor(arg0: $Supplier_<$IGuiTexture>);
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
    }
    export class $SpriteTexture$WrapMode extends $Enum<$SpriteTexture$WrapMode> {
        static values(): $SpriteTexture$WrapMode[];
        static valueOf(arg0: string): $SpriteTexture$WrapMode;
        static REPEAT: $SpriteTexture$WrapMode;
        static CLAMP: $SpriteTexture$WrapMode;
        static MIRRORED_REPEAT: $SpriteTexture$WrapMode;
    }
    /**
     * Values that may be interpreted as {@link $SpriteTexture$WrapMode}.
     */
    export type $SpriteTexture$WrapMode_ = "clamp" | "repeat" | "mirrored_repeat";
    export class $ItemStackTexture extends $TransformTexture {
        updateTick(): void;
        setItems(...arg0: $ItemStack_[]): $ItemStackTexture;
        copy(): $ItemStackTexture;
        setColor(arg0: number): $ItemStackTexture;
        items: $ItemStack[];
        constructor();
        constructor(...arg0: $Item_[]);
        constructor(...arg0: $ItemStack_[]);
        set color(value: number);
    }
    export class $TextTexture extends $TransformTexture {
        updateTick(): void;
        setRollSpeed(arg0: number): void;
        setDropShadow(arg0: boolean): $TextTexture;
        updateText(arg0: string): void;
        copy(): $TextTexture;
        static raw(arg0: string): $TextTexture;
        setColor(arg0: number): $TextTexture;
        setType(arg0: $TextTexture$TextType_): $TextTexture;
        setWidth(arg0: number): $TextTexture;
        setSupplier(arg0: $Supplier_<string>): $TextTexture;
        getLines(): number;
        setBackgroundColor(arg0: number): $TextTexture;
        setRawText(arg0: string): $TextTexture;
        dropShadow: boolean;
        backgroundColor: number;
        color: number;
        rollSpeed: number;
        supplier: $Supplier<string>;
        width: number;
        text: string;
        type: $TextTexture$TextType;
        constructor();
        constructor(arg0: string, arg1: number);
        constructor(arg0: $Supplier_<string>);
        constructor(arg0: string);
        get lines(): number;
        set rawText(value: string);
    }
    export class $ColorBorderTexture extends $TransformTexture {
        copy(): $ColorBorderTexture;
        setColor(arg0: number): $ColorBorderTexture;
        setBorder(arg0: number): $ColorBorderTexture;
        border: number;
        color: number;
        constructor();
        constructor(arg0: number, arg1: $Color);
        constructor(arg0: number, arg1: number);
    }
    export class $IGuiTexture$EmptyTexture implements $IGuiTexture {
        copy(): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createPreview(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        name(): string;
        group(): string;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        registryName(): $ResourceLocation;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
    }
    export class $GuiTextureGroup extends $TransformTexture {
        setTextures(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        static of(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        copy(): $GuiTextureGroup;
        setColor(arg0: number): $GuiTextureGroup;
        getTextures(): $IGuiTexture[];
        constructor();
        constructor(...arg0: $IGuiTexture_[]);
        set color(value: number);
    }
    export class $ITextureSize {
    }
    export interface $ITextureSize {
        getHeight(): number;
        ldlib2$getImageWidth(): number;
        ldlib2$getImageHeight(): number;
        getWidth(): number;
        get height(): number;
        get width(): number;
    }
    export class $IGuiTexture {
        static createCodec(): $Codec<$IGuiTexture>;
        static group(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        static dynamic(arg0: $Supplier_<$IGuiTexture>): $DynamicTexture;
        static getTextureFromFile(arg0: $File_): $ResourceLocation;
        static CODEC: $Codec<$IGuiTexture>;
        static EMPTY: $IGuiTexture$EmptyTexture;
        static MISSING_TEXTURE: $IGuiTexture$MissingTexture;
    }
    export interface $IGuiTexture extends $IPersistedSerializable, $IConfigurable, $ILDLRegisterClient<$IGuiTexture, $Supplier<$IGuiTexture>> {
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createPreview(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
    }
    /**
     * Values that may be interpreted as {@link $IGuiTexture}.
     */
    export type $IGuiTexture_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => void);
    export class $SpriteTexture extends $TransformTexture {
        setBorderRB(arg0: $Position): $SpriteTexture;
        getImageLocation(): $ResourceLocation;
        setSpritePosition(arg0: $Position): $SpriteTexture;
        setBorderLT(arg0: $Position): $SpriteTexture;
        setSpriteSize(arg0: $Size): $SpriteTexture;
        getImageSize(): $Size;
        setWrapMode(arg0: $SpriteTexture$WrapMode_): $SpriteTexture;
        setImageLocation(arg0: $ResourceLocation_): $SpriteTexture;
        copy(): $SpriteTexture;
        setColor(arg0: number): $SpriteTexture;
        setSprite(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        static of(arg0: $ResourceLocation_): $SpriteTexture;
        setBorder(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        setBorder(arg0: number): $SpriteTexture;
        borderLT: $Position;
        color: number;
        wrapMode: $SpriteTexture$WrapMode;
        borderRB: $Position;
        spriteSize: $Size;
        spritePosition: $Position;
        constructor();
        get imageSize(): $Size;
    }
    export class $SDFRectTexture extends $TransformTexture {
        setBorderColor(arg0: number): $SDFRectTexture;
        getBorderColor(): number;
        setRadius(arg0: $Vector4f): $SDFRectTexture;
        setRadius(arg0: number): $SDFRectTexture;
        static of(arg0: number): $SDFRectTexture;
        copy(): $SDFRectTexture;
        setColor(arg0: number): $SDFRectTexture;
        getColor(): number;
        getRadius(): $Vector4f;
        setStroke(arg0: number): $SDFRectTexture;
        getStroke(): number;
        constructor();
    }
    export class $AnimationTexture extends $TransformTexture {
        updateTick(): void;
        setCellSize(arg0: number): $AnimationTexture;
        getCellSize(): number;
        setAnimation(arg0: number): $AnimationTexture;
        setAnimation(arg0: number, arg1: number): $AnimationTexture;
        copy(): $AnimationTexture;
        setColor(arg0: number): $AnimationTexture;
        getFrom(): number;
        getTo(): number;
        getColor(): number;
        getAnimation(): number;
        setTexture(arg0: string): $AnimationTexture;
        imageLocation: $ResourceLocation;
        constructor();
        constructor(arg0: string);
        constructor(arg0: $ResourceLocation_);
        get from(): number;
        get to(): number;
        set texture(value: string);
    }
    export class $TextTexture$TextType extends $Enum<$TextTexture$TextType> {
        static values(): $TextTexture$TextType[];
        static valueOf(arg0: string): $TextTexture$TextType;
        static LEFT_ROLL_ALWAYS: $TextTexture$TextType;
        static HIDE: $TextTexture$TextType;
        static LEFT_HIDE: $TextTexture$TextType;
        static LEFT: $TextTexture$TextType;
        static ROLL_ALWAYS: $TextTexture$TextType;
        static RIGHT: $TextTexture$TextType;
        static ROLL: $TextTexture$TextType;
        static LEFT_ROLL: $TextTexture$TextType;
        static NORMAL: $TextTexture$TextType;
    }
    /**
     * Values that may be interpreted as {@link $TextTexture$TextType}.
     */
    export type $TextTexture$TextType_ = "normal" | "hide" | "roll" | "roll_always" | "left" | "right" | "left_hide" | "left_roll" | "left_roll_always";
    export class $ColorRectTexture extends $TransformTexture {
        copy(): $ColorRectTexture;
        setColor(arg0: number): $ColorRectTexture;
        color: number;
        constructor(arg0: $Color);
        constructor(arg0: number);
        constructor();
    }
    export class $TransformTexture implements $IGuiTexture {
        copyTransform(arg0: $Transform2D): void;
        copyTransform(arg0: $TransformTexture): void;
        getTransform2D(): $Transform2D;
        scale(arg0: number): $TransformTexture;
        scale(arg0: number, arg1: number): $TransformTexture;
        transform(arg0: number, arg1: number): $TransformTexture;
        rotate(arg0: number): $TransformTexture;
        beforeDeserialize(): void;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createPreview(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        name(): string;
        group(): string;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        registryName(): $ResourceLocation;
        constructor();
        get transform2D(): $Transform2D;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
    }
    export class $ShaderTexture extends $TransformTexture implements $AutoCloseable {
        getShaderHolder(): $LDShaderHolder;
        getShaderFromFile(arg0: $File_): $ResourceLocation;
        getShaderLocation(): $ResourceLocation;
        close(): void;
        setColor(arg0: number): $ShaderTexture;
        getColor(): number;
        setShader(arg0: $ResourceLocation_): $ShaderTexture;
        constructor();
        constructor(arg0: $ResourceLocation_);
        get shaderHolder(): $LDShaderHolder;
        get shaderLocation(): $ResourceLocation;
        set shader(value: $ResourceLocation_);
    }
    export class $IGuiTexture$MissingTexture implements $IGuiTexture {
        copy(): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createPreview(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        name(): string;
        group(): string;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        registryName(): $ResourceLocation;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
    }
    export class $FluidStackTexture extends $TransformTexture {
        updateTick(): void;
        copy(): $FluidStackTexture;
        setColor(arg0: number): $FluidStackTexture;
        setFluids(...arg0: $FluidStack_[]): $FluidStackTexture;
        fluids: $FluidStack[];
        constructor();
        constructor(...arg0: $Fluid_[]);
        constructor(...arg0: $FluidStack_[]);
        set color(value: number);
    }
    export class $IGuiRenderable {
    }
    export interface $IGuiRenderable extends $IGuiTexture {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IGuiRenderable}.
     */
    export type $IGuiRenderable_ = ((arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $VanillaSpriteTexture extends $TransformTexture {
        copy(): $VanillaSpriteTexture;
        setColor(arg0: number): $VanillaSpriteTexture;
        getColor(): number;
        getSprite(): $ResourceLocation;
        setSprite(arg0: $ResourceLocation_): $VanillaSpriteTexture;
        static of(arg0: $ResourceLocation_): $VanillaSpriteTexture;
        constructor();
        constructor(arg0: $ResourceLocation_);
    }
}
