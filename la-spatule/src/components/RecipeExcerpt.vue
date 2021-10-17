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
    >
      <div class="excerpt__description">
        <h3>{{ title }}</h3>
        <div class="excerpt__note">*****</div>
        <p>
          {{ sousTitre }}
        </p>
        <p class="excerpt__date-author">
          Ajoutée le <time :datetime="dateUTC">{{ date }}</time> par
          <span>{{ author }}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RecipeExcerpt",
  props: {
    recipeId: {
      type: Number,
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
      type: String,
      default: "",
    },
    sousTitre: {
      type: String,
      default: "",
    },
    dateUTC: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
  },
};
</script>

<style  scoped lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/fonts.scss";

.excerpt {
  display: block;
  &__card {
    margin-bottom: 1rem;
    min-height: 300px;
    background-size: cover;
    border-radius: 10px;
    position: relative;
  }

  &__note {
    margin-left: 1rem;
  }
  &__description {
    line-height: 1;
    min-height: 80px;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    background-color: rgb(255 255 255 / 75%);
    h3 {
      margin-left: 1rem;
      color: $colorTextDark;
      text-transform: uppercase;
      font-weight: 700;
      margin: 1rem 0 0 1rem;
      font-size: 1.2rem;
    }
    p {
      margin-left: 1rem;
    }
  }
  &__date-author {
    font-style: italic;
    span {
      text-transform: capitalize;
    }
  }
}
</style>
