<template>
  <footer class="d-flex justify-content-center">
    <div class="wrapper d-flex">
      <!-- <span class="float-end"><a href="#">Back to top</a> </span> -->
      <router-link to="/about" class="white-text"
        ><strong>bimble</strong> &copy; 2021 &middot; About
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  background-color: #fc7901;
}

footer strong {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: italic;
}

.white-text {
  color: white;
}
.white-text strong {
  font-size: large;
  bottom: 0;
}
</style>
