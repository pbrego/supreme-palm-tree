import * as React from 'react'
import { StyledButton } from "./button.styles"
import type { ButtonProps } from './button.types'

export const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton data-testid="ButtonTestId" {...props} />
)
