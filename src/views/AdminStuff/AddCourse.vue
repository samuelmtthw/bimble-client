<template>
  <section id="AddCourse" class="stationary-page d-flex justify-content-center">
    <div class="wrapper d-flex justify-content-center">
      <div class="card p-5 rounded">
        <form
          @submit.prevent="addCourse"
          enctype="multipart/form-data"
          class="d-flex flex-column"
        >
          <h2 class="mb-4">Add Course</h2>
          <label>Name </label>
          <input type="text" name="name" class="form-control mb-3" required />

          <label>Description</label>
          <textarea name="description" class="form-control mb-3" required />

          <label>Price</label>
          <input
            type="number"
            name="price"
            class="form-control mb-3"
            required
          />

          <label>Thumbnail URL </label>
          <input
            type="url"
            name="thumbnailUrl"
            class="form-control mb-3"
            required
          />

          <label>Difficulty </label>
          <select name="difficulty" class="form-select mb-3" required>
            <option value="" disabled>Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <label>Category </label>
          <select name="CategoryId" class="form-select mb-3" required>
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
              required
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
              name="Videos"
              @change="addVideo($event, k)"
              title="test"
              :id="`addFileButton${k}`"
              style="display: none"
            />
            <span>
              <button
                class="btn btn-danger mt-2"
                @click.prevent="remove(k)"
                v-show="k || (!k && videos.length > 0)"
              >
                Remove
              </button>
              <br />
              <button
                class="btn btn-create mt-2"
                @click.prevent="add(k)"
                v-show="k == videos.length - 1 && videos.length !== 3"
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
import { alertError, alertLoading, LoadingDone } from "../../apis/swal";
// import Swal from "sweetalert2";

export default {
  name: "AddCourse",
  data: function () {
    return {
      videos: [{ file: "" }],
      categories: [],
    };
  },
  methods: {
    addCourse(e) {
      const createdCourse = new FormData(e.target);
      alertLoading();
      this.$store
        .dispatch("createCourseAdmin", createdCourse)
        .then(() => {
          this.$router.push("/admin");
          LoadingDone();
        })
        .catch((err) => {
          const message = err.message.join(", ");
          alertError(message);
        });
    },

    add() {
      this.videos.push({
        file: "",
      });
    },
    remove(index) {
      this.videos.splice(index, 1);
    },
    addVideo(event, index) {
      if (index < 3) {
        this.videos[index].file = event.target.files[0];
      }
    },
  },
  created() {
    this.$store
      .dispatch("fetchCategoriesAdmin")
      .then((result) => {
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
