import { create } from 'apisauce';

export default create({
  // baseURL: 'http://localhost:3333/api',
  baseURL: 'http://192.168.0.101:3333/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE4LCJpYXQiOjE1MzM2NTAyODh9.KJlK0G7O9OFdi-ZWJ_RqN88e-Lw7g0S1Ln7IBTgARvE',
  },
});
