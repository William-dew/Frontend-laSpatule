<template>
  <div class="p-1 mb-5">
    <Recipe
      :title="recipeData.title.rendered"
      :imageUrl="recipeData.featured_media_url"
      :content="recipeData.content.rendered"
    />
    <h2 class="display-6">Commentaires ({{ countComment() }})</h2>

    <comment-list
      v-for="comment in commentsList"
      :key="comment.id"
      :comment="comment.content.rendered"
      :author="comment.author_name"
      :date="comment.date"
    />
    <!-- <pre>{{ recipeData }}</pre>
    <pre>{{ commentsList }}</pre> -->
  </div>
</template>

<script>
import CommentList from "../components/CommentList.vue";
import Recipe from "../components/Recipe.vue";
import RecipeService from "../services/RecipeService";
import CommentService from "../services/CommentService";
export default {
  components: { Recipe, CommentList },
  name: "RecipePage",
  data() {
    return {
      recipeData: [],
      commentsList: [],
      nomImageAlt: "",
    };
  },
  methods: {
    countComment() {
      return this.commentsList.length;
    },
  },
  created: function () {
    CommentService.getCommentList(this.$route.params.id).then((response) => {
      console.log(response.data);
      return (this.commentsList = response.data);
    });
    RecipeService.getRecipe(this.$route.params.id).then((response) => {
      console.log(response.data);
      return (this.recipeData = response.data);
    });
  },
};
</script>

<style lang="scss"></style>
