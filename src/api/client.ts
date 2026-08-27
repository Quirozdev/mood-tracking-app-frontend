import { ACCESS_TOKEN_KEY } from "@/features/auth/model/auth.types";
import { refreshTokens } from "@/features/auth/services/refresh-tokens";
import { getItem, removeItem, setItem } from "@/shared/lib/local-storage";
import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = getItem(ACCESS_TOKEN_KEY);
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

let failedRequests: {
  resolve: (value: AxiosResponse) => void;
  reject: (value: AxiosError) => void;
  config: AxiosRequestConfig;
  error: AxiosError;
}[] = [];

let isTokenRefreshing = false;

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error?.response?.status;
    const originalRequestConfig = error.config!;

    if (status !== 401 || originalRequestConfig.url === "/auth/login") {
      return Promise.reject(error);
    }

    if (isTokenRefreshing) {
      return new Promise((resolve, reject) => {
        failedRequests.push({
          resolve,
          reject,
          config: originalRequestConfig,
          error,
        });
      });
    }

    isTokenRefreshing = true;

    try {
      const { accessToken } = await refreshTokens();
      setItem(ACCESS_TOKEN_KEY, accessToken);
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;

      failedRequests.forEach(({ resolve, reject, config }) => {
        api(config)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    } catch {
      failedRequests.forEach(({ reject, error }) => reject(error));
      removeItem(ACCESS_TOKEN_KEY);
      window.location.href = "/auth/login";
      return Promise.reject(error);
    } finally {
      failedRequests = [];
      isTokenRefreshing = false;
    }

    return api(originalRequestConfig);
  },
);
