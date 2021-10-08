<template>
  <main>
    <h1>RECETTES</h1>
    <b-card-group deck>
      <recipe-excerpt
        v-for="recipe in recipeListData"
        :key="recipe.id"
        :title="recipe.title.rendered"
        :picture="recipe.featured_media_url"
        :date="recipe.formatted_date"
        :sous-titre="recipe.meta.sous_titre[0]"
      />
    </b-card-group>
  </main>
</template>

<script>
import RecipeExcerpt from "./RecipeExcerpt.vue";
import RecipeService from "../services/RecipeService"

export default {
  components: { RecipeExcerpt },
  data() {
    return {
      recipeListData: [],
    };
  },
  methods: {},
  created: function () {
    RecipeService.getRecipeList().then((response) => this.recipeListData = response.data)
  },
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-weight: 900;
  margin: 1rem;
}
</style>
