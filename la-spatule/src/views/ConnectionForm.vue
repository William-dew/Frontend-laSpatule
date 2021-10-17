<template>
  <div class="connection">
    <h1 class="connection__title">CONNEXION</h1>
    <form @submit.prevent="loginUser">
      <fieldset>
        <div class="field">
          <label class="field__label">Identifiant</label>
          <input
            class="field__input"
            type="text"
            placeholder="votre identifiant"
            v-model="usernameValue"
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
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      usernameValue: "",
      passwordValue: "",
    };
  },
  methods: {
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

      AuthenticationService.loginUser(this.usernameValue, this.passwordValue);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colors";
.field {
  display: flex;
  flex: {
    direction: column;
    wrap: wrap;
  }

  &__label {
    margin-bottom: 0.5rem;
    text-align: left;
  }

  &__input {
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: $primaryBackgroundColor;
    margin-bottom: 1rem;
  }

  &__input:focus {
    outline-color: $primaryStrongColor;
    outline-width: 1px;
  }
}

.connection {
  &__title {
    margin: 5rem 0 2rem 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }
}
</style>
