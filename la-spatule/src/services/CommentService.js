import { apiClient } from "./ApiClient";

import router from "../router";

export default {
  getCommentList: function (id) {
    return apiClient.get("/comments?post=" + id);
  },

  createComment: function (id, comment) {
    apiClient
      .post("recipe/comments?post=" + id, comment, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        router.push({
          name: "home",
        });
      });
  },
};
