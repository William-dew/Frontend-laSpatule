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
    console.log("je suis dans login user", username, password);

    apiClient
      .post(`${jwtSuffix}/token`, {
        username,
        password,
      }).then((response) => {
        if (response.data.success) {
          // je stock le token et le username dans le local storage
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('username', response.data.data.displayName);
          // je mets à jour le store
          store.commit('isUserConnectedMutation', true);
          store.commit('updateUsername', response.data.data.displayName);
          router.push({
            name: 'homePage'
          })
        } else {
          alert(`mauvais identifiant ${username}`)
        }
      })
      .catch((error) => {
        alert('une erreur c\'est produite', error);
      });
  },



  isConnected() {
    console.log("on regarde si je suis connecté");
    // si on a un token en localStorage
    if (localStorage.getItem("token")) {
      console.log("utilisateur potentiellement connecté");
      // on vérifie ce token avec l'API
      // on return la promesse
      apiClient
        .post(
          jwtSuffix + "/token/validate", {}, {
          // permet d'ajouter le header Authentication à la requête
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
        )
        .then((response) => {
          store.commit("isUserConnectedMutation", response.data.success);
        });
    } else {
      store.commit("isUserConnectedMutation", false);
    }
  },

  disconnectUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    store.commit("updateUsername", "");
    store.commit("isUserConnectedMutation", false);
    router.push({
      name: "homePage",
    });
  },
  registerUser(user) {
    apiClient
      .post(`${baseUrlSuffix}/users/register`, user)
      .then(() => {
        this.loginUser(user.username, user.password)
        })
      
  },
}