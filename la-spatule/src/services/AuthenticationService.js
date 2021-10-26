import {
    apiClient,
    jwtSuffix,
    baseUrlSuffix
} from "./ApiClient";
import router from "../router";
import store from "../store";

export default {
    loginUser(username, password) {
        // objectif : récupérer un token à partir des identifiants de connexion
        console.log(username, password);

        apiClient.post(`${jwtSuffix}/token`, {
                "username": username,
                "password": password
            })
            .then((response) => {
                console.log(response)
                console.log(response.data.data.token);

                // si les identifiants de connexion sont corrects
                if (response.data.success) {
                    // on stock le token
                    localStorage.setItem('token', response.data.data.token);
                    localStorage.setItem('username', response.data.data.displayName);
                    // on met à jour le store
                    store.commit('isUserConnected', true);
                    store.commit('updateUsername', response.data.data.displayName);
                    // on redirige l'utilisateur sur la home
                    router.push({
                        name: 'homePage'
                    })
                    this.isConnected();

                } else {
                    alert('Mauvais identifiants !')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },

    isConnected() {
        console.log('on regarde si je suis connecté')
        // si on a un token en localStorage
        if (localStorage.getItem('token')) {
            console.log('utilisateur potentiellement connecté');
            // on vérifie ce token avec l'API
            // on return la promesse
            apiClient.post(jwtSuffix + '/token/validate', {}, {
                    // permet d'ajouter le header Authentication à la requête
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(response => {
                    store.commit('isUserConnected', response.data.success)
                })
        } else {
            store.commit('isUserConnected', false);
        }
    },

    disconnectUser() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        store.commit('updateUsername', '')
        store.commit('isUserConnected', false)
        router.push({
            name: 'homePage'
        })
    },
    registerUser(user) {
        apiClient.post(`${baseUrlSuffix}/users/register`, user)
            .then(() => {
                this.loginUser(user.username, user.password)
            })
            .catch(error => console.log(error, user))
    }
}