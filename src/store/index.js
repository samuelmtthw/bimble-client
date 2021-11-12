import axios from "@/apis/server.js";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
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
          headers: localStorage.getItem("access_token"),
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
          headers: localStorage.getItem("access_token"),
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
          headers: localStorage.getItem("access_token"),
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
          headers: localStorage.getItem("access_token"),
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
          headers: localStorage.getItem("access_token"),
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

    loginAdmin(context, { email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/admin/login",
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
    loginAdminGoogle(context, { idToken }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/admin/loginGoogle",
          data: { idToken },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    registerAdmin(context, { name, email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/admin/register",
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
    fetchUsersFromAdmin() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/admin/users",
          headers: localStorage.getItem("access_token"),
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

    fetchCoursesAdmin() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/admin/courses",
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

    fetchCategoriesAdmin() {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/admin/categories",
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
    editCategoryAdmin(context, { id, name }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PATCH",
          url: `/admin/categories/${id}`,
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
