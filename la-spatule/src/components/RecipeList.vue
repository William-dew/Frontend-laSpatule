<template>
  <main>
    <h1>RECETTES</h1>
    <recipe-excerpt
      v-for="recipe in recipeListData"
      :key="recipe.id"
      :recipeId="recipe.id"
      :title="recipe.title.rendered"
      :picture="recipe.featured_media_url"
      :date="recipe.formatted_date"
      :sous-titre="recipe.meta.sous_titre[0]"
      :dateUTC="recipe.date"
      :author="recipe.author_name"
    />
  </main>
</template>

<script>
import RecipeExcerpt from "./RecipeExcerpt.vue";
import RecipeService from "../services/RecipeService";

export default {
  components: { RecipeExcerpt },
  data() {
    return {
      recipeListData: [],
    };
  },
  methods: {},
  created: function () {
    RecipeService.getRecipeList().then(
      (response) => (this.recipeListData = response.data)
    );
  },
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-weight: 900;
  margin-top: 60px;
}
a.excerpt:last-child {
  margin-bottom: 3rem;
}
</style>
