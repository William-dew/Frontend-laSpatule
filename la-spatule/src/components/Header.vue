<template>
  <header class="header">
    <h1>La Spatule</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isConnected: true,
    };
  },
};
</script>
<style  scoped lang="scss">
@import "../assets/scss/colors.scss";
.header {
  display: flex;
  justify-content: center;
  background-color: $primaryBackgroundColor;
  padding: 1em;
  box-shadow: 1px 1px 13px #500a0a;
  color: $textlight;
  font-weight: 900;
}
</style>
