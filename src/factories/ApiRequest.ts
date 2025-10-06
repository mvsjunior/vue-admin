import axios, { isAxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { sessionStore } from '@/stores/session';
import { AuthService } from '@/services/AuthService';
import { useRouter } from 'vue-router';

export class ApiRequest {

    // static baseUrl: string = 'http://localhost:8000/api'
    static baseUrl: string = 'https://dummyjson.com'
    
    static getInstance(): AxiosInstance
    {
        const _token = sessionStore().getToken;
        const apiRequestConf: AxiosRequestConfig = {
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${_token}`
            }
        };

        const axiosInstance = axios.create(apiRequestConf);
        axiosInstance.interceptors.response.use((response) => {
            if(response.data.status == 'Token is Expired'){
                const _auth = new AuthService;
                _auth.logOut();
                useRouter().push({name: 'guest.login'});
                
            }

            return response;
        })
        return axiosInstance;
    }

    static isRequestError(exception = null): boolean
    {
        return isAxiosError(exception);
    }
}