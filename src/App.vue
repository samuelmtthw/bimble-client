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
      setName: "SET_NAME",
    }),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.setLogin(true);
      this.$store
        .dispatch("fetchUserDetail")
        .then((result) => {
          console.log(result);
          this.setRole(result.role);
          // this.setName(result.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style></style>
