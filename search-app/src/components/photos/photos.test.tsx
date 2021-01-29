import React from "react";
import { render } from "@testing-library/react"; // screen
import Photos from ".";

test("renders learn photos", () => {
  render(<Photos />);
  expect(Photos).toBeDefined();
});
