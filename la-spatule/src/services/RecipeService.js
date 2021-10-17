import {
  apiClient,
  baseUrlSuffix
} from "./ApiClient";
// import router from '../router'

export default {
  getRecipeList: function () {
    return apiClient.get(`${baseUrlSuffix}/recipe`);
  },
  getRecipe: function (id) {
    return apiClient.get(`${baseUrlSuffix}/recipe/${id}`);
  },
};