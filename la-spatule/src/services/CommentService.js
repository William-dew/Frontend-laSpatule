import {
  apiClient,
  baseUrlSuffix
} from "./ApiClient";

import router from "../router";

export default {
  getCommentList: function (id) {
    return apiClient.get(`${baseUrlSuffix}/comments?post=${id}`);
  },

  createComment(id, comment) {
    return apiClient
      .post(`${baseUrlSuffix}/comments?post=${id}`, {
        "content": comment
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then(router.push({
        path: '/'
      }))
      .catch((error) => {
        console.log(error)
      });
  },
};