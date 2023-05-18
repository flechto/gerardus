import {vi} from "vitest";
import {FieldFinderFactory} from "../field-finder-factory";
import {Lookup} from "../lookup";

const mockFieldFinderFactory: FieldFinderFactory<[string, string]> = {
    getByLabel({value}) {
        return () => ['get-by-label', value]
    }
}
export default mockFieldFinderFactory;
