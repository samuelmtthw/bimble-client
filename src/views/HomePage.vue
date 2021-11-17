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
            your first step with <strong>bimble</strong>, and we'll help you to
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
          <h1>Perfect Content</h1>
          <p>
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
    <!-- <header
      class="d-flex flex-column align-items-center justify-content-center w-100"
    >
      <h1
        data-aos="fade-in"
        data-aos-duration="600"
        data-aos-delay="1200"
        class="p-3"
      >
        bimble
      </h1>
      <div>
        <h4 data-aos="fade-up" data-aos-duration="1000" class="d-inline">
          be smart,
        </h4>
        <h4
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          class="d-inline"
        >
          be humble
        </h4>
      </div>
      <span>
        <a href="#learn">
          <i class="fas fa-chevron-down fa-2x orange mt-3"></i>
        </a>
      </span>
    </header> -->
    <!-- <div class="homeSection stationary-page" id="learn">
      <div class="mt-2 w-75">
        <h6 class="text-muted text-center">
          We help you to get smarter.
          <br />
          Want to learn with the quickest & easiest way?
        </h6>
      </div>
      <a href="#learn" class="btn btn-orange"> Learn More </a>
      <span>hello</span>
      <span></span>
    </div> -->
    <!-- <section>
        <div>
          <h1>
            Find out about our work and how it can help you to reach your full
            potential!
          </h1>
          <p class="lead mb-5">
            Here at Bimble we believe that providing the best materials for your
            study is crucial, and that's why it's has been the center of our
            focus since day one. Because of that, we have prepared a free gift
            just for you.
            <a href="https://unsplash.com/">Check it out!</a>
          </p>
          <a class="btn btn-dark btn-xl" href="#services"
            >Our Selection of Courses</a
          >
        </div>
      </section> -->
    <!-- nanti kelebihan kita taro di sini met -->
    <!-- <section>
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
    </section> -->
    <!-- <section>
      <div class="content-section-heading text-center">
        <h3 class="text-secondary mb-0">Classes</h3>
        <h2 class="mb-5">Our Newest Entries</h2>
      </div>
    </section> -->
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

/* #HomePage h1 {
  font-size: 3em;
  font-weight: 700;
} */

/* #HomePage header {
  height: 700px;
}

#HomePage .text-muted {
  color: #303030 !important;
}

#HomePage .btn {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  color: #ffffff;
}

#HomePage .btn-teal {
  background-color: #a3d2ca;
}

#HomePage .btn-teal:hover {
  background-color: #8fcac0;
}

#HomePage .btn-orange {
  background-color: #fc7901;
}
#HomePage .btn-orange:hover {
  background-color: #eb5e0b;
  color: #ffffff;
}

#HomePage .teal {
  color: #a3d2ca;
}
#HomePage i {
  display: block;
  position: relative;
  transition-duration: 250ms;
}
#HomePage i:hover {
  cursor: pointer;
  top: 5px;
} */
</style>
