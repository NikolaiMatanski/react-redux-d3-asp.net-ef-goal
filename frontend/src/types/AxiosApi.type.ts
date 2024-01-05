import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export type ApiData<T = void> = [T] extends [void]
  ? void
  : {
      payload: T;
    };

export type ApiAxiosError = AxiosError<ApiData<string>>;

export type ApiErrorResponse = {
  message?: string,
  status?: number
};

export type ApiPromise<T = void> = Promise<ApiData<T>>;

type CustomInstancePromises = {
  get<T>(url: string, config?: AxiosRequestConfig): ApiPromise<T>;
  post<T = void>(url: string, data?: unknown, config?: AxiosRequestConfig): ApiPromise<T>;
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): ApiPromise<T>;
  patch<T = void>(url: string, data?: unknown, config?: AxiosRequestConfig): ApiPromise<T>;
  delete(url: string, config?: AxiosRequestConfig): Promise<void>;
};

export type AxiosInstanceType = CustomInstancePromises & AxiosInstance;
