<template>
  <article class="recipe">
    <h1 class="display-4 text-center">{{ title }}</h1>
    <img :src="imageUrl" :alt="`image de la recette ${title}`" />
    <section class="recipe__metas">
      <ul>
        <li>Préparation: 20mn</li>
        <li>Cuisson: 45mn</li>
        <li>personnes: 4</li>
        <li>Cout: 15€</li>
      </ul>
    </section>
    <section class="recipe__steps">
      <h5>Préparation</h5>
      <p v-html="content"></p>
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
.recipe {
  &__metas {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      list-style: none;
    }
  }
}
img {
  width: 100%;
}
</style>
