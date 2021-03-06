import { useQuery } from 'react-query';
import { getUsers } from '../services';

const QUERY_KEYS = {
  USERS: 'users',
};

export const useUsers = ({ onError, onSuccess }: any) => {
  return useQuery([QUERY_KEYS.USERS], getUsers, {
    onError,
    onSuccess,
  });
};
