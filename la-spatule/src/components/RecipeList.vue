<template>
  <div class="recipeList">
    <h1 class="recipeList__title">RECETTES</h1>
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
  </div>
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
.recipeList {
  &__title {
    margin: 5rem 0 1rem 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
}
a.excerpt:last-child {
  margin-bottom: 3rem;
}
</style>
