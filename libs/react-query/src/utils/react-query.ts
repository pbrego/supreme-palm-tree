import { QueryClient } from 'react-query'

function queryErrorHandler (error: unknown): void {
  console.log('defaultError', error)
}

const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
    refetchOnReconnect: false,
    retry: false
  }
}

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions
})

export const BASE_URL = 'http://localhost:4000'
