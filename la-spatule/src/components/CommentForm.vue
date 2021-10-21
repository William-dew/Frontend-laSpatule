<template>
  <form
    form
    @submit.prevent="sendComment(recetteID, comment)"
    class="comment-form"
  >
    <label for="comment_input">Laisser un commentaire</label>
    <textarea
      class="comment-form__textarea"
      name="comment_input"
      id="comment_input"
      rows="10"
      v-model="comment"
    ></textarea>
    <button class="comment-form__button">valider</button>
  </form>
</template>

<script>
import CommentService from "../services/CommentService";
export default {
  name: "CommentForm",
  props: {
    recetteID: {
      type: Number,
    },
  },
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    sendComment(recipeID, comment) {
      CommentService.createComment(recipeID, comment);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";
.comment-form {
  &__button {
    margin: 1rem 0 3.5rem 0;
    border-radius: 0.5rem;
    padding: 5px 10px 5px 10px;
    border-color: blueviolet;
  }
  &__textarea {
    width: calc(100% - 2rem);
    border-radius: 1rem;
    background-color: $colorBackgroundCard;
    border: none;
    display: block;
    padding: 1rem;
  }
}
</style>