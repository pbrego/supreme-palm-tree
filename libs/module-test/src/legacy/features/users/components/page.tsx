import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { FetchContainer } from '../../../components/fetch-container';
import { useUsers } from '../hooks';

export const UsersPage = () => {
  const {t} = useTranslation()

  function onError(error: any) {
    console.log('react query error', error);
  }

  function onSuccess(ok: any) {
    console.log('react query ok', ok);
  }

  const { data, error, isLoading, isFetching, isError } = useUsers({ onSuccess, onError });

  return (
    <>
      <h2>{t("users.title")}</h2>
      <FetchContainer data={data} error={error} isError={isError} isFetching={isFetching} isLoading={isLoading} />
    </>
  );
};
