import {Lookup} from "./lookup";

export interface FieldFinderFactory<
    ElementType
> {
    getByLabel(lookup: Readonly<Lookup>): () => ElementType
}
