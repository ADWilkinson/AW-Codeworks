"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

class BaseService {
  constructor() {
    this.api = initAxios();
  }

}

exports.default = BaseService;

const initAxios = () => {
  const api = _axios.default.create({
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'crossDomain': true
    }
  });

  api.interceptors.request.use(config => {
    console.log('[Req] URL: ', config.url);
    return config;
  }, error => {
    return error;
  });
  api.interceptors.response.use(response => {
    console.log('[Res] Status Code: ', response.status);
    return response;
  }, error => {
    return error;
  });
  return api;
};