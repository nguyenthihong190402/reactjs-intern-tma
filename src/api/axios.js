import axios from "axios";
import { toast } from "react-toastify";
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }

    const message = error.response?.data?.message;

    if (message === "password-matches-old-password") {
      toast.error("New password cannot be the same as the current password.");
    }

    if (message === "invalid-username-or-password") {
      toast.error("The current password is incorrect. Please try again.");
    }


    return Promise.reject(error);
  }
);

export default instance;
