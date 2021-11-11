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
            /><label class="d-inline-block">{{ category.name }}</label>
          </div>
          <h5 class="mt-4">Order By</h5>
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
          <h5 class="mt-4">Search</h5>
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
        <div class="col-10">
          <h3 class="mb-3">Courses</h3>
          <div class="d-flex flex-row flex-wrap">
            <CourseCard
              v-for="course in courses"
              :key="course.id"
              :course="course"
            />
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
import CourseCard from "../components/CourseCard.vue";

export default {
  name: "CoursesPage",
  data: function () {
    return {
      courses: [
        {
          id: 1,
          name: "Program Linear",
          description:
            "Program Linear adalah bagian matematika yang membahas cara menentukan nilai optimum suatu fungsi – dinamakan fungsi obyektif atau fungsi tujuan – pada suatu sistem yang dibatasi beberapa kendala./nAda dua macam nilai optimum yang akan ditentukan, yaitu nilai maksimum dan nilai minimum.",
          price: 145000,
          thumbnailUrl:
            "https://i.ytimg.com/vi/WJr11FExG7s/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAImD8rRbQR7cuFCw3Z_xsjLlr1Tg",
          difficulty: "medium",
          status: "active",
          rating: 8,
          CategoryId: 1,
        },
        {
          id: 2,
          name: "Dimensi Tiga",
          description:
            "Yang dimaksud dengan unsur-unsur ruang adalah titik, garis, dan bidang./nDalam Geometri, titik, garis, dan bidang, termasuk dalam aksioma atau postulat./nAksioma adalah pernyataan yang diterima sebagai kebenaran secara umum tanpa perlu adanya pembuktian.",
          price: 130000,
          thumbnailUrl:
            "https://i.ytimg.com/vi/strzhKqA_sQ/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCVGKk89pHJwWo1ORt8hzlH1iM9rg",
          difficulty: "easy",
          status: "active",
          rating: 8,
          CategoryId: 1,
        },
      ],
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
      page: 1,
    };
  },
  methods: {
    clear() {
      this.categoryId = "";
      this.orderBy = "";
      this.name = "";
    },
    fetchCoursesUser() {
      // const payload = {
      //   categoryId: this.categoryId,
      //   orderBy: this.orderBy,
      //   name: this.name,
      //   page: this.page,
      // };
      // console.log(payload);
      // this.$store
      //   .dispatch("fetchCoursesUser", payload)
      //   .then((result) => {
      // this.courses = result;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
  created() {
    this.fetchCoursesUser();
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
</style>
