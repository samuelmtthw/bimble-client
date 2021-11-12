<template>
  <section>
    <form @submit.prevent="addCourse">
      <label>Name: </label>
      <input
        type="name"
        v-model="name"
        placeholder="Einstein"
        class="form-control mb-3"
      />
      <label>description: </label>
      <input
        type="description"
        v-model="description"
        placeholder="Einstein"
        class="form-control mb-3"
      />
      <label>price: </label>
      <input
        type="price"
        v-model="price"
        placeholder="Einstein"
        class="form-control mb-3"
      />
      <label>thumbnailUrl: </label>
      <input
        type="thumbnailUrl"
        v-model="thumbnailUrl"
        placeholder="Einstein"
        class="form-control mb-3"
      />
      <label>difficulty: </label>
      <input
        type="difficulty"
        v-model="difficulty"
        placeholder="Einstein"
        class="form-control mb-3"
      />
      <label>price: </label>
    </form>
  </section>
</template>

<script>
import { alertError } from "@/apis/swal.js";

export default {
  name: "AddCourse",
  data: function () {
    return {
      name: "",
      description: "",
      price: "",
      thumbnailUrl: "",
      difficulty: "",
      status: "",
      CategoryId: "",
      categories: [],
    };
  },
  methods: {
    addCourse() {},
  },
  created() {
    this.$store
      .dispatch("fetchCategoriesAdmin")
      .then((result) => {
        console.log(result);
        this.categories = result;
      })
      .catch((err) => {
        alertError(err.message);
      });
  },
};
</script>

<style></style>
