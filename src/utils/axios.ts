import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://qbc9.liara.run",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
