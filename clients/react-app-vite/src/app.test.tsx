import * as React from 'react'
import { screen, render } from '@testing-library/react'
import { App } from './app'

function setup () {
  render(<App />)
}

test('Should render', () => {
  setup()

  expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument
})
