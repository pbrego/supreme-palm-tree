import { useQuery, QueryClientProvider, useIsFetching, useIsMutating } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios'

import { queryClient } from './utils/react-query'

const client = axios.create({ baseURL: 'http://localhost:4000/asd' })

const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = 'Bearer token'

  const onSuccess = response => {
    console.log('all ok')
    return response
  }

  const onError = error => {
    console.log('error status', error)
    throw error
  }

  return client(options).then(onSuccess).catch(onError)
}

client.interceptors.response.use(function (response) {
  console.log('interseptor ok', response)
  return response
}, function (error) {
  console.log('interseptor err', error)
  if (error.response.status === 404) {
    console.log('404 status')
    return Promise.reject(error)
  }
})

const getUsers = () => request({ url: '/users' })

const QUERY_KEYS = {
  USERS: 'users'
}

const UsersPage = () => {
  function onError (error) {
    console.log('localError', error)
  }

  const {
    data,
    error,
    isLoading,
    isFetching,
    isError
  } = useQuery([QUERY_KEYS.USERS], getUsers, {
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
                {isError ? <h3>Error</h3> : null}
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
