<template>
  <nav class="d-flex justify-content-center">
    <div class="wrapper d-flex justify-content-between align-items-center">
      <router-link to="/"><h1>BIMBLE</h1></router-link>
      <div class="navLinks d-flex flex-row">
        <router-link to="/"><h6>Home</h6></router-link>
        <router-link to="/courses" v-if="role === 'User'"
          ><h6>Courses</h6></router-link
        >
        <router-link to="/my-courses" v-if="isLoggedIn && role === 'User'"
          ><h6>My Courses</h6></router-link
        >
        <router-link to="/admin" v-if="role === 'Admin'">
          <h6>Admin</h6></router-link
        >
        <router-link to="/login" v-if="!isLoggedIn"
          ><h6>Log In</h6></router-link
        >
        <a @click.prevent="logout" v-if="isLoggedIn"><h6>Log Out</h6></a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { alertSuccess } from "../apis/swal";

export default {
  name: "NavBar",
  computed: {
    ...mapState(["isLoggedIn", "role"]),
  },
  methods: {
    logout() {
      this.$store.commit("IS_LOGGED_IN", false);
      this.$store.commit("SET_ROLE", "");
      localStorage.removeItem("access_token");
      if (this.$router.currentRoute.path !== "/") {
        this.$router.push("/");
      }
      alertSuccess("See you again!");
    },
  },
};
</script>

<style>
nav {
  background-color: #a3d2ca;
}

nav h1 {
  font-weight: 900;
  font-style: italic;
  color: #eb5e0b;
}

nav h6 {
  font-weight: 400;
  font-weight: 600;
  font-style: italic;
  color: #eb5e0b;
}

.navLinks {
  margin-top: 3px;
}

.navLinks a {
  margin-left: 20px;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
}
.navLinks a:hover {
  cursor: pointer;
  border-bottom: 3px solid #eb5e0b;
}
</style>
