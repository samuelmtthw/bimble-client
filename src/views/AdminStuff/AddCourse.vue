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

      <label>Videos:</label>
      <div v-for="(video, k) in videos" :key="k">
        <input type="file" @change="changeSelect(k) && addFile" />
        <span>
          <i
            class="btn btn-primary"
            @click="remove(k)"
            v-show="k || (!k && videos.length > 1)"
            >Remove</i
          >
          <i
            class="btn btn-primary"
            @click="add(k)"
            v-show="k == videos.length - 1"
            >Add fields</i
          >
        </span>
      </div>

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
      // select = 0,
      videos: [{ file: "" }],
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

      console.log(payload);
      // this.$store
      //   .dispatch("createCourseAdmin", payload)
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     alertError(err.message);
      //   });
    },

    add() {
      this.videos.push({
        file: "",
      });
      // console.log(this.videos);
    },
    remove(index) {
      this.videos.splice(index, 1);
    },
    changeSelect(k) {
      this.select = k;
    },
    addFile(e) {
      this.videos[this.select].file = e.target.files;
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
