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
      <label>Description: </label>
      <textarea
        v-model="description"
        class="form-control mb-3"
        placeholder="Describe your course..."
      />
      <label>price: </label>
      <input
        type="price"
        v-model="price"
        placeholder="123000"
        class="form-control mb-3"
      />
      <label>thumbnailUrl: </label>
      <input
        type="name"
        v-model="thumbnailUrl"
        placeholder="www.thumbnail.com"
        class="form-control mb-3"
      />
      <label>difficulty: </label>
      <select v-model="difficulty">
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
      <label>Category: </label>
      <select v-model="CategoryId">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
      <button type="submit">Create Course!!</button>
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
      CategoryId: "",
      categories: [],
    };
  },
  methods: {
    addCourse() {
      const payload = {
        name: this.name,
        description: this.description,
        price: this.price,
        thumbnailUrl: this.thumbnailUrl,
        difficulty: this.difficulty,
        CategoryId: this.CategoryId,
      };
      this.$store
        .dispatch("createCourseAdmin", payload)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
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
