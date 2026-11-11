import { $JsonObject, $JsonObject_ } from "@package/com/google/gson";
import { $Supplier_, $Function_, $BiFunction_, $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Class } from "@package/java/lang";

declare module "@package/com/supermartijn642/fusion/api/util" {
    export class $Property<X, C> {
        cast<T>(value: X): (T) | undefined;
        static create<X, C>(contextType: $Class<C>): $Property<X, C>;
        static create<X>(): $Property<X, void>;
        contextType(): $Class<C>;
    }
    export class $Serializer<T> {
    }
    export interface $Serializer<T> {
        deserialize(json: $JsonObject_): T;
        serialize(data: T): $JsonObject;
    }
    export class $PropertyStore {
        static empty(): $PropertyStore;
        static create(): $PropertyStore;
    }
    export interface $PropertyStore extends $PropertyGetter {
        setProperty<X, C>(property: $Property<X, C>, context: C, value: X): void;
        setProperty<X>(property: $Property<X, void>, value: X): void;
        getOrCompute<X>(property: $Property<X, void>, compute: $Supplier_<X>): X;
        getOrCompute<X, C>(property: $Property<X, C>, context: C, compute: $Function_<C, X>): X;
    }
    export class $PropertyGetter {
        static empty(): $PropertyGetter;
        static compose(...delegates: $PropertyGetter_[]): $PropertyGetter;
    }
    export interface $PropertyGetter {
        getProperty<X>(property: $Property<X, void>): (X) | undefined;
        getProperty<X, C>(property: $Property<X, C>, context: C): (X) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $PropertyGetter}.
     */
    export type $PropertyGetter_ = ((property: $Property<any, any>, context: any) => (X) | undefined);
    export class $Pair<X, Y> {
        apply(consumer: $BiConsumer_<X, Y>): void;
        map<R, S>(mapLeft: $Function_<X, R>, mapRight: $Function_<Y, S>): $Pair<R, S>;
        static of<X, Y>(left: X, right: Y): $Pair<X, Y>;
        flatMap<S>(mapper: $BiFunction_<X, Y, S>): S;
        left(): X;
        right(): Y;
        mapRight<S>(mapper: $Function_<Y, S>): $Pair<X, S>;
        mapLeft<S>(mapper: $Function_<X, S>): $Pair<S, Y>;
    }
    export class $Either<X, Y> {
        map<R, S>(mapLeft: $Function_<X, R>, mapRight: $Function_<Y, S>): $Either<R, S>;
        flatMap<S>(mapLeft: $Function_<X, S>, mapRight: $Function_<Y, S>): S;
        left(): X;
        static left<X, Y>(object: X): $Either<X, Y>;
        right(): Y;
        static right<X, Y>(object: Y): $Either<X, Y>;
        mapRight<S>(mapper: $Function_<Y, S>): $Either<X, S>;
        mapLeft<S>(mapper: $Function_<X, S>): $Either<S, Y>;
        isLeft(): boolean;
        ifRight(consumer: $Consumer_<Y>): void;
        ifLeft(consumer: $Consumer_<X>): void;
        rightOrNull(): Y;
        rightOrElse(other: Y): Y;
        rightOrElseGet(other: $Supplier_<Y>): Y;
        leftOrElseGet(other: $Supplier_<X>): X;
        leftOrElse(other: X): X;
        leftOrNull(): X;
        isRight(): boolean;
    }
}
