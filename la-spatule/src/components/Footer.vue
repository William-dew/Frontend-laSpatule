<template>
  <footer class="footer">
    <b-nav  pills align="center" fill>
      <b-nav-item href="#1" active>Liste des recettes</b-nav-item>
      <b-nav-item href="#2">Inscription</b-nav-item>
      <b-nav-item>Connexion</b-nav-item>
    </b-nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isConnected: true,
    };
  },
};
</script>
<style  scoped lang="scss">
@import "../assets/scss/colors.scss";
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:$mainBackgroundColor;
  }
</style>