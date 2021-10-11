<template>
  <router-link
    class="excerpt"
    :to="{ name: 'recipePage', params: { id: recipeId } }"
  >
    <div
      class="excerpt__card"
      :style="{
        backgroundImage: `url(${picture})`,
      }"
    ></div>
  </router-link>
</template>

<script>
export default {
  name: "RecipeExcerpt",
  props: {
    recipeId: {
      type: Number,
      default: 20,
    },
    title: {
      type: String,
      default: "",
    },
    picture: {
      type: String,
      default: "",
    },
    date: {
      type: Date,
      default: "",
    },
    sousTitre: {
      type: String,
      default: "",
    },
  },
};
</script>

<style  scoped lang="scss">
.excerpt {
  &__card {
    margin-bottom: 1rem;
    height: 300px;
    background-size: cover;
    border-radius: 10px;
  }
}
</style>
