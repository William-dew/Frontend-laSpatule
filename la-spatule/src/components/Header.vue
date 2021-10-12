<template>
  <header class="header">
    <h1 class="header__title">La Spatule</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    isConnected() {
      // on récupère l'état de connexion (booléen) depuis le state
      return this.$store.state.isUserConnected;
    },
    username() {
      // return this.$store.state.username;
      return "william";
    },
  },
  methods: {
    onClick() {
      console.log("coucou");
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/colors.scss";
.header {
  height: 3.5rem;
  background-color: $colorHeader;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px 0px black;
  border-radius: 0 0 5px 5px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  &__title {
    color: $colorTextLight;
  }
}
</style>
