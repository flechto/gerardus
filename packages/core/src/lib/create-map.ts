import {ComponentMap} from "./component-map";
import {Component} from "./component";
import {ComponentDefinition} from "./component-definition";

export function createMap<
    MapType extends ComponentDefinition
>(mapDef: ComponentMap<MapType>): Component<MapType> {

    return Object.entries(mapDef).reduce(
        (component, [prop, lookup]) => ({
            ...component,
            [`get${prop.charAt(0).toUpperCase()}${prop.slice(1)}`]: () => 1
        }),
        {} as Component<MapType>
    );
}
