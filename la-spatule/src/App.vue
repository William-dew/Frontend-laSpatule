<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  components: { Header, Footer },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
@import "./assets/scss/fonts.scss";
.app {
  font-size: 1rem;
  box-sizing: border-box;
  font-family: "Josefin Sans", sans-serif;
}
</style>
