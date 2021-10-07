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
      />
    </b-card-group>
  </main>
</template>

<script>
import RecipeExcerpt from "./RecipeExcerpt.vue";
import axios from "axios";

export default {
  components: { RecipeExcerpt },
  data() {
    return {
      recipeListData: [],
    };
  },
  methods: {},
  created: function () {
    axios
      .get("https://wdewailly.me/Backend-laSpatule/wp-json/wp/v2/recipe")
      .then((response) => {
        console.log(response.data);
        this.recipeListData = response.data;
      });
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
