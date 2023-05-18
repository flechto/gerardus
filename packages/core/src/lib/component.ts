import {ComponentMap} from "./component-map";

type SyncComponent<MapType extends ComponentMap<MapType>> = {
    [key in keyof MapType as `get${Capitalize<string & key>}`]: () => unknown
};

export type Component<MapType extends ComponentMap<MapType>> = SyncComponent<MapType>;
