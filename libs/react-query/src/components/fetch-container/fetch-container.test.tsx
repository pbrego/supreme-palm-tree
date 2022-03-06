import * as React from 'react'
import { screen, render } from '@testing-library/react'
import { FetchContainer } from './fetch-container'

function setup (props: any) {
  render(<FetchContainer {...props} />)
}

test('Should render fetching indicator', () => {
  setup({ isFetching: true })

  expect(screen.getByText('Updating...')).toBeInTheDocument
})
