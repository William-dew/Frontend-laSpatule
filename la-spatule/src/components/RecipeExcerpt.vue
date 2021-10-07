<template>
  <b-card :title="title" :img-src="picture" img-alt="Photo du plat" img-top>
    <b-card-text> Une recette délicieuse pour grands et petits </b-card-text>
    <template #footer>
      <small class="text-muted">Ajouté le {{ date }}</small>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "RecipeExcerpt",
  props: {
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
  },
};
</script>

<style>
</style>