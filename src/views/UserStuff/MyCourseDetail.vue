<template>
  <section
    id="MyCourseDetail"
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
// import { alertError } from "../../apis/swal";

export default {
  name: "MyCourseDetail",
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
          console.log(err);
          // alertError(err.message);
          this.$router.push("/courses");
        });
    },
  },
  created() {
    // this.fetchCourseDetailUser();
  },
};
</script>

<style></style>
