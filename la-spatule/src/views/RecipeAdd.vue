<template>
  <form @submit.prevent="addRecipe" class="recipe-add">
    <h1 class="recipe-add__title">AJOUTER UNE RECETTE</h1>
    <fieldset>
      <div class="field">
        <label class="field__label">Nom de la recette</label>
        <input
          class="field__input"
          type="text"
          placeholder="Tarte aux poireaux"
          v-model="recipe.title"
        />
      </div>
    </fieldset>
    <fieldset>
      <div class="field">
        <label class="field__label">Sous-titre</label>
        <input
          class="field__input"
          type="text"
          placeholder="Une recette délicieuse"
          v-model="recipe.meta.sous_titre"
        />
      </div>
    </fieldset>
    <fieldset>
      <div class="field">
        <label class="field__label">étapes de préparation</label>
        <textarea
          rows="10"
          class="field__input"
          type="text"
          v-model="recipe.content"
        />
      </div>
    </fieldset>
    <fieldset class="recipe-add__half-field">
      <div class="field">
        <label class="field__label">Préparation</label>
        <input
          class="field__input"
          type="number"
          placeholder="0 mn"
          v-model="recipe.meta.temps_de_preparation"
        />
      </div>
      <div class="field">
        <label class="field__label">Cuisson</label>
        <input
          class="field__input"
          type="number"
          placeholder="0 mn"
          v-model="recipe.meta.temps_de_cuisson"
        />
      </div>
      <div class="field">
        <label class="field__label">Personne</label>
        <input
          class="field__input"
          type="number"
          placeholder="0"
          v-model="recipe.meta.nombre_de_personne"
        />
      </div>
      <div class="field">
        <label class="field__label">Cout</label>
        <input
          class="field__input"
          type="number"
          placeholder="0 €"
          v-model="recipe.meta.cout"
        />
      </div>
    </fieldset>
    <div class="field">
      <label class="field__label">choisir une image</label>
      <input
        class="field__input recipe-add__button-input-file"
        type="file"
        @change="handleChange($event)"
      />
    </div>
    <div class="select-recipe-type">
      <label for="recipeType">Type de recette</label>
      <select name="recipeType" id="recipeType" v-model="recipe.recipe_type">
        <option v-for="type in recipeTypes" :key="type.id" :value="type.id">
          {{ type.name }}
        </option>
      </select>
    </div>
    <pre>{{ recipe }}</pre>
    <button class="button">Soumettre</button>
  </form>
</template>


<script>
import RecipeService from "../services/RecipeService";
export default {
  data() {
    return {
      recipe: { status: "pending", meta: {} },
      recipeTypes: [],
    };
  },
  methods: {
    addRecipe() {
      RecipeService.uploadPictureFeatured(this.recipe)
        .then((response) => {
          this.recipe.featured_media = response.data.id;
          RecipeService.createRecipe(this.recipe);
        })
        .catch((error) => console.log(error));
    },
    handleChange($event) {
      this.recipe.pictureFeatured = $event.target.files[0];
    },
  },
  created() {
    RecipeService.getRecipeType().then((response) => {
      this.recipeTypes = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";
.recipe-add {
  margin: 0 1rem 0 1rem;
  max-width: 80%;
  &__half-field {
    display: grid;
    grid-template-columns: 30% 30%;
    column-gap: 1rem;
    input {
      width: 70px;
      margin-bottom: 0;
    }
  }
  &__title {
    margin: 5rem 0 2rem 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  fieldset {
    border: none;

    .field {
      margin-bottom: 1rem;
    }
  }
}

.field {
  display: flex;
  flex-direction: column;

  &__label {
    margin-bottom: 0.5rem;
    text-align: left;
  }

  &__input {
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: $primaryBackgroundColor;
  }

  &__input:focus {
    outline-color: purple;
    outline-width: 1px;
  }
}

.button {
  background-color: #42b983;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-bottom: 3.5rem;

  &:hover {
    color: #fff;
  }
}
</style>
