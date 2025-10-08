import { AuthService } from "@/services/AuthService"

export function isLoggedIn(){
    const auth = new AuthService;
    if(!auth.isLoggedIn()) {
        return {name: 'guest.login'}
    }
}