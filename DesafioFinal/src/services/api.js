import { create } from 'apisauce';

const api = create({
  // baseURL: 'http://localhost:3333/api',
  baseURL: 'https://scheduler-api-69108.herokuapp.com/api',
  timeout: 30000,
});

export default api;
