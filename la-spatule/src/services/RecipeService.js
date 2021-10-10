import { apiClient } from "./ApiClient";
// import router from '../router'

export default {
  getRecipeList: function () {
    return apiClient.get("recipe");
  },
  getRecipe: function (id) {
    return apiClient.get("recipe/" + id);
  },
};
