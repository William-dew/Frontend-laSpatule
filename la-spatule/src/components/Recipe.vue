<template>
  <article class="recipe">
    <h1 class="display-4 text-center">{{ title }}</h1>
    <img
      class="recipe__image"
      :src="imageUrl"
      :alt="`image de la recette ${title}`"
    />
    <section class="recipe__metas">
      <ul>
        <li>Préparation: {{ tempsPreparation }} mn</li>
        <li>Cuisson: {{ tempsCuisson }} mn</li>
        <li>personnes: {{ nombrePersonne }}</li>
        <li>Cout: {{ cout }}€</li>
      </ul>
    </section>
    <section class="recipe__steps">
      <h3>Préparation</h3>
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
    tempsPreparation: {
      type: Number,
      default: 0,
    },
    tempsCuisson: {
      type: Number,
      default: 0,
    },
    nombrePersonne: {
      type: Number,
      default: 0,
    },
    cout: {
      type: Number,
      default: 0,
    },
  },
};
</script>
export
<style lang="scss" scoped>
.recipe {
  &__metas {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      list-style: none;
    }
  }

  &__image {
    max-width: 100%;
    margin-top: 2rem;
  }
}
</style>
