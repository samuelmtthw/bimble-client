<template>
  <section
    id="UpdateCourse"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper d-flex justify-content-center">
      <div class="card p-5 rounded">
        <form @submit.prevent="updateCourse" class="d-flex flex-column">
          <h2 class="mb-4">Update Course</h2>

          <span>Course Name </span>
          <input type="text" v-model="name" class="form-control mb-3" />

          <span>Description: </span>
          <textarea
            v-model="description"
            cols="30"
            rows="10"
            class="form-control mb-3"
          />

          <span>Price: </span>
          <input type="number" v-model="price" class="form-control mb-3" />

          <span>Thumbnail Url: </span>
          <input type="url" v-model="thumbnailUrl" class="form-control mb-3" />

          <span>Difficulty </span>
          <select v-model="difficulty" class="form-select mb-3">
            <option value="" disabled>Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <span>Category </span>
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

          <input type="submit" value="Update" class="form-control mt-3 btn" />
          <router-link to="/admin">
            <button class="form-control mt-3 btn btn-back">Back</button>
          </router-link>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError, alertSuccess } from "../../apis/swal";
export default {
  name: "UpdateCourse",
  data: function () {
    return {
      categories: [],
      name: "",
      description: "",
      price: "",
      thumbnailUrl: "",
      difficulty: "",
      CategoryId: "",
    };
  },
  methods: {
    updateCourse() {
      const payload = {
        name: this.name,
        description: this.description,
        price: this.price,
        thumbnailUrl: this.thumbnailUrl,
        difficulty: this.difficulty,
        CategoryId: this.CategoryId,
        courseId: this.$route.params.courseId,
      };

      this.$store
        .dispatch("editCourseAdmin", payload)
        .then((result) => {
          alertSuccess(`Course with id ${result.id} has been updated!`);
          this.$router.push("/admin");
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
    fetchCoursesDetailAdmin() {
      this.$store
        .dispatch("fetchCoursesDetailAdmin", {
          courseId: this.$route.params.courseId,
        })
        .then((result) => {
          this.name = result.name;
          this.description = result.description;
          this.price = result.price;
          this.thumbnailUrl = result.thumbnailUrl;
          this.difficulty = result.difficulty;
          this.CategoryId = result.CategoryId;
        })
        .catch((err) => {
          alertError(err.message);
          this.$router.push("/admin");
        });
    },
    fetchCategoriesAdmin() {
      this.$store
        .dispatch("fetchCategoriesAdmin")
        .then((result) => {
          this.categories = result;
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
  },
  created() {
    this.fetchCoursesDetailAdmin();
    this.fetchCategoriesAdmin();
  },
};
</script>

<style>
#UpdateCourse .card {
  min-width: 600px;
}

#UpdateCourse span {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}

#UpdateCourse .btn {
  background-color: #a3d2ca;
  color: #eb5e0b;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}
#UpdateCourse .btn:hover {
  background-color: #8fcac0;
}
#UpdateCourse .btn-back {
  background-color: #6c757d;
  color: #f8f1f1;
}
#UpdateCourse .btn-back:hover {
  background-color: #5c636a;
}
</style>
