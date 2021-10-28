<template>
  <form @submit.prevent="addUser" class="registerForm">
    <h1 class="registerForm__title">inscription</h1>
    <fieldset>
      <div class="field">
        <label class="field__label">Identifiant</label>
        <input
          class="field__input"
          type="text"
          placeholder="Saisissez votre identifiant"
          v-model="user.username"
        />
      </div>
    </fieldset>
    <fieldset>
      <div class="field">
        <label class="field__label">E-mail</label>
        <input
          class="field__input"
          type="email"
          placeholder="johndoe@ocooking.local"
          v-model="user.email"
        />
      </div>
    </fieldset>

    <fieldset>
      <div class="field">
        <label class="field__label">Mot de passe</label>
        <input
          class="field__input"
          type="password"
          placeholder=""
          v-model="user.password"
        />
      </div>
    </fieldset>
    <fieldset>
      <div class="field">
        <label class="field__label">Confirmez votre mot de passe</label>
        <input
          class="field__input"
          type="password"
          placeholder=""
          v-model="passwordConfirmation"
        />
      </div>
    </fieldset>

    <button class="button">Valider</button>
  </form>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      user: { role: "recipe-contributor", email: "" },
      passwordConfirmation: "",
    };
  },
  methods: {
    addUser() {
      if (this.passwordConfirmation === this.user.password) {
        AuthenticationService.registerUser(this.user);
      } else {
        alert("error, validation mot de passe échouée");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";
.registerForm {
  &__title {
    margin: 5rem 0 2rem 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  fieldset {
    border: none;

    .field {
      margin-bottom: 1rem;
    }
  }
}
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
    outline-color: purple;
    outline-width: 1px;
  }
}

.button {
  background-color: #42b983;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-bottom: 3.5rem;

  &:hover {
    color: #fff;
  }
}
</style>
