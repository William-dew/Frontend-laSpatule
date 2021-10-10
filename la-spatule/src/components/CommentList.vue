<template>
  <section class="comment mb-1">
    <div>
      Le <time :datetime="date">{{ date | formatDate }}</time> par
      {{ author | capitalize }}
    </div>
    <p v-html="comment"></p>
  </section>
</template>

<script>
export default {
  name: "CommentList",
  props: {
    author: {
      type: String,
      default: "",
    },
    comment: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    formatDate: function (dateToConvert) {
      const date = new Date(dateToConvert);
      return new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
.comment {
  background-color: $backgroundColorComments;
  border-radius: 1rem;
  padding: 1rem;
}
</style>
