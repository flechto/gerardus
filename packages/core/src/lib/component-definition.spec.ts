import {expect, it} from "vitest";
import {createMap} from "./create-map";
import {defineMap} from "./define-map";
import mockFieldFinderFactory from "./__testing__/mock-field-finder-factory";

it('works', () => {

    const def = defineMap({
        byLabelField: {
            selector: "by-label",
            value: 'name'
        },
        byTextField: {
            selector: 'by-text',
            value: 'text'
        },
        byRoleField: {
            selector: "by-role",
            value: 'buttom'
        },
        byTestIdField: {
            selector: 'by-testid',
            value: 'id this'
        }
    });

    const map = createMap(def, mockFieldFinderFactory);

    expect(map.getByLabelField()).toEqual(['get-by-label', 'name']);
    expect(map.getByTextField()).toEqual(['get-by-text', 'text']);
    expect(map.getByRoleField()).toEqual(['get-by-role', 'buttom']);
    expect(map.getByTestIdField()).toEqual(['get-by-testid', 'id this']);
});
