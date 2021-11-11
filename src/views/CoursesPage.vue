<template>
  <section
    id="CoursesPage"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="row">
        <form class="col-2" @submit.prevent="fetchCoursesUser">
          <h4 class="mb-3">Category</h4>
          <div
            class="category mt-2"
            v-for="category in categories"
            :key="category.id"
          >
            <input
              type="radio"
              name="categoryId"
              :value="category.id"
              v-model="categoryId"
            /><label class="d-inline-block">{{ category.name }}</label>
          </div>
          <h4 class="mt-4">Order By</h4>
          <div class="category mt-2">
            <input
              type="radio"
              name="orderBy"
              value="price"
              v-model="orderBy"
            />
            <label class="d-inline-block">Price</label>
          </div>
          <div class="category mt-2">
            <input
              type="radio"
              name="orderBy"
              value="difficulty"
              v-model="orderBy"
            />
            <label class="d-inline-block">Difficulty</label>
          </div>
          <h4 class="mt-4">Search</h4>
          <div class="category mt-2 mb-2">
            <input
              type="search"
              name="orderBy"
              value="price"
              v-model="name"
              class="form-control"
            />
          </div>
          <input type="submit" class="form-control mb-1" value="Search" />
          <button class="form-control btn-secondary" @click="clear">
            Clear
          </button>
        </form>
        <div class="col-10">hello</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CoursesPage",
  data: function () {
    return {
      courses: [],
      categories: [
        {
          id: 1,
          name: "Matematika",
        },
        {
          id: 2,
          name: "FIsika",
        },
        {
          id: 3,
          name: "Kimia",
        },
        {
          id: 4,
          name: "Biologi",
        },
        {
          id: 5,
          name: "Ekonomi",
        },
        {
          id: 6,
          name: "Geografi",
        },
        {
          id: 7,
          name: "Sejarah",
        },
        {
          id: 8,
          name: "Sosiologi",
        },
      ],
      categoryId: "",
      orderBy: "",
      name: "",
      // page: "",
    };
  },
  methods: {
    clear() {
      this.categoryId = "";
      this.orderBy = "";
      this.name = "";
    },
    getCourses() {
      this.$store
        .dispatch("getCourses")
        .then((result) => {
          console.log(result);
          // this.courses = result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created: {},
};
</script>

<style>
#CoursesPage input[type="radio"] {
  margin-right: 15px;
}

#CoursesPage input[type="submit"] {
  background-color: #eb5e0b;
  color: #f8f1f1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#CoursesPage button {
  color: #f8f1f1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#CoursesPage label {
  font-family: "Poppins", sans-serif;
}
</style>
