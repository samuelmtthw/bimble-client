<template>
  <section>
    <header class="masthead d-flex align-items-center">
      <div class="container px-4 px-lg-5 text-center">
        <h1 class="mb-1">Bimbel</h1>
        <h3 class="mb-5"><em>Where all your education needs reside</em></h3>
        <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.masthead {
  min-height: 30rem;
  position: relative;
  display: table;
  width: 100%;
  height: auto;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    url("../assets/bg-masthead.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
