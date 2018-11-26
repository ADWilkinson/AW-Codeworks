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
      'Content-Type': 'application/json'
    }
  });

  api.interceptors.request.use(
    config => {
      var endPoint = config.url.split('/').pop();
      console.log('[Req] URL: ', endPoint);
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
