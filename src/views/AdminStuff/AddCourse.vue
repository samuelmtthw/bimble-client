<template>
  <section id="AddCourse" class="stationary-page d-flex justify-content-center">
    <div class="wrapper d-flex justify-content-center">
      <div class="card p-5 rounded">
        <form @submit.prevent="addCourse" class="d-flex flex-column">
          <h2 class="mb-4">Add Course</h2>
          <label>Name </label>
          <input type="text" v-model="name" class="form-control mb-3" />

          <label>Description</label>
          <textarea v-model="description" class="form-control mb-3" />

          <label>Price</label>
          <input type="number" v-model="price" class="form-control mb-3" />

          <label>Thumbnail URL </label>
          <input type="name" v-model="thumbnailUrl" class="form-control mb-3" />

          <label>Difficulty </label>
          <select v-model="difficulty" class="form-select mb-3">
            <option value="" disabled>Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <label>Category </label>
          <select v-model="CategoryId" class="form-select mb-3">
            <option value="" disabled>Select Category</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>

          <!-- ! ERROR -->
          <label>Videos</label>
          <div v-for="(video, k) in videos" :key="k">
            <label class="btn btn-secondary mt-2" :for="`addFileButton${k}`"
              >Choose File</label
            >
            <label class="d-inline-block mx-3"
              >{{ videos[k].file.name }}
            </label>
            <input
              type="file"
              @change="addVideo($event, k)"
              title="test"
              :id="`addFileButton${k}`"
              style="display: none"
            />
            <span>
              <button
                class="btn btn-danger"
                @click.prevent="remove(k)"
                v-show="k || (!k && videos.length > 1)"
              >
                Remove
              </button>
              <br />
              <button
                class="btn btn-create mt-2"
                @click.prevent="add(k)"
                v-show="k == videos.length - 1"
              >
                Add fields
              </button>
            </span>
          </div>

          <input
            type="submit"
            class="btn btn-create form-control mt-3"
            value="Create"
          />

          <router-link to="/admin" class="btn btn-create btn-back mt-2"
            >Back</router-link
          >
        </form>
      </div>
    </div>
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
        Videos: this.videos,
      };
      console.log(this.videos, "INI VIDEOS");
      console.log(payload);
      this.$store
        .dispatch("createCourseAdmin", payload)
        .then((result) => {
          console.log(result);
          this.$router.push("/admin");
        })
        .catch((err) => {
          console.log(err, "INI ERROR ADDCOURSE");
          const message = err.message.join(", ");
          alertError(message);
        });
    },

    add() {
      this.videos.push({
        file: "",
      });
      console.log(this.videos);
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

<style>
#AddCourse .card {
  min-width: 600px;
}

#AddCourse span {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}

#AddCourse .btn-create {
  background-color: #eb5e0b;
  color: #f8f1f1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#AddCourse .btn-create:hover {
  background-color: #ce5109;
}

#AddCourse .btn-back {
  background-color: #6c757d;
  color: #f8f1f1;
}

#AddCourse .btn-back:hover {
  background-color: #5c636a;
}
</style>
