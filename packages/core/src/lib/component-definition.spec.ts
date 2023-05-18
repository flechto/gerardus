import {createMap, defineMap} from "./component-definition";
import {expect, it} from "vitest";

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

    const map = createMap(def);

    expect(map.getNameField()).toBe(1);
});
