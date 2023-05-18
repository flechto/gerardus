import {Lookup} from "./lookup";

type GetFinder<ElementType> = (lookup: Readonly<Lookup>) => () => ElementType;

export interface FieldFinderFactory<
    ElementType
> {
    getByLabel: GetFinder<ElementType>
    getByText: GetFinder<ElementType>
}
