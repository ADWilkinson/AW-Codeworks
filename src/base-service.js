import Vue from 'vue';
import axios from 'axios';
import { apiPoints } from './endpoints';

export default class BaseService {
  constructor() {
    this.api = this.initAxios();
  }

  api;

  initAxios = () => {
    const api = axios.create({
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
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
    
    Vue.prototype.$http = api;
    return api;
  };
}
