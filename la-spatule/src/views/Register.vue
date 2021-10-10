<template>
  <div class="register p-3">
    <h1>créer un compte</h1>

    <b-form @submit.stop.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Prénom" label-for="input-firstName" description="">
        <b-form-input
          id="firstName"
          name="firstName"
          v-model="form.firstName"
          type="text"
          placeholder="Votre prénom"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Nom" label-for="input-name" description="">
        <b-form-input
          id="input-name"
          v-model="form.name"
          type="text"
          placeholder="Votre nom"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Email" label-for="input-email" description="">
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          placeholder="Votre Email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Identifiant"
        label-for="input-nickname"
        description=""
      >
        <b-form-input
          id="input-nickname"
          v-model="form.nikename"
          type="text"
          placeholder="Votre identifiant"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Mot de passe"
        label-for="input-password"
        description=""
      >
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          placeholder="Mot de passe"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Confirmez le mot de passe"
        label-for="input-password-verify"
        description=""
      >
        <b-form-input
          id="input-password-verify"
          v-model="form.passwordVerify"
          type="password"
          placeholder="Mot de passe"
          required
        ></b-form-input>
      </b-form-group>
      <!-- <pre>{{ form }}</pre> -->
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        name: "",
        nickname: "",
        password: "",
        passwordVerify: "",
      },

      show: true,
    };
  },
  methods: {
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>


<style lang="scss" scoped>
input {
  margin-bottom: 1rem;
}
h1 {
  text-transform: uppercase;
}
</style>
