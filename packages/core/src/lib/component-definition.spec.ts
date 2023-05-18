import {expect, it} from "vitest";
import {createMap} from "./create-map";
import {defineMap} from "./define-map";
import mockFieldFinderFactory from "./__testing__/mock-field-finder-factory";

it('works', () => {

    const def = defineMap({
        nameField: {
            selector: "by-label",
            value: 'name'
        }
    });

    expect(def).toEqual({
        nameField: {
            selector: "by-label",
            value: 'name'
        }
    });

    const map = createMap(def, mockFieldFinderFactory);

    expect(map.getNameField()).toEqual(['get-by-label', 'name']);
});
