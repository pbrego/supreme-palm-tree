import { useQuery, QueryClientProvider, useIsFetching, useIsMutating } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios'

// import { request } from "./utils/axios-utils"
import { queryClient } from './utils/react-query'

// const getUsers = () => request({ url: "/users"})
const getUsers = () => axios('http://localhost:4000/usersa')

const QUERY_KEYS = {
  USERS: 'users'
}

const UsersPage = () => {
  function onError (error) {
    console.log('localError', error)
  }

  const { data, error, isLoading, isFetching, isError } = useQuery([QUERY_KEYS.USERS], getUsers, {
    onError
  })

  return (
        <>
            <h2>Users</h2>
            <FetchContainer
                data={data}
                error={error}
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
            />
        </>
  )
}

const LoadingIndicator = () => {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return (
        <>
            {(isFetching || isMutating) ? <span>Loading...</span> : null}
        </>
  )
}

const FetchContainer = ({ isLoading, isFetching, isError, error, data }) => (
    <>
        {!isLoading
          ? <>
                {isFetching ? <h3>Updating...</h3> : null}
                <pre>
                    {JSON.stringify(isError ? error : data, null, 2)}
                </pre>
            </>
          : <LoadingIndicator />
        }
    </>
)

export const ErrorHandlingAppExample = () => {
  return (
        <QueryClientProvider client={queryClient} >
            <UsersPage />
            {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </QueryClientProvider>
  )
}
