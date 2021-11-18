<template>
  <section id="HomePage" class="d-flex stationary-page justify-content-center">
    <div class="wrapper">
      <header class="d-flex flex-column align-items-center">
        <div class="imgContainer w-25 my-5">
          <img src="/home_assets/assets3.png" alt="" class="w-100" />
        </div>
        <h1
          class="titleText"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="1200"
        >
          BIMBLE
        </h1>
        <div>
          <h5
            class="d-inline-block"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Be Smart,
          </h5>
          <h5
            class="d-inline-block mx-1"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            Be Humble
          </h5>
        </div>
        <a
          href="#journey"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1600"
          ><i class="fas fa-chevron-down fa-2x orange mt-5"></i
        ></a>
      </header>
      <header
        class="row align-items-center"
        data-aos="fade-up"
        data-aos-duration="600"
        id="journey"
      >
        <div class="col-6">
          <img src="/home_assets/assets1.png" alt="" class="w-100" />
        </div>
        <div
          class="
            col-6
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <h1>Start your journey</h1>
          <p class="text-center text-muted">
            "A journey of a thousand miles begins with a single step" <br />Take
            your first step with <strong>bimble</strong>, and we'll help you
            reach your 1000th miles.
          </p>
          <a href="#learn" class="btn">Learn More</a>
        </div>
      </header>

      <div class="row">
        <a name="learn"></a>
        <div
          class="col-6 d-flex justify-content-center flex-column"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <h1>Personalized Content</h1>
          <p class="text-muted">
            You can choose and select the content fitted for you. Search for
            difficulty levels, topics, and price points to fit your needs.
          </p>
          <router-link to="/register" class="btn">Join Us</router-link>
        </div>
        <div class="col-6">
          <img
            src="/home_assets/assets2.png"
            alt=""
            class="w-100"
            data-aos="fade-left"
            data-aos-duration="600"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";

AOS.init();
export default {
  name: "HomePage",
};
</script>

<style>
#HomePage {
  padding: 0 !important;
}
#HomePage .wrapper {
  width: 1440px;
  padding: 0 36px;
}
#HomePage strong {
  color: #fc7901;
}

#HomePage .titleText {
  font-size: 5em;
  font-weight: 800;
  font-style: italic;
  color: #fc7901;
}

#HomePage header {
  min-height: calc(100vh - 81px);
}

#HomePage .btn {
  background-color: #fc7901;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  width: fit-content;
}

#HomePage .btn:hover {
  background-color: #eb5e0b;
}

#HomePage .orange {
  color: #fc7901;
}
</style>
