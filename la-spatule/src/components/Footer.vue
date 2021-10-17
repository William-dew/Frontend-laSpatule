<template>
  <footer class="footer">
    <nav class="footer__nav">
      <router-link :to="{ name: 'homePage' }">Recettes</router-link>
      <router-link v-if="!isConnected" :to="{ name: 'register' }"
        >Inscription</router-link
      >
      <router-link v-if="isConnected" :to="{ name: 'recipeAdd' }"
        >Ajouter une recette</router-link
      >
      <router-link v-if="!isConnected" :to="{ name: 'connectionForm' }"
        >Connexion</router-link
      >
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  // les computed sont des data dont on réévalue la valeur à chaque appel de getters (https://vuex.vuejs.org/guide/getters.html#property-style-access)
  computed: {
    isConnected() {
      // on récupère l'état de connexion (booléen) depuis le state
      return this.$store.state.isUserConnected;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/colors.scss";
.footer {
  background-color: $colorHeader;
  border-radius: 5px 5px 0 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px -4px 10px 0px black;

  &__nav {
    min-height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    a {
      color: $colorTextLight;
      text-decoration: none;
      margin-right: 1rem;
      &.router-link-exact-active {
        color: $colorLinkActive;
      }
    }
  }
}
</style>
