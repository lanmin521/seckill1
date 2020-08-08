import axios from 'axios';
import qs from 'qs';

// // 配置请求的根路径
// axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";
// axios.interceptors.request.use(config => {
//   console.log(config);
//   config.headers.Authorization = window.sessionStorage.getItem("token");
//   // 在最后必须return config
//   return config;
// });

const request = axios.create({
  baseURL: 'http://127.0.0.1:8888/api/private/v1/',// 配置请求的根路径
  timeout: 30000,
  headers: {
    Accept: 'application/json',
  },
  responseType: 'json',
  paramsSerializer: (params) => {
    return qs.stringify(params);
  }
});

request.interceptors.request.use(config => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem("token");
  // 在最后必须return config
  return config;
});

// request.CancelToken = axios.CancelToken;
// request.isCancel = axios.isCancel;

export default request;
