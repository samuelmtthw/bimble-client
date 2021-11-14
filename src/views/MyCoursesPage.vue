<template>
  <section
    id="MyCoursesPage"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <h3>My Courses</h3>
      <div class="d-flex flex-row flex-wrap">
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
import { alertError } from "../apis/swal";

export default {
  name: "MyCoursesPage",
  data: function () {
    return {
      courses: [],
    };
  },
  methods: {
    fetchUserCourseUser() {
      this.$store
        .dispatch("fetchUserCourseUser")
        .then((result) => {
          this.courses = result;
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  created() {
    this.fetchUserCourseUser();
  },
  components: {
    MyCourseCard,
  },
};
</script>

<style></style>
