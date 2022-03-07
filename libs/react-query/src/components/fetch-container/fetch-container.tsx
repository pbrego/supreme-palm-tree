import * as React from 'react';
import type { FetchContainerProps } from './fetch-container.types';
import { List } from '../list';
import { LoadingIndicator } from '../loading-indicator';

export const FetchContainer: React.FC<FetchContainerProps> = ({
  isLoading,
  isFetching,
  isError,
  error,
  data: users,
}) => (
  <>
    {!isLoading ? (
      <>
        {isError ? <h3>{error}</h3> : null}
        <List data={users && users.data} fetching={isFetching} />
      </>
    ) : (
      <LoadingIndicator />
    )}
  </>
);
