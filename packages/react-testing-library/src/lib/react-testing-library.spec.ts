import { reactTestingLibrary } from './react-testing-library';
import { describe, it, expect } from "vitest";

describe('reactTestingLibrary', () => {
  it('should work', () => {
    expect(reactTestingLibrary()).toEqual('react-testing-library');
  });
});
