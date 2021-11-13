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
        <label class="btn btn-secondary" :for="`addFileButton${k}`"
          >Choose File</label
        >
        <label>{{ videos[k].file.name }} </label>
        <input
          type="file"
          @change="addVideo($event, k)"
          title="test"
          :id="`addFileButton${k}`"
          style="display: none"
        />
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
      videos: [{ file: "" }],
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
    addVideo(event, index) {
      this.videos[index].file = event.target.files[0];
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
