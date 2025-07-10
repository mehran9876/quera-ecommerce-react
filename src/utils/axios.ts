import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://qbc9.liara.run",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    credentials: "include",
    "Accept-Encoding": "gzip, deflate, br",
  },
});

export default axiosInstance;
