<template>
  <!-- <button @click="sayCoucou">Coucou</button> -->
  <form @submit.prevent="loginUser">
    <fieldset>
      <div class="field">
        <label class="field__label">Adresse e-mail</label>
        <input
          class="field__input"
          type="text"
          placeholder="johndoe@ocooking.local"
          v-model="emailValue"
        />
      </div>
      <div class="field">
        <label class="field__label">Mot de passe</label>
        <input
          class="field__input"
          type="password"
          placeholder="Mot de passe"
          v-model="passwordValue"
        />
      </div>
    </fieldset>
    <button class="button">Connexion</button>
  </form>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data: function () {
    return {
      counter: 0,
      emailValue: "",
      passwordValue: "",
    };
  },
  methods: {
    sayCoucou() {
      console.log("coucou");
    },
    loginUser() {
      // on souhaite ici connecter un utilisateur
      // (on va déléguer une partie du travail à un service)
      // 1. Créer un service Authentication
      // Service Authentication
      // - Permet de vérifier l'existence d'un token (en localStorage)
      // - si on a un token en localStrage => il faudra vérifier sa validité
      // - Si il est valide => l'utilisateur est connecté
      // Permet de récupérer un token depuis l'API à partir des infos du formulaire de login
      // - Une fois le token récupéré => on le stock dans le localStorage
      // Permet de supprimer le token du localStorage pour déconnecter l'utilisateur
      console.log(this.emailValue);
      console.log(this.passwordValue);
      AuthenticationService.loginUser(this.emailValue, this.passwordValue);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colors";
</style>
