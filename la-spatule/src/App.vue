<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import "./assets/scss/fonts.scss";
@import "./assets/scss/colors.scss";
@import "./assets/scss/variables.scss";
#app {
  background-color: $mainBackgroundColor;
}
</style>
