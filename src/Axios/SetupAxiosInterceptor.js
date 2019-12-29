import axios from "axios";

const SetupAxiosInterceptor = () => {
  axios.interceptors.request.use(
    config => {
      config.headers = {
        Authorization: "Bearer " + localStorage.getItem("adal.idtoken")
      };
      config.baseURL = process.env.VUE_APP_BACKEND_BASE_URI;
      return config;
    },
    error => Promise.reject(error)
  );
};

export { SetupAxiosInterceptor };
