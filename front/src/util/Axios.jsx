import axios from "axios";

// console.log("now status : ", process.env.NODE_ENV);

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === `development`
      ? `http://localhost:8080`
      : `http://localhost:8080`,

  timeout: 30000,

  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

instance.interceptors.request.use(
  // 요청 전
  (config) => {
    if (config.method === "get") {
      config.timeout = 12000;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  //response 후
  (config) => {
    //깡통
    return config.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
