import {FieldFinderFactory} from "../field-finder-factory";

const mockFieldFinderFactory: FieldFinderFactory<[string, string]> = {
    getByLabel({value}) {
        return () => ['get-by-label', value]
    },
    getByText({value}) {
        return () => ['get-by-text', value]
    },
    getByRole({value}) {
        return () => ['get-by-role', value]
    }
}
export default mockFieldFinderFactory;
