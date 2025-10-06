import { ApiRequest } from "@/factories/ApiRequest";
import { isAxiosError, type AxiosInstance } from "axios";
import { sessionStore } from "@/stores/session";
import type { LoginFailed, LoginSuccess } from "@/types/dummyjson";

export class AuthService{

    api:AxiosInstance;
    session = sessionStore();

    constructor(){
        this.api = ApiRequest.getInstance();
    }

    async login(username = '', password = ''){
        try
        {
            const {data} = await this.api.post<LoginSuccess>('/auth/login',{username: username.trim(), password: password.trim()});

            this.session.$patch((state) => {
                state.name = data.username;
                state.email = data.email;
                state.token = data.accessToken;
            });

            return data;
        }catch(e){
            if (isAxiosError<LoginFailed>(e)) {
                // console.error("Erro de autenticação:", e.response?.data);
                throw new Error(e.response?.data?.message || "Falha ao autenticar.");
            }

            // console.error("Erro inesperado no login:", e);
            throw new Error("Ocorreu um erro inesperado. Tente novamente.");
        }
    }

    isLoggedIn(){
        return this.session.isLogged;
    }

    logOut(){

        this.api.post('/auth/logout')
            .then((res) => res)
            .catch((e) => {
                throw e;
        })

        this.session.$patch((state) => {
            state.email = '';
            state.name = '';
            state.token = '';
        })
    }
}