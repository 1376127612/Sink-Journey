import { $Consumer_, $Consumer, $Supplier, $Supplier_, $Function_ } from "@package/java/util/function";
import { $IDataProvider } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $ITickable } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $List_, $List } from "@package/java/util";
export * as ingredient from "@package/com/lowdragmc/mbd2/common/gui/recipe/ingredient";

declare module "@package/com/lowdragmc/mbd2/common/gui/recipe" {
    export class $SupplierScrollDataSource<T> implements $IDataProvider<T>, $ITickable {
        getCurrent(): T;
        getLastValue(): T;
        setCounter(arg0: number): void;
        setCurrent(arg0: T): void;
        setLastValue(arg0: T): void;
        checkUpdate(): void;
        getDataSupplier(): $Supplier<$List<T>>;
        getValue(): T;
        map<D>(arg0: $Function_<T, D>): $SupplierScrollDataSource<D>;
        static of<T>(arg0: $Supplier_<$List<T>>): $SupplierScrollDataSource<T>;
        frequency(): number;
        frequency(arg0: number): $SupplierScrollDataSource<T>;
        getCounter(): number;
        getData(): $List<T>;
        tick(): void;
        registerListener(arg0: $Consumer_<T>): $ISubscription;
        getListeners(): $List<$Consumer<T>>;
        setData(arg0: $List_<T>): void;
        registerListener(arg0: $Consumer_<T>, arg1: boolean): $ISubscription;
        get dataSupplier(): $Supplier<$List<T>>;
        get value(): T;
        get listeners(): $List<$Consumer<T>>;
    }
}
