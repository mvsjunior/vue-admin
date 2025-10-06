import { defineStore } from "pinia";
import {ref,computed,watch} from 'vue';

export const sessionStore = defineStore('session',() => {

    const auth = JSON.parse(localStorage.getItem('auth') ?? '{}');

    const token = ref(auth.token);
    const name  = ref(auth.name);
    const email = ref(auth.email);
    
    const getToken = computed(() => {
        return token.value;
    })

    const getName = computed(() => {
        return name.value;
    })

    const getEmail = computed(() => {
        return email.value;
    })

    watch(token, (newToken) => {

        // console.log(token);
        // console.log(newToken)
        if(newToken == '' || newToken == null || newToken == undefined){
            localStorage.removeItem('auth');
            return;
        }

        const authData = {
            name: name.value,
            email: email.value,
            token: newToken
        }

        localStorage.setItem('auth',JSON.stringify(authData));
    })

    const isLogged = computed(() =>{
        return (token.value != '' && token.value != null && token.value != undefined) ? true : false;
    });

    function clearAuthSession(){
        localStorage.removeItem('auth');
        token.value = '';
        name.value = '';
        email.value = '';
    }

    return {token,name,email,getToken,getName,getEmail,isLogged,clearAuthSession}
});