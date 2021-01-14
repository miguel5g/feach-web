import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'https://feach-server.herokuapp.com',
});

export default api;
