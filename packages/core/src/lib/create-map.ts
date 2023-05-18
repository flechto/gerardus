import {ComponentMap} from "./component-map";
import {Component} from "./component";
import {ComponentDefinition} from "./component-definition";
import {FieldFinderFactory} from "./field-finder-factory";
import {Lookup} from "./lookup";

function getFinder<ElementType>(finder: FieldFinderFactory<ElementType>, lookup: Lookup) {

    switch (lookup.selector) {
        case "by-label":
            return finder.getByLabel(lookup);
        case "by-text":
            return finder.getByText(lookup)
        case "by-role":
            break;
        case "by-testid":
            break;
    }

    throw new Error(`Unknown Selector ${lookup.selector}`)
}

export function createMap<
    MapType extends ComponentDefinition,
    ElementType
>(mapDef: ComponentMap<MapType>, finder: FieldFinderFactory<ElementType>): Component<MapType> {

    return Object.entries(mapDef).reduce(
        (component, [prop, lookup]) => ({
            ...component,
            [`get${prop.charAt(0).toUpperCase()}${prop.slice(1)}`]: getFinder(finder, lookup)
        }),
        {} as Component<MapType>
    );
}
