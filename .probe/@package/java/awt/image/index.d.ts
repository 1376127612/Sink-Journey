import { $BigInteger } from "@package/java/math";
import { $Rectangle2D, $Point2D } from "@package/java/awt/geom";
import { $ColorSpace } from "@package/java/awt/color";
import { $RenderingHints, $Point, $ImageCapabilities, $GraphicsConfiguration, $Graphics2D, $BufferCapabilities, $Image, $Transparency, $Graphics, $Rectangle } from "@package/java/awt";
import { $Object } from "@package/java/lang";
import { $Vector, $Hashtable } from "@package/java/util";
export * as renderable from "@package/java/awt/image/renderable";

declare module "@package/java/awt/image" {
    export class $Raster {
        static createBandedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: $Point): $WritableRaster;
        static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: $Point): $WritableRaster;
        static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        getNumDataElements(): number;
        getSample(arg0: number, arg1: number, arg2: number): number;
        getSampleFloat(arg0: number, arg1: number, arg2: number): number;
        getSampleDouble(arg0: number, arg1: number, arg2: number): number;
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        static createRaster(arg0: $SampleModel, arg1: $DataBuffer, arg2: $Point): $Raster;
        createTranslatedChild(arg0: number, arg1: number): $Raster;
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getHeight(): number;
        getSampleModel(): $SampleModel;
        static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $Point): $WritableRaster;
        static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        static createInterleavedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $Point): $WritableRaster;
        static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: $Point): $WritableRaster;
        static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Point): $WritableRaster;
        static createPackedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        static createPackedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $Point): $WritableRaster;
        getNumBands(): number;
        getDataBuffer(): $DataBuffer;
        getSampleModelTranslateX(): number;
        getSampleModelTranslateY(): number;
        static createWritableRaster(arg0: $SampleModel, arg1: $DataBuffer, arg2: $Point): $WritableRaster;
        static createWritableRaster(arg0: $SampleModel, arg1: $Point): $WritableRaster;
        getBounds(): $Rectangle;
        getParent(): $Raster;
        createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): $Raster;
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object): $Object;
        getDataElements(arg0: number, arg1: number, arg2: $Object): $Object;
        getTransferType(): number;
        createCompatibleWritableRaster(arg0: $Rectangle): $WritableRaster;
        createCompatibleWritableRaster(arg0: number, arg1: number): $WritableRaster;
        createCompatibleWritableRaster(): $WritableRaster;
        createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): $WritableRaster;
        getMinX(): number;
        getMinY(): number;
        getWidth(): number;
        get numDataElements(): number;
        get height(): number;
        get sampleModel(): $SampleModel;
        get numBands(): number;
        get dataBuffer(): $DataBuffer;
        get sampleModelTranslateX(): number;
        get sampleModelTranslateY(): number;
        get bounds(): $Rectangle;
        get parent(): $Raster;
        get transferType(): number;
        get minX(): number;
        get minY(): number;
        get width(): number;
    }
    export class $WritableRenderedImage {
    }
    export interface $WritableRenderedImage extends $RenderedImage {
        addTileObserver(arg0: $TileObserver_): void;
        removeTileObserver(arg0: $TileObserver_): void;
        isTileWritable(arg0: number, arg1: number): boolean;
        getWritableTileIndices(): $Point[];
        hasTileWriters(): boolean;
        getWritableTile(arg0: number, arg1: number): $WritableRaster;
        releaseWritableTile(arg0: number, arg1: number): void;
        setData(arg0: $Raster): void;
        get writableTileIndices(): $Point[];
        set data(value: $Raster);
    }
    export class $BufferedImage extends $Image implements $WritableRenderedImage, $Transparency {
        getHeight(): number;
        getSources(): $Vector<$RenderedImage>;
        getSampleModel(): $SampleModel;
        getNumXTiles(): number;
        getNumYTiles(): number;
        getMinTileX(): number;
        getMinTileY(): number;
        getTileWidth(): number;
        getTileHeight(): number;
        getTileGridXOffset(): number;
        getTileGridYOffset(): number;
        setRGB(arg0: number, arg1: number, arg2: number): void;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;
        getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): $BufferedImage;
        addTileObserver(arg0: $TileObserver_): void;
        removeTileObserver(arg0: $TileObserver_): void;
        isTileWritable(arg0: number, arg1: number): boolean;
        getWritableTileIndices(): $Point[];
        hasTileWriters(): boolean;
        getWritableTile(arg0: number, arg1: number): $WritableRaster;
        releaseWritableTile(arg0: number, arg1: number): void;
        getProperty(arg0: string): $Object;
        getType(): number;
        getData(): $Raster;
        getData(arg0: $Rectangle): $Raster;
        getPropertyNames(): string[];
        setData(arg0: $Raster): void;
        getRGB(arg0: number, arg1: number): number;
        getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];
        getTransparency(): number;
        isAlphaPremultiplied(): boolean;
        coerceData(arg0: boolean): void;
        getAlphaRaster(): $WritableRaster;
        getMinX(): number;
        getMinY(): number;
        createGraphics(): $Graphics2D;
        getWidth(): number;
        getColorModel(): $ColorModel;
        getRaster(): $WritableRaster;
        copyData(arg0: $WritableRaster): $WritableRaster;
        getTile(arg0: number, arg1: number): $Raster;
        static TYPE_3BYTE_BGR: number;
        static TYPE_USHORT_565_RGB: number;
        static TYPE_INT_ARGB_PRE: number;
        static TYPE_USHORT_555_RGB: number;
        static TYPE_USHORT_GRAY: number;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static TYPE_BYTE_INDEXED: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static TYPE_4BYTE_ABGR: number;
        static TYPE_INT_ARGB: number;
        static SCALE_DEFAULT: number;
        static TYPE_CUSTOM: number;
        static TYPE_INT_RGB: number;
        static TYPE_INT_BGR: number;
        static UndefinedProperty: $Object;
        static TYPE_BYTE_GRAY: number;
        static TYPE_4BYTE_ABGR_PRE: number;
        static TYPE_BYTE_BINARY: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $IndexColorModel);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ColorModel, arg1: $WritableRaster, arg2: boolean, arg3: $Hashtable<never, never>);
        get height(): number;
        get sources(): $Vector<$RenderedImage>;
        get sampleModel(): $SampleModel;
        get numXTiles(): number;
        get numYTiles(): number;
        get minTileX(): number;
        get minTileY(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        get tileGridXOffset(): number;
        get tileGridYOffset(): number;
        get writableTileIndices(): $Point[];
        get type(): number;
        get propertyNames(): string[];
        get transparency(): number;
        get alphaPremultiplied(): boolean;
        get alphaRaster(): $WritableRaster;
        get minX(): number;
        get minY(): number;
        get width(): number;
        get colorModel(): $ColorModel;
        get raster(): $WritableRaster;
    }
    export class $VolatileImage extends $Image implements $Transparency {
        getHeight(): number;
        getSnapshot(): $BufferedImage;
        validate(arg0: $GraphicsConfiguration): number;
        contentsLost(): boolean;
        getCapabilities(): $ImageCapabilities;
        getTransparency(): number;
        createGraphics(): $Graphics2D;
        getWidth(): number;
        static SCALE_DEFAULT: number;
        static UndefinedProperty: $Object;
        static IMAGE_OK: number;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static IMAGE_RESTORED: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static IMAGE_INCOMPATIBLE: number;
        get height(): number;
        get snapshot(): $BufferedImage;
        get capabilities(): $ImageCapabilities;
        get transparency(): number;
        get width(): number;
    }
    export class $BufferStrategy {
        show(): void;
        getDrawGraphics(): $Graphics;
        contentsRestored(): boolean;
        dispose(): void;
        contentsLost(): boolean;
        getCapabilities(): $BufferCapabilities;
        get drawGraphics(): $Graphics;
        get capabilities(): $BufferCapabilities;
    }
    export class $ImageObserver {
        static ABORT: number;
        static PROPERTIES: number;
        static SOMEBITS: number;
        static ALLBITS: number;
        static WIDTH: number;
        static ERROR: number;
        static HEIGHT: number;
        static FRAMEBITS: number;
    }
    export interface $ImageObserver {
        imageUpdate(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ImageObserver}.
     */
    export type $ImageObserver_ = ((arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => boolean);
    export class $ImageConsumer {
        static STATICIMAGEDONE: number;
        static SINGLEPASS: number;
        static RANDOMPIXELORDER: number;
        static TOPDOWNLEFTRIGHT: number;
        static IMAGEERROR: number;
        static SINGLEFRAMEDONE: number;
        static SINGLEFRAME: number;
        static COMPLETESCANLINES: number;
        static IMAGEABORTED: number;
    }
    export interface $ImageConsumer {
        setDimensions(arg0: number, arg1: number): void;
        setColorModel(arg0: $ColorModel): void;
        setProperties(arg0: $Hashtable<never, never>): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorModel, arg5: number[], arg6: number, arg7: number): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorModel, arg5: number[], arg6: number, arg7: number): void;
        setHints(arg0: number): void;
        imageComplete(arg0: number): void;
        set colorModel(value: $ColorModel);
        set properties(value: $Hashtable<never, never>);
        set hints(value: number);
    }
    export class $ColorModel implements $Transparency {
        getComponents(arg0: $Object, arg1: number[], arg2: number): number[];
        getComponents(arg0: number, arg1: number[], arg2: number): number[];
        getNumComponents(): number;
        getRGB(arg0: number): number;
        getRGB(arg0: $Object): number;
        getRed(arg0: number): number;
        getRed(arg0: $Object): number;
        getGreen(arg0: $Object): number;
        getGreen(arg0: number): number;
        getBlue(arg0: $Object): number;
        getBlue(arg0: number): number;
        getColorSpace(): $ColorSpace;
        getTransparency(): number;
        isAlphaPremultiplied(): boolean;
        getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getDataElement(arg0: number[], arg1: number): number;
        getDataElement(arg0: number[], arg1: number): number;
        getDataElements(arg0: number[], arg1: number, arg2: $Object): $Object;
        getDataElements(arg0: number[], arg1: number, arg2: $Object): $Object;
        getDataElements(arg0: number, arg1: $Object): $Object;
        getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getNormalizedComponents(arg0: $Object, arg1: number[], arg2: number): number[];
        static getRGBdefault(): $ColorModel;
        hasAlpha(): boolean;
        getTransferType(): number;
        getPixelSize(): number;
        getComponentSize(arg0: number): number;
        getComponentSize(): number[];
        getNumColorComponents(): number;
        coerceData(arg0: $WritableRaster, arg1: boolean): $ColorModel;
        isCompatibleRaster(arg0: $Raster): boolean;
        createCompatibleWritableRaster(arg0: number, arg1: number): $WritableRaster;
        createCompatibleSampleModel(arg0: number, arg1: number): $SampleModel;
        isCompatibleSampleModel(arg0: $SampleModel): boolean;
        getAlphaRaster(arg0: $WritableRaster): $WritableRaster;
        getAlpha(arg0: number): number;
        getAlpha(arg0: $Object): number;
        constructor(arg0: number);
        get numComponents(): number;
        get colorSpace(): $ColorSpace;
        get transparency(): number;
        get alphaPremultiplied(): boolean;
        static get RGBdefault(): $ColorModel;
        get transferType(): number;
        get pixelSize(): number;
        get numColorComponents(): number;
    }
    export class $IndexColorModel extends $ColorModel {
        getMapSize(): number;
        isValid(): boolean;
        isValid(arg0: number): boolean;
        getTransparentPixel(): number;
        getReds(arg0: number[]): void;
        getGreens(arg0: number[]): void;
        getBlues(arg0: number[]): void;
        getAlphas(arg0: number[]): void;
        getRGBs(arg0: number[]): void;
        convertToIntDiscrete(arg0: $Raster, arg1: boolean): $BufferedImage;
        getValidPixels(): $BigInteger;
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: $BigInteger);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[]);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
        get mapSize(): number;
        get transparentPixel(): number;
        get validPixels(): $BigInteger;
    }
    export class $DataBuffer {
        getNumBanks(): number;
        getElemFloat(arg0: number): number;
        getElemFloat(arg0: number, arg1: number): number;
        setElemFloat(arg0: number, arg1: number, arg2: number): void;
        setElemFloat(arg0: number, arg1: number): void;
        getElemDouble(arg0: number): number;
        getElemDouble(arg0: number, arg1: number): number;
        setElemDouble(arg0: number, arg1: number): void;
        setElemDouble(arg0: number, arg1: number, arg2: number): void;
        getDataType(): number;
        getSize(): number;
        getOffset(): number;
        getOffsets(): number[];
        static getDataTypeSize(arg0: number): number;
        getElem(arg0: number): number;
        getElem(arg0: number, arg1: number): number;
        setElem(arg0: number, arg1: number): void;
        setElem(arg0: number, arg1: number, arg2: number): void;
        static TYPE_INT: number;
        static TYPE_DOUBLE: number;
        static TYPE_SHORT: number;
        static TYPE_UNDEFINED: number;
        static TYPE_BYTE: number;
        static TYPE_USHORT: number;
        static TYPE_FLOAT: number;
        get numBanks(): number;
        get dataType(): number;
        get size(): number;
        get offset(): number;
        get offsets(): number[];
    }
    export class $ImageProducer {
    }
    export interface $ImageProducer {
        addConsumer(arg0: $ImageConsumer): void;
        isConsumer(arg0: $ImageConsumer): boolean;
        removeConsumer(arg0: $ImageConsumer): void;
        startProduction(arg0: $ImageConsumer): void;
        requestTopDownLeftRightResend(arg0: $ImageConsumer): void;
    }
    export class $RenderedImage {
    }
    export interface $RenderedImage {
        getHeight(): number;
        getSources(): $Vector<$RenderedImage>;
        getSampleModel(): $SampleModel;
        getNumXTiles(): number;
        getNumYTiles(): number;
        getMinTileX(): number;
        getMinTileY(): number;
        getTileWidth(): number;
        getTileHeight(): number;
        getTileGridXOffset(): number;
        getTileGridYOffset(): number;
        getProperty(arg0: string): $Object;
        getData(): $Raster;
        getData(arg0: $Rectangle): $Raster;
        getPropertyNames(): string[];
        getMinX(): number;
        getMinY(): number;
        getWidth(): number;
        getColorModel(): $ColorModel;
        copyData(arg0: $WritableRaster): $WritableRaster;
        getTile(arg0: number, arg1: number): $Raster;
        get height(): number;
        get sources(): $Vector<$RenderedImage>;
        get sampleModel(): $SampleModel;
        get numXTiles(): number;
        get numYTiles(): number;
        get minTileX(): number;
        get minTileY(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        get tileGridXOffset(): number;
        get tileGridYOffset(): number;
        get propertyNames(): string[];
        get minX(): number;
        get minY(): number;
        get width(): number;
        get colorModel(): $ColorModel;
    }
    export class $TileObserver {
    }
    export interface $TileObserver {
        tileUpdate(arg0: $WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $TileObserver}.
     */
    export type $TileObserver_ = ((arg0: $WritableRenderedImage, arg1: number, arg2: number, arg3: boolean) => void);
    export class $BufferedImageOp {
    }
    export interface $BufferedImageOp {
        filter(arg0: $BufferedImage, arg1: $BufferedImage): $BufferedImage;
        getRenderingHints(): $RenderingHints;
        getBounds2D(arg0: $BufferedImage): $Rectangle2D;
        createCompatibleDestImage(arg0: $BufferedImage, arg1: $ColorModel): $BufferedImage;
        getPoint2D(arg0: $Point2D, arg1: $Point2D): $Point2D;
        get renderingHints(): $RenderingHints;
    }
    export class $SampleModel {
        getSampleSize(arg0: number): number;
        getSampleSize(): number[];
        createDataBuffer(): $DataBuffer;
        getNumDataElements(): number;
        createSubsetSampleModel(arg0: number[]): $SampleModel;
        getSample(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        getHeight(): number;
        getNumBands(): number;
        setDataElements(arg0: number, arg1: number, arg2: $Object, arg3: $DataBuffer): void;
        setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object, arg5: $DataBuffer): void;
        getDataType(): number;
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        getDataElements(arg0: number, arg1: number, arg2: $Object, arg3: $DataBuffer): $Object;
        getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object, arg5: $DataBuffer): $Object;
        getTransferType(): number;
        createCompatibleSampleModel(arg0: number, arg1: number): $SampleModel;
        getWidth(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get numDataElements(): number;
        get height(): number;
        get numBands(): number;
        get dataType(): number;
        get transferType(): number;
        get width(): number;
    }
    export class $WritableRaster extends $Raster {
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        getWritableParent(): $WritableRaster;
        createWritableTranslatedChild(arg0: number, arg1: number): $WritableRaster;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setDataElements(arg0: number, arg1: number, arg2: $Object): void;
        setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object): void;
        setDataElements(arg0: number, arg1: number, arg2: $Raster): void;
        createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): $WritableRaster;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setRect(arg0: $Raster): void;
        setRect(arg0: number, arg1: number, arg2: $Raster): void;
        get writableParent(): $WritableRaster;
    }
}
