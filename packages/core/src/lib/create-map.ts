import {ComponentMap} from "./component-map";
import {Component} from "./component";
import {ComponentDefinition} from "./component-definition";
import {FieldFinderFactory} from "./field-finder-factory";

export function createMap<
    MapType extends ComponentDefinition,
    ElementType
>(mapDef: ComponentMap<MapType>, finder: FieldFinderFactory<ElementType>): Component<MapType> {

    return Object.entries(mapDef).reduce(
        (component, [prop, lookup]) => ({
            ...component,
            [`get${prop.charAt(0).toUpperCase()}${prop.slice(1)}`]: finder.getByLabel(lookup)
        }),
        {} as Component<MapType>
    );
}
