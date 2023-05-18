import {vi} from "vitest";
import {FieldFinderFactory} from "../field-finder-factory";
import {Lookup} from "../lookup";

const mockFieldFinderFactory: FieldFinderFactory<[string, string]> = {
    getByLabel: vi.fn(({value}: Lookup) => () => ['get-by-label', value])
}
export default mockFieldFinderFactory;
