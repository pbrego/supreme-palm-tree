import * as React from 'react';
import { FetchContainer } from '../../../components/fetch-container';
import { useUsers } from '../hooks';

export const UsersPage = () => {
  function onError(error) {
    console.log('react query error', error);
  }

  function onSuccess(ok) {
    console.log('react query ok', ok);
  }

  const { data, error, isLoading, isFetching, isError } = useUsers({ onSuccess, onError });

  return (
    <>
      <h2>Users</h2>
      <FetchContainer data={data} error={error} isError={isError} isFetching={isFetching} isLoading={isLoading} />
    </>
  );
};
