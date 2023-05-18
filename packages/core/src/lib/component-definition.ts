const SELECTORS = [
    'by-label',
    'by-text',
    'by-role',
    'by-testid'
] as const;

type Selector = typeof SELECTORS[number]

interface Lookup {
    selector: Selector,
    value: string;
}

export interface ComponentDefinition {
    [prop: string]: Readonly<Lookup>
}

type ComponentMap<
    MapType extends ComponentDefinition
> = {
    [prop in keyof MapType]: Readonly<Lookup>
}

export function defineMap<
    MapType extends ComponentDefinition
>(def: MapType): ComponentMap<MapType> {
    return def;
}

const mapDef = defineMap({
    nameField: {
        selector: 'by-label',
        value: 'name'
    }
});

type SyncComponent<MapType extends ComponentMap<MapType>> = {
    [key in keyof MapType as `get${Capitalize<string & key>}`]: () => unknown
};

type Component<MapType extends ComponentMap<MapType>> = SyncComponent<MapType>;

export function createMap<
    MapType extends ComponentDefinition
>(mapDef: ComponentMap<MapType>): Component<MapType> {

    return Object.entries(mapDef).reduce(
        (component, [prop, lookup]) => ({
            ...component,
            [`get${prop.charAt(0).toUpperCase()}${prop.slice(1)}`]: () => 1
        }),
        {} as Component<MapType>
    );
}

