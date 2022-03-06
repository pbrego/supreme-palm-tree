import * as React from 'react'
import { useIsFetching, useIsMutating } from 'react-query'

export const LoadingIndicator = () => {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  const showIndicator = isFetching || isMutating

  return (
    <>
        {showIndicator ? <span>Loading...</span> : null}
    </>
  )
}
