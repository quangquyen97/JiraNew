import { http } from "./config";
export default class BaseServices {
  get = (url) => {
    return http.get(url);
  };
  post = (url, data) => {
    return http.post(url, data);
  };
  put = (url, data) => {
    return http.put(url, data);
  };
  delete = (url, data) => {
    return http.delete(url, data);
  };
}
