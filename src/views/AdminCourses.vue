<template>
  <section id="AdminCourses">
    <table class="bg-primary w-100">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td></td>
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
    };
  },
  methods: {
    fetchCoursesAdmin() {
      this.$store
        .dispatch("fetchCoursesAdmin")
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {},
};
</script>

<style></style>
