import {Lookup} from "./lookup";
import {ComponentDefinition} from "./component-definition";

export type ComponentMap<
    MapType extends ComponentDefinition
> = {
    [prop in keyof MapType]: Readonly<Lookup>
}
