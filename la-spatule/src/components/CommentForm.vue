<template>
  <form
    form
    @submit.prevent="sendComment(recetteID, comment, note)"
    class="comment-form"
  >
    <label for="comment_input">Laisser un commentaire</label>
    <textarea
      class="comment-form__textarea"
      name="comment_input"
      id="comment_input"
      rows="10"
      v-model="comment"
      required
    ></textarea>
    <div class="comment-form__note">
      <label for="note">Note 0 - 5 </label>
      <input
        min="0"
        max="5"
        v-model.number="note"
        id="note"
        type="number"
        required
      />
    </div>

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
      note: "",
    };
  },
  methods: {
    sendComment(recipeID, comment, note) {
      CommentService.createComment(recipeID, comment, note);
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
  &__note {
    margin-top: 1rem;
    border-radius: 1rem;
    background-color: $colorBackgroundCard;
  }
}
</style>
