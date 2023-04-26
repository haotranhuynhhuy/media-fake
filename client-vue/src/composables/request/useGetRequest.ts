import { AxiosRequestConfig } from 'axios';
import useRequest from './useRequest';

export default <ResponseType>(url: string, config: AxiosRequestConfig = {}) => {
  return useRequest<ResponseType>(url, {
    method: 'GET',
    ...config,
  });
};
