<template>
  <nav class="d-flex justify-content-center">
    <div class="wrapper d-flex justify-content-between align-items-center">
      <router-link to="/"><h1>BIMBLE</h1></router-link>
      <div class="navLinks d-flex flex-row">
        <router-link to="/"><h6>Home</h6></router-link>
        <router-link to="/courses"><h6>Courses</h6></router-link>
        <router-link to="/my-courses"><h6>My Courses</h6></router-link>
        <router-link to="/login"><h6>Log In</h6></router-link>
        <a @click.prevent="logout"><h6>Log Out</h6></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      localStorage.removeItem("access_token");
    },
  },
};
</script>

<style>
nav {
  background-color: #a3d2ca;
}

nav h1 {
  font-weight: 800;
  font-style: italic;
  color: #eb5e0b;
}

nav h6 {
  font-weight: 400;
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
