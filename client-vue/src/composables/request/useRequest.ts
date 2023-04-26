import { ref } from 'vue';
import { AxiosRequestConfig, AxiosError } from 'axios';
import httpClient from '@/libs/httpClient';

export default <ResponseType>(url: string, config: AxiosRequestConfig = {}) => {
  const data = ref<ResponseType>();
  const error = ref<AxiosError>();
  const pending = ref(false);
  const excute = async () => {
    try {
      pending.value = true;
      const response = await httpClient.oauth20.request<ResponseType>({
        url,
        ...config,
      });
      data.value = response.data;
    } catch (err: any) {
      error.value = err;
    } finally {
      pending.value = false;
    }
  };

  return { data, excute, error, pending };
};
