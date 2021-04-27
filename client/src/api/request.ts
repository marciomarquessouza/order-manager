import axios, { AxiosRequestConfig } from 'axios';
import { BACKEND_SERVER_URL } from '../config';

interface IRequesProps {
    url: string;
    headers?: { [key: string]: string | number };
    params?: { [key: string]: string | number };
    data?: unknown;
}

export const baseURL = BACKEND_SERVER_URL;

const api = axios.create({ baseURL });

const setTokenOnRequest = (token = '') => {
    api.interceptors.request.use(function (config) {
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });
};

async function requestResponse<T>(config: AxiosRequestConfig): Promise<T> {
    try {
        const response = await api.request<T>(config);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

async function get<T>({ url, headers, params }: IRequesProps): Promise<T> {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url,
        headers,
        params,
    };

    return requestResponse<T>(config);
}

async function post<T>({ url, headers, data }: IRequesProps): Promise<T> {
    const config: AxiosRequestConfig = {
        method: 'POST',
        url,
        headers,
        data,
    };

    return requestResponse<T>(config);
}

async function put<T>({ url, headers, data }: IRequesProps): Promise<T> {
    const config: AxiosRequestConfig = {
        method: 'PUT',
        url,
        headers,
        data,
    };

    return requestResponse<T>(config);
}

async function patch<T>({ url, headers, data }: IRequesProps): Promise<T> {
    const config: AxiosRequestConfig = {
        method: 'PATCH',
        url,
        headers,
        data,
    };

    return requestResponse<T>(config);
}

async function remove<T>({ url, headers, params }: IRequesProps): Promise<T> {
    const config: AxiosRequestConfig = {
        method: 'DELETE',
        url,
        headers,
        params,
    };

    return requestResponse<T>(config);
}

export default {
    get,
    post,
    put,
    patch,
    remove,
    setTokenOnRequest,
    api,
};
