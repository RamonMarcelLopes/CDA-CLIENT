import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem('jwtLocalStorage');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.log(error);
  }
});

export default api;
