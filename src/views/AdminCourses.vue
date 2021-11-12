<template>
  <section id="AdminCourses">
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
              <button class="btn btn-dark w-25">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
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
          console.log(err.message);
        });
    },
  },
  created() {
    this.fetchCoursesAdmin();
  },
};
</script>

<style>
#AdminPage table th {
  padding: 0 5px 5px 5px;
  font-size: 1.1em;
}

#AdminPage table td {
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
#AdminPage .actionButton {
  background-color: #a3d2ca;
}
</style>
