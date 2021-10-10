<template>
  <header :class="{ isConnected: 'header' }">
    <h1 v-if="isConnected">La Spatule</h1>
    <div v-else>
      <div class="d-flex justify-content-between">
        <h1>La Spatule</h1>
        <b-list-group-item>
          <b-avatar square button @click="onClick"></b-avatar>
          {{ username }}
        </b-list-group-item>
      </div>
    </div>
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
<style  lang="scss">
@import "../assets/scss/colors.scss";
.header {
  display: flex;
  justify-content: center;
  background-color: $primaryBackgroundColor;
  padding: 1em;
  box-shadow: 1px 1px 13px #500a0a;
  color: $textlight;
  font-weight: 900;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 4rem;
}
</style>
