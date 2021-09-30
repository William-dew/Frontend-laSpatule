<template>
  <main>
    <h1>RECETTES</h1>
    <b-card-group deck>
      <recipe-excerpt />
      <recipe-excerpt />
      <recipe-excerpt />
    </b-card-group>
  </main>
</template>

<script>
import RecipeExcerpt from "./RecipeExcerpt.vue";
export default {
  components: { RecipeExcerpt },
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-weight: 900;
  margin: 1rem;
}
</style>