import axios from 'axios';

const proApi = axios.create({
  baseURL: 'https://feach-server.herokuapp.com',
});

const devApi = axios.create({
  baseURL: 'http://localhost:3333',
});

export {
  proApi,
  devApi,
};
