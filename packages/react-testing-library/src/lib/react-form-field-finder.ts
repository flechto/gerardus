import { FieldFinderFactory, Lookup } from "@gerardus/core";
import { screen } from "@testing-library/react";

export const ReactFieldFinder: FieldFinderFactory<HTMLElement> = {
  getByLabel({ value }: Readonly<Lookup>): () => HTMLElement {
    return function() {
      return screen.getByLabelText(value);
    };
  }, getByRole({ value }: Readonly<Lookup>): () => HTMLElement {
    return function() {
      return screen.getByRole(value);
    };
  }, getByTestId({ value }: Readonly<Lookup>): () => HTMLElement {
    return function() {
      return screen.getByTestId(value);
    };
  }, getByText({ value }: Readonly<Lookup>): () => HTMLElement {
    return function() {
      return screen.getByText(value);
    };
  }

};

export default ReactFieldFinder;
