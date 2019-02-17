import axios from "axios";

export default class BaseService {
  constructor() {
    this.api = initAxios();
  }
}

const initAxios = () => {
  const api = axios.create({
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  // Interceptor set up to log our endpoints being called to the console (for debugging)
  api.interceptors.request.use(
    config => {
      var endPoint = config.url.split("/").pop();
      console.log("[Req] URL: ", endPoint);
      return config;
    },
    error => {
      return error;
    }
  );

  // Interceptor set up to log our response status code to the console (for debugging)
  api.interceptors.response.use(
    response => {
      console.log("[Res] Status Code: ", response.status);
      return response;
    },
    error => {
      return error;
    }
  );

  return api;
};
