import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function() {
  render(<Box id={1} handleRemove width={5} height={5} backgroundColor="green"/>);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
