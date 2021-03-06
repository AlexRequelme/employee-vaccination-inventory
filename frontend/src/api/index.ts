import axios, { AxiosError, AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/", //backend port
    withCredentials: false,
});

instance.interceptors.request.use(
    (config) => {
        config.headers = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

class API {
    private static manageError(err: AxiosError) {
        if (err.response && err instanceof AxiosError) {
            toast.error(err.response.data.message || "A error occurred");
        } else {
            console.error(err.message);
            toast.error(
                "A network error occurred, this could be a CORS issue or a dropped internet connection. "
            );
        }
    }

    static async get(url: string, params?: AxiosRequestConfig<any>) {
        try {
            const response = await instance.get(url, params);
            return response.data;
        } catch (err: any) {
            this.manageError(err);
        }
    }

    static async post(url: string, payload: any) {
        try {
            const response = await instance.post(url, payload);
            return response.data;
        } catch (err: any) {
            this.manageError(err);
        }
    }

    static async patch(url: string, payload: any) {
        try {
            const response = await instance.patch(url, payload);
            return response.data;
        } catch (err: any) {
            this.manageError(err);
        }
    }

    static async put(url: string, payload: any) {
        try {
            const response = await instance.put(url, payload);
            return response.data;
        } catch (err: any) {
            this.manageError(err);
        }
    }

    static async delete(url: string) {
        try {
            const response = await instance.delete(url);
            return response.data;
        } catch (err: any) {
            this.manageError(err);
        }
    }
}

export default API;
