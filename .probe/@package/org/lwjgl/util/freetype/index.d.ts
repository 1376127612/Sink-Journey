import { $Consumer_ } from "@package/java/util/function";
import { $FFICIF } from "@package/org/lwjgl/system/libffi";
import { $PointerBuffer } from "@package/org/lwjgl";
import { $ByteBuffer, $ShortBuffer } from "@package/java/nio";
import { $NativeResource, $CallbackI, $Callback, $MemoryStack, $Struct, $StructBuffer } from "@package/org/lwjgl/system";

declare module "@package/org/lwjgl/util/freetype" {
    export class $FT_BBox extends $Struct<$FT_BBox> implements $NativeResource {
        set(arg0: number, arg1: number, arg2: number, arg3: number): $FT_BBox;
        set(arg0: $FT_BBox): $FT_BBox;
        static create(arg0: number, arg1: number): $FT_BBox$Buffer;
        static create(arg0: number): $FT_BBox$Buffer;
        static create(arg0: number): $FT_BBox;
        static create(): $FT_BBox;
        static createSafe(arg0: number, arg1: number): $FT_BBox$Buffer;
        static createSafe(arg0: number): $FT_BBox;
        static calloc(): $FT_BBox;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_BBox$Buffer;
        static calloc(arg0: $MemoryStack): $FT_BBox;
        static calloc(arg0: number): $FT_BBox$Buffer;
        static malloc(arg0: number): $FT_BBox$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_BBox$Buffer;
        static malloc(arg0: $MemoryStack): $FT_BBox;
        static malloc(): $FT_BBox;
        xMin(): number;
        xMin(arg0: number): $FT_BBox;
        yMin(): number;
        yMin(arg0: number): $FT_BBox;
        xMax(): number;
        xMax(arg0: number): $FT_BBox;
        yMax(arg0: number): $FT_BBox;
        yMax(): number;
        static nyMin(arg0: number, arg1: number): void;
        static nyMin(arg0: number): number;
        static nxMax(arg0: number): number;
        static nxMax(arg0: number, arg1: number): void;
        static nxMin(arg0: number): number;
        static nxMin(arg0: number, arg1: number): void;
        static nyMax(arg0: number, arg1: number): void;
        static nyMax(arg0: number): number;
        close(): void;
        static YMIN: number;
        static YMAX: number;
        static XMIN: number;
        static XMAX: number;
        static ALIGNOF: number;
        static SIZEOF: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Outline extends $Struct<$FT_Outline> implements $NativeResource {
        flags(): number;
        static create(arg0: number): $FT_Outline;
        static create(arg0: number, arg1: number): $FT_Outline$Buffer;
        static create(): $FT_Outline;
        static create(arg0: number): $FT_Outline$Buffer;
        tags(): $ByteBuffer;
        static nflags(arg0: number): number;
        static createSafe(arg0: number): $FT_Outline;
        static createSafe(arg0: number, arg1: number): $FT_Outline$Buffer;
        static calloc(arg0: $MemoryStack): $FT_Outline;
        static calloc(arg0: number): $FT_Outline$Buffer;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_Outline$Buffer;
        static calloc(): $FT_Outline;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_Outline$Buffer;
        static malloc(arg0: number): $FT_Outline$Buffer;
        static malloc(arg0: $MemoryStack): $FT_Outline;
        static malloc(): $FT_Outline;
        points(): $FT_Vector$Buffer;
        static npoints(arg0: number): $FT_Vector$Buffer;
        contours(): $ShortBuffer;
        static nn_points(arg0: number): number;
        static ntags(arg0: number): $ByteBuffer;
        static ncontours(arg0: number): $ShortBuffer;
        n_contours(): number;
        n_points(): number;
        static nn_contours(arg0: number): number;
        close(): void;
        static CONTOURS: number;
        static N_CONTOURS: number;
        static ALIGNOF: number;
        static SIZEOF: number;
        static FLAGS: number;
        static POINTS: number;
        static N_POINTS: number;
        static TAGS: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Alloc_Func extends $Callback implements $FT_Alloc_FuncI {
        static create(arg0: number): $FT_Alloc_Func;
        static create(arg0: $FT_Alloc_FuncI_): $FT_Alloc_Func;
        static createSafe(arg0: number): $FT_Alloc_Func;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $FT_CharMap$Buffer extends $StructBuffer<$FT_CharMap, $FT_CharMap$Buffer> {
        encoding(): number;
        face(): $FT_Face;
        platform_id(): number;
        encoding_id(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Stream$Buffer extends $StructBuffer<$FT_Stream, $FT_Stream$Buffer> implements $NativeResource {
        base(arg0: $ByteBuffer | null): $FT_Stream$Buffer;
        base(): $ByteBuffer;
        size(arg0: number): $FT_Stream$Buffer;
        size(): number;
        read(): $FT_Stream_IoFunc;
        read(arg0: $FT_Stream_IoFuncI_ | null): $FT_Stream$Buffer;
        descriptor(arg0: $Consumer_<$FT_StreamDesc>): $FT_Stream$Buffer;
        descriptor(arg0: $FT_StreamDesc): $FT_Stream$Buffer;
        descriptor(): $FT_StreamDesc;
        pos(): number;
        pos(arg0: number): $FT_Stream$Buffer;
        pathname(): $FT_StreamDesc;
        pathname(arg0: $Consumer_<$FT_StreamDesc>): $FT_Stream$Buffer;
        pathname(arg0: $FT_StreamDesc): $FT_Stream$Buffer;
        close$(): $FT_Stream_CloseFunc;
        close$(arg0: $FT_Stream_CloseFuncI_ | null): $FT_Stream$Buffer;
        close(): void;
        constructor(arg0: $ByteBuffer);
        constructor(arg0: number, arg1: number);
    }
    export class $FT_Free_FuncI {
        static CIF: $FFICIF;
    }
    export interface $FT_Free_FuncI extends $CallbackI {
        invoke(arg0: number, arg1: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $FT_Free_FuncI}.
     */
    export type $FT_Free_FuncI_ = ((arg0: number, arg1: number) => void);
    export class $FT_Size_Internal$Buffer extends $StructBuffer<$FT_Size_Internal, $FT_Size_Internal$Buffer> {
        module_data(): number;
        autohint_mode(): number;
        autohint_metrics(): $FT_Size_Metrics;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Realloc_FuncI {
        static CIF: $FFICIF;
    }
    export interface $FT_Realloc_FuncI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number, arg3: number): number;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $FT_Realloc_FuncI}.
     */
    export type $FT_Realloc_FuncI_ = ((arg0: number, arg1: number, arg2: number, arg3: number) => number);
    export class $FT_GlyphSlot$Buffer extends $StructBuffer<$FT_GlyphSlot, $FT_GlyphSlot$Buffer> {
        bitmap_left(): number;
        next(): $FT_GlyphSlot;
        format(): number;
        generic(): $FT_Generic;
        advance(): $FT_Vector;
        metrics(): $FT_Glyph_Metrics;
        library(): number;
        glyph_index(): number;
        bitmap(): $FT_Bitmap;
        face(): $FT_Face;
        outline(): $FT_Outline;
        bitmap_top(): number;
        rsb_delta(): number;
        lsb_delta(): number;
        linearHoriAdvance(): number;
        linearVertAdvance(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Bitmap extends $Struct<$FT_Bitmap> implements $NativeResource {
        buffer(arg0: number): $ByteBuffer;
        static create(arg0: number): $FT_Bitmap;
        static create(arg0: number, arg1: number): $FT_Bitmap$Buffer;
        static create(): $FT_Bitmap;
        static create(arg0: number): $FT_Bitmap$Buffer;
        rows(): number;
        width(): number;
        static createSafe(arg0: number, arg1: number): $FT_Bitmap$Buffer;
        static createSafe(arg0: number): $FT_Bitmap;
        static nwidth(arg0: number): number;
        static calloc(arg0: $MemoryStack): $FT_Bitmap;
        static calloc(arg0: number): $FT_Bitmap$Buffer;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_Bitmap$Buffer;
        static calloc(): $FT_Bitmap;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_Bitmap$Buffer;
        static malloc(arg0: $MemoryStack): $FT_Bitmap;
        static malloc(arg0: number): $FT_Bitmap$Buffer;
        static malloc(): $FT_Bitmap;
        pixel_mode(): number;
        palette(): number;
        pitch(): number;
        static npitch(arg0: number): number;
        static npalette(arg0: number): number;
        static nrows(arg0: number): number;
        static nbuffer(arg0: number, arg1: number): $ByteBuffer;
        static nnum_grays(arg0: number): number;
        num_grays(): number;
        palette_mode(): number;
        static npalette_mode(arg0: number): number;
        static npixel_mode(arg0: number): number;
        close(): void;
        static PALETTE: number;
        static ALIGNOF: number;
        static PIXEL_MODE: number;
        static PALETTE_MODE: number;
        static SIZEOF: number;
        static PITCH: number;
        static WIDTH: number;
        static BUFFER: number;
        static ROWS: number;
        static NUM_GRAYS: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Stream_IoFunc extends $Callback implements $FT_Stream_IoFuncI {
        static create(arg0: number): $FT_Stream_IoFunc;
        static create(arg0: $FT_Stream_IoFuncI_): $FT_Stream_IoFunc;
        static createSafe(arg0: number): $FT_Stream_IoFunc;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $FT_Stream_CloseFuncI {
        static CIF: $FFICIF;
    }
    export interface $FT_Stream_CloseFuncI extends $CallbackI {
        invoke(arg0: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $FT_Stream_CloseFuncI}.
     */
    export type $FT_Stream_CloseFuncI_ = ((arg0: number) => void);
    export class $FT_Realloc_Func extends $Callback implements $FT_Realloc_FuncI {
        static create(arg0: number): $FT_Realloc_Func;
        static create(arg0: $FT_Realloc_FuncI_): $FT_Realloc_Func;
        static createSafe(arg0: number): $FT_Realloc_Func;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $FT_Outline$Buffer extends $StructBuffer<$FT_Outline, $FT_Outline$Buffer> implements $NativeResource {
        flags(): number;
        tags(): $ByteBuffer;
        points(): $FT_Vector$Buffer;
        contours(): $ShortBuffer;
        n_contours(): number;
        n_points(): number;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Bitmap$Buffer extends $StructBuffer<$FT_Bitmap, $FT_Bitmap$Buffer> implements $NativeResource {
        buffer(arg0: number): $ByteBuffer;
        rows(): number;
        width(): number;
        pixel_mode(): number;
        palette(): number;
        pitch(): number;
        num_grays(): number;
        palette_mode(): number;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Bitmap_Size$Buffer extends $StructBuffer<$FT_Bitmap_Size, $FT_Bitmap_Size$Buffer> {
        size(): number;
        width(): number;
        height(): number;
        y_ppem(): number;
        x_ppem(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Glyph_Metrics$Buffer extends $StructBuffer<$FT_Glyph_Metrics, $FT_Glyph_Metrics$Buffer> {
        width(): number;
        height(): number;
        horiBearingX(): number;
        horiBearingY(): number;
        vertBearingX(): number;
        vertAdvance(): number;
        vertBearingY(): number;
        horiAdvance(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Size_Metrics$Buffer extends $StructBuffer<$FT_Size_Metrics, $FT_Size_Metrics$Buffer> {
        height(): number;
        y_scale(): number;
        descender(): number;
        ascender(): number;
        x_scale(): number;
        y_ppem(): number;
        x_ppem(): number;
        max_advance(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Memory extends $Struct<$FT_Memory> implements $NativeResource {
        set(arg0: $FT_Memory): $FT_Memory;
        set(arg0: number, arg1: $FT_Alloc_FuncI_, arg2: $FT_Free_FuncI_, arg3: $FT_Realloc_FuncI_): $FT_Memory;
        static create(arg0: number): $FT_Memory$Buffer;
        static create(arg0: number, arg1: number): $FT_Memory$Buffer;
        static create(): $FT_Memory;
        static create(arg0: number): $FT_Memory;
        user(arg0: number): $FT_Memory;
        user(): number;
        static createSafe(arg0: number): $FT_Memory;
        static createSafe(arg0: number, arg1: number): $FT_Memory$Buffer;
        realloc(arg0: $FT_Realloc_FuncI_ | null): $FT_Memory;
        realloc(): $FT_Realloc_Func;
        static calloc(arg0: number): $FT_Memory$Buffer;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_Memory$Buffer;
        static calloc(): $FT_Memory;
        static calloc(arg0: $MemoryStack): $FT_Memory;
        static malloc(arg0: $MemoryStack): $FT_Memory;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_Memory$Buffer;
        static malloc(arg0: number): $FT_Memory$Buffer;
        static malloc(): $FT_Memory;
        alloc(arg0: $FT_Alloc_FuncI_ | null): $FT_Memory;
        alloc(): $FT_Alloc_Func;
        static nuser(arg0: number, arg1: number): void;
        static nuser(arg0: number): number;
        static nfree$(arg0: number, arg1: $FT_Free_FuncI_ | null): void;
        static nfree$(arg0: number): $FT_Free_Func;
        static nalloc(arg0: number, arg1: $FT_Alloc_FuncI_ | null): void;
        static nalloc(arg0: number): $FT_Alloc_Func;
        free$(arg0: $FT_Free_FuncI_ | null): $FT_Memory;
        free$(): $FT_Free_Func;
        static nrealloc(arg0: number): $FT_Realloc_Func;
        static nrealloc(arg0: number, arg1: $FT_Realloc_FuncI_ | null): void;
        close(): void;
        static ALLOC: number;
        static ALIGNOF: number;
        static REALLOC: number;
        static SIZEOF: number;
        static USER: number;
        static FREE: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Free_Func extends $Callback implements $FT_Free_FuncI {
        static create(arg0: number): $FT_Free_Func;
        static create(arg0: $FT_Free_FuncI_): $FT_Free_Func;
        static createSafe(arg0: number): $FT_Free_Func;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $FT_StreamDesc$Buffer extends $StructBuffer<$FT_StreamDesc, $FT_StreamDesc$Buffer> implements $NativeResource {
        value(arg0: number): $FT_StreamDesc$Buffer;
        value(): number;
        pointer(): number;
        pointer(arg0: number): $FT_StreamDesc$Buffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Generic_Finalizer extends $Callback implements $FT_Generic_FinalizerI {
        static create(arg0: number): $FT_Generic_Finalizer;
        static create(arg0: $FT_Generic_FinalizerI_): $FT_Generic_Finalizer;
        static createSafe(arg0: number): $FT_Generic_Finalizer;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $FT_Size extends $Struct<$FT_Size> implements $NativeResource {
        static validate(arg0: number): void;
        set(arg0: $FT_Face, arg1: $FT_Generic, arg2: $FT_Size_Metrics): $FT_Size;
        set(arg0: $FT_Size): $FT_Size;
        static create(arg0: number, arg1: number): $FT_Size$Buffer;
        static create(arg0: number): $FT_Size$Buffer;
        static create(): $FT_Size;
        static create(arg0: number): $FT_Size;
        generic(arg0: $FT_Generic): $FT_Size;
        generic(): $FT_Generic;
        generic(arg0: $Consumer_<$FT_Generic>): $FT_Size;
        metrics(arg0: $FT_Size_Metrics): $FT_Size;
        metrics(): $FT_Size_Metrics;
        static createSafe(arg0: number): $FT_Size;
        static createSafe(arg0: number, arg1: number): $FT_Size$Buffer;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_Size$Buffer;
        static calloc(arg0: $MemoryStack): $FT_Size;
        static calloc(arg0: number): $FT_Size$Buffer;
        static calloc(): $FT_Size;
        static malloc(arg0: number): $FT_Size$Buffer;
        static malloc(): $FT_Size;
        static malloc(arg0: $MemoryStack): $FT_Size;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_Size$Buffer;
        face(): $FT_Face;
        face(arg0: $FT_Face): $FT_Size;
        static ngeneric(arg0: number, arg1: $FT_Generic): void;
        static ngeneric(arg0: number): $FT_Generic;
        static ninternal(arg0: number, arg1: $FT_Size_Internal): void;
        static ninternal(arg0: number): $FT_Size_Internal;
        static nface(arg0: number): $FT_Face;
        static nface(arg0: number, arg1: $FT_Face): void;
        static nmetrics(arg0: number): $FT_Size_Metrics;
        static nmetrics(arg0: number, arg1: $FT_Size_Metrics): void;
        close(): void;
        static GENERIC: number;
        static ALIGNOF: number;
        static METRICS: number;
        static SIZEOF: number;
        static INTERNAL: number;
        static FACE: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Face$Buffer extends $StructBuffer<$FT_Face, $FT_Face$Buffer> {
        size(): $FT_Size;
        generic(): $FT_Generic;
        glyph(): $FT_GlyphSlot;
        bbox(): $FT_BBox;
        height(): number;
        style_name(): $ByteBuffer;
        num_glyphs(): number;
        charmaps(): $PointerBuffer;
        descender(): number;
        face_flags(): number;
        num_faces(): number;
        charmap(): $FT_CharMap;
        ascender(): number;
        face_index(): number;
        underline_thickness(): number;
        family_name(): $ByteBuffer;
        style_flags(): number;
        family_nameString(): string;
        style_nameString(): string;
        num_fixed_sizes(): number;
        num_charmaps(): number;
        units_per_EM(): number;
        available_sizes(): $FT_Bitmap_Size$Buffer;
        max_advance_width(): number;
        underline_position(): number;
        max_advance_height(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Face extends $Struct<$FT_Face> {
        size(): $FT_Size;
        static create(arg0: number): $FT_Face;
        static create(arg0: number, arg1: number): $FT_Face$Buffer;
        generic(): $FT_Generic;
        static nsize(arg0: number): $FT_Size;
        static createSafe(arg0: number, arg1: number): $FT_Face$Buffer;
        static createSafe(arg0: number): $FT_Face;
        static nheight(arg0: number): number;
        glyph(): $FT_GlyphSlot;
        bbox(): $FT_BBox;
        height(): number;
        style_name(): $ByteBuffer;
        static nmemory(arg0: number): $FT_Memory;
        num_glyphs(): number;
        static nascender(arg0: number): number;
        charmaps(): $PointerBuffer;
        static nglyph(arg0: number): $FT_GlyphSlot;
        static nnum_faces(arg0: number): number;
        static nbbox(arg0: number): $FT_BBox;
        descender(): number;
        static ndescender(arg0: number): number;
        static ndriver(arg0: number): number;
        static nstream$(arg0: number): $FT_Stream;
        face_flags(): number;
        static ngeneric(arg0: number): $FT_Generic;
        static ninternal(arg0: number): number;
        static nautohint(arg0: number): $FT_Generic;
        static ncharmaps(arg0: number): $PointerBuffer;
        num_faces(): number;
        static ncharmap(arg0: number): $FT_CharMap;
        charmap(): $FT_CharMap;
        ascender(): number;
        face_index(): number;
        static nunderline_thickness(arg0: number): number;
        static nunderline_position(arg0: number): number;
        underline_thickness(): number;
        static nmax_advance_height(arg0: number): number;
        family_name(): $ByteBuffer;
        style_flags(): number;
        family_nameString(): string;
        style_nameString(): string;
        num_fixed_sizes(): number;
        num_charmaps(): number;
        units_per_EM(): number;
        available_sizes(): $FT_Bitmap_Size$Buffer;
        max_advance_width(): number;
        static navailable_sizes(arg0: number): $FT_Bitmap_Size$Buffer;
        static nfamily_name(arg0: number): $ByteBuffer;
        static nfamily_nameString(arg0: number): string;
        static nextensions(arg0: number): number;
        static nstyle_flags(arg0: number): number;
        static nnum_charmaps(arg0: number): number;
        static nface_flags(arg0: number): number;
        static nnum_fixed_sizes(arg0: number): number;
        static nsizes_list(arg0: number): $FT_List;
        static nunits_per_EM(arg0: number): number;
        static nnum_glyphs(arg0: number): number;
        underline_position(): number;
        static nstyle_name(arg0: number): $ByteBuffer;
        max_advance_height(): number;
        static nmax_advance_width(arg0: number): number;
        static nface_index(arg0: number): number;
        static nstyle_nameString(arg0: number): string;
        static UNDERLINE_THICKNESS: number;
        static GLYPH: number;
        static SIZES_LIST: number;
        static NUM_GLYPHS: number;
        static EXTENSIONS: number;
        static AUTOHINT: number;
        static DRIVER: number;
        static SIZEOF: number;
        static FACE_FLAGS: number;
        static NUM_FACES: number;
        static NUM_FIXED_SIZES: number;
        static MEMORY: number;
        static FAMILY_NAME: number;
        static AVAILABLE_SIZES: number;
        static UNDERLINE_POSITION: number;
        static INTERNAL: number;
        static MAX_ADVANCE_HEIGHT: number;
        static ASCENDER: number;
        static UNITS_PER_EM: number;
        static MAX_ADVANCE_WIDTH: number;
        static FACE_INDEX: number;
        static SIZE: number;
        static STREAM: number;
        static NUM_CHARMAPS: number;
        static CHARMAPS: number;
        static HEIGHT: number;
        static STYLE_FLAGS: number;
        static GENERIC: number;
        static BBOX: number;
        static ALIGNOF: number;
        static STYLE_NAME: number;
        static DESCENDER: number;
        static CHARMAP: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Size_Metrics extends $Struct<$FT_Size_Metrics> {
        static create(arg0: number): $FT_Size_Metrics;
        static create(arg0: number, arg1: number): $FT_Size_Metrics$Buffer;
        static createSafe(arg0: number): $FT_Size_Metrics;
        static createSafe(arg0: number, arg1: number): $FT_Size_Metrics$Buffer;
        static nheight(arg0: number): number;
        height(): number;
        y_scale(): number;
        static nascender(arg0: number): number;
        descender(): number;
        static ndescender(arg0: number): number;
        ascender(): number;
        x_scale(): number;
        static ny_scale(arg0: number): number;
        static nx_scale(arg0: number): number;
        y_ppem(): number;
        x_ppem(): number;
        static nx_ppem(arg0: number): number;
        static ny_ppem(arg0: number): number;
        static nmax_advance(arg0: number): number;
        max_advance(): number;
        static ASCENDER: number;
        static Y_PPEM: number;
        static X_SCALE: number;
        static X_PPEM: number;
        static ALIGNOF: number;
        static SIZEOF: number;
        static MAX_ADVANCE: number;
        static Y_SCALE: number;
        static HEIGHT: number;
        static DESCENDER: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Generic_FinalizerI {
        static CIF: $FFICIF;
    }
    export interface $FT_Generic_FinalizerI extends $CallbackI {
        invoke(arg0: number): void;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $FT_Generic_FinalizerI}.
     */
    export type $FT_Generic_FinalizerI_ = ((arg0: number) => void);
    export class $FT_Alloc_FuncI {
        static CIF: $FFICIF;
    }
    export interface $FT_Alloc_FuncI extends $CallbackI {
        invoke(arg0: number, arg1: number): number;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $FT_Alloc_FuncI}.
     */
    export type $FT_Alloc_FuncI_ = ((arg0: number, arg1: number) => number);
    export class $FT_Memory$Buffer extends $StructBuffer<$FT_Memory, $FT_Memory$Buffer> implements $NativeResource {
        user(): number;
        user(arg0: number): $FT_Memory$Buffer;
        realloc(arg0: $FT_Realloc_FuncI_ | null): $FT_Memory$Buffer;
        realloc(): $FT_Realloc_Func;
        alloc(): $FT_Alloc_Func;
        alloc(arg0: $FT_Alloc_FuncI_ | null): $FT_Memory$Buffer;
        free$(arg0: $FT_Free_FuncI_ | null): $FT_Memory$Buffer;
        free$(): $FT_Free_Func;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_ListNode extends $Struct<$FT_ListNode> {
        next(): $FT_ListNode;
        data(arg0: number): $ByteBuffer;
        prev(): $FT_ListNode;
        static create(arg0: number): $FT_ListNode;
        static create(arg0: number, arg1: number): $FT_ListNode$Buffer;
        static createSafe(arg0: number, arg1: number): $FT_ListNode$Buffer;
        static createSafe(arg0: number): $FT_ListNode;
        static ndata(arg0: number, arg1: number): $ByteBuffer;
        static nnext(arg0: number): $FT_ListNode;
        static nprev(arg0: number): $FT_ListNode;
        static DATA: number;
        static PREV: number;
        static ALIGNOF: number;
        static NEXT: number;
        static SIZEOF: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_ListNode$Buffer extends $StructBuffer<$FT_ListNode, $FT_ListNode$Buffer> {
        next(): $FT_ListNode;
        data(arg0: number): $ByteBuffer;
        prev(): $FT_ListNode;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Stream extends $Struct<$FT_Stream> implements $NativeResource {
        base(): $ByteBuffer;
        base(arg0: $ByteBuffer | null): $FT_Stream;
        size(arg0: number): $FT_Stream;
        size(): number;
        set(arg0: $FT_Stream): $FT_Stream;
        set(arg0: $ByteBuffer | null, arg1: number, arg2: number, arg3: $FT_StreamDesc, arg4: $FT_StreamDesc, arg5: $FT_Stream_IoFuncI_ | null, arg6: $FT_Stream_CloseFuncI_ | null): $FT_Stream;
        read(arg0: $FT_Stream_IoFuncI_ | null): $FT_Stream;
        read(): $FT_Stream_IoFunc;
        descriptor(arg0: $FT_StreamDesc): $FT_Stream;
        descriptor(arg0: $Consumer_<$FT_StreamDesc>): $FT_Stream;
        descriptor(): $FT_StreamDesc;
        static create(): $FT_Stream;
        static create(arg0: number): $FT_Stream$Buffer;
        static create(arg0: number, arg1: number): $FT_Stream$Buffer;
        static create(arg0: number): $FT_Stream;
        pos(arg0: number): $FT_Stream;
        pos(): number;
        static nread(arg0: number): $FT_Stream_IoFunc;
        static nread(arg0: number, arg1: $FT_Stream_IoFuncI_ | null): void;
        pathname(): $FT_StreamDesc;
        pathname(arg0: $Consumer_<$FT_StreamDesc>): $FT_Stream;
        pathname(arg0: $FT_StreamDesc): $FT_Stream;
        static nsize(arg0: number): number;
        static nsize(arg0: number, arg1: number): void;
        static createSafe(arg0: number, arg1: number): $FT_Stream$Buffer;
        static createSafe(arg0: number): $FT_Stream;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_Stream$Buffer;
        static calloc(arg0: $MemoryStack): $FT_Stream;
        static calloc(arg0: number): $FT_Stream$Buffer;
        static calloc(): $FT_Stream;
        static malloc(): $FT_Stream;
        static malloc(arg0: number): $FT_Stream$Buffer;
        static malloc(arg0: $MemoryStack): $FT_Stream;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_Stream$Buffer;
        static nmemory(arg0: number, arg1: $FT_Memory | null): void;
        static nmemory(arg0: number): $FT_Memory;
        close$(): $FT_Stream_CloseFunc;
        close$(arg0: $FT_Stream_CloseFuncI_ | null): $FT_Stream;
        static nbase(arg0: number, arg1: $ByteBuffer | null): void;
        static nbase(arg0: number): $ByteBuffer;
        static npathname(arg0: number, arg1: $FT_StreamDesc): void;
        static npathname(arg0: number): $FT_StreamDesc;
        static ncursor(arg0: number, arg1: $ByteBuffer | null): void;
        static ncursor(arg0: number, arg1: number): $ByteBuffer;
        static nlimit$(arg0: number, arg1: number): $ByteBuffer;
        static nlimit$(arg0: number, arg1: $ByteBuffer | null): void;
        static nclose$(arg0: number, arg1: $FT_Stream_CloseFuncI_ | null): void;
        static nclose$(arg0: number): $FT_Stream_CloseFunc;
        static npos(arg0: number, arg1: number): void;
        static npos(arg0: number): number;
        static ndescriptor(arg0: number): $FT_StreamDesc;
        static ndescriptor(arg0: number, arg1: $FT_StreamDesc): void;
        close(): void;
        static READ: number;
        static DESCRIPTOR: number;
        static MEMORY: number;
        static POS: number;
        static PATHNAME: number;
        static ALIGNOF: number;
        static SIZE: number;
        static SIZEOF: number;
        static LIMIT: number;
        static CLOSE: number;
        static BASE: number;
        static CURSOR: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Stream_IoFuncI {
        static CIF: $FFICIF;
    }
    export interface $FT_Stream_IoFuncI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number, arg3: number): number;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $FT_Stream_IoFuncI}.
     */
    export type $FT_Stream_IoFuncI_ = ((arg0: number, arg1: number, arg2: number, arg3: number) => number);
    export class $FT_Size$Buffer extends $StructBuffer<$FT_Size, $FT_Size$Buffer> implements $NativeResource {
        generic(arg0: $FT_Generic): $FT_Size$Buffer;
        generic(arg0: $Consumer_<$FT_Generic>): $FT_Size$Buffer;
        generic(): $FT_Generic;
        metrics(arg0: $FT_Size_Metrics): $FT_Size$Buffer;
        metrics(): $FT_Size_Metrics;
        face(): $FT_Face;
        face(arg0: $FT_Face): $FT_Size$Buffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Generic$Buffer extends $StructBuffer<$FT_Generic, $FT_Generic$Buffer> implements $NativeResource {
        data(): number;
        data(arg0: number): $FT_Generic$Buffer;
        finalizer(): $FT_Generic_Finalizer;
        finalizer(arg0: $FT_Generic_FinalizerI_): $FT_Generic$Buffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_CharMap extends $Struct<$FT_CharMap> {
        encoding(): number;
        static create(arg0: number): $FT_CharMap;
        static create(arg0: number, arg1: number): $FT_CharMap$Buffer;
        static createSafe(arg0: number): $FT_CharMap;
        static createSafe(arg0: number, arg1: number): $FT_CharMap$Buffer;
        face(): $FT_Face;
        static nface(arg0: number): $FT_Face;
        static nencoding(arg0: number): number;
        static nplatform_id(arg0: number): number;
        platform_id(): number;
        static nencoding_id(arg0: number): number;
        encoding_id(): number;
        static PLATFORM_ID: number;
        static ENCODING: number;
        static ALIGNOF: number;
        static ENCODING_ID: number;
        static SIZEOF: number;
        static FACE: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_BBox$Buffer extends $StructBuffer<$FT_BBox, $FT_BBox$Buffer> implements $NativeResource {
        xMin(arg0: number): $FT_BBox$Buffer;
        xMin(): number;
        yMin(arg0: number): $FT_BBox$Buffer;
        yMin(): number;
        xMax(): number;
        xMax(arg0: number): $FT_BBox$Buffer;
        yMax(arg0: number): $FT_BBox$Buffer;
        yMax(): number;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_List extends $Struct<$FT_List> {
        tail(): $FT_ListNode;
        static create(arg0: number): $FT_List;
        static create(arg0: number, arg1: number): $FT_List$Buffer;
        head(): $FT_ListNode;
        static createSafe(arg0: number, arg1: number): $FT_List$Buffer;
        static createSafe(arg0: number): $FT_List;
        static nhead(arg0: number): $FT_ListNode;
        static ntail(arg0: number): $FT_ListNode;
        static HEAD: number;
        static ALIGNOF: number;
        static TAIL: number;
        static SIZEOF: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Vector extends $Struct<$FT_Vector> implements $NativeResource {
        x(arg0: number): $FT_Vector;
        x(): number;
        set(arg0: number, arg1: number): $FT_Vector;
        set(arg0: $FT_Vector): $FT_Vector;
        static create(): $FT_Vector;
        static create(arg0: number): $FT_Vector$Buffer;
        static create(arg0: number, arg1: number): $FT_Vector$Buffer;
        static create(arg0: number): $FT_Vector;
        y(arg0: number): $FT_Vector;
        y(): number;
        static createSafe(arg0: number, arg1: number): $FT_Vector$Buffer;
        static createSafe(arg0: number): $FT_Vector;
        static ny(arg0: number, arg1: number): void;
        static ny(arg0: number): number;
        static calloc(arg0: $MemoryStack): $FT_Vector;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_Vector$Buffer;
        static calloc(arg0: number): $FT_Vector$Buffer;
        static calloc(): $FT_Vector;
        static malloc(): $FT_Vector;
        static malloc(arg0: number): $FT_Vector$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_Vector$Buffer;
        static malloc(arg0: $MemoryStack): $FT_Vector;
        static nx(arg0: number): number;
        static nx(arg0: number, arg1: number): void;
        close(): void;
        static ALIGNOF: number;
        static SIZEOF: number;
        static X: number;
        static Y: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Vector$Buffer extends $StructBuffer<$FT_Vector, $FT_Vector$Buffer> implements $NativeResource {
        x(arg0: number): $FT_Vector$Buffer;
        x(): number;
        y(): number;
        y(arg0: number): $FT_Vector$Buffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Size_Internal extends $Struct<$FT_Size_Internal> {
        static create(arg0: number): $FT_Size_Internal;
        static create(arg0: number, arg1: number): $FT_Size_Internal$Buffer;
        static createSafe(arg0: number): $FT_Size_Internal;
        static createSafe(arg0: number, arg1: number): $FT_Size_Internal$Buffer;
        module_data(): number;
        static nautohint_mode(arg0: number): number;
        static nautohint_metrics(arg0: number): $FT_Size_Metrics;
        autohint_mode(): number;
        autohint_metrics(): $FT_Size_Metrics;
        static nmodule_data(arg0: number): number;
        static AUTOHINT_METRICS: number;
        static ALIGNOF: number;
        static SIZEOF: number;
        static MODULE_DATA: number;
        static AUTOHINT_MODE: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Glyph_Metrics extends $Struct<$FT_Glyph_Metrics> {
        static create(arg0: number): $FT_Glyph_Metrics;
        static create(arg0: number, arg1: number): $FT_Glyph_Metrics$Buffer;
        width(): number;
        static createSafe(arg0: number): $FT_Glyph_Metrics;
        static createSafe(arg0: number, arg1: number): $FT_Glyph_Metrics$Buffer;
        static nheight(arg0: number): number;
        static nwidth(arg0: number): number;
        height(): number;
        static nhoriBearingX(arg0: number): number;
        static nhoriBearingY(arg0: number): number;
        static nvertBearingY(arg0: number): number;
        horiBearingX(): number;
        horiBearingY(): number;
        vertBearingX(): number;
        vertAdvance(): number;
        static nhoriAdvance(arg0: number): number;
        static nvertBearingX(arg0: number): number;
        static nvertAdvance(arg0: number): number;
        vertBearingY(): number;
        horiAdvance(): number;
        static HORIADVANCE: number;
        static VERTBEARINGX: number;
        static VERTBEARINGY: number;
        static HORIBEARINGY: number;
        static VERTADVANCE: number;
        static ALIGNOF: number;
        static HORIBEARINGX: number;
        static SIZEOF: number;
        static WIDTH: number;
        static HEIGHT: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Generic extends $Struct<$FT_Generic> implements $NativeResource {
        data(arg0: number): $FT_Generic;
        data(): number;
        static validate(arg0: number): void;
        set(arg0: $FT_Generic): $FT_Generic;
        set(arg0: number, arg1: $FT_Generic_FinalizerI_): $FT_Generic;
        finalizer(): $FT_Generic_Finalizer;
        finalizer(arg0: $FT_Generic_FinalizerI_): $FT_Generic;
        static create(arg0: number): $FT_Generic;
        static create(arg0: number, arg1: number): $FT_Generic$Buffer;
        static create(arg0: number): $FT_Generic$Buffer;
        static create(): $FT_Generic;
        static createSafe(arg0: number, arg1: number): $FT_Generic$Buffer;
        static createSafe(arg0: number): $FT_Generic;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_Generic$Buffer;
        static calloc(arg0: $MemoryStack): $FT_Generic;
        static calloc(): $FT_Generic;
        static calloc(arg0: number): $FT_Generic$Buffer;
        static malloc(): $FT_Generic;
        static malloc(arg0: number): $FT_Generic$Buffer;
        static malloc(arg0: $MemoryStack): $FT_Generic;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_Generic$Buffer;
        static ndata(arg0: number, arg1: number): void;
        static ndata(arg0: number): number;
        static nfinalizer(arg0: number, arg1: $FT_Generic_FinalizerI_): void;
        static nfinalizer(arg0: number): $FT_Generic_Finalizer;
        close(): void;
        static DATA: number;
        static ALIGNOF: number;
        static SIZEOF: number;
        static FINALIZER: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Stream_CloseFunc extends $Callback implements $FT_Stream_CloseFuncI {
        static create(arg0: number): $FT_Stream_CloseFunc;
        static create(arg0: $FT_Stream_CloseFuncI_): $FT_Stream_CloseFunc;
        static createSafe(arg0: number): $FT_Stream_CloseFunc;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $FT_StreamDesc extends $Struct<$FT_StreamDesc> implements $NativeResource {
        value(arg0: number): $FT_StreamDesc;
        value(): number;
        set(arg0: $FT_StreamDesc): $FT_StreamDesc;
        static create(arg0: number): $FT_StreamDesc;
        static create(): $FT_StreamDesc;
        static create(arg0: number, arg1: number): $FT_StreamDesc$Buffer;
        static create(arg0: number): $FT_StreamDesc$Buffer;
        pointer(): number;
        pointer(arg0: number): $FT_StreamDesc;
        static createSafe(arg0: number, arg1: number): $FT_StreamDesc$Buffer;
        static createSafe(arg0: number): $FT_StreamDesc;
        static npointer(arg0: number, arg1: number): void;
        static npointer(arg0: number): number;
        static calloc(arg0: number, arg1: $MemoryStack): $FT_StreamDesc$Buffer;
        static calloc(arg0: $MemoryStack): $FT_StreamDesc;
        static calloc(): $FT_StreamDesc;
        static calloc(arg0: number): $FT_StreamDesc$Buffer;
        static malloc(): $FT_StreamDesc;
        static malloc(arg0: number): $FT_StreamDesc$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $FT_StreamDesc$Buffer;
        static malloc(arg0: $MemoryStack): $FT_StreamDesc;
        static nvalue(arg0: number): number;
        static nvalue(arg0: number, arg1: number): void;
        close(): void;
        static ALIGNOF: number;
        static POINTER: number;
        static SIZEOF: number;
        static VALUE: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_Bitmap_Size extends $Struct<$FT_Bitmap_Size> {
        size(): number;
        static create(arg0: number): $FT_Bitmap_Size;
        static create(arg0: number, arg1: number): $FT_Bitmap_Size$Buffer;
        static nsize(arg0: number): number;
        width(): number;
        static createSafe(arg0: number): $FT_Bitmap_Size;
        static createSafe(arg0: number, arg1: number): $FT_Bitmap_Size$Buffer;
        static nheight(arg0: number): number;
        static nwidth(arg0: number): number;
        height(): number;
        y_ppem(): number;
        x_ppem(): number;
        static nx_ppem(arg0: number): number;
        static ny_ppem(arg0: number): number;
        static Y_PPEM: number;
        static X_PPEM: number;
        static ALIGNOF: number;
        static SIZE: number;
        static SIZEOF: number;
        static WIDTH: number;
        static HEIGHT: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_List$Buffer extends $StructBuffer<$FT_List, $FT_List$Buffer> {
        tail(): $FT_ListNode;
        head(): $FT_ListNode;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FT_GlyphSlot extends $Struct<$FT_GlyphSlot> {
        bitmap_left(): number;
        next(): $FT_GlyphSlot;
        format(): number;
        static create(arg0: number, arg1: number): $FT_GlyphSlot$Buffer;
        static create(arg0: number): $FT_GlyphSlot;
        generic(): $FT_Generic;
        advance(): $FT_Vector;
        metrics(): $FT_Glyph_Metrics;
        static createSafe(arg0: number): $FT_GlyphSlot;
        static createSafe(arg0: number, arg1: number): $FT_GlyphSlot$Buffer;
        library(): number;
        glyph_index(): number;
        bitmap(): $FT_Bitmap;
        static nnext(arg0: number): $FT_GlyphSlot;
        face(): $FT_Face;
        outline(): $FT_Outline;
        static ngeneric(arg0: number): $FT_Generic;
        static ninternal(arg0: number): number;
        bitmap_top(): number;
        static nrsb_delta(arg0: number): number;
        static nlsb_delta(arg0: number): number;
        static nface(arg0: number): $FT_Face;
        static nadvance(arg0: number): $FT_Vector;
        static nformat(arg0: number): number;
        static nmetrics(arg0: number): $FT_Glyph_Metrics;
        static nother(arg0: number): number;
        static noutline(arg0: number): $FT_Outline;
        rsb_delta(): number;
        static nsubglyphs(arg0: number): number;
        lsb_delta(): number;
        static nlibrary(arg0: number): number;
        static nbitmap(arg0: number): $FT_Bitmap;
        static nlinearVertAdvance(arg0: number): number;
        static nbitmap_top(arg0: number): number;
        static ncontrol_data(arg0: number): $ByteBuffer;
        static nnum_subglyphs(arg0: number): number;
        static ncontrol_len(arg0: number): number;
        static nbitmap_left(arg0: number): number;
        linearHoriAdvance(): number;
        static nlinearHoriAdvance(arg0: number): number;
        linearVertAdvance(): number;
        static nglyph_index(arg0: number): number;
        static BITMAP: number;
        static FORMAT: number;
        static METRICS: number;
        static SIZEOF: number;
        static LIBRARY: number;
        static SUBGLYPHS: number;
        static NUM_SUBGLYPHS: number;
        static OTHER: number;
        static BITMAP_TOP: number;
        static CONTROL_DATA: number;
        static GENERIC: number;
        static GLYPH_INDEX: number;
        static LINEARHORIADVANCE: number;
        static LINEARVERTADVANCE: number;
        static ALIGNOF: number;
        static NEXT: number;
        static INTERNAL: number;
        static OUTLINE: number;
        static CONTROL_LEN: number;
        static RSB_DELTA: number;
        static BITMAP_LEFT: number;
        static ADVANCE: number;
        static LSB_DELTA: number;
        static FACE: number;
        constructor(arg0: $ByteBuffer);
    }
}
