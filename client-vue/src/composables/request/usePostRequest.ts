import { AxiosRequestConfig } from 'axios';
import useRequest from './useRequest';

export default <ResponseType>(
  url: string,
  data: object,
  config: AxiosRequestConfig = {},
) => {
  return useRequest<ResponseType>(url, {
    method: 'POST',
    data,
    ...config,
  });
};
