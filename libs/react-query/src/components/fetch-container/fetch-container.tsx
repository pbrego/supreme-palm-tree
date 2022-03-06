import * as React from 'react'
import type { FetchContainerProps } from './fetch-container.types'
import { LoadingIndicator } from '../loading-indicator'
import { List } from '../list'

export const FetchContainer:React.FC<FetchContainerProps> = ({
  isLoading,
  isFetching,
  isError,
  error,
  data: users
}) => (
    <>
        {!isLoading
          ? (
            <>
                {isError ? <h3>{error}</h3> : null}
                <List fetching={isFetching} data={users.data} />
            </>
            )
          : <LoadingIndicator />}
    </>
)
