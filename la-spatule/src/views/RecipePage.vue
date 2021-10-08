<template>
  <article class="recipeFull">
    <h1>{{ recipeData.title.rendered }}</h1>
    <h2>{{ recipeData.meta.sous_titre[0] }}</h2>
    <img :src="recipeData.featured_media_url" :alt="nomImageAlt" />
    <pre>{{ recipeData }}</pre>
  </article>
</template>

<script>
import RecipeService from "../services/RecipeService";
export default {
  name: "RecipePage",
  data() {
    return {
      recipeData: [],
      nomImageAlt: "",
    };
  },
  created: function () {
    RecipeService.getRecipe(this.$route.params.id).then((response) => {
      console.log(response.data);
      return (this.recipeData = response.data);
    });
  },
};
</script>
export
<style lang="scss">
.recipeFull {
  h1,
  h2 {
    text-align: center;
  }
}
</style>