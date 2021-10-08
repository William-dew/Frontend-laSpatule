<template>
  <b-card :title="title" :img-src="picture" img-alt="Photo du plat" img-top :sub-title="sousTitre">
    <b-card-text></b-card-text>
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
    sousTitre:{
      type: String,
      default:"",
    }
  },
};
</script>

<style>
</style>