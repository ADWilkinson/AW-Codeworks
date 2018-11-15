import axios from 'axios';

export default class BaseService {
  constructor() {
    this.api = initAxios();
  }
}

const initAxios = () => {
  const api = axios.create({
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Requested-With': '*'
    }
  });

  api.interceptors.request.use(
    config => {
      console.log('[Req] URL: ', config.url);
      return config;
    },
    error => {
      return error;
    }
  );

  api.interceptors.response.use(
    response => {
      console.log('[Res] Status Code: ', response.status);
      return response;
    },
    error => {
      return error;
    }
  );

  return api;
};
