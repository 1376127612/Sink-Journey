import { $LongArrayData, $EmptyData, $FloatData, $ByteData, $LongData, $IntArrayData, $BoolData, $DoubleData, $ByteArrayData, $ShortData, $IntData, $MapData, $ListData, $StringData } from "@package/com/blamejared/crafttweaker/api/data";

declare module "@package/com/blamejared/crafttweaker/api/data/visitor" {
    export class $DataVisitor<T> {
    }
    export interface $DataVisitor<T> {
        visitList(arg0: $ListData): T;
        visitByteArray(arg0: $ByteArrayData): T;
        visitIntArray(arg0: $IntArrayData): T;
        visitLongArray(arg0: $LongArrayData): T;
        visitMap(arg0: $MapData): T;
        visitEmpty(arg0: $EmptyData): T;
        visitBool(arg0: $BoolData): T;
        visitLong(arg0: $LongData): T;
        visitByte(arg0: $ByteData): T;
        visitShort(arg0: $ShortData): T;
        visitFloat(arg0: $FloatData): T;
        visitInt(arg0: $IntData): T;
        visitDouble(arg0: $DoubleData): T;
        visitString(arg0: $StringData): T;
    }
}
