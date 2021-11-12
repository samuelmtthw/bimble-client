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
        <tr v-for="course in courses" :key="course.id" class="p1">
          <td class="text-center">{{ course.id }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.status }}</td>
          <td>{{ course.Category.name }}</td>
          <td>
            <div class="d-flex flex-row justify-content-between">
              <button
                class="btn actionButton w-25"
                @click.prevent="toDetails(course.id)"
              >
                Details
              </button>
              <button class="btn btn-secondary w-25">Update</button>
              <button class="btn btn-danger w-25">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { alertError } from "../apis/swal";
export default {
  name: "AdminCourses",
  data() {
    return {
      courses: [],
      page: 1,
    };
  },
  methods: {
    toDetails(courseId) {
      this.$router.push(`/courses/${courseId}`);
    },
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
