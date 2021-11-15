import axios from "@/apis/server.js";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    role: "",
    name: "",
  },
  mutations: {
    IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload;
    },
    SET_ROLE(state, payload) {
      state.role = payload;
    },
    SET_NAME(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    // ! =========  Customer =========
    // * done
    loginUser(context, { email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/public/login",
          data: { email, password },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    googleLogin(context, idToken) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/public/googleLogin",
          data: { idToken },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // * done
    registerUser(context, { name, email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/public/register",
          data: { name, email, password },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    fetchUserDetail() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/public/users",
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    updateUserDetail(context, { name, email }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PUT",
          url: "/public/users",
          headers: { access_token: localStorage.getItem("access_token") },
          data: { name, email },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    fetchCategoriesUser() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/public/categories",
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    fetchCoursesUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/public/courses",
          params: payload,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    fetchCoursesDetailUser(context, { courseId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/public/courses/${courseId}`,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    fetchCourseRating(context, { courseId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/public/ratings/${courseId}`,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    fetchUserCourseUser() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/public/userCourse`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // get mycourse detail
    fetchUserCourseDetail(context, { courseId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/public/userCourses/${courseId}`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // but
    addUserCourseUser(context, { courseId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: `/public/userCourses/${courseId}`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    ovoCharge(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: `/ovo/charge`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: payload,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    addCommentUser(context, { videoId, comment }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: `/public/comments/${videoId}`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: { comment },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },

    // =======ADMIN=========== ADMIN =========ADMIN======
    // =======ADMIN=========== ADMIN =========ADMIN======

    // ------------- USER ----------------
    // * done
    fetchUsersFromAdmin() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/admin/users",
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },

    // ------------- COURSES ------------------
    // * done
    fetchCoursesAdmin(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/admin/courses",
          headers: { access_token: localStorage.getItem("access_token") },
          params: payload,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    //  TODO 1/2
    fetchCoursesDetailAdmin(context, { courseId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/admin/courses/${courseId}`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    createCourseAdmin(
      context,
      { name, description, price, thumbnailUrl, difficulty, CategoryId }
    ) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/admin/courses",
          headers: { access_token: localStorage.getItem("access_token") },
          data: {
            name,
            description,
            price,
            thumbnailUrl,
            difficulty,
            CategoryId,
            status: "active",
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    editCourseAdmin(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PUT",
          url: `/admin/courses/${payload.courseId}`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: payload,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    updateCourseStatusAdmin(context, { courseId, status }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PATCH",
          url: `/admin/courses/${courseId}`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: {
            status,
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },

    //  ------------ CATEGORY ------------------
    // * done
    fetchCategoriesAdmin() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/admin/categories",
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    createCategoryAdmin(context, { name }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/admin/categories",
          headers: { access_token: localStorage.getItem("access_token") },
          data: {
            name,
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    // * done
    deleteCategoryAdmin(context, { categoryId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "DELETE",
          url: `/admin/categories/${categoryId}`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    deleteCommentAdmin(context, { commentId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "DELETE",
          url: `/admin/comments/${commentId}`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    //  ----------------- Videos -----------------
    addVideoAdmin(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: `/admin/videos/${payload.courseId}`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: payload.files,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    updateVideoAdmin(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PATCH",
          url: `/admin/videos/${payload.videoId}`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: payload,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    deleteVideoAdmin(context, videoId) {
      return new Promise((resolve, reject) => {
        axios({
          method: "DELETE",
          url: `/admin/videos/${videoId}`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
  },
  modules: {},
});
