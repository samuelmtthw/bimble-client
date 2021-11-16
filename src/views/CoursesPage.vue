<template>
  <section
    id="CoursesPage"
    class="stationary-page d-flex justify-content-center"
  >
    <div class="wrapper">
      <div class="row">
        <form class="col-2" @submit.prevent="fetchCoursesUser">
          <h5 class="mb-3">Category</h5>
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
              @change="setQueryParams"
            /><label class="d-inline-block">{{ category.name }}</label>
          </div>
          <h5 class="mt-4">Difficulty</h5>
          <div class="category mt-2">
            <input
              type="radio"
              name="difficulty"
              value="easy"
              v-model="difficulty"
              @change="setQueryParams"
            />
            <label class="d-inline-block">Easy</label>
          </div>
          <div class="category mt-2">
            <input
              type="radio"
              name="difficulty"
              value="medium"
              v-model="difficulty"
              @change="setQueryParams"
            />
            <label class="d-inline-block">Medium</label>
          </div>
          <div class="category mt-2">
            <input
              type="radio"
              name="difficulty"
              value="hard"
              v-model="difficulty"
              @change="setQueryParams"
            />
            <label class="d-inline-block">Hard</label>
          </div>
          <h5 class="mt-4">Order By Price</h5>
          <div class="category mt-2">
            <input
              type="radio"
              name="price"
              value="asc"
              v-model="price"
              @change="setQueryParams"
            />
            <label class="d-inline-block">Low to High</label>
          </div>
          <div class="category mt-2">
            <input
              type="radio"
              name="price"
              value="desc"
              v-model="price"
              @change="setQueryParams"
            />
            <label class="d-inline-block">High to Low</label>
          </div>
          <h5 class="mt-4">Search</h5>
          <div class="category mt-2 mb-2">
            <input
              type="search"
              name="orderBy"
              v-model="search"
              @change="setQueryParams"
              class="form-control mb-3"
              placeholder="Course Name"
            />
          </div>
          <input type="submit" class="form-control mb-1" value="Search" />
          <button class="form-control btn-secondary" @click="clear">
            Clear
          </button>
        </form>
        <div class="col-10">
          <h3 class="mb-3">Courses</h3>
          <ul class="pagination justify-content-start mb-3">
            <li
              class="page-item"
              :class="idx + 1 === Number(page) ? 'active' : ''"
              v-for="(item, idx) in totalPage"
              :key="idx"
            >
              <a class="page-link" @click.prevent="changePage">{{ idx + 1 }}</a>
            </li>
          </ul>

          <div class="d-flex flex-row flex-wrap">
            <CourseCard
              v-for="course in courses"
              :key="course.id"
              :course="course"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError } from "../apis/swal";
import CourseCard from "../components/CourseCard.vue";

export default {
  name: "CoursesPage",
  data: function () {
    return {
      courses: [],
      categories: [],
      page: 1,
      totalPage: "",
      search: "",
      categoryId: "",
      price: "",
      difficulty: "",
    };
  },
  methods: {
    changePage(event) {
      const targetPage = event.target.innerHTML;
      this.page = targetPage;
      this.setQueryParams();
      this.fetchCoursesUser();
    },
    clear() {
      this.search = "";
      this.categoryId = "";
      this.price = "";
      this.difficulty = "";
      this.$router.replace({ name: "Courses" }).catch(() => {});
    },
    fetchCategoriesUser() {
      this.$store
        .dispatch("fetchCategoriesUser")
        .then((result) => {
          this.categories = result;
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
    fetchCoursesUser() {
      const payload = {
        page: this.page,
        search: this.search,
        categoryId: this.categoryId,
        price: this.price,
        difficulty: this.difficulty,
      };

      this.$store
        .dispatch("fetchCoursesUser", payload)
        .then((result) => {
          this.courses = result.course;
          this.totalPage = result.totalPage;
          console.log(JSON.parse(JSON.stringify(this.courses)).length);
          if(JSON.parse(JSON.stringify(this.courses)).length === 0) {
            this.page = 1
            this.setQueryParams()
          }
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
    setQueryParams() {
      let query = {
        page: this.page,
      };

      if (this.categoryId !== "") query.categoryId = this.categoryId;
      if (this.search !== "") query.search = this.search;
      if (this.price !== "") query.price = this.price;
      if (this.difficulty !== "") query.difficulty = this.difficulty;

      this.$router
        .push({
          query: Object.assign({}, this.$route.query, query),
        })
        .catch(() => {});

      this.fetchCoursesUser();
    },

    getQueryParams() {
      const {
        categoryId,
        page,
        price,
        difficulty,
        search: name,
      } = this.$route.query;

      this.page = page || 1;
      this.categoryId = categoryId;
      this.difficulty = difficulty;
      this.price = price;
      this.search = name;
    },
  },
  created() {
    this.getQueryParams();
    this.fetchCoursesUser();
    this.fetchCategoriesUser();
  },
  components: {
    CourseCard,
  },
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
#CoursesPage input[type="submit"]:hover {
  background-color: #ce5109;
}

#CoursesPage button {
  color: #f8f1f1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#CoursesPage h3 {
  margin-left: 15px;
}

#CoursesPage label {
  font-family: "Poppins", sans-serif;
}

#CoursesPage ul {
  margin-left: 15px;
}
</style>
