import {
  apiClient,
  baseUrlSuffix,
  customEndpointSuffix
} from "./ApiClient";

import router from "../router";

export default {
  getCommentList: function (id) {
    return apiClient.get(`${baseUrlSuffix}/comments?post=${id}`);
  },

  createComment(id, comment, note) {
    const data = {};
    return apiClient
      .post(
        `${baseUrlSuffix}/comments?post=${id}`, {
          content: comment,
        }, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(response => {
        data.contributor_id = response.data.author;
        data.recipe_id = response.data.post;
        data.note = note;
      })
      .then(() => {
        apiClient
          .post(
            `${customEndpointSuffix}`, data, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          ).catch((error) => {
            console.log(error);
          });
      })
      .then(
        router.push({
          path: "/",
        })
      )
      .catch((error) => {
        console.log(error);
      });
  },
};