import axios, {
  AxiosResponse
} from 'axios';
import {
  ApiAxiosError,
  ApiErrorResponse, AxiosInstanceType
} from './types/AxiosApi.type';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:44388/api',
  headers: {
    'Content-type': 'application/json',
  },
}) as AxiosInstanceType;

const successfulResponseHandler = (response: AxiosResponse) => response.data;
const errorResponseHandler = ({ response }: ApiAxiosError): Promise<ApiErrorResponse> => Promise.reject({
  message: response?.data.payload,
  status: response?.status
} as ApiErrorResponse);

axiosInstance.interceptors.response.use(successfulResponseHandler, errorResponseHandler);

export default axiosInstance;
