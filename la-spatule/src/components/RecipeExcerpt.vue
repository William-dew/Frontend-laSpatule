<template>
  <b-card
    title="La choucroute auvergnate"
    img-src="https://picsum.photos/300/300/?image=41"
    img-alt="Image"
    img-top
  >
    <b-card-text> Une recette délicieuse pour grands et petits </b-card-text>
    <template #footer>
      <small class="text-muted">Ajouté le 10 septembre 2021</small>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "RecipeExcerpt",
};
</script>

<style>
</style>