import * as React from "react";
import type { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({ children }): JSX.Element => (
  <div className="button" data-testid="ButtonTestId">
    {children}
  </div>
);
