import axios from 'axios';
import { API_CONFIG } from './config';

export const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({
        data: null,
        status: 500,
        message: 'Network error occurred'
      });
    }
    return Promise.reject(error);
  }
);