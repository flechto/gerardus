import {expect, it} from "vitest";
import {createMap} from "./create-map";
import {defineMap} from "./define-map";
import {Lookup} from "./lookup";

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

    const map = createMap(def, {
        getByLabel(lookup) {
            return () => [lookup.selector + ' YAYA', lookup.value + ' AYAY']
        }
    });

    expect(map.getNameField()).toEqual(['by-label YAYA', 'name AYAY']);
});
