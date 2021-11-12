<template>
  <section
    id="CourseDetail"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col-2">
          <h3>{{ course.name }}</h3>
          <strong> {{ price }}</strong>
          <hr />
          <strong class="d-block mb-3">Want full access?</strong>
          <button class="btn w-100" @click="addUserCourseUser">
            Purchase Now
          </button>
        </div>
        <div class="col-10">
          <strong class="d-block mb-3">Spoiler</strong>
          <iframe :src="course.Videos[0].videoUrl" frameborder="0" />
          <!-- <iframe
            src="https://ik.imagekit.io/k6nbxr4qece/trailer_WBuYWPkmE.mp4"
            frameborder="0"
          /> -->
          <br />
          <hr />
          <strong class="d-block mb-3">Description</strong>
          <p>{{ course.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError } from "../apis/swal";
export default {
  name: "CourseDetailPage",
  data: function () {
    return {
      course: {},
    };
  },
  methods: {
    fetchCourseDetailUser() {
      this.$store
        .dispatch("fetchCoursesDetailUser", this.$route.params)
        .then((result) => {
          this.course = result;
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
    addUserCourseUser() {
      console.log(this.course.id);
      this.$router.push(`/buy/${this.course.id}`);

      // this.$store
      //   .dispatch("addUserCourseUser", { courseId: this.course.id })
      //   .then((result) => {
      //     console.log(result);
      //     this.$router.push(`/buy/${this.course.id}`);
      //   })
      //   .catch((err) => {
      //     alertError(err.message);
      //   });
    },
  },
  computed: {
    price() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(this.course.price);
    },
  },
  created() {
    this.fetchCourseDetailUser();
  },
};
</script>

<style>
#CourseDetail .col-3 {
  border-radius: 15px;
  height: 100%;
}

#CourseDetail h3 {
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: italic;
}

#CourseDetail strong {
  font-size: 1.3em;
}

#CourseDetail iframe {
  width: 900px;
  height: 524px;
}

#CourseDetail .btn {
  background-color: #a3d2ca;
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#CourseDetail .btn:hover {
  background-color: #8fcac0;
}

* {
  font-family: "Montserrat Alternates", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
  color: #222;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #f8f1f1;
}

a {
  text-decoration: none;
}

.wrapper {
  width: 1440px;
  padding: 20px 36px;
}

.stationary-page {
  max-width: 100vw;

  min-height: calc(100vh - 160px);
  padding: 20px 0;
}
</style>
