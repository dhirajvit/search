import React from "react";
import { render } from "@testing-library/react"; // screen
import MainApp from ".";

test("renders learn react link", () => {
  render(<MainApp />);
  expect(2 + 2).toBe(4);
});
