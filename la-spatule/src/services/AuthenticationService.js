import {
    apiClient,
    jwtSuffix
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
                } else {
                    alert('Mauvais identifiants !')
                }
            })
            .catch((error) => {
                console.log(error)
            })
        this.isConnected();
    },
    disconnectUser() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        store.commit('updateUsername', '')
        store.commit('isUserConnected', false)
    }


}