import * as React from 'react'
import { screen, render } from '@testing-library/react'
import type { ButtonProps } from './button.types'
import { Button } from './button'

const BUTTON_LABEL = 'Sample'
const BUTTON_TEST_ID = 'ButtonTestId'

function setup (props: ButtonProps) {
  render(<Button {...props} />)
}

test('Should render', () => {
  setup({})

  expect(screen.getByTestId(BUTTON_TEST_ID)).toBeInTheDocument
})

test('Should render text label', () => {
  setup({ children: BUTTON_LABEL })

  expect(screen.getByText(BUTTON_LABEL)).toBeInTheDocument
})
