import {ComponentMap} from "./component-map";
import {ComponentDefinition} from "./component-definition";

export const defineMap = <
    MapType extends ComponentDefinition
>(def: MapType): ComponentMap<MapType> => def;
