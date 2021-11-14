<template>
  <section id="AdminCourses">
    <button
      class="addButton btn mb-4"
      v-if="!showForm"
      @click.prevent="changeForm(true)"
    >
      + Add Category
    </button>
    <form v-if="showForm" @submit.prevent="createCategoryAdmin" class="mb-4">
      <input
        type="text"
        class="form-control d-inline-block"
        placeholder="New Category"
        v-model="name"
      />
      <input type="submit" value="Add" class="btn mx-3 categoryButton" />
      <button @click.prevent="changeForm(false)" class="btn cancelButton">
        Cancel
      </button>
    </form>
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
              <button
                class="btn btn-danger w-25"
                @click="deleteCategory(category.id)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import { alertError, alertSuccess } from "../apis/swal";
export default {
  name: "AdminCategories",
  data() {
    return {
      categories: [],
      showForm: false,
      name: "",
    };
  },
  methods: {
    deleteCategory(categoryId) {
      Swal.fire({
        title: "Are you sure?",
        text: `You will delete the category and courses with categoryId: ${categoryId}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store
            .dispatch("deleteCategoryAdmin", { categoryId })
            .then((result) => {
              this.fetchCategoriesAdmin();
              alertSuccess(result.message);
            })
            .catch((err) => {
              alertError(err.message);
            });
        } else {
          alertSuccess("Processs canceled");
        }
      });
    },
    changeForm(status) {
      this.showForm = status;
    },
    createCategoryAdmin() {
      this.$store
        .dispatch("createCategoryAdmin", { name: this.name })
        .then((result) => {
          this.fetchCategoriesAdmin();
          alertSuccess(`Category ${result.name} has been created!`);
        })
        .catch((err) => {
          alertError(err.message);
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
    this.fetchCategoriesAdmin();
  },
};
</script>

<style>
#AdminCourses input[type="text"] {
  width: 250px;
}

#AdminCourses .categoryButton {
  background-color: #eb5e0b;
  color: #f8f1f1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#AdminCourses .categoryButton:hover {
  background-color: #ce5109;
}

#AdminCourses .cancelButton {
  background-color: #6c757d;
  color: #f8f1f1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}
#AdminCourses .cancelButton:hover {
  background-color: #5c636a;
}
</style>
