<template>
  <article class="recipe">
    <h1 class="recipe__title">{{ title }}</h1>
    <h2 class="recipe__sub-title">{{ subTitle }}</h2>
    <img
      class="recipe__image"
      :src="imageUrl"
      :alt="`image de la recette ${title}`"
    />
    <section class="recipe__metas">
      <div>4,2 **** (51) 40mn</div>
      <font-awesome-icon icon="fa-solid fa-minus" />

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
    subTitle: {
      type: String,
      default: "",
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
  }

  &__title {
    margin: 4.5rem 0 0.2rem 0;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
  }
  &__sub-title {
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 0.2rem;
  }
}
</style>
