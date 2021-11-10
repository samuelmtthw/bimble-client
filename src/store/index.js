import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    login(context, { email, password }) {
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
  },
  modules: {},
});
