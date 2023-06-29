import { render } from "@testing-library/react";

import App from "./app";
import { defineMap } from "@gerardus/core";
import { describe, expect, it } from "vitest";
import { createReactMap } from "@gerardus/react-testing-library";

const AppMap = defineMap({
  byLabel: {
    selector: "by-label",
    value: "By Label Target"
  },
  byText: {
    selector: 'by-text',
    value: 'By Text Target'
  },
  byRole: {
    selector: 'by-role',
    value: 'button'
  },
  byTestId: {
    selector: 'by-testid',
    value: 'test-id'
  }
});


const page = createReactMap(AppMap);

describe("App", () => {
  it("get by label text", () => {
    render(<App />);
    expect(page.getByLabel()).toHaveProperty('value', 'Labeled')
  });

  it("get by text", () => {
    render(<App />);
    expect(page.getByText()).toHaveProperty('textContent', 'By Text Target')
  });

  it("get by role", () => {
    render(<App />);
    expect(page.getByRole()).toHaveProperty('textContent', 'By Role Target')
  });

  it("get by test id", () => {
    render(<App />);
    expect(page.getByTestId()).toHaveProperty('textContent', 'Test Id Target')
  });
});
