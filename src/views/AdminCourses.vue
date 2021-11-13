<template>
  <section id="AdminCourses">
    <router-link to="/add-course"
      ><button class="addButton btn mb-4">+ Add Course</button></router-link
    >
    <table class="w-100">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Category</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <CourseRow
          v-for="course in courses"
          :key="course.id"
          :course="course"
          @updateStatus="fetchCoursesAdmin"
        />
      </tbody>
    </table>
  </section>
</template>

<script>
import { alertError } from "../apis/swal";
import CourseRow from "@/components/CourseRow.vue";

export default {
  name: "AdminCourses",
  data() {
    return {
      courses: [],
      page: 1,
    };
  },
  methods: {
    fetchCoursesAdmin() {
      const payload = {
        page: this.page,
      };
      this.$store
        .dispatch("fetchCoursesAdmin", payload)
        .then((result) => {
          console.log(result);
          this.courses = result.course;
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  created() {
    this.fetchCoursesAdmin();
  },
  components: {
    CourseRow,
  },
};
</script>

<style>
#AdminCourses .addButton {
  color: #f8f1f1;
  background-color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#AdminCourses .addButton:hover {
  background-color: #ce5109;
}

#AdminCourses table th {
  padding: 0 5px 5px 5px;
  font-size: 1.1em;
}

#AdminCourses table td {
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

#AdminCourses .actionButton {
  background-color: #a3d2ca;
}
</style>
