import { request } from '../../../../utils/axios';

export const getUsers = () => request({ url: '/users' });
