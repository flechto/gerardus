import { ComponentDefinition, ComponentMap, createMap } from "@gerardus/core";
import ReactFieldFinder from "./react-form-field-finder";

export default function<T extends ComponentDefinition>(map: ComponentMap<T>) {
  return createMap(map, ReactFieldFinder)
}
