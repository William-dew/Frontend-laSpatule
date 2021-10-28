<template>
  <div class="select-recipe-type">
    <label for="recipeType">Type de recette</label>
    <select name="recipeType" id="recipeType">
      <option value="">choisir</option>
      <option v-for="type in recipeTypes" :key="type.id" :value="type.id">
        {{ type.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectRecipeType",
  props: {
    recipeTypes: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
