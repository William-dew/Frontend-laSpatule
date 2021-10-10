<template>
  <article class="recipe">
    <h1 class="display-4 text-center">{{ title }}</h1>
    <img :src="imageUrl" :alt="`image de la recette ${title}`" />
    <section>
      <ul class="list-group">
        <li class="list-group-item">Temps de préparation: 20mn</li>
        <li class="list-group-item">Temps de cuison: 45mn</li>
        <li class="list-group-item">Nombre de personnes: 4</li>
        <li class="list-group-item">Cout: 15€</li>
      </ul>
    </section>
    <section>
      <h2 class="display-6">Les étapes:</h2>
      <p v-html="content" class="m-2"></p>
    </section>
  </article>
</template>

<script>
export default {
  name: "Recipe",
  props: {
    title: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>
export
<style lang="scss">
img {
  width: 100%;
}
</style>
