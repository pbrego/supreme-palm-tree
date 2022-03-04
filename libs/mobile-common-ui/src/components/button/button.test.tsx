import * as React from "react";
import { screen, render } from "@testing-library/react";
import type { ButtonProps } from "./button.types";
import { Button }  from "./button";

function setup(props: ButtonProps) {
  render(<Button {...props} />);
}

test("Should render", () => {
  setup({ children: "sample" });

  expect(screen.getByText("sample")).toBeInTheDocument;
});
