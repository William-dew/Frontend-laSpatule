<template>
  <div class="recipe-page">
    <Recipe
      :title="recipeData.title.rendered"
      :imageUrl="recipeData.featured_media_url"
      :content="recipeData.content.rendered"
      :tempsPreparation="recipeData.meta.temps_de_preparation[0]"
      :tempsCuisson="recipeData.meta.temps_de_cuisson[0]"
      :nombrePersonne="recipeData.meta.nombre_de_personne[0]"
      :cout="recipeData.meta.cout[0]"
      :subTitle="recipeData.meta.sous_titre[0]"
    />
    <h3>Commentaires ({{ countComment() }})</h3>
    <comment-list
      v-for="comment in commentsList"
      :key="comment.id"
      :comment="comment.content.rendered"
      :author="comment.author_name"
      :date="comment.date"
    />
    <comment-form v-if="isConnected" :recetteID="recipeData.id" />
  </div>
</template>

<script>
import CommentList from "../components/CommentList.vue";
import Recipe from "../components/Recipe.vue";
import RecipeService from "../services/RecipeService";
import CommentService from "../services/CommentService";
import CommentForm from "../components/CommentForm.vue";
export default {
  components: { Recipe, CommentList, CommentForm },
  name: "RecipePage",
  data() {
    return {
      recipeData: [],
      commentsList: [],
      nomImageAlt: "",
    };
  },
  computed: {
    isConnected() {
      // on récupère l'état de connexion (booléen) depuis le state
      return this.$store.state.isUserConnected;
    },
  },
  methods: {
    countComment() {
      return this.commentsList.length;
    },
  },
  created: function () {
    CommentService.getCommentList(this.$route.params.id).then((response) => {
      return (this.commentsList = response.data);
    });
    RecipeService.getRecipe(this.$route.params.id).then((response) => {
      return (this.recipeData = response.data);
    });
  },
};
</script>

<style lang="scss">
.recipe-page {
  margin: 1rem;
  h3 {
    margin: 0.8rem 0 0.8rem 0;
  }
  .comment:last-child {
    margin-bottom: 3.5rem;
  }
}
</style>
