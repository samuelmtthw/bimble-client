<template>
  <section>
    <header class="masthead d-flex align-items-center">
      <div class="container px-4 px-lg-5 text-center">
        <h1 class="mb-1">Bimbel</h1>
        <h3 class="mb-5"><em>Where all your education needs reside.</em></h3>
        <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
      </div>
    </header>
    <section>
      <div>
        <h2>
          Find out about our work and how it can help you to reach your full
          potential!
        </h2>
        <p class="lead mb-5">
          Here at Bimble we believe that providing the best materials for your
          study is crucial, and that's why it's has been the center of our focus
          since day one. Because of that, we have prepared a free gift just for
          you.
          <a href="https://unsplash.com/">Check it out!</a>
        </p>
        <a class="btn btn-dark btn-xl" href="#services"
          >Our Selection of Courses</a
        >
      </div>
    </section>
    <!-- nanti kelebihan kita taro di sini met -->
    <section>
      <div>
        <h2>
          So what are
          <em>you</em>
          waiting for?!
        </h2>
        <a
          class="btn btn-primary btn-xl"
          href="https://startbootstrap.com/theme/stylish-portfolio/"
          >Start Now!</a
        >
      </div>
    </section>
    <section>
      <div class="content-section-heading text-center">
        <h3 class="text-secondary mb-0">Classes</h3>
        <h2 class="mb-5">Our Newest Entries</h2>
      </div>
      <!-- table course baru disini -->
    </section>
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
  /* background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    url("../assets/bg-masthead.jpg"); */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
