<template>
  <section
    id="MyCoursesPage"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="d-flex flex-column">
        <h3>My Profile</h3>
        <span class="text-muted"> {{ user.name }} | {{ user.email }}</span>
      </div>
      <router-link to="/update-profile" class="btn my-3"
        >Update Profile</router-link
      >
      <h3>My Courses</h3>
      <div class="d-flex flex-row flex-wrap mt-1">
        <br />
        <MyCourseCard
          v-for="course in courses"
          :key="course.id"
          :course="course.Course"
          :courseId="course.CourseId"
        />
      </div>
    </div>
  </section>
</template>

<script>
import MyCourseCard from "@/components/MyCourseCard.vue";
import { alertError, alertLoading, swalDone } from "../apis/swal";

export default {
  name: "MyCoursesPage",
  data: function () {
    return {
      courses: [],
      user: {},
    };
  },
  methods: {
    fetchUserCourseUser() {
      alertLoading();
      this.$store
        .dispatch("fetchUserCourseUser")
        .then((result) => {
          this.courses = result;
          swalDone();
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
    fetchUserDetail() {
      alertLoading();
      this.$store
        .dispatch("fetchUserDetail")
        .then((result) => {
          swalDone();
          this.user = result;
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  created() {
    this.fetchUserCourseUser();
    this.fetchUserDetail();
  },
  components: {
    MyCourseCard,
  },
};
</script>

<style>
#MyCoursesPage .btn {
  background-color: #fc7901;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}
#MyCoursesPage .btn:hover {
  background-color: #eb5e0b;
}
#MyCoursesPage span {
  font-size: 1.2em;
  font-weight: 500;
}
</style>
