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
  uploadPictureFeatured(recipe) {
    const data = new FormData();
    data.append('file', recipe.pictureFeatured);
    return apiClient.post(`${baseUrlSuffix}/media`,
      data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': recipe.pictureFeatured.type
        }
      })
  },
  createRecipe: function (recipeData) {
    return apiClient.post(`${baseUrlSuffix}/recipe`, recipeData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    })
  },

};