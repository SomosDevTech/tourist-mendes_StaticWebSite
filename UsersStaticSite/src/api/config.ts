export const API_CONFIG = {
  BASE_URL: import.meta.env.API_BASE_URL || 'http://localhost:3000',
  USE_MOCKS: import.meta.env.USE_MOCKS === 'true' || process.env.NODE_ENV === 'development',
  TIMEOUT: 5000,
};