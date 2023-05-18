import {Lookup} from "./lookup";


export interface ComponentDefinition {
    [prop: string]: Readonly<Lookup>
}



