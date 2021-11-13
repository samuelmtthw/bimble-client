<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { mapMutations } from "vuex";
import { alertError } from "./apis/swal";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  methods: {
    ...mapMutations({
      setLogin: "IS_LOGGED_IN",
      setRole: "SET_ROLE",
    }),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.setLogin(true);
      this.$store
        .dispatch("fetchUserDetail")
        .then((result) => {
          this.setRole(result.role);
        })
        .catch((err) => {
          alertError(err.message);
          localStorage.removeItem("access_token");
          this.setLogin(false);
          if (this.$router.currentRoute.path !== "/") {
            this.$router.push("/");
          }
        });
    }
  },
};
</script>

<style></style>
