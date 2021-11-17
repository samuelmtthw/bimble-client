<template>
  <section id="AdminCourses">
    <div class="d-flex justify-content-between mb-4">
      <router-link to="/add-course">
        <button class="addButton btn">+ Add Course</button></router-link
      >
      <div class="d-flex">
        <form @submit.prevent="fetchCoursesAdmin">
          <input
            type="text"
            v-model="search"
            class="form-control d-inline-block mx-1"
            placeholder="Course Name"
            @change="setQueryParams"
          />
          <input type="submit" value="Search" class="btn addButton" />
        </form>
      </div>
    </div>
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
    <table class="w-100">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Category</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <CourseRow
          v-for="course in courses"
          :key="course.id"
          :course="course"
          @updateStatus="fetchCoursesAdmin"
        />
      </tbody>
    </table>
  </section>
</template>

<script>
import { alertError, alertLoading, swalDone } from "../apis/swal";
import CourseRow from "@/components/CourseRow.vue";

export default {
  name: "AdminCourses",
  data() {
    return {
      courses: [],
      page: 1,
      totalPage: "",
      search: "",
    };
  },
  methods: {
    changePage(event) {
      const targetPage = event.target.innerHTML;
      this.page = targetPage;
      this.setQueryParams();
      this.fetchCoursesAdmin();
    },
    fetchCoursesAdmin() {
      const payload = {
        page: this.page,
        search: this.search,
      };
      alertLoading();
      this.$store
        .dispatch("fetchCoursesAdmin", payload)
        .then((result) => {
          this.courses = result.course;
          this.totalPage = result.totalPage;
          if (JSON.parse(JSON.stringify(this.courses)).length === 0) {
            this.page = 1;
            this.setQueryParams();
            swalDone();
          }
          swalDone();
        })
        .catch((err) => {
          alertError(err.message);
        });
    },
    setQueryParams() {
      let query = {
        page: this.page,
      };

      query.search = this.search;

      this.$router
        .push({
          query: Object.assign({}, this.$route.query, query),
        })
        .catch(() => {});
      this.fetchCoursesAdmin();
    },

    getQueryParams() {
      const { page, search: name } = this.$route.query;

      this.page = page || 1;
      this.search = name;
    },
  },
  created() {
    this.getQueryParams();
    this.fetchCoursesAdmin();
  },
  components: {
    CourseRow,
  },
};
</script>

<style>
#AdminCourses .addButton {
  color: #ffffff;
  background-color: #fc7901;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

#AdminCourses .addButton:hover {
  background-color: #eb5e0b;
}

#AdminCourses table th {
  padding: 0 5px 5px 5px;
  font-size: 1.1em;
}

#AdminCourses table td {
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

#AdminCourses .actionButton {
  background-color: #a3d2ca;
}
</style>
