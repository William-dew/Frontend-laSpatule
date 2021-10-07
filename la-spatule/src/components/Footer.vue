<template>
  <footer class="footer">
    <b-nav pills align="center">
      <b-nav-item exact-active-class="active" to="/"
        >Liste des recettes</b-nav-item
      >
      <b-nav-item exact-active-class="active" to="/Inscription"
        >Inscription</b-nav-item
      >
      <b-nav-item exact-active-class="active" to="/Connexion"
        >Connexion</b-nav-item
      >
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
<style   lang="scss">
@import "../assets/scss/colors.scss";
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $mainBackgroundColor;
}
</style>