import { $Supplier } from "@package/java/util/function";
import { $Set, $Collection_, $List } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
export * as graph from "@package/org/jgrapht/graph";

declare module "@package/org/jgrapht" {
    export class $GraphType {
    }
    export interface $GraphType {
        isSimple(): boolean;
        isAllowingMultipleEdges(): boolean;
        isAllowingSelfLoops(): boolean;
        isDirected(): boolean;
        isMixed(): boolean;
        asWeighted(): $GraphType;
        asDirected(): $GraphType;
        asMixed(): $GraphType;
        isWeighted(): boolean;
        asUndirected(): $GraphType;
        isPseudograph(): boolean;
        isUndirected(): boolean;
        asModifiable(): $GraphType;
        asUnweighted(): $GraphType;
        isModifiable(): boolean;
        isMultigraph(): boolean;
        asUnmodifiable(): $GraphType;
        isAllowingCycles(): boolean;
        get simple(): boolean;
        get allowingMultipleEdges(): boolean;
        get allowingSelfLoops(): boolean;
        get directed(): boolean;
        get mixed(): boolean;
        get weighted(): boolean;
        get pseudograph(): boolean;
        get undirected(): boolean;
        get modifiable(): boolean;
        get multigraph(): boolean;
        get allowingCycles(): boolean;
    }
    export class $Graph<V, E> {
        static DEFAULT_EDGE_WEIGHT: number;
    }
    export interface $Graph<V, E> {
        iterables(): $GraphIterables<V, E>;
        vertexSet(): $Set<V>;
        edgesOf(arg0: V): $Set<E>;
        inDegreeOf(arg0: V): number;
        degreeOf(arg0: V): number;
        getEdge(arg0: V, arg1: V): E;
        containsEdge(arg0: V, arg1: V): boolean;
        containsEdge(arg0: E): boolean;
        getEdgeTarget(arg0: E): V;
        getEdgeSource(arg0: E): V;
        removeVertex(arg0: V): boolean;
        removeAllEdges(arg0: V, arg1: V): $Set<E>;
        removeAllEdges(arg0: $Collection_<E>): boolean;
        getVertexSupplier(): $Supplier<V>;
        outDegreeOf(arg0: V): number;
        getEdgeWeight(arg0: E): number;
        getAllEdges(arg0: V, arg1: V): $Set<E>;
        setEdgeWeight(arg0: E, arg1: number): void;
        setEdgeWeight(arg0: V, arg1: V, arg2: number): void;
        getEdgeSupplier(): $Supplier<E>;
        incomingEdgesOf(arg0: V): $Set<E>;
        outgoingEdgesOf(arg0: V): $Set<E>;
        removeAllVertices(arg0: $Collection_<V>): boolean;
        getType(): $GraphType;
        addEdge(arg0: V, arg1: V): E;
        addEdge(arg0: V, arg1: V, arg2: E): boolean;
        removeEdge(arg0: V, arg1: V): E;
        removeEdge(arg0: E): boolean;
        addVertex(): V;
        addVertex(arg0: V): boolean;
        edgeSet(): $Set<E>;
        containsVertex(arg0: V): boolean;
        get vertexSupplier(): $Supplier<V>;
        get edgeSupplier(): $Supplier<E>;
        get type(): $GraphType;
    }
    export class $GraphPath<V, E> {
    }
    export interface $GraphPath<V, E> {
        getGraph(): $Graph<V, E>;
        getVertexList(): $List<V>;
        getLength(): number;
        getWeight(): number;
        getEndVertex(): V;
        getStartVertex(): V;
        getEdgeList(): $List<E>;
        get graph(): $Graph<V, E>;
        get vertexList(): $List<V>;
        get length(): number;
        get weight(): number;
        get endVertex(): V;
        get startVertex(): V;
        get edgeList(): $List<E>;
    }
    export class $GraphIterables<V, E> {
    }
    export interface $GraphIterables<V, E> {
        getGraph(): $Graph<V, E>;
        edgesOf(arg0: V): $Iterable<E>;
        inDegreeOf(arg0: V): number;
        degreeOf(arg0: V): number;
        outDegreeOf(arg0: V): number;
        incomingEdgesOf(arg0: V): $Iterable<E>;
        outgoingEdgesOf(arg0: V): $Iterable<E>;
        edgeCount(): number;
        vertexCount(): number;
        vertices(): $Iterable<V>;
        edges(): $Iterable<E>;
        allEdges(arg0: V, arg1: V): $Iterable<E>;
        get graph(): $Graph<V, E>;
    }
    /**
     * Values that may be interpreted as {@link $GraphIterables}.
     */
    export type $GraphIterables_<V, E> = (() => $Graph<V, E>);
}
