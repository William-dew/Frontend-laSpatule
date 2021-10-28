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
        console.log(response.data.success);
        console.log("premier token", response.data.data.token)
      })
      .catch((error) => {
        alert("Identifiant ou mot de passe incorrect ", error);
      });
    apiClient
      .post(`${jwtSuffix}/token`, {
        username,
        password,
      }).then((response) => {
        console.log(response.data.success);
        console.log("deuxieme token", response.data.data.token)
      })
      .catch((error) => {
        alert("Identifiant ou mot de passe incorrect ", error);
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
          store.commit("isUserConnected", response.data.success);
        });
    } else {
      store.commit("isUserConnected", false);
    }
  },

  disconnectUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    store.commit("updateUsername", "");
    store.commit("isUserConnected", false);
    router.push({
      name: "homePage",
    });
  },
  registerUser(user) {
    apiClient
      .post(`${baseUrlSuffix}/users/register`, user)
      .then((response) => {
        console.log(response);
      }).then(() => {
        console.log(user.username, user.password);
      }).then(() => {
        this.loginUser(user.username, user.password)
      });
  },
};