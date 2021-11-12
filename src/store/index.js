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

    fetchUserCourseUser() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/public/user-courses`,
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
    fetchUserCourseDetail(context, { courseId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/public/user-courses/${courseId}`,
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
    addUserCourseUser(context, { courseId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: `/public/user-courses/${courseId}`,
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
    updateUserFromAdmin(context, { id, name, email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PUT",
          url: `/admin/users/${id}`,
          headers: localStorage.getItem("access_token"),
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
    fetchCoursesDetailAdmin(context, { courseId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/admin/courses/${courseId}`,
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
      { name, description, price, thumbnailUrl, difficulty, status, CategoryId }
    ) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/admin/courses",
          data: {
            name,
            description,
            price,
            thumbnailUrl,
            difficulty,
            status,
            CategoryId,
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
    editCourseAdmin(
      context,
      {
        courseId,
        name,
        description,
        price,
        thumbnailUrl,
        difficulty,
        status,
        CategoryId,
      }
    ) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PUT",
          url: `/admin/courses/${courseId}`,
          data: {
            name,
            description,
            price,
            thumbnailUrl,
            difficulty,
            status,
            CategoryId,
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
    updateCourseStatusAdmin(context, { courseId, status }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PATCH",
          url: `/admin/courses/${courseId}`,
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
    createCategoryAdmin(context, { name }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/admin/categories",
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
    deleteCategoryAdmin(context, { categoryId }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "DELETE",
          url: `/admin/categories/${categoryId}`,
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
