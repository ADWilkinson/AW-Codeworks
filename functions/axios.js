"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      'Content-Type': 'application/json'
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