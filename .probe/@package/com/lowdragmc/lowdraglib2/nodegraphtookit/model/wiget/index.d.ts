import { $Function_ } from "@package/java/util/function";
import { $GraphElement } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/gui";
import { $IHasElementColor, $IGraphElementUIModel, $IMovable, $GraphElementModel, $IHasName } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model";
import { $AbstractNodeModel } from "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/node";
import { $List } from "@package/java/util";
import { $Vector2f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/nodegraphtookit/model/wiget" {
    export class $StickyNoteModel extends $GraphElementModel implements $IMovable, $IHasElementColor, $IGraphElementUIModel {
        getDefaultColor(): number;
        setFontSize(arg0: number): void;
        resetColor(): void;
        getElementColor(): number;
        setCollapsed(arg0: boolean): void;
        hasUserColor(): boolean;
        isCollapsed(): boolean;
        createElementUI(): $GraphElement<never>;
        getSize(): $Vector2f;
        getContent(): string;
        move(arg0: $Vector2f): void;
        setColor(arg0: number): void;
        setSize(arg0: $Vector2f): void;
        getPosition(): $Vector2f;
        setContent(arg0: string): void;
        setPosition(arg0: $Vector2f): void;
        getFontSize(): number;
        isUserColor(): boolean;
        asModel(): $GraphElementModel;
        constructor();
        get defaultColor(): number;
        get elementColor(): number;
        set color(value: number);
        get userColor(): boolean;
    }
    export class $PlacematModel extends $GraphElementModel implements $IMovable, $IHasName, $IHasElementColor, $IGraphElementUIModel {
        setZOrder(arg0: number): void;
        getDefaultColor(): number;
        getContainedNodes(arg0: $Function_<$AbstractNodeModel, $Vector2f>): $List<$AbstractNodeModel>;
        resetColor(): void;
        getElementColor(): number;
        hasUserColor(): boolean;
        createElementUI(): $GraphElement<never>;
        getSize(): $Vector2f;
        getName(): string;
        setName(arg0: string): void;
        move(arg0: $Vector2f): void;
        setColor(arg0: number): void;
        setSize(arg0: $Vector2f): void;
        getPosition(): $Vector2f;
        setPosition(arg0: $Vector2f): void;
        getZOrder(): number;
        isUserColor(): boolean;
        asModel(): $GraphElementModel;
        constructor();
        get defaultColor(): number;
        get elementColor(): number;
        set color(value: number);
        get userColor(): boolean;
    }
}
