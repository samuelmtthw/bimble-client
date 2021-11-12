<template>
  <section id="AdminCourses">
    <table class="w-100">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th>Name</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id" class="p1">
          <td class="text-center">{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>
            <div class="d-flex flex-row justify-content-center">
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
  name: "AdminCategories",
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    fetchCategoriesAdmin() {
      this.$store
        .dispatch("fetchCategoriesAdmin")
        .then((result) => {
          console.log(result);
          this.categories = result;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.fetchCategoriesAdmin();
  },
};
</script>

<style></style>
